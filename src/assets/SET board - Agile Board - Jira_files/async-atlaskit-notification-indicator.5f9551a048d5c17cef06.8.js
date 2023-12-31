try{window.performance.mark("async-atlaskit-notification-indicator.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-atlaskit-notification-indicator"],{"2kvn":function(e,r,a){"use strict";a.d(r,"a",(function(){return n})),a.d(r,"b",(function(){return t}));var o=a("q1tI");const n=Object(o.createContext)("elevation.surface"),t=()=>Object(o.useContext)(n);n.displayName="SurfaceProvider"},"7QTw":function(e,r,a){"use strict";var o=a("q1tI"),n=a.n(o);function t(e=0){return e<0?0:e}const d=Object(a("f5Dt").b)({borderRadius:"border.radius.200",display:"inline-flex"}),s=Object(o.memo)((function({appearance:e="default",children:r=0,max:o=99,style:s,testId:i}){return n.a.createElement(a("UTrB").a,{testId:i,as:"span",backgroundColor:c[e],xcss:d,style:null!=s&&s.backgroundColor?{backgroundColor:s.backgroundColor}:void 0,paddingInline:"space.075"},n.a.createElement(a("9lTs").a,{fontSize:"size.075",lineHeight:"lineHeight.100",textAlign:"center",color:l[e],
UNSAFE_style:null!=s&&s.color?{color:s.color}:void 0},"number"==typeof r&&o?function(e,r){const a=t(e),o=t(r);return o&&o<a?`${o}+`:a===1/0?"\u221e":a.toString()}(r,o):r))}));s.displayName="Badge";r.a=s;const c={added:"color.background.success",default:"color.background.neutral",important:"color.background.danger.bold",primary:"color.background.brand.bold",primaryInverted:"elevation.surface",removed:"color.background.danger"},l={added:"success",default:"color.text",important:"inverse",primary:"inverse",primaryInverted:"brand",removed:"danger"}},"9R94":function(e,r,a){"use strict";a.d(r,"a",(function(){return n}));var o="Invariant failed";function n(e,r){if(!e)throw new Error(o)}},"9lTs":function(e,r,a){"use strict";var o=a("q1tI"),n={"neutral.bold":"inverse","neutral.bold.hovered":"inverse","neutral.bold.pressed":"inverse","selected.bold":"inverse","selected.bold.hovered":"inverse","selected.bold.pressed":"inverse","brand.bold":"inverse","brand.bold.hovered":"inverse",
"brand.bold.pressed":"inverse","danger.bold":"inverse","danger.bold.hovered":"inverse","danger.bold.pressed":"inverse","warning.bold":"warning.inverse","warning.bold.hovered":"warning.inverse","warning.bold.pressed":"warning.inverse","success.bold":"inverse","success.bold.hovered":"inverse","success.bold.pressed":"inverse","discovery.bold":"inverse","discovery.bold.hovered":"inverse","discovery.bold.pressed":"inverse","information.bold":"inverse","information.bold.hovered":"inverse","information.bold.pressed":"inverse"};const t=["span","div","p","strong"],d={center:{name:"1azakc",styles:"text-align:center"},end:{name:"va2k03",styles:"text-align:end"},start:{name:"9kuh93",styles:"text-align:start"}},s={none:{name:"kxbue8",styles:"text-transform:none"},lowercase:{name:"1tq8czj",styles:"text-transform:lowercase"},uppercase:{name:"50zrmy",styles:"text-transform:uppercase"}},c={top:{name:"40f4ru",styles:"vertical-align:top"},middle:{name:"1989ovb",styles:"vertical-align:middle"},bottom:{
name:"3lrvfj",styles:"vertical-align:bottom"}},l={name:"1wdgfhb",styles:"box-sizing:border-box;margin:var(--ds-space-0, 0px);padding:var(--ds-space-0, 0px)"},i={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},b=Object(o.createContext)(!1);r.a=({children:e,...r})=>{const{as:k="span",color:h,fontSize:x,fontWeight:f,lineHeight:F,shouldTruncate:y=!1,textAlign:w,textTransform:D,verticalAlign:C,testId:B,UNSAFE_style:j,id:A}=r;Object(a("9R94").a)(t.includes(k),`@atlaskit/ds-explorations: Text received an invalid "as" value of "${k}"`);const U=(e=>{const r=Object(a("2kvn").b)(),o=n[r];return null!=o?o:e})(h),E=(()=>Object(o.useContext)(b))();if(E&&0===Object.keys(r).length)return Object(a("AeFk").jsx)(o.Fragment,null,e);const I=Object(a("AeFk").jsx)(k,{style:j,css:[l,v.sans,U&&m[U],x&&u[x],f&&g[f],F&&p[F],y&&i,w&&d[w],D&&s[D],C&&c[C]],"data-testid":B,id:A},e);return E?I:Object(a("AeFk").jsx)(b.Provider,{value:!0},I)};const u={"size.050":{name:"1xd8zg1",
styles:"font-size:var(--ds-font-size-050, 11px)"},"size.075":{name:"wpnj2a",styles:"font-size:var(--ds-font-size-075, 12px)"},"size.100":{name:"u4rmul",styles:"font-size:var(--ds-font-size-100, 14px)"},"size.200":{name:"6ken25",styles:"font-size:var(--ds-font-size-200, 16px)"},"size.300":{name:"xq2j5w",styles:"font-size:var(--ds-font-size-300, 20px)"},"size.400":{name:"f7q8sx",styles:"font-size:var(--ds-font-size-400, 24px)"},"size.500":{name:"1jpydnl",styles:"font-size:var(--ds-font-size-500, 28px)"},"size.600":{name:"1mrhe9b",styles:"font-size:var(--ds-font-size-600, 36px)"}},g={bold:{name:"zh3azs",styles:"font-weight:var(--ds-font-weight-bold, 700)"},medium:{name:"rbkjwc",styles:"font-weight:var(--ds-font-weight-medium, 500)"},regular:{name:"16qdqn8",styles:"font-weight:var(--ds-font-weight-regular, 400)"},semibold:{name:"1blmyc0",styles:"font-weight:var(--ds-font-weight-semibold, 600)"}},v={monospace:{name:"1wys8lw",
styles:'font-family:var(--ds-font-family-monospace, "SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace)'},sans:{name:"1d3u3qq",styles:'font-family:var(--ds-font-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif)'}},p={"lineHeight.100":{name:"1xowr7m",styles:"line-height:var(--ds-font-lineHeight-100, 16px)"},"lineHeight.200":{name:"124mzyj",styles:"line-height:var(--ds-font-lineHeight-200, 20px)"},"lineHeight.300":{name:"1c65p77",styles:"line-height:var(--ds-font-lineHeight-300, 24px)"},"lineHeight.400":{name:"19iqx5d",styles:"line-height:var(--ds-font-lineHeight-400, 28px)"},"lineHeight.500":{name:"z26w3o",styles:"line-height:var(--ds-font-lineHeight-500, 32px)"},"lineHeight.600":{name:"1i7olow",styles:"line-height:var(--ds-font-lineHeight-600, 40px)"}},m={"color.text":{name:"nws7uq",styles:"color:var(--ds-text, #172B4D)"},
disabled:{name:"1avw4x8",styles:"color:var(--ds-text-disabled, #A5ADBA)"},inverse:{name:"1wvsb8v",styles:"color:var(--ds-text-inverse, #FFFFFF)"},selected:{name:"1d6pzy6",styles:"color:var(--ds-text-selected, #0052CC)"},brand:{name:"1j67zuz",styles:"color:var(--ds-text-brand, #0065FF)"},danger:{name:"18zo14t",styles:"color:var(--ds-text-danger, #DE350B)"},warning:{name:"1g2i1rp",styles:"color:var(--ds-text-warning, #974F0C)"},"warning.inverse":{name:"tgubtb",styles:"color:var(--ds-text-warning-inverse, #172B4D)"},success:{name:"1ychrch",styles:"color:var(--ds-text-success, #006644)"},discovery:{name:"3juofh",styles:"color:var(--ds-text-discovery, #403294)"},information:{name:"3j31nl",styles:"color:var(--ds-text-information, #0052CC)"},subtlest:{name:"77s6bm",styles:"color:var(--ds-text-subtlest, #7A869A)"},subtle:{name:"kmxsjg",styles:"color:var(--ds-text-subtle, #42526E)"}}},FUCu:function(e,r,a){"use strict";a.d(r,"a",(function(){return n}));const o={xxs:{
gridItemGutter:"var(--ds-space-200, 16px)",gridMargin:"var(--ds-space-200, 16px)",min:"0rem",max:"29.99rem"},xs:{gridItemGutter:"var(--ds-space-200, 16px)",gridMargin:"var(--ds-space-200, 16px)",min:"30rem",max:"47.99rem"},sm:{gridItemGutter:"var(--ds-space-200, 16px)",gridMargin:"var(--ds-space-300, 24px)",min:"48rem",max:"63.99rem"},md:{gridItemGutter:"var(--ds-space-300, 24px)",gridMargin:"var(--ds-space-400, 32px)",min:"64rem",max:"89.99rem"},lg:{gridItemGutter:"var(--ds-space-400, 32px)",gridMargin:"var(--ds-space-400, 32px)",min:"90rem",max:"109.99rem"},xl:{gridItemGutter:"var(--ds-space-400, 32px)",gridMargin:"var(--ds-space-500, 40px)",min:"110rem",max:null}},n=(Object.keys(o)[0],{above:{above:{xxs:"@media all",xs:`@media (min-width: ${o.xs.min})`,sm:`@media (min-width: ${o.sm.min})`,md:`@media (min-width: ${o.md.min})`,lg:`@media (min-width: ${o.lg.min})`,xl:`@media (min-width: ${o.xl.min})`},below:{xs:`@media not all and (min-width: ${o.xs.min})`,
sm:`@media not all and (min-width: ${o.sm.min})`,md:`@media not all and (min-width: ${o.md.min})`,lg:`@media not all and (min-width: ${o.lg.min})`,xl:`@media not all and (min-width: ${o.xl.min})`},only:{xxs:`@media (min-width: ${o.xxs.min}) and (max-width: ${o.xxs.max})`,xs:`@media (min-width: ${o.xs.min}) and (max-width: ${o.xs.max})`,sm:`@media (min-width: ${o.sm.min}) and (max-width: ${o.sm.max})`,md:`@media (min-width: ${o.md.min}) and (max-width: ${o.md.max})`,lg:`@media (min-width: ${o.lg.min}) and (max-width: ${o.lg.max})`,xl:`@media (min-width: ${o.xl.min})`}}.above})},UTrB:function(e,r,a){"use strict";var o=a("pVnL"),n=a.n(o),t=a("q1tI");const d=Object(t.forwardRef)((({as:e="div",className:r,children:o,backgroundColor:t,padding:d,paddingBlock:c,paddingBlockStart:l,paddingBlockEnd:i,paddingInline:b,paddingInlineStart:u,paddingInlineEnd:g,style:v,testId:p,css:m,...k},h)=>{const x=e;return Object(a("AeFk").jsx)(x,n()({style:v,ref:h},k,{className:r,
css:[s,t&&a("bUDQ").b[t],d&&a("bUDQ").h.padding[d],c&&a("bUDQ").h.paddingBlock[c],l&&a("bUDQ").h.paddingBlockStart[l],i&&a("bUDQ").h.paddingBlockEnd[i],b&&a("bUDQ").h.paddingInline[b],u&&a("bUDQ").h.paddingInlineStart[u],g&&a("bUDQ").h.paddingInlineEnd[g]],"data-testid":p}),o)}));d.displayName="BaseBox";const s={name:"1b8qmvl",styles:"box-sizing:border-box;appearance:none;border:none"},c=Object(t.forwardRef)((({as:e,children:r,backgroundColor:o,padding:t,paddingBlock:s,paddingBlockStart:c,paddingBlockEnd:l,paddingInline:i,paddingInlineStart:b,paddingInlineEnd:u,style:g,testId:v,xcss:p,...m},k)=>{const{className:h,...x}=m,f=p&&Object(a("f5Dt").a)(p);return Object(a("AeFk").jsx)(d,n()({as:e,backgroundColor:o,padding:t,paddingBlock:s,paddingBlockStart:c,paddingBlockEnd:l,paddingInline:i,paddingInlineStart:b,paddingInlineEnd:u,style:g,testId:v,ref:k,css:f},x),r)}));c.displayName="Box";r.a=c},VwTp:function(r,a,o){"use strict";o.r(a),o.d(a,"NotificationIndicator",(function(){return b}))
;var n=o("lSNA"),t=o.n(n),d=o("q1tI"),s=o.n(d);const c="navigation";class l extends d.Component{constructor(...r){super(...r),t()(this,"visibilityChangesSinceTimer",0),t()(this,"state",{count:null}),t()(this,"onVisibilityChange",(()=>{this.props.refreshOnVisibilityChange&&this.shouldRefresh()&&(this.visibilityChangesSinceTimer++,this.refresh("visibility"))})),t()(this,"shouldRefresh",(()=>!document.hidden||this.props.refreshOnHidden)),t()(this,"timerTick",(()=>{this.visibilityChangesSinceTimer=0,this.refresh("timer")})),t()(this,"handleAnalytics",(e=>{const{newCount:r,oldCount:a,source:o}=e;if(this.props.createAnalyticsEvent&&r>0&&0===a){this.props.createAnalyticsEvent({actionSubject:"notificationIndicator",action:"activated",attributes:{badgeCount:r,refreshSource:o}}).fire(c)}if(this.props.createAnalyticsEvent&&r!==a){this.props.createAnalyticsEvent({actionSubject:"notificationIndicator",action:"updated",attributes:{oldCount:a,newCount:r,refreshSource:o}}).fire(c)}})),
t()(this,"refresh",(async r=>{if(!this.notificationLogProvider)return;if(!this.shouldRefresh())return;const a={source:r,visibilityChangesSinceTimer:this.visibilityChangesSinceTimer},o=this.props.onCountUpdating&&this.props.onCountUpdating(a)||{};if(!o.skip)try{const e=o.countOverride||(await this.notificationLogProvider.countUnseenNotifications({queryParams:{currentCount:this.state.count||0}})).count;if(null===this.state.count||this.state.count!==e){const a={oldCount:this.state.count||0,newCount:e,source:r};this.handleAnalytics(a),this.props.onCountUpdated&&this.props.onCountUpdated(a),this.setState({count:e})}}catch(e){}}))}async componentDidMount(){this.notificationLogProvider=await this.props.notificationLogProvider,this.refresh("mount"),this.updateInterval(),document.addEventListener("visibilitychange",this.onVisibilityChange)}componentDidUpdate(e){e.refreshRate!==this.props.refreshRate&&this.updateInterval()}componentWillUnmount(){this.intervalId&&clearInterval(this.intervalId),
document.removeEventListener("visibilitychange",this.onVisibilityChange)}updateInterval(){const{refreshRate:e}=this.props;this.intervalId&&clearInterval(this.intervalId),e&&e>0&&(this.intervalId=window.setInterval(this.timerTick,e))}render(){const{count:e}=this.state,{appearance:r,max:a}=this.props;return e?s.a.createElement("div",{"data-test-selector":"NotificationIndicator"},s.a.createElement(o("7QTw").a,{max:a,appearance:r},e)):null}}l.displayName="NotificationIndicator",t()(l,"defaultProps",{appearance:"important",max:9,refreshRate:0,refreshOnHidden:!1,refreshOnVisibilityChange:!0});var i=l;const b=Object(o("OT7X").a)()(i)},bUDQ:function(e,r,a){"use strict";a.d(r,"f",(function(){return o})),a.d(r,"j",(function(){return n})),a.d(r,"c",(function(){return t})),a.d(r,"a",(function(){return d})),a.d(r,"i",(function(){return s})),a.d(r,"l",(function(){return c})),a.d(r,"g",(function(){return l})),a.d(r,"e",(function(){return i})),a.d(r,"d",(function(){return b})),a.d(r,"h",(function(){
return v})),a.d(r,"k",(function(){return p})),a.d(r,"b",(function(){return m}));const o={"100%":"100%","size.100":"1rem","size.200":"1.5rem","size.300":"2rem","size.400":"2.5rem","size.500":"3rem","size.600":"6rem","size.1000":"12rem"},n={"space.0":"var(--ds-space-0, 0px)","space.025":"var(--ds-space-025, 2px)","space.050":"var(--ds-space-050, 4px)","space.075":"var(--ds-space-075, 6px)","space.100":"var(--ds-space-100, 8px)","space.150":"var(--ds-space-150, 12px)","space.200":"var(--ds-space-200, 16px)","space.250":"var(--ds-space-250, 20px)","space.300":"var(--ds-space-300, 24px)","space.400":"var(--ds-space-400, 32px)","space.500":"var(--ds-space-500, 40px)","space.600":"var(--ds-space-600, 48px)","space.800":"var(--ds-space-800, 64px)","space.1000":"var(--ds-space-1000, 80px)"},t={"color.border":"var(--ds-border, #091e4221)","color.border.accent.lime":"var(--ds-border-accent-lime, #6A9A23)","color.border.accent.red":"var(--ds-border-accent-red, #FF5630)",
"color.border.accent.orange":"var(--ds-border-accent-orange, #D94008)","color.border.accent.yellow":"var(--ds-border-accent-yellow, #FFAB00)","color.border.accent.green":"var(--ds-border-accent-green, #36B37E)","color.border.accent.teal":"var(--ds-border-accent-teal, #00B8D9)","color.border.accent.blue":"var(--ds-border-accent-blue, #0065FF)","color.border.accent.purple":"var(--ds-border-accent-purple, #6554C0)","color.border.accent.magenta":"var(--ds-border-accent-magenta, #CD519D)","color.border.accent.gray":"var(--ds-border-accent-gray, #5E6C84)","color.border.disabled":"var(--ds-border-disabled, #FAFBFC)","color.border.focused":"var(--ds-border-focused, #4C9AFF)","color.border.input":"var(--ds-border-input, #FAFBFC)","color.border.inverse":"var(--ds-border-inverse, #FFFFFF)","color.border.selected":"var(--ds-border-selected, #0052CC)","color.border.brand":"var(--ds-border-brand, #0052CC)","color.border.danger":"var(--ds-border-danger, #FF5630)",
"color.border.warning":"var(--ds-border-warning, #FFC400)","color.border.success":"var(--ds-border-success, #00875A)","color.border.discovery":"var(--ds-border-discovery, #998DD9)","color.border.information":"var(--ds-border-information, #0065FF)","color.border.bold":"var(--ds-border-bold, #344563)"},d={"color.background.accent.lime.subtlest":"var(--ds-background-accent-lime-subtlest, #EEFBDA)","color.background.accent.lime.subtler":"var(--ds-background-accent-lime-subtler, #D3F1A7)","color.background.accent.lime.subtle":"var(--ds-background-accent-lime-subtle, #94C748)","color.background.accent.lime.bolder":"var(--ds-background-accent-lime-bolder, #5B7F24)","color.background.accent.red.subtlest":"var(--ds-background-accent-red-subtlest, #FF8F73)","color.background.accent.red.subtler":"var(--ds-background-accent-red-subtler, #FF7452)","color.background.accent.red.subtle":"var(--ds-background-accent-red-subtle, #DE350B)",
"color.background.accent.red.bolder":"var(--ds-background-accent-red-bolder, #DE350B)","color.background.accent.orange.subtlest":"var(--ds-background-accent-orange-subtlest, #F18D13)","color.background.accent.orange.subtler":"var(--ds-background-accent-orange-subtler, #B65C02)","color.background.accent.orange.subtle":"var(--ds-background-accent-orange-subtle, #5F3811)","color.background.accent.orange.bolder":"var(--ds-background-accent-orange-bolder, #43290F)","color.background.accent.yellow.subtlest":"var(--ds-background-accent-yellow-subtlest, #FFE380)","color.background.accent.yellow.subtler":"var(--ds-background-accent-yellow-subtler, #FFC400)","color.background.accent.yellow.subtle":"var(--ds-background-accent-yellow-subtle, #FF991F)","color.background.accent.yellow.bolder":"var(--ds-background-accent-yellow-bolder, #FF991F)","color.background.accent.green.subtlest":"var(--ds-background-accent-green-subtlest, #79F2C0)",
"color.background.accent.green.subtler":"var(--ds-background-accent-green-subtler, #57D9A3)","color.background.accent.green.subtle":"var(--ds-background-accent-green-subtle, #00875A)","color.background.accent.green.bolder":"var(--ds-background-accent-green-bolder, #00875A)","color.background.accent.teal.subtlest":"var(--ds-background-accent-teal-subtlest, #79E2F2)","color.background.accent.teal.subtler":"var(--ds-background-accent-teal-subtler, #00C7E6)","color.background.accent.teal.subtle":"var(--ds-background-accent-teal-subtle, #00A3BF)","color.background.accent.teal.bolder":"var(--ds-background-accent-teal-bolder, #00A3BF)","color.background.accent.blue.subtlest":"var(--ds-background-accent-blue-subtlest, #4C9AFF)","color.background.accent.blue.subtler":"var(--ds-background-accent-blue-subtler, #2684FF)","color.background.accent.blue.subtle":"var(--ds-background-accent-blue-subtle, #0052CC)","color.background.accent.blue.bolder":"var(--ds-background-accent-blue-bolder, #0052CC)",
"color.background.accent.purple.subtlest":"var(--ds-background-accent-purple-subtlest, #998DD9)","color.background.accent.purple.subtler":"var(--ds-background-accent-purple-subtler, #8777D9)","color.background.accent.purple.subtle":"var(--ds-background-accent-purple-subtle, #5243AA)","color.background.accent.purple.bolder":"var(--ds-background-accent-purple-bolder, #5243AA)","color.background.accent.magenta.subtlest":"var(--ds-background-accent-magenta-subtlest, #E774BB)","color.background.accent.magenta.subtler":"var(--ds-background-accent-magenta-subtler, #E774BB)","color.background.accent.magenta.subtle":"var(--ds-background-accent-magenta-subtle, #E774BB)","color.background.accent.magenta.bolder":"var(--ds-background-accent-magenta-bolder, #E774BB)","color.background.accent.gray.subtlest":"var(--ds-background-accent-gray-subtlest, #6B778C)","color.background.accent.gray.subtler":"var(--ds-background-accent-gray-subtler, #5E6C84)",
"color.background.accent.gray.subtle":"var(--ds-background-accent-gray-subtle, #42526E)","color.background.accent.gray.bolder":"var(--ds-background-accent-gray-bolder, #505F79)","color.background.disabled":"var(--ds-background-disabled, #091e4289)","color.background.input":"var(--ds-background-input, #FAFBFC)","color.background.input.hovered":"var(--ds-background-input-hovered, #EBECF0)","color.background.input.pressed":"var(--ds-background-input-pressed, #FFFFFF)","color.background.inverse.subtle":"var(--ds-background-inverse-subtle, #00000029)","color.background.inverse.subtle.hovered":"var(--ds-background-inverse-subtle-hovered, #0000003D)","color.background.inverse.subtle.pressed":"var(--ds-background-inverse-subtle-pressed, #00000052)","color.background.neutral":"var(--ds-background-neutral, #DFE1E6)","color.background.neutral.hovered":"var(--ds-background-neutral-hovered, #091e4214)","color.background.neutral.pressed":"var(--ds-background-neutral-pressed, #B3D4FF)",
"color.background.neutral.subtle":"var(--ds-background-neutral-subtle, transparent)","color.background.neutral.subtle.hovered":"var(--ds-background-neutral-subtle-hovered, #091e4214)","color.background.neutral.subtle.pressed":"var(--ds-background-neutral-subtle-pressed, #B3D4FF)","color.background.neutral.bold":"var(--ds-background-neutral-bold, #42526E)","color.background.neutral.bold.hovered":"var(--ds-background-neutral-bold-hovered, #505F79)","color.background.neutral.bold.pressed":"var(--ds-background-neutral-bold-pressed, #344563)","color.background.selected":"var(--ds-background-selected, #DEEBFF)","color.background.selected.hovered":"var(--ds-background-selected-hovered, #B3D4FF)","color.background.selected.pressed":"var(--ds-background-selected-pressed, #4C9AFF)","color.background.selected.bold":"var(--ds-background-selected-bold, #0052CC)","color.background.selected.bold.hovered":"var(--ds-background-selected-bold-hovered, #2684FF)",
"color.background.selected.bold.pressed":"var(--ds-background-selected-bold-pressed, #0052CC)","color.background.brand.bold":"var(--ds-background-brand-bold, #0052CC)","color.background.brand.bold.hovered":"var(--ds-background-brand-bold-hovered, #0065FF)","color.background.brand.bold.pressed":"var(--ds-background-brand-bold-pressed, #0747A6)","color.background.danger":"var(--ds-background-danger, #FFEBE6)","color.background.danger.hovered":"var(--ds-background-danger-hovered, #FFBDAD)","color.background.danger.pressed":"var(--ds-background-danger-pressed, #FF8F73)","color.background.danger.bold":"var(--ds-background-danger-bold, #DE350B)","color.background.danger.bold.hovered":"var(--ds-background-danger-bold-hovered, #FF5630)","color.background.danger.bold.pressed":"var(--ds-background-danger-bold-pressed, #BF2600)","color.background.warning":"var(--ds-background-warning, #FFFAE6)","color.background.warning.hovered":"var(--ds-background-warning-hovered, #FFF0B3)",
"color.background.warning.pressed":"var(--ds-background-warning-pressed, #FFE380)","color.background.warning.bold":"var(--ds-background-warning-bold, #FFAB00)","color.background.warning.bold.hovered":"var(--ds-background-warning-bold-hovered, #FFC400)","color.background.warning.bold.pressed":"var(--ds-background-warning-bold-pressed, #FF991F)","color.background.success":"var(--ds-background-success, #E3FCEF)","color.background.success.hovered":"var(--ds-background-success-hovered, #ABF5D1)","color.background.success.pressed":"var(--ds-background-success-pressed, #79F2C0)","color.background.success.bold":"var(--ds-background-success-bold, #00875A)","color.background.success.bold.hovered":"var(--ds-background-success-bold-hovered, #57D9A3)","color.background.success.bold.pressed":"var(--ds-background-success-bold-pressed, #00875A)","color.background.discovery":"var(--ds-background-discovery, #EAE6FF)","color.background.discovery.hovered":"var(--ds-background-discovery-hovered, #C0B6F2)",
"color.background.discovery.pressed":"var(--ds-background-discovery-pressed, #998DD9)","color.background.discovery.bold":"var(--ds-background-discovery-bold, #5243AA)","color.background.discovery.bold.hovered":"var(--ds-background-discovery-bold-hovered, #8777D9)","color.background.discovery.bold.pressed":"var(--ds-background-discovery-bold-pressed, #5243AA)","color.background.information":"var(--ds-background-information, #DEEBFF)","color.background.information.hovered":"var(--ds-background-information-hovered, #B3D4FF)","color.background.information.pressed":"var(--ds-background-information-pressed, #4C9AFF)","color.background.information.bold":"var(--ds-background-information-bold, #0052CC)","color.background.information.bold.hovered":"var(--ds-background-information-bold-hovered, #2684FF)","color.background.information.bold.pressed":"var(--ds-background-information-bold-pressed, #0052CC)","color.blanket":"var(--ds-blanket, #091e4289)",
"color.blanket.selected":"var(--ds-blanket-selected, #388BFF14)","color.blanket.danger":"var(--ds-blanket-danger, #EF5C4814)","elevation.surface":"var(--ds-surface, #FFFFFF)","elevation.surface.hovered":"var(--ds-surface-hovered, #FAFBFC)","elevation.surface.pressed":"var(--ds-surface-pressed, #F4F5F7)","elevation.surface.overlay":"var(--ds-surface-overlay, #FFFFFF)","elevation.surface.overlay.hovered":"var(--ds-surface-overlay-hovered, #FAFBFC)","elevation.surface.overlay.pressed":"var(--ds-surface-overlay-pressed, #F4F5F7)","elevation.surface.raised":"var(--ds-surface-raised, #FFFFFF)","elevation.surface.raised.hovered":"var(--ds-surface-raised-hovered, #FAFBFC)","elevation.surface.raised.pressed":"var(--ds-surface-raised-pressed, #F4F5F7)","elevation.surface.sunken":"var(--ds-surface-sunken, #F4F5F7)"},s={"elevation.shadow.overflow":"var(--ds-shadow-overflow, 0px 0px 8px #091e423f, 0px 0px 1px #091e424f)",
"elevation.shadow.overflow.perimeter":"var(--ds-shadow-overflow-perimeter, #091e421f)","elevation.shadow.overflow.spread":"var(--ds-shadow-overflow-spread, #091e4229)","elevation.shadow.overlay":"var(--ds-shadow-overlay, 0px 8px 12px #091e423f, 0px 0px 1px #091e424f)","elevation.shadow.raised":"var(--ds-shadow-raised, 0px 1px 1px #091e423f, 0px 0px 1px #091e4221)"},c={"color.text":"var(--ds-text, #172B4D)","color.text.accent.lime":"var(--ds-text-accent-lime, #4C6B1F)","color.text.accent.lime.bolder":"var(--ds-text-accent-lime-bolder, #37471F)","color.text.accent.red":"var(--ds-text-accent-red, #DE350B)","color.text.accent.red.bolder":"var(--ds-text-accent-red-bolder, #BF2600)","color.text.accent.orange":"var(--ds-text-accent-orange, #F18D13)","color.text.accent.orange.bolder":"var(--ds-text-accent-orange-bolder, #B65C02)","color.text.accent.yellow":"var(--ds-text-accent-yellow, #FF991F)","color.text.accent.yellow.bolder":"var(--ds-text-accent-yellow-bolder, #FF8B00)",
"color.text.accent.green":"var(--ds-text-accent-green, #00875A)","color.text.accent.green.bolder":"var(--ds-text-accent-green-bolder, #006644)","color.text.accent.teal":"var(--ds-text-accent-teal, #00A3BF)","color.text.accent.teal.bolder":"var(--ds-text-accent-teal-bolder, #008DA6)","color.text.accent.blue":"var(--ds-text-accent-blue, #0052CC)","color.text.accent.blue.bolder":"var(--ds-text-accent-blue-bolder, #0747A6)","color.text.accent.purple":"var(--ds-text-accent-purple, #5243AA)","color.text.accent.purple.bolder":"var(--ds-text-accent-purple-bolder, #403294)","color.text.accent.magenta":"var(--ds-text-accent-magenta, #E774BB)","color.text.accent.magenta.bolder":"var(--ds-text-accent-magenta-bolder, #DA62AC)","color.text.accent.gray":"var(--ds-text-accent-gray, #505F79)","color.text.accent.gray.bolder":"var(--ds-text-accent-gray-bolder, #172B4D)","color.text.disabled":"var(--ds-text-disabled, #A5ADBA)","color.text.inverse":"var(--ds-text-inverse, #FFFFFF)",
"color.text.selected":"var(--ds-text-selected, #0052CC)","color.text.brand":"var(--ds-text-brand, #0065FF)","color.text.danger":"var(--ds-text-danger, #DE350B)","color.text.warning":"var(--ds-text-warning, #974F0C)","color.text.warning.inverse":"var(--ds-text-warning-inverse, #172B4D)","color.text.success":"var(--ds-text-success, #006644)","color.text.discovery":"var(--ds-text-discovery, #403294)","color.text.information":"var(--ds-text-information, #0052CC)","color.text.subtlest":"var(--ds-text-subtlest, #7A869A)","color.text.subtle":"var(--ds-text-subtle, #42526E)"},l={card:100,navigation:200,dialog:300,layer:400,blanket:500,modal:510,flag:600,spotlight:700,tooltip:800},i={"border.width":"var(--ds-border-width, 1px)","border.width.0":"var(--ds-border-width-0, 0px)","border.width.indicator":"var(--ds-border-width-indicator, 3px)","border.width.outline":"var(--ds-border-width-outline, 2px)"},b={"border.radius.050":"var(--ds-border-radius-050, 2px)",
"border.radius":"var(--ds-border-radius, 3px)","border.radius.100":"var(--ds-border-radius-100, 3px)","border.radius.200":"var(--ds-border-radius-200, 8px)","border.radius.300":"var(--ds-border-radius-300, 12px)","border.radius.400":"var(--ds-border-radius-400, 16px)","border.radius.circle":"var(--ds-border-radius-circle, 32032px)"},u=["padding","paddingBlock","paddingBlockStart","paddingBlockEnd","paddingInline","paddingInlineStart","paddingInlineEnd","gap","rowGap","columnGap"],g=(e,r)=>Object.keys(r).reduce(((o,n)=>(o[n]=Object(a("AeFk").css)({[e]:r[n]}),o)),{}),v=u.reduce(((e,r)=>(e[r]=g(r,n),e)),{}),p=u.reduce(((e,r)=>(e[r]=g(r,n),e)),{}),m=g("backgroundColor",d)},f5Dt:function(e,r,a){"use strict";(function(e){a.d(r,"a",(function(){return i})),a.d(r,"b",(function(){return b}));const o={backgroundColor:a("bUDQ").a,blockSize:a("bUDQ").f,borderColor:a("bUDQ").c,borderRadius:a("bUDQ").d,borderWidth:a("bUDQ").e,bottom:a("bUDQ").j,boxShadow:a("bUDQ").i,color:a("bUDQ").l,
columnGap:a("bUDQ").j,gap:a("bUDQ").j,height:a("bUDQ").f,inlineSize:a("bUDQ").f,inset:a("bUDQ").j,insetBlock:a("bUDQ").j,insetBlockEnd:a("bUDQ").j,insetBlockStart:a("bUDQ").j,insetInline:a("bUDQ").j,insetInlineEnd:a("bUDQ").j,insetInlineStart:a("bUDQ").j,margin:a("bUDQ").j,marginBlock:a("bUDQ").j,marginBlockEnd:a("bUDQ").j,marginBlockStart:a("bUDQ").j,marginInline:a("bUDQ").j,marginInlineEnd:a("bUDQ").j,marginInlineStart:a("bUDQ").j,left:a("bUDQ").j,maxBlockSize:a("bUDQ").f,maxHeight:a("bUDQ").f,maxInlineSize:a("bUDQ").f,maxWidth:a("bUDQ").f,minBlockSize:a("bUDQ").f,minHeight:a("bUDQ").f,minInlineSize:a("bUDQ").f,minWidth:a("bUDQ").f,outlineOffset:a("bUDQ").j,outlineWidth:a("bUDQ").e,outlineColor:a("bUDQ").c,padding:a("bUDQ").j,paddingBlock:a("bUDQ").j,paddingBlockEnd:a("bUDQ").j,paddingBlockStart:a("bUDQ").j,paddingBottom:a("bUDQ").j,paddingInline:a("bUDQ").j,paddingInlineEnd:a("bUDQ").j,paddingInlineStart:a("bUDQ").j,paddingLeft:a("bUDQ").j,paddingRight:a("bUDQ").j,
paddingTop:a("bUDQ").j,right:a("bUDQ").j,rowGap:a("bUDQ").j,top:a("bUDQ").j,width:a("bUDQ").f,zIndex:a("bUDQ").g},n=Symbol("UNSAFE_INTERNAL_styles"),t=/(\.|\s|&+|\*\>|#|\[.*\])/,d=/^::?.*$/,s=/^@media .*$/,c=new RegExp(`^(${Object.values(a("FUCu").a.above).map((e=>e.replace(/[.()]/g,"\\$&"))).join("|")})$`),l=r=>r&&"object"==typeof r?Array.isArray(r)?r.map(l):(Object.entries(r).forEach((([a,n])=>{if((()=>"object"==typeof e&&"object"==typeof e.env&&!1)()&&t.test(a)&&!c.test(a))throw new Error(`Styles not supported for key '${a}'.`);if(d.test(a))return void(r[a]=l(n));if(s.test(a))return void(r[a]=l(n));if(!(a in o))return;const i=o[a][n];r[a]=null!=i?i:n})),r):r,i=e=>{if(Array.isArray(e))return e.map((e=>e&&i(e))).filter(Boolean);const{[n]:r}=e;return r};function b(e){return(e=>{const r=l(e);return{[n]:Object(a("AeFk").css)(r)}})(e)}}).call(this,a("8oxB"))}}]);try{window.__jsEvalStop("async-atlaskit-notification-indicator.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-atlaskit-notification-indicator.5f9551a048d5c17cef06.8.js.map