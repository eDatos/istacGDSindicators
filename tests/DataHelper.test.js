if (typeof require !== "undefined") {
  var DataHelper = require("../src/DataHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
  var RecodeDatesHelper = require("../src/RecodeDatesHelper")["default"];
}

let dataHelper;

beforeEach(() => {
  const utils = new Utils();
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  dataHelper = new DataHelper({
    UrlFetchApp: urlFetchApp,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock()),
    Utils: utils,
    RecodeDatesHelper: new RecodeDatesHelper()
  });
});

var Field = function (id) {
  this.id = id;

  this.getId = function () {
    return this.id;
  }
};

var RequestedFields = function () {
  this.requestedFields = [];

  this.addField = function (field) {
    this.requestedFields.push(field);
  }

  this.asArray = function () {
    return this.requestedFields;
  }
};

test("_processData: with everything marked", () => {
    var configParams = {
      indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
      showGranularity:true, 
      allLanguages:true, 
      showLabels:true, 
      indicatorType: "indicatorSelector", 
      subject:"021", 
      recodeDates:true, 
      measureColumns:true
    }

  var expectedResult = [{ "values": ["35001", "2018", "", ""] }, { "values": ["35002", "2018", "", ""] }];


    requestedFields = new RequestedFields();
    requestedFields.addField(new Field('Codigo_geografico'))
    requestedFields.addField(new Field('Codigo_temporal'))
    requestedFields.addField(new Field('Codigo_medida'))
    requestedFields.addField(new Field('Poblacion'))

    expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);

});

test("_processData: with everything marked but measure as columns", () => {
  var configParams = {
    indicator:
      "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION",
    showGranularity: true,
    allLanguages: true,
    showLabels: true,
    indicatorType: "indicatorSelector",
    subject: "021",
    recodeDates: true
  };

  var expectedResult = [{ "values": ["35001", "2018", "", "", "", "", ""] }, { "values": ["35001", "2018", "", "", "", "", ""] }, { "values": ["35001", "2018", "", "", "", "", ""] }, { "values": ["35001", "2018", "", "", "", "", ""] }, { "values": ["35001", "2018", "", "", "", "", ""] }, { "values": ["35002", "2018", "", "", "", "", ""] }, { "values": ["35002", "2018", "", "", "", "", ""] }, { "values": ["35002", "2018", "", "", "", "", ""] }, { "values": ["35002", "2018", "", "", "", "", ""] }, { "values": ["35002", "2018", "", "", "", "", ""] }];

  requestedFields = new RequestedFields();
  requestedFields.addField(new Field('Codigo_geografico'))
  requestedFields.addField(new Field('Codigo_temporal'))
  requestedFields.addField(new Field('Poblacion'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_interperiodica'))
  requestedFields.addField(new Field('Poblacion_Variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Variacion_interperiodica'))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);

  
});

test("_processData: without measure as columns nor recodeDates or languages or labels", () => {
    var configParams = {
      indicator:"https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION", 
      showGranularity:true, 
      indicatorType: "indicatorSelector", 
      subject:"021", 
    }

  var expectedResult = [{ "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "ANNUAL_PUNTUAL_RATE", ""] }, { "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "INTERPERIOD_PUNTUAL_RATE", ""] }, { "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "ANNUAL_PERCENTAGE_RATE", ""] }, { "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "INTERPERIOD_PERCENTAGE_RATE", ""] }, { "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "ABSOLUTE", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "ANNUAL_PUNTUAL_RATE", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "INTERPERIOD_PUNTUAL_RATE", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "ANNUAL_PERCENTAGE_RATE", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "INTERPERIOD_PERCENTAGE_RATE", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "ABSOLUTE", ""] }];

    requestedFields = new RequestedFields();
    requestedFields.addField(new Field('Codigo_geografico'))
    requestedFields.addField(new Field('Granularidad_geografica'))
    requestedFields.addField(new Field('Codigo_temporal'))
    requestedFields.addField(new Field('Granularidad_temporal'))
    requestedFields.addField(new Field('Codigo_medida'))
    requestedFields.addField(new Field('Poblacion'))
    
    expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);


});

test("_processData: without recodeDates, showLables and all languages", () => {
  var configParams = {
    indicator: "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION",
    showGranularity: true,
    indicatorType: "indicatorSelector",
    subject: "021",
    measureColumns: true
  }

  var expectedResult = [{ "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "", "", "", "", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "", "", "", "", ""] }];

  requestedFields = new RequestedFields();
  requestedFields.addField(new Field('Codigo_geografico'))
  requestedFields.addField(new Field('Granularidad_geografica'))
  requestedFields.addField(new Field('Codigo_temporal'))
  requestedFields.addField(new Field('Granularidad_temporal'))
  requestedFields.addField(new Field('Poblacion'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_interperiodica'))
  requestedFields.addField(new Field('Poblacion_Variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Variacion_interperiodica'))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);


});


test("_processData: without showLables and all languages", () => {
  var configParams = {
    indicator: "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION",
    showGranularity: true,
    indicatorType: "indicatorSelector",
    subject: "021",
    measureColumns: true
  }

  var expectedResult = [{ "values": ["35001", "MUNICIPALITIES", "2018", "YEARLY", "", "", "", "", "", ""] }, { "values": ["35002", "MUNICIPALITIES", "2018", "YEARLY", "", "", "", "", "", ""] }];

  requestedFields = new RequestedFields();
  requestedFields.addField(new Field('Codigo_geografico'))
  requestedFields.addField(new Field('Granularidad_geografica'))
  requestedFields.addField(new Field('Codigo_temporal'))
  requestedFields.addField(new Field('Granularidad_temporal'))
  requestedFields.addField(new Field('Fecha'))
  requestedFields.addField(new Field('Poblacion'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_interperiodica'))
  requestedFields.addField(new Field('Poblacion_Variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Variacion_interperiodica'))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);


});



test("_processData: without all languages", () => {
  var configParams = {
    indicator: "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION",
    showGranularity: true,
    showLabels: true,
    indicatorType: "indicatorSelector",
    subject: "021",
    recodeDates: true,
    measureColumns: true
  }

  var expectedResult = [{ "values": ["35001", "MUNICIPALITIES", "Agaete", "2018", "YEARLY", "2018", "20180101", "", "", "", "", ""] }, { "values": ["35002", "MUNICIPALITIES", "Agüimes", "2018", "YEARLY", "2018", "20180101", "", "", "", "", ""] }];

  requestedFields = new RequestedFields();
  requestedFields.addField(new Field('Codigo_geografico'))
  requestedFields.addField(new Field('Granularidad_geografica'))
  requestedFields.addField(new Field('Etiqueta_geografica'))
  requestedFields.addField(new Field('Codigo_temporal'))
  requestedFields.addField(new Field('Granularidad_temporal'))
  requestedFields.addField(new Field('Etiqueta_temporal'))
  requestedFields.addField(new Field('Fecha'))
  requestedFields.addField(new Field('Poblacion'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_interperiodica'))
  requestedFields.addField(new Field('Poblacion_Variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Variacion_interperiodica'))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);


});


test("_processData: with everything marked", () => {
  var configParams = {
    indicator: "https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/POBLACION",
    showGranularity: true,
    allLanguages: true,
    showLabels: true,
    indicatorType: "indicatorSelector",
    subject: "021",
    recodeDates: true,
    measureColumns: true
  }

  var expectedResult = [{ "values": ["35001", "MUNICIPALITIES", "Agaete", "Agaete", "2018", "YEARLY", "2018", "2018", "20180101", "", "", "", "", ""] }, { "values": ["35002", "MUNICIPALITIES", "Agüimes", "Agüimes", "2018", "YEARLY", "2018", "2018", "20180101", "", "", "", "", ""] }];

  requestedFields = new RequestedFields();
  requestedFields.addField(new Field('Codigo_geografico'))
  requestedFields.addField(new Field('Granularidad_geografica'))
  requestedFields.addField(new Field('Etiqueta_geografica_en'))
  requestedFields.addField(new Field('Etiqueta_geografica_es'))
  requestedFields.addField(new Field('Codigo_temporal'))
  requestedFields.addField(new Field('Granularidad_temporal'))
  requestedFields.addField(new Field('Etiqueta_temporal_es'))
  requestedFields.addField(new Field('Etiqueta_temporal_en'))
  requestedFields.addField(new Field('Fecha'))
  requestedFields.addField(new Field('Poblacion'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Tasa_variacion_interperiodica'))
  requestedFields.addField(new Field('Poblacion_Variacion_anual'))
  requestedFields.addField(new Field('Poblacion_Variacion_interperiodica'))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);


});
