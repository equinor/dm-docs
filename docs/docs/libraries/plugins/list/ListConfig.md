# ListPluginConfig.json
```json
{
  "name": "ListPluginConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "expanded",
      "type": "CORE:BlueprintAttribute",
      "description": "Initial expand state for items in list",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "compact",
      "type": "CORE:BlueprintAttribute",
      "description": "If table should be more compact, with less padding and smaller icons. ",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "saveExpanded",
      "type": "CORE:BlueprintAttribute",
      "description": "Use save button to save expanded items.",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "selectFromScope",
      "type": "CORE:BlueprintAttribute",
      "description": "An address for where the user should be able to select entities from, when adding to the list",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "hideInvalidTypes",
      "type": "CORE:BlueprintAttribute",
      "description": "When appending to the list, whether or not the user should see invalid types in the entity selector",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "headers",
      "type": "CORE:BlueprintAttribute",
      "description": "Name of primitive child attributes to display in item",
      "attributeType": "string",
      "default": ["name", "type"],
      "dimensions": "*"
    },
    {
      "name": "functionality",
      "type": "CORE:BlueprintAttribute",
      "description": "List functionality config",
      "attributeType": "PLUGINS:dm-core-plugins/list/FunctionalityConfig",
      "optional": true
    },
    {
      "name": "expandViewConfig",
      "type": "CORE:BlueprintAttribute",
      "description": "Which ViewConfig to render when expanding the list item.",
      "attributeType": "CORE:ViewConfig",
      "optional": true
    },
    {
      "name": "openViewConfig",
      "type": "CORE:BlueprintAttribute",
      "description": "Which ViewConfig to render when open the list item.",
      "attributeType": "CORE:ViewConfig",
      "optional": true
    },
    {
      "name": "width",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "Width of the complete list",
      "attributeType": "string",
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
      "description": "Control whether index should be appended to label when list item is opened.",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "label",
      "type": "CORE:BlueprintAttribute",
      "description": "Override label for all items that are opened in a ViewSelector from List.",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "defaultPaginationRowsPerPage",
      "type": "CORE:BlueprintAttribute",
      "description": "The number of rows per page to show by default. If there are less rows in the list than this number, then pagination selector will not be visible. ",
      "attributeType": "number",
      "optional": true
    }
  ]
}
```

# FunctionalityConfig.json
```json
{
  "name": "FunctionalityConfig",
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
      "default": true,
      "optional": true
    },
    {
      "name": "add",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    },
    {
      "name": "edit",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    },
    {
      "name": "sort",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    },
    {
      "name": "open",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "expand",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": true,
      "optional": true
    }
  ]
}
```

