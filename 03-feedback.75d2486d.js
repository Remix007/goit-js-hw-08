!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function O(e){return l=e,f=setTimeout(T,t),s?p(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function w(){var e=g(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(T,t),p(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form");document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea");O.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message,o={email:n.value,message:r.value};console.log(o),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),O.addEventListener("input",e(t)((function(){var e=O.elements,t=e.email,n=e.message,r={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500)),function(){var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(e){var n=O.elements;for(var r in t)t.hasOwnProperty(r)&&(n[r].value=t[r])}}()}();
//# sourceMappingURL=03-feedback.75d2486d.js.map
