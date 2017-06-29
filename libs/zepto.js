// Zepto 1.1.31 - zepto event data callbacks deferred ajax form ie touch - zeptojs.com/license
// Git Command
// $ npm install
// $ MODULES="zepto event data callbacks deferred ajax form ie touch" npm run-script dist

var Zepto=function(){function A(t){return null==t?String(t):E[j.call(t)]||"object"}function D(t){return"function"==A(t)}function Z(t){return null!=t&&t==t.window}function L(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function k(t){return"object"==A(t)}function _(t){return k(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function $(t){return a.call(t,function(t){return null!=t})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function U(t,e){return"number"!=typeof e||c[z(t)]?e:e+"px"}function W(t){var e,n;return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function H(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(_(i[e])||M(i[e]))?(_(i[e])&&!_(n[e])&&(n[e]={}),M(i[e])&&!M(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function V(t,e){return null==e?n(t):n(t).filter(e)}function X(t,e,n,i){return D(e)?e.call(t,n,i):e}function B(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function Y(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function J(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,a=r.filter,s=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),w=s.createElement("tr"),b={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:w,th:w,"*":s.createElement("div")},x=/complete|loaded|interactive/,T=/^[\w-]*$/,E={},j=E.toString,S={},P=s.createElement("div"),O={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=P).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&P.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var a,u,f;return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),_(r)&&(u=n(a),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),a},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(s,e)}else{if(D(e))return n(s).ready(e);if(S.isZ(e))return e;if(M(e))r=$(e);else if(k(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(s,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=T.test(a);return L(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=A,n.isFunction=D,n.isWindow=Z,n.isArray=M,n.isPlainObject=_,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return F(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return a.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){E["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return x.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return D(t)?this.not(this.not(t)):n(a.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(D(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&D(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return k(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!k(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!k(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!L(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!L(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return V(e,t)},parent:function(t){return V(N(this.pluck("parentNode")),t)},children:function(t){return V(this.map(function(){return H(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return V(this.map(function(t,e){return a.call(H(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=W(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=D(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=D(t);return this.each(function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(X(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(k(n))for(e in n)B(this,e,n[e]);else B(this,n,X(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&B(this,t)})},prop:function(e,n){return e=O[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=X(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?J(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=X(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=X(this,t,e,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(M(t)){var a={};return n.each(M(t)?t:[t],function(t,e){a[e]=r.style[C(e)]||o.getPropertyValue(e)}),a}}var s="";if("string"==A(t))i||0===i?s=z(t)+":"+U(t,i):this.each(function(){this.style.removeProperty(z(t))});else for(e in t)t[e]||0===t[e]?s+=z(e)+":"+U(e,t[e])+";":this.each(function(){this.style.removeProperty(z(e))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(Y(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=Y(this),o=X(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&Y(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?Y(this,""):(i=Y(this),X(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void Y(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),a=X(this,e,r,Y(this));a.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||s.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,a=this[0];return r===t?Z(a)?a["inner"+i]:L(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){a=n(this),a.css(e,X(this,r,t,a[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=A(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,s){o=i?s:s.parentNode,s=0==e?s.nextSibling:1==e?s.firstChild:2==e?s:null,r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,s),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=J,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(a[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,s,u,f){var h=l(e),d=a[h]||(a[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var a=p(i);a.fn=r,a.sel=s,a.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var l=u||r;a.proxy=function(t){if(t=E(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function E(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(T,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function j(t){var e,i={originalEvent:t};for(e in t)x.test(e)||t[e]===n||(i[e]=t[e]);return E(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},b=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,a,s,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,a,s,e,f)}),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),a&&(l=function(e){var n,o=t(e.target).closest(a,r).get(0);return o&&o!==r?(n=t.extend(j(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a){var s=this;return e&&!o(e)?(t.each(e,function(t,e){s.off(t,i,e)}),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=b),s.each(function(){y(this,e,a,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):E(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(a,s){i=j(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),E(n)}}(Zepto),function(t){function a(o,a){var u=o[r],f=u&&e[u];if(void 0===a)return f||s(o);if(f){if(a in f)return f[a];var c=i(a);if(c in f)return f[c]}return n.call(t(o),a)}function s(n,o,a){var s=n[r]||(n[r]=++t.uuid),f=e[s]||(e[s]=u(n));return void 0!==o&&(f[i(o)]=a),f}function u(e){var n={};return t.each(e.attributes||o,function(e,r){0==r.name.indexOf("data-")&&(n[i(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),n}var e={},n=t.fn.data,i=t.camelCase,r=t.expando="Zepto"+ +new Date,o=[];t.fn.data=function(e,n){return void 0===n?t.isPlainObject(e)?this.each(function(n,i){t.each(e,function(t,e){s(i,t,e)})}):0==this.length?void 0:a(this[0],e):this.each(function(){s(this,e,n)})},t.fn.removeData=function(n){return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function(){var o=this[r],a=o&&e[o];a&&t.each(n||a,function(t){delete a[n?i(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,a,s,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,s=o||0,o=0,a=u.length,r=!0;u&&a>s;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),r?a=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(a>=i&&--a,s>=i&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var s=t.isFunction(e[i])&&e[i];a[r[1]](function(){var e=s&&s.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,a=s?[e]:arguments;n[r[0]+"With"](i,a)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(i,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){r=s},i[1^t][2].disable,i[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),e&&e.call(a,a),a}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,a=0,s=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===s?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>a;++a)r[a]&&t.isFunction(r[a].promise)?r[a].promise().done(h(a,l,r)).fail(u.reject).progress(h(a,c,f)):--s;return s||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function w(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function x(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=x(e.url,e.data),e.data=void 0)}function E(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(s).on("load error",function(e,n){clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[a]=function(){f=arguments},s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),T(n),n.cache===!1&&(n.url=x(n.url,"_="+Date.now()));var a=n.dataType,s=/\?.+=\?/.test(n.url);if("jsonp"==a||s)return s||(n.url=x(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var E,u=n.accepts[a],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=w,clearTimeout(E);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){a=a||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==a?(1,eval)(e):"xml"==a?e=d.responseXML:"json"==a&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var j="async"in n?n.async:!0;d.open(n.type,n.url,j,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(E=setTimeout(function(){d.onreadystatechange=w,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(E.apply(null,arguments))},t.post=function(){var e=E.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=E.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,a=e.split(/\s/),u=E(e,n,i),f=u.success;return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e){r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)},t.ajax(u),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,s,e={},a=750;t(document).ready(function(){var d,m,y,w,g=0,v=0;"MSGesture"in window&&(s=new MSGesture,s.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(w=p(i,"down"))||h(i))&&(y=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,a),s&&w&&s.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(w=p(t,"move"))||h(t))&&(y=w?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);
;/*
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 */
(function ($) {
    'use strict';

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
     * Convert an array of little-endian words to a string
     */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
     * Calculate the MD5 of a raw string
     */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
     * Convert a raw string to a hex string
     */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
     * Encode a string as utf-8
     */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
     * Take string arguments and return either raw or hex encoded strings
     */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }

    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }

    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }

    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }

    function md5(string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            }
            return raw_md5(string);
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        }
        return raw_hmac_md5(key, string);
    }
    $.md5 = md5;
}(Zepto));
;;(function ($) {
    var emptyArray = [];
    var some = emptyArray.some;
    var slice = emptyArray.slice;
    //AOP切面函数
    $.aop = function (ls) {
        //保障ls为数组
        isNaN(ls.length) && ($.isFunction(ls) ? (ls = [fn]) : (ls = []));
        //构建执行函数
        var aop = function () {
            var me = this;
            var args = slice.call(arguments, 0);
            some.call(ls, function (fn) {
                return $.isFunction(fn) && fn.apply(me, args) === false;
            });
        };
        aop[':list'] = ls;
        return aop;
    };
}(Zepto));
;;(function($) {
    //转换为可观察对象
    function convert(src) {
        src = src || {};
        if (src[':watch']) {
            return src;
        } else {
            return Object.create(src, {
                'trigger': {
                    value: function(name, newval, oldval) {
                        var me = this;
                        var listener = me[':listener'][name];
                        if (listener && listener.forEach) {
                            listener.forEach(function(i) {
                                i.call(me, name, newval, oldval);
                            });
                        }
                        return me;
                    },
                    enumerable: false,
                    configurable: false
                },
                ':listener': {
                    value: {},
                    enumerable: false,
                    configurable: false
                },
                ':watch': {
                    value: [],
                    enumerable: false,
                    configurable: false
                }
            });
        }
    }

    //属性观察转换
    function reform(src, name, fn) {
        var listener = src[':listener'];
        var items = listener[name] = listener[name] || [];
        if (items.indexOf(fn) == -1) {
            listener[name].push(fn);
        }
        if (src[':watch'].indexOf(name) == -1) {
            var cache = src[name];
            Object.defineProperty(src, name, {
                get: function() {
                    return cache;
                },
                set: function(val) {
                    var oldval = cache;
                    src.trigger(name, cache = val, oldval);
                },
                enumerable: true,
                configurable: true
            });
            src[':watch'].push(name);
        }
    }

    //破坏观察
    function destroy(src, name) {
        var val = src[name];
        delete src[name];
        delete src[':listener'][name];
        var i = src[':watch'].indexOf(name);
        src[':watch'].splice(i);
        src.name = val;
    }

    $.watch = function(src, name, fn) {
        if (src == undefined) {
            return convert();
        } else if (src[':watch'] === undefined) {
            src = convert(src);
        }

        if (name && $.isFunction(fn)) {
            if (name.forEach) {
                name.forEach(function(i) {
                    reform(src, i, fn);
                });
            } else {
                reform(src, name, fn);
            }
        }
        return src;
    }

    $.unwatch = function(src, name) {
        if (name.forEach) {
            name.forEach(function(i) {
                destroy(src, i);
            });
        } else {
            destroy(src, name);
        }
        return src
    }
}(Zepto))
;/*
* swiper 2.5.0
* Mobile touch slider and framework with hardware accelerated transitions
*
* http://www.idangero.us/sliders/swiper/
*
* Copyright 2010-2014, Vladimir Kharlampidi
* The iDangero.us
* http://www.idangero.us/
*
* Licensed under GPL & MIT
*
* Released on: March 6, 2014
*/
//;(function($){
    var Swiper = function (selector, params) {
        'use strict';

/*=========================
A little bit dirty but required part for IE8 and old FF support
===========================*/
        if (document.body.__defineGetter__) {
            if (HTMLElement) {
                var element = HTMLElement.prototype;
                if (element.__defineGetter__) {
                    element.__defineGetter__('outerHTML', function () {
                        return new XMLSerializer().serializeToString(this);
                    });
                }
            }
        }

        if (!window.getComputedStyle) {
            window.getComputedStyle = function (el, pseudo) {
                this.el = el;
                this.getPropertyValue = function (prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop === 'float') prop = 'styleFloat';
                    if (re.test(prop)) {
                        prop = prop.replace(re, function () {
                            return arguments[2].toUpperCase();
                        });
                    }
                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                };
                return this;
            };
        }
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!document.querySelectorAll) {
            if (!window.jQuery) return;
        }

        function $$(selector, context) {
            if (document.querySelectorAll)
                return (context || document).querySelectorAll(selector);
            else
                return jQuery(selector, context);
        }

/*=========================
Check for correct selector
===========================*/
        if (typeof selector === 'undefined') return;

        if (!(selector.nodeType)) {
            if ($$(selector).length === 0) return;
        }

/*=========================
_this
===========================*/
        var _this = this;

/*=========================
Default Flags and vars
===========================*/
        _this.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        };
        _this.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        };
        _this.times = {
            start: 0,
            end: 0
        };

        _this.id = (new Date()).getTime();
        _this.container = (selector.nodeType) ? selector : $$(selector)[0];
        _this.isTouched = false;
        _this.isMoved = false;
        _this.activeIndex = 0;
        _this.centerIndex = 0;
        _this.activeLoaderIndex = 0;
        _this.activeLoopIndex = 0;
        _this.previousIndex = null;
        _this.velocity = 0;
        _this.snapGrid = [];
        _this.slidesGrid = [];
        _this.imagesToLoad = [];
        _this.imagesLoaded = 0;
        _this.wrapperLeft = 0;
        _this.wrapperRight = 0;
        _this.wrapperTop = 0;
        _this.wrapperBottom = 0;
        _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
        var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;

/*=========================
Default Parameters
===========================*/
        var defaults = {
            eventTarget: 'wrapper', // or 'container'
            mode: 'horizontal', // or 'vertical'
            touchRatio: 1,
            speed: 300,
            freeMode: false,
            freeModeFluid: false,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: true, //Fit to slide when spv "auto" and slides larger than container
            simulateTouch: true,
            followFinger: true,
            shortSwipes: true,
            longSwipesRatio: 0.5,
            moveStartThreshold: false,
            onlyExternal: false,
            createPagination: true,
            pagination: false,
            paginationElement: 'span',
            paginationClickable: false,
            paginationAsRange: true,
            resistance: true, // or false or 100%
            scrollContainer: false,
            preventLinks: true,
            preventLinksPropagation: false,
            noSwiping: false, // or class
            noSwipingClass: 'swiper-no-swiping', //:)
            initialSlide: 0,
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelControlForceToAxis: false,
            useCSS3Transforms: true,
            // Autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            //Loop mode
            loop: false,
            loopAdditionalSlides: 0,
            //Auto Height
            calculateHeight: false,
            cssWidthAndHeight: false,
            //Images Preloader
            updateOnImagesReady: true,
            //Form elements
            releaseFormElements: true,
            //Watch for active slide, useful when use effects on different slide states
            watchActiveIndex: false,
            //Slides Visibility Fit
            visibilityFullFit: false,
            //Slides Offset
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: false,
            //Queue callbacks
            queueStartCallbacks: false,
            queueEndCallbacks: false,
            //Auto Resize
            autoResize: true,
            resizeReInit: false,
            //DOMAnimation
            DOMAnimation: true,
            //Slides Loader
            loader: {
                slides: [], //array with slides
                slidesHTMLType: 'inner', // or 'outer'
                surroundGroups: 1, //keep preloaded slides groups around view
                logic: 'reload', //or 'change'
                loadAllSlides: false
            },
            //Namespace
            slideElement: 'div',
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            wrapperClass: 'swiper-wrapper',
            paginationElementClass: 'swiper-pagination-switch',
            paginationActiveClass: 'swiper-active-switch',
            paginationVisibleClass: 'swiper-visible-switch'
        };
        params = params || {};
        for (var prop in defaults) {
            if (prop in params && typeof params[prop] === 'object') {
                for (var subProp in defaults[prop]) {
                    if (!(subProp in params[prop])) {
                        params[prop][subProp] = defaults[prop][subProp];
                    }
                }
            } else if (!(prop in params)) {
                params[prop] = defaults[prop];
            }
        }
        _this.params = params;
        if (params.scrollContainer) {
            params.freeMode = true;
            params.freeModeFluid = true;
        }
        if (params.loop) {
            params.resistance = '100%';
        }
        var isH = params.mode === 'horizontal';

/*=========================
Define Touch Events
===========================*/
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];

        _this.touchEvents = {
            touchStart: _this.support.touch || !params.simulateTouch ? 'touchstart' : desktopEvents[0],
            touchMove: _this.support.touch || !params.simulateTouch ? 'touchmove' : desktopEvents[1],
            touchEnd: _this.support.touch || !params.simulateTouch ? 'touchend' : desktopEvents[2]
        };

/*=========================
Wrapper
===========================*/
        for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {
            if (_this.container.childNodes[i].className) {
                var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/);
                for (var j = 0; j < _wrapperClasses.length; j++) {
                    if (_wrapperClasses[j] === params.wrapperClass) {
                        wrapper = _this.container.childNodes[i];
                    }
                }
            }
        }

        _this.wrapper = wrapper;
/*=========================
Slide API
===========================*/
        _this._extendSwiperSlide = function (el) {
            el.append = function () {
                if (params.loop) {
                    el.insertAfter(_this.slides.length - _this.loopedSlides);
                } else {
                    _this.wrapper.appendChild(el);
                    _this.reInit();
                }

                return el;
            };
            el.prepend = function () {
                if (params.loop) {
                    _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else {
                    _this.wrapper.insertBefore(el, _this.wrapper.firstChild);
                }
                _this.reInit();
                return el;
            };
            el.insertAfter = function (index) {
                if (typeof index === 'undefined') return false;
                var beforeSlide;

                if (params.loop) {
                    beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                    if (beforeSlide) {
                        _this.wrapper.insertBefore(el, beforeSlide);
                    } else {
                        _this.wrapper.appendChild(el);
                    }
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else {
                    beforeSlide = _this.slides[index + 1];
                    _this.wrapper.insertBefore(el, beforeSlide);
                }
                _this.reInit();
                return el;
            };
            el.clone = function () {
                return _this._extendSwiperSlide(el.cloneNode(true));
            };
            el.remove = function () {
                _this.wrapper.removeChild(el);
                _this.reInit();
            };
            el.html = function (html) {
                if (typeof html === 'undefined') {
                    return el.innerHTML;
                } else {
                    el.innerHTML = html;
                    return el;
                }
            };
            el.index = function () {
                var index;
                for (var i = _this.slides.length - 1; i >= 0; i--) {
                    if (el === _this.slides[i]) index = i;
                }
                return index;
            };
            el.isActive = function () {
                if (el.index() === _this.activeIndex) return true;
                else return false;
            };
            if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
            el.getData = function (name) {
                return el.swiperSlideDataStorage[name];
            };
            el.setData = function (name, value) {
                el.swiperSlideDataStorage[name] = value;
                return el;
            };
            el.data = function (name, value) {
                if (typeof value === 'undefined') {
                    return el.getAttribute('data-' + name);
                } else {
                    el.setAttribute('data-' + name, value);
                    return el;
                }
            };
            el.getWidth = function (outer) {
                return _this.h.getWidth(el, outer);
            };
            el.getHeight = function (outer) {
                return _this.h.getHeight(el, outer);
            };
            el.getOffset = function () {
                return _this.h.getOffset(el);
            };
            return el;
        };

        //Calculate information about number of slides
        _this.calcSlides = function (forceCalcSlides) {
            var oldNumber = _this.slides ? _this.slides.length : false;
            _this.slides = [];
            _this.displaySlides = [];
            for (var i = 0; i < _this.wrapper.childNodes.length; i++) {
                if (_this.wrapper.childNodes[i].className) {
                    var _className = _this.wrapper.childNodes[i].className;
                    var _slideClasses = _className.split(/\s+/);
                    for (var j = 0; j < _slideClasses.length; j++) {
                        if (_slideClasses[j] === params.slideClass) {
                            _this.slides.push(_this.wrapper.childNodes[i]);
                        }
                    }
                }
            }
            for (i = _this.slides.length - 1; i >= 0; i--) {
                _this._extendSwiperSlide(_this.slides[i]);
            }
            if (oldNumber === false) return;
            if (oldNumber !== _this.slides.length || forceCalcSlides) {

                // Number of slides has been changed
                removeSlideEvents();
                addSlideEvents();
                _this.updateActiveSlide();
                if (_this.params.pagination) _this.createPagination();
                _this.callPlugins('numberOfSlidesChanged');
            }
        };

        //Create Slide
        _this.createSlide = function (html, slideClassList, el) {
            slideClassList = slideClassList || _this.params.slideClass;
            el = el || params.slideElement;
            var newSlide = document.createElement(el);
            newSlide.innerHTML = html || '';
            newSlide.className = slideClassList;
            return _this._extendSwiperSlide(newSlide);
        };

        //Append Slide
        _this.appendSlide = function (html, slideClassList, el) {
            if (!html) return;
            if (html.nodeType) {
                return _this._extendSwiperSlide(html).append();
            } else {
                return _this.createSlide(html, slideClassList, el).append();
            }
        };
        _this.prependSlide = function (html, slideClassList, el) {
            if (!html) return;
            if (html.nodeType) {
                return _this._extendSwiperSlide(html).prepend();
            } else {
                return _this.createSlide(html, slideClassList, el).prepend();
            }
        };
        _this.insertSlideAfter = function (index, html, slideClassList, el) {
            if (typeof index === 'undefined') return false;
            if (html.nodeType) {
                return _this._extendSwiperSlide(html).insertAfter(index);
            } else {
                return _this.createSlide(html, slideClassList, el).insertAfter(index);
            }
        };
        _this.removeSlide = function (index) {
            if (_this.slides[index]) {
                if (params.loop) {
                    if (!_this.slides[index + _this.loopedSlides]) return false;
                    _this.slides[index + _this.loopedSlides].remove();
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else _this.slides[index].remove();
                return true;
            } else return false;
        };
        _this.removeLastSlide = function () {
            if (_this.slides.length > 0) {
                if (params.loop) {
                    _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                    _this.removeLoopedSlides();
                    _this.calcSlides();
                    _this.createLoop();
                } else _this.slides[_this.slides.length - 1].remove();
                return true;
            } else {
                return false;
            }
        };
        _this.removeAllSlides = function () {
            for (var i = _this.slides.length - 1; i >= 0; i--) {
                _this.slides[i].remove();
            }
        };
        _this.getSlide = function (index) {
            return _this.slides[index];
        };
        _this.getLastSlide = function () {
            return _this.slides[_this.slides.length - 1];
        };
        _this.getFirstSlide = function () {
            return _this.slides[0];
        };

        //Currently Active Slide
        _this.activeSlide = function () {
            return _this.slides[_this.activeIndex];
        };

/*=========================
Wrapper for Callbacks : Allows additive callbacks via function arrays
===========================*/
        _this.fireCallback = function () {
            var callback = arguments[0];
            if (Object.prototype.toString.call(callback) === '[object Array]') {
                for (var i = 0; i < callback.length; i++) {
                    if (typeof callback[i] === 'function') {
                        callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    }
                }
            } else if (Object.prototype.toString.call(callback) === '[object String]') {
                if (params['on' + callback]) _this.fireCallback(params['on' + callback]);
            } else {
                callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
        };

        function isArray(obj) {
            if (Object.prototype.toString.apply(obj) === '[object Array]') return true;
            return false;
        }

        /**
         * Allows user to add callbacks, rather than replace them
         * @param callback
         * @param func
         * @return {*}
         */
        _this.addCallback = function (callback, func) {
            var _this = this,
                tempFunc;
            if (_this.params['on' + callback]) {
                if (isArray(this.params['on' + callback])) {
                    return this.params['on' + callback].push(func);
                } else if (typeof this.params['on' + callback] === 'function') {
                    tempFunc = this.params['on' + callback];
                    this.params['on' + callback] = [];
                    this.params['on' + callback].push(tempFunc);
                    return this.params['on' + callback].push(func);
                }
            } else {
                this.params['on' + callback] = [];
                return this.params['on' + callback].push(func);
            }
        };
        _this.removeCallbacks = function (callback) {
            if (_this.params['on' + callback]) {
                _this.params['on' + callback] = null;
            }
        };

/*=========================
Plugins API
===========================*/
        var _plugins = [];
        for (var plugin in _this.plugins) {
            if (params[plugin]) {
                var p = _this.plugins[plugin](_this, params[plugin]);
                if (p) _plugins.push(p);
            }
        }
        _this.callPlugins = function (method, args) {
            if (!args) args = {};
            for (var i = 0; i < _plugins.length; i++) {
                if (method in _plugins[i]) {
                    _plugins[i][method](args);
                }
            }
        };

/*=========================
Windows Phone 8 Fix
===========================*/
        if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {
            _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical'));
        }

/*=========================
Free Mode Class
===========================*/
        if (params.freeMode) {
            _this.container.className += ' swiper-free-mode';
        }

/*==================================================
Init/Re-init/Resize Fix
====================================================*/
        _this.initialized = false;
        _this.init = function (force, forceCalcSlides) {
            var _width = _this.h.getWidth(_this.container);
            var _height = _this.h.getHeight(_this.container);
            if (_width === _this.width && _height === _this.height && !force) return;
            if (_width === 0 || _height === 0) return;
            _this.width = _width;
            _this.height = _height;

            var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft;
            var i; // loop index variable to avoid JSHint W004 / W038
            containerSize = isH ? _width : _height;
            var wrapper = _this.wrapper;

            if (force) {
                _this.calcSlides(forceCalcSlides);
            }

            if (params.slidesPerView === 'auto') {
                //Auto mode
                var slidesWidth = 0;
                var slidesHeight = 0;

                //Unset Styles
                if (params.slidesOffset > 0) {
                    wrapper.style.paddingLeft = '';
                    wrapper.style.paddingRight = '';
                    wrapper.style.paddingTop = '';
                    wrapper.style.paddingBottom = '';
                }
                wrapper.style.width = '';
                wrapper.style.height = '';
                if (params.offsetPxBefore > 0) {
                    if (isH) _this.wrapperLeft = params.offsetPxBefore;
                    else _this.wrapperTop = params.offsetPxBefore;
                }
                if (params.offsetPxAfter > 0) {
                    if (isH) _this.wrapperRight = params.offsetPxAfter;
                    else _this.wrapperBottom = params.offsetPxAfter;
                }

                if (params.centeredSlides) {
                    if (isH) {
                        _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true)) / 2;
                        _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true)) / 2;
                    } else {
                        _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true)) / 2;
                        _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true)) / 2;
                    }
                }

                if (isH) {
                    if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                    if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
                } else {
                    if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                    if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
                }
                slideLeft = 0;
                var centeredSlideLeft = 0;
                _this.snapGrid = [];
                _this.slidesGrid = [];

                slideMaxHeight = 0;
                for (i = 0; i < _this.slides.length; i++) {
                    slideWidth = _this.slides[i].getWidth(true);
                    slideHeight = _this.slides[i].getHeight(true);
                    if (params.calculateHeight) {
                        slideMaxHeight = Math.max(slideMaxHeight, slideHeight);
                    }
                    var _slideSize = isH ? slideWidth : slideHeight;
                    if (params.centeredSlides) {
                        var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true);
                        var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true);
                        var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight;
                        if (_slideSize > containerSize) {
                            if (params.slidesPerViewFit) {
                                _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft);
                            } else {
                                for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                    if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                    else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                                }
                            }
                            _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                        } else {
                            _this.snapGrid.push(centeredSlideLeft);
                            _this.slidesGrid.push(centeredSlideLeft);
                        }
                        centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                    } else {
                        if (_slideSize > containerSize) {
                            if (params.slidesPerViewFit) {
                                _this.snapGrid.push(slideLeft);
                                _this.snapGrid.push(slideLeft + _slideSize - containerSize);
                            } else {
                                for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {
                                    _this.snapGrid.push(slideLeft + containerSize * k);
                                }
                            }

                        } else {
                            _this.snapGrid.push(slideLeft);
                        }
                        _this.slidesGrid.push(slideLeft);
                    }

                    slideLeft += _slideSize;

                    slidesWidth += slideWidth;
                    slidesHeight += slideHeight;
                }
                if (params.calculateHeight) _this.height = slideMaxHeight;
                if (isH) {
                    wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                    wrapper.style.width = (slidesWidth) + 'px';
                    wrapper.style.height = (_this.height) + 'px';
                } else {
                    wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                    wrapper.style.width = (_this.width) + 'px';
                    wrapper.style.height = (slidesHeight) + 'px';
                }

            } else if (params.scrollContainer) {
                //Scroll Container
                wrapper.style.width = '';
                wrapper.style.height = '';
                wrapperWidth = _this.slides[0].getWidth(true);
                wrapperHeight = _this.slides[0].getHeight(true);
                wrapperSize = isH ? wrapperWidth : wrapperHeight;
                wrapper.style.width = wrapperWidth + 'px';
                wrapper.style.height = wrapperHeight + 'px';
                slideSize = isH ? wrapperWidth : wrapperHeight;

            } else {
                //For usual slides
                if (params.calculateHeight) {
                    slideMaxHeight = 0;
                    wrapperHeight = 0;
                    //ResetWrapperSize
                    if (!isH) _this.container.style.height = '';
                    wrapper.style.height = '';

                    for (i = 0; i < _this.slides.length; i++) {
                        //ResetSlideSize
                        _this.slides[i].style.height = '';
                        slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                        if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                    }
                    slideHeight = slideMaxHeight;
                    _this.height = slideHeight;

                    if (isH) wrapperHeight = slideHeight;
                    else {
                        containerSize = slideHeight;
                        _this.container.style.height = containerSize + 'px';
                    }
                } else {
                    slideHeight = isH ? _this.height : _this.height / params.slidesPerView;
                    wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight;
                }
                slideWidth = isH ? _this.width / params.slidesPerView : _this.width;
                wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width;
                slideSize = isH ? slideWidth : slideHeight;

                if (params.offsetSlidesBefore > 0) {
                    if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                    else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
                }
                if (params.offsetSlidesAfter > 0) {
                    if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                    else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
                }
                if (params.offsetPxBefore > 0) {
                    if (isH) _this.wrapperLeft = params.offsetPxBefore;
                    else _this.wrapperTop = params.offsetPxBefore;
                }
                if (params.offsetPxAfter > 0) {
                    if (isH) _this.wrapperRight = params.offsetPxAfter;
                    else _this.wrapperBottom = params.offsetPxAfter;
                }
                if (params.centeredSlides) {
                    if (isH) {
                        _this.wrapperLeft = (containerSize - slideSize) / 2;
                        _this.wrapperRight = (containerSize - slideSize) / 2;
                    } else {
                        _this.wrapperTop = (containerSize - slideSize) / 2;
                        _this.wrapperBottom = (containerSize - slideSize) / 2;
                    }
                }
                if (isH) {
                    if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                    if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
                } else {
                    if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                    if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
                }

                wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
                if (!params.cssWidthAndHeight) {
                    if (parseFloat(wrapperWidth) > 0) {
                        wrapper.style.width = wrapperWidth + 'px';
                    }
                    if (parseFloat(wrapperHeight) > 0) {
                        wrapper.style.height = wrapperHeight + 'px';
                    }
                }
                slideLeft = 0;
                _this.snapGrid = [];
                _this.slidesGrid = [];
                for (i = 0; i < _this.slides.length; i++) {
                    _this.snapGrid.push(slideLeft);
                    _this.slidesGrid.push(slideLeft);
                    slideLeft += slideSize;
                    if (!params.cssWidthAndHeight) {
                        if (parseFloat(slideWidth) > 0) {
                            _this.slides[i].style.width = slideWidth + 'px';
                        }
                        if (parseFloat(slideHeight) > 0) {
                            _this.slides[i].style.height = slideHeight + 'px';
                        }
                    }
                }

            }

            if (!_this.initialized) {
                _this.callPlugins('onFirstInit');
                if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this);
            } else {
                _this.callPlugins('onInit');
                if (params.onInit) _this.fireCallback(params.onInit, _this);
            }
            _this.initialized = true;
        };

        _this.reInit = function (forceCalcSlides) {
            _this.init(true, forceCalcSlides);
        };

        _this.resizeFix = function (reInit) {
            _this.callPlugins('beforeResizeFix');

            _this.init(params.resizeReInit || reInit);

            // swipe to active slide in fixed mode
            if (!params.freeMode) {
                _this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false);
                // Fix autoplay
                if (params.autoplay) {
                    if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {
                        if (typeof autoplayTimeoutId !== 'undefined') {
                            clearTimeout(autoplayTimeoutId);
                            autoplayTimeoutId = undefined;
                            _this.startAutoplay();
                        }
                    } else {
                        if (typeof autoplayIntervalId !== 'undefined') {
                            clearInterval(autoplayIntervalId);
                            autoplayIntervalId = undefined;
                            _this.startAutoplay();
                        }
                    }
                }
            }
            // move wrapper to the beginning in free mode
            else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
                _this.setWrapperTransition(0);
                _this.setWrapperTranslate(-maxWrapperPosition());
            }

            _this.callPlugins('afterResizeFix');
        };

/*==========================================
Max and Min Positions
============================================*/
        function maxWrapperPosition() {
            var a = (wrapperSize - containerSize);
            if (params.freeMode) {
                a = wrapperSize - containerSize;
            }
            // if (params.loop) a -= containerSize;
            if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {
                a = 0;
            }
            if (a < 0) a = 0;
            return a;
        }

/*==========================================
Event Listeners
============================================*/
        function initEvents() {
            var bind = _this.h.addEventListener;
            var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
            //Touch Events
            if (!(_this.browser.ie10 || _this.browser.ie11)) {
                if (_this.support.touch) {
                    bind(eventTarget, 'touchstart', onTouchStart);
                    bind(eventTarget, 'touchmove', onTouchMove);
                    bind(eventTarget, 'touchend', onTouchEnd);
                }
                if (params.simulateTouch) {
                    bind(eventTarget, 'mousedown', onTouchStart);
                    bind(document, 'mousemove', onTouchMove);
                    bind(document, 'mouseup', onTouchEnd);
                }
            } else {
                bind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
                bind(document, _this.touchEvents.touchMove, onTouchMove);
                bind(document, _this.touchEvents.touchEnd, onTouchEnd);
            }

            //Resize Event
            if (params.autoResize) {
                bind(window, 'resize', _this.resizeFix);
            }
            //Slide Events
            addSlideEvents();
            //Mousewheel
            _this._wheelEvent = false;
            if (params.mousewheelControl) {
                if (document.onmousewheel !== undefined) {
                    _this._wheelEvent = 'mousewheel';
                }
                try {
                    new WheelEvent('wheel');
                    _this._wheelEvent = 'wheel';
                } catch (e) {}
                if (!_this._wheelEvent) {
                    _this._wheelEvent = 'DOMMouseScroll';
                }

                if (_this._wheelEvent) {
                    bind(_this.container, _this._wheelEvent, handleMousewheel);
                }
            }

            //Keyboard
            function _loadImage(src) {
                var image = new Image();
                image.onload = function () {
                    if (_this && _this.imagesLoaded) _this.imagesLoaded++;
                    if (_this.imagesLoaded === _this.imagesToLoad.length) {
                        _this.reInit();
                        if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
                    }
                };
                image.src = src;
            }

            if (params.keyboardControl) {
                bind(document, 'keydown', handleKeyboardKeys);
            }
            if (params.updateOnImagesReady) {
                _this.imagesToLoad = $$('img', _this.container);

                for (var i = 0; i < _this.imagesToLoad.length; i++) {
                    _loadImage(_this.imagesToLoad[i].getAttribute('src'));
                }
            }
        }

        //Remove Event Listeners
        _this.destroy = function () {
            var unbind = _this.h.removeEventListener;
            var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
            //Touch Events
            if (!(_this.browser.ie10 || _this.browser.ie11)) {
                if (_this.support.touch) {
                    unbind(eventTarget, 'touchstart', onTouchStart);
                    unbind(eventTarget, 'touchmove', onTouchMove);
                    unbind(eventTarget, 'touchend', onTouchEnd);
                }
                if (params.simulateTouch) {
                    unbind(eventTarget, 'mousedown', onTouchStart);
                    unbind(document, 'mousemove', onTouchMove);
                    unbind(document, 'mouseup', onTouchEnd);
                }
            } else {
                unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
                unbind(document, _this.touchEvents.touchMove, onTouchMove);
                unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
            }

            //Resize Event
            if (params.autoResize) {
                unbind(window, 'resize', _this.resizeFix);
            }

            //Init Slide Events
            removeSlideEvents();

            //Pagination
            if (params.paginationClickable) {
                removePaginationEvents();
            }

            //Mousewheel
            if (params.mousewheelControl && _this._wheelEvent) {
                unbind(_this.container, _this._wheelEvent, handleMousewheel);
            }

            //Keyboard
            if (params.keyboardControl) {
                unbind(document, 'keydown', handleKeyboardKeys);
            }

            //Stop autoplay
            if (params.autoplay) {
                _this.stopAutoplay();
            }
            _this.callPlugins('onDestroy');

            //Destroy variable
            _this = null;
        };

        function addSlideEvents() {
            var bind = _this.h.addEventListener,
                i;

            //Prevent Links Events
            if (params.preventLinks) {
                var links = $$('a', _this.container);
                for (i = 0; i < links.length; i++) {
                    bind(links[i], 'click', preventClick);
                }
            }
            //Release Form Elements
            if (params.releaseFormElements) {
                var formElements = $$('input, textarea, select', _this.container);
                for (i = 0; i < formElements.length; i++) {
                    bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
                }
            }

            //Slide Clicks & Touches
            if (params.onSlideClick) {
                for (i = 0; i < _this.slides.length; i++) {
                    bind(_this.slides[i], 'click', slideClick);
                }
            }
            if (params.onSlideTouch) {
                for (i = 0; i < _this.slides.length; i++) {
                    bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
                }
            }
        }

        function removeSlideEvents() {
            var unbind = _this.h.removeEventListener,
                i;

            //Slide Clicks & Touches
            if (params.onSlideClick) {
                for (i = 0; i < _this.slides.length; i++) {
                    unbind(_this.slides[i], 'click', slideClick);
                }
            }
            if (params.onSlideTouch) {
                for (i = 0; i < _this.slides.length; i++) {
                    unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
                }
            }
            //Release Form Elements
            if (params.releaseFormElements) {
                var formElements = $$('input, textarea, select', _this.container);
                for (i = 0; i < formElements.length; i++) {
                    unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
                }
            }
            //Prevent Links Events
            if (params.preventLinks) {
                var links = $$('a', _this.container);
                for (i = 0; i < links.length; i++) {
                    unbind(links[i], 'click', preventClick);
                }
            }
        }
/*==========================================
Keyboard Control
============================================*/
        function handleKeyboardKeys(e) {
            var kc = e.keyCode || e.charCode;
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                var swiperOffset = _this.h.getOffset(_this.container);
                var scrollLeft = _this.h.windowScroll().left;
                var scrollTop = _this.h.windowScroll().top;
                var windowWidth = _this.h.windowWidth();
                var windowHeight = _this.h.windowHeight();
                var swiperCoord = [
            [swiperOffset.left, swiperOffset.top],
            [swiperOffset.left + _this.width, swiperOffset.top],
            [swiperOffset.left, swiperOffset.top + _this.height],
            [swiperOffset.left + _this.width, swiperOffset.top + _this.height]
        ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth &&
                        point[1] >= scrollTop && point[1] <= scrollTop + windowHeight
                    ) {
                        inView = true;
                    }

                }
                if (!inView) return;
            }
            if (isH) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 39) _this.swipeNext();
                if (kc === 37) _this.swipePrev();
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) _this.swipeNext();
                if (kc === 38) _this.swipePrev();
            }
        }

        _this.disableKeyboardControl = function () {
            params.keyboardControl = false;
            _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys);
        };

        _this.enableKeyboardControl = function () {
            params.keyboardControl = true;
            _this.h.addEventListener(document, 'keydown', handleKeyboardKeys);
        };

/*==========================================
Mousewheel Control
============================================*/
        var lastScrollTime = (new Date()).getTime();

        function handleMousewheel(e) {
            var we = _this._wheelEvent;
            var delta = 0;

            //Opera & IE
            if (e.detail) delta = -e.detail;
            //WebKits
            else if (we === 'mousewheel') {
                if (params.mousewheelControlForceToAxis) {
                    if (isH) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                        else return;
                    } else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                        else return;
                    }
                } else {
                    delta = e.wheelDelta;
                }
            }
            //Old FireFox
            else if (we === 'DOMMouseScroll') delta = -e.detail;
            //New FireFox
            else if (we === 'wheel') {
                if (params.mousewheelControlForceToAxis) {
                    if (isH) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                        else return;
                    } else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                        else return;
                    }
                } else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                }
            }

            if (!params.freeMode) {
                if ((new Date()).getTime() - lastScrollTime > 60) {
                    if (delta < 0) _this.swipeNext();
                    else _this.swipePrev();
                }
                lastScrollTime = (new Date()).getTime();

            } else {
                //Freemode or scrollContainer:
                var position = _this.getWrapperTranslate() + delta;

                if (position > 0) position = 0;
                if (position < -maxWrapperPosition()) position = -maxWrapperPosition();

                _this.setWrapperTransition(0);
                _this.setWrapperTranslate(position);
                _this.updateActiveSlide(position);

                // Return page scroll on edge positions
                if (position === 0 || position === -maxWrapperPosition()) return;
            }
            if (params.autoplay) _this.stopAutoplay(true);

            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }

/*=========================
Grab Cursor
===========================*/
        if (params.grabCursor) {
            var containerStyle = _this.container.style;
            containerStyle.cursor = 'move';
            containerStyle.cursor = 'grab';
            containerStyle.cursor = '-moz-grab';
            containerStyle.cursor = '-webkit-grab';
        }

/*=========================
Slides Events Handlers
===========================*/

        _this.allowSlideClick = true;

        function slideClick(event) {
            if (_this.allowSlideClick) {
                setClickedSlide(event);
                _this.fireCallback(params.onSlideClick, _this, event);
            }
        }

        function slideTouch(event) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideTouch, _this, event);
        }

        function setClickedSlide(event) {

            // IE 6-8 support
            if (!event.currentTarget) {
                var element = event.srcElement;
                do {
                    if (element.className.indexOf(params.slideClass) > -1) {
                        break;
                    }
                    element = element.parentNode;
                } while (element);
                _this.clickedSlide = element;
            } else {
                _this.clickedSlide = event.currentTarget;
            }

            _this.clickedSlideIndex = _this.slides.indexOf(_this.clickedSlide);
            _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
        }

        _this.allowLinks = true;

        function preventClick(e) {
            if (!_this.allowLinks) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                if (params.preventLinksPropagation && 'stopPropagation' in e) {
                    e.stopPropagation();
                }
                return false;
            }
        }

        function releaseForms(e) {
            if (e.stopPropagation) e.stopPropagation();
            else e.returnValue = false;
            return false;

        }

/*==================================================
Event Handlers
====================================================*/
        var isTouchEvent = false;
        var allowThresholdMove;
        var allowMomentumBounce = true;

        function onTouchStart(event) {
            if (params.preventLinks) _this.allowLinks = true;
            //Exit if slider is already was touched
            if (_this.isTouched || params.onlyExternal) {
                return false;
            }

            if (params.noSwiping && (event.target || event.srcElement) && noSwipingSlide(event.target || event.srcElement)) return false;
            allowMomentumBounce = false;
            //Check For Nested Swipers
            _this.isTouched = true;
            isTouchEvent = event.type === 'touchstart';

            if (!isTouchEvent || event.targetTouches.length === 1) {
                _this.callPlugins('onTouchStartBegin');

                if (!isTouchEvent && !_this.isAndroid) {
                    if (event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }

                var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
                var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

                //Start Touches to check the scrolling
                _this.touches.startX = _this.touches.currentX = pageX;
                _this.touches.startY = _this.touches.currentY = pageY;

                _this.touches.start = _this.touches.current = isH ? pageX : pageY;

                //Set Transition Time to 0
                _this.setWrapperTransition(0);

                //Get Start Translate Position
                _this.positions.start = _this.positions.current = _this.getWrapperTranslate();

                //Set Transform
                _this.setWrapperTranslate(_this.positions.start);

                //TouchStartTime
                _this.times.start = (new Date()).getTime();

                //Unset Scrolling
                isScrolling = undefined;

                //Set Treshold
                if (params.moveStartThreshold > 0) {
                    allowThresholdMove = false;
                }

                //CallBack
                if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this);
                _this.callPlugins('onTouchStartEnd');

            }
        }
        var velocityPrevPosition, velocityPrevTime;

        function onTouchMove(event) {
            // If slider is not touched - exit
            if (!_this.isTouched || params.onlyExternal) return;
            if (isTouchEvent && event.type === 'mousemove') return;

            var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            //check for scrolling
            if (typeof isScrolling === 'undefined' && isH) {
                isScrolling = !! (isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX));
            }
            if (typeof isScrolling === 'undefined' && !isH) {
                isScrolling = !! (isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX));
            }
            if (isScrolling) {
                _this.isTouched = false;
                return;
            }

            //Check For Nested Swipers
            if (event.assignedToSwiper) {
                _this.isTouched = false;
                return;
            }
            event.assignedToSwiper = true;

            //Block inner links
            if (params.preventLinks) {
                _this.allowLinks = false;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = false;
            }

            //Stop AutoPlay if exist
            if (params.autoplay) {
                _this.stopAutoplay(true);
            }
            if (!isTouchEvent || event.touches.length === 1) {

                //Moved Flag
                if (!_this.isMoved) {
                    _this.callPlugins('onTouchMoveStart');

                    if (params.loop) {
                        _this.fixLoop();
                        _this.positions.start = _this.getWrapperTranslate();
                    }
                    if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
                }
                _this.isMoved = true;

                // cancel event
                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;

                _this.touches.current = isH ? pageX : pageY;

                _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;

                //Resistance Callbacks
                if (_this.positions.current > 0 && params.onResistanceBefore) {
                    _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
                }
                if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {
                    _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
                }
                //Resistance
                if (params.resistance && params.resistance !== '100%') {
                    var resistance;
                    //Resistance for Negative-Back sliding
                    if (_this.positions.current > 0) {
                        resistance = 1 - _this.positions.current / containerSize / 2;
                        if (resistance < 0.5)
                            _this.positions.current = (containerSize / 2);
                        else
                            _this.positions.current = _this.positions.current * resistance;
                    }
                    //Resistance for After-End Sliding
                    if (_this.positions.current < -maxWrapperPosition()) {

                        var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                        resistance = (containerSize + diff) / (containerSize);
                        var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                        var stopPos = -maxWrapperPosition() - containerSize / 2;

                        if (newPos < stopPos || resistance <= 0)
                            _this.positions.current = stopPos;
                        else
                            _this.positions.current = newPos;
                    }
                }
                if (params.resistance && params.resistance === '100%') {
                    //Resistance for Negative-Back sliding
                    if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {
                        _this.positions.current = 0;
                    }
                    //Resistance for After-End Sliding
                    if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {
                        _this.positions.current = -maxWrapperPosition();
                    }
                }
                //Move Slides
                if (!params.followFinger) return;

                if (!params.moveStartThreshold) {
                    _this.setWrapperTranslate(_this.positions.current);
                } else {
                    if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                        if (!allowThresholdMove) {
                            allowThresholdMove = true;
                            _this.touches.start = _this.touches.current;
                            return;
                        }
                        _this.setWrapperTranslate(_this.positions.current);
                    } else {
                        _this.positions.current = _this.positions.start;
                    }
                }

                if (params.freeMode || params.watchActiveIndex) {
                    _this.updateActiveSlide(_this.positions.current);
                }

                //Grab Cursor
                if (params.grabCursor) {
                    _this.container.style.cursor = 'move';
                    _this.container.style.cursor = 'grabbing';
                    _this.container.style.cursor = '-moz-grabbin';
                    _this.container.style.cursor = '-webkit-grabbing';
                }
                //Velocity
                if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
                if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime();
                _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2;
                if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
                velocityPrevPosition = _this.touches.current;
                velocityPrevTime = (new Date()).getTime();
                //Callbacks
                _this.callPlugins('onTouchMoveEnd');
                if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this);

                return false;
            }
        }

        function onTouchEnd(event) {
            //Check For scrolling
            if (isScrolling) {
                _this.swipeReset();
            }
            // If slider is not touched exit
            if (params.onlyExternal || !_this.isTouched) return;
            _this.isTouched = false;

            //Return Grab Cursor
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grab';
                _this.container.style.cursor = '-moz-grab';
                _this.container.style.cursor = '-webkit-grab';
            }

            //Check for Current Position
            if (!_this.positions.current && _this.positions.current !== 0) {
                _this.positions.current = _this.positions.start;
            }

            //For case if slider touched but not moved
            if (params.followFinger) {
                _this.setWrapperTranslate(_this.positions.current);
            }

            // TouchEndTime
            _this.times.end = (new Date()).getTime();

            //Difference
            _this.touches.diff = _this.touches.current - _this.touches.start;
            _this.touches.abs = Math.abs(_this.touches.diff);

            _this.positions.diff = _this.positions.current - _this.positions.start;
            _this.positions.abs = Math.abs(_this.positions.diff);

            var diff = _this.positions.diff;
            var diffAbs = _this.positions.abs;
            var timeDiff = _this.times.end - _this.times.start;

            if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {
                if (!params.freeMode && diffAbs !== 0) _this.swipeReset();
                //Release inner links
                if (params.preventLinks) {
                    _this.allowLinks = true;
                }
                if (params.onSlideClick) {
                    _this.allowSlideClick = true;
                }
            }

            setTimeout(function () {
                //Release inner links
                if (params.preventLinks) {
                    _this.allowLinks = true;
                }
                if (params.onSlideClick) {
                    _this.allowSlideClick = true;
                }
            }, 100);

            var maxPosition = maxWrapperPosition();

            //Not moved or Prevent Negative Back Sliding/After-End Sliding
            if (!_this.isMoved && params.freeMode) {
                _this.isMoved = false;
                if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
                _this.callPlugins('onTouchEnd');
                return;
            }
            if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
                _this.swipeReset();
                if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
                _this.callPlugins('onTouchEnd');
                return;
            }

            _this.isMoved = false;

            //Free Mode
            if (params.freeMode) {
                if (params.freeModeFluid) {
                    var momentumDuration = 1000 * params.momentumRatio;
                    var momentumDistance = _this.velocity * momentumDuration;
                    var newPosition = _this.positions.current + momentumDistance;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                    if (newPosition < -maxPosition) {
                        if (params.momentumBounce && _this.support.transitions) {
                            if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                            afterBouncePosition = -maxPosition;
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else newPosition = -maxPosition;
                    }
                    if (newPosition > 0) {
                        if (params.momentumBounce && _this.support.transitions) {
                            if (newPosition > bounceAmount) newPosition = bounceAmount;
                            afterBouncePosition = 0;
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else newPosition = 0;
                    }
                    //Fix duration
                    if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity);

                    _this.setWrapperTranslate(newPosition);

                    _this.setWrapperTransition(momentumDuration);

                    if (params.momentumBounce && doBounce) {
                        _this.wrapperTransitionEnd(function () {
                            if (!allowMomentumBounce) return;
                            if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this);
                            _this.callPlugins('onMomentumBounce');

                            _this.setWrapperTranslate(afterBouncePosition);
                            _this.setWrapperTransition(300);
                        });
                    }

                    _this.updateActiveSlide(newPosition);
                }
                if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current);

                if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
                _this.callPlugins('onTouchEnd');
                return;
            }

            //Direction
            direction = diff < 0 ? 'toNext' : 'toPrev';

            //Short Touches
            if (direction === 'toNext' && (timeDiff <= 300)) {
                if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
                else _this.swipeNext(true);
            }

            if (direction === 'toPrev' && (timeDiff <= 300)) {
                if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
                else _this.swipePrev(true);
            }

            //Long Touches
            var targetSlideSize = 0;
            if (params.slidesPerView === 'auto') {
                //Define current slide's width
                var currentPosition = Math.abs(_this.getWrapperTranslate());
                var slidesOffset = 0;
                var _slideSize;
                for (var i = 0; i < _this.slides.length; i++) {
                    _slideSize = isH ? _this.slides[i].getWidth(true) : _this.slides[i].getHeight(true);
                    slidesOffset += _slideSize;
                    if (slidesOffset > currentPosition) {
                        targetSlideSize = _slideSize;
                        break;
                    }
                }
                if (targetSlideSize > containerSize) targetSlideSize = containerSize;
            } else {
                targetSlideSize = slideSize * params.slidesPerView;
            }
            if (direction === 'toNext' && (timeDiff > 300)) {
                if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                    _this.swipeNext(true);
                } else {
                    _this.swipeReset();
                }
            }
            if (direction === 'toPrev' && (timeDiff > 300)) {
                if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                    _this.swipePrev(true);
                } else {
                    _this.swipeReset();
                }
            }
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
        }


/*==================================================
noSwiping Bubble Check by Isaac Strack
====================================================*/
        function noSwipingSlide(el) {
            /*This function is specifically designed to check the parent elements for the noSwiping class, up to the wrapper.
    We need to check parents because while onTouchStart bubbles, _this.isTouched is checked in onTouchStart, which stops the bubbling.
    So, if a text box, for example, is the initial target, and the parent slide container has the noSwiping class, the _this.isTouched
    check will never find it, and what was supposed to be noSwiping is able to be swiped.
    This function will iterate up and check for the noSwiping class in parents, up through the wrapperClass.*/

            // First we create a truthy variable, which is that swiping is allowd (noSwiping = false)
            var noSwiping = false;

            // Now we iterate up (parentElements) until we reach the node with the wrapperClass.
            do {

                // Each time, we check to see if there's a 'swiper-no-swiping' class (noSwipingClass).
                if (el.className.indexOf(params.noSwipingClass) > -1) {
                    noSwiping = true; // If there is, we set noSwiping = true;
                }

                el = el.parentElement; // now we iterate up (parent node)

            } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) === -1); // also include el.parentElement truthy, just in case.

            // because we didn't check the wrapper itself, we do so now, if noSwiping is false:
            if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1)
                noSwiping = true; // if the wrapper has the noSwipingClass, we set noSwiping = true;

            return noSwiping;
        }

        function addClassToHtmlString(klass, outerHtml) {
            var par = document.createElement('div');
            var child;

            par.innerHTML = outerHtml;
            child = par.firstChild;
            child.className += ' ' + klass;

            return child.outerHTML;
        }


/*==================================================
Swipe Functions
====================================================*/
        _this.swipeNext = function (internal) {
            if (!internal && params.loop) _this.fixLoop();
            if (!internal && params.autoplay) _this.stopAutoplay(true);
            _this.callPlugins('onSwipeNext');
            var currentPosition = _this.getWrapperTranslate();
            var newPosition = currentPosition;
            if (params.slidesPerView === 'auto') {
                for (var i = 0; i < _this.snapGrid.length; i++) {
                    if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        newPosition = -_this.snapGrid[i + 1];
                        break;
                    }
                }
            } else {
                var groupSize = slideSize * params.slidesPerGroup;
                newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
            }
            if (newPosition < -maxWrapperPosition()) {
                newPosition = -maxWrapperPosition();
            }
            if (newPosition === currentPosition) return false;
            swipeToPosition(newPosition, 'next');
            return true;
        };
        _this.swipePrev = function (internal) {
            if (!internal && params.loop) _this.fixLoop();
            if (!internal && params.autoplay) _this.stopAutoplay(true);
            _this.callPlugins('onSwipePrev');

            var currentPosition = Math.ceil(_this.getWrapperTranslate());
            var newPosition;
            if (params.slidesPerView === 'auto') {
                newPosition = 0;
                for (var i = 1; i < _this.snapGrid.length; i++) {
                    if (-currentPosition === _this.snapGrid[i]) {
                        newPosition = -_this.snapGrid[i - 1];
                        break;
                    }
                    if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        newPosition = -_this.snapGrid[i];
                        break;
                    }
                }
            } else {
                var groupSize = slideSize * params.slidesPerGroup;
                newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize;
            }

            if (newPosition > 0) newPosition = 0;

            if (newPosition === currentPosition) return false;
            swipeToPosition(newPosition, 'prev');
            return true;

        };
        _this.swipeReset = function () {
            _this.callPlugins('onSwipeReset');
            var currentPosition = _this.getWrapperTranslate();
            var groupSize = slideSize * params.slidesPerGroup;
            var newPosition;
            var maxPosition = -maxWrapperPosition();
            if (params.slidesPerView === 'auto') {
                newPosition = 0;
                for (var i = 0; i < _this.snapGrid.length; i++) {
                    if (-currentPosition === _this.snapGrid[i]) return;
                    if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                        if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1];
                        else newPosition = -_this.snapGrid[i];
                        break;
                    }
                }
                if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
                if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
            } else {
                newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0;
            }
            if (params.scrollContainer) {
                newPosition = currentPosition < 0 ? currentPosition : 0;
            }
            if (newPosition < -maxWrapperPosition()) {
                newPosition = -maxWrapperPosition();
            }
            if (params.scrollContainer && (containerSize > slideSize)) {
                newPosition = 0;
            }

            if (newPosition === currentPosition) return false;

            swipeToPosition(newPosition, 'reset');
            return true;
        };

        _this.swipeTo = function (index, speed, runCallbacks) {
            index = parseInt(index, 10);
            _this.callPlugins('onSwipeTo', {
                index: index,
                speed: speed
            });
            if (params.loop) index = index + _this.loopedSlides;
            var currentPosition = _this.getWrapperTranslate();
            if (index > (_this.slides.length - 1) || index < 0) return;
            var newPosition;
            if (params.slidesPerView === 'auto') {
                newPosition = -_this.slidesGrid[index];
            } else {
                newPosition = -index * slideSize;
            }
            if (newPosition < -maxWrapperPosition()) {
                newPosition = -maxWrapperPosition();
            }

            if (newPosition === currentPosition) return false;

            runCallbacks = runCallbacks === false ? false : true;
            swipeToPosition(newPosition, 'to', {
                index: index,
                speed: speed,
                runCallbacks: runCallbacks
            });
            return true;
        };

        function swipeToPosition(newPosition, action, toOptions) {
            var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed;
            var timeOld = +new Date();

            function anim() {
                var timeNew = +new Date();
                var time = timeNew - timeOld;
                currentPosition += animationStep * time / (1000 / 60);
                condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
                if (condition) {
                    _this.setWrapperTranslate(Math.round(currentPosition));
                    _this._DOMAnimating = true;
                    window.setTimeout(function () {
                        anim();
                    }, 1000 / 60);
                } else {
                    if (params.onSlideChangeEnd) _this.fireCallback(params.onSlideChangeEnd, _this);
                    _this.setWrapperTranslate(newPosition);
                    _this._DOMAnimating = false;
                }
            }

            if (_this.support.transitions || !params.DOMAnimation) {
                _this.setWrapperTranslate(newPosition);
                _this.setWrapperTransition(speed);
            } else {
                //Try the DOM animation
                var currentPosition = _this.getWrapperTranslate();
                var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
                var direction = currentPosition > newPosition ? 'toNext' : 'toPrev';
                var condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
                if (_this._DOMAnimating) return;

                anim();
            }

            //Update Active Slide Index
            _this.updateActiveSlide(newPosition);

            //Callbacks
            if (params.onSlideNext && action === 'next') {
                _this.fireCallback(params.onSlideNext, _this, newPosition);
            }
            if (params.onSlidePrev && action === 'prev') {
                _this.fireCallback(params.onSlidePrev, _this, newPosition);
            }
            //'Reset' Callback
            if (params.onSlideReset && action === 'reset') {
                _this.fireCallback(params.onSlideReset, _this, newPosition);
            }

            //'Next', 'Prev' and 'To' Callbacks
            if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true))
                slideChangeCallbacks(action);
        }
/*==================================================
Transition Callbacks
====================================================*/
        //Prevent Multiple Callbacks
        _this._queueStartCallbacks = false;
        _this._queueEndCallbacks = false;

        function slideChangeCallbacks(direction) {
            //Transition Start Callback
            _this.callPlugins('onSlideChangeStart');
            if (params.onSlideChangeStart) {
                if (params.queueStartCallbacks && _this.support.transitions) {
                    if (_this._queueStartCallbacks) return;
                    _this._queueStartCallbacks = true;
                    _this.fireCallback(params.onSlideChangeStart, _this, direction);
                    _this.wrapperTransitionEnd(function () {
                        _this._queueStartCallbacks = false;
                    });
                } else _this.fireCallback(params.onSlideChangeStart, _this, direction);
            }
            //Transition End Callback
            if (params.onSlideChangeEnd) {
                if (_this.support.transitions) {
                    if (params.queueEndCallbacks) {
                        if (_this._queueEndCallbacks) return;
                        _this._queueEndCallbacks = true;
                        _this.wrapperTransitionEnd(function (swiper) {
                            _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                        });
                    } else {
                        _this.wrapperTransitionEnd(function (swiper) {
                            _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                        });
                    }
                } else {
                    if (!params.DOMAnimation) {
                        setTimeout(function () {
                            _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                        }, 10);
                    }
                }
            }
        }

/*==================================================
Update Active Slide Index
====================================================*/
        _this.updateActiveSlide = function (position) {
            if (!_this.initialized) return;
            if (_this.slides.length === 0) return;
            _this.previousIndex = _this.activeIndex;
            if (typeof position === 'undefined') position = _this.getWrapperTranslate();
            if (position > 0) position = 0;

            if (params.slidesPerView === 'auto') {
                var slidesOffset = 0;
                _this.activeIndex = _this.slidesGrid.indexOf(-position);
                if (_this.activeIndex < 0) {
                    for (var i = 0; i < _this.slidesGrid.length - 1; i++) {
                        if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {
                            break;
                        }
                    }
                    var leftDistance = Math.abs(_this.slidesGrid[i] + position);
                    var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position);
                    if (leftDistance <= rightDistance) _this.activeIndex = i;
                    else _this.activeIndex = i + 1;
                }
            } else {
                _this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize);
            }

            if (_this.activeIndex === _this.slides.length) _this.activeIndex = _this.slides.length - 1;
            if (_this.activeIndex < 0) _this.activeIndex = 0;

            // Check for slide
            if (!_this.slides[_this.activeIndex]) return;

            // Calc Visible slides
            _this.calcVisibleSlides(position);

            // Mark visible and active slides with additonal classes
            var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass);
            var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass);

            for (var j = 0; j < _this.slides.length; j++) {
                _this.slides[j].className = _this.slides[j].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
                if (_this.visibleSlides.indexOf(_this.slides[j]) >= 0) {
                    _this.slides[j].className += ' ' + params.slideVisibleClass;
                }

            }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;

            //Update loop index
            if (params.loop) {
                var ls = _this.loopedSlides;
                _this.activeLoopIndex = _this.activeIndex - ls;
                if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {
                    _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex;
                }
                if (_this.activeLoopIndex < 0) {
                    _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex;
                }
                if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0;
            } else {
                _this.activeLoopIndex = _this.activeIndex;
            }
            //Update Pagination
            if (params.pagination) {
                _this.updatePagination(position);
            }
        };
/*==================================================
Pagination
====================================================*/
        _this.createPagination = function (firstInit) {
            if (params.paginationClickable && _this.paginationButtons) {
                removePaginationEvents();
            }
            _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0];
            if (params.createPagination) {
                var paginationHTML = '';
                var numOfSlides = _this.slides.length;
                var numOfButtons = numOfSlides;
                if (params.loop) numOfButtons -= _this.loopedSlides * 2;
                for (var i = 0; i < numOfButtons; i++) {
                    paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>';
                }
                _this.paginationContainer.innerHTML = paginationHTML;
            }
            _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
            if (!firstInit) _this.updatePagination();
            _this.callPlugins('onCreatePagination');
            if (params.paginationClickable) {
                addPaginationEvents();
            }
        };

        function removePaginationEvents() {
            var pagers = _this.paginationButtons;
            if (pagers) {
                for (var i = 0; i < pagers.length; i++) {
                    _this.h.removeEventListener(pagers[i], 'click', paginationClick);
                }
            }
        }

        function addPaginationEvents() {
            var pagers = _this.paginationButtons;
            if (pagers) {
                for (var i = 0; i < pagers.length; i++) {
                    _this.h.addEventListener(pagers[i], 'click', paginationClick);
                }
            }
        }

        function paginationClick(e) {
            var index;
            var target = e.target || e.srcElement;
            var pagers = _this.paginationButtons;
            for (var i = 0; i < pagers.length; i++) {
                if (target === pagers[i]) index = i;
            }
            _this.swipeTo(index);
        }
        _this.updatePagination = function (position) {
            if (!params.pagination) return;
            if (_this.slides.length < 1) return;
            var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
            if (!activePagers) return;

            //Reset all Buttons' class to not active
            var pagers = _this.paginationButtons;
            if (pagers.length === 0) return;
            for (var i = 0; i < pagers.length; i++) {
                pagers[i].className = params.paginationElementClass;
            }

            var indexOffset = params.loop ? _this.loopedSlides : 0;
            if (params.paginationAsRange) {
                if (!_this.visibleSlides) _this.calcVisibleSlides(position);
                //Get Visible Indexes
                var visibleIndexes = [];
                var j; // lopp index - avoid JSHint W004 / W038
                for (j = 0; j < _this.visibleSlides.length; j++) {
                    var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset;

                    if (params.loop && visIndex < 0) {
                        visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex;
                    }
                    if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                        visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                        visIndex = Math.abs(visIndex);
                    }
                    visibleIndexes.push(visIndex);
                }

                for (j = 0; j < visibleIndexes.length; j++) {
                    if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass;
                }

                if (params.loop) {
                    if (pagers[_this.activeLoopIndex] !== undefined) {
                        pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass;
                    }
                } else {
                    pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass;
                }
            } else {
                if (params.loop) {
                    if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
                } else {
                    pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
                }
            }
        };
        _this.calcVisibleSlides = function (position) {
            var visibleSlides = [];
            var _slideLeft = 0,
                _slideSize = 0,
                _slideRight = 0;
            if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
            if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;

            for (var i = 0; i < _this.slides.length; i++) {
                _slideLeft += _slideSize;
                if (params.slidesPerView === 'auto')
                    _slideSize = isH ? _this.h.getWidth(_this.slides[i], true) : _this.h.getHeight(_this.slides[i], true);
                else _slideSize = slideSize;

                _slideRight = _slideLeft + _slideSize;
                var isVisibile = false;
                if (params.visibilityFullFit) {
                    if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true;
                    if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true;
                } else {
                    if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true;
                    if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true;
                    if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true;
                }

                if (isVisibile) visibleSlides.push(_this.slides[i]);

            }
            if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]];

            _this.visibleSlides = visibleSlides;
        };

/*==========================================
Autoplay
============================================*/
        var autoplayTimeoutId, autoplayIntervalId;
        _this.startAutoplay = function () {
            if (_this.support.transitions) {
                if (typeof autoplayTimeoutId !== 'undefined') return false;
                if (!params.autoplay) return;
                _this.callPlugins('onAutoplayStart');
                autoplay();
            } else {
                if (typeof autoplayIntervalId !== 'undefined') return false;
                if (!params.autoplay) return;
                _this.callPlugins('onAutoplayStart');
                autoplayIntervalId = setInterval(function () {
                    if (params.loop) {
                        _this.fixLoop();
                        _this.swipeNext(true);
                    } else if (!_this.swipeNext(true)) {
                        if (!params.autoplayStopOnLast) _this.swipeTo(0);
                        else {
                            clearInterval(autoplayIntervalId);
                            autoplayIntervalId = undefined;
                        }
                    }
                }, params.autoplay);
            }
        };
        _this.stopAutoplay = function (internal) {
            if (_this.support.transitions) {
                if (!autoplayTimeoutId) return;
                if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId);
                autoplayTimeoutId = undefined;
                if (internal && !params.autoplayDisableOnInteraction) {
                    _this.wrapperTransitionEnd(function () {
                        autoplay();
                    });
                }
                _this.callPlugins('onAutoplayStop');
            } else {
                if (autoplayIntervalId) clearInterval(autoplayIntervalId);
                autoplayIntervalId = undefined;
                _this.callPlugins('onAutoplayStop');
            }
        };

        function autoplay() {
            autoplayTimeoutId = setTimeout(function () {
                if (params.loop) {
                    _this.fixLoop();
                    _this.swipeNext(true);
                } else if (!_this.swipeNext(true)) {
                    if (!params.autoplayStopOnLast) _this.swipeTo(0);
                    else {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                    }
                }
                _this.wrapperTransitionEnd(function () {
                    if (typeof autoplayTimeoutId !== 'undefined') autoplay();
                });
            }, params.autoplay);
        }
/*==================================================
Loop
====================================================*/
        _this.loopCreated = false;
        _this.removeLoopedSlides = function () {
            if (_this.loopCreated) {
                for (var i = 0; i < _this.slides.length; i++) {
                    if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]);
                }
            }
        };

        _this.createLoop = function () {
            if (_this.slides.length === 0) return;
            if (params.slidesPerView === 'auto') {
                _this.loopedSlides = params.loopedSlides || 1;
            } else {
                _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
            }

            if (_this.loopedSlides > _this.slides.length) {
                _this.loopedSlides = _this.slides.length;
            }

            var slideFirstHTML = '',
                slideLastHTML = '',
                i;
            var slidesSetFullHTML = '';
            /**
            loopedSlides is too large if loopAdditionalSlides are set.
            Need to divide the slides by maximum number of slides existing.

            @author        Tomaz Lovrec <tomaz.lovrec@blanc-noir.at>
    */
            var numSlides = _this.slides.length;
            var fullSlideSets = Math.floor(_this.loopedSlides / numSlides);
            var remainderSlides = _this.loopedSlides % numSlides;
            // assemble full sets of slides
            for (i = 0; i < (fullSlideSets * numSlides); i++) {
                var j = i;
                if (i >= numSlides) {
                    var over = Math.floor(i / numSlides);
                    j = i - (numSlides * over);
                }
                slidesSetFullHTML += _this.slides[j].outerHTML;
            }
            // assemble remainder slides
            // assemble remainder appended to existing slides
            for (i = 0; i < remainderSlides; i++) {
                slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
            }
            // assemble slides that get preppended to existing slides
            for (i = numSlides - remainderSlides; i < numSlides; i++) {
                slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
            }
            // assemble all slides
            var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML;
            // set the slides
            wrapper.innerHTML = slides;

            _this.loopCreated = true;
            _this.calcSlides();

            //Update Looped Slides with special class
            for (i = 0; i < _this.slides.length; i++) {
                if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true);
            }
            _this.callPlugins('onCreateLoop');

        };

        _this.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (_this.activeIndex < _this.loopedSlides) {
                newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
                _this.swipeTo(newIndex, 0, false);
            }
            //Fix For Positive Oversliding
            else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {
                newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides;
                _this.swipeTo(newIndex, 0, false);
            }
        };

/*==================================================
Slides Loader
====================================================*/
        _this.loadSlides = function () {
            var slidesHTML = '';
            _this.activeLoaderIndex = 0;
            var slides = params.loader.slides;
            var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups);
            for (var i = 0; i < slidesToLoad; i++) {
                if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i];
                else {
                    slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
                }
            }
            _this.wrapper.innerHTML = slidesHTML;
            _this.calcSlides(true);
            //Add permanent transitionEnd callback
            if (!params.loader.loadAllSlides) {
                _this.wrapperTransitionEnd(_this.reloadSlides, true);
            }
        };

        _this.reloadSlides = function () {
            var slides = params.loader.slides;
            var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10);
            if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return; //<-- Exit
            _this.activeLoaderIndex = newActiveIndex;
            var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups);
            var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1);
            //Update Transforms
            if (newActiveIndex > 0) {
                var newTransform = -slideSize * (newActiveIndex - firstIndex);
                _this.setWrapperTranslate(newTransform);
                _this.setWrapperTransition(0);
            }
            var i; // loop index
            //New Slides
            if (params.loader.logic === 'reload') {
                _this.wrapper.innerHTML = '';
                var slidesHTML = '';
                for (i = firstIndex; i <= lastIndex; i++) {
                    slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
                }
                _this.wrapper.innerHTML = slidesHTML;
            } else {
                var minExistIndex = 1000;
                var maxExistIndex = 0;

                for (i = 0; i < _this.slides.length; i++) {
                    var index = _this.slides[i].data('swiperindex');
                    if (index < firstIndex || index > lastIndex) {
                        _this.wrapper.removeChild(_this.slides[i]);
                    } else {
                        minExistIndex = Math.min(index, minExistIndex);
                        maxExistIndex = Math.max(index, maxExistIndex);
                    }
                }
                for (i = firstIndex; i <= lastIndex; i++) {
                    var newSlide;
                    if (i < minExistIndex) {
                        newSlide = document.createElement(params.slideElement);
                        newSlide.className = params.slideClass;
                        newSlide.setAttribute('data-swiperindex', i);
                        newSlide.innerHTML = slides[i];
                        _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                    }
                    if (i > maxExistIndex) {
                        newSlide = document.createElement(params.slideElement);
                        newSlide.className = params.slideClass;
                        newSlide.setAttribute('data-swiperindex', i);
                        newSlide.innerHTML = slides[i];
                        _this.wrapper.appendChild(newSlide);
                    }
                }
            }
            //reInit
            _this.reInit(true);
        };

/*==================================================
Make Swiper
====================================================*/
        function makeSwiper() {
            _this.calcSlides();
            if (params.loader.slides.length > 0 && _this.slides.length === 0) {
                _this.loadSlides();
            }
            if (params.loop) {
                _this.createLoop();
            }
            _this.init();
            initEvents();
            if (params.pagination) {
                _this.createPagination(true);
            }

            if (params.loop || params.initialSlide > 0) {
                _this.swipeTo(params.initialSlide, 0, false);
            } else {
                _this.updateActiveSlide(0);
            }
            if (params.autoplay) {
                _this.startAutoplay();
            }
            /**
             * Set center slide index.
             *
             * @author        Tomaz Lovrec <tomaz.lovrec@gmail.com>
             */
            _this.centerIndex = _this.activeIndex;

            // Callbacks
            if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this);
            _this.callPlugins('onSwiperCreated');
        }

        makeSwiper();
    };

    Swiper.prototype = {
        plugins: {},

/*==================================================
Wrapper Operations
====================================================*/
        wrapperTransitionEnd: function (callback, permanent) {
            'use strict';
            var a = this,
                el = a.wrapper,
                events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                i;

            function fireCallBack() {
                callback(a);
                if (a.params.queueEndCallbacks) a._queueEndCallbacks = false;
                if (!permanent) {
                    for (i = 0; i < events.length; i++) {
                        a.h.removeEventListener(el, events[i], fireCallBack);
                    }
                }
            }

            if (callback) {
                for (i = 0; i < events.length; i++) {
                    a.h.addEventListener(el, events[i], fireCallBack);
                }
            }
        },

        getWrapperTranslate: function (axis) {
            'use strict';
            var el = this.wrapper,
                matrix, curTransform, curStyle, transformMatrix;

            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = this.params.mode === 'horizontal' ? 'x' : 'y';
            }

            if (this.support.transforms && this.params.useCSS3Transforms) {
                curStyle = window.getComputedStyle(el, null);
                if (window.WebKitCSSMatrix) {
                    transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform);
                } else {
                    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                    matrix = transformMatrix.toString().split(',');
                }

                if (axis === 'x') {
                    //Latest Chrome and webkits Fix
                    if (window.WebKitCSSMatrix)
                        curTransform = transformMatrix.m41;
                    //Crazy IE10 Matrix
                    else if (matrix.length === 16)
                        curTransform = parseFloat(matrix[12]);
                    //Normal Browsers
                    else
                        curTransform = parseFloat(matrix[4]);
                }
                if (axis === 'y') {
                    //Latest Chrome and webkits Fix
                    if (window.WebKitCSSMatrix)
                        curTransform = transformMatrix.m42;
                    //Crazy IE10 Matrix
                    else if (matrix.length === 16)
                        curTransform = parseFloat(matrix[13]);
                    //Normal Browsers
                    else
                        curTransform = parseFloat(matrix[5]);
                }
            } else {
                if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0;
                if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0;
            }
            return curTransform || 0;
        },

        setWrapperTranslate: function (x, y, z) {
            'use strict';
            var es = this.wrapper.style,
                coords = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                translate;

            // passed all coordinates
            if (arguments.length === 3) {
                coords.x = x;
                coords.y = y;
                coords.z = z;
            }

            // passed one coordinate and optional axis
            else {
                if (typeof y === 'undefined') {
                    y = this.params.mode === 'horizontal' ? 'x' : 'y';
                }
                coords[y] = x;
            }

            if (this.support.transforms && this.params.useCSS3Transforms) {
                translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
                es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
            } else {
                es.left = coords.x + 'px';
                es.top = coords.y + 'px';
            }
            this.callPlugins('onSetWrapperTransform', coords);
            if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
        },

        setWrapperTransition: function (duration) {
            'use strict';
            var es = this.wrapper.style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
            this.callPlugins('onSetWrapperTransition', {
                duration: duration
            });
            if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);

        },

/*==================================================
Helpers
====================================================*/
        h: {
            getWidth: function (el, outer) {
                'use strict';
                var width = window.getComputedStyle(el, null).getPropertyValue('width');
                var returnWidth = parseFloat(width);
                //IE Fixes
                if (isNaN(returnWidth) || width.indexOf('%') > 0) {
                    returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
                }
                if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));

                return returnWidth;
            },
            getHeight: function (el, outer) {
                'use strict';
                if (outer) return el.offsetHeight;

                var height = window.getComputedStyle(el, null).getPropertyValue('height');
                var returnHeight = parseFloat(height);
                //IE Fixes
                if (isNaN(returnHeight) || height.indexOf('%') > 0) {
                    returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
                }
                if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
                return returnHeight;
            },
            getOffset: function (el) {
                'use strict';
                var box = el.getBoundingClientRect();
                var body = document.body;
                var clientTop = el.clientTop || body.clientTop || 0;
                var clientLeft = el.clientLeft || body.clientLeft || 0;
                var scrollTop = window.pageYOffset || el.scrollTop;
                var scrollLeft = window.pageXOffset || el.scrollLeft;
                if (document.documentElement && !window.pageYOffset) {
                    //IE7-8
                    scrollTop = document.documentElement.scrollTop;
                    scrollLeft = document.documentElement.scrollLeft;
                }
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            },
            windowWidth: function () {
                'use strict';
                if (window.innerWidth) return window.innerWidth;
                else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
            },
            windowHeight: function () {
                'use strict';
                if (window.innerHeight) return window.innerHeight;
                else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
            },
            windowScroll: function () {
                'use strict';
                if (typeof pageYOffset !== 'undefined') {
                    return {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    };
                } else if (document.documentElement) {
                    return {
                        left: document.documentElement.scrollLeft,
                        top: document.documentElement.scrollTop
                    };
                }
            },

            addEventListener: function (el, event, listener, useCapture) {
                'use strict';
                if (typeof useCapture === 'undefined') {
                    useCapture = false;
                }

                if (el.addEventListener) {
                    el.addEventListener(event, listener, useCapture);
                } else if (el.attachEvent) {
                    el.attachEvent('on' + event, listener);
                }
            },

            removeEventListener: function (el, event, listener, useCapture) {
                'use strict';
                if (typeof useCapture === 'undefined') {
                    useCapture = false;
                }

                if (el.removeEventListener) {
                    el.removeEventListener(event, listener, useCapture);
                } else if (el.detachEvent) {
                    el.detachEvent('on' + event, listener);
                }
            }
        },
        setTransform: function (el, transform) {
            'use strict';
            var es = el.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
        },
        setTranslate: function (el, translate) {
            'use strict';
            var es = el.style;
            var pos = {
                x: translate.x || 0,
                y: translate.y || 0,
                z: translate.z || 0
            };
            var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
            if (!this.support.transforms) {
                es.left = pos.x + 'px';
                es.top = pos.y + 'px';
            }
        },
        setTransition: function (el, duration) {
            'use strict';
            var es = el.style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
        },
/*==================================================
Feature Detection
====================================================*/
        support: {

            touch: (window.Modernizr && Modernizr.touch === true) || (function () {
                'use strict';
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),

            transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                'use strict';
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),

            transforms: (window.Modernizr && Modernizr.csstransforms === true) || (function () {
                'use strict';
                var div = document.createElement('div').style;
                return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div);
            })(),

            transitions: (window.Modernizr && Modernizr.csstransitions === true) || (function () {
                'use strict';
                var div = document.createElement('div').style;
                return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div);
            })()
        },

        browser: {

            ie8: (function () {
                'use strict';
                var rv = -1; // Return value assumes failure.
                if (navigator.appName === 'Microsoft Internet Explorer') {
                    var ua = navigator.userAgent;
                    var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                    if (re.exec(ua) !== null)
                        rv = parseFloat(RegExp.$1);
                }
                return rv !== -1 && rv < 9;
            })(),

            ie10: window.navigator.msPointerEnabled,
            ie11: window.navigator.pointerEnabled
        }
    };

    $.fn.swiper = function (params) {
        var s = new Swiper($(this)[0], params);
        $(this).data('swiper', s);
        return s;
    };
//}(Zepto));