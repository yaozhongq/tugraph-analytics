"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2524],{3507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(4848),i=t(8453);const r={},a="User Defined Connector",l={id:"application-development/connector/udc",title:"User Defined Connector",description:"GeaFlow support user defined connector using the java SPI.",source:"@site/../docs-en/source/5.application-development/3.connector/10.udc.md",sourceDirName:"5.application-development/3.connector",slug:"/application-development/connector/udc",permalink:"/tugraph-analytics/en/application-development/connector/udc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pulsar Connector Introduction",permalink:"/tugraph-analytics/en/application-development/connector/pulsar"},next:{title:"Text2GQL Syntax Manual",permalink:"/tugraph-analytics/en/application-development/chat_guide"}},c={},s=[{value:"Interface",id:"interface",level:2},{value:"TableConnector",id:"tableconnector",level:3},{value:"TableSource",id:"tablesource",level:2},{value:"TableSink",id:"tablesink",level:2},{value:"Example",id:"example",level:2},{value:"Implement TableConnector",id:"implement-tableconnector",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"user-defined-connector",children:"User Defined Connector"})}),"\n",(0,o.jsx)(n.p,{children:"GeaFlow support user defined connector using the java SPI."}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.h3,{id:"tableconnector",children:"TableConnector"}),"\n",(0,o.jsxs)(n.p,{children:["User should implement a ",(0,o.jsx)(n.strong,{children:"TableConnector"}),". We support ",(0,o.jsx)(n.strong,{children:"TableReadableConnector"})," for read and ",(0,o.jsx)(n.strong,{children:"TableWritableConnector"})," for write. If you implement both of them, the connector will support both read and write."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"/**\n * The interface for table connector.\n */\npublic interface TableConnector {\n\n    /**\n     * Return table connector type.\n     */\n    String getType();\n}\n\n/**\n * A readable table connector.\n */\npublic interface TableReadableConnector extends TableConnector {\n\n    TableSource createSource(Configuration conf);\n}\n\n/**\n * A writable table connector.\n */\npublic interface TableWritableConnector extends TableConnector {\n\n    /**\n     * Create the {@link TableSink} for the table connector.\n     */\n    TableSink createSink(Configuration conf);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tablesource",children:"TableSource"}),"\n",(0,o.jsx)(n.p,{children:"TableSource is the inferface for read data from the connector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"/**\n * Interface for table source.\n */\npublic interface TableSource extends Serializable {\n\n    /**\n     * The init method for compile time.\n     */\n    void init(Configuration tableConf, TableSchema tableSchema);\n\n    /**\n     * The init method for runtime.\n     */\n    void open(RuntimeContext context);\n\n    /**\n     * List all the partitions for the source.\n     */\n    List<Partition> listPartitions();\n\n    /**\n     * Returns the {@link TableDeserializer} for the source to convert data read from\n     * the source to {@link Row}.\n     */\n    <IN> TableDeserializer<IN> getDeserializer(Configuration conf);\n\n    /**\n     * Fetch data for the partition from start offset. if the windowSize is -1, it represents an\n     * all-window which will read all the data from the source, else return widow size for data.\n     */\n    <T> FetchData<T> fetch(Partition partition, Optional<Offset> startOffset, long windowSize) throws IOException;\n\n    /**\n     * The close callback for the job finish the execution.\n     */\n    void close();\n}\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tablesink",children:"TableSink"}),"\n",(0,o.jsx)(n.p,{children:"TableSink is the interface for write data to the connector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"/**\n * Interface for table sink.\n */\npublic interface TableSink extends Serializable {\n\n    /**\n     * The init method for compile time.\n     */\n    void init(Configuration tableConf, StructType schema);\n\n    /**\n     * The init method for runtime.\n     */\n    void open(RuntimeContext context);\n\n    /**\n     * The write method for writing row to the table.\n     */\n    void write(Row row) throws IOException;\n\n    /**\n     * The finish callback for each window finished.\n     */\n    void finish() throws IOException;\n\n    /**\n     * The close callback for the job finish the execution.\n     */\n    void close();\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Here is an example for console table connector."}),"\n",(0,o.jsx)(n.h3,{id:"implement-tableconnector",children:"Implement TableConnector"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class ConsoleTableConnector implements TableWritableConnector {\n\n    @Override\n    public String getType() {\n        return "CONSOLE";\n    }\n\n    @Override\n    public TableSink createSink(Configuration conf) {\n        return new ConsoleTableSink();\n    }\n}\n\npublic class ConsoleTableSink implements TableSink {\n\n    private static final Logger LOGGER = \n\t\t\tLoggerFactory.getLogger(ConsoleTableSink.class);\n\n    private boolean skip;\n\n    @Override\n    public void init(Configuration tableConf, StructType schema) {\n        skip = tableConf.getBoolean(ConsoleConfigKeys.GEAFLOW_DSL_CONSOLE_SKIP);\n    }\n\n    @Override\n    public void open(RuntimeContext context) {\n\n    }\n\n    @Override\n    public void write(Row row) {\n        if (!skip) {\n            LOGGER.info(row.toString());\n        }\n    }\n\n    @Override\n    public void finish() {\n\n    }\n\n    @Override\n    public void close() {\n\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After implement the ",(0,o.jsx)(n.strong,{children:"ConsoleTableConnector"}),", you should put the full class name to\nthe ",(0,o.jsx)(n.strong,{children:"resources/META-INF.services/com.antgroup.geaflow.dsl.connector.api.TableConnector"})]}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"CREATE TABLE file_source (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='file',\n    geaflow.dsl.file.path = '/path/to/file'\n);\n\nCREATE TABLE console_sink (\n  id BIGINT,\n  name VARCHAR,\n  age INT\n) WITH (\n\ttype='console'\n);\n\nINSERT INTO console_sink\nSELECT * FROM file_source;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(6540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);