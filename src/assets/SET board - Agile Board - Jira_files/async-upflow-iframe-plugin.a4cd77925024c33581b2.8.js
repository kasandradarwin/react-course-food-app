try{window.performance.mark("async-upflow-iframe-plugin.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-upflow-iframe-plugin"],{"3Ezn":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("DTaC");const i=(e,t)=>{Object(n("q2+m").a)({meta:{id:n("lDQl").d,packageName:n("lDQl").d,teamName:"flywheel-tako-salsa"},attributes:{...e},error:t})},l=e=>e===n("8n/F").a?"free":e===n("8n/F").c?"standard":"premium",c=n("RGCN").a.interaction({key:`${n("lDQl").d}.upgrade.plan`}),u=e=>({chunkLoadError:Object(o.g)(e)}),s=(e,t,r)=>(i({subject:e,message:(null==r?void 0:r.message)||""},r),c.cancel(),t(),a.a.createElement(n("FRO0").a,null));s.displayName="handleError"},AZeC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const r={renderUpflowModal:!1,product:"jira-software",
touchpointId:"",flow:"learn-more",onClose:()=>{},targetEdition:n("8n/F").a},a=Object(n("0b8M").a)({name:"upflow-modal-store",initialState:r,actions:{mountUpflowModal:({targetEdition:e,product:t,flow:n,touchpointId:r,subRoute:a,onClose:o,onOpen:i})=>({setState:l})=>{l({targetEdition:e,product:t,flow:n,touchpointId:r,subRoute:a,onClose:o,onOpen:i,renderUpflowModal:!0})},unMountUpflowModal:()=>({setState:e})=>{e({renderUpflowModal:!1})}}}),o=(Object(n("Y6nV").a)(a),Object(n("UCyb").a)(a),Object(n("dq9g").b)(a))},FRO0:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Object(n("D6b/").defineMessages)({title:{id:"up-flow-iframe.common.commerce-api-error-flag.title",defaultMessage:"We can't upgrade your plan right now",description:"Flag title for error flag when we can not retrieve commerce server information"},description:{id:"up-flow-iframe.common.commerce-api-error-flag.description",defaultMessage:"Try again, or if this keeps happening try contacting support",
description:"Detailed instructions for error flag when we can not retrieve commerce server information"}});const a=()=>{const e=Object(n("EIFJ").c)("commerce-api-error"),{showFlag:t}=Object(n("uSxZ").e)();return t({id:e,key:e,type:"error",title:r.title,description:r.description,isAutoDismiss:!0}),null}},ULPD:function(e,t,n){"use strict";n.r(t),n.d(t,"UpflowIframeComponent",(function(){return o}));var r=n("q1tI"),a=n.n(r);const o=()=>{const[{renderUpflowModal:e,targetEdition:t,product:r,flow:o,touchpointId:i,subRoute:l,onClose:c,onOpen:u},{unMountUpflowModal:s}]=Object(n("AZeC").a)();if(!e)return null;return a.a.createElement(n("Zjh1").b,null,a.a.createElement(n("qAQD").a,{id:"upflowIframeComponent",packageName:"jiraUpflowIframePlugin"},a.a.createElement(n("E/iH").a,{id:"upflowIframeComponent",packageName:"jiraUpflowIframePlugin"},a.a.createElement(n("eYQ4").a,{product:r,targetEdition:t,flow:o,touchpointId:i,experienceTrackingEnabled:!0,onClose:c||(()=>{s()}),subRoute:l,onOpen:u||void 0
}))))};o.displayName="UpflowIframeComponent"},Zjh1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r);const o=e=>{const[{isReady:t}]=Object(n("MZOi").c)(),[o,i]=Object(r.useState)(!0);return!o||t?(o&&i(!1),a.a.createElement(a.a.Fragment,null,e.children)):null},i=({id:e="non-critical",teamName:t,...r})=>a.a.createElement(n("iqve").a,{id:e,teamName:t,packageName:"jiraPlatformNonCritical",fallback:"unmount"},a.a.createElement(o,r));i.displayName="NonCritical",t.b=o},eYQ4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("DTaC"),i=Object(n("D6b/").defineMessages)({title:{id:"up-flow-iframe.chunk-load-error-flag.title",defaultMessage:"Something went wrong",description:"Flag title. Informs a user of a general error."},description:{id:"up-flow-iframe.chunk-load-error-flag.description",defaultMessage:"Refresh the page and try again.",description:"Flag description. Informs a user of a general error."},
refreshPageButton:{id:"up-flow-iframe.chunk-load-error-flag.refresh-page-button",defaultMessage:"Refresh page",description:"Flag action button description. Indication refresh page action to clear the error."}});const l=({error:e})=>{const t=Object(n("EIFJ").c)("chunk-load-error"),{showFlag:r,dismissFlag:a}=Object(n("uSxZ").e)();return Object(o.g)(e)&&r({id:t,key:t,type:"error",title:i.title,description:i.description,isAutoDismiss:!0,actions:[{content:i.refreshPageButton,onClick:()=>{a(t),window.location.reload()}}]}),null},c=Object(o.h)((()=>n.e("async-up-flow-iframe").then(n.bind(null,"RFHq"))),{moduleId:"./src/packages/growth/up-flow/up-flow-iframe/src/main.tsx"}),u=e=>a.a.createElement(n("iqve").a,{id:n("lDQl").d,packageName:n("lDQl").d,teamName:"flywheel-tako-salsa",fallback:l,attributes:n("3Ezn").a},a.a.createElement(n("n+vo").a,{name:"flow-iframe-lazy",fallback:a.a.createElement(a.a.Fragment,null)},a.a.createElement(c,e)));u.displayName="UpFlowIFrame"},lDQl:function(e,t,n){
"use strict";n.d(t,"d",(function(){return r})),n.d(t,"j",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return f}));const r="jiraUpFlowIframe",a="upsell-edition",o="upflowIFrame",i="INITIATE_SPA_CLOSE",l="START_EDITION_POLLING",c="FINISH_EDITION_POLLING",u="TRACK_EXPERIENCE_FAIL",s="TRACK_EXPERIENCE_SUCCESS",d="SPA_READY",f="https://support.atlassian.com/jira-cloud-administration/docs/explore-jira-cloud-plans/"}}]);try{window.__jsEvalStop("async-upflow-iframe-plugin.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-upflow-iframe-plugin.a4cd77925024c33581b2.8.js.map