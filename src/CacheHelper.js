
/**
 * Builds the Cache Helper  object.
 * @param {object} cacheService The CacheService Object.
 * @return {object} The Cache Helper Object.
 */
function CacheHelper(cacheService, utils, urlFetchApp, utilities) {
  let localCache = {};
  const cache = cacheService.getScriptCache();
  
  const CACHE_TIME = 1800;
  const CHUNKSIZE = 1024 * 90;
  
  // Split string in chunks of fixed size, adapted to generate object with keys
  // https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
  const chunkSubstr = function(str, prefix, size) {
    const numChunks = Math.ceil(str.length / size);
    let chunks = {};
    
    // Chunk named as prefix key will be the total count of chunks
    chunks[prefix] = JSON.stringify(numChunks);
    
    const itemPrefix = prefix + '_';
  
    // Each chunk key will be defined by {original key}_{chunk number}
    // i = chunk number, o = current string index
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[itemPrefix + i] = str.substr(o, size);
    }
  
    return chunks;
  }
  
  this.put = function(key, value) {
    const json = JSON.stringify(value);
    let chunks = {};
    if(json.length > CHUNKSIZE) {
      chunks = chunkSubstr(json, key, CHUNKSIZE);
    } else {
      chunks[key] = "1";
      chunks[key + '_0'] = json;
    }
    
    cache.putAll(chunks, CACHE_TIME);
    localCache[key] = value;
  }
  
  this.get = function(key) {
    if(localCache[key]) {
      return localCache[key];
    }
    let nChunks = cache.get(key);
    if(nChunks === null) {
      return null;
    } else {
      nChunks = JSON.parse(nChunks);
    }
    const keyPrefix = key + '_';
    let keys = [];
    for(let i = 0; i < nChunks; i++) {
      keys.push(keyPrefix + i);
    }
    const chunks = cache.getAll(keys);
    const chunkLength = Object.keys(chunks).length;
    // Some cache chunk may be deleted, if that happens, remove all chunks and main key to free unusable space
    if(!chunkLength) {
      keys.push(key);
      cache.removeAll(keys);
      return null;
    }
    const json = keys.map(i => chunks[i]).join("");
    const result = JSON.parse(json);
    if(result) {
      localCache[key] = result;
    }
    return result;
  }
  
  this.fetchRawUrl = function(url) {
    const cacheUrlHash = this.getHash("raw_url_" + url);
    let response = this.get(cacheUrlHash);
    if(!response) {
      response = null;
      try {
        response = urlFetchApp.fetch(url);
        response = response.getContentText();
      } catch (e) {
        let strError = JSON.stringify(e);
        let error = "";
        if (strError.indexOf("timeout") > 0) {
          error = "Se ha producido un timeout consultando la API, inténtelo más tarde";
        } else if(strError.indexOf("not_found") > 0) {
          error = "El dataset seleccionado no existe. Pruebe con otro.";
        } else {
          error = "Error mientras se obtienen los datos de la API";
        }
        utils.throwConectorError(e, error + " - " + url);
        throw e;
      }
      this.put(cacheUrlHash, response);
    }
    return response;
  }
  
  this.fetchJsonUrl = function(url) {
    const cacheUrlHash = this.getHash("json_url_" + url);
    let response = this.get(cacheUrlHash);
    if(!response) {
      response = null;
      try {
        response = urlFetchApp.fetch(url);
        response = response.getContentText();
        response = JSON.parse(response);
      } catch (e) {
        let strError = JSON.stringify(e);
        let error = "";
        if (strError.indexOf("timeout") > 0) {
          error = "Se ha producido un timeout consultando la API, inténtelo más tarde";
        } else if(strError.indexOf("not_found") > 0) {
          error = "El dataset seleccionado no existe. Pruebe con otro.";
        } else {
          error = "Error mientras se obtienen los datos de la API";
        }
        utils.throwConectorError(e, error + " - " + url);
        throw e;
      }
      this.put(cacheUrlHash, response);
    }
    return response;
  }
  
  this.getHash = function(stringToGetHashFrom) {
    return utilities.base64EncodeWebSafe(utilities.computeDigest(utilities.DigestAlgorithm.MD5, stringToGetHashFrom, utilities.Charset.UTF_8));
  }
    
  this.getObjectHash = function(objectToGetHashFrom) {
    if(typeof objectToGetHashFrom == 'object') {
      if(typeof objectToGetHashFrom.length == 'undefined') {
        const keys = Object.keys(objectToGetHashFrom);
        keys.sort();
        let str = [];
        for(let key of keys) {
          str.push(key + '=' + this.getObjectHash(objectToGetHashFrom[key]));
        }
        return str.join(';');
      } else {
        return objectToGetHashFrom.map(i => this.getObjectHash(i)).join(';');
      }
    } else if(typeof objectToGetHashFrom == 'string') {
      return objectToGetHashFrom;
    } else {
      return JSON.stringify(objectToGetHashFrom);
    }
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = CacheHelper;
}
