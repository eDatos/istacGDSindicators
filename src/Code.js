/* istanbul ignore file */
if (typeof require !== "undefined") {
  const Connector = require("./Connector.js")["default"];
  const CacheHelper = require("./CacheHelper.js")["default"];
  const Utils = require("./Utils.js")["default"];
}


/* global CacheService, UrlFetchApp, Utilities */
function getConnector() {
  const utils = new Utils();
  return new Connector({
    Utils: utils,
    CacheService: CacheService,
    UrlFetchApp: UrlFetchApp,
    CacheHelper: new CacheHelper(CacheService, utils, UrlFetchApp, Utilities),
    RecodeDatesHelper: new RecodeDatesHelper(),
  });
}


function getConfig(request) {
  return getConnector().getConfig(request);
}


function getSchema(request) {
  return getConnector().getSchema(request);
}


function getData(request) {
  return getConnector().getData(request);
}


function getAuthType() {
  return getConnector().getAuthType();
}


function isAdminUser() {
  return getConnector().isAdminUser();
}


/* global exports */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["getConfig"] = getConfig;
}
