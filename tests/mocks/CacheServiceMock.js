/**
 * Google cache mock
 *
 * @return {object} Mock object with multiple cache storages
 */
function CacheServiceMock() {
  this.userCache = new CacheMock();
  this.scriptCache = new CacheMock();
}

CacheServiceMock.prototype.getUserCache = function() {
  return this.userCache;
};

CacheServiceMock.prototype.getScriptCache = function() {
  return this.userCache;
};

// private

function CacheMock() {
  this.data = {};
  this.hits = 0;

  return this;
}

CacheMock.prototype.get = function(key) {
  this.hits += 1;
  let data = this.data[key];
  if (data) {
    return data.value;
  }

  return null;
};

CacheMock.prototype.put = function(key, value, cacheTime) {
  this.data[key] = { value: value, cachedFor: cacheTime };
};


CacheMock.prototype.putAll = function (chunks, cacheTime) {
  for (var key of Object.keys(chunks)) {
    this.data[key] = { value: chunks[key], cachedFor: cacheTime }
  }
}




/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = CacheServiceMock;
}

