(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=i.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),o=r({},o,t);let s=o.loader,u=()=>null!=s?s().then(l):Promise.resolve(l(()=>null));return(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?n(r({},o,{loader:u})):(delete o.webpack,delete o.modules,a(n,o))},t.noSSR=a;var r=n(6495).Z,o=n(2648).Z,i=(o(n(7294)),o(n(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let o=r.default.createContext(null);t.LoadableContext=o},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=(0,n(2648).Z)(n(7294)),i=n(2254);let l=[],a=[],s=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function l(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&a.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return l()})}function u(e,t){!function(){l();let e=o.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let a=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return a.loading||a.error?o.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?o.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return u.preload=()=>l(),u.displayName="LoadableComponent",o.default.forwardRef(u)}(u,e)}function p(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(l).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(s=!0,t());p(a,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},9446:function(){},5152:function(e,t,n){e.exports=n(5677)},1239:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(7294)),i=l(n(6701));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:"100%"},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)),this.setState({modalVideoWidth:this.getWidthFulfillAspectRatio(this.props.ratio,window.innerHeight,window.innerWidth)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})},10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var r=e.split(":"),o=Number(r[0]),i=Number(r[1]);return t<n*(i/o)?Math.floor(o/i*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return o.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?o.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},o.default.createElement("div",{className:e.props.classNames.modalVideoBody},o.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},o.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},o.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||o.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(o.default.Component);t.Z=a,a.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},776:function(e,t,n){"use strict";let r;n.d(t,{OK:function(){return k},td:function(){return w},x4:function(){return T},mQ:function(){return g}});var o=n(7294);function i(e){return t=>!!t.type&&t.type.tabsRole===e}let l=i("Tab"),a=i("TabList"),s=i("TabPanel");function u(e,t){return o.Children.map(e,e=>null===e?null:l(e)||a(e)||s(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,o.cloneElement)(e,{...e.props,children:u(e.props.children,t)}):e)}var d=n(6010);function c(e){let t=0;return!function e(t,n){return o.Children.forEach(t,t=>{null!==t&&(l(t)||s(t)?n(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(a(t)&&n(t),e(t.props.children,n)))})}(e,e=>{l(e)&&t++}),t}function p(e){return e&&"getAttribute"in e}function f(e){return p(e)&&e.getAttribute("data-rttab")}function h(e){return p(e)&&"true"===e.getAttribute("aria-disabled")}let m=e=>{let t=(0,o.useRef)([]),n=(0,o.useRef)([]),i=(0,o.useRef)();function p(t,n){if(t<0||t>=y())return;let{onSelect:r,selectedIndex:o}=e;r(t,o,n)}function m(e){let t=y();for(let n=e+1;n<t;n++)if(!h(v(n)))return n;for(let t=0;t<e;t++)if(!h(v(t)))return t;return e}function b(e){let t=e;for(;t--;)if(!h(v(t)))return t;for(t=y();t-- >e;)if(!h(v(t)))return t;return e}function y(){let{children:t}=e;return c(t)}function v(e){return t.current[`tabs-${e}`]}function g(e){let t=e.target;do if(E(t)){if(h(t))return;let n=[].slice.call(t.parentNode.children).filter(f).indexOf(t);p(n,e);return}while(null!=(t=t.parentNode))}function E(e){if(!f(e))return!1;let t=e.parentElement;do{if(t===i.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:w,className:x,disabledTabClassName:C,domRef:O,focus:k,forceRenderTabPanel:_,onSelect:N,selectedIndex:S,selectedTabClassName:T,selectedTabPanelClassName:P,environment:R,disableUpDownKeys:j,disableLeftRightKeys:A,...M}=e;return o.createElement("div",Object.assign({},M,{className:(0,d.Z)(x),onClick:g,onKeyDown:function(t){let{direction:n,disableUpDownKeys:r,disableLeftRightKeys:o}=e;if(E(t.target)){let{selectedIndex:i}=e,l=!1,a=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(l=!0,a=!1,g(t)),(o||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(o||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(i=function(){let e=y();for(;e--;)if(!h(v(e)))return e;return null}(),l=!0,a=!0):(36===t.keyCode||"Home"===t.code)&&(i=function(){let e=y();for(let t=0;t<e;t++)if(!h(v(t)))return t;return null}(),l=!0,a=!0):(i="rtl"===n?b(i):m(i),l=!0,a=!0):(i="rtl"===n?m(i):b(i),l=!0,a=!0),l&&t.preventDefault(),a&&p(i,t)}},ref:e=>{i.current=e,O&&O(e)},"data-rttabs":!0}),function(){let i=0,{children:d,disabledTabClassName:c,focus:p,forceRenderTabPanel:f,selectedIndex:h,selectedTabClassName:m,selectedTabPanelClassName:b,environment:g}=e;n.current=n.current||[];let E=n.current.length-y(),w=(0,o.useId)();for(;E++<0;)n.current.push(`${w}${n.current.length}`);return u(d,e=>{let d=e;if(a(e)){let i=0,a=!1;null==r&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{r=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){r=!1}}(g);let s=g||("undefined"!=typeof window?window:void 0);r&&s&&(a=o.Children.toArray(e.props.children).filter(l).some((e,t)=>s.document.activeElement===v(t))),d=(0,o.cloneElement)(e,{children:u(e.props.children,e=>{let r=`tabs-${i}`,l=h===i,s={tabRef:e=>{t.current[r]=e},id:n.current[i],selected:l,focus:l&&(p||a)};return m&&(s.selectedClassName=m),c&&(s.disabledClassName=c),i++,(0,o.cloneElement)(e,s)})})}else if(s(e)){let t={id:n.current[i],selected:h===i};f&&(t.forceRender=f),b&&(t.selectedClassName=b),i++,d=(0,o.cloneElement)(e,t)}return d})}())};m.defaultProps={className:"react-tabs",focus:!1},m.propTypes={};let b=e=>null===e.selectedIndex?1:0,y=(e,t)=>{},v=e=>{let{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:i,onSelect:l}=e,[a,s]=(0,o.useState)(n),[u]=(0,o.useState)(b(e)),[d,p]=(0,o.useState)(1===u?r||0:null);if((0,o.useEffect)(()=>{s(!1)},[]),1===u){let e=c(t);(0,o.useEffect)(()=>{null!=d&&p(Math.min(d,Math.max(0,e-1)))},[e])}y(e,u);let f=(e,t,n)=>{("function"!=typeof l||!1!==l(e,t,n))&&(i&&s(!0),1===u&&p(e))},h={...e};return h.focus=a,h.onSelect=f,null!=d&&(h.selectedIndex=d),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,o.createElement(m,h,t)};v.propTypes={},v.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},v.tabsRole="Tabs";var g=v;let E=e=>{let{children:t,className:n,...r}=e;return o.createElement("ul",Object.assign({},r,{className:(0,d.Z)(n),role:"tablist"}),t)};E.tabsRole="TabList",E.propTypes={},E.defaultProps={className:"react-tabs__tab-list"};var w=E;let x="react-tabs__tab",C={className:x,disabledClassName:`${x}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${x}--selected`},O=e=>{let t=(0,o.useRef)(),{children:n,className:r,disabled:i,disabledClassName:l,focus:a,id:s,selected:u,selectedClassName:c,tabIndex:p,tabRef:f,...h}=e;return(0,o.useEffect)(()=>{u&&a&&t.current.focus()},[u,a]),o.createElement("li",Object.assign({},h,{className:(0,d.Z)(r,{[c]:u,[l]:i}),ref:e=>{t.current=e,f&&f(e)},role:"tab",id:`tab${s}`,"aria-selected":u?"true":"false","aria-disabled":i?"true":"false","aria-controls":`panel${s}`,tabIndex:p||(u?"0":null),"data-rttab":!0}),n)};O.propTypes={},O.tabsRole="Tab",O.defaultProps=C;var k=O;let _="react-tabs__tab-panel",N={className:_,forceRender:!1,selectedClassName:`${_}--selected`},S=e=>{let{children:t,className:n,forceRender:r,id:i,selected:l,selectedClassName:a,...s}=e;return o.createElement("div",Object.assign({},s,{className:(0,d.Z)(n,{[a]:l}),role:"tabpanel",id:`panel${i}`,"aria-labelledby":`tab${i}`}),r||l?t:null)};S.tabsRole="TabPanel",S.propTypes={},S.defaultProps=N;var T=S},6701:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}function a(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n.r(t),n.d(t,{default:function(){return x}});var s=n(7294),u=n(3935),d={disabled:!1},c=s.createContext(null),p=function(e){return e.scrollTop},f="unmounted",h="exited",m="entering",b="entered",y="exiting",v=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=h,r.appearStatus=m):o=b:o=t.unmountOnExit||t.mountOnEnter?f:h,r.state={status:o},r.nextCallback=null,r}l(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:h}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==m&&n!==b&&(t=m):(n===m||n===b)&&(t=y)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&p(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[u.findDOMNode(this),r],i=o[0],l=o[1],a=this.getTimeouts(),s=r?a.appear:a.enter;if(!e&&!n||d.disabled){this.safeSetState({status:b},function(){t.props.onEntered(i)});return}this.props.onEnter(i,l),this.safeSetState({status:m},function(){t.props.onEntering(i,l),t.onTransitionEnd(s,function(){t.safeSetState({status:b},function(){t.props.onEntered(i,l)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);if(!t||d.disabled){this.safeSetState({status:h},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:y},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:h},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],l=o[1];this.props.addEndListener(i,l)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,o(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(c.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function g(){}v.contextType=c,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},v.UNMOUNTED=f,v.EXITED=h,v.ENTERING=m,v.ENTERED=b,v.EXITING=y;var E=function(e,t){return e&&t&&t.split(" ").forEach(function(t){var n;(n=e).classList?n.classList.remove(t):"string"==typeof n.className?n.className=a(n.className,t):n.setAttribute("class",a(n.className&&n.className.baseVal||"",t))})},w=function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1];t.removeClasses(o,"exit"),t.addClass(o,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1];t.addClass(o,i?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1]?"appear":"enter";t.removeClasses(o,i),t.addClass(o,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e],i=r?o+"-active":n[e+"Active"],l=r?o+"-done":n[e+"Done"];return{baseClassName:o,activeClassName:i,doneClassName:l}},t}l(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r,o=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(o+=" "+i),"active"===n&&e&&p(e),o&&(this.appliedClasses[t][n]=o,r=o,e&&r&&r.split(" ").forEach(function(t){var n,r;return n=e,r=t,void(n.classList?n.classList.add(r):(n.classList?r&&n.classList.contains(r):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+r+" "))||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)))}))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,i=n.done;this.appliedClasses[t]={},r&&E(e,r),o&&E(e,o),i&&E(e,i)},n.render=function(){var e=this.props,t=(e.classNames,o(e,["classNames"]));return s.createElement(v,r({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);w.defaultProps={classNames:""},w.propTypes={};var x=w},9026:function(e,t,n){"use strict";n.d(t,{ri:function(){return g},ck:function(){return w}});var r=n(5826),o=n(7294),i=n(3935),l=n(5697);class a extends Error{constructor(){super(...arguments),this.message=`No valid \`ref\` provided.
You should use \`ref\` from render prop of Item component.
Example:
<Item>{({ ref }) => <div ref={ref}></div>}</Item>
`}}var s=function(e,t){if(!(e instanceof Element)||!(t instanceof Element))throw new a;return e===t?0:2&e.compareDocumentPosition(t)?1:-1},u=function(e){return Object.entries(e).map(([e,t])=>t?`${e}=${t}`:e).join("&")},d=function(e){return e.split("&").reduce((e,t)=>{let[n,r]=t.split("=");return n&&(e[n]=r),e},{})},c=function(e){let t=d(e);return delete t.gid,delete t.pid,u(t)},p=function(){return window.location.hash.substring(1)},f=function(){return`${window.location.pathname}${window.location.search}`};let h=e=>{let t=d(e);return Boolean(t.gid)&&Boolean(t.pid)},m=o.createContext({remove:()=>{},set:()=>{},handleClick:()=>{},open:()=>{}});class b{constructor(e){this.pswp=e,this.on=e.on.bind(e),this.off=e.off.bind(e),this.dispatch=e.dispatch.bind(e)}}var y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let v=null,g=({children:e,options:t,plugins:n,uiElements:l,id:a,onBeforeOpen:g,onOpen:E,withCaption:w,withDownloadButton:x})=>{let[C,O]=(0,o.useState)(null),k=(0,o.useRef)(new Map),_=(0,o.useRef)(null),N=(0,o.useCallback)((e,o,d,m)=>{var C;if(v)return;let _=d||null,N=[],S=Array.from(k.current),T=(t,n)=>{let[r,i]=t,{width:l,height:a,original:s,originalSrcset:u,thumbnail:d,cropped:c,content:p,id:f}=i,h=y(i,["width","height","original","originalSrcset","thumbnail","cropped","content","id"]);(e===r||void 0!==f&&String(f)===o)&&(_=n),N.push(Object.assign(Object.assign(Object.assign({w:Number(l),h:Number(a),src:s,srcset:u,msrc:d,element:r.current,thumbCropped:c,content:p},void 0!==p?{type:"html"}:{}),void 0!==f?{pid:f}:{}),h))};k.current.size>1?S.sort(([{current:e}],[{current:t}])=>s(e,t)).forEach(T):S.forEach(T);let P=m&&void 0!==m.clientX&&void 0!==m.clientY?{x:m.clientX,y:m.clientY}:null,R=new r.Z(Object.assign({dataSource:N,index:null!==(C=_)?C:o?parseInt(o,10)-1:0,initialPointerPos:P},t||{}));v=R,R.on("contentActivate",({content:e})=>{e.data.content?O((0,i.createPortal)(e.data.content,e.element)):O(null)}),R.on("close",()=>{O(null)}),x&&R.on("uiRegister",()=>{var e;null===(e=R.ui)||void 0===e||e.registerElement({name:"download-button",ariaLabel:"Download",order:8,isButton:!0,tagName:"a",appendTo:"bar",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(e,t)=>{e.setAttribute("download",""),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener"),R.on("change",()=>{var n;if(!(null===(n=t.currSlide)||void 0===n?void 0:n.data.src))return;let r=e;r.href=t.currSlide.data.src})}})}),w&&R.on("uiRegister",()=>{var e;null===(e=R.ui)||void 0===e||e.registerElement({name:"default-caption",order:9,isButton:!1,appendTo:"root",onInit:(e,t)=>{e.style.position="absolute",e.style.bottom="15px",e.style.left="0",e.style.right="0",e.style.padding="0 20px",e.style.color="var(--pswp-icon-color)",e.style.textAlign="center",e.style.fontSize="14px",e.style.lineHeight="1.5",e.style.textShadow="1px 1px 3px var(--pswp-icon-color-secondary)",R.on("change",()=>{if(!t.currSlide)return;let{caption:n,alt:r}=t.currSlide.data;e.innerHTML=n||r||""})}})}),Array.isArray(l)&&l.forEach(e=>{R.on("uiRegister",()=>{var t;null===(t=R.ui)||void 0===t||t.registerElement(e)})}),"function"==typeof n&&n(new b(R)),"function"==typeof g&&g(R);let j=()=>({gallery:{galleryUID:a}});R.on("beforeOpen",()=>{var e;if(void 0===a)return;let t=h(p());if(!t){window.history.pushState(j(),document.title);return}let n=Boolean(null===(e=window.history.state)||void 0===e?void 0:e.gallery);if(n)return;let r=f(),o=p(),i=c(o),l=`${r}${i?`#${i}`:""}`,s=`${r}#${o}`;window.history.replaceState(window.history.state,document.title,l),window.history.pushState(j(),document.title,s)}),R.on("change",()=>{var e;if(void 0===a)return;let t=(null===(e=R.currSlide)||void 0===e?void 0:e.data.pid)||R.currIndex+1,n=f(),r=c(p()),o=u({gid:a,pid:t}),i=`${n}#${r}&${o}`;window.history.replaceState(j(),document.title,i)});let A=()=>{void 0!==a&&null!==v&&v.close()};window.addEventListener("popstate",A),R.on("destroy",()=>{void 0!==a&&(window.removeEventListener("popstate",A),h(p())&&window.history.back()),v=null}),R.init(),"function"==typeof E&&E(R)},[t,n,l,a,g,E,w,x]);(0,o.useEffect)(()=>()=>{v&&v.close()},[]);let S=(0,o.useCallback)(()=>{if(void 0===a||null!==v)return;let e=p();if(e.length<5)return;let t=d(e),{pid:n,gid:r}=t;if(n&&r){if(0===k.current.size){_.current=n;return}n&&r===String(a)&&N(null,n)}},[N,a]);(0,o.useEffect)(()=>(S(),window.addEventListener("popstate",S),()=>{window.removeEventListener("popstate",S)}),[S]);let T=(0,o.useCallback)(e=>{k.current.delete(e)},[]),P=(0,o.useCallback)((e,t)=>{let{id:n}=t;if(k.current.set(e,t),null!==_.current){if(n===_.current){N(e),_.current=null;return}if(!n){let e=parseInt(_.current,10)-1,t=Array.from(k.current.keys())[e];t&&(N(t),_.current=null)}}},[N]),R=(0,o.useCallback)(e=>{N(null,null,e)},[N]),j=(0,o.useMemo)(()=>({remove:T,set:P,handleClick:N,open:R}),[T,P,N,R]);return o.createElement(m.Provider,{value:j},e,C)};g.propTypes={children:l.any,options:l.object,plugins:l.func,uiElements:l.array,id:l.oneOfType([l.string,l.number]),onBeforeOpen:l.func,onOpen:l.func,withCaption:l.bool,withDownloadButton:l.bool};var E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let w=e=>{var{children:t}=e,n=E(e,["children"]);let r=(0,o.useRef)(),{remove:i,set:l,handleClick:a}=(0,o.useContext)(m),s=(0,o.useCallback)(e=>a(r,null,null,e),[]);return(0,o.useEffect)(()=>(l(r,n),()=>i(r)),Object.values(n)),t({ref:r,open:s})};w.propTypes={children:l.func.isRequired,original:l.string,originalSrcset:l.string,thumbnail:l.string,width:l.oneOfType([l.number,l.string]),height:l.oneOfType([l.number,l.string]),alt:l.string,caption:l.string,content:l.element,html:l.string,id:l.oneOfType([l.number,l.string]),cropped:l.bool}}}]);