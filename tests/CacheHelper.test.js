if (typeof require !== "undefined") {
    var CacheHelper = require("../src/CacheHelper.js")["default"];
    var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
    var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
    var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
    var apiResponses = require("./helpers/ApiResponses.js")["default"];
    var Utils = require("../src/Utils.js")["default"];
}

let cacheHelper;

beforeEach(() => {
    cacheHelper = new CacheHelper(
        new CacheServiceMock(),
        new Utils(),
        new UrlFetchAppMock(apiResponses),
        new UtilitiesMock(),
    );
});


test("get - get the value from the cache", () => {
    expect(cacheHelper.get("key_1")).toBe(null);

    cacheHelper.put("key_1", "value_1");
    cacheHelper.put("key_2", "");

    expect(cacheHelper.get("key_1")).toBe("value_1");

});


test("hasCode - generate a hash key for store in cache", () => {
    var textToGetHash = "text";
    expect(cacheHelper.getHash(textToGetHash)).toEqual("dGV4dA==");
    expect(cacheHelper.getHash("")).toEqual("");
});

