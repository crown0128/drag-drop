!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.DragDrop=e()}}(function(){return function e(t,n,o){function r(a,u){if(!n[a]){if(!t[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({"./":[function(e,t){function n(e,t){"string"==typeof e&&(e=document.querySelector(e)),e.addEventListener("dragenter",o,!1),e.addEventListener("dragover",r(e),!1),e.addEventListener("drop",i.bind(void 0,e,t),!1)}function o(e){return e.stopPropagation(),e.preventDefault(),!1}function r(e){var t=a(function(){e.classList.add("drag"),e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.classList.remove("drag")},150)},100,{trailing:!1});return function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy",t()}}function i(e,t,n){return n.stopPropagation(),n.preventDefault(),e.classList.remove("drag"),t(Array.prototype.slice.call(n.dataTransfer.files)),!1}t.exports=n;var a=e("lodash.throttle")},{"lodash.throttle":1}],1:[function(e,t){function n(e,t,n){var u=!0,f=!0;if(!r(e))throw new TypeError;return n===!1?u=!1:i(n)&&(u="leading"in n?n.leading:u,f="trailing"in n?n.trailing:f),a.leading=u,a.maxWait=t,a.trailing=f,o(e,t,a)}var o=e("lodash.debounce"),r=e("lodash.isfunction"),i=e("lodash.isobject"),a={leading:!1,maxWait:0,trailing:!1};t.exports=n},{"lodash.debounce":2,"lodash.isfunction":5,"lodash.isobject":6}],2:[function(e,t){function n(e,t,n){var u,f,s,l,c,d,p,v=0,g=!1,m=!0;if(!o(e))throw new TypeError;if(t=a(0,t)||0,n===!0){var h=!0;m=!1}else r(n)&&(h=n.leading,g="maxWait"in n&&(a(t,n.maxWait)||0),m="trailing"in n?n.trailing:m);var y=function(){var n=t-(i()-l);if(0>=n){f&&clearTimeout(f);var o=p;f=d=p=void 0,o&&(v=i(),s=e.apply(c,u),d||f||(u=c=null))}else d=setTimeout(y,n)},x=function(){d&&clearTimeout(d),f=d=p=void 0,(m||g!==t)&&(v=i(),s=e.apply(c,u),d||f||(u=c=null))};return function(){if(u=arguments,l=i(),c=this,p=m&&(d||!h),g===!1)var n=h&&!d;else{f||h||(v=l);var o=g-(l-v),r=0>=o;r?(f&&(f=clearTimeout(f)),v=l,s=e.apply(c,u)):f||(f=setTimeout(x,o))}return r&&d?d=clearTimeout(d):d||t===g||(d=setTimeout(y,t)),n&&(r=!0,s=e.apply(c,u)),!r||d||f||(u=c=null),s}}var o=e("lodash.isfunction"),r=e("lodash.isobject"),i=e("lodash.now"),a=Math.max;t.exports=n},{"lodash.isfunction":5,"lodash.isobject":6,"lodash.now":3}],3:[function(e,t){var n=e("lodash._isnative"),o=n(o=Date.now)&&o||function(){return(new Date).getTime()};t.exports=o},{"lodash._isnative":4}],4:[function(e,t){function n(e){return"function"==typeof e&&i.test(e)}var o=Object.prototype,r=o.toString,i=RegExp("^"+String(r).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");t.exports=n},{}],5:[function(e,t){function n(e){return"function"==typeof e}t.exports=n},{}],6:[function(e,t){function n(e){return!(!e||!o[typeof e])}var o=e("lodash._objecttypes");t.exports=n},{"lodash._objecttypes":7}],7:[function(e,t){var n={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};t.exports=n},{}]},{},[])("./")});