---
sidebar_position: 1
---

# Blueprints and entities

Blueprints can be used to create domain models. 

:::info

A blueprint is a model and an instance of a blueprint is called an entity. 

:::

## What is a Blueprint?

A blueprint is described in [JSON](https://www.json.org/json-en.html). 

It is an JSON object that maps keys to values.

Below is a short version of a Car blueprint. 

```json
{
  "name": "Car",
  "type": "dmss://system/SIMOS/Blueprint",
  "description": "This describes how a car looks like",
  "attributes": [
    {
      "attributeType": "string",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "name": "name"
    },
    {
      "attributeType": "string",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "name": "description"
    }
  ]
}
```
Any blueprint can be understood by simply looking at it. 

In the example above, you can find out, by looking at its attributes: `name`, `type` and `attributes`. 

* That it represent a Car model 
* It is of type `system/SIMOS/Blueprint`
* It has the two attributes `name` and `description`.

## How to create a Blueprint?

The `name` should reflects what the model is.

For blueprints, the `type` should be a reference to `system/SIMOS/Blueprint`, which is the Blueprint that is used to describe all other blueprints. 

For each blueprint attribute, the `type` should be a reference to `system/SIMOS/BlueprintAttribute`, which is the Blueprint that describe the attributes for Blueprints.

### system/SIMOS/Blueprint

Has the following attributes, where the `name` and `type` is required.

| Attribute        | Type                              | Description                                                                                            |
|------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------|
| type             | string                            | A reference to the Blueprint type.                                                                     |
 | name             | string                            | The name of the blueprint                                                                              |
| description      | string                            | More information about the model                                                                       |
| extends          | string                            | A reference to another blueprint. The blueprint will inherit attributes from the referenced blueprint. |
| attributes       | `system/SIMOS/BlueprintAttribute` | List of attributes.                                                                                    | 

:::info

An attribute that can be complex (reference to another blueprint) or primitive (string, integer, number, boolean). 

:::

### system/SIMOS/BlueprintAttribute

Has the following attributes, where the `attributeType` and `type` is required.  

| Attribute     | Type     | Description                                                                                                                                                                                                |
|---------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| attributeType | string   | The attribute type. Can be a reference to another blueprint, or a primitive type (string, integer, number, boolean).                                                                                       |
| name          | string   | Name of the attribute.                                                                                                                                                                                     |
| contained     | boolean  | Describes the conceptual belonging of one entity to another. In other words, if an entity must always be considered in the context of it's "parent" (true), or the entity has meaning on it's own (false). |
| dimensions    | string   | Degree of dimensions. Format; A list of integers, each integer defines the size of a dimension. "*"(wildcard) has the special meaning of "unfixed size                                                     |
| optional      | boolean  | If the attribute is optional or required                                                                                                                                                                   |
| default       | any json | Default value for the attribute. Same type as the attribute itself                                                                                                                                         |
| enumType      | string   | A reference to an Enum entity. Value should hold the chosen enum value in the entity                                                                                                                       |

## References 

It is possible to reference other blueprint from the `type`, `extends`, `attributeType`, and `_blueprintPath_` attributes.

### Syntax

There are several ways to describe a reference to other blueprints. 

All of these references are understood and resolved during import. 

*By URI* - Full absolute path prefixed with protocol

```
dmss://datasource/package/entity
dmss://datasource/package/subfolder/entity
```

*By Alias* - Require dependencies to be defined somewhere in the source tree using [_meta_](./../concepts/meta.md) information.

```
ALIAS:packge/entity
ALIAS:entity
```

*By data source* - Relative from the destination data source.

```
/package/entity
/package/subfolder/entity
```

*By package* - Relative from the source package

```
entity
subfolder/entity
```

*By dotted* - Relative from the file (UNIX directory traversal)

```
./../entity
../subfolder/entity
../../subfolder/entity
```

## Entity

An entity populates the attributes of the blueprint with real values.

An entity of the `Car` blueprint can look like this. 

```json
{
   "type": "dmss://Car",
   "name": "Volvo",
   "description": "This is an typically car type used in Norway"
}
```

By looking at the `type` keyword, we can see that it's of type `Car`.