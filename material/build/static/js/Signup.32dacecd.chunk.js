(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{642:function(e,t,r){"use strict";r.d(t,"a",function(){return f}),r.d(t,"b",function(){return m});var a=r(650),n=r(647),o=r.n(n),i=r(651),l=r.n(i),s=r(76),c=r(10),u=o()({}),d=l()(),f=Object(a.connectedRouterRedirect)({redirectPath:"/login",AuthenticatingComponent:s.a,wrapperDisplayName:"UserIsAuthenticated",authenticatedSelector:function(e){var t=e.firebase.auth;return!t.isEmpty&&!!t.uid},authenticatingSelector:function(e){var t=e.firebase,r=t.auth,a=t.isInitializing;return!r.isLoaded||a},redirectAction:function(e){return function(t){d.push(e),t({type:"UNAUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}}),m=Object(a.connectedRouterRedirect)({AuthenticatingComponent:s.a,wrapperDisplayName:"UserIsNotAuthenticated",allowRedirectBack:!1,authenticatedSelector:function(e){return e.firebase.auth.isEmpty},authenticatingSelector:function(e){var t=e.firebase,r=t.auth,a=t.isInitializing;return!r.isLoaded||a},redirectPath:function(e,t){return u.getRedirectQueryParam(t)||c.b},redirectAction:function(e){return function(t){d.push(e),t({type:"AUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}})},643:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n}),r.d(t,"d",function(){return o}),r.d(t,"c",function(){return i});var a="account",n="login",o="signup",i="newProject"},646:function(e,t,r){"use strict";function a(e){return e?void 0:"Required"}function n(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n})},656:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),i=r.n(o),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer"},c=l({backgroundColor:"#4285f4",color:"#fff"},s),u=l({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},s),d={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"},f={width:"48px",height:"48px",display:"block"},m={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"},p={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"},h={backgroundColor:"transparent"},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b=n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:f},n.a.createElement("defs",null,n.a.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.a.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.a.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.a.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.a.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.a.createElement("feMerge",null,n.a.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.a.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.a.createElement("feMergeNode",{in:"SourceGraphic"}))),n.a.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),n.a.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),n.a.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),n.a.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},n.a.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.a.createElement("g",{id:"button-bg"},n.a.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}))),n.a.createElement("g",{id:"button-bg-copy"},n.a.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"})),n.a.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.a.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.a.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.a.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.a.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.a.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.a.createElement("g",{id:"handles_square"})))),E=n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:f},n.a.createElement("defs",null,n.a.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.a.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.a.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.a.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.a.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.a.createElement("feMerge",null,n.a.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.a.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.a.createElement("feMergeNode",{in:"SourceGraphic"}))),n.a.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.a.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),n.a.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},n.a.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.a.createElement("g",{id:"button-bg"},n.a.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}))),n.a.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.a.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.a.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.a.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.a.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.a.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.a.createElement("g",{id:"handles_square"})))),w=n.a.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:f},n.a.createElement("defs",null,n.a.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.a.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),n.a.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},n.a.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},n.a.createElement("g",{id:"button-bg"},n.a.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}),n.a.createElement("use",{fill:"none"}))),n.a.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),n.a.createElement("g",{id:"handles_square"})))),v=function(e){var t=e.disabled,r=e.type;return n.a.createElement("div",{style:t?g({},d,h):d},t?w:"dark"===r?b:E)};v.propTypes={disabled:i.a.bool,type:i.a.oneOf(["light","dark"])},v.defaultProps={type:"dark"};var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},x=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var O=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=a=C(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={hovered:!1},a.getStyle=function(e){var t="dark"===a.props.type?c:u;return a.state.hovered?y({},t,m,e):a.props.disabled?y({},t,p,e):y({},t,e)},a.mouseOver=function(){a.props.disabled||a.setState({hovered:!0})},a.mouseOut=function(){a.props.disabled||a.setState({hovered:!1})},a.click=function(e){a.props.disabled||a.props.onClick(e)},C(a,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),x(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.style,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["label","style"]);return n.a.createElement("div",y({},a,{onClick:this.click,style:this.getStyle(r),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),n.a.createElement(v,this.props),n.a.createElement("span",null,t))}}]),t}();O.propTypes={label:i.a.string,disabled:i.a.bool,onClick:i.a.func,type:i.a.oneOf(["light","dark"]),style:i.a.object},O.defaultProps={label:"Sign in with Google",disabled:!1,type:"dark",onClick:function(){}};var L=O;r.d(t,"a",function(){return L})},759:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(752),i=r(656),l=r(136),s=r.n(l),c=r(10),u=r(756),d=r(648),f=r(137),m=r.n(f),p=r(646),h=function(e){var t=e.pristine,r=e.submitting,a=e.handleSubmit,o=e.classes;return n.a.createElement("form",{className:o.root,onSubmit:a},n.a.createElement(u.a,{name:"username",component:d.TextField,label:"Username",validate:p.a}),n.a.createElement(u.a,{name:"email",component:d.TextField,label:"Email",validate:[p.a,p.b]}),n.a.createElement(u.a,{name:"password",component:d.TextField,label:"Password",type:"password",validate:p.a}),n.a.createElement("div",{className:o.submit},n.a.createElement(m.a,{color:"primary",type:"submit",variant:"contained",disabled:t||r},r?"Loading":"Sign Up")))},g=r(1),b=r.n(g),E=r(754),w=r(16),v=r(25),y=r(643),x=r(32),C=Object(w.b)(Object(w.g)({onSubmit:b.a.func.isRequired}),Object(E.a)({form:y.d}),Object(v.withStyles)(function(e){return{root:Object(x.a)({},e.flexColumnCenter,{justifyContent:"flex-start",flexGrow:1,height:"100%",width:"100%",margin:".2rem",fontSize:"1.4rem"}),submit:Object(x.a)({},e.flexColumnCenter,{justifyContent:"center",flexGrow:1,textAlign:"center",padding:"1.25rem",minWidth:"192px",marginTop:"1.5rem"})}}))(h),O=function(e){var t=e.emailSignup,r=e.googleLogin,a=e.onSubmitFail,l=e.classes;return n.a.createElement("div",{className:l.root},n.a.createElement(s.a,{className:l.panel},n.a.createElement(C,{onSubmit:t,onSubmitFail:a})),n.a.createElement("div",{className:l.orLabel},"or"),n.a.createElement("div",{className:l.providers},n.a.createElement(i.a,{onClick:r})),n.a.createElement("div",{className:l.login},n.a.createElement("span",{className:l.loginLabel},"Already have an account?"),n.a.createElement(o.a,{className:l.loginLink,to:c.c},"Login")))},L=r(38),S=r(642),k=r(89),j=Object(w.b)(S.b,k.c,L.withFirebase,Object(w.h)({onSubmitFail:function(e){return function(t,r,a){return e.showError(t?"Form Invalid":a.message||"Error")}},googleLogin:function(e){var t=e.firebase,r=e.showError;return function(e){return t.login({provider:"google",type:"popup"}).catch(function(e){return r(e.message)})}},emailSignup:function(e){var t=e.firebase,r=e.showError;return function(e){return t.createUser(e,{email:e.email,username:e.username}).catch(function(e){return r(e.message)})}}}),Object(v.withStyles)(function(e){return{root:Object(x.a)({},e.flexColumnCenter,{justifyContent:"flex-start",height:"100%",width:"100%",fontWeight:400,paddingTop:"1.5rem"}),panel:Object(x.a)({},e.flexColumnCenter,{justifyContent:"center",flexGrow:1,padding:"1.25rem",minWidth:"250px",minHeight:"270px"}),orLabel:{marginTop:"1rem",marginBottom:".5rem"},login:Object(x.a)({},e.flexColumnCenter,{justifyContent:"center",marginTop:"1.5rem"}),loginLabel:{fontSize:"1rem",fontWeight:"bold"},loginLink:{fontSize:"1.2rem"},providers:{marginTop:"1rem"}}}));t.default=j(O)}}]);
//# sourceMappingURL=Signup.32dacecd.chunk.js.map