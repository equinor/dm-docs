"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[9868],{37529:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(74848),s=i(28453);const o={title:"Recipes",sidebar_position:2},a=void 0,r={id:"concepts/recipes",title:"Recipes",description:"To express how a model is stored and how it is presented, we use  StorageRecipes and UiRecipes.",source:"@site/docs/concepts/recipes.md",sourceDirName:"concepts",slug:"/concepts/recipes",permalink:"/dm-docs/docs/concepts/recipes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Recipes",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Blueprints and entities",permalink:"/dm-docs/docs/concepts/blueprints"},next:{title:"Plugins",permalink:"/dm-docs/docs/concepts/plugins"}},c={},l=[{value:"StorageRecipe",id:"storagerecipe",level:2},{value:"UiRecipe",id:"uirecipe",level:2},{value:"RecipeLinks, RecipeLookups and ApplicationContexts",id:"recipelinks-recipelookups-and-applicationcontexts",level:2},{value:"Default RecipeLinks",id:"default-recipelinks",level:3},{value:"Web apps and ApplicationContexts",id:"web-apps-and-applicationcontexts",level:3}];function p(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To express how a model is ",(0,t.jsx)(n.em,{children:"stored"})," and how it is ",(0,t.jsx)(n.em,{children:"presented"}),", we use  ",(0,t.jsx)(n.code,{children:"StorageRecipes"})," and ",(0,t.jsx)(n.code,{children:"UiRecipes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A recipe is an entity of the core Storage-/UiRecipe blueprints."}),"\n",(0,t.jsx)(n.h2,{id:"storagerecipe",children:"StorageRecipe"}),"\n",(0,t.jsx)(n.p,{children:"A recipe on how to store the attributes of an entity."}),"\n",(0,t.jsx)(n.p,{children:"StorageRecipes are mainly to be consumed by the Data Modelling Storage Service."}),"\n",(0,t.jsxs)(n.p,{children:["For now, StorageRecipes are mainly used to split large models into smaller parts.\nThe main reason you would like to do this is for performance. For example if you\nhave an entity of a sensor, with some meta data, and an array of 10MB of sensor readings.\nIt would be smart to store the raw data separately, so we don't need to load the whole thing just to read some metadata.",(0,t.jsx)(n.br,{}),"\n","You can also save some cost, by choosing a cheaper storage technology for large amounts of data, that is not often read."]}),"\n",(0,t.jsx)(n.p,{children:"A StorageRecipes may look something like this;"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dmss://system/SIMOS/StorageRecipe",\n  "name": "DEFAULT",\n  "attributes": [\n    {\n      "name": "content",\n      "type": "dmss://system/SIMOS/StorageAttribute",\n      "contained": false,\n      "storageAffinity": "default"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This StorageRecipes is used for the core ",(0,t.jsx)(n.code,{children:"dmss://system/SIMOS/Package"}),'-type.\nFrom this we can read that any objects that are a part of the "content" attribute for a package, is not\nstored in the same package entity but is a separate document in the backing storage techonology. Instead of the actual object, a reference object is inserted. If you then want to load the package and it\'s content, you will need to make a GET request with ',(0,t.jsx)(n.code,{children:"depth>0"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that if the attribute is ",(0,t.jsx)(n.em,{children:"model contained"}),", but ",(0,t.jsx)(n.em,{children:"storage uncontained"}),", it will be deleted along with its parent."]}),"\n",(0,t.jsxs)(n.p,{children:["The StorageAttributes ",(0,t.jsx)(n.code,{children:'"storageAffinity"'})," value is a hint to DMSS on which storage repository it should store the entity in. For example ",(0,t.jsx)(n.code,{children:"blob"}),", ",(0,t.jsx)(n.code,{children:"nosql"}),", ",(0,t.jsx)(n.code,{children:"sql"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'A datasource must be configured with repositories supporting these "storageAffinities" for this to have any effect.'}),"\n",(0,t.jsx)(n.h2,{id:"uirecipe",children:"UiRecipe"}),"\n",(0,t.jsx)(n.p,{children:"A recipe on how to present entities."}),"\n",(0,t.jsx)(n.p,{children:"A UiRecipe may look something like this;"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dmss://system/SIMOS/UiRecipe",\n  "name": "Edit",\n  "description": "Default blueprint edit",\n  "plugin": "edit-blueprint",\n  "config": {\n    "type": "dmss://system/SIMOS/PluginsConfig/EditBlueprint",\n    "fontColor": "blue"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This example is a UiRecipe used for entities of the core ",(0,t.jsx)(n.code,{children:"dmss://system/SIMOS/Blueprint"}),"-type.",(0,t.jsx)(n.br,{}),"\n",'This particular recipe is used to load a javascript UI-plugin named "edit-blueprint".\nThe "config" value of a UiRecipe is of type "object", and can be any valid entity. The config object itself is passed to the plugin, and it\'s up to the plugin to interpret the config object.']}),"\n",(0,t.jsx)(n.h2,{id:"recipelinks-recipelookups-and-applicationcontexts",children:"RecipeLinks, RecipeLookups and ApplicationContexts"}),"\n",(0,t.jsxs)(n.p,{children:["Since different applications may have different needs for viewing the same model, UiRecipes can only be associated with a\nspecific blueprint by creating an ",(0,t.jsx)(n.strong,{children:"application recipe lookup"}),"."]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TB;\n    subgraph Lookup 2\n    A2[Application 2]\n    end\n    \n    subgraph Lookup 1\n    A1[Application 1]--\x3eB1[[Blueprint reference]];\n    A1--\x3eB2[[Blueprint reference]];\n    \n    B1--\x3e R1>Recipe]\n    B1--\x3e R2>Recipe]\n    end"}),"\n",(0,t.jsxs)(n.p,{children:["This diagram shows the relationship between a named ",(0,t.jsx)(n.em,{children:"lookup"}),', a list of blueprint references, and recipes for each blueprint.\nThe lookup object itself "lives" in an DMSS instance, and can be created by either basic API-calls, or using the ',(0,t.jsx)(n.a,{href:"https://github.com/equinor/dm-cli",children:"DM-CLI"})," tool."]}),"\n",(0,t.jsxs)(n.p,{children:['Input for the "create application lookup" is a ',(0,t.jsx)(n.em,{children:"name"})," (the application name should be used), and a list of paths to packages that RecipeLinks should be read from. DMSS will dig down recursively in these packages, looking to RecipeLinks."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dm create-lookup myApp DataSource/recipe_links DataSource/more_recipe_links\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a lookup with name ",(0,t.jsx)(n.code,{children:"myApp"})," in DMSS, based on all the entities of type ",(0,t.jsx)(n.code,{children:"dmss://system/SIMOS/RecipeLink"})," found within the two packages."]}),"\n",(0,t.jsxs)(n.p,{children:["For reference, ",(0,t.jsx)(n.em,{children:"RecipeLinks"})," may look like this;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dmss://system/SIMOS/RecipeLink",\n  "_blueprintPath_": "dmss://system/SIMOS/Blueprint",\n  "initialUiRecipe": {    {\n      "name": "MyBlueprintEdit",\n      "type": "dmss://system/SIMOS/UiRecipe",\n      "plugin": "custom-edit-blueprint"\n    },}\n  "uiRecipes": [\n    {\n      "name": "Yaml",\n      "type": "dmss://system/SIMOS/UiRecipe",\n      "plugin": "yaml-view"\n    },\n    {\n      "type": "dmss://system/SIMOS/UiRecipe",\n      "name": "Edit",\n      "description": "Default blueprint edit",\n      "plugin": "edit-blueprint"\n    }\n  ],\n  "storageRecipes": [\n        {\n      "type": "dmss://system/SIMOS/StorageRecipe",\n      "name": "DefaultStorageRecipe",\n      "attributes": [\n        {\n          "name": "attributes",\n          "type": "dmss://system/SIMOS/StorageAttribute",\n          "contained": true\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'When there are more than one UiRecipe in the RecipeLink, the web-frontend will always chose the "initialUiRecipe", then the first in the list if no "initial", unless a specific recipe has been given.'}),"\n",(0,t.jsx)(n.h3,{id:"default-recipelinks",children:"Default RecipeLinks"}),"\n",(0,t.jsxs)(n.p,{children:["To set an application wide default RecipeLink, you can create an entity of type RecipeLink with a ",(0,t.jsx)(n.code,{children:"_blueprintPath_"})," set to ",(0,t.jsx)(n.code,{children:"_default_"}),". All blueprints in your app that ",(0,t.jsx)(n.em,{children:"does not have a specific RecipeLink"})," will then use the recipes given in this ",(0,t.jsx)(n.code,{children:"_default_"})," RecipeLink."]}),"\n",(0,t.jsxs)(n.p,{children:["As a last fallback, if no recipes are found from the Apps RecipeLookup, a set of builtin recipes will be provided.",(0,t.jsx)(n.br,{}),"\n","Namely ",(0,t.jsx)(n.a,{href:"https://github.com/equinor/dm-core-packages/tree/main/packages/dm-core-plugins/src/yaml",children:"YAML-view"}),", and ",(0,t.jsx)(n.a,{href:"https://github.com/equinor/dm-core-packages/tree/main/packages/dm-core-plugins/src/form",children:"form"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"web-apps-and-applicationcontexts",children:"Web apps and ApplicationContexts"}),"\n",(0,t.jsx)(n.p,{children:"This could be considered an advanced topic, which you might not need to worry about. But understanding the underlying functionality could be useful if you want to do something special."}),"\n",(0,t.jsxs)(n.p,{children:["The main component recommend to render entites in a ReactJS web application is the ",(0,t.jsx)(n.code,{children:"<UIPluginSelector>"})," from the core javascript library.\nYou would use that like so;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { UIPluginSelector} from '@development-framework/dm-core'\n...\n<UIPluginSelector\n    absoluteDottedId={`${dataSourceId}/${entity._id}`}\n    type={entity.type}\n/>\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, without any reference to an ",(0,t.jsx)(n.em,{children:"application recipe lookup"}),", this would not find any UiRecipes, and only use the default ones.\nThe missing part is wrapping the ",(0,t.jsx)(n.code,{children:"<UIPluginSelector>"})," in an ",(0,t.jsx)(n.em,{children:"ApplicationContext"}),". This is already handled for you in the ",(0,t.jsx)(n.code,{children:"create-dm-app"}),",\nbut if you want to do it yourself, it could look something like this;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function App() {\n  const [application, isLoading, updateApplication, error] = useDocument(myApplicationEntityId)\n\n  return (\n    <ApplicationContext.Provider value={application}>\n      <UIPluginSelector\n        absoluteDottedId={`${dataSourceId}/${application?._id}`}\n        type={application?.type}\n      />\n    </ApplicationContext.Provider>\n  )\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about React contexts ",(0,t.jsx)(n.a,{href:"https://beta.reactjs.org/reference/react/useContext",children:"here"}),".",(0,t.jsx)(n.br,{}),"\n","You only need to wrap you application once, not on every usage of the ",(0,t.jsx)(n.code,{children:"<UIPluginSelector>"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);