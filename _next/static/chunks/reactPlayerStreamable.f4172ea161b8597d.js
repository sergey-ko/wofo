"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{66863:function(e,t,r){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(2265)),o=r(42242),a=r(63391);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Streamable,e);var t,r,i,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,n=_getPrototypeOf(Streamable);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(e=r)&&("object"===_typeof(e)||"function"==typeof e)?e:_assertThisInitialized(this)});function Streamable(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,Streamable);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=l.call.apply(l,[this].concat(r))),"callPlayer",o.callPlayer),_defineProperty(_assertThisInitialized(e),"duration",null),_defineProperty(_assertThisInitialized(e),"currentTime",null),_defineProperty(_assertThisInitialized(e),"secondsLoaded",null),_defineProperty(_assertThisInitialized(e),"mute",function(){e.callPlayer("mute")}),_defineProperty(_assertThisInitialized(e),"unmute",function(){e.callPlayer("unmute")}),_defineProperty(_assertThisInitialized(e),"ref",function(t){e.iframe=t}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,o.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.setLoop(t.props.loop),t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",t.props.onSeek),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",function(e){var r=e.duration,n=e.seconds;t.duration=r,t.currentTime=n}),t.player.on("buffered",function(e){var r=e.percent;t.duration&&(t.secondsLoaded=t.duration*r)}),t.props.muted&&t.player.mute())},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(a.MATCH_URL_STREAMABLE)[1];return n.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}],_defineProperties(Streamable.prototype,r),i&&_defineProperties(Streamable,i),Streamable}(n.Component);t.default=i,_defineProperty(i,"displayName","Streamable"),_defineProperty(i,"canPlay",a.canPlay.streamable)}}]);