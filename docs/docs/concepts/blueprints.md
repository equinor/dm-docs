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

The entity has exactly three attributes ("type", "carModel", and "registrationNumber"), all of which are defined in the attribute list of the Car blueprint.

Notice how the `type` attribute refers to the name attribute of the blueprint we wrote above? For more info about how to reference blueprints, see [References to other blueprints](#references).

## How to create a Blueprint?

The `name` should reflect what the model is, and should be written in CamelCase.

For blueprints, the `type` should be a reference to [`system/SIMOS/Blueprint`][Blueprint], which is the Blueprint that is used to describe all other blueprints.

For each blueprint attribute, the `type` should be a reference to [`system/SIMOS/BlueprintAttribute`][BlueprintAttribute], which is the Blueprint that describe the attributes for Blueprints.

### system/SIMOS/Blueprint

Has the following attributes, where `name` and `type` is required.

| Attribute   | Type                              | Description                                                                                                                    |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| type        | string                            | A reference to the Blueprint type.                                                                                             |
| name        | string                            | The name of the blueprint                                                                                                      |
| description | string                            | More information about the blueprint                                                                                           |
| extends     | string                            | A list of references to other blueprints. The blueprint will inherit all the attributes from the blueprint(s) it extends from. |
| attributes  | `system/SIMOS/BlueprintAttribute` | List of attributes.                                                                                                            |

### system/SIMOS/BlueprintAttribute

Has the following attributes, where `name`, `attributeType` and `type` is required.

| Attribute     | Type     | Description                                                                                                                                                                                                                                                                                   |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string   | Name of the attribute.                                                                                                                                                                                                                                                                        |
| type          | string   | A reference to the BlueprintAttribute type.                                                                                                                                                                                                                                                   |
| description   | string   | Extra information                                                                                                                                                                                                                                                                             |
| attributeType | string   | The attribute type. Can be a reference to another blueprint, or a primitive type (string, integer, number, boolean).                                                                                                                                                                          |
| dimensions    | string   | Degree of dimensions, formatted as a comma separated list of integers or `*`. The `*` (wildcard) has the special meaning of "unknown length". Ex: `*` (1D of unknown length), `2,2` (2D of size 2x2), `3,*` (2D, where the inner array have unknown length and the outer array have length 3) |
| label         | string   | A pretty variant of the attribute name, used to display the attribute name in a user friendly manner.                                                                                                                                                                                         |
| default       | any json | Default value for the attribute. Same type as the attribute itself                                                                                                                                                                                                                            |
| optional      | boolean  | If the attribute is optional or required                                                                                                                                                                                                                                                      |
| contained     | boolean  | Can be used for non-primitive attributes to describes the conceptual belonging of one entity to another. A contained attribute is owned by the document listing it, and will be deleted alongside its parent. An uncontained attribute is owned by another document.                          |
| enumType      | string   | Can be used as an extra limitation on primitive attributes. Ex: Setting attributeType to string and enumType to [dmss://system/SIMOS/enums/StorageTypes][StorageTypes] will limit the valid options to "default", "blob", "video", "large" and "veryLarge".                                   |

## References to other blueprints {#references}

It is possible to reference other blueprint from the `type`, `extends`, `attributeType`, and `_blueprintPath_` attributes.

There are several ways to describe a reference to other blueprints, all of which are understood and resolved during import. For example, if you write in your local .json file the
address `CORE:Blueprint` or `./blueprints/Car` and upload the blueprints to dmss, then those addresses will be translated to for example `dmss://system/SIMOS/Blueprint` 
and `dmss://DemoDataSource/carPackage/Car` before the documents are saved in the database.

Note that the reference is created using the name attribute of the blueprint you want to refer to, not its filename. I.e. "Car", not "Car.blueprint.json".

Example of address types:

| Address type            | Description                                                                                                        | Example                                                                                                                                                                                                                                                              |
|-------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| By path                 | Full absolute path prefixed with protocol                                                                          | ```dmss://datasource/package/entity``` or ```dmss://datasource/package/subfolder/entity```                                                                                                                                                                           |
| By id                   | Refer to a document using id. The id must be prefixed with a `$` sign.                                             | ```dmss://datasource/$2d7c3249-985d-43d2-83cf-a887e440825a```                                                                                                                                                                                                        |
| By alias                | Require dependencies to be defined somewhere in the source tree using [_meta_](./../concepts/meta.md) information. | ```ALIAS:package/entity``` or ```ALIAS:entity```                                                                                                                                                                                                                     |
| By data source          | Relative from the destination data source.                                                                         | ```/package/entity``` or ```/package/subfolder/entity```                                                                                                                                                                                                             |
| By Package              | Relative from the source package                                                                                   | ```entity``` or ```subfolder/entity```                                                                                                                                                                                                                               |
| By dotted relative path | Relative from the file (UNIX directory traversal)                                                                  | ```./.../entity``` or  ```../subfolder/entity```or ```../../subfolder/entity```                                                                                                                                                                                                                  |


Other syntax option  - these will work together with the address types in the above table.

| Type                    | Description                                            | Example                                                                         |
|-------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------|
| Dot                     | Reference a complex attribute inside an entity         | ```dmss://datasource/carPackage/car.engine.fuelPump```                          |
| Brackets                | Use brackets + index to refer to list elements.        | ```dmss://datasource/carPackage/car.wheels[0]```                                |
| Hat                     | Use the `^` syntax to refer to the document itself.    | ```"^.cars[1]"```, Also see example below                                       |         





Example of hat syntax :
```json
{
  "name": "Hertz",
  "type": "./blueprints/CarRentalCompany",
  "cars": [
    {
      "type": "./blueprints/Car",
      "plateNumber": "1337",
      "name": "Volvo"
    }
  ],
  "customers": [
    {
      "type": "./blueprints/Customer",
      "phoneNumber": 1337,
      "name": "Jane",
      "car": {
        "address": "^.cars[0]",
        "type": "CORE:Reference",
        "referenceType": "link"
      }
    }
  ]
}
```
Here, the address stored in `Hertz.customers[0].car.address` refers to `Hertz.cars[0]`. 


[Blueprint]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/Blueprint.json
[BlueprintAttribute]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/BlueprintAttribute.json
[StorageTypes]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/home/system/SIMOS/enums/StorageTypes.json


## Model and storage containment
For entities, we have the concept of containment either on a model or storage level.

### Model containment
By `model contained`, we mean that an entity belongs inside another entity.
This is determined by the boolean `contained` flag in the BlueprintAttribute. By default, contained is set to true.

Model contained example:
```json
{
  "name": "Jason",
  "type": "./Employee",
  "manager": {
    "type": "./Employee",
    "name": "Bill",
    "age": 33
  },
  "age": 27
}
```
For the employee `Jason`, the manager attribute is contained inside the entity.

Model uncontained example:
```json
{
  "name": "Jason",
  "type": "./Employee",
  "manager": {
    "type": "dmss://system/SIMOS/Reference",
    "address": "DataSoruce/apps/EmployeeApp/Bill",
    "referenceType": "link"
  },
  "age": 27
}
```
```json
{
  "type": "./Employee",
  "name": "Bill",
  "age": 33
}
```
In this case, the manager attribute is a `link reference` to another entity stored somewhere in the database.

When fetching an entity from dmss, a `depth` parameter can be included in the GET request to determine whether or not 
the reference should be resolved.
(Resolving a link reference means that a link reference is replaced by the actual entity the link reference points to.)

If depth=0, the document will be returned without resolving any link references. If depth is higher than 1, references will be resolved.


### Storage containment
Unlike model containment, storage containment is defined in a blueprint's `RecipeLink` and not in the blueprint itself. 
If not specified, storage containment is set to true for all attributes in a blueprint.

Example fo storage uncontained:
```json
{
  "type": "CORE:RecipeLink",
  "_blueprintPath_": "dmss://DemoDataSource/apps/SimulationApp/blueprints/Simulation",
  "uiRecipes": {},
  "storageRecipes": [
    {
      "name": "DEFAULT",
      "type": "dmss://system/SIMOS/StorageRecipe",
      "description": "",
      "attributes": [
        {
          "name": "bestSimulationResult",
          "type": "dmss://system/SIMOS/StorageAttribute",
          "contained": false
        }
      ]
    }
  ]
}
```

Here, the recipe of the `Simulation` blueprint says that the attribute `bestSimulationResult` is storage uncontained. 

This means that `bestSimulationResult` will be stored separately from the entity of type `Simulation` (in another document in the database).

When modeling, it will look like this:
```json
{
  "name": "simulation1",
  "type": "DemoDataSource/apps/SimulationApp/blueprints/Simulation",
  "bestSimulationResult": {
    "type": "dmss://system/SIMOS/Reference",
    "address": "dmss://DemoDataSource/apps/SimulationApp/results/bestResult2023",
    "referenceType": "storage"
  }
}
```
Storage uncontained attributes will be stored as a storage reference in the entity.

