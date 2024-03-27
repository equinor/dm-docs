# ControlConfig.json
```json
{
  "name": "ControlConfig",
  "type": "CORE:Blueprint",
  "description": "",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "hideLogs",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "runnerTemplates",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/common/Template",
      "dimensions": "*",
      "optional": true
    }
  ]
}
```

