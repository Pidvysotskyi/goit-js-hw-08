function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,a,i,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,u=setTimeout(O,t),c?y(e):i}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function O(){var e=g();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?d(n,a-(e-l)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=r=void 0,i)}function w(){var e=g(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?i:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]'),O=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state")&&(S.value=O.email,j.value=O.message),y.addEventListener("input",e(t)((function(e){const t={email:S.value,message:j.value};"email"===e.target.name&&(t.email=e.target.value);"message"===e.target.name&&(t.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),S.value="",j.value=""}));
//# sourceMappingURL=03-feedback.f93cb79a.js.map