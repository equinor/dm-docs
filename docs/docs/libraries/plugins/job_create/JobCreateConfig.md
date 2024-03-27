# CreateConfig.json
```json
{
  "name": "CreateConfig",
  "type": "CORE:Blueprint",
  "description": "",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "recurring",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "hideLogs",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "boolean",
      "default": false,
      "optional": true
    },
    {
      "name": "jobTemplates",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "PLUGINS:dm-core-plugins/common/Template",
      "dimensions": "*",
      "optional": true
    },
    {
      "name": "jobTargetAddress",
      "type": "CORE:BlueprintAttribute",
      "description": "Where the created jobs should be placed. Absolute or relative address",
      "attributeType": "string"
    },
    {
      "name": "jobInputAddress",
      "type": "CORE:BlueprintAttribute",
      "description": "'applicationInput' for the created job. Absolute or relative address",
      "attributeType": "string",
      "optional": true
    }
  ]
}
```

