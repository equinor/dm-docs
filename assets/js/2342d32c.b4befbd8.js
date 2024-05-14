"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[6894],{61680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(74848),r=n(28453);const s={sidebar_position:1},l="Blueprints and entities",d={id:"concepts/blueprints",title:"Blueprints and entities",description:"Blueprints and entitites are the core of the Development Framework, everything else depends on them. Understanding them is essential.",source:"@site/docs/concepts/blueprints.md",sourceDirName:"concepts",slug:"/concepts/blueprints",permalink:"/dm-docs/docs/concepts/blueprints",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/dm-docs/docs/getting-started"},next:{title:"Recipes",permalink:"/dm-docs/docs/concepts/recipes"}},a={},o=[{value:"Blueprints",id:"blueprints",level:2},{value:"Entities",id:"entities",level:2},{value:"How to create a Blueprint?",id:"how-to-create-a-blueprint",level:2},{value:"system/SIMOS/Blueprint",id:"systemsimosblueprint",level:3},{value:"system/SIMOS/BlueprintAttribute",id:"systemsimosblueprintattribute",level:3},{value:"References to other blueprints",id:"references",level:2},{value:"Model and storage containment",id:"model-and-storage-containment",level:2},{value:"Model containment",id:"model-containment",level:3},{value:"Storage containment",id:"storage-containment",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"blueprints-and-entities",children:"Blueprints and entities"}),"\n",(0,i.jsx)(t.p,{children:"Blueprints and entitites are the core of the Development Framework, everything else depends on them. Understanding them is essential."}),"\n",(0,i.jsxs)(t.p,{children:["TDLR: Blueprints are a _programming language agnostic and ",(0,i.jsx)(t.em,{children:"portable, definition for data structures"}),". Entities are concrete instances of these data structures."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Entities are to blueprints what objects are to classes."})}),"\n",(0,i.jsx)(t.h2,{id:"blueprints",children:"Blueprints"}),"\n",(0,i.jsx)(t.p,{children:"A blueprint is the definition on how a data object should look like. Meaning it defines which attributes/properties it will have, and which types those attributes will be."}),"\n",(0,i.jsx)(t.p,{children:"Example of types are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"String"}),"\n",(0,i.jsx)(t.li,{children:"Number"}),"\n",(0,i.jsx)(t.li,{children:"Boolean"}),"\n",(0,i.jsx)(t.li,{children:"Array/List/Matrix"}),"\n",(0,i.jsx)(t.li,{children:"Objects (other blueprints)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["A blueprint is described on the ",(0,i.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," format. This format is choose as it is both human and machine readable, highly portable (can be stored as files in a filesystem, sent over HTTP, and broadly supported in most programming languages and storage technologies)."]}),"\n",(0,i.jsx)(t.p,{children:"This is a minimal blueprint for a car."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'showLineNumbers title="Car.blueprint.json"',children:'{\n  "name": "Car",\n  "type": "Blueprint",\n  "description": "A blueprint for a basic car",\n  "attributes": [\n    {\n      "name": "type",\n      "type": "BlueprintAttribute",\n      "attributeType": "string"\n    },\n    {\n      "name": "registrationNumber",\n      "type": "BlueprintAttribute",\n      "attributeType": "string"\n    }\n    {\n      "name": "horsepower",\n      "description": "Brake horsepower (DIN 70020)",\n      "type": "BlueprintAttribute",\n      "attributeType": "number"\n    },\n    {\n      "name": "wheels",\n      "type": "BlueprintAttribute",\n      "attributeType": "Wheel",\n      "dimensions": "4"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"We start from the top to understand this:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Every blueprint must have a ",(0,i.jsx)(t.code,{children:"name"})," (line 2), this is used to refere to it later, when we create an entity based on this blueprint."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["ALL documents (meaning blueprint ",(0,i.jsx)(t.em,{children:"and"})," entities) ",(0,i.jsx)(t.em,{children:"must"})," have a ",(0,i.jsx)(t.code,{children:"type"})," (line 3). This one is a ",(0,i.jsx)(t.em,{children:"URI"})," (identifier) to the blueprint that defines how blueprints should look like. Thats right, even blueprints has a blueprint (it's a self-referencing system). You can have a look at the ",(0,i.jsx)(t.code,{children:'"master blueprint"'})," here ",(0,i.jsx)(t.a,{href:"https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/Blueprint.json",children:"dmss://system/SIMOS/Blueprint"}),'. You will see that its name is "Blueprint", and that it has attributes like "name", "description", and "attributes". It implements itself... \ud83e\udd2f']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The blueprint has a meta-attribute named ",(0,i.jsx)(t.code,{children:"description"})," (line 4). Useful for providing some extra information about the blueprint."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Remember, the purpose of a blueprint is to define attributes for entities based off it. Those definitions are set in the ",(0,i.jsx)(t.code,{children:"attributes"})," attribute (line 5), which is a list. Items in this list are objects, and therefore entities of its own, and must have a type which defines them. You will see that the ",(0,i.jsx)(t.code,{children:"type"})," for every object in this array is ",(0,i.jsx)(t.code,{children:"BlueprintAttribute"}),". You might be starting to see a pattern. ",(0,i.jsx)(t.em,{children:"That"})," is the blueprint defining how attribute definitions should look like."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'The first attribute in the list is "type" (line 7). This is a requirement, so that when we create an entity from this blueprint, the entity will carry the information on which type it is, that is... Car (but with the full URI)'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:['The next two attributes should be self explaintory by now. "registrationNumber" and "horsepower" are single value attributes, of type ',(0,i.jsx)(t.code,{children:"string"})," and ",(0,i.jsx)(t.code,{children:"number"}),". The type the resulting entity attribute gets is given by the ",(0,i.jsx)(t.code,{children:'"attributeType"'}),". The ",(0,i.jsx)(t.code,{children:'"type"'}),' value in these object simply states that the object is a "BlueprintAttribute".']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:['The last attribute, "wheels", are a bit more complex. The ',(0,i.jsx)(t.code,{children:"attributeType"}),' value is a URI to another blueprint (Wheel), meaning its an other object, defined by the "Wheel" blueprint. The ',(0,i.jsx)(t.code,{children:"dimensions"})," value is a string with value ",(0,i.jsx)(t.code,{children:'"4"'}),'. This means that the "wheels" attribute on any car entity should be a single dimension array, with 4 items. A 3D array with unfixed size would be defines as ',(0,i.jsx)(t.code,{children:'"*,*,*"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It's understandable if you need to read this a few more times. Also seeing some examples might help to grasp the concept."}),"\n",(0,i.jsx)(t.h2,{id:"entities",children:"Entities"}),"\n",(0,i.jsxs)(t.p,{children:["An entity populates the attributes of its blueprint with real values. The blueprint is the definition of a car, the entity ",(0,i.jsx)(t.em,{children:"is"})," the car. We can create multiple cars based on the same Car blueprint."]}),"\n",(0,i.jsxs)(t.p,{children:["An entity of the ",(0,i.jsx)(t.code,{children:"Car"})," blueprint described above can look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'showLineNumbers title="car.entity.json"',children:'{\n  "type": "./Car",\n  "registrationNumber": "AB12345",\n  "horsepower": "235",\n  "wheels": [\n    {\n      "type": "./Wheel",\n      "pressure": 2.9\n    },\n    {\n      "type": "./Wheel",\n      "pressure": 2.8\n    },\n    {\n      "type": "./Wheel",\n      "pressure": 3\n    },\n    {\n      "type": "./Wheel",\n      "pressure": 2.9\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The entity has exactly 4 attributes all of which are defined in the attribute list of the Car blueprint. Values are required by default, but can be set to optional."}),"\n",(0,i.jsxs)(t.p,{children:["Notice how the ",(0,i.jsx)(t.code,{children:"type"})," attribute refers to the name attribute of the blueprint we wrote above? For more info about how to reference blueprints, see ",(0,i.jsx)(t.a,{href:"#references",children:"References to other blueprints"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-create-a-blueprint",children:"How to create a Blueprint?"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"type"})," must be a reference to ",(0,i.jsx)(t.a,{href:"https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/Blueprint.json",children:(0,i.jsx)(t.code,{children:"system/SIMOS/Blueprint"})}),', which is the "master blueprint" used to describe all other blueprints.']}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"name"})," should reflect what the model is, and should be written in UpperCamelCase to differentiate them from entites which should have names in lowerCamelCase."]}),"\n",(0,i.jsxs)(t.p,{children:["For each blueprint attribute, the ",(0,i.jsx)(t.code,{children:"type"})," should be a reference to ",(0,i.jsx)(t.a,{href:"https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/BlueprintAttribute.json",children:(0,i.jsx)(t.code,{children:"system/SIMOS/BlueprintAttribute"})}),", which is the Blueprint that describe the attributes for Blueprints."]}),"\n",(0,i.jsx)(t.h3,{id:"systemsimosblueprint",children:"system/SIMOS/Blueprint"}),"\n",(0,i.jsxs)(t.p,{children:["Has the following attributes, where ",(0,i.jsx)(t.code,{children:"name"})," and ",(0,i.jsx)(t.code,{children:"type"})," is required."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"A reference to the Blueprint type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The name of the blueprint"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"description"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"More information about the blueprint"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"extends"}),(0,i.jsx)(t.td,{children:"Array[string]"}),(0,i.jsx)(t.td,{children:"A list of references to other blueprints. The blueprint will inherit all the attributes from the blueprint(s) it extends from. The iheritance will happen from right to left. Meaning attributes in the last blueprint will override attributes with the same name in blueprints earlier in the array."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attributes"}),(0,i.jsxs)(t.td,{children:["Array[",(0,i.jsx)(t.code,{children:"system/SIMOS/BlueprintAttribute"}),"]"]}),(0,i.jsx)(t.td,{children:"List of attributes."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"systemsimosblueprintattribute",children:"system/SIMOS/BlueprintAttribute"}),"\n",(0,i.jsx)(t.p,{children:"This is the blueprint used to define attributes in blueprints. It has the following attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Name of the attribute."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"A reference to the BlueprintAttribute type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"description"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Extra information"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attributeType"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The attribute type. Can be a reference to another blueprint, or a primitive type (string, integer, number, boolean)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dimensions"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["Degree of dimensions, formatted as a comma separated list of integers or ",(0,i.jsx)(t.code,{children:"*"}),". The ",(0,i.jsx)(t.code,{children:"*"}),' (wildcard) has the special meaning of "unknown length". Ex: ',(0,i.jsx)(t.code,{children:"*"})," (1D of unknown length), ",(0,i.jsx)(t.code,{children:"2,2"})," (2D of size 2x2), ",(0,i.jsx)(t.code,{children:"3,*"})," (2D, where the inner array have unknown length and the outer array have length 3)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"label"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"A pretty variant of the attribute name, used to display the attribute name in a user friendly manner."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"default"}),(0,i.jsx)(t.td,{children:"any json"}),(0,i.jsx)(t.td,{children:"Default value for the attribute. Same type as the attribute itself"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"optional"}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"If the attribute is optional or required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contained"}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"Can be used for non-primitive attributes to describes the conceptual belonging of one entity to another. A contained attribute is owned by the document listing it, and will be deleted alongside its parent. An uncontained attribute is owned by another document, and only referenced from this one."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enumType"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["Can be used as an extra limitation on values. Ex: Setting attributeType to string and enumType to ",(0,i.jsx)(t.a,{href:"https://github.com/equinor/data-modelling-storage-service/blob/master/src/SIMOS/enums/StorageTypes.json",children:"dmss://system/SIMOS/enums/StorageTypes"}),' will limit the valid options to "default", "blob", "video", "large" and "veryLarge".']})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References to other blueprints"}),"\n",(0,i.jsxs)(t.p,{children:["When blueprints and entities are imported to DMSS, a virtual filesystem will be created, where every document is organized under datasources and folders. For example is the master blueprint ",(0,i.jsx)(t.code,{children:'"dmss://system/SIMOS/Blueprint"'}),' stored in the "system" datasource, in the "SIMOS" ',(0,i.jsx)(t.em,{children:"root package"}),'. This format is called an "absolute reference".']}),"\n",(0,i.jsx)(t.p,{children:"When working with documents locally, you might not know the full URI they will have after uploading them to DMSS. You might choose to upload it to different datasources, or into other packages. This is solved by allowing for several ways to reference other blueprint in documents locally, which will the be resolved when importing to DMSS."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if you write in your local ",(0,i.jsx)(t.code,{children:"car.json"})," file the\naddress ",(0,i.jsx)(t.code,{children:"CORE:Blueprint"})," or ",(0,i.jsx)(t.code,{children:"./blueprints/Car"})," and upload the blueprints to dmss, then those addresses will be translated to ",(0,i.jsx)(t.code,{children:"dmss://system/SIMOS/Blueprint"})," and ",(0,i.jsx)(t.code,{children:"dmss://DemoDataSource/carPackage/blueprints/Car"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Reference is created using the name attribute of the blueprint you want to refer to, ",(0,i.jsx)(t.em,{children:"not"}),' its filename. I.e. "Car", not "Car.blueprint.json".']})}),"\n",(0,i.jsx)(t.p,{children:"Example of address types:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Address type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By path"}),(0,i.jsx)(t.td,{children:"Full absolute path prefixed with protocol"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"dmss://datasource/package/entity"})," or ",(0,i.jsx)(t.code,{children:"dmss://datasource/package/subfolder/entity"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By id"}),(0,i.jsxs)(t.td,{children:["Refer to a document using id. The id must be prefixed with a ",(0,i.jsx)(t.code,{children:"$"})," sign."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dmss://datasource/$2d7c3249-985d-43d2-83cf-a887e440825a"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By alias"}),(0,i.jsxs)(t.td,{children:["Require dependencies to be defined somewhere in the source tree using ",(0,i.jsx)(t.a,{href:"/dm-docs/docs/concepts/meta",children:(0,i.jsx)(t.em,{children:"meta"})})," information."]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"ALIAS:package/entity"})," or ",(0,i.jsx)(t.code,{children:"ALIAS:entity"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By data source"}),(0,i.jsx)(t.td,{children:"Relative from the destination data source."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"/package/entity"})," or ",(0,i.jsx)(t.code,{children:"/package/subfolder/entity"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By Package"}),(0,i.jsx)(t.td,{children:"Relative from the source package"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"entity"})," or ",(0,i.jsx)(t.code,{children:"subfolder/entity"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"By dotted relative path"}),(0,i.jsx)(t.td,{children:"Relative from the file (UNIX directory traversal)"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"./.../entity"})," or  ",(0,i.jsx)(t.code,{children:"../subfolder/entity"})," or ",(0,i.jsx)(t.code,{children:"../../subfolder/entity"})]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Other syntax option  - these will work in combination with the address types in the above table."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Dot"}),(0,i.jsx)(t.td,{children:"Reference a complex attribute inside an entity"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dmss://datasource/carPackage/car.engine.fuelPump"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Brackets"}),(0,i.jsx)(t.td,{children:"Use brackets + index to refer to list elements."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dmss://datasource/carPackage/car.wheels[0]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Hat"}),(0,i.jsxs)(t.td,{children:["Use the ",(0,i.jsx)(t.code,{children:"^"})," syntax to refer to the top of the document."]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:'"^.cars[1]"'}),", Also see example below"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thilde"}),(0,i.jsxs)(t.td,{children:["Use the ",(0,i.jsx)(t.code,{children:"~"})," syntax to refer to the parent object."]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:'"~.~.cars[1]"'}),", Also see example below"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Example of hat syntax :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Hertz",\n  "type": "./blueprints/CarRentalCompany",\n  "cars": [\n    {\n      "type": "./blueprints/Car",\n      "plateNumber": "3333",\n      "name": "Volvo"\n    }\n  ],\n  "customers": [\n    {\n      "type": "./blueprints/Customer",\n      "phoneNumber": 5555,\n      "name": "Janne",\n      "car": {\n        "address": "^.cars[0]",\n        "type": "CORE:Reference",\n        "referenceType": "link"\n      }\n    },\n    {\n      "type": "./blueprints/Customer",\n      "phoneNumber": 1234,\n      "name": "Jonas",\n      "car": {\n        "address": "~.~.cars[0]",\n        "type": "CORE:Reference",\n        "referenceType": "link"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here, the address stored in ",(0,i.jsx)(t.code,{children:"Hertz.customers[0].car.address"})," refers to ",(0,i.jsx)(t.code,{children:"Hertz.cars[0]"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"model-and-storage-containment",children:"Model and storage containment"}),"\n",(0,i.jsx)(t.p,{children:"For entities, we have the concept of containment both on a model and storage level."}),"\n",(0,i.jsx)(t.h3,{id:"model-containment",children:"Model containment"}),"\n",(0,i.jsxs)(t.p,{children:["By ",(0,i.jsx)(t.code,{children:"model contained"}),", we mean that an entity belongs to another entity.\nThis is determined by the boolean ",(0,i.jsx)(t.code,{children:"contained"})," flag in the BlueprintAttribute. By default, contained is set to true."]}),"\n",(0,i.jsx)(t.p,{children:"Given the minified blueprint for Employee:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Employee",\n  "type": "Blueprint",\n  "attributes": [\n    {\n      "name": "contractTerms",\n      "type": "BlueprintAttribute",\n      "attributeType": "ContractTerms",\n      "contained": true,\n      "optional": true\n    }\n    {\n      "name": "manager",\n      "type": "BlueprintAttribute",\n      "attributeType": "Employee",\n      "contained": false,\n      "optional": true\n    },\n    {\n      "name": "age",\n      "type": "BlueprintAttribute",\n      "attributeType": "number"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Entity of employee Jason:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Jason",\n  "type": "./Employee",\n  "contractTerms": {\n    "type": "./ContractTerms",\n    "salary": 55,\n    "startDate": 01.01.1970\n  },\n  "manager": {\n    "type": "dmss://system/SIMOS/Reference",\n    "address": "datasource/Employees/bill_statham",\n    "referenceType": "link"\n  },\n  "age": 27\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For the employee ",(0,i.jsx)(t.code,{children:"Jason"}),", the contractTerms attribute is contained inside the entity, while the manager attribute is a ",(0,i.jsx)(t.code,{children:"link reference"})," to another entity."]}),"\n",(0,i.jsxs)(t.p,{children:["When fetching an entity from DMSS, a ",(0,i.jsx)(t.code,{children:"depth"})," parameter can be included in the GET request to determine whether or not\nthe reference should be resolved and the content returned."]}),"\n",(0,i.jsx)(t.p,{children:'When deleting the entity "Jason", the contained "contractTerms" entity will also be deleted, while only the reference to the manger, not the manger entity itself.'}),"\n",(0,i.jsx)(t.h3,{id:"storage-containment",children:"Storage containment"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Support for storage containment is not entirely implemented"})}),"\n",(0,i.jsxs)(t.p,{children:["Unlike model containment, storage containment is defined in a blueprint's ",(0,i.jsx)(t.code,{children:"RecipeLink"})," and not in the blueprint itself.\nIf not specified, storage containment is set to true for all attributes in a blueprint."]}),"\n",(0,i.jsx)(t.p,{children:"Example fo storage uncontained:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "CORE:RecipeLink",\n  "_blueprintPath_": "dmss://DemoDataSource/apps/SimulationApp/blueprints/Simulation",\n  "uiRecipes": {},\n  "storageRecipes": [\n    {\n      "name": "DEFAULT",\n      "type": "dmss://system/SIMOS/StorageRecipe",\n      "description": "",\n      "attributes": [\n        {\n          "name": "bestSimulationResult",\n          "type": "dmss://system/SIMOS/StorageAttribute",\n          "contained": false\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here, the recipe of the ",(0,i.jsx)(t.code,{children:"Simulation"})," blueprint says that the attribute ",(0,i.jsx)(t.code,{children:"bestSimulationResult"})," is storage uncontained."]}),"\n",(0,i.jsxs)(t.p,{children:["This means that ",(0,i.jsx)(t.code,{children:"bestSimulationResult"})," will be stored separately from the entity of type ",(0,i.jsx)(t.code,{children:"Simulation"})," (in another document in the database)."]}),"\n",(0,i.jsx)(t.p,{children:"When modeling, it will look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "simulation1",\n  "type": "DemoDataSource/apps/SimulationApp/blueprints/Simulation",\n  "bestSimulationResult": {\n    "type": "dmss://system/SIMOS/Reference",\n    "address": "dmss://DemoDataSource/apps/SimulationApp/results/bestResult2023",\n    "referenceType": "storage"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Storage uncontained attributes will be stored as a storage reference in the entity."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);