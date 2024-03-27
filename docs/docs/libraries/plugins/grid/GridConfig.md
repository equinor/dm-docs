# GridPluginConfig.json
```json
{
  "name": "GridPluginConfig",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "size",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/grid/GridSize"
    },
    {
      "name": "itemBorder",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/grid/GridBorder",
      "optional": true
    },
    {
      "name": "showItemBorders",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "items",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/grid/GridItem",
      "dimensions": "*"
    }
  ]
}
```

