if (typeof require !== "undefined") {
  const RecodeDatesHelper = require("./RecodeDatesHelper")["default"];
  const Utils = require("./Utils")["default"];
}

function DataHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;
  const recodeDatesHelper = services.RecodeDatesHelper;
  
  const measuresIds = {
    ABSOLUTE: "",
    ANNUAL_PERCENTAGE_RATE: "_Tasa_variacion_anual",
    INTERPERIOD_PERCENTAGE_RATE: "_Tasa_variacion_interperiodica",
    ANNUAL_PUNTUAL_RATE: "_Variacion_anual",
    INTERPERIOD_PUNTUAL_RATE: "_Variacion_interperiodica"
  };
  
  /* istanbul ignore next */
  const _invertKeyValues = function(object) {
    const newObject = {};
    for(let element in object) {
      newObject[object[element]] = element;
    }
    return newObject;
  }
    
  /* istanbul ignore next */
  /**
   * Function that gets and process all the data from the ISTAC API minding the given configParams and requested fields
   * @param {object} configParams The configParams of the request.
   * @param {object} requestedFields The requested Fields to get the data from.
   * @return {list} The list with the rows of data.
   */
  this.getRows = function(configParams, requestedFields) {
    const requestedFieldsArray = requestedFields.asArray().map(i => i.getId());
    const cachedCode = cacheHelper.getHash(
      "configParams_" + cacheHelper.getObjectHash({'params': configParams, 'fields': requestedFieldsArray})
    );
    let processedRows = cacheHelper.get(cachedCode);
    if (!processedRows) {
      processedRows = this._processData(configParams, requestedFields);
      // ~ 2MB (65000 fields * 32 bytes)
      if (processedRows.length * requestedFieldsArray.length < 65000) {
        cacheHelper.put(cachedCode, processedRows);
      }
    }
    
    return processedRows;
  }
  
  this._processData = function(configParams, requestedFields) {
    const requestedFieldsArray = requestedFields.asArray().map(i => i.getId());
  
    const url = utils.getUrl(configParams);
    const indicatorsResponse = cacheHelper.fetchJsonUrl(url);
  
    const urlData = url + "/data";
    
    const indicatorsDataResponse = cacheHelper.fetchJsonUrl(urlData);
  
    const geographicalDimensions = _invertKeyValues(indicatorsDataResponse.dimension.GEOGRAPHICAL.representation.index);
    const measureDimensions = _invertKeyValues(indicatorsDataResponse.dimension.MEASURE.representation.index);
    const timeDimensions = _invertKeyValues(indicatorsDataResponse.dimension.TIME.representation.index);
  
    const indexedGeographicalRepresentations = utils.keyBy(indicatorsResponse.dimension.GEOGRAPHICAL.representation, "code");
    const indexedTimeRepresentations = utils.keyBy(indicatorsResponse.dimension.TIME.representation, "code");
  
    const geographicalLanguages = [];
    const returnedGeographicalLanguages = indicatorsResponse.dimension.GEOGRAPHICAL.representation;
    for (let i of Object.keys(returnedGeographicalLanguages[0].title)) {
      if(i != "__default__") {
        geographicalLanguages.push(i);
      }
    }
    const timeLanguages = [];
    const returnedTimeLanguages = indicatorsResponse.dimension.TIME.representation;
    for(let i of Object.keys(returnedTimeLanguages[0].title)) {
      if(i != "__default__") {
        timeLanguages.push(i);
      }
    }
  
    let tableData = [];
  
    const col = utils.getColNameAndId(indicatorsResponse, configParams);
  
    const lengthGeographical = indicatorsDataResponse.dimension.GEOGRAPHICAL.representation.size;
    for (var i = 0; i < lengthGeographical; i++) {
      const codigoGeografico = geographicalDimensions[i];
      
      const lengthTime = indicatorsDataResponse.dimension.TIME.representation.size;
      for (let j = 0; j < lengthTime; j++) {
        const codigoTemporal = timeDimensions[j];
        
        if(configParams.measureColumns) {
          let row = {};
          row.Codigo_geografico = codigoGeografico;
          row.Codigo_temporal = codigoTemporal;
  
          if(configParams.recodeDates) {
            const granularity = indexedTimeRepresentations[codigoTemporal].granularityCode;
            const date = codigoTemporal;
            row.Fecha = recodeDatesHelper.converDate(date, granularity);
          }
  
          const lengthMeasure = indicatorsDataResponse.dimension.MEASURE.representation.size;
          for(let k = 0; k < lengthMeasure; k++) {
            row[col.id + measuresIds[measureDimensions[k]]] =
              indicatorsDataResponse.observation[i * lengthTime * lengthMeasure + j * lengthMeasure + k];
          }
  
          if(configParams.showGranularity) {
            row.Granularidad_geografica =
              indexedGeographicalRepresentations[codigoGeografico].granularityCode;
            row.Granularidad_temporal =
              indexedTimeRepresentations[codigoTemporal].granularityCode;
          }
  
          if(configParams.showLabels) {
            if(!configParams.allLanguages) {
              row.Etiqueta_geografica =
                indexedGeographicalRepresentations[codigoGeografico].title.__default__;
              row.Etiqueta_temporal =
                indexedTimeRepresentations[codigoTemporal].title.__default__;
            } else {
              for(let language of geographicalLanguages) {
                row["Etiqueta_geografica_" + language] =
                  indexedGeographicalRepresentations[codigoGeografico].title[language];
              }
              for(let language of timeLanguages) {
                row["Etiqueta_temporal_" + language] =
                  indexedTimeRepresentations[codigoTemporal].title[language];
              }
            }
          }
          tableData.push({ values: requestedFieldsArray.map(i => (row[i] === null || typeof row[i] !== 'undefined') ? row[i] : '') });
        } else {
          const lengthMeasure = indicatorsDataResponse.dimension.MEASURE.representation.size;
          for (let k = 0; k < lengthMeasure; k++) {
            const codigoMedida = measureDimensions[k];
          
            let row = {};
            row.Codigo_geografico = codigoGeografico;
            row.Codigo_temporal = codigoTemporal;
            row.Codigo_medida = codigoMedida;

            if(configParams.recodeDates) {
              const granularity = indexedTimeRepresentations[codigoTemporal].granularityCode;
              const date = codigoTemporal;
              row.Fecha = recodeDatesHelper.converDate(date, granularity);
            }
            
            row[col.id] = indicatorsDataResponse.observation[i * lengthTime * lengthMeasure + j * lengthMeasure + k];
  
            if (configParams.showGranularity) {
              row.Granularidad_geografica =
                indexedGeographicalRepresentations[codigoGeografico].granularityCode;
              row.Granularidad_temporal =
                indexedTimeRepresentations[codigoTemporal].granularityCode;
            }
  
            if (configParams.showLabels) {
              if (!configParams.allLanguages) {
                row.Etiqueta_geografica = indexedGeographicalRepresentations[codigoGeografico].title.__default__;
                row.Etiqueta_temporal =
                  indexedTimeRepresentations[codigoTemporal].title.__default__;
              } else {
                for(let language of geographicalLanguages) {
                  row["Etiqueta_geografica_" + language] =
                    indexedGeographicalRepresentations[codigoGeografico].title[language];
                }
                for(let language of timeLanguages) {
                  row["Etiqueta_temporal_" + language] =
                    indexedTimeRepresentations[codigoTemporal].title[language];
                }
              }
            }
            tableData.push({ values: requestedFieldsArray.map(i => (row[i] === null || typeof row[i] !== 'undefined') ? row[i] : '') });
          }
        }
      }
    }
    return tableData;
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
    exports["__esModule"] = true;
    exports["default"] = DataHelper;
}

