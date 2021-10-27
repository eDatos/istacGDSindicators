if (typeof require !== "undefined") {
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Connector = require("../src/Connector.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];

};

let connector

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  connector = new Connector({
    UrlFetchApp: new UrlFetchAppMock(apiResponses),
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });

});

test("getAuthType", () => {
  expect(connector.getAuthType().type).toBe("NONE");
});

test("isAdminUser", () => {
  expect(connector.isAdminUser()).toBe(true);
});

test("checkIfEndConfiguration : with indicatorSelector and indicator selected", () => {
  var configParams = {
   indicator: "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/SUPERFICIE", 
   indicatorType: "indicatorSelector", 
   subject: "011"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(false);
});

test("checkIfEndConfiguration : with indicatorSelector and indicator not selected", () => {
  var configParams = {
   indicatorType: "indicatorSelector", 
   subject: "011"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(true);
});

test("checkIfEndConfiguration : with indicatorInstanceSelector and indicatorInstance selected", () => {
  var configParams = {
    indicatorType: "indicatorInstanceSelector",
    indicatorInstance: "C00075H"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(false);
});

test("checkIfEndConfiguration : with indicatorInstanceSelector and indicatorInstance not selected", () => {
  var configParams = {
   indicatorType: "indicatorInstanceSelector"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(true);
});

test("checkIfEndConfiguration : with indicatorInstanceSelector and indicatorInstance not selected", () => {
  var configParams = {
    indicatorType: "indicatorInstanceSelector"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(true);
});

test("checkIfEndConfiguration : with inputUrlSelector", () => {
  var configParams = {
    indicatorType: "inputUrlSelector"
  };

  expect(connector.checkIfEndConfiguration(configParams)).toBe(false);
});
