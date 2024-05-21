"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[3728],{61092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(74848),r=t(28453),s=t(94723);const l={title:"Basic Example"},o=void 0,c={id:"libraries/@development-framework/dm-core-plugins/TabsPlugin/Examples/Basic.json",title:"Basic Example",description:"Minimal example of how to configure tab plugin",source:"@site/docs/libraries/@development-framework/dm-core-plugins/TabsPlugin/Examples/Basic.json.mdx",sourceDirName:"libraries/@development-framework/dm-core-plugins/TabsPlugin/Examples",slug:"/libraries/@development-framework/dm-core-plugins/TabsPlugin/Examples/Basic.json",permalink:"/dm-docs/docs/libraries/@development-framework/dm-core-plugins/TabsPlugin/Examples/Basic.json",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Basic Example"},sidebar:"tutorialSidebar",previous:{title:"Blueprints",permalink:"/dm-docs/docs/libraries/@development-framework/dm-core-plugins/TabsPlugin/Blueprints"}},a={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Minimal example of how to configure tab plugin"}),"\n",(0,i.jsx)(s.KC,{exampleConfig:{title:"Basic Example",description:"Minimal example of how to configure tab plugin",note:"",showDemo:!0,entityFilePrefix:"sections",blueprint:{name:"Section",type:"CORE:Blueprint",description:"",attributes:[{name:"type",type:"dmss://system/SIMOS/BlueprintAttribute",attributeType:"string",optional:!1}]},entity:{type:"./Section",_id:"1179c897-df62-445f-87e4-f393b4253936"},recipe:{name:"UiRecipesSelector",type:"CORE:UiRecipe",plugin:"@development-framework/dm-core-plugins/view_selector/tabs",config:{type:"PLUGINS:dm-core-plugins/view_selector/ViewSelectorConfig",items:[{type:"PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",label:"Tab 1",viewConfig:{type:"CORE:InlineRecipeViewConfig",recipe:{name:"box",type:"CORE:UiRecipe",plugin:"custom-box-plugin",config:{type:"PLUGINS:custom-box-plugin-blueprint",content:"Item 1"}}}},{type:"PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",label:"Tab 2",viewConfig:{type:"CORE:InlineRecipeViewConfig",recipe:{name:"box",type:"CORE:UiRecipe",plugin:"custom-box-plugin",config:{type:"PLUGINS:custom-box-plugin-blueprint",content:"Item 2"}}}}]}}}}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="UiRecipesSelector.recipe.json" ',children:'{\n  "name": "UiRecipesSelector",\n  "type": "CORE:UiRecipe",\n  "plugin": "@development-framework/dm-core-plugins/view_selector/tabs",\n  "config": {\n    "type": "PLUGINS:dm-core-plugins/view_selector/ViewSelectorConfig",\n    "items": [\n      {\n        "type": "PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",\n        "label": "Tab 1",\n        "viewConfig": {\n          "type": "CORE:InlineRecipeViewConfig",\n          "recipe": {\n            "name": "box",\n            "type": "CORE:UiRecipe",\n            "plugin": "custom-box-plugin",\n            "config": {\n              "type": "PLUGINS:custom-box-plugin-blueprint",\n              "content": "Item 1"\n            }\n          }\n        }\n      },\n      {\n        "type": "PLUGINS:dm-core-plugins/view_selector/ViewSelectorItem",\n        "label": "Tab 2",\n        "viewConfig": {\n          "type": "CORE:InlineRecipeViewConfig",\n          "recipe": {\n            "name": "box",\n            "type": "CORE:UiRecipe",\n            "plugin": "custom-box-plugin",\n            "config": {\n              "type": "PLUGINS:custom-box-plugin-blueprint",\n              "content": "Item 2"\n            }\n          }\n        }\n      }\n    ]\n  }\n} \n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Section.blueprint.json" ',children:'{\n  "name": "Section",\n  "type": "CORE:Blueprint",\n  "description": "",\n  "attributes": [\n    {\n      "name": "type",\n      "type": "dmss://system/SIMOS/BlueprintAttribute",\n      "attributeType": "string",\n      "optional": false\n    }\n  ]\n} \n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="sections.entity.json" ',children:'{\n  "type": "./Section",\n  "_id": "1179c897-df62-445f-87e4-f393b4253936"\n} \n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94723:(e,n,t)=>{t.d(n,{YF:()=>I,oh:()=>l,Y$:()=>j,H$:()=>u,KC:()=>B,gr:()=>g,BD:()=>o});var i=t(96540),r=t(27293),s=t(74848);const l=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.A,{type:"danger",children:["Unable to extract component '",e.name,"'"]})}),o=e=>{const{typeDoc:n}=e,t=n.comment??n.signatures[0]?.comment??{},i=t.summary[0]?.text??"";return(0,s.jsx)("div",{children:i})},c=(e,n)=>{const t=n.comment??n.signatures[0]?.comment??{};return t?.blockTags.find((n=>n.tag===e))},a=e=>{let n,t;const i=e.flags?.isOptional?"True":"False";return"union"===e.type.type?(n=e.type.types.map((e=>e.name)).join(" | "),t=e.comment?.summary?.map((e=>e.text)).join()??""):e.type.declaration?(n=e.type.declaration.signatures[0].type.name,t=e.type.declaration.signatures[0].comment?.summary[0]?.text):(n=e.type.name??e.kindString,t=e.comment?.summary[0]?.text),{type:n,optional:i,description:t}},d=["_id"],p=e=>{const{columns:n,rows:t}=e,i=e.onRowClicked?e.onRowClicked:e=>document.location=e.target.parentElement.accessKey,r=(e=>{const n=[];return e.forEach((e=>{n.push({name:e,accessor:e.replace(/ /g,"")})})),n})(n);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:r.map((e=>(0,s.jsx)("th",{children:e.name},`head-${e.accessor}`)))})}),(0,s.jsx)("tbody",{onClick:i,style:{cursor:"pointer"},children:t?.map(((e,n)=>(0,s.jsx)("tr",{id:e._id,tabIndex:e.index??n,accessKey:e.url??e._id,children:Object.keys(e).filter((e=>!d.includes(e))).map((n=>(0,s.jsx)("td",{children:e[n]},n)))},e._id)))})]})})},m=["Name","Type","Optional","Description"],u=e=>{const{typeDoc:n,typeDocs:t,title:i}=e,r=(0,s.jsx)("h2",{children:i??"Parameters"}),l=[],o=(e=>e.signatures&&e.signatures.length>=1?e.signatures[0].parameters:e.type?.declaration?.children?e.type.declaration.children:e.children?e.children:[])(n);return o.forEach(((e,n)=>{if("reference"===e.type.type)try{const n=t.children.find((n=>n.id===e.type.id));(Object.prototype.hasOwnProperty.call(n,"children")?n.children:n.type.declaration.children??[]).forEach(((e,n)=>{const t={_id:`${n}`,name:`${e.name}`,...a(e)};l.push(t)}))}catch(i){console.error("Something went wrong while fetching the reference"),console.error(i)}else{const t={_id:`${n}`,name:e.name,...a(e)};l.push(t)}})),(0,s.jsxs)(s.Fragment,{children:[r,(0,s.jsx)(p,{columns:m,rows:l,onRowClicked:()=>{}})]})},g=e=>{const{typeDoc:n}=e,t=(0,s.jsx)("h2",{children:"Returns"}),i=c("@returns",n);if(!i||i.content?.length<0)return(0,s.jsxs)(s.Fragment,{children:[t,(0,s.jsx)("p",{children:"No return value."})]});const r=i.content.map((e=>e.text)).join("");return(0,s.jsxs)(s.Fragment,{children:[t,(0,s.jsx)("div",{children:r})]})};var x=t(86850),h=t(71765),b=t(95293);const j=e=>{const{typeDoc:n,scope:t,preview:r,showErrors:o}=e,{colorMode:a}=(0,b.G)(),[d,p]=(0,i.useState)(),m=(0,s.jsx)("h2",{children:"Usage"}),u=(0,s.jsx)(l,{name:n.name});(0,i.useEffect)((()=>{a&&p("light"===a?h.Zj.github:h.Zj.dracula)}),[a]);const g=c("@usage",n);if(!g||g.content?.length<0)return(0,s.jsxs)(s.Fragment,{children:[m,(0,s.jsx)("p",{children:"Not usage example is available."})]});const j=g.content.find((e=>"text"===e.kind))?.text,f=g.content.find((e=>"code"===e.kind))?.text;if(!f)return u;const y=f.replaceAll(/(^```|```$)/g,"").trim();return(0,s.jsxs)(s.Fragment,{children:[m,j&&(0,s.jsx)("p",{children:j}),(0,s.jsxs)(x.Q,{code:y,scope:t,disabled:!1,theme:d,noInline:!1,children:[(0,s.jsx)(x.w,{}),o&&(0,s.jsx)(x.p1,{}),r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Preview:"}),(0,s.jsx)(x.pA,{})]})]})]})};var f=t(83345),y=t(23422),w=t(78154),v=t(11866),C=t(46463),S=t(40161),k=t(40760);const R=S.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,E=S.default.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: space-between;
`,I=e=>{const{blueprints:n}=e,[t,r]=(0,i.useState)("table"),[l,o]=(0,i.useState)([n?.[0]?.name]),c=n?.map((e=>e.name)),a=n?.find((e=>e.name===l[0]));return(0,s.jsxs)(R,{children:[(0,s.jsxs)(E,{children:[(0,s.jsx)(f.j,{label:"Select blueprint",selectedOptions:l,onOptionsChange:e=>{o(e.selectedItems)},options:c,style:{minWidth:300}}),(0,s.jsx)(y.E,{density:"compact",children:(0,s.jsxs)(E,{role:"radiogroup",children:[(0,s.jsx)(w.s,{label:"Table view",value:"table",checked:"table"===t,onClick:()=>r("table")}),(0,s.jsx)(w.s,{label:"JSON view",value:"json",checked:"json"===t,onClick:()=>r("json")})]})})]}),"table"===t&&(0,s.jsxs)(v.X,{style:{width:"100%"},children:[(0,s.jsx)(v.X.Head,{children:(0,s.jsxs)(v.X.Row,{children:[(0,s.jsx)(v.X.Cell,{children:"Attribute name"}),(0,s.jsx)(v.X.Cell,{children:"Attribute type"}),(0,s.jsx)(v.X.Cell,{children:"Dimensions"}),(0,s.jsx)(v.X.Cell,{children:"Description"}),(0,s.jsx)(v.X.Cell,{children:"Required"}),(0,s.jsx)(v.X.Cell,{children:"Default value"})]})}),(0,s.jsx)(v.X.Body,{children:a?.attributes?.map((e=>{return(0,s.jsxs)(v.X.Row,{children:[(0,s.jsx)(v.X.Cell,{children:e.name}),(0,s.jsx)(v.X.Cell,{children:(n=e.attributeType,n.includes("/")?`./${n.split("/").pop()}`:n)}),(0,s.jsx)(v.X.Cell,{style:{textAlign:"center"},children:e.dimensions}),(0,s.jsx)(v.X.Cell,{children:e.description||"-"}),(0,s.jsx)(v.X.Cell,{style:{textAlign:"center"},children:!0!==e.optional?(0,s.jsx)(k.BfX,{size:24,color:"#007079"}):null}),(0,s.jsx)(v.X.Cell,{children:void 0===e.default||""===e.default?"-":"object"==typeof e.default?(0,s.jsx)("pre",{style:{margin:0,padding:"0.25rem",fontSize:"0.675rem",maxWidth:"200px",background:"none",wordBreak:"break-word"},children:JSON.stringify(e.default,null,2)}):`${e.default}`})]},e.name);var n}))})]}),"json"===t&&(0,s.jsx)(C.A,{language:"json",title:l[0],showLineNumbers:!0,children:JSON.stringify(a,null,2)})]})};var O=t(72915),U=t.n(O),N=t(15156);const P=S.default.div`
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  color: black;
  border: 2px dotted rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  table {
    margin-bottom: 0;
    display: table;
    th {
      font-weight: 700;
    }
    thead {
      background-color: inherit;
    }
    tr {
      background-color: inherit;
    }
  }
`,_={"custom-box-plugin":{component:e=>{let{config:n}=e;return(0,s.jsx)("div",{style:{background:"rgb(222 237 238)",width:"100%",height:"80px",display:"flex",justifyContent:"center",alignItems:"center"},children:n?.content})}}},T=e=>{let{exampleConfig:n}=e;const{entity:t,blueprint:i,recipe:r,scope:l}=n,o={documentGet:async()=>({data:l?t[l]:t}),blueprintGet:async()=>({data:{blueprint:i}}),attributeGet:async()=>({data:{attribute:{contained:!0,ensureUID:!0,attributeType:"doc_attributeType"},address:"doc_address"}}),instantiateEntity:async()=>({data:t[l]?.[0]}),documentAdd:async()=>({}),documentUpdate:async()=>({})};if(!r?.plugin)return(0,s.jsx)("span",{children:"No plugin defined in recipe"});const c={...U(),..._},a=U()[r?.plugin]?.component;return(0,s.jsx)(N.ApplicationContext.Provider,{value:{dmssAPI:o,getUiPlugin:function(e){const n=c[e]?.component;return n||(()=>(0,s.jsxs)(N.ErrorGroup,{children:["Did not find the plugin: ",e]}))}},children:(0,s.jsx)(a,{type:"",idReference:"example",config:r?.config})})},B=e=>(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("span",{}),children:(0,s.jsx)(P,{className:"dm-preflight",children:(0,s.jsx)(T,{...e})})})},51433:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(96540);const r={React:i,...i}}}]);