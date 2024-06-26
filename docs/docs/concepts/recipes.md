---
title: Recipes
sidebar_position: 2
---

To express how a model is _stored_ and how it is _presented_, we use  `StorageRecipes` and `UiRecipes`.

A recipe is an entity of the core Storage-/UiRecipe blueprints.

## StorageRecipe

A recipe on how to store the attributes of an entity.

StorageRecipes are mainly to be consumed by the Data Modelling Storage Service.  

For now, StorageRecipes are mainly used to split large models into smaller parts. 
The main reason you would like to do this is for performance. For example if you 
have an entity of a sensor, with some meta data, and an array of 10MB of sensor readings.
It would be smart to store the raw data separately, so we don't need to load the whole thing just to read some metadata.  
You can also save some cost, by choosing a cheaper storage technology for large amounts of data, that is not often read.

A StorageRecipes may look something like this;

```json
{
  "type": "dmss://system/SIMOS/StorageRecipe",
  "name": "DEFAULT",
  "attributes": [
    {
      "name": "content",
      "type": "dmss://system/SIMOS/StorageAttribute",
      "contained": false,
      "storageAffinity": "default"
    }
  ]
}
```

This StorageRecipes is used for the core `dmss://system/SIMOS/Package`-type. 
From this we can read that any objects that are a part of the "content" attribute for a package, is not
stored in the same package entity but is a separate document in the backing storage techonology. Instead of the actual object, a reference object is inserted. If you then want to load the package and it's content, you will need to make a GET request with `depth>0`. 

Note that if the attribute is _model contained_, but _storage uncontained_, it will be deleted along with its parent.

The StorageAttributes `"storageAffinity"` value is a hint to DMSS on which storage repository it should store the entity in. For example `blob`, `nosql`, `sql`.

A datasource must be configured with repositories supporting these "storageAffinities" for this to have any effect.

## UiRecipe

A recipe on how to present entities.

A UiRecipe may look something like this;

```json
{
  "type": "dmss://system/SIMOS/UiRecipe",
  "name": "Edit",
  "description": "Default blueprint edit",
  "plugin": "edit-blueprint",
  "config": {
    "type": "dmss://system/SIMOS/PluginsConfig/EditBlueprint",
    "fontColor": "blue"
  }
}
```

This example is a UiRecipe used for entities of the core `dmss://system/SIMOS/Blueprint`-type.  
This particular recipe is used to load a javascript UI-plugin named "edit-blueprint".
The "config" value of a UiRecipe is of type "object", and can be any valid entity. The config object itself is passed to the plugin, and it's up to the plugin to interpret the config object.


## RecipeLinks, RecipeLookups and ApplicationContexts

Since different applications may have different needs for viewing the same model, UiRecipes can only be associated with a 
specific blueprint by creating an __application recipe lookup__.

```mermaid
flowchart TB;
    subgraph Lookup 2
    A2[Application 2]
    end
    
    subgraph Lookup 1
    A1[Application 1]-->B1[[Blueprint reference]];
    A1-->B2[[Blueprint reference]];
    
    B1--> R1>Recipe]
    B1--> R2>Recipe]
    end
```

This diagram shows the relationship between a named _lookup_, a list of blueprint references, and recipes for each blueprint.
The lookup object itself "lives" in an DMSS instance, and can be created by either basic API-calls, or using the [DM-CLI](https://github.com/equinor/dm-cli) tool.

Input for the "create application lookup" is a _name_ (the application name should be used), and a list of paths to packages that RecipeLinks should be read from. DMSS will dig down recursively in these packages, looking to RecipeLinks.

```bash
dm create-lookup myApp DataSource/recipe_links DataSource/more_recipe_links
```

This will create a lookup with name `myApp` in DMSS, based on all the entities of type `dmss://system/SIMOS/RecipeLink` found within the two packages.

For reference, _RecipeLinks_ may look like this;

```json
{
  "type": "dmss://system/SIMOS/RecipeLink",
  "_blueprintPath_": "dmss://system/SIMOS/Blueprint",
  "initialUiRecipe": {    {
      "name": "MyBlueprintEdit",
      "type": "dmss://system/SIMOS/UiRecipe",
      "plugin": "custom-edit-blueprint"
    },}
  "uiRecipes": [
    {
      "name": "Yaml",
      "type": "dmss://system/SIMOS/UiRecipe",
      "plugin": "yaml-view"
    },
    {
      "type": "dmss://system/SIMOS/UiRecipe",
      "name": "Edit",
      "description": "Default blueprint edit",
      "plugin": "edit-blueprint"
    }
  ],
  "storageRecipes": [
        {
      "type": "dmss://system/SIMOS/StorageRecipe",
      "name": "DefaultStorageRecipe",
      "attributes": [
        {
          "name": "attributes",
          "type": "dmss://system/SIMOS/StorageAttribute",
          "contained": true
        }
      ]
    }
  ]
}
```

When there are more than one UiRecipe in the RecipeLink, the web-frontend will always chose the "initialUiRecipe", then the first in the list if no "initial", unless a specific recipe has been given.

### Default RecipeLinks

To set an application wide default RecipeLink, you can create an entity of type RecipeLink with a `_blueprintPath_` set to `_default_`. All blueprints in your app that _does not have a specific RecipeLink_ will then use the recipes given in this `_default_` RecipeLink.

As a last fallback, if no recipes are found from the Apps RecipeLookup, a set of builtin recipes will be provided.  
Namely [YAML-view](https://github.com/equinor/dm-core-packages/tree/main/packages/dm-core-plugins/src/yaml), and [form](https://github.com/equinor/dm-core-packages/tree/main/packages/dm-core-plugins/src/form).

### Web apps and ApplicationContexts

This could be considered an advanced topic, which you might not need to worry about. But understanding the underlying functionality could be useful if you want to do something special.

The main component recommend to render entites in a ReactJS web application is the `<UIPluginSelector>` from the core javascript library. 
You would use that like so;

```jsx
import { UIPluginSelector} from '@development-framework/dm-core'
...
<UIPluginSelector
    absoluteDottedId={`${dataSourceId}/${entity._id}`}
    type={entity.type}
/>
...
```

Now, without any reference to an _application recipe lookup_, this would not find any UiRecipes, and only use the default ones.
The missing part is wrapping the `<UIPluginSelector>` in an _ApplicationContext_. This is already handled for you in the `create-dm-app`,
but if you want to do it yourself, it could look something like this;

```jsx
function App() {
  const [application, isLoading, updateApplication, error] = useDocument(myApplicationEntityId)

  return (
    <ApplicationContext.Provider value={application}>
      <UIPluginSelector
        absoluteDottedId={`${dataSourceId}/${application?._id}`}
        type={application?.type}
      />
    </ApplicationContext.Provider>
  )
}
```

You can read more about React contexts [here](https://beta.reactjs.org/reference/react/useContext).  
You only need to wrap you application once, not on every usage of the `<UIPluginSelector>`.
