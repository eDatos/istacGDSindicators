
if (typeof require !== "undefined") {
  var ConfigHelper = require("./ConfigHelper.js")["default"];
  var DataHelper = require("./DataHelper.js")["default"];
  var SchemaHelper = require("./SchemaHelper.js")["default"];
}

function Connector(services) {
  const configHelper = new ConfigHelper(services);
  const dataHelper = new DataHelper(services);
  const schemaHelper = new SchemaHelper(services);

  /* istanbul ignore next */
  /**
   * Builds the Community Connector fields object.
   * @return {Fields} The Community Connector fields.
   * @see https://developers.google.com/apps-script/reference/data-studio/fields
   */
  this.getFields = function(request) {
    const cc = DataStudioApp.createCommunityConnector();
    const fields = cc.getFields();
    const types = cc.FieldType;
    const columns = schemaHelper.getColumns(request.configParams);
  
    typesTranslator = {
      string: types.TEXT,
      float: types.NUMBER,
      date: types.YEAR_MONTH_DAY
    };
    
    for(let column of columns) {
      if (column.columnRole === "metric") {
        fields
          .newMetric()
          .setId(column.id)
          .setName(column.name)
          .setType(typesTranslator[column.dataType]);
      } else {
        fields
          .newDimension()
          .setId(column.id)
          .setName(column.name)
          .setType(typesTranslator[column.dataType]);
      }
    }
  
    return fields;
  }
  
  /* istanbul ignore next */
  /**
   * Builds the Community Connector schema.
   * @param {object} request The request.
   * @return {object} The schema.
   */
  this.getSchema = function(request) {
    const fields = this.getFields(request).build();
    return { schema: fields };
  }
  
  /* istanbul ignore next */
  /**
   * Builds the Community Connector config.
   * @return {Config} The Community Connector config.
   * @see https://developers.google.com/apps-script/reference/data-studio/config
   */
  this.getConfig = function(request) {
    const cc = DataStudioApp.createCommunityConnector();
    const configParams = request.configParams;
    const isFirstRequest = typeof configParams == "undefined";
    let config = cc.getConfig();
    if (isFirstRequest) {
      config.setIsSteppedConfig(true);
    } else if (!isFirstRequest && this.checkIfEndConfiguration(configParams)) {
      config.setIsSteppedConfig(true);
    }
  
    config
      .newInfo()
      .setId("info1")
      .setText("Seleccione los datos que desea obtener");
  
    config
      .newSelectSingle()
      .setId("indicatorType")
      .setName("Seleccione un tipo")
      .setIsDynamic(true)
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("URL del indicador / instancia de indicador")
          .setValue("inputUrlSelector")
      )
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("Seleccionar indicador")
          .setValue("indicatorSelector")
      )
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("Seleccionar instancia de indicador")
          .setValue("indicatorInstanceSelector")
      );
  
    if (!isFirstRequest && configParams.indicatorType === "indicatorSelector") {
      const subjects = config
        .newSelectSingle()
        .setId("subject")
        .setName("Seleccionar tema")
        .setIsDynamic(true)
        .setAllowOverride(false);
  
      const subjectsList = configHelper.getSubjects();
      for(let subject of subjectsList) {
        const code = subject.code;
        const title = subject.title.es;
        subjects.addOption(
          config
            .newOptionBuilder()
            .setLabel(title)
            .setValue(code)
        );
      }
  
      if (!isFirstRequest && configParams.subject) {
        const indicators = config
          .newSelectSingle()
          .setId("indicator")
          .setName("Seleccionar indicador")
          .setIsDynamic(true)
          .setAllowOverride(false);
  
        const indicatorsList = configHelper.getIndicators(configParams.subject);
  
        for(let indicator of indicatorsList) {
          const code = indicator.selfLink;
          const title = indicator.title.es;
          indicators.addOption(
            config
              .newOptionBuilder()
              .setLabel(title)
              .setValue(code)
          );
        }
        if (configParams.indicator) {
          config = this.obtainFormatResponse(config);
        }
      }
    }
  
    if (!isFirstRequest && configParams.indicatorType === "indicatorInstanceSelector") {
      const indicatorSystems = config
        .newSelectSingle()
        .setId("indicatorSystem")
        .setName("Seleccionar instancia de indicador")
        .setIsDynamic(true)
        .setAllowOverride(false);
  
      const indicatorSystemsList = configHelper.getIndicatorsSystems();
      for(let indicatorSystem of indicatorSystemsList) {
        const code = indicatorSystem.code;
        const title = indicatorSystem.title.es;
        indicatorSystems.addOption(
          config
            .newOptionBuilder()
            .setLabel(title)
            .setValue(code)
        );
      }
  
      if (!isFirstRequest && configParams.indicatorSystem) {
        const indicatorsInstances = config
          .newSelectSingle()
          .setId("indicatorInstance")
          .setName("Instancia de indicadores")
          .setIsDynamic(true)
          .setAllowOverride(false);
  
        const indicatorsInstancesList = configHelper.getIndicatorsInstances(
          configParams.indicatorSystem
        );
  
        for(let indicatorInstance of indicatorsInstancesList) {
          const code = indicatorInstance.selfLink;
          const title = indicatorInstance.title.es;
          indicatorsInstances.addOption(
            config
              .newOptionBuilder()
              .setLabel(title)
              .setValue(code)
          );
        }
        if (configParams.indicatorInstance) {
          config = this.obtainFormatResponse(config);
        }
      }
    }
  
    if (!isFirstRequest && configParams.indicatorType === "inputUrlSelector") {
      config
        .newTextInput()
        .setId("inputUrl")
        .setName("URL")
        .setHelpText("Esta URL debe ser una petición de la API. Como por ejemplo: https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicators/SUPERFICIE o https://www3.gobiernodecanarias.org/istac/api/indicators/v1.0/indicatorsSystems/C00075A/indicatorsInstances/4257778c-a75a-4d04-a9df-b2f0c1263bde")
        .setPlaceholder("Escribe aquí la url");
  
      config = this.obtainFormatResponse(config);
    }
  
    config.setDateRangeRequired(true);
    return config.build();
  }
  
  /* istanbul ignore next */
  this.obtainFormatResponse = function(config) {
    config
      .newInfo()
      .setId("info2")
      .setText("Formato de respuesta:");
  
    config
      .newInfo()
      .setId("info3")
      .setText("Modelo de datos");
  
    config
      .newCheckbox()
      .setId("measureColumns")
      .setName("Visualizar las medidas como columnas");
  
    config
      .newInfo()
      .setId("info4")
      .setText("Etiquetado");
  
    config
      .newCheckbox()
      .setId("recodeDates")
      .setName(
        "Incluir campo calculado con fecha a partir de periodos de referencia"
      );
  
    config
      .newCheckbox()
      .setId("showGranularity")
      .setName(
        'Añadir las columnas "Granularidad geográfica" y "Granularidad temporal"'
      );
  
    config
      .newCheckbox()
      .setId("showLabels")
      .setName(
        "Añadir las etiquetas geográficas y temporales al conjunto de datos"
      );
  
    config
      .newCheckbox()
      .setId("allLanguages")
      .setName("Añadir todos los idiomas");
  
    return config;
  }
  
  this.checkIfEndConfiguration = function(configParams) {
    let result = false;
    if (configParams.inputType == "inputUrlSelector") {
      result = false;
    } else if (
      configParams.indicatorType == "indicatorSelector" &&
      !configParams.indicator
    ) {
      result = true;
    } else if (
      configParams.indicatorType == "indicatorInstanceSelector" &&
      !configParams.indicatorInstance
    ) {
      result = true;
    }
    return result;
  }
  
  /* istanbul ignore next */
  /**
   * Gets the Auth type.
   * @return {object} The auth type.
   */
  this.getAuthType = function() {
    const response = { type: "NONE" };
    return response;
  }
  
  /* istanbul ignore next */
  /**
   * Gets the data for the community connector
   * @param {object} request The request.
   * @return {object} The data.
   */
  this.getData = function(request) {
    const requestedFieldIds = request.fields.map(field => field.name);
    const requestedFields = this.getFields(request).forIds(requestedFieldIds);
    const rows = dataHelper.getRows(request.configParams, requestedFields);
  
    return {
      schema: requestedFields.build(),
      rows: rows
    };
  }
  
  this.isAdminUser = function() {
    return true;
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = Connector;
}
