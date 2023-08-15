---
sidebar_position: 1
---

# Blueprints and entities

Blueprints and entitites are the core of the Development Framework. Understanding them is essential, but not trivial, so if you have any questions after reading this article, please do not hesitate to ask.

:::info

Entities are to blueprints what objects are to classes.

:::

## What is a Blueprint?

A blueprint is described in [JSON](https://www.json.org/json-en.html).

Below is a short version of a Car blueprint.

```json showLineNumbers title="Car.blueprint.json"
{
  "name": "Car",
  "type": "dmss://system/SIMOS/Blueprint",
  "description": "A description of a car",
  "attributes": [
    {
      "name": "type",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "carModel",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "registrationNumber",
      "type": "dmss://system/SIMOS/BlueprintAttribute",
      "attributeType": "string"
    }
  ]
}
```

What can we read out of this code?

- Line 2 contains the name of the blueprint, which is used when referring to this blueprint.
- Line 3 contains the type of the blueprint. The word `type` carries some extra meaning in the Development Framework since it tells us which blueprint a blueprint or entity is implementing. In this case, it tells us that this JSON object is of type [dmss://system/SIMOS/Blueprint][Blueprint], and will therefore have attributes such as `name`, `type`, `description` and `attributes`. If you open the URL, you can see that it links to a blueprint with name Blueprint and type `dmss://system/SIMOS/Blueprint`. That means that the Blueprint blueprint actually implements itself!
- Line 4 contains the description of the blueprint, which tells us that this blueprint can be used to describe a car.
- Line 5 to 21 list the attributes of the blueprint - `type`, `carModel` and `registrationNumber`. All entities implementing this blueprint must have these three attributes, and only them. An attribute definition is always an implementation of the [dmss://system/SIMOS/BlueprintAttribute][BlueprintAttribute], hence the type.

## What is an entity?

An entity populates the attributes of the blueprint with real values.

An entity of the `Car` blueprint described above can look like this:

```json showLineNumbers title="car.entity.json"
{
  "type": "./Car",
  "carModel": "Skoda Octavia",
  "registrationNumber": "AB12345"
}
```

Notice how the `type` attribute refers to the name attribute of the blueprint we wrote above? For more info about how to reference blueprints, see [References to other blueprints](#references).

## How to create a Blueprint?

The `name` should reflect what the model is, and should be written in camel case.

For blueprints, the `type` should be a reference to [`system/SIMOS/Blueprint`][Blueprint], which is the Blueprint that is used to describe all other blueprints.

For each blueprint attribute, the `type` should be a reference to [`system/SIMOS/BlueprintAttribute`][BlueprintAttribute], which is the Blueprint that describe the attributes for Blueprints.

### system/SIMOS/Blueprint

Has the following attributes, where `name` and `type` is required.

| Attribute   | Type                              | Description                                                                                                     |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| type        | string                            | A reference to the Blueprint type.                                                                              |
| name        | string                            | The name of the blueprint                                                                                       |
| description | string                            | More information about the model                                                                                |
| extends     | string                            | A list of references to other blueprints. The blueprint will inherit attributes from the referenced blueprints. |
| attributes  | `system/SIMOS/BlueprintAttribute` | List of attributes.                                                                                             |

### system/SIMOS/BlueprintAttribute

Has the following attributes, where `name`, `attributeType` and `type` is required.

| Attribute     | Type     | Description                                                                                                                                                                                                                                                          |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string   | Name of the attribute.                                                                                                                                                                                                                                               |
| type          | string   | A reference to the BlueprintAttribute type.                                                                                                                                                                                                                          |
| description   | string   | Extra information                                                                                                                                                                                                                                                    |
| attributeType | string   | The attribute type. Can be a reference to another blueprint, or a primitive type (string, integer, number, boolean).                                                                                                                                                 |
| dimensions    | string   | Degree of dimensions, formatted as a comma separated list of integers or `*`. `*`(wildcard) has the special meaning of "unfixed size". Ex: `*` (1D of infinite length), `2,2` (2D of size 2x2), `3,*` (2D, where the inner array have infinite length)               |
| label         | string   | A pretty variant of the attribute name, used to display the attribute name in a user friendly manner.                                                                                                                                                                |
| default       | any json | Default value for the attribute. Same type as the attribute itself                                                                                                                                                                                                   |
| optional      | boolean  | If the attribute is optional or required                                                                                                                                                                                                                             |
| contained     | boolean  | Can be used for non-primitive attributes to describes the conceptual belonging of one entity to another. A contained attribute is owned by the document listing it, and will be deleted alongside its parent. An uncontained attribute is owned by another document. |
| enumType      | string   | Can be used as an extra limitation on primitive attributes. Ex: Setting attributeType to string and enumType to [dmss://system/SIMOS/enums/StorageTypes][StorageTypes] will limit the valid options to "default", "blob", "video", "large" and "veryLarge".          |

## References to other blueprints {#references}

It is possible to reference other blueprint from the `type`, `extends`, `attributeType`, and `_blueprintPath_` attributes.

There are several ways to describe a reference to other blueprints, all of which are understood and resolved during import.

Note that the reference is created using the name attribute of the blueprint you want to refer to, not its filename. Ie "Car", not "Car.blueprint.json".

_By URI_ - Full absolute path prefixed with protocol

```
dmss://datasource/package/entity
dmss://datasource/package/subfolder/entity
```

_By Alias_ - Require dependencies to be defined somewhere in the source tree using [_meta_](./../concepts/meta.md) information.

```
ALIAS:package/entity
ALIAS:entity
```

_By data source_ - Relative from the destination data source.

```
/package/entity
/package/subfolder/entity
```

_By package_ - Relative from the source package

```
entity
subfolder/entity
```

_By dotted_ - Relative from the file (UNIX directory traversal)

```
./../entity
../subfolder/entity
../../subfolder/entity
```

[Blueprint]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/Blueprint.json
[BlueprintAttribute]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/BlueprintAttribute.json
[StorageTypes]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/enums/StorageTypes.json
