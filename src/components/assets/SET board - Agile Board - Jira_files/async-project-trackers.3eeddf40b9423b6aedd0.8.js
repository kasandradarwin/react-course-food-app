try{window.performance.mark("async-project-trackers.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-project-trackers"],{ksLH:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=()=>{const e=Object(c("QwAD").c)();return e&&e.isAnonymous}},xPZf:function(e,t,c){"use strict";c.r(t),c.d(t,"Trackers",(function(){return s}));var r=c("q1tI");const n=e=>"service_desk"===e?"serviceDesk":e,s=()=>((()=>{const{data:e}=Object(c("0szj").a)(),{createAnalyticsEvent:t}=Object(c("rZ/p").a)(),s=null==e?void 0:e.id,o=null==e?void 0:e.type,a=null==e?void 0:e.isSimplified;Object(r.useEffect)((()=>{if(null==s||null==o)return;const e=t({});Object(c("SALc").b)(e,"projectContainer entered",{projectId:s,projectType:n(o),nextGenProject:a})}),[t,s,o,a])})(),(()=>{const e=Object(c("ksLH").a)(),{data:t}=Object(c("0szj").a)(),n=null==t?void 0:t.key;Object(r.useEffect)((()=>{e||null==n||fetch(`/rest/api/latest/project/${encodeURIComponent(n)}/tracking/recent`,{
...c("drMZ").a,method:"PUT"}).then((e=>{if(e.ok)return e;throw new Error(`Server didn't accept "${n}", status code: ${e.status}`)})).catch((e=>{c("SMF5").a.safeErrorWithoutCustomerData("project-layout.use-recent-project-tracker","There was a problem saving recent visited project",e)}))}),["",e,n])})(),null);t.default=s}}]);try{window.__jsEvalStop("async-project-trackers.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-project-trackers.3eeddf40b9423b6aedd0.8.js.map