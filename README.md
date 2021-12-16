# Google Data Studio Connector for Indicadores ISTAC

This is the Google Data Studio Connector implemented to retrieve data from the ISTAC API (Indicadores).

The connector is written in [Apps Script](https://developers.google.com/apps-script/ "Google documentation").

## Development environmet

To be able to work in this project you just need to pull the code from the repository and have [Clasp](https://developers.google.com/apps-script/Google Clouddes/clasp "Google documentation") installed on your system.

### How to work in this project

#### _Authenticate with Clasp_

Once you have installed Clasp from the `src` directory you have to run:

```clasp login```

Now you can push code with your changes to Google by running:

```clasp push```

### How to try the connector

Once you have develop something and you want to try it you have to push it and the connector will be in the Latest [Version(Head)](https://datastudio.google.com/datasources/create?connectorId=AKfycbw1MT5I6QRBsqbsy3ubRYUdz7st3ckPScfhxGAgZ1sg15ccZ8BXslrHjI-KFMTl-aM8 "Latest Version").

You could also get this url by editing the [project](https://script.google.com/home) in the G Suite Developer Hub. Then click in `Publish --> Publish from manifest`. You can check the [documentation](https://developers.google.com/datastudio/connector/use).

### Debugging

To debug the connector you can put console.logs in the code, then you can see the logs in https://script.google.com/home/projects/ID_OF_THE_SCRIPT/executions (that's all I got for the moment), for example, you can see the logs for this connector in [here](https://script.google.com/home/projects/1eerQGH50a5TQZmNAcgIjXz2vuoQfgSsH2ShhQFZE0u0pWngrgC1_EYZl/executions).

## Production environment

### How to deploy an versioned deployment

In Google Data Studio you can create version of your coda that consists in numbered shanpshots of your code. Which allows users to continue using the versioned connector while developers can keep coding. You can see more information in the [documentation](https://developers.google.com/apps-script/concepts/deployments).

To create a version you have to go to `File --> Manage versions` and create a new one with a descriptive name. You could also create a new version with clasp by running from `src/`:

```clasp version NAME_OF_THE_VERSION```

You can list all the versions with:

```clasp versions```

Once you have the version you can make a versioned deployment. You can do it with clasp or with the Google Cloud.

#### _With Clasp_

You can deploy the new connector with:

```clasp deploy [version] [description]```

And list the deployments with:

 ```clasp deployments```

You can find out more information about this in the [clasp documentation](https://developers.google.com/apps-script/guides/clasp)

#### _With the Google Cloud_

To deploy a new version from the Google Cloud you have to go to edit the script. Then you go to `Publish --> Publish from manifest` and Create a new one. You give it a name and a version and save it. Then you will have the new url.

You can find out more information in the [documentation](https://developers.google.com/datastudio/connector/deploy).

