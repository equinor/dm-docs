---
sidebar_position: 2
---

# Application development 

By following these steps, you will have your own data modelling app up and running on your local machine.

## Prerequisite

* Node (> 16+)
* Docker (> 20+)
* Docker-compose (> 2.11+)
* Python (> 3.8)
* [dm-cli](https://github.com/equinor/dm-cli)

[//]: # ()
## Create a new app

To initialize an app, you can use the `create-dm-app` tool. 

Create an app by running (change `my-app` to your application name):

```bash
npx @development-framework/create-dm-app my-app
```
This will create a new folder `my-app` and inside that folder, the initial application structure is generated and the transitive dependencies are installed. 

The application is made in React and you can connect it with any Data Modelling Storage Service (DMSS) instance you want. 

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

Start services in the background (-d detached mode) by running:

```bash
docker-compose pull
docker compose up
```

To start the app development server, run:

```bash
npm start
```

The web app can now be reached at [http://localhost:3000](http://localhost:3000) in the web browser. The web page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

:::note 

Remember: You must have the docker-compose services running to use the web application.

:::

## Reset data


Install the dm-cli package (available on [PyPi](https://pypi.org/project/dm-cli/)) by running: 

```bash
pip install -r requirements.txt 
```

Run this command to reset the application data (upload any entities, blueprints, and recipes registered under the `app/` folder) to the data modelling storage service (DMSS):


```bash
./reset-app.sh
```

:::note

This script must be run every time a modification is done in any files in the `app/`  folder.

:::

<details>
<summary>Tip: Use virtual Python environment</summary>

We recommend create a virtual Python environment.

Create a new virtual environment by running: 

```bash
python3 -m venv .venv
``` 

Activate the virtual environment by running:

<details>
<summary>Linux</summary>

```shell
$ source .venv/bin/activate
```
</details>

<details>
<summary>Windows</summary>

```shell
$ .\venv\Scripts\Activate.ps1
$ pip install --upgrade pip
```

</details>
</details>

## Build production version

When you’re ready to deploy to production, create a minified bundle by running the command:

```bash
npm run build
```

## Configure the app

This template uses an application entity to control the behavior of the app. This entity can be seen at `app/data/DemoApplicationDataSource/instances/demoApplication.json`. The `.env`-file has a variable pointing to this application entity, which will be loaded and used to select what _UIPlugin_ to be shown. The application _RecipeLink_ that defines what to show is located at `app/data/DemoApplicationDataSource/DemoApplication/recipes/demoApp.json`. 

URLs to services are controlled by environment variables in the `.env` file, by default this will point to the services specified in the `docker-compose.yaml` file. The `.env` file also controls authentication, and it is possible to enable or disable authentication. See [configuration](https://equinor.github.io/dm-docs/docs/guides/administration/configuration) for overview of the different configuration options available.

## Extending the app

Add functionality and customize your apps using plugins. Apps is designed to be extensible, and one of the best ways to add functionality to apps is through the plugin system.

Add functionality and customize your apps using [plugins](./../concepts/plugins.md) and [recipes](./../concepts/recipes.md).

See [plugin development](./plugin-development.md) for creating and adding new plugins.

## Modelling domain

Add models using [blueprints](./../concepts/blueprints.md).

See [domain modeling](./domain-modeling.md) for how to create and add models for the app.

## Pre commit 

To ensure consistent code formatting and to do a minimum of checks on the local computer before committing code to a Git repository, the app provides a `.pre-commit-config.yaml` file that is used to setup Git _pre-commit hooks_.
The pre-commit hook will run [prettier](https://prettier.io/) formatting, certain tests, sanitisers and analyze the JavaScript code using [eslint](https://eslint.org/).
To run pre-commit, it needs to be installed on your local machine with

```bash
pip install pre-commit
```

This tell pre-commit to always run for this repository on every commit.

:::tip

Pre-commit will run on every commit, but can also be run manually on all files:

```shell
pre-commit run --all-files
```

Or be skipped:

```shell
git commit --no-verify 
```
:::


