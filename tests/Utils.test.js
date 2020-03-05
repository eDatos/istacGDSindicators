if (typeof require !== "undefined") {
  var Utils = require("../src/Utils.js")["default"];
}

let utils;

beforeEach(() => {
  utils = new Utils();
});


test("getUrl - get the url for a configParams with indicator", () => {
  var configParams = {
    indicatorType: "inputUrlSelector",
    inputUrl: "http://mockurl.com"
  };
 
  expect(utils.getUrl(configParams)).toBe(
    "http://mockurl.com"
  );
});

test("getUrl - get the url for a configParams with indicatorInstanceSelector", () => {
  var configParams = {
    indicatorType: "indicatorInstanceSelector",
    indicatorInstance: "http://mockurl.com"
  };

  expect(utils.getUrl(configParams)).toBe(
    "http://mockurl.com"
  );
});
test("getUrl - get the url for a configParams with URL", () => {
  var configParams = {
    indicatorType: "inputUrlSelector",
    inputUrl: "http://mockurl.com"
  };

  expect(utils.getUrl(configParams)).toBe(
    "http://mockurl.com"
  );
});



test("getColNameAndId, configParams with indicator", () => {
  var configParams = {
    indicatorType: "indicatorSelector"
  };

  var response = {
    id: "POBLACION",
    subjectCode: "5555",
    title: {
      es: "El titulo con espacios",
      en: "The title with spaces"
    }
  };

  var expectedResult = { "id": "POBLACION", "name": "El titulo con espacios" };

  expect(utils.getColNameAndId(response, configParams)).toStrictEqual(expectedResult);

});


test("getColNameAndId, configParams with indicatorInstanceSelector and measureColumns", () => {
  var configParams = {
    indicatorType: "indicatorInstanceSelector",
    measureColumns: true
  };

  var response = {
    id: "POBLACION",
    subjectCode: "5555",
    title: {
      es: "El titulo con espacios",
      en: "The title with spaces"
    }
  };

  var expectedResult = { "id": "indicator_id", "name": "5555" };

  expect(utils.getColNameAndId(response, configParams)).toStrictEqual(expectedResult);
});


test("getColNameAndId, configParams with indicatorInstanceSelector and without measureColumns", () => {
  var configParams = {
    indicatorType: "indicatorInstanceSelector",
  };

  var response = {
    id: "POBLACION",
    subjectCode: "5555",
    title: {
      es: "El titulo con espacios",
      en: "The title with spaces"
    }
  };

  var expectedResult = { "id": "indicator_id", "name": "El titulo con espacios" }

  expect(utils.getColNameAndId(response, configParams)).toStrictEqual(expectedResult);
});


test("getColNameAndId, configParams with inputUrl and indicator", () => {
  var configParams = {
    indicatorType: "inputUrlSelector",
    inputUrl: "http://mock-url/api/indicators/v1.0/indicators/"
  };

  var response = {
    id: "POBLACION",
    subjectCode: "5555",
    title: {
      es: "El titulo con espacios",
      en: "The title with spaces"
    }
  };

  var expectedResult = { "id": "POBLACION", "name": "El titulo con espacios" }

  expect(utils.getColNameAndId(response, configParams)).toStrictEqual(expectedResult);
});


test("getColNameAndId, configParams with inputUrl and indicatorsSystems", () => {
  var configParams = {
    indicatorType: "inputUrlSelector",
    inputUrl: "http://mock-url/api/indicators/v1.0/indicatorsSystems/"
  };

  var response = {
    id: "POBLACION",
    subjectCode: "5555",
    title: {
      es: "El titulo con espacios",
      en: "The title with spaces"
    }
  };

  var expectedResult = { "id": "indicator_id", "name": "El titulo con espacios" }

  expect(utils.getColNameAndId(response, configParams)).toStrictEqual(expectedResult);
});


test("keyBy", () => {
  var objectToPass = [
    {
      code: "ES70",
      title: {
        en: "Canarias",
        es: "Canarias",
        __default__: "Canarias"
      },
      latitude: 28.2869925,
      longitude: -15.8335245,
      granularityCode: "REGIONS"
    },
    {
      code: "ES708",
      title: {
        es: "Lanzarote",
        en: "Lanzarote",
        __default__: "Lanzarote"
      },
      latitude: 28.958019,
      longitude: -13.563176,
      granularityCode: "ISLANDS"
    },
    {
      code: "ES704",
      title: {
        en: "Fuerteventura",
        es: "Fuerteventura",
        __default__: "Fuerteventura"
      },
      latitude: 28.498631,
      longitude: -13.860549,
      granularityCode: "ISLANDS"
    }
  ];

  var expectedResult = {
    ES70: {
      code: "ES70",
      granularityCode: "REGIONS",
      latitude: 28.2869925,
      longitude: -15.8335245,
      title: { __default__: "Canarias", en: "Canarias", es: "Canarias" }
    },
    ES704: {
      code: "ES704",
      granularityCode: "ISLANDS",
      latitude: 28.498631,
      longitude: -13.860549,
      title: {
        __default__: "Fuerteventura",
        en: "Fuerteventura",
        es: "Fuerteventura"
      }
    },
    ES708: {
      code: "ES708",
      granularityCode: "ISLANDS",
      latitude: 28.958019,
      longitude: -13.563176,
      title: { __default__: "Lanzarote", en: "Lanzarote", es: "Lanzarote" }
    }
  };

  expect(utils.keyBy(objectToPass, "code")).toStrictEqual(expectedResult);

});