!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define("InstagramLogin",["React"],t):"object"==typeof exports?exports.InstagramLogin=t(require("React")):e.InstagramLogin=t(e.React)}(self,(function(e){return(()=>{"use strict";var t={629:function(e,t,r){var o=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.InstagramLogin=void 0;const n=r(24),i=r(32),c=r(928);t.InstagramLogin=function(e){var{clientId:t,cssClass:r,children:s,redirectUri:a,onFailure:u,onSuccess:l}=e,d=o(e,["clientId","cssClass","children","redirectUri","onFailure","onSuccess"]);const{tag:p,type:f,width:h,height:b,scope:g,implicitAuth:w,useRedirect:y,buttonText:_}=Object.assign(Object.assign({},d),{width:400,height:800,tag:"button",type:"button",useRedirect:!1,implicitAuth:!1,buttonText:"Login with Instagram",scope:"user_profile,user_media"}),[v,m]=(0,n.useState)(!1),O=e=>{const{location:t}=e;if(w){const[,e]=t.hash.match(/=(.*)/)||[];if(e)return l(e),!0}else{if(t.search.includes("code"))return l((0,c.getQueryVariable)(t,"code")),!0;if(t.search.includes("error"))return u({error:(0,c.getQueryVariable)(t,"error"),error_reason:(0,c.getQueryVariable)(t,"error_reason"),error_description:(0,c.getQueryVariable)(t,"error_description")}),!0}return!1},j=(e,t,r)=>{const o={error:"closed",error_reason:"oauth_canceled",error_description:"User canceled the authentication"};if(null==e)return void u(o);if(!t)return new Promise(((t,r)=>j(e,t,r)));let n;try{n=O(e)}catch(e){}n?e.close():e.closed?u(o):setTimeout((()=>j(e,t,r)),0)};return(0,n.useEffect)((()=>{O(window)}),[]),(0,n.createElement)(p,{className:r,onClick:()=>{const e=a||window.location.href,r=`https://api.instagram.com/oauth/authorize?client_id=${t}&redirect_uri=${e}&response_type=${w?"token":"code"}&scope=${g}`;y?window.location.href=r:(({url:e,tab:t=!1})=>{const r=t?"_blank":"instagram",o=(0,c.openPopup)({url:e,name:r,width:h,height:b});j(o)})({url:r})},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:r?{}:Object.assign(Object.assign({},i.style),v?i.style.hover:null),type:f},s||_)}},32:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(911),t)},911:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.style=void 0,t.style={display:"block",border:0,borderRadius:3,boxShadow:"rgba(0, 0, 0, 0.5) 0 1px 2px",color:"#ffffff",cursor:"pointer",fontSize:"19px",overflow:"hidden",padding:"10px",userSelect:"none",background:"linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)",hover:{background:"linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)"}}},895:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.openPopup=void 0,t.openPopup=function({width:e,height:t,url:r,name:o}){return window.open(r,o,`scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,${function({width:e,height:t}){const{top:r,left:o}=function({width:e,height:t}){const r=window.screenLeft?window.screenLeft:window.screenX,o=window.screenTop?window.screenTop:window.screenY,n=r+window.innerWidth/2-e/2;return{top:o+window.innerHeight/2-t/2,left:n}}({width:e,height:t});return`width=${e},height=${t},top=${r},left=${o}`}({width:e,height:t})}`)}},162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryVariable=void 0,t.getQueryVariable=function(e,t){const r=e.search.substring(1).split("&"),[o]=r.map((e=>{const r=e.split("=");return r[0]===t?r[1]:null})).filter((e=>e));return o}},928:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(162),t),n(r(895),t)},24:t=>{t.exports=e}},r={};return function e(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}(629)})()}));