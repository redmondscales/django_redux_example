!function(t){function e(e){for(var r,i,c=e[0],f=e[1],a=e[2],p=0,s=[];p<c.length;p++)i=c[p],o[i]&&s.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(t[r]=f[r]);for(l&&l(e);s.length;)s.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var f=n[c];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={1:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],f=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var l=f;u.push([28,0]),n()}({0:function(t,e){t.exports=React},1:function(t,e,n){"use strict";function r(t,e){if(window.Components||(window.Components={}),window.Components[e])throw new Error("".concat(e," already registered as in window.Components, please use a unique key"));window.Components[e]=t}n.d(e,"a",function(){return r})},2:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u});var r={incrementCount:function(){return{type:"INCREMENT_COUNT"}}},o={count:1},u=function(t,e){switch(e.type){case"INCREMENT_COUNT":return Object.assign({},t,{count:t.count+1})}return t||o}},28:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(6),u=n(2),i=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,l(e).call(this,t))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i["Component"]),n=e,(r=[{key:"render",value:function(){return React.createElement("div",null,React.createElement("h1",null,"Displaying Redux Store counter.count: ",React.createElement("span",{id:"redux_counter_display"},this.props.count)),React.createElement("h1",null,"Text From Django: ",this.props.text_from_django," "))}}])&&f(n.prototype,r),o&&f(n,o),e}();Object(r.a)(Object(o.a)(s,"counter",u.b,u.a),"display")},6:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=n(5);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t,e,n,u){var l,p,s;window.Reducers||(window.Reducers=[]),window.Reducers.push((s=n,(p=e)in(l={})?Object.defineProperty(l,p,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[p]=s,l));var y=Object(o.b)(function(t){return t[e]},u)(t);return function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,f(e).apply(this,arguments))}var n,u,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,r["Component"]),n=e,(u=[{key:"render",value:function(){return React.createElement(o.a,{store:window.store},React.createElement(y,this.props))}}])&&i(n.prototype,u),l&&i(n,l),e}()}},9:function(t,e){t.exports=ReactDOM}});