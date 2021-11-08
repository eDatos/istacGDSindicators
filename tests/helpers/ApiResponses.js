const metadataResponse = {
  property: [
    {
      key: "indicators.rest.external",
      value: "https://datos.canarias.es/api/estadisticas/indicators",
      kind: "commonMetadata#property"
    }
  ]
};

const subjects = {
  kind: "indicators#subjects",
  total: 20,
  selfLink:
    "https://datos.canarias.es/api/estadisticas/indicators/v1.0/subjects",
  items: [
    {
      id: "042",
      kind: "subjects",
      code: "042",
      title: {
        es: "042 Precios, consumo e inversión",
        __default__: "042 Precios, consumo e inversión"
      }
    },
    {
      id: "061",
      kind: "subjects",
      code: "061",
      title: {
        es: "061 Agricultura, ganadería, pesca y caza",
        __default__: "061 Agricultura, ganadería, pesca y caza"
      }
    },
    {
      id: "083",
      kind: "subjects",
      code: "083",
      title: {
        es: "083 Transporte y comunicaciones",
        __default__: "083 Transporte y comunicaciones"
      }
    },
    {
      id: "084",
      kind: "subjects",
      code: "084",
      title: {
        es: "084 Servicios financieros, monetarios y seguros",
        __default__: "084 Servicios financieros, monetarios y seguros"
      }
    },
    {
      id: "043",
      kind: "subjects",
      code: "043",
      title: {
        es: "043 Empresas y centros de trabajo",
        __default__: "043 Empresas y centros de trabajo"
      }
    },
    {
      id: "080",
      kind: "subjects",
      code: "080",
      title: {
        es: "080 SECTOR SERVICIOS",
        __default__: "080 SECTOR SERVICIOS"
      }
    },
    {
      id: "081",
      kind: "subjects",
      code: "081",
      title: {
        es: "081 Comercio",
        __default__: "081 Comercio"
      }
    }
  ]
};

const indicators = {
  kind: "indicators#indicators",
  limit: 1000,
  total: 2,
  selfLink:
    "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators?q=subjectCode EQ 042&limit=1000&offset=0",
  items: [
    {
      id: "IPC",
      kind: "indicators#indicator",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/IPC",
      code: "IPC",
      version: "1.35",
      title: {
        en: "Consumer prices index (CPI). All items",
        es: "Índice de precios de consumo (IPC). General",
        __default__: "Índice de precios de consumo (IPC). General"
      },
      acronym: {
        es: "IPC",
        en: "CPI",
        __default__: "IPC"
      },
      subjectCode: "042",
      subjectTitle: {
        es: "042 Precios, consumo e inversión",
        __default__: "042 Precios, consumo e inversión"
      },
      systemSurveyLinks: [
        {
          kind: "indicators#indicatorsSystem",
          href:
            "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075A"
        }
      ],
      conceptDescription: {
        es:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España.",
        en:
          "The Consumer Prices Index (CPI) aims to measure the evolution of prices of goods and services consumed by households in Spain.",
        __default__:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España."
      }
    },
    {
      id: "IPC_SUBYACENTE",
      kind: "indicators#indicator",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/IPC_SUBYACENTE",
      code: "IPC_SUBYACENTE",
      version: "1.33",
      title: {
        es: "Índice de precios de consumo (IPC). Subyacente",
        en: "Consumer prices index (CPI). Core",
        __default__: "Índice de precios de consumo (IPC). Subyacente"
      },
      subjectCode: "042",
      subjectTitle: {
        es: "042 Precios, consumo e inversión",
        __default__: "042 Precios, consumo e inversión"
      },
      systemSurveyLinks: [
        {
          kind: "indicators#indicatorsSystem",
          href:
            "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075A"
        }
      ],
      conceptDescription: {
        en:
          "The Consumer Prices Index (CPI) aims to measure the evolution of prices of goods and services consumed by households in Spain. The core CPI is defined as the overall CPI without unprocessed food or energy products.",
        es:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España. El IPC subyacente se define como el IPC general sin alimentos no elaborados ni productos energéticos.",
        __default__:
          "El Índice de Precios de Consumo (IPC) tiene como objetivo medir la evolución de los precios de los bienes y servicios de consumo adquiridos por los hogares residentes en España. El IPC subyacente se define como el IPC general sin alimentos no elaborados ni productos energéticos."
      },
      notes: {
        en:
          "The CPI consumption field does not include goods received in kind in the form of self-consumption, self-supply, in-kind salary, gratuitous or subsidized meals, or imputed rents of dwellings in which households reside when they are owners.",
        es:
          "El campo de consumo del IPC no incluye los bienes recibidos en especie en concepto de autoconsumo, autosuministro, salario en especie, comidas gratuitas o bonificadas ni los alquileres imputados de las viviendas en las que residen los hogares, cuando son propietarios.",
        __default__:
          "El campo de consumo del IPC no incluye los bienes recibidos en especie en concepto de autoconsumo, autosuministro, salario en especie, comidas gratuitas o bonificadas ni los alquileres imputados de las viviendas en las que residen los hogares, cuando son propietarios."
      }
    }
  ]
};

const indicatorsSystems = {
  kind: "indicators#indicatorsSystems",
  total: 4,
  selfLink:
    "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems?limit=25&offset=0",
  items: [
    {
      id: "C00075H",
      kind: "indicators#indicatorsSystem",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H",
      code: "C00075H",
      version: "1.284",
      publicationDate: "2018-05-15T15:05:07.587+01:00",
      title: {
        es: "Empleo en Cifras",
        en: "Employment in Figures",
        __default__: "Empleo en Cifras"
      },
      statisticalOperationLink: {
        kind: "statisticalOperations#operation",
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00075H"
      },
      description: {
        en:
          "Obtaining a set of useful indicators for monitoring employment through the collection and analysis of results from various sources.",
        es:
          "resultados procedentes de diversas fuentes.",
        __default__:
          "resultados procedentes de diversas fuentes."
      },
      objective: {
        en:
          "Employment in the Canary Islands.",
        es:
          "Empleo en Canarias.",
        __default__:
          "Empleo en Canarias."
      }
    },
    {
      id: "C00062A",
      kind: "indicators#indicatorsSystem",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00062A",
      code: "C00062A",
      version: "1.548",
      publicationDate: "2019-05-14T09:23:50.025+01:00",
      title: {
        es: "Indicadores Medioambientales y de Sostenibilidad de Canarias",
        __default__:
          "Indicadores Medioambientales y de Sostenibilidad de Canarias"
      },
      acronym: {
        es: "IMAS-Can",
        __default__: "IMAS-Can"
      },
      statisticalOperationLink: {
        kind: "statisticalOperations#operation",
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00062A"
      },
      description: {
        es:
          "Estas estadísticas.",
        __default__:
          "Estas estadísticas."
      },
      objective: {
        es:
          "Esta operación tiene",
        __default__:
          "Esta operación tiene."
      }
    }
  ]
};

const indicatorsInstances = {
  kind: "indicators#indicatorInstances",
  limit: 1000,
  offset: 0,
  total: 50,
  selfLink:
    "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances?limit=1000&offset=0",
  parentLink: {
    kind: "indicators#indicatorsSystem",
    href:
      "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H"
  },
  items: [
    {
      id: "21af0477-d63b-493b-ad02-4ab181547223",
      kind: "indicators#indicatorInstance",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances/21af0477-d63b-493b-ad02-4ab181547223",
      parentLink: {
        kind: "indicators#indicatorInstances",
        href:
          "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances"
      },
      title: {
        en: "Inactive population. Men",
        es: "Población inactiva. Hombres",
        __default__: "Población inactiva. Hombres"
      },
      conceptDescription: {
        es:
          "Población masculina de 16 o más años no activa (no ocupada y no parada).",
        en:
          "Inactive men are men aged 16 years and more who are neither employed nor unemployed.",
        __default__:
          "Población masculina de 16 o más años no activa (no ocupada y no parada)."
      },
      systemCode: "C00075H"
    },
    {
      id: "96fe5971-25a3-4a4f-a3b5-a8f3d029c171",
      kind: "indicators#indicatorInstance",
      selfLink:
        "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances/96fe5971-25a3-4a4f-a3b5-a8f3d029c171",
      parentLink: {
        kind: "indicators#indicatorInstances",
        href:
          "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances"
      },
      title: {
        es: "Empleo registrado. Autónomos",
        en: "Registered employment. Self-employment",
        __default__: "Empleo registrado. Autónomos"
      },
      conceptDescription: {
        es:
          "Puestos de trabajo por cuenta propia registrados en la Seguridad Social, MUFACE, ISFAS y MUGEJU referidos al último día del último mes de cada trimestre.",
        en:
          "Jobs registered with the Social Security, MUFACE, MUGEJU and ISFAS, referred to the last day of the last month of each quarter.",
        __default__:
          "Puestos de trabajo por cuenta propia registrados en la Seguridad Social, MUFACE, ISFAS y MUGEJU referidos al último día del último mes de cada trimestre."
      },
      systemCode: "C00075H"
    }
  ]
};

const response = {
    "id": "POBLACION",
    "kind": "indicators#indicator",
    "selfLink": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION",
    "parentLink": {
        "kind": "indicators#indicators",
        "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators"
    },
    "code": "POBLACION",
    "version": "1.010",
    "title": {
        "eu": "Biztanleria",
        "es": "Población",
        "ca": "Població",
        "fr": "Population",
        "en": "Population",
        "it": "Popolazione",
        "pt": "População",
        "gl": "Poboación",
        "de": "Bevölkerung",
        "__default__": "Población"
    },
    "subjectCode": "021",
    "systemSurveyLinks": [
        {
            "kind": "indicators#indicatorsSystem",
            "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00067A"
        },
        {
            "kind": "indicators#indicatorsSystem",
            "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00062A"
        }
    ],
    "conceptDescription": {
        "en": "Number of persons according to official population figures, referred to 1 January of each year, drawn from the Municipal Population Register.",
        "es": "Número de personas según las cifras oficiales de población, a 1 de enero de cada año, elaboradas a partir del Padrón Municipal de Habitantes.",
        "__default__": "Número de personas según las cifras oficiales de población, a 1 de enero de cada año, elaboradas a partir del Padrón Municipal de Habitantes."
    },
    "dimension": {
        "GEOGRAPHICAL": {
            "code": "GEOGRAPHICAL",
            "granularity": [
                {
                    "code": "ISLANDS",
                    "title": {
                        "en": "Islands",
                        "es": "Islas",
                        "__default__": "Islas"
                    }
                },
                {
                    "code": "COUNTIES",
                    "title": {
                        "en": "Counties",
                        "es": "Comarcas",
                        "__default__": "Comarcas"
                    }
                },
                {
                    "code": "REGIONS",
                    "title": {
                        "en": "Regions",
                        "es": "Comunidades autónomas",
                        "__default__": "Comunidades autónomas"
                    }
                },
                {
                    "code": "MUNICIPALITIES",
                    "title": {
                        "en": "Municipalities",
                        "es": "Municipios",
                        "__default__": "Municipios"
                    }
                }
            ],
            "representation": [
                {
                    "code": "ES70",
                    "title": {
                        "en": "Canarias",
                        "es": "Canarias",
                        "__default__": "Canarias"
                    },
                    "latitude": 28.2869925,
                    "longitude": -15.8335245,
                    "granularityCode": "REGIONS"
                },
                {
                    "code": "ES708",
                    "title": {
                        "es": "Lanzarote",
                        "en": "Lanzarote",
                        "__default__": "Lanzarote"
                    },
                    "latitude": 28.958019,
                    "longitude": -13.563176,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES704",
                    "title": {
                        "en": "Fuerteventura",
                        "es": "Fuerteventura",
                        "__default__": "Fuerteventura"
                    },
                    "latitude": 28.498631,
                    "longitude": -13.860549,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES705",
                    "title": {
                        "en": "Gran Canaria",
                        "es": "Gran Canaria",
                        "__default__": "Gran Canaria"
                    },
                    "latitude": 28.10786,
                    "longitude": -15.41998,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES709",
                    "title": {
                        "es": "Tenerife",
                        "en": "Tenerife",
                        "__default__": "Tenerife"
                    },
                    "latitude": 28.466125,
                    "longitude": -16.247069,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES706",
                    "title": {
                        "es": "La Gomera",
                        "en": "La Gomera",
                        "__default__": "La Gomera"
                    },
                    "latitude": 28.091306,
                    "longitude": -17.112331,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES707",
                    "title": {
                        "es": "La Palma",
                        "en": "La Palma",
                        "__default__": "La Palma"
                    },
                    "latitude": 28.681422,
                    "longitude": -17.765652,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES703",
                    "title": {
                        "en": "El Hierro",
                        "es": "El Hierro",
                        "__default__": "El Hierro"
                    },
                    "latitude": 27.807382,
                    "longitude": -17.915566,
                    "granularityCode": "ISLANDS"
                },
                {
                    "code": "ES708A01",
                    "title": {
                        "es": "Lanzarote - Este",
                        "__default__": "Lanzarote - Este"
                    },
                    "latitude": 28.971097,
                    "longitude": -13.629089,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES708A02",
                    "title": {
                        "es": "Lanzarote - Norte",
                        "__default__": "Lanzarote - Norte"
                    },
                    "latitude": 29.105342,
                    "longitude": -13.527082,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES708A03",
                    "title": {
                        "es": "Lanzarote - Suroeste",
                        "__default__": "Lanzarote - Suroeste"
                    },
                    "latitude": 28.978402,
                    "longitude": -13.755114,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES704A01",
                    "title": {
                        "es": "Fuerteventura - Centro",
                        "__default__": "Fuerteventura - Centro"
                    },
                    "latitude": 28.394442,
                    "longitude": -13.99073,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES704A02",
                    "title": {
                        "es": "Fuerteventura - Norte",
                        "__default__": "Fuerteventura - Norte"
                    },
                    "latitude": 28.588473,
                    "longitude": -13.936428,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES704A03",
                    "title": {
                        "es": "Fuerteventura - Sur",
                        "__default__": "Fuerteventura - Sur"
                    },
                    "latitude": 28.233728,
                    "longitude": -14.158269,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A11",
                    "title": {
                        "es": "Gran Canaria - Área Metropolitana",
                        "__default__": "Gran Canaria - Área Metropolitana"
                    },
                    "latitude": 28.047021,
                    "longitude": -15.457593,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A21",
                    "title": {
                        "es": "Gran Canaria Norte - Centro Norte",
                        "__default__": "Gran Canaria Norte - Centro Norte"
                    },
                    "latitude": 28.021871,
                    "longitude": -15.567506,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A22",
                    "title": {
                        "es": "Gran Canaria Norte - Noroeste",
                        "__default__": "Gran Canaria Norte - Noroeste"
                    },
                    "latitude": 28.097204,
                    "longitude": -15.647998,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A23",
                    "title": {
                        "es": "Gran Canaria Norte - Oeste",
                        "__default__": "Gran Canaria Norte - Oeste"
                    },
                    "latitude": 27.972067,
                    "longitude": -15.721917,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A31",
                    "title": {
                        "es": "Gran Canaria Sur - Sur",
                        "__default__": "Gran Canaria Sur - Sur"
                    },
                    "latitude": 27.846659,
                    "longitude": -15.628269,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES705A32",
                    "title": {
                        "es": "Gran Canaria Sur - Sureste",
                        "__default__": "Gran Canaria Sur - Sureste"
                    },
                    "latitude": 27.894227,
                    "longitude": -15.465338,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A11",
                    "title": {
                        "es": "Tenerife - Área Metropolitana",
                        "__default__": "Tenerife - Área Metropolitana"
                    },
                    "latitude": 28.50474,
                    "longitude": -16.283721,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A21",
                    "title": {
                        "es": "Tenerife Norte - Acentejo",
                        "__default__": "Tenerife Norte - Acentejo"
                    },
                    "latitude": 28.443812,
                    "longitude": -16.435544,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A22",
                    "title": {
                        "es": "Tenerife Norte - Daute",
                        "__default__": "Tenerife Norte - Daute"
                    },
                    "latitude": 28.336752,
                    "longitude": -16.818567,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A23",
                    "title": {
                        "es": "Tenerife Norte - Icod",
                        "__default__": "Tenerife Norte - Icod"
                    },
                    "latitude": 28.338409,
                    "longitude": -16.675162,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A24",
                    "title": {
                        "es": "Tenerife Norte - Valle de La Orotava",
                        "__default__": "Tenerife Norte - Valle de La Orotava"
                    },
                    "latitude": 28.318053,
                    "longitude": -16.545935,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A31",
                    "title": {
                        "es": "Tenerife Sur - Abona",
                        "__default__": "Tenerife Sur - Abona"
                    },
                    "latitude": 28.156217,
                    "longitude": -16.547558,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A32",
                    "title": {
                        "es": "Tenerife Sur - Suroeste",
                        "__default__": "Tenerife Sur - Suroeste"
                    },
                    "latitude": 28.171594,
                    "longitude": -16.736395,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES709A33",
                    "title": {
                        "es": "Tenerife Sur - Valle de Güímar",
                        "__default__": "Tenerife Sur - Valle de Güímar"
                    },
                    "latitude": 28.328276,
                    "longitude": -16.421908,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES706A01",
                    "title": {
                        "es": "La Gomera - Norte",
                        "__default__": "La Gomera - Norte"
                    },
                    "latitude": 28.147414,
                    "longitude": -17.256084,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES706A02",
                    "title": {
                        "es": "La Gomera - Sur",
                        "__default__": "La Gomera - Sur"
                    },
                    "latitude": 28.075175,
                    "longitude": -17.189187,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES707A01",
                    "title": {
                        "es": "La Palma - Capitalina",
                        "__default__": "La Palma - Capitalina"
                    },
                    "latitude": 28.63423,
                    "longitude": -17.798511,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES707A02",
                    "title": {
                        "es": "La Palma - Noreste",
                        "__default__": "La Palma - Noreste"
                    },
                    "latitude": 28.778246,
                    "longitude": -17.797801,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES707A03",
                    "title": {
                        "es": "La Palma - Noroeste",
                        "__default__": "La Palma - Noroeste"
                    },
                    "latitude": 28.769063,
                    "longitude": -17.930682,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES707A04",
                    "title": {
                        "es": "La Palma - Valle de Aridane",
                        "__default__": "La Palma - Valle de Aridane"
                    },
                    "latitude": 28.619301,
                    "longitude": -17.870371,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "ES703A00",
                    "title": {
                        "es": "El Hierro - El Hierro",
                        "__default__": "El Hierro - El Hierro"
                    },
                    "latitude": 27.746354,
                    "longitude": -18.006334,
                    "granularityCode": "COUNTIES"
                },
                {
                    "code": "38001",
                    "title": {
                        "en": "Adeje",
                        "es": "Adeje",
                        "__default__": "Adeje"
                    },
                    "latitude": 28.12275028,
                    "longitude": -16.72432333,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35001",
                    "title": {
                        "en": "Agaete",
                        "es": "Agaete",
                        "__default__": "Agaete"
                    },
                    "latitude": 28.09919306,
                    "longitude": -15.69873889,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35002",
                    "title": {
                        "en": "Agüimes",
                        "es": "Agüimes",
                        "__default__": "Agüimes"
                    },
                    "latitude": 27.90392722,
                    "longitude": -15.44591361,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38002",
                    "title": {
                        "en": "Agulo",
                        "es": "Agulo",
                        "__default__": "Agulo"
                    },
                    "latitude": 28.18874667,
                    "longitude": -17.19405833,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38003",
                    "title": {
                        "es": "Alajeró",
                        "en": "Alajeró",
                        "__default__": "Alajeró"
                    },
                    "latitude": 28.06375056,
                    "longitude": -17.24002111,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35020",
                    "title": {
                        "en": "Aldea de San Nicolás (La)",
                        "es": "Aldea de San Nicolás (La)",
                        "__default__": "Aldea de San Nicolás (La)"
                    },
                    "latitude": 27.98480806,
                    "longitude": -15.78025889,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35003",
                    "title": {
                        "es": "Antigua",
                        "en": "Antigua",
                        "__default__": "Antigua"
                    },
                    "latitude": 28.42341167,
                    "longitude": -14.01402361,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38004",
                    "title": {
                        "es": "Arafo",
                        "en": "Arafo",
                        "__default__": "Arafo"
                    },
                    "latitude": 28.34022083,
                    "longitude": -16.41846306,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38005",
                    "title": {
                        "es": "Arico",
                        "en": "Arico",
                        "__default__": "Arico"
                    },
                    "latitude": 28.16581917,
                    "longitude": -16.50094472,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38006",
                    "title": {
                        "en": "Arona",
                        "es": "Arona",
                        "__default__": "Arona"
                    },
                    "latitude": 28.10008083,
                    "longitude": -16.68067694,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35004",
                    "title": {
                        "en": "Arrecife",
                        "es": "Arrecife",
                        "__default__": "Arrecife"
                    },
                    "latitude": 28.959235,
                    "longitude": -13.54671889,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35005",
                    "title": {
                        "en": "Artenara",
                        "es": "Artenara",
                        "__default__": "Artenara"
                    },
                    "latitude": 28.02030778,
                    "longitude": -15.64643583,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35006",
                    "title": {
                        "en": "Arucas",
                        "es": "Arucas",
                        "__default__": "Arucas"
                    },
                    "latitude": 28.11849083,
                    "longitude": -15.52538222,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38007",
                    "title": {
                        "es": "Barlovento",
                        "en": "Barlovento",
                        "__default__": "Barlovento"
                    },
                    "latitude": 28.82935833,
                    "longitude": -17.80324389,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35007",
                    "title": {
                        "en": "Betancuria",
                        "es": "Betancuria",
                        "__default__": "Betancuria"
                    },
                    "latitude": 28.42473167,
                    "longitude": -14.05780306,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38008",
                    "title": {
                        "es": "Breña Alta",
                        "en": "Breña Alta",
                        "__default__": "Breña Alta"
                    },
                    "latitude": 28.66332278,
                    "longitude": -17.78695667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38009",
                    "title": {
                        "es": "Breña Baja",
                        "en": "Breña Baja",
                        "__default__": "Breña Baja"
                    },
                    "latitude": 28.6456075,
                    "longitude": -17.77545778,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38010",
                    "title": {
                        "en": "Buenavista del Norte",
                        "es": "Buenavista del Norte",
                        "__default__": "Buenavista del Norte"
                    },
                    "latitude": 28.37179222,
                    "longitude": -16.85099639,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38011",
                    "title": {
                        "en": "Candelaria",
                        "es": "Candelaria",
                        "__default__": "Candelaria"
                    },
                    "latitude": 28.35524944,
                    "longitude": -16.37004944,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38012",
                    "title": {
                        "es": "Fasnia",
                        "en": "Fasnia",
                        "__default__": "Fasnia"
                    },
                    "latitude": 28.23669528,
                    "longitude": -16.44092611,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35008",
                    "title": {
                        "es": "Firgas",
                        "en": "Firgas",
                        "__default__": "Firgas"
                    },
                    "latitude": 28.10776444,
                    "longitude": -15.56332333,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38013",
                    "title": {
                        "en": "Frontera",
                        "es": "Frontera",
                        "__default__": "Frontera"
                    },
                    "latitude": 27.75356361,
                    "longitude": -18.01096556,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38014",
                    "title": {
                        "en": "Fuencaliente de La Palma",
                        "es": "Fuencaliente de La Palma",
                        "__default__": "Fuencaliente de La Palma"
                    },
                    "latitude": 28.49470667,
                    "longitude": -17.84524667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35009",
                    "title": {
                        "es": "Gáldar",
                        "en": "Gáldar",
                        "__default__": "Gáldar"
                    },
                    "latitude": 28.14552222,
                    "longitude": -15.65323667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38015",
                    "title": {
                        "es": "Garachico",
                        "en": "Garachico",
                        "__default__": "Garachico"
                    },
                    "latitude": 28.37300694,
                    "longitude": -16.76408139,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38016",
                    "title": {
                        "es": "Garafía",
                        "en": "Garafía",
                        "__default__": "Garafía"
                    },
                    "latitude": 28.82998139,
                    "longitude": -17.94523639,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38017",
                    "title": {
                        "es": "Granadilla de Abona",
                        "en": "Granadilla de Abona",
                        "__default__": "Granadilla de Abona"
                    },
                    "latitude": 28.12266083,
                    "longitude": -16.57680194,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38018",
                    "title": {
                        "en": "Guancha (La)",
                        "es": "Guancha (La)",
                        "__default__": "Guancha (La)"
                    },
                    "latitude": 28.37812833,
                    "longitude": -16.65251417,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38019",
                    "title": {
                        "en": "Guía de Isora",
                        "es": "Guía de Isora",
                        "__default__": "Guía de Isora"
                    },
                    "latitude": 28.20934472,
                    "longitude": -16.7785375,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38020",
                    "title": {
                        "es": "Güímar",
                        "en": "Güímar",
                        "__default__": "Güímar"
                    },
                    "latitude": 28.31433306,
                    "longitude": -16.41131639,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35010",
                    "title": {
                        "es": "Haría",
                        "en": "Haría",
                        "__default__": "Haría"
                    },
                    "latitude": 29.14609306,
                    "longitude": -13.49984722,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38021",
                    "title": {
                        "es": "Hermigua",
                        "en": "Hermigua",
                        "__default__": "Hermigua"
                    },
                    "latitude": 28.16311306,
                    "longitude": -17.19849944,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38022",
                    "title": {
                        "en": "Icod de Los Vinos",
                        "es": "Icod de los Vinos",
                        "__default__": "Icod de los Vinos"
                    },
                    "latitude": 28.3676275,
                    "longitude": -16.71917861,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35011",
                    "title": {
                        "en": "Ingenio",
                        "es": "Ingenio",
                        "__default__": "Ingenio"
                    },
                    "latitude": 27.91955694,
                    "longitude": -15.44364667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38024",
                    "title": {
                        "en": "Llanos de Aridane (Los)",
                        "es": "Llanos de Aridane (Los)",
                        "__default__": "Llanos de Aridane (Los)"
                    },
                    "latitude": 28.65868944,
                    "longitude": -17.9131925,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38025",
                    "title": {
                        "es": "Matanza de Acentejo (La)",
                        "en": "Matanza de Acentejo (La)",
                        "__default__": "Matanza de Acentejo (La)"
                    },
                    "latitude": 28.44805278,
                    "longitude": -16.4572925,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35012",
                    "title": {
                        "en": "Mogán",
                        "es": "Mogán",
                        "__default__": "Mogán"
                    },
                    "latitude": 27.8838875,
                    "longitude": -15.72383556,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35013",
                    "title": {
                        "es": "Moya",
                        "en": "Moya",
                        "__default__": "Moya"
                    },
                    "latitude": 28.11082222,
                    "longitude": -15.58333917,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35014",
                    "title": {
                        "en": "Oliva (La)",
                        "es": "Oliva (La)",
                        "__default__": "Oliva (La)"
                    },
                    "latitude": 28.6102975,
                    "longitude": -13.92776333,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38026",
                    "title": {
                        "es": "Orotava (La)",
                        "en": "Orotava (La)",
                        "__default__": "Orotava (La)"
                    },
                    "latitude": 28.38917444,
                    "longitude": -16.52479139,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35015",
                    "title": {
                        "en": "Pájara",
                        "es": "Pájara",
                        "__default__": "Pájara"
                    },
                    "latitude": 28.35085889,
                    "longitude": -14.107635,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35016",
                    "title": {
                        "en": "Palmas de Gran Canaria (Las)",
                        "es": "Palmas de Gran Canaria (Las)",
                        "__default__": "Palmas de Gran Canaria (Las)"
                    },
                    "latitude": 28.12505833,
                    "longitude": -15.42853278,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38027",
                    "title": {
                        "en": "Paso (El)",
                        "es": "Paso (El)",
                        "__default__": "Paso (El)"
                    },
                    "latitude": 28.65203083,
                    "longitude": -17.880335,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38901",
                    "title": {
                        "es": "Pinar de El Hierro (El)",
                        "en": "Pinar de El Hierro (El)",
                        "__default__": "Pinar de El Hierro (El)"
                    },
                    "latitude": 27.70904111,
                    "longitude": -17.97808056,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38028",
                    "title": {
                        "en": "Puerto de La Cruz",
                        "es": "Puerto de La Cruz",
                        "__default__": "Puerto de La Cruz"
                    },
                    "latitude": 28.41795167,
                    "longitude": -16.5486125,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35017",
                    "title": {
                        "es": "Puerto del Rosario",
                        "en": "Puerto del Rosario",
                        "__default__": "Puerto del Rosario"
                    },
                    "latitude": 28.49877361,
                    "longitude": -13.85969417,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38029",
                    "title": {
                        "en": "Puntagorda",
                        "es": "Puntagorda",
                        "__default__": "Puntagorda"
                    },
                    "latitude": 28.76595944,
                    "longitude": -17.97990556,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38030",
                    "title": {
                        "es": "Puntallana",
                        "en": "Puntallana",
                        "__default__": "Puntallana"
                    },
                    "latitude": 28.73962917,
                    "longitude": -17.74473583,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38031",
                    "title": {
                        "en": "Realejos (Los)",
                        "es": "Realejos (Los)",
                        "__default__": "Realejos (Los)"
                    },
                    "latitude": 28.38163361,
                    "longitude": -16.58393,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38032",
                    "title": {
                        "en": "Rosario (El)",
                        "es": "Rosario (El)",
                        "__default__": "Rosario (El)"
                    },
                    "latitude": 28.45111278,
                    "longitude": -16.36712444,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38033",
                    "title": {
                        "en": "San Andrés y Sauces",
                        "es": "San Andrés y Sauces",
                        "__default__": "San Andrés y Sauces"
                    },
                    "latitude": 28.80440139,
                    "longitude": -17.77425667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35018",
                    "title": {
                        "es": "San Bartolomé",
                        "en": "San Bartolomé",
                        "__default__": "San Bartolomé"
                    },
                    "latitude": 29.00137444,
                    "longitude": -13.61404139,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35019",
                    "title": {
                        "es": "San Bartolomé de Tirajana",
                        "en": "San Bartolomé de Tirajana",
                        "__default__": "San Bartolomé de Tirajana"
                    },
                    "latitude": 27.92511278,
                    "longitude": -15.57297361,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38023",
                    "title": {
                        "en": "San Cristóbal de La Laguna",
                        "es": "San Cristóbal de La Laguna",
                        "__default__": "San Cristóbal de La Laguna"
                    },
                    "latitude": 28.48715667,
                    "longitude": -16.31399583,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38034",
                    "title": {
                        "en": "San Juan de La Rambla",
                        "es": "San Juan de la Rambla",
                        "__default__": "San Juan de la Rambla"
                    },
                    "latitude": 28.37955444,
                    "longitude": -16.64533694,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38035",
                    "title": {
                        "en": "San Miguel de Abona",
                        "es": "San Miguel de Abona",
                        "__default__": "San Miguel de Abona"
                    },
                    "latitude": 28.09686833,
                    "longitude": -16.61598861,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38036",
                    "title": {
                        "en": "San Sebastián de La Gomera",
                        "es": "San Sebastián de La Gomera",
                        "__default__": "San Sebastián de La Gomera"
                    },
                    "latitude": 28.0903775,
                    "longitude": -17.10970583,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35021",
                    "title": {
                        "en": "Santa Brígida",
                        "es": "Santa Brígida",
                        "__default__": "Santa Brígida"
                    },
                    "latitude": 28.03398833,
                    "longitude": -15.49917944,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38037",
                    "title": {
                        "es": "Santa Cruz de La Palma",
                        "en": "Santa Cruz de La Palma",
                        "__default__": "Santa Cruz de La Palma"
                    },
                    "latitude": 28.6832425,
                    "longitude": -17.76474389,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38038",
                    "title": {
                        "es": "Santa Cruz de Tenerife",
                        "en": "Santa Cruz de Tenerife",
                        "__default__": "Santa Cruz de Tenerife"
                    },
                    "latitude": 28.46980472,
                    "longitude": -16.25463361,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35022",
                    "title": {
                        "en": "Santa Lucía de Tirajana",
                        "es": "Santa Lucía de Tirajana",
                        "__default__": "Santa Lucía de Tirajana"
                    },
                    "latitude": 27.91203639,
                    "longitude": -15.540675,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35023",
                    "title": {
                        "es": "Santa María de Guía de Gran Canaria",
                        "en": "Santa María de Guía de Gran Canaria",
                        "__default__": "Santa María de Guía de Gran Canaria"
                    },
                    "latitude": 28.13887917,
                    "longitude": -15.632885,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38039",
                    "title": {
                        "en": "Santa Úrsula",
                        "es": "Santa Úrsula",
                        "__default__": "Santa Úrsula"
                    },
                    "latitude": 28.42518556,
                    "longitude": -16.4915775,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38040",
                    "title": {
                        "en": "Santiago del Teide",
                        "es": "Santiago del Teide",
                        "__default__": "Santiago del Teide"
                    },
                    "latitude": 28.29742694,
                    "longitude": -16.81553139,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38041",
                    "title": {
                        "es": "Sauzal (El)",
                        "en": "Sauzal (El)",
                        "__default__": "Sauzal (El)"
                    },
                    "latitude": 28.47903472,
                    "longitude": -16.43664139,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38042",
                    "title": {
                        "es": "Silos (Los)",
                        "en": "Silos (Los)",
                        "__default__": "Silos (Los)"
                    },
                    "latitude": 28.36554167,
                    "longitude": -16.81698389,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38043",
                    "title": {
                        "es": "Tacoronte",
                        "en": "Tacoronte",
                        "__default__": "Tacoronte"
                    },
                    "latitude": 28.48093222,
                    "longitude": -16.412635,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38044",
                    "title": {
                        "es": "Tanque (El)",
                        "en": "Tanque (El)",
                        "__default__": "Tanque (El)"
                    },
                    "latitude": 28.35623028,
                    "longitude": -16.779225,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38045",
                    "title": {
                        "es": "Tazacorte",
                        "en": "Tazacorte",
                        "__default__": "Tazacorte"
                    },
                    "latitude": 28.64071278,
                    "longitude": -17.93325917,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38046",
                    "title": {
                        "es": "Tegueste",
                        "en": "Tegueste",
                        "__default__": "Tegueste"
                    },
                    "latitude": 28.52275639,
                    "longitude": -16.336515,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35024",
                    "title": {
                        "es": "Teguise",
                        "en": "Teguise",
                        "__default__": "Teguise"
                    },
                    "latitude": 29.05722972,
                    "longitude": -13.56122,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35025",
                    "title": {
                        "en": "Tejeda",
                        "es": "Tejeda",
                        "__default__": "Tejeda"
                    },
                    "latitude": 27.99503083,
                    "longitude": -15.61560222,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35026",
                    "title": {
                        "en": "Telde",
                        "es": "Telde",
                        "__default__": "Telde"
                    },
                    "latitude": 28.00319472,
                    "longitude": -15.41454972,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35027",
                    "title": {
                        "es": "Teror",
                        "en": "Teror",
                        "__default__": "Teror"
                    },
                    "latitude": 28.05946667,
                    "longitude": -15.54834528,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35028",
                    "title": {
                        "en": "Tías",
                        "es": "Tías",
                        "__default__": "Tías"
                    },
                    "latitude": 28.95211333,
                    "longitude": -13.6540625,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38047",
                    "title": {
                        "es": "Tijarafe",
                        "en": "Tijarafe",
                        "__default__": "Tijarafe"
                    },
                    "latitude": 28.71154639,
                    "longitude": -17.95595056,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35029",
                    "title": {
                        "en": "Tinajo",
                        "es": "Tinajo",
                        "__default__": "Tinajo"
                    },
                    "latitude": 29.06654083,
                    "longitude": -13.67647667,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35030",
                    "title": {
                        "en": "Tuineje",
                        "es": "Tuineje",
                        "__default__": "Tuineje"
                    },
                    "latitude": 28.32483694,
                    "longitude": -14.0494375,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38049",
                    "title": {
                        "en": "Valle Gran Rey",
                        "es": "Valle Gran Rey",
                        "__default__": "Valle Gran Rey"
                    },
                    "latitude": 28.09523333,
                    "longitude": -17.33506361,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38050",
                    "title": {
                        "es": "Vallehermoso",
                        "en": "Vallehermoso",
                        "__default__": "Vallehermoso"
                    },
                    "latitude": 28.17932111,
                    "longitude": -17.26646028,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35032",
                    "title": {
                        "es": "Valleseco",
                        "en": "Valleseco",
                        "__default__": "Valleseco"
                    },
                    "latitude": 28.05061889,
                    "longitude": -15.57406111,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35031",
                    "title": {
                        "es": "Valsequillo de Gran Canaria",
                        "en": "Valsequillo de Gran Canaria",
                        "__default__": "Valsequillo de Gran Canaria"
                    },
                    "latitude": 27.99093139,
                    "longitude": -15.49914306,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38048",
                    "title": {
                        "es": "Valverde",
                        "en": "Valverde",
                        "__default__": "Valverde"
                    },
                    "latitude": 27.80688417,
                    "longitude": -17.91496389,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35033",
                    "title": {
                        "en": "Vega de San Mateo",
                        "es": "Vega de San Mateo",
                        "__default__": "Vega de San Mateo"
                    },
                    "latitude": 28.01111083,
                    "longitude": -15.53270417,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38051",
                    "title": {
                        "en": "Victoria de Acentejo (La)",
                        "es": "Victoria de Acentejo (La)",
                        "__default__": "Victoria de Acentejo (La)"
                    },
                    "latitude": 28.43437872,
                    "longitude": -16.46965653,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38052",
                    "title": {
                        "en": "Vilaflor de Chasna",
                        "es": "Vilaflor de Chasna",
                        "__default__": "Vilaflor de Chasna"
                    },
                    "latitude": 28.15892889,
                    "longitude": -16.6367675,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "38053",
                    "title": {
                        "en": "Villa de Mazo",
                        "es": "Villa de Mazo",
                        "__default__": "Villa de Mazo"
                    },
                    "latitude": 28.60611806,
                    "longitude": -17.7796025,
                    "granularityCode": "MUNICIPALITIES"
                },
                {
                    "code": "35034",
                    "title": {
                        "en": "Yaiza",
                        "es": "Yaiza",
                        "__default__": "Yaiza"
                    },
                    "latitude": 28.95247833,
                    "longitude": -13.76446111,
                    "granularityCode": "MUNICIPALITIES"
                }
            ]
        },
        "TIME": {
            "code": "TIME",
            "granularity": [
                {
                    "code": "YEARLY",
                    "title": {
                        "en": "Yearly",
                        "es": "Anual",
                        "__default__": "Anual"
                    }
                }
            ],
            "representation": [
                {
                    "code": "2018",
                    "title": {
                        "es": "2018",
                        "en": "2018",
                        "__default__": "2018"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2017",
                    "title": {
                        "en": "2017",
                        "es": "2017",
                        "__default__": "2017"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2016",
                    "title": {
                        "es": "2016",
                        "en": "2016",
                        "__default__": "2016"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2015",
                    "title": {
                        "es": "2015",
                        "en": "2015",
                        "__default__": "2015"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2014",
                    "title": {
                        "es": "2014",
                        "en": "2014",
                        "__default__": "2014"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2013",
                    "title": {
                        "en": "2013",
                        "es": "2013",
                        "__default__": "2013"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2012",
                    "title": {
                        "es": "2012",
                        "en": "2012",
                        "__default__": "2012"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2011",
                    "title": {
                        "es": "2011",
                        "en": "2011",
                        "__default__": "2011"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2010",
                    "title": {
                        "en": "2010",
                        "es": "2010",
                        "__default__": "2010"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2009",
                    "title": {
                        "en": "2009",
                        "es": "2009",
                        "__default__": "2009"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2008",
                    "title": {
                        "en": "2008",
                        "es": "2008",
                        "__default__": "2008"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2007",
                    "title": {
                        "en": "2007",
                        "es": "2007",
                        "__default__": "2007"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2006",
                    "title": {
                        "en": "2006",
                        "es": "2006",
                        "__default__": "2006"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2005",
                    "title": {
                        "es": "2005",
                        "en": "2005",
                        "__default__": "2005"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2004",
                    "title": {
                        "en": "2004",
                        "es": "2004",
                        "__default__": "2004"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2003",
                    "title": {
                        "en": "2003",
                        "es": "2003",
                        "__default__": "2003"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2002",
                    "title": {
                        "es": "2002",
                        "en": "2002",
                        "__default__": "2002"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2001",
                    "title": {
                        "en": "2001",
                        "es": "2001",
                        "__default__": "2001"
                    },
                    "granularityCode": "YEARLY"
                },
                {
                    "code": "2000",
                    "title": {
                        "es": "2000",
                        "en": "2000",
                        "__default__": "2000"
                    },
                    "granularityCode": "YEARLY"
                }
            ]
        },
        "MEASURE": {
            "code": "MEASURE",
            "representation": [
                {
                    "code": "ABSOLUTE",
                    "title": {
                        "en": "Data",
                        "es": "Dato",
                        "__default__": "Dato"
                    },
                    "quantity": {
                        "type": "AMOUNT",
                        "unit": {
                            "de": "Personen",
                            "fr": "Personnes",
                            "es": "Personas",
                            "en": "Persons",
                            "pt": "Pessoas",
                            "__default__": "Personas"
                        },
                        "unitMultiplier": {
                            "en": "Units",
                            "es": "Unidades",
                            "__default__": "Unidades"
                        },
                        "decimalPlaces": 0
                    }
                },
                {
                    "code": "ANNUAL_PERCENTAGE_RATE",
                    "title": {
                        "en": "Annual change rate",
                        "es": "Tasa variación anual",
                        "__default__": "Tasa variación anual"
                    },
                    "quantity": {
                        "type": "CHANGE_RATE",
                        "unit": {
                            "es": "Porcentaje",
                            "en": "Percentage",
                            "__default__": "Porcentaje"
                        },
                        "unitSymbol": "%",
                        "unitSymbolPosition": "END",
                        "decimalPlaces": 2,
                        "isPercentage": true,
                        "baseQuantityLink": {
                            "title": {
                                "eu": "Biztanleria",
                                "es": "Población",
                                "ca": "Població",
                                "fr": "Population",
                                "en": "Population",
                                "it": "Popolazione",
                                "pt": "População",
                                "gl": "Poboación",
                                "de": "Bevölkerung",
                                "__default__": "Población"
                            },
                            "kind": "indicators#indicator",
                            "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION"
                        }
                    }
                },
                {
                    "code": "INTERPERIOD_PERCENTAGE_RATE",
                    "title": {
                        "en": "Interperiod change rate",
                        "es": "Tasa variación interperiódica",
                        "__default__": "Tasa variación interperiódica"
                    },
                    "quantity": {
                        "type": "CHANGE_RATE",
                        "unit": {
                            "es": "Porcentaje",
                            "en": "Percentage",
                            "__default__": "Porcentaje"
                        },
                        "unitSymbol": "%",
                        "unitSymbolPosition": "END",
                        "decimalPlaces": 2,
                        "isPercentage": true,
                        "baseQuantityLink": {
                            "title": {
                                "eu": "Biztanleria",
                                "es": "Población",
                                "ca": "Població",
                                "fr": "Population",
                                "en": "Population",
                                "it": "Popolazione",
                                "pt": "População",
                                "gl": "Poboación",
                                "de": "Bevölkerung",
                                "__default__": "Población"
                            },
                            "kind": "indicators#indicator",
                            "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION"
                        }
                    }
                },
                {
                    "code": "ANNUAL_PUNTUAL_RATE",
                    "title": {
                        "en": "Annual change",
                        "es": "Variación anual",
                        "__default__": "Variación anual"
                    },
                    "quantity": {
                        "type": "AMOUNT",
                        "unit": {
                            "de": "Personen",
                            "fr": "Personnes",
                            "es": "Personas",
                            "en": "Persons",
                            "pt": "Pessoas",
                            "__default__": "Personas"
                        },
                        "unitMultiplier": {
                            "en": "Units",
                            "es": "Unidades",
                            "__default__": "Unidades"
                        },
                        "decimalPlaces": 0
                    }
                },
                {
                    "code": "INTERPERIOD_PUNTUAL_RATE",
                    "title": {
                        "en": "Interperiod change",
                        "es": "Variación interperiódica",
                        "__default__": "Variación interperiódica"
                    },
                    "quantity": {
                        "type": "AMOUNT",
                        "unit": {
                            "de": "Personen",
                            "fr": "Personnes",
                            "es": "Personas",
                            "en": "Persons",
                            "pt": "Pessoas",
                            "__default__": "Personas"
                        },
                        "unitMultiplier": {
                            "en": "Units",
                            "es": "Unidades",
                            "__default__": "Unidades"
                        },
                        "decimalPlaces": 0
                    }
                }
            ]
        }
    },
    "attribute": {
        "OBS_CONF": {
            "code": "OBS_CONF",
            "title": {
                "en": "Observation confidenciality",
                "es": "Confidencialidad de la observación",
                "__default__": "Confidencialidad de la observación"
            },
            "attachmentLevel": "OBSERVATION"
        }
    },
    "childLink": {
        "kind": "indicators#indicatorData",
        "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION/data"
    },
    "subjectTitle": {
        "es": "021 Población",
        "__default__": "021 Población"
    },
    "decimalPlaces": 0
};

const responseData = {
    "kind": "indicators#indicatorData",
    "selfLink": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION/data",
    "parentLink": {
        "kind": "indicators#indicator",
        "href": "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION"
    },
    "format": [
        "GEOGRAPHICAL",
        "TIME",
        "MEASURE"
    ],
    "dimension": {
        "GEOGRAPHICAL": {
            "representation": {
                "size": 2,
                "index": {
                    "35001": 0,
                    "35002": 1,
                    // "35003": 2
                }
            }
        },
        "TIME": {
            "representation": {
                "size": 1,
                "index": {
                    // "2017": 1,
                    "2018": 0
                }
            }
        },
        "MEASURE": {
            "representation": {
                "size": 5,
                "index": {
                    "ANNUAL_PUNTUAL_RATE": 0,
                    "INTERPERIOD_PUNTUAL_RATE": 1,
                    "ANNUAL_PERCENTAGE_RATE": 2,
                    "INTERPERIOD_PERCENTAGE_RATE": 3,
                    "ABSOLUTE": 4
                }
            }
        }
    },
    "observation": [
        "19564",
        "19564",
        "0.93",
        "0.93",
        "2127685",
        "6197",
        "6197",
        "0.29",
        "0.29",
        "2108121",
        "1618",
        "1618",
        "0.08",
        "0.08",
        "2101924",
        "-4509",
        "-4509",
        "-0.21",
        "-0.21",
        "2100306",
        "-13864",
        "-13864",
        "-0.65",
        "-0.65",
        "2104815",
        "335",
        "335",
        "0.02",
        "0.02",
        "2118679",
        "-8425",
        "-8425",
        "-0.40",
        "-0.40",
        "2118344",
        "8250",
        "8250",
        "0.39",
        "0.39",
        "2126769",
        "14527",
        "14527",
        "0.69",
        // "0.69",
        // "2118519",
        // "28024",
        // "28024",
        // "1.35",
        // "1.35",
        // "2103992",
        // "50017",
        // "50017",
        // "2.47",
        // "2.47",
        // "2075968",
        // "30118",
        // "30118",
        // "1.51",
        // "1.51",
        // "2025951",
        // "27553",
        // "27553",
        // "1.40",
        // "1.40",
        // "1995833",
        // "52740",
        // "52740",
        // "2.75",
        // "2.75",
        // "1968280",
        // "20672",
        // "20672",
        // "1.09",
    ],
    
}

const responses = {
  "https://datos.canarias.es/api/estadisticas/cmetadata/v1.0/properties.json": metadataResponse,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/subjects": subjects,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators?limit=1000&orderBy=ID%20ASC&q=subjectCode%20EQ%20042": indicators,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems": indicatorsSystems,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicatorsSystems/C00075H/indicatorsInstances?limit=1000": indicatorsInstances,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION": response,
  "https://datos.canarias.es/api/estadisticas/indicators/v1.0/indicators/POBLACION/data": responseData
};


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = responses;
}

;