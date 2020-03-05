function Utils() {

  this.getUrl = function(configParams) {
    switch(configParams.indicatorType){
      case "indicatorSelector":
        return configParams.indicator;
      case "indicatorInstanceSelector":
        return configParams.indicatorInstance;
      case "inputUrlSelector":
        return configParams.inputUrl;
      default:
        return;
    }
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
        if (configParams.inputUrl.indexOf("/api/indicators/v1.0/indicators/") > -1) {
          col = { id: response.id, name: response.title.es };
        } else if (configParams.inputUrl.indexOf("/api/indicators/v1.0/indicatorsSystems/") > -1) {
          if (configParams.measureColumns) {
            col = { id: 'indicator_id', name: response.subjectCode };
          } else {
            col = { id: 'indicator_id', name: response.title.es };
          }
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