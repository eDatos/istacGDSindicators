function SchemaHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;
  
  const measuresIds = {
    ABSOLUTE: "",
    ANNUAL_PERCENTAGE_RATE: "_Tasa_variacion_anual",
    INTERPERIOD_PERCENTAGE_RATE: "_Tasa_variacion_interperiodica",
    ANNUAL_PUNTUAL_RATE: "_Variacion_anual",
    INTERPERIOD_PUNTUAL_RATE: "_Variacion_interperiodica"
  };
  
  const columnsTime = [
    "Codigo_temporal",
    "Granularidad_temporal",
    "Etiqueta_temporal",
    "Fecha"
  ];
  const columnsGeographic = [
    "Codigo_geografico",
    "Granularidad_geografica",
    "Etiqueta_geografica"
  ];
  
  const _buildCols = function(configParams, columnsId, languages) {
    let returnCols = [];
    returnCols.push({
      id: columnsId[0],
      name: columnsId[0],
      columnRole: "dimension",
      dataType: "string"
    });
    if (configParams.showGranularity) {
      returnCols.push({
        id: columnsId[1],
        name: columnsId[1],
        columnRole: "dimension",
        dataType: "string"
      });
    }
  
    if (configParams.showLabels) {
      if (!configParams.allLanguages) {
        returnCols.push({
          id: columnsId[2],
          name: columnsId[2],
          columnRole: "dimension",
          dataType: "string"
        });
      } else {
        for (i = 0; i < languages.length; i++) {
          returnCols.push({
            id: columnsId[2] + "_" + languages[i],
            name: columnsId[2] + "_" + languages[i],
            columnRole: "dimension",
            dataType: "string"
          });
        }
      }
    }
  
    if (columnsId[3]) {
      if (configParams.recodeDates) {
        returnCols.push({
          id: columnsId[3],
          name: columnsId[3],
          columnRole: "dimension",
          dataType: "date"
        });
      }
    }
  
    return returnCols;
  }

  /**
   * Function that generates the correct Schema minding the given configParams.
   * @param {object} configParams The configParams of the request.
   * @return {list} The list with the Schema.
   */
  this.getColumns = function(configParams) {
    if(configParams.indicatorType == "inputUrlSelector") {
      this._checkInputURL(configParams);
    }
  
    const url = utils.getUrl(configParams);
    const code = cacheHelper.getHash("schema_data_" + cacheHelper.getObjectHash(configParams));
    let mainCols = cacheHelper.get(code);
    if(!mainCols) {
      mainCols = this._processColumns(url, configParams);
      cacheHelper.put(code, mainCols);
    }
    
    return mainCols;
  };
  
  
  this._processColumns = function(url, configParams) {
  
    const indicatorsResponse = cacheHelper.fetchJsonUrl(url);
  
    let geographicalLanguages = [];
    let returnedGeographicalLanguages = indicatorsResponse.dimension.GEOGRAPHICAL.representation;
    
    for(let i of Object.keys(returnedGeographicalLanguages[0].title)) {
      if(i != "__default__") {
        geographicalLanguages.push(i);
      }
    }
    
    let timeLanguages = [];
    let returnedTimeLanguages = indicatorsResponse.dimension.TIME.representation;
    
    for(let i of Object.keys(returnedTimeLanguages[0].title)) {
      if(i != "__default__") {
        timeLanguages.push(i);
      }
    }
    
    let mainCols = _buildCols(configParams, columnsGeographic, geographicalLanguages);
    let timeCols = _buildCols(configParams, columnsTime, timeLanguages);
  
    for(let column of timeCols) {
      mainCols.push(column);
    }
  
    const col = utils.getColNameAndId(indicatorsResponse, configParams);
    
    if(configParams.measureColumns) {
      mainCols.push({id: col.id, name: col.name, columnRole: "metric", dataType: "float"});
      const measureRepresentation = indicatorsResponse.dimension.MEASURE.representation;
      for(let i = 1; i < measureRepresentation.length; i++) {
        mainCols.push({
          id: col.id + measuresIds[measureRepresentation[i].code],
          name: col.name + measuresIds[measureRepresentation[i].code],
          columnRole: "metric",
          dataType: "float"
        });
      }
    } else {
      mainCols.push({
        id: "Codigo_medida",
        name: "Codigo_medida",
        columnRole: "dimension",
        dataType: "string"
      });
      mainCols.push({
        id: col.id,
        name: col.name,
        columnRole: "metric",
        dataType: "float"
      });
    }
  
    return mainCols;
  }
  
  this._checkInputURL = function(configParams) {
    let error = undefined;
    if(!configParams.inputUrl) {
      error = "URL field must not be empty";
    } else if (
      (configParams.inputUrl.indexOf("https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicatorsSystems/") !== 0) &&
      (configParams.inputUrl.indexOf("https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/")!== 0)
    ) {
      error = "URL field entered is not correct for this connector";
    }
    if(error) {
      const message =
        "Por favor, asegúrese de que el campo URL no está vacío y que la URL tiene el siguiente formato: " +
        "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/SUPERFICIE o https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicatorsSystems/C00075A/indicatorsInstances/4257778c-a75a-4d04-a9df-b2f0c1263bde";
      utils.throwConectorError(error, message);
    }
  }

}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = SchemaHelper;
}

