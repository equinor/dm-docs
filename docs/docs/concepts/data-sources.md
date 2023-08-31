---
title: Data sources and packages
sidebar_position: 4
---

In [data modeling storage service](https://github.com/equinor/data-modelling-storage-service) (DMSS), documents (blueprints or entities)
are stored in a _virtual_ hierarchy of data sources and packages:

* Data source
  * Root package    
    * document
    * sub package
      * document
        * ...


This hierarchy does not actually exist in the database, but there exists internal logic in DMSS to create this tree structure. 


## Data source
In the topmost layer we have data sources. A data source is an abstraction layer over one or more _storage repositories_ (can be a Mongo database, Azure file storage, etc).

To define a data source, we create a json file for it:
```json
{
  "name": "MyDataSource",
  "repositories": {
    "db": {
      "type": "mongo-db",
      "host": "db",
      "port": 27017,
      "username": "***",
      "password": "***",
      "tls": true,
      "database": "MyDatabase",
      "collection": "MyDatabaseCollection"
    }
  }
}
```

Internally in DMSS, a lookup table is created for each data source. The lookup table looks something like (when using Mongo DB as a storage repository):
```json
{
  "_id": "system",
  "name": "system",
  "repositories": {
    "a": {
      "type": "mongo-db",
      "data_types": null,
      "host": "db",
      "port": 27017,
      "username": "***",
      "password": "***",
      "database": "DMSS-core",
      "collection": "DMSS-core",
      "account_url": null,
      "container": null,
      "tls": false
    }
  },
  "documentLookUp": {
    "40388758-ee55-46be-bfa6-d3527bc2d12d": {
      "lookup_id": "40388758-ee55-46be-bfa6-d3527bc2d12d",
      "repository": "a",
      "database_id": "40388758-ee55-46be-bfa6-d3527bc2d12d",
      "acl": {
        "owner": "dmss-admin",
        "roles": {
          "dmss-admin": "WRITE"
        },
        "users": {},
        "others": "READ"
      },
      "storage_affinity": "default",
      "meta": {
        "created": "2023-08-31 09:06:31.315147"
      }
    },
    "9dfe10a9-b744-46a0-9a47-43a027368b5f": {
      "lookup_id": "9dfe10a9-b744-46a0-9a47-43a027368b5f",
      "repository": "a",
      "database_id": "9dfe10a9-b744-46a0-9a47-43a027368b5f",
      "acl": {
        "owner": "dmss-admin",
        "roles": {
          "dmss-admin": "WRITE"
        },
        "users": {},
        "others": "READ"
      },
      "storage_affinity": "default",
      "meta": {
        "created": "2023-08-31 09:06:31.326077"
      }
    }
  }
}
```

Note: as of August 2023, the `lookup_id` and `database_id` are equal, but they don't have to be. DMSS uses the `lookup_id` 
to find the correct document. Internally in the Mongo database, a different id (`database_id`) is used.

Access control for documents is also handled on the data source level.  In the lookup table the acl attribute determines 
who should have what access to each document.



## Packages
A package is very similar to a folder on your computer's local filesystem. It contains one or more documents (entities, blueprints, sub packages, etc).

A package is either a `root package`, if the package is directly under a data source, or a `non-root packages` if the package exists further down in the hierarchy.

Example of a package entity:
```json
{
    "type": "dmss://system/SIMOS/Package",
    "name": "apps",
    "isRoot": false,
    "content": [
        {
            "address": "$2305507e-4dbf-40dd-a1c6-4ee24907a534",
            "type": "dmss://system/SIMOS/Reference",
            "referenceType": "storage"
        },
        {
            "address": "$c5b8ceff-2775-413c-9546-541606b6cb42",
            "type": "dmss://system/SIMOS/Reference",
            "referenceType": "storage"
        }
    ]
}
```
The content list of a package entity is always storage uncontained. 
