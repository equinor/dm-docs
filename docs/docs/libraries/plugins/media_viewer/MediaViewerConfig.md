# MediaViewerConfig.json
```json
{
  "name": "MediaViewerConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "width",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "height",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "number",
      "optional": true
    },
    {
      "name": "showMeta",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "showDescription",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "caption",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "description",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string",
      "optional": true
    }
  ]
}
```

