(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[953],{18369:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var i=a(7896),n=(a(2784),a(30876)),r=a(25545);const p={},d="Web App - Admin",o={unversionedId:"web-app-admin",id:"web-app-admin",title:"Web App - Admin",description:"View PaymentOrder List",source:"@site/docs/web-app-admin.md",sourceDirName:".",slug:"/web-app-admin",permalink:"/crypto-payment-service/docs/web-app-admin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-app-admin.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Web App - User",permalink:"/crypto-payment-service/docs/web-app-user"},next:{title:"Data Types",permalink:"/crypto-payment-service/docs/data-types"}},s={},l=[{value:"View PaymentOrder List",id:"view-paymentorder-list",level:2},{value:"Application Flow",id:"application-flow",level:3},{value:"View PaymentOrder Detail",id:"view-paymentorder-detail",level:2},{value:"Application Flow",id:"application-flow-1",level:3},{value:"Update PaymentOrder status",id:"update-paymentorder-status",level:2},{value:"Application Flow",id:"application-flow-2",level:3}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"web-app---admin"},"Web App - Admin"),(0,n.kt)("h2",{id:"view-paymentorder-list"},"View PaymentOrder List"),(0,n.kt)("p",null,"Admin can see a list of PaymentOrder"),(0,n.kt)("h3",{id:"application-flow"},"Application Flow"),(0,n.kt)(r.Mermaid,{config:{},chart:"sequenceDiagram\n  participant A as Admin\n  participant W as Webapp\n  participant DB\n\n  W->>DB: Fetch PaymentOrders\n  W->>A: Show PaymentOrders",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"view-paymentorder-detail"},"View PaymentOrder Detail"),(0,n.kt)("p",null,"Admin can view PaymentOrder detail"),(0,n.kt)("h3",{id:"application-flow-1"},"Application Flow"),(0,n.kt)(r.Mermaid,{chart:"sequenceDiagram\n  participant A as Admin\n  participant W as Webapp\n  participant DB\n\n  A->>W: Select PaymentOrder\n  W->>DB: Fetch PaymentOrder by id\n  W->>A: Show PaymentOrder",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"update-paymentorder-status"},"Update PaymentOrder status"),(0,n.kt)("p",null,"Admin can update PaymentOrder status.",(0,n.kt)("br",{parentName:"p"}),"\n","After an Admin has fulfilled the Fiat payment, he can update the PaymentOrder status to PAID"),(0,n.kt)("h3",{id:"application-flow-2"},"Application Flow"),(0,n.kt)(r.Mermaid,{chart:"sequenceDiagram\n  participant A as Admin\n  participant W as Webapp\n  participant DB\n  \n  A->>W: Set PaymentOrder status to PAID\n  W->>DB: Update PaymentOrder status to PAID",mdxType:"Mermaid"}))}m.isMDXComponent=!0},46155:(e,t,a)=>{var i={"./locale":99394,"./locale.js":99394};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=46155}}]);