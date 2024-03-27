# StackPluginConfig.json
```json
{
  "name": "StackPluginConfig",
  "type": "dmss://system/SIMOS/Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "items",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "CORE:ViewConfig",
      "dimensions": "*"
    },
    {
      "name": "direction",
      "type": "CORE:BlueprintAttribute",
      "description": "horizontal or vertical",
      "attributeType": "string",
      "optional": true,
      "default": "vertical"
    },
    {
      "name": "horizontalPlacement",
      "type": "CORE:BlueprintAttribute",
      "description": "left, center, right or spaceEvenly",
      "attributeType": "string",
      "optional": true,
      "default": "left"
    },
    {
      "name": "verticalPlacement",
      "type": "CORE:BlueprintAttribute",
      "description": "top, center or bottom",
      "attributeType": "string",
      "optional": true,
      "default": "top"
    },
    {
      "name": "spacing",
      "type": "CORE:BlueprintAttribute",
      "description": "REM value. Default is 2 = 32px",
      "attributeType": "number",
      "optional": true,
      "default": 2
    },
    {
      "name": "maxWidth",
      "type": "CORE:BlueprintAttribute",
      "description": "Set max-width of wrapper if you want to use less than 100% width.",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "wrapItems",
      "type": "CORE:BlueprintAttribute",
      "description": "When using horizontal direction, make items wrap under eachother when width is getting too small to fit all items",
      "attributeType": "boolean",
      "optional": true,
      "default": false
    },
    {
      "name": "classNames",
      "type": "CORE:BlueprintAttribute",
      "description": "Add tailwind classNames to wrapper",
      "attributeType": "string",
      "dimensions": "*",
      "optional": true
    }
  ]
}
```

