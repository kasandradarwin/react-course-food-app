try{window.performance.mark("async-issue-details-field-descriptions.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-issue-details-field-descriptions"],{Rzng:function(e,s,i){"use strict";i.r(s);var t=i("q1tI");const n=e=>i("w3uD").a`query fieldDescriptionQuery {
    issue(issueIdOrKey: "${e}", latestVersion: true, screen: "view") {
        fields {
            key
            description
        }
    }
}`,c={loading:!0,value:void 0},r=e=>{const[s,r]=Object(t.useState)(c),a=Object(t.useRef)(null);return Object(t.useEffect)((()=>{(async()=>{r(c);const s=await(async e=>{try{var s,t;const c=await Object(i("2tF7").f)("/rest/graphql/1/",{method:"POST",body:JSON.stringify({query:n(e)})});return null!=c&&null!==(s=c.data)&&void 0!==s&&null!==(t=s.issue)&&void 0!==t&&t.fields?c.data.issue.fields.reduce(((e,s)=>s.description?{...e,[s.key]:{description:s.description}}:{...e}),{}):void 0}catch(c){return void Object(i("q2+m").c)({error:c,id:"issue.details.fetch-field-description",packageName:"jiraIssueFieldDescription",logToSentry:!Object(i("aDTl").f)(c),sendToPrivacyUnsafeSplunk:!0})}})(e);r({loading:!1,value:s})})()}),[e]),a.current!==e?(a.current=e,c):s};s.default=()=>{const e=Object(i("gZwB").n)(),[,{setFieldConfigValue:s}]=Object(i("vGO3").b)(),{value:n,loading:c}=r(e);return Object(t.useEffect)((()=>{!c&&n&&Object.keys(n).forEach((i=>{const t=n[i];t&&s(e,i,{description:t.description||""})
}))}),[e,n,c,s]),null}}}]);try{window.__jsEvalStop("async-issue-details-field-descriptions.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-issue-details-field-descriptions.f1838744dc085c839ec3.8.js.map