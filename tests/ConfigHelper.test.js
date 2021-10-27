if (typeof require !== "undefined") {
  var ConfigHelper = require("../src/ConfigHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
}

let configHelper;

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  configHelper = new ConfigHelper({
    UrlFetchApp: urlFetchApp,
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });
});



test("getSubjects", () => {
    var expectedResponse = [
      {
        code: "042",
        id: "042",
        kind: "subjects",
        title: {
          __default__: "042 Precios, consumo e inversión",
          es: "042 Precios, consumo e inversión"
        }
      },
      {
        code: "043",
        id: "043",
        kind: "subjects",
        title: {
          __default__: "043 Empresas y centros de trabajo",
          es: "043 Empresas y centros de trabajo"
        }
      },
      {
        code: "061",
        id: "061",
        kind: "subjects",
        title: {
          __default__: "061 Agricultura, ganadería, pesca y caza",
          es: "061 Agricultura, ganadería, pesca y caza"
        }
      },
      {
        code: "080",
        id: "080",
        kind: "subjects",
        title: {
          __default__: "080 SECTOR SERVICIOS",
          es: "080 SECTOR SERVICIOS"
        }
      },
      {
        code: "081",
        id: "081",
        kind: "subjects",
        title: { __default__: "081 Comercio", es: "081 Comercio" }
      },
      {
        code: "083",
        id: "083",
        kind: "subjects",
        title: {
          __default__: "083 Transporte y comunicaciones",
          es: "083 Transporte y comunicaciones"
        }
      },
      {
        code: "084",
        id: "084",
        kind: "subjects",
        title: {
          __default__: "084 Servicios financieros, monetarios y seguros",
          es: "084 Servicios financieros, monetarios y seguros"
        }
      }
    ];

  expect(configHelper.getSubjects()).toEqual(expectedResponse);
});



test("getIndicators", () => {
  var expectedResponse = [
    {
      acronym: { __default__: "IPC", en: "CPI", es: "IPC" },
      code: "IPC",
      conceptDescription: {
        __default__:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España.",
        en:
          "The Consumer Prices Index (CPI) aims to measure the evolution of prices of goods and services consumed by households in Spain.",
        es:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España."
      },
      id: "IPC",
      kind: "indicators#indicator",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/IPC",
      subjectCode: "042",
      subjectTitle: {
        __default__: "042 Precios, consumo e inversión",
        es: "042 Precios, consumo e inversión"
      },
      systemSurveyLinks: [
        {
          href:
            "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075A",
          kind: "indicators#indicatorsSystem"
        }
      ],
      title: {
        __default__: "Índice de precios de consumo (IPC). General",
        en: "Consumer prices index (CPI). All items",
        es: "Índice de precios de consumo (IPC). General"
      },
      version: "1.35"
    },
    {
      code: "IPC_SUBYACENTE",
      conceptDescription: {
        __default__:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España. El IPC subyacente se define como el IPC general sin alimentos no elaborados ni productos energéticos.",
        en:
          "The Consumer Prices Index (CPI) aims to measure the evolution of prices of goods and services consumed by households in Spain. The core CPI is defined as the overall CPI without unprocessed food or energy products.",
        es:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España. El IPC subyacente se define como el IPC general sin alimentos no elaborados ni productos energéticos."
      },
      id: "IPC_SUBYACENTE",
      kind: "indicators#indicator",
      notes: {
        __default__:
          "El campo de consumo del IPC no incluye los bienes recibidos en especie en concepto de autoconsumo, autosuministro, salario en especie, comidas gratuitas o bonificadas ni los alquileres imputados de las viviendas en las que residen los hogares, cuando son propietarios.",
        en:
          "The CPI consumption field does not include goods received in kind in the form of self-consumption, self-supply, in-kind salary, gratuitous or subsidized meals, or imputed rents of dwellings in which households reside when they are owners.",
        es:
          "El campo de consumo del IPC no incluye los bienes recibidos en especie en concepto de autoconsumo, autosuministro, salario en especie, comidas gratuitas o bonificadas ni los alquileres imputados de las viviendas en las que residen los hogares, cuando son propietarios."
      },
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/IPC_SUBYACENTE",
      subjectCode: "042",
      subjectTitle: {
        __default__: "042 Precios, consumo e inversión",
        es: "042 Precios, consumo e inversión"
      },
      systemSurveyLinks: [
        {
          href:
            "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075A",
          kind: "indicators#indicatorsSystem"
        }
      ],
      title: {
        __default__: "Índice de precios de consumo (IPC). Subyacente",
        en: "Consumer prices index (CPI). Core",
        es: "Índice de precios de consumo (IPC). Subyacente"
      },
      version: "1.33"
    }
  ];

  expect(configHelper.getIndicators("042")).toEqual(expectedResponse);
});



test("getIndicatorsSystems", () => {
  var expectedResponse = [
    {
      code: "C00075H",
      description: {
        __default__: "resultados procedentes de diversas fuentes.",
        en:
          "Obtaining a set of useful indicators for monitoring employment through the collection and analysis of results from various sources.",
        es: "resultados procedentes de diversas fuentes."
      },
      id: "C00075H",
      kind: "indicators#indicatorsSystem",
      objective: {
        __default__: "Empleo en Canarias.",
        en: "Employment in the Canary Islands.",
        es: "Empleo en Canarias."
      },
      publicationDate: "2018-05-15T15:05:07.587+01:00",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H",
      statisticalOperationLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00075H",
        kind: "statisticalOperations#operation"
      },
      title: {
        __default__: "Empleo en Cifras",
        en: "Employment in Figures",
        es: "Empleo en Cifras"
      },
      version: "1.284"
    },
    {
      acronym: { __default__: "IMAS-Can", es: "IMAS-Can" },
      code: "C00062A",
      description: {
        __default__: "Estas estadísticas.",
        es: "Estas estadísticas."
      },
      id: "C00062A",
      kind: "indicators#indicatorsSystem",
      objective: {
        __default__: "Esta operación tiene.",
        es: "Esta operación tiene"
      },
      publicationDate: "2019-05-14T09:23:50.025+01:00",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00062A",
      statisticalOperationLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00062A",
        kind: "statisticalOperations#operation"
      },
      title: {
        __default__:
          "Indicadores Medioambientales y de Sostenibilidad de Canarias",
        es: "Indicadores Medioambientales y de Sostenibilidad de Canarias"
      },
      version: "1.548"
    }
  ];

  expect(configHelper.getIndicatorsSystems()).toEqual(expectedResponse);
});



test("getIndicatorsInstances", () => {
  var expectedResponse = [
    {
      conceptDescription: {
        __default__:
          "Puestos de trabajo por cuenta propia registrados en la Seguridad Social, MUFACE, ISFAS y MUGEJU referidos al último día del último mes de cada trimestre.",
        en:
          "Jobs registered with the Social Security, MUFACE, MUGEJU and ISFAS, referred to the last day of the last month of each quarter.",
        es:
          "Puestos de trabajo por cuenta propia registrados en la Seguridad Social, MUFACE, ISFAS y MUGEJU referidos al último día del último mes de cada trimestre."
      },
      id: "96fe5971-25a3-4a4f-a3b5-a8f3d029c171",
      kind: "indicators#indicatorInstance",
      parentLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances",
        kind: "indicators#indicatorInstances"
      },
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances/96fe5971-25a3-4a4f-a3b5-a8f3d029c171",
      systemCode: "C00075H",
      title: {
        __default__: "Empleo registrado. Autónomos",
        en: "Registered employment. Self-employment",
        es: "Empleo registrado. Autónomos"
      }
    },
    {
      conceptDescription: {
        __default__:
          "Población masculina de 16 o más años no activa (no ocupada y no parada).",
        en:
          "Inactive men are men aged 16 years and more who are neither employed nor unemployed.",
        es:
          "Población masculina de 16 o más años no activa (no ocupada y no parada)."
      },
      id: "21af0477-d63b-493b-ad02-4ab181547223",
      kind: "indicators#indicatorInstance",
      parentLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances",
        kind: "indicators#indicatorInstances"
      },
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances/21af0477-d63b-493b-ad02-4ab181547223",
      systemCode: "C00075H",
      title: {
        __default__: "Población inactiva. Hombres",
        en: "Inactive population. Men",
        es: "Población inactiva. Hombres"
      }
    }
  ];

  expect(configHelper.getIndicatorsInstances("C00075H")).toEqual(expectedResponse);
});
