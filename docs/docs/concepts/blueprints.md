---
sidebar_position: 1
---

# Blueprints and entities

Blueprints and entitites are the core of the Development Framework, everything else depends on them. Understanding them is essential.

TDLR: Blueprints are a _programming language agnostic and _portable, definition for data structures_. Entities are concrete instances of these data structures.

:::tip

Entities are to blueprints what objects are to classes.

:::

## Blueprints

A blueprint is the definition on how a data object should look like. Meaning it defines which attributes/properties it will have, and which types those attributes will be.

Example of types are:
  - String
  - Number
  - Boolean
  - Array/List/Matrix
  - Objects (other blueprints)

A blueprint is described on the [JSON](https://www.json.org/json-en.html) format. This format is choose as it is both human and machine readable, highly portable (can be stored as files in a filesystem, sent over HTTP, and broadly supported in most programming languages and storage technologies).

This is a minimal blueprint for a car.

```json showLineNumbers title="Car.blueprint.json"
{
  "name": "Car",
  "type": "Blueprint",
  "description": "A blueprint for a basic car",
  "attributes": [
    {
      "name": "type",
      "type": "BlueprintAttribute",
      "attributeType": "string"
    },
    {
      "name": "registrationNumber",
      "type": "BlueprintAttribute",
      "attributeType": "string"
    }
    {
      "name": "horsepower",
      "description": "Brake horsepower (DIN 70020)",
      "type": "BlueprintAttribute",
      "attributeType": "number"
    },
    {
      "name": "wheels",
      "type": "BlueprintAttribute",
      "attributeType": "Wheel",
      "dimensions": "4"
    }
  ]
}
```
We start from the top to understand this:

  1. Every blueprint must have a `name` (line 2), this is used to refere to it later, when we create an entity based on this blueprint.

  2. ALL documents (meaning blueprint _and_ entities) _must_ have a `type` (line 3). This one is a _URI_ (identifier) to the blueprint that defines how blueprints should look like. Thats right, even blueprints has a blueprint (it's a self-referencing system). You can have a look at the `"master blueprint"` here [dmss://system/SIMOS/Blueprint][Blueprint]. You will see that its name is "Blueprint", and that it has attributes like "name", "description", and "attributes". It implements itself... 🤯

  3. The blueprint has a meta-attribute named `description` (line 4). Useful for providing some extra information about the blueprint.

  4. Remember, the purpose of a blueprint is to define attributes for entities based off it. Those definitions are set in the `attributes` attribute (line 5), which is a list. Items in this list are objects, and therefore entities of its own, and must have a type which defines them. You will see that the `type` for every object in this array is `BlueprintAttribute`. You might be starting to see a pattern. _That_ is the blueprint defining how attribute definitions should look like. 

  5. The first attribute in the list is "type" (line 7). This is a requirement, so that when we create an entity from this blueprint, the entity will carry the information on which type it is, that is... Car (but with the full URI)

  6. The next two attributes should be self explaintory by now. "registrationNumber" and "horsepower" are single value attributes, of type `string` and `number`. The type the resulting entity attribute gets is given by the `"attributeType"`. The `"type"` value in these object simply states that the object is a "BlueprintAttribute".
  
  7. The last attribute, "wheels", are a bit more complex. The `attributeType` value is a URI to another blueprint (Wheel), meaning its an other object, defined by the "Wheel" blueprint. The `dimensions` value is a string with value `"4"`. This means that the "wheels" attribute on any car entity should be a single dimension array, with 4 items. A 3D array with unfixed size would be defines as `"*,*,*"`.

It's understandable if you need to read this a few more times. Also seeing some examples might help to grasp the concept.

## Entities

An entity populates the attributes of its blueprint with real values. The blueprint is the definition of a car, the entity _is_ the car. We can create multiple cars based on the same Car blueprint.

An entity of the `Car` blueprint described above can look like this:

```json showLineNumbers title="car.entity.json"
{
  "type": "./Car",
  "registrationNumber": "AB12345",
  "horsepower": "235",
  "wheels": [
    {
      "type": "./Wheel",
      "pressure": 2.9
    },
    {
      "type": "./Wheel",
      "pressure": 2.8
    },
    {
      "type": "./Wheel",
      "pressure": 3
    },
    {
      "type": "./Wheel",
      "pressure": 2.9
    }
  ]
}
```

The entity has exactly 4 attributes all of which are defined in the attribute list of the Car blueprint. Values are required by default, but can be set to optional.

Notice how the `type` attribute refers to the name attribute of the blueprint we wrote above? For more info about how to reference blueprints, see [References to other blueprints](#references).

## How to create a Blueprint?

The `type` must be a reference to [`system/SIMOS/Blueprint`][Blueprint], which is the "master blueprint" used to describe all other blueprints.

The `name` should reflect what the model is, and should be written in UpperCamelCase to differentiate them from entites which should have names in lowerCamelCase.


For each blueprint attribute, the `type` should be a reference to [`system/SIMOS/BlueprintAttribute`][BlueprintAttribute], which is the Blueprint that describe the attributes for Blueprints.

### system/SIMOS/Blueprint

Has the following attributes, where `name` and `type` is required.

| Attribute   | Type                              | Description                                                                                                                    |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| type        | string                            | A reference to the Blueprint type.                                                                                             |
| name        | string                            | The name of the blueprint                                                                                                      |
| description | string                            | More information about the blueprint                                                                                           |
| extends     | Array[string]                            | A list of references to other blueprints. The blueprint will inherit all the attributes from the blueprint(s) it extends from. The iheritance will happen from right to left. Meaning attributes in the last blueprint will override attributes with the same name in blueprints earlier in the array. |
| attributes  | Array[`system/SIMOS/BlueprintAttribute`] | List of attributes.                                                                                                            |

### system/SIMOS/BlueprintAttribute

This is the blueprint used to define attributes in blueprints. It has the following attributes

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
| contained     | boolean  | Can be used for non-primitive attributes to describes the conceptual belonging of one entity to another. A contained attribute is owned by the document listing it, and will be deleted alongside its parent. An uncontained attribute is owned by another document, and only referenced from this one.                          |
| enumType      | string   | Can be used as an extra limitation on values. Ex: Setting attributeType to string and enumType to [dmss://system/SIMOS/enums/StorageTypes][StorageTypes] will limit the valid options to "default", "blob", "video", "large" and "veryLarge".                                   |

## References to other blueprints {#references}

When blueprints and entities are imported to DMSS, a virtual filesystem will be created, where every document is organized under datasources and folders. For example is the master blueprint `"dmss://system/SIMOS/Blueprint"` stored in the "system" datasource, in the "SIMOS" _root package_. This format is called an "absolute reference".

When working with documents locally, you might not know the full URI they will have after uploading them to DMSS. You might choose to upload it to different datasources, or into other packages. This is solved by allowing for several ways to reference other blueprint in documents locally, which will the be resolved when importing to DMSS.

For example, if you write in your local `car.json` file the
address `CORE:Blueprint` or `./blueprints/Car` and upload the blueprints to dmss, then those addresses will be translated to `dmss://system/SIMOS/Blueprint` and `dmss://DemoDataSource/carPackage/blueprints/Car`.

:::note

Reference is created using the name attribute of the blueprint you want to refer to, _not_ its filename. I.e. "Car", not "Car.blueprint.json".

:::

Example of address types:

| Address type            | Description                                                                                                        | Example                                                                                                                                                                                                                                                              |
|-------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| By path                 | Full absolute path prefixed with protocol                                                                          | ```dmss://datasource/package/entity``` or ```dmss://datasource/package/subfolder/entity```                                                                                                                                                                           |
| By id                   | Refer to a document using id. The id must be prefixed with a `$` sign.                                             | ```dmss://datasource/$2d7c3249-985d-43d2-83cf-a887e440825a```                                                                                                                                                                                                        |
| By alias                | Require dependencies to be defined somewhere in the source tree using [_meta_](./../concepts/meta.md) information. | ```ALIAS:package/entity``` or ```ALIAS:entity```                                                                                                                                                                                                                     |
| By data source          | Relative from the destination data source.                                                                         | ```/package/entity``` or ```/package/subfolder/entity```                                                                                                                                                                                                             |
| By Package              | Relative from the source package                                                                                   | ```entity``` or ```subfolder/entity```                                                                                                                                                                                                                               |
| By dotted relative path | Relative from the file (UNIX directory traversal)                                                                  | ```./.../entity``` or  ```../subfolder/entity``` or ```../../subfolder/entity```                                                                                                                                                                                                                  |


Other syntax option  - these will work in combination with the address types in the above table.

| Type                    | Description                                            | Example                                                                         |
|-------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------|
| Dot                     | Reference a complex attribute inside an entity         | ```dmss://datasource/carPackage/car.engine.fuelPump```                          |
| Brackets                | Use brackets + index to refer to list elements.        | ```dmss://datasource/carPackage/car.wheels[0]```                                |
| Hat                     | Use the `^` syntax to refer to the top of the document.    | ```"^.cars[1]"```, Also see example below                                       |         
| Thilde                     | Use the `~` syntax to refer to the parent object.    | ```"~.~.cars[1]"```, Also see example below                                       |         





Example of hat syntax :
```json
{
  "name": "Hertz",
  "type": "./blueprints/CarRentalCompany",
  "cars": [
    {
      "type": "./blueprints/Car",
      "plateNumber": "3333",
      "name": "Volvo"
    }
  ],
  "customers": [
    {
      "type": "./blueprints/Customer",
      "phoneNumber": 5555,
      "name": "Janne",
      "car": {
        "address": "^.cars[0]",
        "type": "CORE:Reference",
        "referenceType": "link"
      }
    },
    {
      "type": "./blueprints/Customer",
      "phoneNumber": 1234,
      "name": "Jonas",
      "car": {
        "address": "~.~.cars[0]",
        "type": "CORE:Reference",
        "referenceType": "link"
      }
    }
  ]
}
```
Here, the address stored in `Hertz.customers[0].car.address` refers to `Hertz.cars[0]`. 


[Blueprint]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/Blueprint.json
[BlueprintAttribute]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/BlueprintAttribute.json
[StorageTypes]: https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/enums/StorageTypes.json


## Model and storage containment
For entities, we have the concept of containment both on a model and storage level.

### Model containment
By `model contained`, we mean that an entity belongs to another entity.
This is determined by the boolean `contained` flag in the BlueprintAttribute. By default, contained is set to true.

Given the minified blueprint for Employee:
```json
{
  "name": "Employee",
  "type": "Blueprint",
  "attributes": [
    {
      "name": "contractTerms",
      "type": "BlueprintAttribute",
      "attributeType": "ContractTerms",
      "contained": true,
      "optional": true
    }
    {
      "name": "manager",
      "type": "BlueprintAttribute",
      "attributeType": "Employee",
      "contained": false,
      "optional": true
    },
    {
      "name": "age",
      "type": "BlueprintAttribute",
      "attributeType": "number"
    }
  ]
}
```

Entity of employee Jason:
```json
{
  "name": "Jason",
  "type": "./Employee",
  "contractTerms": {
    "type": "./ContractTerms",
    "salary": 55,
    "startDate": 01.01.1970
  },
  "manager": {
    "type": "dmss://system/SIMOS/Reference",
    "address": "datasource/Employees/bill_statham",
    "referenceType": "link"
  },
  "age": 27
}
```
For the employee `Jason`, the contractTerms attribute is contained inside the entity, while the manager attribute is a `link reference` to another entity.

When fetching an entity from DMSS, a `depth` parameter can be included in the GET request to determine whether or not 
the reference should be resolved and the content returned.

When deleting the entity "Jason", the contained "contractTerms" entity will also be deleted, while only the reference to the manger, not the manger entity itself.


### Storage containment

:::warning

Support for storage containment is not entirely implemented

:::
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
