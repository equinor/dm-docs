# PublishConfig.json
```json
{
  "name": "PublishConfig",
  "type": "CORE:Blueprint",
  "attributes": [
    {
      "name": "type",
      "type": "CORE:BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "destination",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string",
      "description": "A reference/Id to where the published copy should be added."
    },
    {
      "name": "linkDestination",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string",
      "description": "A reference/Id to where a link to the published document should be added."
    },
    {
      "name": "wrapper",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "A blueprint for which an entity of will serve as a wrapper for the published document",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "description",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "A text to inform the user what the publish action does",
      "attributeType": "string",
      "optional": true
    },
    {
      "name": "mode",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "Which mode the publish plugin should operate in. One of 'copy' | 'link'| 'copy&link'",
      "attributeType": "string",
      "default": "copy&link",
      "optional": true
    },
    {
      "name": "wrapperAttribute",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "description": "Name of attribute in the 'publishWrapper'-blueprint of which the document will be placed.",
      "attributeType": "string",
      "optional": true
    }
  ]
}
```

