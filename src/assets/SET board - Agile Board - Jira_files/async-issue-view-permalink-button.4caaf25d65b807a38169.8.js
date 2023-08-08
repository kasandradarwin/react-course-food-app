try{window.performance.mark("async-issue-view-permalink-button.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-issue-view-permalink-button"],{"0w3d":function(e,t,o){"use strict";var a=o("q1tI"),r=o.n(a),n=o("pVnL"),i=o.n(n),l=o("vOnD");o("3gNG");const d=Object(a.forwardRef)((({as:e="label",style:t,...r},n)=>a.createElement(e,i()({},r,{style:t,ref:n,className:Object(o("TCwg").a)(["_1e0c1ule",r.className])}))));const s=l.c.div.withConfig({componentId:"yuip9e-0"})`${Object(o("PFik").h200)()} display:block;font-family:${o("3d9S").d};margin:0;${l.b`padding:${2.5*o("3d9S").f}px 0px ${o("3d9S").f/2}px 0px;`}`,c=l.c.span.withConfig({componentId:"yuip9e-1"})`color:${o("3d9S").i};font-family:${o("3d9S").d};padding-left:${.25*o("3d9S").f}px;`,u=({label:e,htmlFor:t,isRequired:o=!1})=>r.a.createElement(d,{htmlFor:t},r.a.createElement(s,null,r.a.createElement("span",null,e),o?r.a.createElement(c,{role:"presentation"},"*"):null));u.displayName="FieldLabel";t.a=u
},"9W8e":function(e,t,o){"use strict";o.r(t),o.d(t,"PermalinkButton",(function(){return n}));var a=o("q1tI"),r=o.n(a);const n=({id:e,label:t,fullIssueUrl:n,isVisible:i,onCopyClick:l})=>{const[d,s]=Object(a.useState)(!1),[c,u]=Object(a.useState)(!1),p=Object(a.useRef)();return Object(a.useEffect)((()=>{i?(p.current&&(clearTimeout(p.current),p.current=void 0),u(i)):p.current=setTimeout((()=>u(i)),200)}),[i]),r.a.createElement(o("fA3g").a,{isVisible:i&&c,className:"issue_view_permalink_button_wrapper","data-testid":"issue.common.component.permalink-button.button.copy-link-button-wrapper"},r.a.createElement(o("i9Cc").a,{id:e,label:t,tooltipDelay:0,tooltipLabel:t,tooltipLabelPosition:"top",shouldFitContainer:!0,value:n,hideFieldText:!0,remountOnChange:!0,onCopyClick:l,onClickChange:e=>s(e),onCopyReset:()=>s(!1)},r.a.createElement(o("340+").a,{appearance:"subtle-link",iconBefore:d?r.a.createElement(o.n(o("Ld6T")).a,{label:"",primaryColor:`var(--ds-icon-success, ${o("5kDX").a.G500})`,
size:"small",testId:"issue.common.component.permalink-button.button.check-circle-icon"}):r.a.createElement(o.n(o("Ydou")).a,{size:"small",label:t,testId:"issue.common.component.permalink-button.button.link-icon"}),spacing:"none"})))};n.displayName="PermalinkButton"},I4Rc:function(e,t,o){"use strict";var a=o("pVnL"),r=o.n(a),n=o("q1tI");const i={componentName:"textField",packageName:"@atlaskit/textfield",packageVersion:"5.6.0"},l=Object(n.forwardRef)(((e,t)=>{const{appearance:a="standard",isCompact:l=!1,isDisabled:d=!1,isInvalid:s=!1,isRequired:c=!1,isReadOnly:u=!1,isMonospaced:p=!1,width:b,elemAfterInput:m,elemBeforeInput:f,testId:h,onFocus:g,onBlur:C,onMouseDown:v,className:y,...k}=e,x=Object(n.useRef)(null),{mode:F}=Object(o("1chJ").b)(),w=Object(o("NvXi").a)({fn:e=>{g&&g(e)},action:"focused",...i}),j=Object(o("NvXi").a)({fn:e=>{C&&C(e)},action:"blurred",...i}),O=Object(n.useCallback)((e=>{"INPUT"!==e.target.tagName&&e.preventDefault(),
x&&x.current&&!d&&document.activeElement!==x.current&&x.current.focus(),v&&v(e)}),[v,d]),E=Object(n.useCallback)((e=>{x.current=e,t&&("object"==typeof t&&(t.current=e),"function"==typeof t&&t(e))}),[t]),I=Object(n.useMemo)((()=>Object(o("umqZ").a)(a,F,b)),[a,F,b]),T=Object(n.useMemo)((()=>Object(o("umqZ").b)(F)),[F]);return Object(o("AeFk").jsx)("div",{"data-disabled":d||void 0,"data-invalid":s||void 0,"data-ds--text-field--container":!0,"data-testid":h&&`${h}-container`,onMouseDown:O,css:I,className:y},f,Object(o("AeFk").jsx)("input",r()({},k,{"data-compact":l||void 0,"data-monospaced":p||void 0,"data-ds--text-field--input":!0,"data-testid":h,"aria-invalid":s||void 0,disabled:d,readOnly:u,required:c,onBlur:j,onFocus:w,ref:E,css:T})),m)}));l.displayName="Textfield",t.a=Object(n.memo)(l)},JyIQ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(o("q1tI")),r=o("QEuf")
;const n=e=>a.default.createElement(r.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M10 19h8V8h-8v11zM8 7.992C8 6.892 8.902 6 10.009 6h7.982C19.101 6 20 6.893 20 7.992v11.016c0 1.1-.902 1.992-2.009 1.992H10.01A2.001 2.001 0 018 19.008V7.992z"/><path d="M5 16V4.992C5 3.892 5.902 3 7.009 3H15v13H5zm2 0h8V5H7v11z"/></g></svg>'},e));n.displayName="CopyIcon";var i=n;t.default=i},Ld6T:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(o("q1tI")),r=o("QEuf");const n=e=>a.default.createElement(r.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'},e));n.displayName="CheckCircleIcon";var i=n;t.default=i},W3MJ:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var a=o("pVnL"),r=o.n(a),n=o("q1tI"),i=o.n(n),l=o("2mql"),d=o.n(l);const s=o("o5hF").a.Consumer,c=e=>"string"==typeof e&&""!==e;const u=(e,t)=>{const{withRef:a=!1}=t||{},l=t=>{const l=Object(n.useRef)(null);return i.a.createElement(s,null,(n=>{if(!n)throw new Error("REACT_INTL_FACADE: React Intl Could not find required `intl` object");return l.current||(l.current={now:()=>Date.now(),messages:n.messages,locale:n.locale,formats:n.formats,formatDate:n.formatDate,formatMessage:n.formatMessage,formatHTMLMessage:(e,t)=>n.formatMessage(e,t,{ignoreTag:!0}),
formatNumber:n.formatNumber,formatRelative:(e,t)=>{const{time:a,unit:r}=Object(o("iWFM").b)(e);return n.formatRelativeTime(a,r,t)},formatPlural:n.formatPlural,formatTime:n.formatTime}),i.a.createElement(e,r()({},t,{intl:l.current,ref:a?t.forwardedRef:null}))}))};return l.displayName=`InjectIntl(${function(e){return c(e.displayName)?e.displayName:c(e.name)?e.name:"Component"}(e)})`,l.WrappedComponent=e,a?d()(Object(n.forwardRef)(((e,t)=>i.a.createElement(l,r()({},e,{forwardedRef:t})))),e):d()(l,e)}},Ydou:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(o("q1tI")),r=o("QEuf");const n=e=>a.default.createElement(r.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"/><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"/></g></svg>'},e));n.displayName="LinkIcon";var i=n;t.default=i},i9Cc:function(t,o,a){"use strict";a.d(o,"a",(function(){return p}));var r=a("pVnL"),n=a.n(r),i=a("q1tI"),l=a.n(i);const d="field-copy-text"
;var s=Object(a("D6b/").defineMessages)({copied:{id:"common.field-copy-text.copied",defaultMessage:"Copied!",description:"Tooltip shown when text has been copied"},copyFailed:{id:"common.field-copy-text.copy-failed",defaultMessage:"Couldn't copy to clipboard",description:"Tooltip shown when text failed to be copied"}});class c extends i.Component{constructor(e){super(e),this.textInput=void 0,this.textInput=Object(i.createRef)(),this.props.innerInputRef(this.textInput)}renderDefaultButton(){const{tooltipLabel:e,onCopyClick:t}=this.props;return l.a.createElement(a("vUls").e,{iconBefore:l.a.createElement(a("vUls").c,null,l.a.createElement(a.n(a("JyIQ")).a,{label:e})),onClick:t})}render(){const{id:e,fieldKey:t,value:o,label:r,tooltipLabel:n,tooltipLabelPosition:c,tooltipDelay:u,remountOnChange:p,intl:b,copied:m,onCopyClick:f,shouldFitContainer:h,copyFailed:g,hideFieldText:C,tooltipDisabled:v,...y}=this.props;let k=n;m?k=b.formatMessage(s.copied):g&&(k=b.formatMessage(s.copyFailed))
;const x=this.props.children?Object(i.cloneElement)(i.Children.only(this.props.children),{onClick:f}):null;return l.a.createElement(a("vUls").d,y,l.a.createElement(a("vUls").a,{shouldFitContainer:h,hideFieldText:C},r&&!C&&l.a.createElement(a("0w3d").a,{htmlFor:d,label:r}),l.a.createElement(a("I4Rc").a,{"aria-hidden":C?"true":void 0,key:t,id:e,name:d,label:r,value:o,isReadOnly:!0,ref:this.textInput,tabIndex:C?-1:void 0})),v?l.a.createElement(a("vUls").b,null,x||this.renderDefaultButton()):l.a.createElement(a("Yto1").a,{tag:"span",key:p?k:void 0,delay:u,content:k,position:c},x||this.renderDefaultButton()))}}c.displayName="FieldCopyTextStateless",c.defaultProps={id:d,className:void 0,copyFailed:!1,shouldFitContainer:!1,hideFieldText:!1,tooltipDelay:100,remountOnChange:!1};var u=Object(a("W3MJ").a)(c);class p extends i.Component{constructor(...t){super(...t),this.state={copied:!1,copyFailed:!1},this.onCopyClick=(t,o)=>{if(!this.inputTextRef||!this.inputTextRef.current)return
;this.props.onCopyClick&&this.props.onCopyClick(t,o),this.props.hideFieldText&&(this.inputTextRef.current.value=this.props.value),this.inputTextRef.current.select();let a=!1;try{a=document.execCommand("copy"),this.setState({copied:!0}),this.props.onClickChange&&this.props.onClickChange(!0)}catch(e){a=!1}a||this.setState({copyFailed:!0}),this.timeoutId=setTimeout((()=>{this.setState({copied:!1,copyFailed:!1}),this.props.onCopyReset&&this.props.onCopyReset()}),3e3)},this.onRef=e=>{this.inputTextRef=e},this.timeoutId=void 0,this.inputTextRef=void 0,this.fieldTextRef=void 0}componentWillUnmount(){clearTimeout(this.timeoutId)}render(){const{id:e,label:t,tooltipLabel:o,tooltipLabelPosition:a,tooltipDelay:r,remountOnChange:i,value:d,className:s,shouldFitContainer:c,hideFieldText:p,tooltipDisabled:b}=this.props,m=p?"":d;return l.a.createElement(u,n()({id:e,label:t,tooltipLabel:o,tooltipLabelPosition:a,tooltipDelay:r,remountOnChange:i,fieldKey:d,value:m,className:s,shouldFitContainer:c,
hideFieldText:p},this.state,{onCopyClick:this.onCopyClick,innerInputRef:this.onRef,tooltipDisabled:b}),this.props.children)}}p.displayName="FieldCopyText",p.defaultProps={className:void 0,shouldFitContainer:!1,hideFieldText:!1,onCopyClick:void 0,onCopyReset:void 0,tooltipDelay:void 0,remountOnChange:!1,tooltipDisabled:!1}},oXRq:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a=e=>(t,o)=>{const a=t(o),r=Object.entries(a).reduce(((t,[a,r])=>{if(null==e||!e[a])return t[a]=r,t;const n=((e,t)=>{const{appearance:o,mode:a,state:r}=t;if(!o||!e[o])return;const n=e[o];return Object.keys(n).reduce(((e,t)=>{let o=n;return[t,r,a].forEach((a=>{a&&(o[a]||0===o[a])&&("object"==typeof o[a]?o=o[a]:e[t]=o[a])})),e}),{})})(e[a],o);return t[a]={...r,...n},t}),{});return r}},umqZ:function(e,t,o){"use strict";o.d(t,"a",(function(){return O})),o.d(t,"b",(function(){return E})),o.d(t,"c",(function(){return I}));const a={light:"var(--ds-background-disabled, #FAFBFC)",
dark:"var(--ds-background-disabled, #0E1624)"},r={light:"var(--ds-background-input, #FAFBFC)",dark:"var(--ds-background-input, #0E1624)"},n={light:"var(--ds-background-input-pressed, #FFFFFF)",dark:"var(--ds-background-input-pressed, #0E1624)"},i={light:"var(--ds-background-input-hovered, #EBECF0)",dark:"var(--ds-background-input-hovered, #1B2638)"},l={light:`var(--ds-border-input, ${Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?"#7A869A":"#DFE1E6"})`,dark:`var(--ds-border-input, ${Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?"#7988A3":"#202B3D"})`},d={light:"var(--ds-border-focused, #4C9AFF)",dark:"var(--ds-border-focused, #B3D4FF)"},s={light:"transparent",dark:"transparent"},c={light:"var(--ds-text, #091E42)",dark:"var(--ds-text, #B8C7E0)"},u={light:"var(--ds-text-disabled, #A5ADBA)",dark:"var(--ds-text-disabled, #56637A)"},p={light:"var(--ds-text-subtlest, #6B778C)",dark:"var(--ds-text-subtlest, #7988A3)"
},b=Object(o("7w+A").fontSize)(),m=Object(o("7w+A").gridSize)(),f={light:{backgroundColor:a.light,backgroundColorHover:a.light,borderColor:a.light,textColor:u.light},dark:{backgroundColor:a.dark,backgroundColorHover:a.dark,borderColor:a.dark,textColor:u.dark}},h={light:{backgroundColor:r.light,backgroundColorHover:i.light,backgroundColorFocus:n.light,borderColor:"var(--ds-border-danger, #DE350B)",borderColorFocus:d.light},dark:{backgroundColor:r.dark,backgroundColorHover:i.dark,backgroundColorFocus:n.dark,borderColor:"var(--ds-border-danger, #DE350B)",borderColorFocus:d.dark}},g={standard:r,subtle:s,none:s},C={standard:n,subtle:n,none:s},v={standard:i,subtle:i,none:s},y={standard:l,subtle:s,none:s},k={standard:d,subtle:d,none:s},x={standard:l,subtle:{light:"var(--ds-border-input, transparent)",dark:"var(--ds-border-input, transparent)"},none:s},F=(e,t)=>({backgroundColor:g[e][t],borderColor:y[e][t],color:c[t],cursor:"text","&:hover:not([data-disabled])":{backgroundColor:v[e][t],
borderColor:x[e][t]},"&:focus-within:not([data-disabled])":{backgroundColor:C[e][t],borderColor:k[e][t],boxShadow:Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 1px ${k[e][t]}`:void 0},"&[data-disabled]":{color:f[t].textColor,cursor:"not-allowed",..."standard"===e&&{backgroundColor:f[t].backgroundColor,borderColor:f[t].borderColor}},"&[data-invalid], &[data-invalid]:hover":{borderColor:h[t].borderColor,boxShadow:Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 1px ${h[t].borderColor}`:void 0},"&[data-invalid]:focus-within":{backgroundColor:h[t].backgroundColorFocus,borderColor:h[t].borderColorFocus,boxShadow:Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?`inset 0 0 0 1px ${h[t].borderColorFocus}`:void 0},"@media screen and (-ms-high-contrast: active)":{"&[data-invalid]:focus-within":{borderColor:"Highlight"},"&:focus-within":{borderColor:"Highlight"},"&[data-disabled]":{
borderColor:"GrayText"}}}),w={xsmall:80,small:160,medium:240,large:320,xlarge:480},j=e=>e?e in w?w[e]:+e:"100%",O=(e,t,a)=>({alignItems:"center",...F(e,t),borderRadius:3,borderWidth:Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")?1:2,...Object(o("+ePX").a)("platform.design-system-team.border-checkbox_nyoiu")&&"none"!==e?{padding:"1px 0"}:{},borderStyle:"none"===e?"none":"solid",boxSizing:"border-box",display:"flex",flex:"1 1 100%",fontSize:b,justifyContent:"space-between",maxWidth:j(a),overflow:"hidden",transition:"background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",wordWrap:"break-word",verticalAlign:"top",pointerEvents:"auto"}),E=e=>({backgroundColor:"transparent",border:0,boxSizing:"border-box",color:"inherit",cursor:"inherit",fontSize:b,minWidth:"0",outline:"none",width:"100%",lineHeight:2.5*m/b,fontFamily:Object(o("7w+A").fontFamily)(),"&[data-monospaced]":{fontFamily:Object(o("7w+A").codeFontFamily)()},"&[data-compact]":{
padding:`${m/2}px ${m-2}px`,height:`${(3.5*m/b).toFixed(2)}em`},"&:not([data-compact])":{padding:`${m}px ${m-2}px`,height:`${(4.5*m/b).toFixed(2)}em`},"&[disabled]":{WebkitTextFillColor:f[e].textColor},"&::-ms-clear":{display:"none"},"&:invalid":{boxShadow:"none"},"&::placeholder":{color:p[e],"&:disabled":{color:f[e].textColor}},"@media screen and (-ms-high-contrast: active)":{"&[disabled]":{color:"GrayText"}}}),I={backgroundColor:g,backgroundColorFocus:C,backgroundColorHover:v,borderColor:y,borderColorFocus:k,borderColorHover:x,placeholderTextColor:p,textColor:c,invalidRules:h,disabledRules:f}},vUls:function(e,t,o){"use strict";o.d(t,"d",(function(){return d})),o.d(t,"a",(function(){return s})),o.d(t,"e",(function(){return c})),o.d(t,"c",(function(){return u})),o.d(t,"b",(function(){return p}));var a=o("pVnL"),r=o.n(a),n=o("q1tI"),i=o.n(n),l=o("vOnD");o("3gNG"),o("3gNG");const d=l.c.div.withConfig({componentId:"sc-1g0si8d-0"
})`display:flex;align-items:flex-end;${e=>!0===e.hideFieldText?l.b`user-select:none;`:""};`,s=l.c.div.withConfig({componentId:"sc-1g0si8d-1"})`margin-right:${o("3d9S").f}px;${e=>e.shouldFitContainer?l.b`flex-grow:1;`:""} ${e=>!0===e.hideFieldText?l.b`position:absolute;left:-9999px;height:0;opacity:0;pointer-events:none;user-select:none;`:""}`,c=e=>i.a.createElement(o("0+Gd").a,r()({},e,{theme:Object(o("oXRq").a)({buttonStyles:{default:{height:5*o("3d9S").f+"px",width:5*o("3d9S").f+"px"}}})}));c.displayName="StyledButton";const u=Object(n.forwardRef)((({as:e="div",style:t,...a},n)=>i.a.createElement(e,r()({},a,{style:t,ref:n,className:Object(o("TCwg").a)(["_18u0t94y",a.className])}))));const p=Object(n.forwardRef)((({as:e="div",style:t,...a},n)=>i.a.createElement(e,r()({},a,{style:t,ref:n,className:Object(o("TCwg").a)(["_16jlkb7n",a.className])}))))}}]);try{window.__jsEvalStop("async-issue-view-permalink-button.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-issue-view-permalink-button.4caaf25d65b807a38169.8.js.map