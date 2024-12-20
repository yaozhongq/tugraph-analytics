"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[285],{8566:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var o=t(4848),c=t(8453);const l={},s="Console Connector Introduction",i={id:"application-development/connector/console",title:"Console Connector Introduction",description:"Syntax",source:"@site/../docs-en/source/5.application-development/3.connector/3.console.md",sourceDirName:"5.application-development/3.connector",slug:"/application-development/connector/console",permalink:"/tugraph-analytics/en/application-development/connector/console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Connector Introduction",permalink:"/tugraph-analytics/en/application-development/connector/file"},next:{title:"JDBC Connector Introduction",permalink:"/tugraph-analytics/en/application-development/connector/jdbc"}},r={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"console-connector-introduction",children:"Console Connector Introduction"})}),"\n",(0,o.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE console_table (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='console',\n    geaflow.dsl.console.skip = true\n)\n"})}),"\n",(0,o.jsx)(e.h2,{id:"options",children:"Options"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Key"}),(0,o.jsx)(e.th,{children:"Required"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"geaflow.dsl.console.skip"}),(0,o.jsx)(e.td,{children:"false"}),(0,o.jsx)(e.td,{children:"Whether to skip the log, i.e., no output at all. The default value is false."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE file_source (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='file',\n    geaflow.dsl.file.path = '/path/to/file'\n);\n\nCREATE TABLE console_sink (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='console'\n);\n\nINSERT INTO console_sink\nSELECT * FROM file_source;\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var o=t(6540);const c={},l=o.createContext(c);function s(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);