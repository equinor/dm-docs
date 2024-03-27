# ViewSelectorConfig.json
```json
{
  "name": "ViewSelectorConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "childTabsOnRender",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    },
    {
      "name": "items",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",
      "contained": true,
      "dimensions": "*",
      "optional": true
    }
  ]
}
```

# ViewSelectorItem.json
```json
{
  "name": "ViewSelectorItem",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "viewConfig",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "CORE:ViewConfig",
      "optional": true
    },
    {
      "name": "label",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "eds_icon",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "subItems",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",
      "dimensions": "*",
      "optional": true
    }
  ]
}
```

# RecipeSelectorConfig.json
```json
{
  "name": "RecipeSelectorConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "viewConfig",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "CORE:ViewConfig",
      "contained": true,
      "dimensions": "*",
      "optional": true
    }
  ]
}
```

