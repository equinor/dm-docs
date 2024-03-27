# TablePluginConfig.json
```json
{
  "name": "TablePluginConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "width",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "Width of the complete table",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "variant",
      "type": "CORE:BlueprintAttribute",
      "description": "Define table variants. Initial variant will be decided by which variant is passed first. Variants are 'view' and 'edit'",
      "attributeType": "PLUGINS:dm-core-plugins/table/TableVariantConfig",
      "default": [
        {
          "name": "view",
          "type": "PLUGINS:dm-core-plugins/table/TableVariantConfig"
        }
      ],
      "dimensions": "*",
      "optional": true
    },
    {
      "name": "columns",
      "type": "CORE:BlueprintAttribute",
      "description": "Name of primitive child attributes to display in header of item",
      "attributeType": "PLUGINS:dm-core-plugins/table/TableColumnConfig",
      "default": [
        {
          "type": "./TableColumnConfig",
          "data": "name",
          "label": "Name"
        },
        {
          "type": "./TableColumnConfig",
          "data": "type",
          "editable": false
        }
      ],
      "dimensions": "*",
      "optional": true
    },
    {
      "name": "expandableRecipeViewConfig",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "CORE:ViewConfig",
      "optional": true
    },
    {
      "name": "templates",
      "type": "CORE:BlueprintAttribute",
      "description": "Attribute on parent (of same type as list) which should be used as template when instantiating new items. (e.g. 'template' will use the 'template' attribute on the parent.)",
      "attributeType": "PLUGINS:dm-core-plugins/common/Template",
      "dimensions": "*",
      "optional": true
    },
    {
      "name": "labelByIndex",
      "type": "CORE:BlueprintAttribute",
      "description": "Control whether index should be appended to label when table item is opened.",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "label",
      "type": "CORE:BlueprintAttribute",
      "description": "Override label for all items that are opened in a ViewSelector from table.",
      "attributeType": "string",
      "optional": true
    }
  ]
}
```

# TableFunctionalityConfig.json
```json
{
  "name": "TableFunctionalityConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "delete",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "add",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    }
  ]
}
```

# TableColumnConfig.json
```json
{
  "name": "TableColumnConfig",
  "type": "CORE:Blueprint",
  "description": "In addition to adding columns that extract fields from data, you can also pass predefined fields like ^tab and ^expandable as data name to add predefined functionality to your table. The order of columns you pass is the order it will be printed in.",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "data",
      "type": "CORE:BlueprintAttribute",
      "description": "Name of field you want to extract from data object",
      "attributeType": "string"
    },
    {
      "name": "dataType",
      "type": "CORE:BlueprintAttribute",
      "description": "Allowed values are 'string' | 'boolean' | 'number' | 'datetime'",
      "attributeType": "string",
      "default": "string",
      "optional": true
    },
    {
      "name": "presentAs",
      "type": "CORE:BlueprintAttribute",
      "description": "If dataType is of type boolean. Available values: checkbox, text",
      "attributeType": "string",
      "default": "checkbox",
      "optional": true
    },
    {
      "name": "label",
      "type": "CORE:BlueprintAttribute",
      "description": "Column label. Label will be name of data field by default",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "editable",
      "type": "CORE:BlueprintAttribute",
      "description": "Should data be editable in table edit mode.",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    },
    {
      "name": "sortable",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    }
  ]
}
```

# TableVariantConfig.json
```json
{
  "name": "TableVariantConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "name",
      "type": "CORE:BlueprintAttribute",
      "description": "Available variants: view, edit",
      "attributeType": "string"
    },
    {
      "name": "density",
      "type": "CORE:BlueprintAttribute",
      "description": "Available values: compact, comfortable",
      "attributeType": "string",
      "default": "compact",
      "optional": true
    },
    {
      "name": "functionality",
      "type": "CORE:BlueprintAttribute",
      "description": "Table functionality config",
      "attributeType": "PLUGINS:dm-core-plugins/table/TableFunctionalityConfig",
      "default": {
        "type": "PLUGINS:dm-core-plugins/table/TableFunctionalityConfig",
        "add": true,
        "delete": true
      },
      "optional": true
    }
  ]
}
```

