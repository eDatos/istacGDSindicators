if (typeof require !== "undefined") {
  var SchemaHelper = require("../src/SchemaHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
}

let schemaHelper;

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  schemaHelper = new SchemaHelper({
    UrlFetchApp: urlFetchApp,
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });
});


test("getColumns: without extra configuration, just indicator", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    indicatorType: "indicatorSelector", 
    subject:"021"
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_medida", "name": "Codigo_medida" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});


test("getColumns: without showGranularity, recodeDates, showLables and all languages", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    measureColumns:true,
    indicatorType: "indicatorSelector", 
    subject:"021"
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_anual", "name": "Población_Tasa_variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_interperiodica", "name": "Población_Tasa_variacion_interperiodica" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_anual", "name": "Población_Variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_interperiodica", "name": "Población_Variacion_interperiodica" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});


test("getColumns: without measureColumns, recodeDates, showLables and all languages", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    showGranularity:true, 
    indicatorType: "indicatorSelector", 
    subject:"021"
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_geografica", "name": "Granularidad_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_temporal", "name": "Granularidad_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_medida", "name": "Codigo_medida" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});


test("getColumns: without recodeDates, showLables and all languages", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    showGranularity:true, 
    indicatorType: "indicatorSelector", 
    subject:"021", 
    measureColumns:true
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_geografica", "name": "Granularidad_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_temporal", "name": "Granularidad_temporal" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_anual", "name": "Población_Tasa_variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_interperiodica", "name": "Población_Tasa_variacion_interperiodica" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_anual", "name": "Población_Variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_interperiodica", "name": "Población_Variacion_interperiodica" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});

test("getColumns: without showLables and all languages", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    showGranularity:true, 
    indicatorType: "indicatorSelector", 
    subject:"021", 
    recodeDates:true, 
    measureColumns:true
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_geografica", "name": "Granularidad_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_temporal", "name": "Granularidad_temporal" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_anual", "name": "Población_Tasa_variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_interperiodica", "name": "Población_Tasa_variacion_interperiodica" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_anual", "name": "Población_Variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_interperiodica", "name": "Población_Variacion_interperiodica" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});



test("getColumns: without all languages", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    showGranularity:true, 
    showLabels:true, 
    indicatorType: "indicatorSelector", 
    subject:"021", 
    recodeDates:true, 
    measureColumns:true
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_geografica", "name": "Granularidad_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_geografica", "name": "Etiqueta_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_temporal", "name": "Granularidad_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_temporal", "name": "Etiqueta_temporal" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_anual", "name": "Población_Tasa_variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_interperiodica", "name": "Población_Tasa_variacion_interperiodica" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_anual", "name": "Población_Variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_interperiodica", "name": "Población_Variacion_interperiodica" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});

test("getColumns: with everything marked", () => {
  var configParams = {
    indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
    showGranularity:true, 
    allLanguages:true, 
    showLabels:true, 
    indicatorType: "indicatorSelector", 
    subject:"021", 
    recodeDates:true, 
    measureColumns:true
  };
  var expectedResult = [{ "columnRole": "dimension", "dataType": "string", "id": "Codigo_geografico", "name": "Codigo_geografico" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_geografica", "name": "Granularidad_geografica" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_geografica_en", "name": "Etiqueta_geografica_en" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_geografica_es", "name": "Etiqueta_geografica_es" }, { "columnRole": "dimension", "dataType": "string", "id": "Codigo_temporal", "name": "Codigo_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Granularidad_temporal", "name": "Granularidad_temporal" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_temporal_es", "name": "Etiqueta_temporal_es" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_temporal_en", "name": "Etiqueta_temporal_en" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION", "name": "Población" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_anual", "name": "Población_Tasa_variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Tasa_variacion_interperiodica", "name": "Población_Tasa_variacion_interperiodica" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_anual", "name": "Población_Variacion_anual" }, { "columnRole": "metric", "dataType": "float", "id": "POBLACION_Variacion_interperiodica", "name": "Población_Variacion_interperiodica" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
  
});
