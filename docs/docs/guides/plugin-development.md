---
sidebar_position: 3
---

# Plugin development

## UiPlugins

:::note

This guide assumes that the app is created using `create-dm-app`, and that it follows that folder structure.

:::

### Creating a UiPlugin

1. First, create a folder under `src/plugins/` for the new plugin like shown below. 

    ```
    src/
    |_ plugins/
      |_ new-plugin/
        |_ index.tsx
    ```

    Plugins needs to export a list of plugins, like so:

    ```tsx
    import { EPluginType, TPlugin, IUIPlugin } from '@development-framework/dm-core'

    const PluginComponent = (props: IUIPlugin) => {
      return (
        <div>
          Plugin content goes here!
        </div>
      )
    }

    export default ({
      'newPlugin': {
        component: HelloWorldPlugin,
      },
    } as TUiPluginMap)
    ```

2. To load the UiPlugin, add it to the map of plugins in `src/plugins.js`.

    ```tsx
    const plugins: TUiPluginMap = {
      ...dmCorePlugins,
      ...newPlugin,
    }

    export default plugins

    ```


### Using a UiPlugin

Before a plugin can be used, it must be associated with a model (blueprint), this is done with RecipeLinks


1. Add a `RecipeLink` entity under the data folder, e.g. `app/data/DemoDS/DemoApplication/recipes/`, like this.

    ```json
    {
      "type": "CORE:RecipeLink",
      "_blueprintPath_": "/models/<blueprint name>",
      "initialUiRecipe":     {
          "type": "CORE:UiRecipe",
          "name": "My new test plugin",
          "plugin": "newPlugin"
        }
      "uiRecipes": [...otherUiRecipes]
    }
    ```
    NOTE: Replace "\<blueprint name\>" with the name of the blueprint you want to associate the plugin with.

2. Upload the new recipe by resetting the application

    ```bash
    ./reset-app.sh
    ```

3. After the `RecipeLink` is added, create a _lookup_ with the app name and the _recipe links_ for it by running the dm-command:

    ```bash
    dm create-lookup demo-app DemoDS/instances/recipe_links
    ```

    :::note

    The Data Modeling Storage Service must be running on localhost:5000

    :::



## Jobs plugins

Read about job plugins here: [DM-Job Plugins](https://github.com/equinor/dm-job#job-handler-plugins).

## DMSS repository plugins

Read about adding support for different storage backends here: [DMSS Plugins](https://github.com/equinor/data-modelling-storage-service?tab=readme-ov-file#repository-plugins).
