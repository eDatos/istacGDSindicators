function Utils() {

  this.getUrl = function(configParams) {
    let url;
    switch(configParams.indicatorType){
      case "indicatorSelector":
        url = configParams.indicator;
        break;
      case "indicatorInstanceSelector":
        url = configParams.indicatorInstance;
        break;
      case "inputUrlSelector":
        url = configParams.inputUrl;
        let urlPath = url.indexOf('?') > 0 ? url.substring(0, url.indexOf('?')) : url;
        let urlQuerystring = url.indexOf('?') > 0 ? url.substring(url.indexOf('?')) : '';
        if(urlPath.match(/\/data\/*$/)) {
          urlPath = urlPath.replace(/\/data\/*$/, "");
        }
        decodedUrl = urlPath + urlQuerystring;
        do {
          url = decodedUrl;
          decodedUrl = decodeURI(url);
        } while(url != decodedUrl);
        url = encodeURI(decodedUrl);
        break;
    }
    return url;
  }
  
  this.getColNameAndId = function(response, configParams) {
    let col = {};
    switch (configParams.indicatorType) {
      case "indicatorSelector":
        col = { id: response.id, name: response.title.es };
        break;
      case "indicatorInstanceSelector":
        if (configParams.measureColumns) {
          col = { id: 'indicator_id', name: response.subjectCode };
        } else {
          col = { id: 'indicator_id', name: response.title.es };
        }
        break;
      case "inputUrlSelector":
        if (configParams.inputUrl.indexOf("/indicators/v1.0/indicators/") > -1) {
          col = { id: response.id, name: response.title.es };
        } else if (configParams.inputUrl.indexOf("/indicators/v1.0/indicatorsSystems/") > -1) {
          if (configParams.measureColumns) {
            col = { id: 'indicator_id', name: response.subjectCode };
          } else {
            col = { id: 'indicator_id', name: response.title.es };
          }
        } else {
          col = undefined;
        }
        break;
      default:
        col = undefined;
        break;
    }
    return col;
  }
  
  /*
  * Function that make an object from an array of objects using one of the attrs as the key
  */
  this.keyBy = function(object, property) {
    const newObject = {};
    for (let rowItem of Object.values(object)) {
      newObject[rowItem[property]] = rowItem;
    }
    return newObject;
  }
  
  
  /* istanbul ignore next */
  this.throwConectorError = function(exception, message) {
     DataStudioApp.createCommunityConnector()
       .newUserError()
       .setDebugText("Error while fetching data from API. Exception details: " + exception)
       .setText(message)
       .throwException();
  }

}


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = Utils;
}
