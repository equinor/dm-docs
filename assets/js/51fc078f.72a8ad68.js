"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[7618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Meta",sidebar_position:5},i=void 0,l={unversionedId:"concepts/meta",id:"concepts/meta",title:"Meta",description:"Documents can have an attribute called meta.",source:"@site/docs/concepts/meta.md",sourceDirName:"concepts",slug:"/concepts/meta",permalink:"/dm-docs/docs/concepts/meta",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Meta",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data sources and packages",permalink:"/dm-docs/docs/concepts/data-sources"},next:{title:"Jobs",permalink:"/dm-docs/docs/concepts/jobs"}},s={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Documents can have an attribute called ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta_"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_meta_": {\n    "type": "CORE:Meta",\n    "version": "0.0.1",\n    "dependencies": [\n      {\n        "alias": "CORE",\n        "address": "system/SIMOS",\n        "version": "0.0.1",\n        "protocol": "dmss"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta_")," information makes it possible to use alias as a reference to other documents like Blueprints or Packages.\nIn DMSS, a dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"ALIAS:")," is translated to:  ",(0,o.kt)("inlineCode",{parentName:"p"},"<protocol>://<address>/"),".\nIn the example above, there is a dependency with alias ",(0,o.kt)("inlineCode",{parentName:"p"},"CORE:Package")," that will be translated to the reference ",(0,o.kt)("inlineCode",{parentName:"p"},"dmss://system/SIMOS/Package")," in DMSS."),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-cli"},"dm-cli")," to upload documents to DMSS, the alias is automatically translated to the reference. Therefore, all documents stored in DMSS have the full reference on the format ",(0,o.kt)("inlineCode",{parentName:"p"},"<protocol>://<dataSource>/<path>")," instead of the alias ",(0,o.kt)("inlineCode",{parentName:"p"},"<alias>:<path>"),".  "),(0,o.kt)("p",null,"When exporting documents from DMSS using the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"export/{absolute_document_ref}"),", the references are translated back to the alias format ",(0,o.kt)("inlineCode",{parentName:"p"},"<alias>:<path>"),". "),(0,o.kt)("p",null,"DMSS can also be used to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta_")," information of an entity, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"export/meta"),"endpoint."),(0,o.kt)("h1",{id:"how-to-define-meta-info-for-a-package"},"How to define Meta info for a package"),(0,o.kt)("p",null,"When modeling locally (creating local json files) a special ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," can be used to define meta information for a package."),(0,o.kt)("p",null,"Example: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Package.json file definition",src:n(36).Z,width:"260",height:"282"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," should be placed inside a local folder. In the example above, the package ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," will have the meta information defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,o.kt)("p",null,"Example package.json file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "models",\n  "type": "CORE:Package",\n  "_meta_": {\n    "type": "CORE:Meta",\n    "version": "0.0.1",\n    "dependencies": [\n      {\n        "type": "CORE:Dependency",\n        "alias": "CORE",\n        "address": "system/SIMOS",\n        "version": "0.0.1",\n        "protocol": "dmss"\n      }\n    ]\n  }\n}\n\n')),(0,o.kt)("p",null,"Note: the alias defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," will also be available for use in all sub packages and sub documents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," package in the example above."))}d.isMDXComponent=!0},36:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/package_json_definition-7429369355d1c73181f46983ca663ef6.jpeg"}}]);