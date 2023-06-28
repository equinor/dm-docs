"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[1939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,m=c["".concat(o,".").concat(g)]||c[g]||s[g]||r;return t?i.createElement(m,p(p({ref:n},d),{},{components:t})):i.createElement(m,p({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<r;u++)p[u]=t[u];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:3},p="Plugin development",l={unversionedId:"guides/plugin-development",id:"guides/plugin-development",title:"Plugin development",description:"Apps plugins",source:"@site/docs/guides/plugin-development.md",sourceDirName:"guides",slug:"/guides/plugin-development",permalink:"/dm-docs/docs/guides/plugin-development",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Application development",permalink:"/dm-docs/docs/guides/application-development"},next:{title:"Administration",permalink:"/dm-docs/docs/guides/administration/"}},o={},u=[{value:"Apps plugins",id:"apps-plugins",level:2},{value:"Adding a UiPlugin",id:"adding-a-uiplugin",level:3},{value:"Using a UiPlugin",id:"using-a-uiplugin",level:3},{value:"Jobs plugins",id:"jobs-plugins",level:2},{value:"Adding a job handler",id:"adding-a-job-handler",level:3}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin-development"},"Plugin development"),(0,a.kt)("h2",{id:"apps-plugins"},"Apps plugins"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Assumes that the app is created using create-dm-app and that it follows its folder structure.")),(0,a.kt)("h3",{id:"adding-a-uiplugin"},"Adding a UiPlugin"),(0,a.kt)("p",null,"1) First, create a folder under ",(0,a.kt)("inlineCode",{parentName:"p"},"src/plugins/")," for the new plugin like shown below. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src/\n|_ plugins/\n  |_ new-plugin/\n    |_ index.tsx\n")),(0,a.kt)("p",null,"The requirements for a plugin is to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," file which default exports a list of plugins, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { EPluginType, TPlugin, IUIPlugin } from '@development-framework/dm-core'\n\nexport const PluginComponent = (props: IUIPlugin) => {\n  return (\n    <div>\n      Plugin content goes here!\n    </div>\n  )\n}\n\nexport const plugins: TPlugin[] = [\n  {\n    pluginName: 'newPlugin',\n    pluginType: EPluginType.UI,\n    component: PluginComponent,\n  },\n]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),"-file can export several plugins, and each plugin should have a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", specify ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginType")," (what kind of plugin it is), and the ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," (React component) associated. Everything returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," will be rendered."),(0,a.kt)("p",null,"2) To load the UiPlugin, add it to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/plugins.js"),", which contains the list of plugins to be loaded. Add the package name (plugin folder name) into the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/plugins.js")," file like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const plugins = [\n    ...already existing plugins...\n    // The extra plugin to be loaded    \n    import('./plugins/new-plugin')\n]\n\nexport default plugins\n\n")),(0,a.kt)("h3",{id:"using-a-uiplugin"},"Using a UiPlugin"),(0,a.kt)("p",null,"To associate a blueprint with a UiPlugin."),(0,a.kt)("p",null,"1) Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"RecipeLink")," entity under the data folder, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"app/data/DemoApplicationDataSource/instances/recipe_links/"),", like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "CORE:RecipeLink",\n  "_blueprintPath_": "/models/<Blueprint type>",\n  "uiRecipes": [\n    {\n      "type": "CORE:UiRecipe",\n      "name": "<recipe name>",\n      "plugin": "newPlugin",\n      "category": ""\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RecipeLink")," entity contains a list of UiRecipes that will be associated with the blueprint specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"_blueprintPath_")," field. Each UiRecipe specify what plugin to be used by ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginName"),", that is, the name used in the export of the plugin inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),"-file."),(0,a.kt)("p",null,"3) After the ",(0,a.kt)("inlineCode",{parentName:"p"},"RecipeLink")," is added, create a ",(0,a.kt)("em",{parentName:"p"},"lookup")," with the app name and the ",(0,a.kt)("em",{parentName:"p"},"recipe links")," for it by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dm create-lookup demo-app DemoApplicationDataSource/instances/recipe_links\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Data Modeling Storage Service must be running on localhost:5000")),(0,a.kt)("h2",{id:"jobs-plugins"},"Jobs plugins"),(0,a.kt)("h3",{id:"adding-a-job-handler"},"Adding a job handler"),(0,a.kt)("p",null,"To add a job handler, follow the guide at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-job#job-handler-plugins"},"dm-job"),"."))}s.isMDXComponent=!0}}]);