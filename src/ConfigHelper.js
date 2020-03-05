
function ConfigHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;
  
  const METADATA_ENDPOINT = "https://www3.gobiernodecanarias.org/istac/api/cmetadata/v1.0/properties.json";
  const INDICATOR_KEY = "indicators.rest.external";
  const END_OF_SUBJECT_ENDPOINT = "/v1.0/subjects";
  const END_OF_INDICATORS_ENDPOINT = "/v1.0/indicators?limit=1000&orderBy=ID%20ASC&q=subjectCode%20EQ%20";
  const END_OF_INDICATORS_SYSTEM_ENDPOINT = "/v1.0/indicatorsSystems";
  const END_OF_INDICATORS_INSTANCES_ENDPOINT = "/v1.0/indicatorsSystems/INDICATOR_CODE/indicatorsInstances?limit=1000";
  
  const sortByTitle = function(array) {
    return array.sort((a, b) => {
      const x = a.title.es;
      const y = b.title.es;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  
  const getEndpoint = function(key, addedString) {
    const parsedResponse = cacheHelper.fetchJsonUrl(METADATA_ENDPOINT);
    return utils.keyBy(parsedResponse.property, "key")[key].value + addedString;
  }
  
  const getAndProcessData = function(url) {
    const dataResponse = cacheHelper.fetchJsonUrl(url);
    sortedData = sortByTitle(dataResponse.items);
    return sortedData;
  }
  
  const getProcessAndCacheData = function(cachePrefix, url) {
    const cacheKey = cacheHelper.getHash(cachePrefix + "_" + url);
    let cached = cacheHelper.get(cacheKey);
    if(!cached) {
       cached = getAndProcessData(url);
       if(cached) {
         cacheHelper.put(cacheKey, cached);
       }
    }
    return cached;
  }
  
  this.getSubjects = function() {
    return getProcessAndCacheData("subjects", getEndpoint(INDICATOR_KEY, END_OF_SUBJECT_ENDPOINT));
  }
  
  this.getIndicators = function(subject) {
    return getProcessAndCacheData("indicators", getEndpoint(INDICATOR_KEY, END_OF_INDICATORS_ENDPOINT) + subject);
  }
  
  this.getIndicatorsSystems = function() {
    return getProcessAndCacheData("indicatorsSystem", getEndpoint(INDICATOR_KEY, END_OF_INDICATORS_SYSTEM_ENDPOINT));
  }
  
  this.getIndicatorsInstances = function(indicatorSystem) {
    return getProcessAndCacheData("indicatorsSystem", getEndpoint(INDICATOR_KEY, END_OF_INDICATORS_INSTANCES_ENDPOINT).replace("INDICATOR_CODE", indicatorSystem));
  }
}


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = ConfigHelper;
}