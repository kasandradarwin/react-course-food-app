try{window.performance.mark("async-flags.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-flags"],{"/526":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var a=r("q1tI"),n=r.n(a),s=r("/MKj");const o=e=>e.flags;var i=r("wig9"),c=r.n(i),l=r("4qC0"),u=r.n(l);class d extends a.Component{formatMessage(e){const{intl:{formatMessage:t}}=this.props;return Array.isArray(e)?t(...e):u()(e)?String(e):t(e)}formatActions(e){return e?e.map((e=>({onClick:e.onClick,content:this.formatMessage(e.content),href:e.href,target:e.target}))):void 0}renderConfigurableFlag(e,t){const{type:a,title:s,description:o,isAutoDismiss:i,actions:c,appearance:l,testId:u,error:d}=t,m=void 0===i?"success"===a||"info"===a:i,f=["success","error","info","warning"].includes(a);let p=o&&this.formatMessage(o);return d&&(p=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,p),n.a.createElement(r("ShUD").a,{error:d}))),f?n.a.createElement(r("zWRH").a,{
key:e,id:e,flagType:a,title:this.formatMessage(s),description:p,isAutoDismiss:m,actions:this.formatActions(c),appearance:l,testId:u}):null}render(){const{flags:e,onDismissed:t}=this.props;return n.a.createElement(r("ebhp").a,{sourceName:"flag",sourceType:r("2V2x").e},n.a.createElement(r("gdIw").a,{onDismissed:t},c()(e.map((e=>{const{id:a,flag:s}=e;if(void 0!==s.render){return s.render({key:a})}if(void 0!==s.type){const e=s,t=this.renderConfigurableFlag(a,e);return t||(r("SMF5").a.safeErrorWithoutCustomerData("flags.view",`There was a problem rendering a flag of type: ${e.type}`),null)}const o=s;return n.a.createElement(o,{key:a,id:a,onDismissed:t})})))))}}d.displayName="Flags";var m=Object(r("W3MJ").a)(d);const f=({children:e,key:t,...r})=>e(r);var p=Object(s.connect)((e=>({flags:o(e),PropBypass:f})),{onDismissed:r("RYld").e})(m);let g=0;class h extends a.Component{constructor(e){var t;super(e),this.store=void 0,this.store=null!==(t=e.store)&&void 0!==t?t:r("ppd0").a}
componentDidMount(){if(g+=1,g>1)throw new Error("Invalid state: Two flag applications mounted at the same time.")}componentWillUnmount(){g-=1,this.store.dispatch(Object(r("RYld").g)())}render(){return n.a.createElement(r("qAQD").a,null,n.a.createElement(r("9UX1").a,{store:this.store},n.a.createElement(r("oqqV").a,null,n.a.createElement(p,null))))}}h.displayName="Flags"},"1I0C":function(e,t,r){"use strict";const a=Object(r("D6b/").defineMessages)({title:{id:"platform.ui.flags.flags.errors.forbidden.title",defaultMessage:"You don't have permission to do that",description:""},description:{id:"platform.ui.flags.flags.errors.forbidden.description",defaultMessage:"Ask your Jira admin for help.",description:""}});const n=Object(r("D6b/").defineMessages)({title:{id:"platform.ui.flags.flags.errors.generic-error.title",defaultMessage:"Something's gone wrong",description:""},description:{id:"platform.ui.flags.flags.errors.generic-error.description",
defaultMessage:"Refresh the page and try again.",description:""}});const s=Object(r("D6b/").defineMessages)({title:{id:"platform.ui.flags.flags.errors.server-error.title",defaultMessage:"We're having some trouble",description:""},description:{id:"platform.ui.flags.flags.errors.server-error.description",defaultMessage:"Something went wrong on our end. Refresh the page and try again.",description:""}});const o=Object(r("D6b/").defineMessages)({title:{id:"platform.ui.flags.flags.errors.unauthorized.title",defaultMessage:"You're logged out",description:""},description:{id:"platform.ui.flags.flags.errors.unauthorized.description",defaultMessage:"Log back in and try again.",description:""}});t.a={forbidden:()=>({type:"error",title:a.title,description:a.description}),genericError:()=>({type:"error",title:n.title,description:n.description}),serverError:()=>({type:"error",title:s.title,description:s.description}),unauthorized:()=>({type:"error",title:o.title,description:o.description})}},
"4qC0":function(e,t,r){var a=r("NykK"),n=r("Z0cm"),s=r("ExA7");e.exports=function(e){return"string"==typeof e||!n(e)&&s(e)&&"[object String]"==a(e)}},"5ah/":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r("q1tI");class n extends a.Component{constructor(...e){super(...e),this.flagId=void 0}componentDidMount(){const{flagService:e,flag:t}=this.props;e&&(this.flagId=e.showFlag(t))}componentWillUnmount(){const{flagService:e}=this.props;e&&this.flagId&&e.dismissFlag(Object(r("wmyT").b)(this.flagId))}render(){return null}}n.displayName="PureFlagRenderer";const s=Object(r("l3v8").a)(n)},Aglm:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),s=r("/MKj"),o=r("17x9");var i=e=>{var t;return(t=class extends a.Component{constructor(t,r){super(t),this.perform=(e,t)=>{e.meta&&e.meta.batch&&Array.isArray(e.payload)?e.payload.forEach((e=>{e.type&&"string"==typeof e.type&&this.handleAction(e,t)})):this.handleAction(e,t)};const a=r[e]
;if(!a)throw new Error(`Cannot get store with the key '${e}' from the context.`);if("function"!=typeof a.addActionListener||"function"!=typeof a.removeActionListener)throw new Error("Your store doesn't support action listeners; please use the Tangerine store initialiser.")}componentDidMount(){this.context[e].addActionListener(this.perform)}componentWillUnmount(){this.context[e].removeActionListener(this.perform)}handleAction(t,a){const{mapper:o,showFlag:i,dismissFlag:c}=this.props,l=o(t,a);if(l)if(l.command===r("EIFJ").a){const e=l;e.id&&c(e)}else if(null!=l.type||null!=l.render)i(l);else{const t=l;i((r=>n.a.createElement(s.Provider,{store:this.context[e]},n.a.createElement(t,r))))}}render(){return null}}).contextTypes={[e]:o.object.isRequired},t};class c extends a.Component{constructor(...e){super(...e),this.state={DispatcherComponent:null}}static getDerivedStateFromProps(e,t){return e.storeKey===t.lastStoreKey?null:{lastStoreKey:e.storeKey,DispatcherComponent:i(e.storeKey)}}render(){
const{DispatcherComponent:e}=this.state,{storeKey:t,...r}=this.props;return e&&n.a.createElement(e,r)}}c.displayName="Dispatcher",c.defaultProps={storeKey:"store"};t.a=({storeKey:e,mapper:t})=>n.a.createElement(c,{storeKey:e,mapper:t,showFlag:r("uSxZ").c,dismissFlag:r("uSxZ").a})},GND5:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return v})),r.d(t,"g",(function(){return E})),r.d(t,"h",(function(){return b})),r.d(t,"d",(function(){return N}));var a=r("pVnL"),n=r.n(a),s=r("q1tI"),o=r.n(s),i=r("DTaC");const c=Object(i.j)((()=>Promise.all([r.e("vendor~d0ae3f07"),r.e("vendor~31ecd969"),r.e("vendor~690b702c"),r.e("async-flags-v2")]).then(r.bind(null,"sUnz"))),{ssr:!1,moduleId:"./src/packages/platform/ui/flags/src/common/ui/components/common-flag-v2/index.tsx"
}),l=Object(i.i)((()=>Promise.all([r.e("vendor~d0ae3f07"),r.e("vendor~31ecd969"),r.e("vendor~690b702c"),r.e("async-flags-v2")]).then(r.bind(null,"sUnz"))),{ssr:!1,moduleId:"./src/packages/platform/ui/flags/src/common/ui/components/common-flag-v2/index.tsx"}),u=e=>__SPA__?o.a.createElement(l,e):o.a.createElement(c,e),d=Object(i.j)((()=>Promise.all([r.e("vendor~d0ae3f07"),r.e("vendor~31ecd969"),r.e("vendor~690b702c"),r.e("async-flags-v2")]).then(r.bind(null,"Og41"))),{ssr:!1,moduleId:"./src/packages/platform/ui/flags/src/common/ui/components/group-flag-v2/index.tsx"}),m=Object(i.i)((()=>Promise.all([r.e("vendor~d0ae3f07"),r.e("vendor~31ecd969"),r.e("vendor~690b702c"),r.e("async-flags-v2")]).then(r.bind(null,"Og41"))),{ssr:!1,moduleId:"./src/packages/platform/ui/flags/src/common/ui/components/group-flag-v2/index.tsx"}),f=e=>__SPA__?o.a.createElement(m,e):o.a.createElement(d,e),p=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,t))
;p.displayName="CommonFlag";const g=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,n()({flagType:"error"},t)));g.displayName="ErrorFlag";const h=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,n()({flagType:"error",isAutoDismiss:!0},t)));h.displayName="ErrorAutoDismissFlag";const y=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,n()({flagType:"info"},t)));y.displayName="InfoFlag";const v=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,n()({flagType:"success",isAutoDismiss:!0},t)));v.displayName="SuccessAutoDismissFlag";const E=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(u,n()({flagType:"success"},t)));E.displayName="SuccessFlag";const b=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e
},o.a.createElement(u,n()({flagType:"warning"},t)));b.displayName="WarningFlag";const N=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(f,t));N.displayName="FlagGroup"},P62X:function(e,t,r){"use strict";r.r(t),r.d(t,"useFlagsService",(function(){return r("uSxZ").e})),r.d(t,"useFlagService",(function(){return r("uSxZ").d})),r.d(t,"toFlagId",(function(){return r("EIFJ").c})),r.d(t,"fromFlagId",(function(){return r("EIFJ").b})),r.d(t,"dismissFlag",(function(){return r("wmyT").b})),r.d(t,"withFlagService",(function(){return r("l3v8").a})),r.d(t,"errorFlags",(function(){return r("1I0C").a})),r.d(t,"FlagServiceSubscriber",(function(){return r("Up39").a})),r.d(t,"FlagsDispatcher",(function(){return r("Aglm").a})),r.d(t,"FlagRenderer",(function(){return r("5ah/").a})),r.d(t,"ErrorFlag",(function(){return r("GND5").c})),r.d(t,"InfoFlag",(function(){return r("GND5").e})),r.d(t,"SuccessAutoDismissFlag",(function(){return r("GND5").f})),
r.d(t,"SuccessFlag",(function(){return r("GND5").g})),r.d(t,"WarningFlag",(function(){return r("GND5").h})),r.d(t,"FlagGroup",(function(){return r("GND5").d})),r.d(t,"AkFlag",(function(){return r("Qr9X").a})),r.d(t,"AkAutoDismissFlag",(function(){return r("Q2Os").a}))},Q2Os:function(e,t,r){"use strict";var a=r("pVnL"),n=r.n(a),s=r("q1tI"),o=r.n(s);const i=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(r("GND5").a,n()({isAutoDismiss:!0},t,{flagType:"info"})));i.displayName="AkAutoDismissFlag",t.a=i},Qr9X:function(e,t,r){"use strict";var a=r("pVnL"),n=r.n(a),s=r("q1tI"),o=r.n(s);const i=({packageName:e="flags",...t})=>o.a.createElement(r("0KtW").a,{packageName:e},o.a.createElement(r("GND5").a,n()({flagType:"info"},t)));i.displayName="AkFlag",t.a=i},Up39:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a);t.a=e=>n.a.createElement(n.a.Fragment,null,e.children(r("uSxZ").b))},W3MJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return d
}));var a=r("pVnL"),n=r.n(a),s=r("q1tI"),o=r.n(s),i=r("2mql"),c=r.n(i);const l=r("o5hF").a.Consumer,u=e=>"string"==typeof e&&""!==e;const d=(e,t)=>{const{withRef:a=!1}=t||{},i=t=>{const i=Object(s.useRef)(null);return o.a.createElement(l,null,(s=>{if(!s)throw new Error("REACT_INTL_FACADE: React Intl Could not find required `intl` object");return i.current||(i.current={now:()=>Date.now(),messages:s.messages,locale:s.locale,formats:s.formats,formatDate:s.formatDate,formatMessage:s.formatMessage,formatHTMLMessage:(e,t)=>s.formatMessage(e,t,{ignoreTag:!0}),formatNumber:s.formatNumber,formatRelative:(e,t)=>{const{time:a,unit:n}=Object(r("iWFM").b)(e);return s.formatRelativeTime(a,n,t)},formatPlural:s.formatPlural,formatTime:s.formatTime}),o.a.createElement(e,n()({},t,{intl:i.current,ref:a?t.forwardedRef:null}))}))};return i.displayName=`InjectIntl(${function(e){return u(e.displayName)?e.displayName:u(e.name)?e.name:"Component"}(e)})`,i.WrappedComponent=e,
a?c()(Object(s.forwardRef)(((e,t)=>o.a.createElement(i,n()({},e,{forwardedRef:t})))),e):c()(i,e)}},gdIw:function(e,t,r){"use strict";t.a=r("GND5").d},l3v8:function(e,t,r){"use strict";var a=r("pVnL"),n=r.n(a),s=r("q1tI"),o=r.n(s);t.a=e=>t=>o.a.createElement(e,n()({},t,{flagService:r("uSxZ").b}))},oqqV:function(e,t,r){"use strict";var a=r("vOnD");t.a=a.c.div.withConfig({componentId:"h5xpn2-0"})`font-family:${r("3d9S").d};font-size:${r("3d9S").e}px;height:inherit;letter-spacing:normal;`},wig9:function(e,t){e.exports=function(e){for(var t=-1,r=null==e?0:e.length,a=0,n=[];++t<r;){var s=e[t];s&&(n[a++]=s)}return n}},zWRH:function(e,t,r){"use strict";t.a=r("GND5").a}}]);try{window.__jsEvalStop("async-flags.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-flags.8daaf18e74f9d66e7340.8.js.map