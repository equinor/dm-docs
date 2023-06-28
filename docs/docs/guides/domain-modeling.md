---
sidebar_position: 1
---

# Domain modeling

## Adding a blueprint

TODO



## Special types
When creating models, the user has to specify types. There are some types that needs special treatment.

### `object` type
The object type is used to specify that an attribute can be any object. 
However, this should only be used as an `attributeType` inside a blueprint. Using it as `type` is not valid.
For example, the following is NOT allowed:
```json
{
  "type": "object",
  "name": "objectEntity",
  "description": "An entity of type object",
  "numberValue": 1232,
  "booleanValue": false,
  "stringValue": "foo"
}
```



Example usage of the object type: The FormBlueprint has an attribute called someEntity, and the entity of type FormBlueprint may 
have any object value in its `someEntity` attribute. 


```json
{
   "type": "dmss://system/SIMOS/Blueprint",
   "name": "FormBlueprint",
   "attributes": [
      {
        "attributeType": "string",
        "type": "CORE:BlueprintAttribute",
        "name": "type"
      },
      {
        "attributeType": "string",
        "type": "CORE:BlueprintAttribute",
        "name": "name"
      },
      {
        "type": "CORE:BlueprintAttribute",
        "name": "someEntity",
        "description": "Generic entity",
        "attributeType": "object",
        "contained": false
      }
   ]
}
```


```json
{
   "type": "dmss://DemoDataSource/plugins/form/blueprints/FormBlueprint",
   "name": "exampleForm",
   "someEntity": {
      "type": "dmss://DataSource/objectBlueprint",
      "name": "objectEntity",
      "numberValue": 1232,
      "booleanValue": false
    },
   ...
}
```





### `any` type
The any type is another special type that should only be used internally in DMSS. Using it when modeling is not valid. This type is used in the `BlueprintAttribute` blueprint in DMSS, to make it possible for the `defaultValue` for a blueprint to have any type. Therefore, the `defaultValue` will not be validated in DMSS. 
