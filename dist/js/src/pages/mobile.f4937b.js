(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={"src\\pages\\mobile":0},o={"src\\pages\\mobile":0},a=[];function i(e){return u.p+"chunk/"+({}[e]||e)+"."+{"chunk-2d0b32ba":"9b977d","chunk-5ffed80b":"03afd5","chunk-2d0c970a":"af8eeb","chunk-7c0f294f":"1cff95","chunk-ccee5032":"534592","chunk-2d0c5231":"f86cee","chunk-76d41407":"7d43a9","chunk-2d0a3195":"4956d2","chunk-2d0a4018":"a32a06","chunk-2d0c8df6":"5a0df1","chunk-2d0e9031":"fff8f2","chunk-2d2383b7":"782431"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7c0f294f":1,"chunk-76d41407":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b32ba":"31d6cfe0","chunk-5ffed80b":"31d6cfe0","chunk-2d0c970a":"31d6cfe0","chunk-7c0f294f":"9834b4e4","chunk-ccee5032":"31d6cfe0","chunk-2d0c5231":"31d6cfe0","chunk-76d41407":"a3e01b5a","chunk-2d0a3195":"31d6cfe0","chunk-2d0a4018":"31d6cfe0","chunk-2d0c8df6":"31d6cfe0","chunk-2d0e9031":"31d6cfe0","chunk-2d2383b7":"31d6cfe0"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/i-website/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;a.push([3,"chunk-vendors"]),n()})({0:function(e,t){},"1d00":function(e,t,n){},3:function(e,t,n){e.exports=n("8c28")},"8c28":function(e,t,n){"use strict";n.r(t);var r=n("69be"),c=n("7cc4"),o=n("d872"),a=n.n(o);const i={key:0,class:"i-device-ios"},u={class:"i-device-inner"},s=["src"];function d(e,t,n,c,o,a){const d=Object(r["resolveComponent"])("i-schema");return e.isFrame?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,[Object(r["createElementVNode"])("div",u,[(Object(r["openBlock"])(),Object(r["createElementBlock"])("iframe",{class:"i-device-inner__frame",key:e.update,src:"/mobile?pageId="+e.pageId},null,8,s)),Object(r["createElementVNode"])("div",{class:"i-device-inner__home",onClick:t[0]||(t[0]=(...t)=>e.refresh&&e.refresh(...t))})])])):(Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:1,url:e.url,"can-schema-update":!1,ref:"schema",path:"/mobile",classname:"i-mobile__container i-website__main i-main__container"},null,8,["url"]))}var l=n("a1e2"),f=n.n(l),p=Object(r["defineComponent"])({name:"Mobile",setup(){const e=f.a.parse(window.location.href.split("?")[1]),t=Object(r["ref"])(e.isFrame),n=Object(r["ref"])(0);let c="/api/page/"+e.pageId;e.shared&&(c+="/shared");const o=()=>{n.value++};return Object(r["onMounted"])(()=>{if(!t.value){const e=window.setTimeout(()=>{const t=document.querySelector(".i-page__container"),n=document.documentElement;t&&t.classList.add("h5"),n.classList.remove("pc"),n.classList.add("mobile"),clearTimeout(e)},500)}}),{pageId:e.pageId,isFrame:t,url:c,update:n,refresh:o}}}),h=n("9159"),b=n.n(h);const m=b()(p,[["render",d]]);var v=m,g=n("ddb8");n("03d7"),n("675e"),n("1d00");const k=Object(r["createApp"])(v);Object(g["a"])(Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),k.use(c["a"]).use(a.a).mount(".i-website-app__container")},ddb8:function(e,t,n){"use strict";var r=n("f0ce"),c=n("fb74");const o=!1,a=e=>{const t=o?"/i-website/dist/service-worker.js":e+"/service-worker.js";Object(c["a"])(t,{updatefound(){Object(r["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(r["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})};t["a"]=a}});