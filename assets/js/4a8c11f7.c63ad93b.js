"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[9910],{31264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=i(74848),t=i(28453);const s={sidebar_position:2},a="Application development",l={id:"guides/application-development",title:"Application development",description:"By following these steps, you will have your own data modelling app up and running on your local machine.",source:"@site/docs/guides/application-development.md",sourceDirName:"guides",slug:"/guides/application-development",permalink:"/dm-docs/docs/guides/application-development",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Domain modeling",permalink:"/dm-docs/docs/guides/domain-modeling"},next:{title:"Plugin development",permalink:"/dm-docs/docs/guides/plugin-development"}},r={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Create a new app",id:"create-a-new-app",level:2},{value:"Running the app",id:"running-the-app",level:2},{value:"Reset data",id:"reset-data",level:2},{value:"Build production version",id:"build-production-version",level:2},{value:"Configure the app",id:"configure-the-app",level:2},{value:"Extending the app",id:"extending-the-app",level:2},{value:"Domain modelling",id:"domain-modelling",level:2},{value:"Pre-commit",id:"pre-commit",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"application-development",children:"Application development"}),"\n",(0,o.jsx)(n.p,{children:"By following these steps, you will have your own data modelling app up and running on your local machine."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Node (> 16+)"}),"\n",(0,o.jsx)(n.li,{children:"Docker (> 20+)"}),"\n",(0,o.jsx)(n.li,{children:"Docker-compose (> 2.11+)"}),"\n",(0,o.jsx)(n.li,{children:"Python (> 3.8)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/equinor/dm-cli",children:"dm-cli"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-new-app",children:"Create a new app"}),"\n",(0,o.jsxs)(n.p,{children:["To initialize an app, you can use the ",(0,o.jsx)(n.code,{children:"create-dm-app"})," tool."]}),"\n",(0,o.jsxs)(n.p,{children:["Create an app by running (change ",(0,o.jsx)(n.code,{children:"my-app"})," to your application name):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @development-framework/create-dm-app my-app\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will create a new folder ",(0,o.jsx)(n.code,{children:"my-app"})," and inside that folder, the initial application structure is generated and the transitive dependencies are installed."]}),"\n",(0,o.jsx)(n.p,{children:"The application is made in React and you can connect it with any Data Modelling Storage Service (DMSS) instance you want."}),"\n",(0,o.jsx)(n.h2,{id:"running-the-app",children:"Running the app"}),"\n",(0,o.jsxs)(n.p,{children:["To run dependent services locally you can use the included ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," file. This file includes databases, DMSS service, and job service."]}),"\n",(0,o.jsx)(n.p,{children:"Start services in the background (-d detached mode) by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose pull\ndocker compose up\n"})}),"\n",(0,o.jsx)(n.p,{children:"To start the app development server, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The web app can now be reached at ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," in the web browser. The web page will automatically reload if you make changes to the code.\nYou will see the build errors and lint warnings in the console."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsx)(n.p,{children:"Remember: You must have the docker-compose services running to use the web application."})]}),"\n",(0,o.jsx)(n.h2,{id:"reset-data",children:"Reset data"}),"\n",(0,o.jsxs)(n.p,{children:["Install the dm-cli package (available on ",(0,o.jsx)(n.a,{href:"https://pypi.org/project/dm-cli/",children:"PyPi"}),") by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt \n"})}),"\n",(0,o.jsxs)(n.p,{children:["Run this command to reset the application data (upload any entities, blueprints, and recipes registered under the ",(0,o.jsx)(n.code,{children:"app/"})," folder) to the data modelling storage service (DMSS):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./reset-app.sh\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This script must be run every time a modification is done in any files in the ",(0,o.jsx)(n.code,{children:"app/"}),"  folder."]})}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Tip: Use virtual Python environment"}),(0,o.jsx)(n.p,{children:"We recommend create a virtual Python environment."}),(0,o.jsx)(n.p,{children:"Create a new virtual environment by running:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python3 -m venv .venv\n"})}),(0,o.jsx)(n.p,{children:"Activate the virtual environment by running:"}),(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Linux"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ source .venv/bin/activate\n"})})]}),(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Windows"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ .\\venv\\Scripts\\Activate.ps1\n$ pip install --upgrade pip\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"build-production-version",children:"Build production version"}),"\n",(0,o.jsx)(n.p,{children:"When you\u2019re ready to deploy to production, create a minified bundle by running the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-app",children:"Configure the app"}),"\n",(0,o.jsxs)(n.p,{children:["This template uses an application entity to control the behavior of the app. This entity can be seen at ",(0,o.jsx)(n.code,{children:"app/data/DemoDS/DemoApplication/entities/demoApplication.json"}),". The ",(0,o.jsx)(n.code,{children:".env"}),"-file has a variable pointing to this application entity, which will be loaded and used to select what ",(0,o.jsx)(n.em,{children:"UIPlugin"})," to be shown. The application ",(0,o.jsx)(n.em,{children:"RecipeLink"})," that defines what to show is located at ",(0,o.jsx)(n.code,{children:"app/data/DemoDS/DemoApplication/recipes/demoApp.json"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["URLs to services are controlled by environment variables in the ",(0,o.jsx)(n.code,{children:".env.local"})," file, by default this will point to the services specified in the ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," file. The ",(0,o.jsx)(n.code,{children:".env.local"})," file also controls authentication, and it's possible to enable or disable authentication. See ",(0,o.jsx)(n.a,{href:"https://equinor.github.io/dm-docs/docs/guides/administration/configuration",children:"configuration"})," for overview of the different configuration options available."]}),"\n",(0,o.jsx)(n.h2,{id:"extending-the-app",children:"Extending the app"}),"\n",(0,o.jsxs)(n.p,{children:["DM Apps is designed to be extensible, and customizable.",(0,o.jsx)(n.br,{}),"\n","This is achived via ",(0,o.jsx)(n.em,{children:"plugins"})," and ",(0,o.jsx)(n.em,{children:"recipes"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Read more about those concepts here;"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/dm-docs/docs/concepts/plugins",children:"plugins"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/dm-docs/docs/concepts/recipes",children:"recipes"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/dm-docs/docs/guides/plugin-development",children:"plugin development"})," for creating and adding new plugins."]}),"\n",(0,o.jsx)(n.h2,{id:"domain-modelling",children:"Domain modelling"}),"\n",(0,o.jsxs)(n.p,{children:["Models are defined using ",(0,o.jsx)(n.a,{href:"/dm-docs/docs/concepts/blueprints",children:"blueprints"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/dm-docs/docs/guides/domain-modeling",children:"domain modeling"})," for how to create and add models for the app."]}),"\n",(0,o.jsx)(n.h2,{id:"pre-commit",children:"Pre-commit"}),"\n",(0,o.jsxs)(n.p,{children:["To ensure consistent code formatting and to do a minimum of checks on the local computer before committing code to a Git repository, the app provides a ",(0,o.jsx)(n.code,{children:".pre-commit-config.yaml"})," file that is used to setup Git ",(0,o.jsx)(n.em,{children:"pre-commit hooks"}),".\nThe pre-commit hook will run formatting, certain tests, sanitisers, and analyze the code for quality and best practises.\nTo run pre-commit, it needs to be installed on your local machine with"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Install pre-commit\npip install pre-commit\n# Register pre-commit hook\npre-commit install\n# Run pre-commit manually on all files\npre-commit run -a\n# Commit witouth running checks\ngit commit --no-verify\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var o=i(96540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);