try{window.performance.mark("async-jsm-activity-feed-filter.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-jsm-activity-feed-filter"],{"/+ar":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"d",(function(){return a})),i.d(t,"f",(function(){return o})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return l})),i.d(t,"e",(function(){return u})),i.d(t,"g",(function(){return f}));var n=Object(i("D6b/").defineMessages)({filterDropdownComments:{id:"jsm-issue-activity-filter.common.filter-dropdown-comments",defaultMessage:"Comments",description:"Checkbox label to filter activity feed comments. Shown inside the issue view activity feed filter dropdown."},filterDropdownHistory:{id:"jsm-issue-activity-filter.common.filter-dropdown-history",defaultMessage:"History",description:"Checkbox label to filter activity feed history. Shown inside the issue view activity feed filter dropdown."},filterDropdownWorkLog:{
id:"jsm-issue-activity-filter.common.filter-dropdown-work-log",defaultMessage:"Work log",description:"Checkbox label to filter activity feed work log. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxStakeholderUpdates:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-stakeholder-updates",defaultMessage:"Stakeholder updates",description:"Checkbox label to filter timeline entries created by stakeholders. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxAlerts:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-alerts",defaultMessage:"Alerts",description:"Checkbox label to filter alerts timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIncidentChanges:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-incident-changes",defaultMessage:"Incident changes",
description:"Checkbox label to filter Incident changes timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIccSessionActivity:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-icc-session-activity",defaultMessage:"ICC session activity",description:"Checkbox label to filter ICC (Incident Command Center) session activity timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIccParticipantActivity:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-icc-participant-activity",defaultMessage:"ICC participant activity",description:"Checkbox label to filter ICC (Incident Command Center) participant activity timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIntegrationActions:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-integration-actions",defaultMessage:"Integration actions",
description:"Checkbox label to filter integration actions timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxSlackMessages:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-slack-messages",defaultMessage:"Slack messages",description:"Checkbox label to filter Slack messages timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownApprovals:{id:"jsm-issue-activity-filter.common.filter-dropdown-approvals",defaultMessage:"Approvals",description:"Checkbox label to filter Jira Service Management approvals activity. Shown inside the issue view activity feed filter dropdown."},filterHiddenMessages:{id:"jsm-issue-activity-filter.common.filter-hidden-messages",defaultMessage:"Hidden",description:"Checkbox label to filter Jira Service Management hidden activity. Shown inside the issue view activity feed filter dropdown."}});const s={comments:{id:i("1fvC").b,i18nMessage:n.filterDropdownComments},
history:{id:i("1fvC").d,i18nMessage:n.filterDropdownHistory},workLog:{id:i("1fvC").h,i18nMessage:n.filterDropdownWorkLog}},c={approval:{id:i("1fvC").a,i18nMessage:n.filterDropdownApprovals}},r={responderAlerts:{id:i("1fvC").f,i18nMessage:n.filterDropdownCheckboxAlerts},incidentChanges:{id:i("1fvC").e,i18nMessage:n.filterDropdownCheckboxIncidentChanges},stakeHolderChanges:{id:i("1fvC").g,i18nMessage:n.filterDropdownCheckboxStakeholderUpdates},...Object(i("FGpf").b)()?{hiddenChange:{id:i("1fvC").c,i18nMessage:n.filterHiddenMessages}}:{}},a={...s,...c},o={...a,...r},d=Object.values(a),l=Object.keys(s).map((e=>s[e])),u=Object.keys(o).map((e=>o[e])),f=[o.comments.id,o.history.id,o.workLog.id,o.approval.id,o.responderAlerts.id,o.incidentChanges.id,o.stakeHolderChanges.id]},"1fvC":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return s})),i.d(t,"h",(function(){return c})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return a})),
i.d(t,"f",(function(){return o})),i.d(t,"e",(function(){return d})),i.d(t,"g",(function(){return l}));const n="ANY_COMMENT",s="HISTORY",c="WORK_LOG",r="APPROVAL",a="HIDDEN_CUSTOM_ENTRIES",o="RESPONDER_ALERT",d="INCIDENT",l="STAKEHOLDER_UPDATE"},"7GgX":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=(e,t)=>{const i=t.selectedProjectId||t.pid||t.projectId||t["project.id"];return{projectKey:e.params.projectKey||t.projectKey||t["project.key"]||(e.params.issueKey||"").split("-")[0],projectId:i}}},C1Mi:function(e,t,i){"use strict";i.r(t),i.d(t,"ActivityFeedFilter",(function(){return l}));var n=i("q1tI"),s=i.n(n),c=i("pVnL"),r=i.n(c),a=Object(i("D6b/").defineMessages)({filterButtonLabel:{id:"jsm-issue-activity-filter.activity-feed-filter-button.filter-button-label",defaultMessage:"Filter",description:"The label for the filter button that shows / hides the timeline filter modal for the all activities feed"}})
;const o=({isIssueOfIncidentsPractice:e=!1,isIncidentTimelineModalOpen:t=!1})=>{const{formatMessage:c}=Object(i("6JHv").a)(),[o,d]=Object(n.useState)(!1),{createAnalyticsEvent:l}=Object(i("rZ/p").a)(),[u,{setSelectedFilters:f}]=Object(i("yKp6").a)(t),p=e=>-1!==u.indexOf(e),[m]=Object(i("zRmz").a)(),g=Object(i("XXMI").b)(),[{isIncidentTimelineModalOpen:y}]=Object(i("FGpf").a)()?[{isIncidentTimelineModalOpen:t}]:Object(i("sWS5").a)(),v=((e,t,n,s)=>{switch(!0){case!0===e&&(t||n):return i("/+ar").e;case s:return i("/+ar").c;default:return i("/+ar").a}})(!!m,e,y,g),b=l({action:"clicked",actionSubject:"checkbox"});return s.a.createElement(i("ztRY").a,{placement:"bottom-start",isOpen:o,onOpenChange:e=>{d(e.isOpen)},testId:"jsm-issue-activity-filter.ui.activity-feed-filter-button.dropdown-menu",trigger:({triggerRef:t,...n})=>s.a.createElement(i("340+").a,r()({},n,{ref:t,appearance:"default",isSelected:o,iconBefore:s.a.createElement(i.n(i("KMW0")).a,{size:"medium",label:""}),
iconAfter:s.a.createElement(i.n(i("1YpF")).a,{size:"medium",label:""}),onClick:(t,n)=>{d(!o),Object(i("SALc").h)(n,"activityFeedFilter",{isJsmIncident:e})}}),c(a.filterButtonLabel))},s.a.createElement(i("LqrV").a,{id:"activityFeedFilterDropdown"},v.map((t=>s.a.createElement(i("dnrd").a,{key:t.id,id:t.id,isSelected:p(t.id),onClick:()=>{(e=>{const t=(({clickedFilterId:e,filters:t})=>{let i=t;const n=-1===i.indexOf(e);return i=n?[...i,e]:i.filter((t=>t!==e)),i})({clickedFilterId:e,filters:u});f(t)})(t.id),Object(i("SALc").h)(b,"activityFeedFilter",{isJsmIncident:e,filterId:t.id,isChecked:!p(t.id)})}},c(t.i18nMessage))))))};o.displayName="ActivityFeedFilterButton";const d=i("vOnD").c.div.withConfig({componentId:"sc-1wr5e97-0"})`margin-top:${2*i("3d9S").f}px;`,l=({selectedActivityFeed:e,isIncidentTimelineModalOpen:t=!1})=>{i("wvC/").a.success();const n=Object(i("uz7G").a)(),c=Object(i("uz7G").b)(),[{isIncidentTimelineModalOpen:r}]=Object(i("FGpf").a)()?[{isIncidentTimelineModalOpen:t
}]:Object(i("sWS5").a)();return c&&r?s.a.createElement(d,null,s.a.createElement(o,{isIssueOfIncidentsPractice:n,isIncidentTimelineModalOpen:r})):e===i("5f7s").a&&n?s.a.createElement(d,{testId:"jsm-issue-activity-filter.ui.activity-feed-filter-wrapper"},s.a.createElement(o,{isIssueOfIncidentsPractice:n})):null};l.displayName="ActivityFeedFilter"},FGpf:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return s}));const n=()=>Object(i("zCFh").a)("jsm-timelines-phase-2_70gja",!1),s=()=>Object(i("zCFh").a)("break-jsm-post-incident-review-cyclic-dep",!1)},KMW0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(i("q1tI")),s=i("QEuf");const c=e=>n.default.createElement(s.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M7 13h10l1-2H6zM3.993 6c-.548 0-.79.405-.546.895L4 8h16l.553-1.105C20.8 6.4 20.555 6 20.007 6H3.993zm6.785 11.556a.87.87 0 00.727.444h.99c.279 0 .605-.2.727-.444L14 16h-4l.778 1.556z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));c.displayName="FilterIcon";var r=c;t.default=r},OJqm:function(t,i,n){"use strict";n.d(i,"a",(function(){return f})),n.d(i,"g",(function(){return p})),n.d(i,"j",(function(){return m})),n.d(i,"b",(function(){return g})),n.d(i,"h",(function(){return y})),n.d(i,"d",(function(){return v})),n.d(i,"e",(function(){return b})),n.d(i,"k",(function(){return h})),n.d(i,"f",(function(){return I})),n.d(i,"i",(function(){return w})),n.d(i,"c",(function(){return O}));var s=Object(n("D6b/").defineMessages)({deletePrimaryIncidentErrorTitle:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.delete-primary-incident-error-title",
defaultMessage:"We couldn\u2019t unlink the primary incident",description:"Flag error title"},deletePrimaryIncidentErrorDescription:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.delete-primary-incident-error-description",defaultMessage:"Refresh the page to try again.",description:"Flag error description"},flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.flag-success-title-message",defaultMessage:"You\u2019ve unlinked the primary incident.",description:"Flag success title"},errorFlagAction:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.error-flag-action",defaultMessage:"Refresh",description:"Button of the flag when API throws error"}});var c=Object(n("D6b/").defineMessages)({flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-success-title-message",defaultMessage:"Success!",description:"Flag success title"},
flagSuccessDescription:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-success-description",defaultMessage:"You\u2019ve published {confluencePageTitle} in {confluenceSpaceName}.",description:"Flag success description"},flagLinkText:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-link-text",defaultMessage:"View in confluence",description:"Success Flag link text"},flagErrorTitle:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-error-title",defaultMessage:"Post incident review export failed",description:"Flag error title"}});const r=({id:e,name:t,inward:i,outward:n})=>[{id:e,label:n,value:n,name:t,direction:"OUTWARD"},...i===n?[]:[{id:e,label:i,value:i,name:t,direction:"INWARD"}]],a=()=>async({getState:e,setState:t},{cloudId:i,issueId:s,analyticsEvent:c})=>{if(void 0!==s){t({...e(),isPrimaryIncidentLoading:!0});try{
const r=await Object(n("DycT").a)(`${Object(n("3erz").a)(i)}/issue/${s}/primary-incident`);if(t({...e(),primaryIncidentIssue:r,isPrimaryIncidentLoading:!1}),r.key&&r.id){const e=Object(n("Tx4b").a)(),i=await((e,t)=>Object(n("DycT").a)(Object(n("xaXP").a)("",e,t)))(r.key,e);t({viewContext:Object(n("14k7").c)(i)})}c&&Object(n("SALc").b)(c,"fetchPrimaryIncident succeeded")}catch(r){Object(n("q2+m").a)({meta:{id:"fetchPrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:c,error:r,sendToPrivacyUnsafeSplunk:!0}),t({...e(),primaryIncidentIssue:null,isPrimaryIncidentLoading:!1})}}};var o=Object(n("D6b/").defineMessages)({flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-success-title-message",defaultMessage:"Success",description:"Flag success title"},flagSuccessDescriptionMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-success-description-message",
defaultMessage:"You\u2019ve added a primary incident to this post-incident review.",description:"Flag success description"},flagErrorTitleMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-error-title-message",defaultMessage:"We couldn\u2019t add the primary incident",description:"Flag Error title"},flagErrorDescriptionMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-error-description-message",defaultMessage:"Refresh the page to try again.",description:"Flag Error title"}});const d=(e,t,i)=>async({setState:s,dispatch:c},{cloudId:r,analyticsEvent:d})=>{if(void 0===t||void 0===e)return;s({isPrimaryIncidentLoading:!0});const{showFlag:l}=Object(n("uSxZ").e)();try{const u=await fetch(`${Object(n("3erz").a)(r)}/issue/${t}/primary-incident/${e}`,{method:"POST"}),f=await u.json();if(!u.ok)throw new(n("zBNx").a)(u.status,null==f?void 0:f.errorMessage);s({isPrimaryIncidentLoading:!1,primaryIncidentIssue:void 0}),
i&&(c(a()),l({type:"success",title:o.flagSuccessTitleMessage,description:o.flagSuccessDescriptionMessage})),d&&Object(n("SALc").b)(d,"setPrimaryIncident succeeded")}catch(u){Object(n("q2+m").a)({meta:{id:"setPrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:d,error:u,sendToPrivacyUnsafeSplunk:!0}),l({type:"error",title:o.flagErrorTitleMessage,description:u.message}),s({primaryIncidentIssue:null,isPrimaryIncidentLoading:!1})}},l={fetchConfluenceDefaultConfig:()=>async({getState:t,setState:i},{cloudId:s,projectId:c,analyticsEvent:r})=>{try{if(null==c)throw new Error("projectId is not set");const e=await Object(n("DycT").a)(`${Object(n("3erz").a)(s)}/project/${c}/pir-configuration`);i({...t(),...e.response,isLoading:!1}),r&&Object(n("SALc").b)(r,"fetchConfluenceSpaceConfiguration succeeded")}catch(e){Object(n("q2+m").a)({meta:{id:"fetchConfluenceSpaceConfiguration",packageName:"jiraServicedeskPostIncidentReview"},event:r,error:e,sendToPrivacyUnsafeSplunk:!0}),i({
...t(),isLoading:!1,error:{value:e.message,type:"FETCH_CONFLUENCE_CONFIGURATION_ERROR"}})}},setConfluenceSpace:(e,t)=>({getState:i,setState:n})=>{n({...i(),confluenceSpaceId:e,confluenceSpaceName:t,confluenceParentPageId:void 0,confluenceParentPageName:void 0})},setConfluenceParent:(e,t)=>({getState:i,setState:n})=>{n({...i(),confluenceParentPageId:e,confluenceParentPageName:t})},fetchPirTemplate:()=>async({getState:e,setState:t},{cloudId:i,analyticsEvent:s,issueId:c})=>{const r=e(),{pirTemplate:a}=r;if(!a&&void 0!==c)try{t({pirTemplate:await Object(n("DycT").a)(`${Object(n("3erz").a)(i)}/pir/${c}/export-to-adf`),isLoading:!1}),s&&Object(n("SALc").b)(s,"fetchPirTemplate succeeded")}catch(o){Object(n("q2+m").a)({meta:{id:"fetchPirTemplate",packageName:"jiraServicedeskPostIncidentReview"},event:s,error:o,sendToPrivacyUnsafeSplunk:!0}),t({...e(),isLoading:!1,error:{value:o.message,type:"FETCH_PIR_ERROR"}})}},setConfluencePageName:e=>({getState:t,setState:i})=>{i({...t(),
confluencePageTitle:e})},exportPirConfluence:e=>async({getState:t,setState:i},{analyticsEvent:s,cloudId:r,issueId:a})=>{const{showFlag:o}=Object(n("uSxZ").e)(),{isLoading:d,confluencePageTitle:l,confluenceParentPageId:u,confluenceSpaceId:f,confluenceSpaceName:p}=t();if(!d&&void 0!==l&&""!==l){i({...t(),isConfluenceExportLoading:!0});try{if(void 0===a)throw new Error("Issue ID is not defined");const d={title:l,spaceKey:f,parentPageId:u},m={...n("drMZ").a,method:"POST",body:JSON.stringify(d)},g=await fetch(`${Object(n("3erz").a)(r)}/pir/${a}/export-to-confluence`,m),y=await g.json();if(!g.ok)throw new(n("zBNx").a)(g.status,null==y?void 0:y.errorMessage);i({...t(),isConfluenceExportLoading:!1}),e(),o({type:"success",title:c.flagSuccessTitleMessage,description:[c.flagSuccessDescription,{confluencePageTitle:l,confluenceSpaceName:p}],actions:[{content:c.flagLinkText,href:y.webLink,target:"_blank"}]}),s&&Object(n("SALc").b)(s,"exportPirConfluence succeeded")}catch(m){Object(n("q2+m").a)({
meta:{id:"exportPirConfluence",packageName:"jiraServicedeskPostIncidentReview"},event:s,error:m,sendToPrivacyUnsafeSplunk:!0}),i({...t(),isConfluenceExportLoading:!1,error:{value:m.message,type:"EXPORT_CONFLUENCE_ERROR"}}),o({type:"error",title:c.flagErrorTitle,isAutoDismiss:!0,description:m.message})}}},fetchPrimaryIncident:a,deletePrimaryIncident:e=>async({getState:t,setState:i},{issueId:c,analyticsEvent:r,cloudId:a})=>{if(void 0===c)return;const{showFlag:o}=Object(n("uSxZ").e)();try{await Object(n("DycT").a)(`${Object(n("3erz").a)(a)}/issue/${c}/primary-incident`,{method:"DELETE"}),i({...t(),primaryIncidentIssue:null}),o({type:"success",title:s.flagSuccessTitleMessage}),r&&Object(n("SALc").b)(r,"deletePrimaryIncident succeeded")}catch(d){Object(n("q2+m").a)({meta:{id:"deletePrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:r,error:d,sendToPrivacyUnsafeSplunk:!0}),o({type:"error",title:s.deletePrimaryIncidentErrorTitle,
description:s.deletePrimaryIncidentErrorDescription,isAutoDismiss:!0,actions:[{content:s.errorFlagAction,onClick:()=>window.location.reload()}]})}e()},setPrimaryIncident:d,fetchIssueLinkType:()=>async({setState:e},{analyticsEvent:t})=>{try{var i;const{issueLinkTypes:s}=await Object(n("DycT").a)("/rest/api/3/issueLinkType"),c=s.map(r).flat(),a=null!==(i=c.find((({value:e})=>"reviews"===e)))&&void 0!==i?i:c[0];e({issueLinkTypes:c,selectedIssueLinkType:a}),t&&Object(n("SALc").b)(t,"fetchIssueLinkType succeeded")}catch(s){Object(n("q2+m").a)({meta:{id:"fetchIssueLinkType",packageName:"jiraServicedeskPostIncidentReview"},event:t,error:s,sendToPrivacyUnsafeSplunk:!0}),e({issueLinkTypes:[]})}},setSelectedIssueLinkType:e=>({setState:t})=>{t({selectedIssueLinkType:e})},linkIssue:(e,t)=>async({getState:i,setState:s,dispatch:c},{analyticsEvent:r,issueKey:a,issueId:o})=>{if(void 0!==a&&void 0!==o){s({isPrimaryIncidentLoading:!0});try{const{selectedIssueLinkType:s}=i();if(void 0===s)return
;const l={type:{id:s.id},inwardIssue:{key:a},outwardIssue:{key:e}};await Object(n("2tF7").f)("/rest/api/2/issueLink",{body:JSON.stringify(l)}),c(d(t,o,!0)),r&&Object(n("SALc").b)(r,"linkIssue succeeded")}catch(l){Object(n("q2+m").a)({meta:{id:"linkIssue",packageName:"jiraServicedeskPostIncidentReview"},event:r,error:l,sendToPrivacyUnsafeSplunk:!0}),s({primaryIncidentIssue:null,isPrimaryIncidentLoading:!1})}}},setIncidentModal:e=>({setState:t})=>{t({isIncidentTimelineModalOpen:e})},setIncidentSearch:e=>({setState:t})=>{t({showIncidentSearch:e})}},u=Object(n("0b8M").a)({name:"postIncidentReviewStore",actions:l,initialState:{isLoading:!0}}),f=Object(n("UCyb").a)(u,{onInit:()=>({dispatch:e})=>{e(l.fetchConfluenceDefaultConfig())}}),p=Object(n("dq9g").b)(u),m=Object(n("dq9g").b)(u,{selector:({confluenceSpaceId:e,confluencePageTitle:t})=>({isDisabled:void 0===e||void 0===t||""===t})}),g=Object(n("UCyb").a)(u,{onInit:()=>({dispatch:e})=>{e(l.fetchPirTemplate())}}),y=Object(n("dq9g").b)(u,{
selector:({pirTemplate:e,isLoading:t,error:i})=>({pirTemplate:e,isLoading:t,error:i})}),v=Object(n("UCyb").a)(u,{onInit:()=>({dispatch:e})=>{e(l.fetchPrimaryIncident()),e(l.fetchIssueLinkType())}}),b=Object(n("UCyb").a)(u,{onInit:()=>({dispatch:e})=>{e(l.fetchIssueLinkType())}}),h=Object(n("dq9g").b)(u,{selector:({primaryIncidentIssue:e,isPrimaryIncidentLoading:t,issueLinkTypes:i,selectedIssueLinkType:n,isIncidentTimelineModalOpen:s,viewContext:c,showIncidentSearch:r})=>({primaryIncidentIssue:e,isPrimaryIncidentLoading:t,issueLinkTypes:i,selectedIssueLinkType:n,isIncidentTimelineModalOpen:s,viewContext:c,showIncidentSearch:r})}),I=Object(n("dq9g").b)(u,{selector:({issueLinkTypes:e})=>({issueLinkTypes:e})}),w=Object(n("dq9g").b)(u,{selector:({isIncidentTimelineModalOpen:e=!1,primaryIncidentIssue:t})=>({isIncidentTimelineModalOpen:e,incidentIssueKey:null==t?void 0:t.key})}),O=Object(n("UCyb").a)(u)},WRTd:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("9ryu")
;const s=Object(n.c)({type:"SERVICEDESK_CONTEXT",getKey:({match:e,query:t})=>(({match:e,query:t})=>{const{projectKey:n,projectId:s}=Object(i("7GgX").a)(e,t);return n||s})({match:e,query:t}),getDataLoader:()=>Promise.all([i.e("commons"),i.e("async-resource-servicedesk-context")]).then(i.bind(null,"Pql5")),maxAge:1/0})},XXMI:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return r}));var n=i("q1tI");const s=(e,t)=>{const i=new Set(t);return[...new Set(e)].filter((e=>i.has(e)))},c=e=>Object.values(e).map((e=>e.id)),r=()=>{const[{data:e}]=Object(i("hmQV").a)();return Object(n.useMemo)((()=>!!e),[e])}},hmQV:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("q1tI"),s=i("9ryu");const c=e=>{const{data:t,loading:c,error:r,refresh:a}=Object(s.e)((()=>i("WRTd").a)());return Object(n.useEffect)((()=>{a()}),[e,a]),[{data:t,loading:c,error:r}]}},sWS5:function(e,t,i){"use strict";i.d(t,"a",(function(){return n
}));const n=()=>{const e=Object(i("uz7G").b)(),[{isIncidentTimelineModalOpen:t,incidentIssueKey:n}]=Object(i("OJqm").i)();return e?[{isIncidentTimelineModalOpen:t,incidentIssueKey:n}]:[{isIncidentTimelineModalOpen:!1,incidentIssueKey:void 0}]}},yKp6:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));const n={selectedFilters:i("/+ar").g},s=Object(i("0b8M").a)({initialState:n,actions:{setSelectedFilters:e=>({setState:t})=>{t({selectedFilters:e})}},name:"activity-feed-filter-context"}),c=Object(i("dq9g").b)(s,{selector:({selectedFilters:e},t)=>{const{isTimeLineModalPirIssueOpen:n,isIssueOfIncidentsPractice:s,hasOpsgenieAccount:c,isJiraServiceManagementRequest:r}=t,a=(({showJSMIncidentFilters:e,isJiraServiceManagementRequest:t})=>e?Object(i("XXMI").c)(i("/+ar").f):t?Object(i("XXMI").c)(i("/+ar").d):Object(i("XXMI").c)(i("/+ar").b))({showJSMIncidentFilters:!0===n||s&&!0===c,isJiraServiceManagementRequest:r});return Object(i("XXMI").a)(a,e)}}),r=(e=!1)=>{
const[{data:t}]=Object(i("hmQV").a)(),n=!!t,s=Object(i("uz7G").a)(),[r]=Object(i("zRmz").a)(),[{isIncidentTimelineModalOpen:a}]=Object(i("FGpf").a)()?[{isIncidentTimelineModalOpen:e}]:Object(i("sWS5").a)(),o=Object(i("uz7G").b)()&&a;return c({isIssueOfIncidentsPractice:s,hasOpsgenieAccount:r,isTimeLineModalPirIssueOpen:o,isJiraServiceManagementRequest:n})}}}]);try{window.__jsEvalStop("async-jsm-activity-feed-filter.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-jsm-activity-feed-filter.46b394c6aede364b0dcd.8.js.map