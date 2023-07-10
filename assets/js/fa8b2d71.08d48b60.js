"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Jobs",sidebar_position:6},i=void 0,l={unversionedId:"concepts/jobs",id:"concepts/jobs",title:"Jobs",description:"Jobs can be handled with dm-job.",source:"@site/docs/concepts/jobs.md",sourceDirName:"concepts",slug:"/concepts/jobs",permalink:"/dm-docs/docs/concepts/jobs",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Jobs",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Meta",permalink:"/dm-docs/docs/concepts/meta"},next:{title:"Guides",permalink:"/dm-docs/docs/guides/"}},s={},u=[{value:"Azure container jobs",id:"azure-container-jobs",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs can be handled with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-job"},"dm-job"),"."),(0,o.kt)("p",null,"This is an API where you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start jobs"),(0,o.kt)("li",{parentName:"ul"},"Stop jobs"),(0,o.kt)("li",{parentName:"ul"},"Request the status for a running job"),(0,o.kt)("li",{parentName:"ul"},"Get result from a job")),(0,o.kt)("p",null,"If your custom application want to use dm-job, you have to create a JobHandler file for your job."),(0,o.kt)("p",null,"This JobHandler must have the name ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__.py")," and the file must be available as a file in the dm-job container. This can be achieved by using docker volumes.\nFor example, in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-core-packages/blob/main/example/docker-compose.yaml"},"docker-compose file in dm-core-packages"),',\ndocker volume is used to "copy" the content of ',(0,o.kt)("inlineCode",{parentName:"p"},"dm-core-packages/example/job_handlers")," into the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"dm-job/src/job_handler_plugins"),"."),(0,o.kt)("p",null,"To run a job, you must define a job entity. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "label": "Example local container job",\n    "type": "dmss://WorkflowDS/Blueprints/Job",\n    "status": "Not started",\n    "triggeredBy": "author",\n    "outputTarget": "dmss://DataSource/$456-456.result",\n    "applicationInput": {\n      "type": "dmss://system/SIMOS/Reference",\n      "referenceType": "link",\n      "address": "dmss://DataSource/$123-123"\n    },\n    "runner": {\n      "type": "dmss://DataSource/apps/MySignalApp/models/SignalGeneratorJob"\n    },\n    "started": "Not started"\n  }\n')),(0,o.kt)("p",null,"The JobHandler file (",(0,o.kt)("inlineCode",{parentName:"p"},"__init__.py"),") has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'_SUPPORTED_TYPE = "dmss://WorkflowDS/Blueprints/Container"\n\n\nclass JobHandler(JobHandlerInterface):\n    def __init__(self, job: Job, data_source: str):\n        super().__init__(job, data_source)\n        self.headers = {"Access-Key": job.token}\n\n    def start(self) -> str:\n        # Code for running the job\n\n    def remove(self) -> Tuple[str, str]:\n        # Remove a job\n\n    def progress(self) -> Tuple[JobStatus, str]:\n        # Poll progress from the job instance\n        \n\n    def result(self) -> Tuple[str, bytes]:\n        # Code for returning the response from a job.\n\n')),(0,o.kt)("p",null,"A few important things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A defined variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"_SUPPORTED_TYPE")," decides what JobHandler to use for a given job. This is the same as the runner type in the job entity."),(0,o.kt)("li",{parentName:"ul"},"The JobHandlerInterface and Job class are defined in dm-job repository."),(0,o.kt)("li",{parentName:"ul"},"To access the job entity, use ",(0,o.kt)("inlineCode",{parentName:"li"},"self.job.entity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"self.job.entity.applicationInput")," is used for supplying inputs to the job. For example, you can include inputs to calculations."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"self.job.entity.outputTarget")," is used for defining where the result of the job should be stored.")))),(0,o.kt)("p",null,"Jobs can be run in different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'locally in the instance / deployment of the dm-job API, either as a "container job" or a "regular job". For container jobs, the job entity\'s runner type should extend from the  ',(0,o.kt)("inlineCode",{parentName:"li"},"Container")," blueprint from dm-job. For regular jobs, the job entity's runner type should extend from the ",(0,o.kt)("inlineCode",{parentName:"li"},"JobHandler")," blueprint from dm-job."),(0,o.kt)("li",{parentName:"ul"},"Azure container jobs. In this case, the job entity's runner type should extend from `AzureContainer\xb4 blueprint in dm-job. ")),(0,o.kt)("p",null,"Note: Azure jobs are recommended for jobs that take a long time to complete, since Azure jobs can be started and run in the background.  "),(0,o.kt)("h2",{id:"azure-container-jobs"},"Azure container jobs"),(0,o.kt)("p",null,"Azure container jobs runs in container instances in Azure."),(0,o.kt)("p",null,"To make the azure job connect with azure, some environment variables needs to be set in the docker container for dm-job."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AZURE_SP_SECRET: This Service principal secret can be found in the app registration ",(0,o.kt)("inlineCode",{parentName:"li"},"Marine Analyis Framework Data Modelling Tool"),". Note that the secret should have a maximum time to live of 1 year. "),(0,o.kt)("li",{parentName:"ul"},"AZURE_JOB_SUBSCRIPTION: ID for subscription, 14d57366-b2ae-4da8-8b75-e273c6fdabe2"),(0,o.kt)("li",{parentName:"ul"},"AZURE_JOB_RESOURCE_GROUP: dmt-test-containers"),(0,o.kt)("li",{parentName:"ul"},"AZURE_JOB_TENANT_ID: 3aa4a235-b6e2-48d5-9195-7fcf05b459b0"),(0,o.kt)("li",{parentName:"ul"},"AZURE_JOB_CLIENT_ID: 97a6b5bd-63fb-42c6-bb75-7e5de2394ba0")),(0,o.kt)("p",null,"For local testing, the resource group that holds the deployed container instance for a job is called ",(0,o.kt)("inlineCode",{parentName:"p"},"dmt-test-containers"),". This resoruce group is found in the subscription S398-DataModellingTool."),(0,o.kt)("p",null,"(Note: to get access to this resource group, you must first go to the Azure portal -> Privelaged Identity Management -> My roles -> Azure resources and activate the role for the S398 subscription)."),(0,o.kt)("p",null,"When running jobs in Azure, the JobHandler file (",(0,o.kt)("inlineCode",{parentName:"p"},"__init__.py"),") needs some additional code."),(0,o.kt)("p",null,"A template can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-job/blob/main/src/job_handler_plugins/azure_container_instances/__init__.py"},"in dm-job"),"."))}c.isMDXComponent=!0}}]);