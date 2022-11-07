---
sidebar_position: 1
---

# Application development 

## Prerequisite

* Node (> 16+)
* Docker (> 20+)
* Docker-compose (> 2.11+)
* Python (> 3.8)
* [dm-cli](https://github.com/equinor/dm-cli)

[//]: # ()
## Create a new app

To initialize an app, you can use the `create-dm-app` tool. 

Create an app by running:

```
npx @development-framework/create-dm-app my-app
cd my-app
npm start
```

This will create a React frontend that you can connect with any Data Modelling Storage Service (DMSS) instance you want. 

:::note

Under the hood, it uses Create React App, but you don’t need to know anything about them.

:::

<!---
Important app folders and files:

```
my-app/
|_ apps/ - List of apps included (blueprint, entities, and data sources)
  |_ demo-app/
    |_ data
    |_ data_sources/
      |_ settings.json
  |_ src
    |_ plugins.js - List of plugins that should be loaded
    |_ settings.json - App settings
```
-->

## Running the app

To run dependent services locally you can use the included `docker-compose.yaml` file. This file includes databases, DMSS service, and job service. 

Start services by running:

```
docker compose up
```

To start the app development server, run:

```
npm start
```

This will open the app at [localhost:3000](http://localhost:3000).

To populate DMSS, run:

```
# Core data
docker compose run --rm dmss reset-app
# Job data 
docker compose run --rm job-api dm reset --url http://dmss:5000 ../app
# App-specific data
dm reset app
```

This must be done every time a modification is done in any file related to a service.

## Configure the app

This template uses an application entity to control the behavior of the app. 

This entity can be seen at `app/data/DemoApplicationDataSource/instances/demoApplication.json`. 

The `src/app-settings.json` points to this application entity, which will be loaded and used to select UI plugin to be shown.

The UI plugin is defined in the application blueprint, which can be seen at `app/data/DemoApplicationDataSource/models/DemoApplication.json`

URLs to external services are defined by environment variables in the start and build scripts inside `package.json`.

## Extending the app

### Adding a UI plugin

An example plugin is located at `/src/plugins/demo-app`.
The requirements for a plugin is to have a `index[.js|.ts|.tsx|.jsx]` which exports a list of plugins, for example:

```tsx
import { EPluginType } from '@development-framework/dm-core'

import App from './App'

export const plugins: any = [
  {
    pluginName: 'demoApp',
    pluginType: EPluginType.PAGE,
    component: App,
  }
]
```

With that done, you must explicitly set which plugins to import into the project. This is done in the `src/plugins.js` file. Which will then look like this:

```js
const plugins = [
    import("./plugins/demo-app"),
]

export default plugins

```

### Adding a job handler

To add a job handler, follow the guide at [dm-job](https://github.com/equinor/dm-job#job-handler-plugins).
