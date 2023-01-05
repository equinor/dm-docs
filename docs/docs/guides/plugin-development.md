---
sidebar_position: 3
---

# Plugin development

## Apps plugins

:::note

Assumes that the app is created using create-dm-app and that it follows its folder structure.

:::

### Adding a UiPlugin

1) First, create a folder under `src/plugins/` for the new plugin like shown below. 

```
src/
|_ plugins/
  |_ new-plugin/
    |_ index.tsx
```

The requirements for a plugin is to have a `index.tsx` file which default exports a list of plugins, like this:

```tsx
import { EPluginType, TPlugin, IUIPlugin } from '@development-framework/dm-core'

export const PluginComponent = (props: IUIPlugin) => {
  return (
    <div>
      Plugin content goes here!
    </div>
  )
}

export const plugins: TPlugin[] = [
  {
    pluginName: 'newPlugin',
    pluginType: EPluginType.UI,
    component: PluginComponent,
  },
]
```

The `index.tsx`-file can export several plugins, and each plugin should have a unique `name`, specify `pluginType` (what kind of plugin it is), and the `component` (React component) associated. Everything returned from the `component` will be rendered.

2) To load the UiPlugin, add it to `src/plugins.js`, which contains the list of plugins to be loaded. Add the package name (plugin folder name) into the `src/plugins.js` file like this.

```tsx
const plugins = [
    ...already existing plugins...
    // The extra plugin to be loaded    
    import('./plugins/new-plugin')
]

export default plugins

```


### Using a UiPlugin

To associate a blueprint with a UiPlugin.

1) Add a `RecipeLink` entity under the data folder, e.g. `app/data/DemoApplicationDataSource/instances/recipe_links/`, like this.

```json
{
  "type": "CORE:RecipeLink",
  "_blueprintPath_": "/models/<Blueprint type>",
  "uiRecipes": [
    {
      "type": "CORE:UiRecipe",
      "name": "<recipe name>",
      "plugin": "newPlugin",
      "category": ""
    }
  ]
}
```

The `RecipeLink` entity contains a list of UiRecipes that will be associated with the blueprint specified in the `_blueprintPath_` field. Each UiRecipe specify what plugin to be used by `pluginName`, that is, the name used in the export of the plugin inside the `index.tsx`-file.

3) After the `RecipeLink` is added, create a _lookup_ with the app name and the _recipe links_ for it by running the command:

```bash
dm create-lookup demo-app DemoApplicationDataSource/instances/recipe_links
```

:::note

The Data Modeling Storage Service must be running on localhost:5000

:::



## Jobs plugins

### Adding a job handler

To add a job handler, follow the guide at [dm-job](https://github.com/equinor/dm-job#job-handler-plugins).
