(self["webpackChunkremons_components"]=self["webpackChunkremons_components"]||[]).push([[899],{22231:function(e,t,r){"use strict";r.d(t,{m:function(){return n.m}});var n=r(9684);r(72255)},25562:function(e,t,r){"use strict";r.r(t);var n=r(67294),o=r(96089),a=r(32575),l=r(45161),i=n.memo((e=>{var t=e.demos,r=t["ToolBar-demo"].component;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"toolbar"},n.createElement(o.AnchorLink,{to:"#toolbar","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"ToolBar"),n.createElement("p",null,"\u5de5\u5177\u680f\uff0c\u57fa\u4e8e ActionList"),n.createElement("h4",{id:"\u4f7f\u7528\u793a\u4f8b"},n.createElement(o.AnchorLink,{to:"#\u4f7f\u7528\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u793a\u4f8b")),n.createElement(l.default,t["ToolBar-demo"].previewerProps,n.createElement(r,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"api"},n.createElement(o.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(a.Z,{identifier:"ToolBar",export:"default"}))))}));t["default"]=e=>{var t=n.useContext(o.context),r=t.demos;return n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(i,{demos:r})}},32575:function(e,t,r){"use strict";var n=r(67294),o=r(96089),a={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,r=e["export"],l=(0,o.useApiData)(t),i=(0,n.useContext)(o.context),c=i.locale,u=/^zh|cn$/i.test(c)?a["zh-CN"]:a["en-US"];return n.createElement(n.Fragment,null,l&&n.createElement("table",{style:{marginTop:24}},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,u.name),n.createElement("th",null,u.description),n.createElement("th",null,u.type),n.createElement("th",null,u["default"]))),n.createElement("tbody",null,l[r].map((function(e){return n.createElement("tr",{key:e.identifier},n.createElement("td",null,e.identifier),n.createElement("td",null,e.description||"--"),n.createElement("td",null,n.createElement("code",null,e.type)),n.createElement("td",null,n.createElement("code",null,e["default"]||e.required&&u.required||"--")))})))))}},45161:function(e,t,r){"use strict";r.r(t);var n=r(67294),o=r(42886),a=r(52444),l=r(22231),i=r(96089),c=r(65704),u=r(64591);r(26677);function s(e,t){return E(e)||p(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0)if(a.push(n.value),t&&a.length===t)break}catch(c){i=!0,o=c}finally{try{l||null==r["return"]||r["return"]()}finally{if(i)throw o}}return a}}function E(e){if(Array.isArray(e))return e}function h(e,t){var r,n=null===(r=e.match(/\.(\w+)$/))||void 0===r?void 0:r[1];return n||(n=t.tsx?"tsx":"jsx"),n}var v=function(e){var t,r,d,m=(0,n.useRef)(),f=(0,n.useContext)(i.context),p=f.locale,E=(0,i.useLocaleProps)(p,e),v=(0,i.useDemoUrl)(E.identifier),y=E.demoUrl||v,b=(null===l.m||void 0===l.m?void 0:l.m.location.hash)==="#".concat(E.identifier),_=1===Object.keys(E.sources).length,k=(0,i.useCodeSandbox)((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),g=(0,i.useRiddle)((null===(r=E.hideActions)||void 0===r?void 0:r.includes("RIDDLE"))?null:E),w=(0,i.useMotions)(E.motions||[],m.current),C=s(w,2),N=C[0],x=C[1],S=(0,i.useCopy)(),A=s(S,2),O=A[0],j=A[1],B=(0,n.useState)((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),R=s(B,2),T=R[0],L=R[1],I=(0,n.useState)(h(T,E.sources[T])),D=s(I,2),P=D[0],U=D[1],M=(0,n.useState)(Boolean(E.defaultShowCode)),F=s(M,2),q=F[0],K=F[1],Z=(0,n.useState)(Math.random()),$=s(Z,2),z=$[0],H=$[1],J=E.sources[T][P]||E.sources[T].content,X=(0,i.useTSPlaygroundUrl)(p,J),G=(0,n.useRef)(),V=(0,i.usePrefersColor)(),Q=s(V,1),W=Q[0],Y=E.actionBarRender,ee=void 0===Y?function(e){return e}:Y;function te(e){L(e),U(h(e,E.sources[e]))}return(0,n.useEffect)((function(){H(Math.random())}),[W]),n.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",b?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&n.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),n.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?n.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:z,src:y,ref:G}):n.createElement(a.ErrorBoundary,{fallbackRender:function(e){var t=e.error;return n.createElement(u.Z,{type:"error"},n.createElement("h4",null,t.message||"This demo has been crashed."),t.stack&&n.createElement("details",null,n.createElement("summary",null,"Error stack"),n.createElement("pre",null,t.stack)))}},E.children)),n.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&n.createElement(i.AnchorLink,{to:"#".concat(E.identifier)},E.title),E.description&&n.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),n.createElement("div",{className:"__dumi-default-previewer-actions"},ee(n.createElement(n.Fragment,null,k&&n.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),g&&n.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),E.motions&&n.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:function(){return N()}}),E.iframe&&n.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&n.createElement(i.Link,{target:"_blank",to:y},n.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),n.createElement("span",null),n.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":j,onClick:function(){return O(J)}}),"tsx"===P&&q&&n.createElement(i.Link,{target:"_blank",to:X},n.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),n.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(q?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return K(!q)}})))),q&&n.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!_&&n.createElement(o.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:T,onChange:te},Object.keys(E.sources).map((function(e){return n.createElement(o.J,{tab:"_"===e?"index.".concat(h(e,E.sources[e])):e,key:e})}))),n.createElement("div",{className:"__dumi-default-previewer-source"},n.createElement(c.Z,{code:J,lang:P,showCopy:!1}))))};t["default"]=v},52444:function(e,t,r){(function(e,n){n(t,r(67294))})(0,(function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t["default"]=e,Object.freeze(t)}var n=r(t);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}var l=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},i={error:null},c=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,t.state=i,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}a(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.setState(i)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidUpdate=function(e,t){var r,n,o=this.state.error,a=this.props.resetKeys;null!==o&&null!==t.error&&l(e.resetKeys,a)&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,a),this.reset())},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,o=t.FallbackComponent,a=t.fallback;if(null!==e){var l={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(a))return a;if("function"===typeof r)return r(l);if(o)return n.createElement(o,l);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function u(e,t){var r=function(r){return n.createElement(c,t,n.createElement(e,r))},o=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+o+")",r}function s(e){var t=n.useState(null),r=t[0],o=t[1];if(null!=e)throw e;if(null!=r)throw r;return o}e.ErrorBoundary=c,e.useErrorHandler=s,e.withErrorBoundary=u,Object.defineProperty(e,"__esModule",{value:!0})}))},26677:function(){}}]);