!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={amiiboForm:document.getElementById("amiibo-form"),amiiboName:document.getElementById("amiibo-name"),displayArea:document.getElementById("test")}},function(e,t,n){"use strict";n.r(t);var i=n(0);i.a.amiiboForm.addEventListener("keypress",(function(e){13===even.keyCode&&(e.preventDefault(),document.querySelector(".btn").click())})),i.a.amiiboForm.addEventListener("submit",(async function(e){e.preventDefault();const t=`https://www.amiiboapi.com/api/amiibo/?character=${i.a.amiiboName.value}`;try{const e=await fetch(t),n=await e.json();i.a.displayArea.innerHTML="",n.amiibo.forEach(e=>{i.a.displayArea.insertAdjacentHTML("beforeend",`<ul class="display-amiibo">\n            <li class="display-name">${e.character}</li>\n            <li class="display-series">${e.amiiboSeries}</li>\n            <img class="display-image" src="${e.image}" alt="">\n          </ul>`)}),console.log(n.amiibo[0])}catch(e){console.log(e)}}))}]);