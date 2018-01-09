!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],t):"object"==typeof exports?exports["react-parallax"]=t(require("react"),require("prop-types"),require("react-dom")):e["react-parallax"]=t(e.React,e.PropTypes,e.ReactDOM)}(this,function(e,t,n){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(1),u=i(l),c=n(0),d=i(c),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"react-parallax-background "+this.props.className},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),t}(d.default.Component);h.propTypes={children:u.default.node,className:u.default.string},h.defaultProps={className:""},t.default=h},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(1),u=i(l),c=n(0),d=i(c),h=n(6),f=i(h),p=n(5),g=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bgImage:e.bgImage,childStyle:{position:"relative"}},n.canUseDOM=(0,p.canUseDOM)(),n.ReactDOM=f.default.findDOMNode?f.default:d.default,n.node=null,n.content=null,n.splitChildren=(0,p.getSplitChildren)(e),n.bgImageLoaded=!1,n.parent=e.parent,n.parentHeight=(0,p.getNodeHeight)(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n.autobind(),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props.parent;this.parent=e||document,this.addListeners(this.props),this.node=this.ReactDOM.findDOMNode(this),this.state.bgImage?this.loadImage(this.state.bgImage):this.updatePosition(),this.setParallaxStyle(),this.setInitialBackgroundStyles(this.img),this.setInitialBackgroundStyles(this.bg)}},{key:"componentWillReceiveProps",value:function(e){this.splitChildren=(0,p.getSplitChildren)(e),e.parent&&this.parent!==e.parent&&(this.parent=e.parent,this.removeListeners(),this.addListeners()),this.parentHeight=(0,p.getNodeHeight)(this.canUseDOM,this.parent),this.state.bgImage!==e.bgImage&&this.loadImage(e.bgImage)}},{key:"shouldComponentUpdate",value:function(e,t){return e.bgImage===this.props.bgImage||t.bgImage!==this.state.bgImage}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent)}},{key:"onWindowResize",value:function(){this.parentHeight=(0,p.getNodeHeight)(this.canUseDOM,this.parent),this.updatePosition()}},{key:"onWindowLoad",value:function(){this.updatePosition()}},{key:"onScroll",value:function(e){if(this.canUseDOM){var t=Date.now();t-this.timestamp>=10&&(window.requestAnimationFrame(this.updatePosition),this.timestamp=t)}}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"setInitialBackgroundStyles",value:function(e){var t=this;e&&(e.style.position="absolute",e.style.left="50%",e.style.WebkitTransform="translate3d(-50%, 0, 0)",e.style.transform="translate3d(-50%, 0, 0)",e.style.WebkitTransformStyle="preserve-3d",e.style.WebkitBackfaceVisibility="hidden",e.style.MozBackfaceVisibility="hidden",e.style.MsBackfaceVisibility="hidden",this.props.bgStyle&&Object.keys(this.props.bgStyle).forEach(function(n){e.style[n]=t.props.bgStyle[n]}))}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,i=t.strength;if(!0!==n){var r=i<0,o=(r?i:0)-i*e;this.bg.style.WebkitTransform="translate3d(-50%, "+o+"px, 0)",this.bg.style.transform="translate3d(-50%, "+o+"px, 0)"}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,i=n.bgHeight,r=n.bgWidth,o=n.disabled,a=n.strength,s=n.blur,l=i||(t?"auto":this.getImageHeight()+"px"),u=r||(t?this.contentWidth+"px":"auto");if(this.img.style.height=l,this.img.style.width=u,!0!==o){var c=a<0,d=(c?a:0)-a*e;if(this.img.style.WebkitTransform="translate3d(-50%, "+d+"px, 0)",this.img.style.transform="translate3d(-50%, "+d+"px, 0)",s){var h=this.dynamicBlur?s.min+(1-e)*s.max:s;(0,p.setBlur)(this.img,h)}}}},{key:"getImageHeight",value:function(){var e=this.props.strength<0,t=e?2.5:1,n=t*Math.abs(this.props.strength);return Math.floor(this.contentHeight+n)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"loadImage",value:function(e){var t=this,n=new Image;n.onload=function(n){t.setState({bgImage:e},function(){return t.updatePosition()})},n.onerror=n.onload,n.src=e}},{key:"bgMounted",value:function(e){this.bg=this.ReactDOM.findDOMNode(e)}},{key:"updatePosition",value:function(){var e=!1;this.content=this.ReactDOM.findDOMNode(this.refs.content),this.contentHeight=this.content.getBoundingClientRect().height,this.contentWidth=this.node.getBoundingClientRect().width,this.img&&this.img.naturalWidth/this.img.naturalHeight<this.contentWidth/this.getImageHeight()&&(e=!0);var t=(0,p.getRelativePosition)(this.node,this.canUseDOM,this.parent);this.img&&this.setImagePosition(t,e),this.bg&&this.splitChildren.bgChildren.length>0&&this.setBackgroundPosition(t)}},{key:"autobind",value:function(){this.onScroll=this.onScroll.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.updatePosition=this.updatePosition.bind(this),this.onWindowLoad=this.onWindowLoad.bind(this)}},{key:"log",value:function(){if(this.props.log){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}}},{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:"react-parallax "+this.props.className,style:this.props.style},this.state.bgImage?d.default.createElement("img",{className:this.props.bgClassName,src:this.state.bgImage,ref:function(t){return e.img=t},alt:this.props.bgImageAlt}):null,this.splitChildren.bgChildren.length>0?d.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){return e.bgMounted(t)}},this.splitChildren.bgChildren):null,d.default.createElement("div",{className:"react-parallax-content",style:this.state.childStyle,ref:"content"},this.splitChildren.children))}}]),t}(d.default.Component);g.propTypes={bgClassName:u.default.string,bgHeight:u.default.string,bgImage:u.default.string,bgImageAlt:u.default.string,bgStyle:u.default.object,bgWidth:u.default.string,blur:u.default.oneOfType([u.default.number,u.default.object]),className:u.default.string,disabled:u.default.bool,log:u.default.bool,parent:u.default.any,strength:u.default.number,style:u.default.object},g.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",disabled:!1,log:!1,strength:100},t.default=g},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var r=n(3),o=i(r),a=n(2),s=i(a);t.Parallax=o.default,t.Background=s.default},function(e,t,n){"use strict";function i(e,t){if(!t)return!1;var n=e.getBoundingClientRect().top,i=e.getBoundingClientRect().bottom;return n<=0&&i>=0||n>=0&&i<=window.innerHeight||n<=window.innerHeight&&i>=window.innerHeight}function r(e){if(!e)return 0;var t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0];return t.innerHeight||i.clientHeight||r.clientHeight}function o(e,t){return e?t?t.clientHeight:r(e):0}function a(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function s(e,t,n){return(n-e)/(t-e)||0}function l(e,t,n){if(!t)return 0;var i=e,r=Math.round(i.getBoundingClientRect().top),a=o(t);return r=r>a?a:r,s(0,a,r)}function u(e){var t=[],n=h.default.Children.toArray(e.children);return n.forEach(function(e,i){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(i,1)))}),{bgChildren:t,children:n}}function c(e,t){e.style.WebkitFilter="blur("+t+"px)",e.style.filter="blur("+t+"px)"}Object.defineProperty(t,"__esModule",{value:!0}),t.isScrolledIntoView=i,t.getWindowHeight=r,t.getNodeHeight=o,t.canUseDOM=a,t.getPercentage=s,t.getRelativePosition=l,t.getSplitChildren=u,t.setBlur=c;var d=n(0),h=function(e){return e&&e.__esModule?e:{default:e}}(d)},function(e,t){e.exports=n}])});