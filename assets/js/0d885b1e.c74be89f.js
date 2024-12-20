"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4252],{1330:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=a(4848),s=a(8453);const r={},i="Match",t={id:"application-development/dsl/syntax/dql/match",title:"Match",description:"GeaFlow\u652f\u6301\u4ee5\u4e0b\u8bed\u6cd5 \uff1a",source:"@site/../docs-cn/source/5.application-development/2.dsl/2.syntax/4.dql/match.md",sourceDirName:"5.application-development/2.dsl/2.syntax/4.dql",slug:"/application-development/dsl/syntax/dql/match",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/dql/match",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DML",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/dml"},next:{title:"Select",permalink:"/tugraph-analytics/zh/application-development/dsl/syntax/dql/select"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Node",id:"node",level:3},{value:"Edge",id:"edge",level:3},{value:"Edge Direction",id:"edge-direction",level:3},{value:"Example",id:"example",level:2},{value:"Syntax",id:"syntax-1",level:2},{value:"Example",id:"example-1",level:2},{value:"Syntax",id:"syntax-2",level:2},{value:"Example",id:"example-2",level:2},{value:"Syntax",id:"syntax-3",level:2},{value:"Example",id:"example-3",level:2},{value:"Syntax",id:"syntax-4",level:2},{value:"Scalar Query",id:"scalar-query",level:3},{value:"Exists Query",id:"exists-query",level:3},{value:"Example",id:"example-4",level:2},{value:"Scalar Query Example",id:"scalar-query-example",level:3},{value:"Exists Query Example",id:"exists-query-example",level:3},{value:"Syntax",id:"syntax-5",level:2},{value:"Example",id:"example-5",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"match",children:"Match"})}),"\n",(0,l.jsx)(n.p,{children:"GeaFlow\u652f\u6301\u4ee5\u4e0b\u8bed\u6cd5 \uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Match",children:"Match"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Regex-Match",children:"Regex-Match"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Return",children:"Return"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Let",children:"Let"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#SubQuery",children:"SubQuery"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#Continue-Match",children:"Continue-Match"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MatchStatement: MATCH PathPatthern (',' PathPatthern)* [WHERE boolExpr]\n\nPathPatthern: Node ([Edge] Node)*\nNode: '(' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ')'\nEdge: '-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '-'\n\t\t | '-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '->'\n\t\t | '<-' '[' Identifier [ ':' StringLiteral ] [ WHERE boolExpr] ']' '-'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,l.jsx)(n.p,{children:"\u5339\u914d\u56fe\u4e0a\u7684\u70b9,\u53ef\u4ee5\u6307\u5b9a\u70b9\u7684\u7c7b\u578b\u4ee5\u53ca\u5bf9\u70b9\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"edge",children:"Edge"}),"\n",(0,l.jsx)(n.p,{children:"\u5339\u914d\u56fe\u4e0a\u7684\u8fb9\uff0c\u7c7b\u4f3cNode\u8282\u70b9\u53ef\u4ee5\u6307\u5b9a\u8fb9\u7684\u7c7b\u578b\u4ee5\u53ca\u5bf9\u8fb9\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002\u548cNode\u4e0d\u540c\u7684\u662f,\u8fb9\u9700\u8981\u6307\u5b9a\u65b9\u5411\uff0c\u8fb9\u7684\u65b9\u5411\u5305\u62ec\u5165\u8fb9\u3001\u51fa\u8fb9\u548c\u53cc\u5411\u8fb9\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"edge-direction",children:"Edge Direction"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u8fb9\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u8bed\u6cd5"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u5165\u8fb9"}),(0,l.jsx)(n.td,{children:"<-[edge]-"}),(0,l.jsx)(n.td,{children:"\u5339\u914d\u56fe\u4e2d\u6307\u5411\u70b9\u7684\u8fb9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u51fa\u8fb9"}),(0,l.jsx)(n.td,{children:"-[edge]->"}),(0,l.jsx)(n.td,{children:"\u5339\u914d\u56fe\u4e2d\u4ece\u70b9\u6307\u51fa\u7684\u8fb9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u53cc\u5411\u8fb9"}),(0,l.jsx)(n.td,{children:"-[edge]-"}),(0,l.jsx)(n.td,{children:"\u5339\u914d\u56fe\u4e2d\u70b9\u7684\u51fa\u8fb9\u548c\u5165\u8fb9"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Basic Mathch"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Match all node \nMATCH (a)\n\n-- Match all person node\nMATCH (a:person)\n\n-- Match node where id = 1\nMATCH (a:person where id = 1)\n\n-- One hop match\nMATCH (a:person where id = 1)-[e:knows where e.weight > 0.4]->(b:person)\n\n-- Tow hop match\nMATCH (a:person)-(b:person) <- (c)\n\n-- Match in-vertex for node a\nMATCH (a:person)<-[e:knows]-(b)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Match With Filter"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person)<-[e:knows]-(b) Where a.id = b.id\n\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Match Join\nMatch two path pattern and join them with the common label.\ne.g."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a) -> (b), (a) -> (c)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The output is ",(0,l.jsx)(n.strong,{children:"p1 = (a, b) join p2 = (a, c) on p1.a = p2.a"}),"."]}),"\n",(0,l.jsx)(n.h1,{id:"regex-match",children:"Regex-Match"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0d\u5b9a\u8df3\u6570\u5339\u914d\uff0c\u7c7b\u4f3c\u6b63\u5219\u8868\u8fbe\u5f0f\u5199\u6cd5\u6307\u5b9a\u8df3\u6570\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"PathPatthern: Node Edge '{' minHop ',' [ maxHop] '}' Node\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a) -[e]->{1,5} (b)\n\nMATCH (a) -[e]->{1,}  (b)\n"})}),"\n",(0,l.jsx)(n.h1,{id:"return",children:"Return"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-2",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"RETURN expr {',' expr}* \n[ GROUP BY expr {',' expr}* ] \n[ ORDER BY expr [ASC|DESC] {',' expr [ASC|DESC]} ]\n[ LIMIT number ]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a.name as name, b.id as b_id\n\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b\n\n-- GROUP BY\nMATCH (a:person)-[e:knows where e.weight > 0.4]->(b:person)\nRETURN a.id, SUM(e.weight) * 10 as amt GROUP BY a.id\n\n-- ORDER BY\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b order by a.age DESC, b.age ASC\n\n-- LIMIT\nMATCH (a:person WHERE a.id = '1')-[e:knows]->(b:person)\nRETURN a, b order by a.age DESC, b.age ASC LIMIT 10\n"})}),"\n",(0,l.jsx)(n.h1,{id:"let",children:"Let"}),"\n",(0,l.jsx)(n.p,{children:"Let\u8bed\u53e5\u7528\u4e8e\u5728\u56fe\u5339\u914d\u8fc7\u7a0b\u4e2d\u4fee\u6539\u8def\u5f84\u4e0a\u7684\u70b9\u548c\u8fb9\u7684\u5c5e\u6027\u503c\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-3",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"LET Identifier '.' Identifier = expr\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:" MATCH (a:person where a.id = 1) -[e:knows]->(b:person)\n LET a.weight = a.age / cast(100.0 as double),\n LET b.weight = b.age / cast(100.0 as double)\n\n\nMATCH (a:person where a.id = 1) -[e:knows]->(b:person)\nLET a.weight = a.age / cast(100.0 as double),\nLET a.weight = a.weight * 2,\nLET b.weight = 1.0,\nLET b.age = 20\n\n"})}),"\n",(0,l.jsx)(n.h1,{id:"subquery",children:"SubQuery"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-4",children:"Syntax"}),"\n",(0,l.jsx)(n.h3,{id:"scalar-query",children:"Scalar Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"AggregateFunction '(' PathPatthern '=>' expr ')'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"exists-query",children:"Exists Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"EXISTS PathPatthern\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(n.h3,{id:"scalar-query-example",children:"Scalar Query Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE id = 1)-[e]->(b)\nWhere COUNT((b) ->(c) => c) >= 1\nRETURN a, e, b\n\nMATCH (a:person WHERE id = 1)-[e]->(b)\nLet b.out_cnt = COUNT((b) ->(c) => c),\nLet b.out_weight = SUM((b) -[e1]-> (c) => e1.weight)\nRETURN a, e, b\n"})}),"\n",(0,l.jsx)(n.h3,{id:"exists-query-example",children:"Exists Query Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person WHERE id = 1)-[e]->(b)\nWhere EXISTS (b) -> (c)\n      And SUM((b) -[e1]-> (c) => e1.weight) > 1\nRETURN a, e, b\n"})}),"\n",(0,l.jsx)(n.h1,{id:"continue-match",children:"Continue-Match"}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u5c06\u4e00\u6bb5\u590d\u6742\u7684Match\u62c6\u5206\u6210\u591a\u6bb5Match\uff0c\u591a\u6bb5Match\u7684\u7ed3\u679c\u4e3a\u5404\u4e2aMatch\u8def\u5f84\u7684join\u5173\u8054\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"syntax-5",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MatchStatement\nMatchStatement\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-5",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"MATCH (a:person where a.id = 1) -[e:knows]->(b:person)\nLET a.weight = a.age / cast(100.0 as double),\nLET a.weight = a.weight * 2\nMATCH(b) -[]->(c)\nRETURN a.id as a_id, a.weight as a_weight, b.id as b_id, c.id as c_id\n\n\nMATCH (a) -> (b) where b.id > 0 and a.lang is null\nMATCH (a) <- (c) where label(c) = 'person'\nLet c.kind = 'k' || cast(c.age / 10 as varchar)\nMATCH (c) -> (d) where d != b\nLet d.type = if (label(d) = 'person', 1, 0)\nRETURN a, b, c, d\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>t});var l=a(6540);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);