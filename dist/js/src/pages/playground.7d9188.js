(function(e){function t(t){for(var n,o,i=t[0],d=t[1],s=t[2],l=0,u=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);p&&p(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=d(d.s=r[0]))}return e}var n={},o={"src\\pages\\playground":0},a={"src\\pages\\playground":0},c=[];function i(e){return d.p+"chunk/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b32ba":"9b977d","chunk-5ffed80b":"03afd5","chunk-2d0c970a":"af8eeb","chunk-7c0f294f":"1cff95","chunk-ccee5032":"534592","chunk-2d0c5231":"f86cee","chunk-76d41407":"7d43a9",editor:"d3af4b","chunk-2d0a3195":"4956d2","chunk-2d0a4018":"a32a06","chunk-2d0c8df6":"5a0df1","chunk-2d0e9031":"fff8f2","chunk-2d2383b7":"782431"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={"chunk-7c0f294f":1,"chunk-76d41407":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b32ba":"31d6cfe0","chunk-5ffed80b":"31d6cfe0","chunk-2d0c970a":"31d6cfe0","chunk-7c0f294f":"9834b4e4","chunk-ccee5032":"31d6cfe0","chunk-2d0c5231":"31d6cfe0","chunk-76d41407":"a3e01b5a",editor:"31d6cfe0","chunk-2d0a3195":"31d6cfe0","chunk-2d0a4018":"31d6cfe0","chunk-2d0c8df6":"31d6cfe0","chunk-2d0e9031":"31d6cfe0","chunk-2d2383b7":"31d6cfe0"}[e]+".css",a=d.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=i(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(r,n,function(t){return e[t]}.bind(null,n));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/i-website/dist/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;c.push([2,"chunk-vendors"]),r()})({0:function(e,t){},"031e":function(e){e.exports=JSON.parse('{"renderer":"page","body":[{"renderer":"wrapper","name":"PerformancePage","header":[{"renderer":"html","html":"<h1><%=data.title%></h1>","inline":true}],"body":[{"renderer":"action","text":"跳转到外链","actionType":"url","url":"https://baidu.com/s?search=123","body":{},"params":{"blank":"1"}},{"renderer":"action","text":"弹个窗","type":"success","icon":"ChatLineSquare","actionType":"dialog","body":{"body":[{"renderer":"form","controls":[{"renderer":"input","name":"title","label":"标题","requiredOn":"1==1","placeholder":"请输入","type":"text","rules":[{"type":"string","message":"不允许出现数字"}]}],"name":"DemoForm","actionApi":{"url":"/api/submit","method":"post","params":{"title":"${title}"}}}],"footer":[{"renderer":"action","text":"提交","actionType":"trigger","triggered":"DemoForm","body":{}}],"fullscreen":false,"center":false,"closeOnClickModal":true,"closeOnPressEscape":true}},{"renderer":"divider","text":"blabla"},{"renderer":"switch","name":"showForm","defaultValue":false,"label":"","width":40,"target":"PerformancePage","activeText":"启动","inactiveText":"停止"},{"renderer":"divider","text":"blabla"},{"renderer":"tabs","panels":[{"label":"直播方式","icon":"","body":[{"renderer":"form","controls":[{"renderer":"radio","name":"type","type":"button","target":"LiveVideoTable","options":[{"text":"普通直播","value":"1"},{"text":"控流直播","value":"2"},{"text":"视频直播","value":"3","disabledOn":""},{"text":"网页开播","value":"4","disabledOn":""}],"defaultValue":"3"}],"submitType":"target","actionApi":{},"target":"LiveVideoTable"},{"renderer":"table","name":"LiveVideoTable","columns":[{"fixed":false,"sortable":false,"type":"index","body":[]},{"label":"封面","name":"poster","body":[{"renderer":"image","src":"${cover}","previews":[]}]},{"label":"名称","name":"name","body":[]},{"label":"视频时长","name":"length","body":[]},{"label":"视频ID","name":"id","body":[]},{"label":"操作","sortable":false,"fixed":false,"type":"-","align":"none","body":[{"renderer":"action","category":"icon","icon":"Delete","body":{},"popupType":"confirm","tipContent":"确认删除吗？","actionType":"ajax","actionApi":{"url":"/api/delete","method":"delete","params":{}},"confirmTitle":"确定删除吗？"}]}],"actions":[],"initApi":{"url":"http://rap2api.taobao.org/app/mock/241577/videos","method":"get","params":{"type":"${type}","timestamp":"${timestamp}"}},"initData":{"type":3},"height":81,"showHeader":false}]},{"label":"在线人数","icon":"","body":[]}],"activeIndex":1,"stretch":true,"tabPosition":"top","activeTab":0},{"renderer":"divider","text":"blabla"},{"renderer":"service","syncLocation":false,"sendOn":"data.showForm","initApi":{"url":"http://rap2api.taobao.org/app/mock/241577/videos","method":"get","params":{"role_id":"${role_id}"},"cached":false},"initData":{},"body":[{"renderer":"data"}],"silentLoading":false}]}],"initData":{"title":"欢迎体验，纵享丝滑","showForm":false},"mergeUrlQuery":true}')},2:function(e,t,r){e.exports=r("eff7")},"457c":function(e,t,r){},"685a":function(e,t,r){"use strict";let n,o,a;t["a"]={getUa(){return n},setNotice(e){return a=e,this},setUa(e){n=e},setWidth(e){return o=e+"px",this},detectUa(){return n=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),n},toPc(){const e=document.documentElement.classList;e.remove("mobile"),e.add("pc")},toMobile(){const e=document.documentElement.classList;e.remove("pc"),e.add("mobile")},toHorizontal(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","width:"+o),a&&a(),a=null},500);document.body.classList.add("horizontal")},leavePlayground(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","unset")},500);document.documentElement.classList.remove("playground"),document.body.classList.remove("horizontal")}}},ddb8:function(e,t,r){"use strict";var n=r("f0ce"),o=r("fb74");const a=!1,c=e=>{const t=a?"/i-website/dist/service-worker.js":e+"/service-worker.js";Object(o["a"])(t,{updatefound(){Object(n["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(n["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})};t["a"]=c},eff7:function(e,t,r){"use strict";r.r(t);var n=r("69be"),o=r("7cc4"),a=r("d872"),c=r.n(a);const i={class:"i-home__playground"},d={class:"i-home__playground__body"},s={key:0,class:"i-editor__container"};function l(e,t,r,o,a,c){const l=Object(n["resolveComponent"])("el-divider"),u=Object(n["resolveComponent"])("i-schema"),p=Object(n["resolveDirective"])("loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>t[0]||(t[0]=[Object(n["createTextVNode"])("左侧编辑 | 右侧预览")])),_:1}),Object(n["createElementVNode"])("div",d,[e.isEditorReady?(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])("i-editor"),{key:1,"is-json":!1})):Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,null,512)),[[p,!e.isEditorReady]]),Object(n["createVNode"])(l,{direction:"vertical"}),Object(n["createVNode"])(u,{"init-schema":e.initSchema,"can-schema-update":!1,track:"/editor",classname:"i-home__playground__preview"},null,8,["init-schema"])])])}var u=r("031e"),p=r("685a");const f=u;var b=Object(n["defineComponent"])({name:"Playground",setup(){const{proxy:e}=Object(n["getCurrentInstance"])(),t=Object(n["ref"])(!1);let o;return Object(n["onBeforeMount"])(()=>{window.IRenderer={pageSchema:f},p["a"].setWidth(window.innerHeight),o=e.$message.success("编辑器加载中，请稍等...")}),Object(n["onMounted"])(()=>{r.e("editor").then(r.t.bind(null,"c547",7)).then(r=>{const{Editor:n}=r;e.$.appContext.components[n.name]=n,t.value=!0,o&&o.close()}).catch(e=>{console.error(e)})}),{initSchema:f,isEditorReady:t}}}),m=r("9159"),h=r.n(m);const y=h()(b,[["render",l]]);var g=y,v=r("ddb8");r("03d7"),r("675e"),r("457c");const O=Object(n["createApp"])(g);Object(v["a"])(Object({NODE_ENV:"production",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",VUE_APP_API_NODE_ENV:"gp",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_NODE_ENV:"production",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),O.component(a["Schema"]),O.use(o["a"]).use(c.a).mount(".i-website-app__container")}});