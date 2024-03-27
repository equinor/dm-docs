# ResponsiveGridPluginConfig.json
```json
{
  "name": "ResponsiveGridPluginConfig",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "showItemBorders",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "rows",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/responsive_grid/RowItem",
      "dimensions": "*"
    }
  ]
}
```

# ColumnSize.json
```json
{
  "name": "ColumnSize",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "xs",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "sm",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "md",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "lg",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "xl",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "xxl",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    }
  ]
}
```

# RowItem.json
```json
{
  "name": "RowItem",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "columns",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "./ColumnItem",
      "optional": true,
      "dimensions": "*"
    }
  ]
}
```

# ColumnItem.json
```json
{
  "name": "ColumnItem",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "viewConfig",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "CORE:ViewConfig"
    },
    {
      "name": "title",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "size",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "./ColumnSize",
      "optional": true
    }
  ]
}
```

