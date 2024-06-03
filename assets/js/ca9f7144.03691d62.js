"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[8350],{17538:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(74848),t=i(28453);const s={sidebar_position:0,title:"FormPlugin",sidebar_label:"Documentation"},d=void 0,l={id:"libraries/@development-framework/dm-core-plugins/FormPlugin/Documentation",title:"FormPlugin",description:"Form allows user to input and save data.",source:"@site/docs/libraries/@development-framework/dm-core-plugins/FormPlugin/Documentation.md",sourceDirName:"libraries/@development-framework/dm-core-plugins/FormPlugin",slug:"/libraries/@development-framework/dm-core-plugins/FormPlugin/Documentation",permalink:"/dm-docs/docs/libraries/@development-framework/dm-core-plugins/FormPlugin/Documentation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"FormPlugin",sidebar_label:"Documentation"},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/dm-docs/docs/libraries/@development-framework/dm-core-plugins/ExplorerPlugin/Documentation"},next:{title:"Blueprints",permalink:"/dm-docs/docs/libraries/@development-framework/dm-core-plugins/FormPlugin/Blueprints"}},o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Selecting form fields",id:"fields",level:3},{value:"Using widgets",id:"using-widgets",level:3},{value:"Configuring recipe for nested objects",id:"object-recipes",level:3},{value:"Available Widgets",id:"available-widgets",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Form allows user to input and save data."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#fields",children:"Selecting form fields"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#using-widgets",children:"Using widgets"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#object-recipes",children:"Configuring recipe for nested objects"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#available-widgets",children:"Available Widgets"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Selecting form fields"}),"\n",(0,r.jsx)(n.p,{children:"Pass field names defined in blueprint to fields array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"{3}",children:'"config": {\n      "type": "PLUGINS:dm-core-plugins/form/FormInput",\n      "fields": ["name", "date_of_birth", "address"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"using-widgets",children:"Using widgets"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"{7}",children:'"config": {\n    "type": "PLUGINS:dm-core-plugins/form/FormInput",\n    "attributes": [\n        {\n            "name": "date_of_birth",\n            "type": "PLUGINS:dm-core-plugins/form/fields/StringField",\n            "widget": "DateTimeWidget"\n        }\n    ],\n    "fields": ["name", "date_of_birth", "address"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"object-recipes",children:"Configuring recipe for nested objects"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"{8}",children:'"config": {\n    "type": "PLUGINS:dm-core-plugins/form/FormInput",\n    "attributes": [\n    {\n        "name": "address",\n        "type": "PLUGINS:dm-core-plugins/form/fields/ObjectField",\n        "showInline": true,\n        "uiRecipe": "Edit"\n    }\n    ],\n    "fields": ["name", "date_of_birth", "address"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"available-widgets",children:"Available Widgets"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CheckboxWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"TextWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"TextareaWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"BlueprintPickerWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"TypeWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SwitchWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SelectWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NumberWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DateTimeWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DimensionalScalarWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EntityPickerWidget"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"HyperlinkWidget"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);