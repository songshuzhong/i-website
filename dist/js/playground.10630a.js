(function(e){function t(t){for(var n,o,i=t[0],d=t[1],l=t[2],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);p&&p(t);while(u.length)u.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=d(d.s=r[0]))}return e}var n={},o={playground:0},a={playground:0},c=[];function i(e){return d.p+"chunk/"+({editor:"editor"}[e]||e)+"."+{editor:"10154f","chunk-2d2375a2":"79eaad","chunk-74bd3adc":"510cba","chunk-2d2380f4":"86f3dd","chunk-565c88eb":"d2b8d9","chunk-7021b684":"a0b64c","chunk-2d0b3106":"04df0a","chunk-76d50c67":"512994","chunk-2d0b3a30":"cf03f8","chunk-2d0e595f":"d5553b","chunk-2d0f05f6":"0b8915","chunk-2d20fcf7":"3b4d1a","chunk-2d21b8cc":"3b7e07"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={"chunk-565c88eb":1,"chunk-76d50c67":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({editor:"editor"}[e]||e)+"."+{editor:"31d6cfe0","chunk-2d2375a2":"31d6cfe0","chunk-74bd3adc":"31d6cfe0","chunk-2d2380f4":"31d6cfe0","chunk-565c88eb":"142961a8","chunk-7021b684":"31d6cfe0","chunk-2d0b3106":"31d6cfe0","chunk-76d50c67":"a3e01b5a","chunk-2d0b3a30":"31d6cfe0","chunk-2d0e595f":"31d6cfe0","chunk-2d0f05f6":"31d6cfe0","chunk-2d20fcf7":"31d6cfe0","chunk-2d21b8cc":"31d6cfe0"}[e]+".css",a=d.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=i(e);var u=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(r,n,function(t){return e[t]}.bind(null,n));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/i-website/dist/",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=s;c.push([2,"chunk-vendors","chunk-common"]),r()})({"031e":function(e){e.exports=JSON.parse('{"renderer":"page","body":[{"renderer":"wrapper","name":"PerformancePage","header":[{"renderer":"html","html":"<h1><%=data.title%></h1>","inline":true}],"body":[{"renderer":"action","text":"跳转到外链","actionType":"url","url":"https://baidu.com/s?search=123","body":{},"params":{"blank":"1"}},{"renderer":"action","text":"弹个窗","type":"success","icon":"ChatLineSquare","actionType":"dialog","body":{"body":[{"renderer":"form","controls":[{"renderer":"input","name":"title","label":"标题","requiredOn":"1==1","placeholder":"请输入","type":"text","rules":[{"type":"string","message":"不允许出现数字"}]}],"name":"DemoForm","actionApi":{"url":"/api/submit","method":"post","params":{"title":"${title}"}}}],"footer":[{"renderer":"action","text":"提交","actionType":"trigger","triggered":"DemoForm","body":{}}],"fullscreen":false,"center":false,"closeOnClickModal":true,"closeOnPressEscape":true}},{"renderer":"divider","text":"blabla"},{"renderer":"switch","name":"showForm","defaultValue":false,"label":"","width":40,"target":"PerformancePage","activeText":"启动","inactiveText":"停止"},{"renderer":"divider","text":"blabla"},{"renderer":"tabs","panels":[{"label":"直播方式","icon":"","body":[{"renderer":"form","controls":[{"renderer":"radio","name":"type","type":"button","target":"LiveVideoTable","options":[{"text":"普通直播","value":"1"},{"text":"控流直播","value":"2"},{"text":"视频直播","value":"3","disabledOn":""},{"text":"网页开播","value":"4","disabledOn":""}],"defaultValue":"3"}],"submitType":"target","actionApi":{},"target":"LiveVideoTable"},{"renderer":"table","name":"LiveVideoTable","columns":[{"fixed":false,"sortable":false,"type":"index","body":[]},{"label":"封面","name":"poster","body":[{"renderer":"image","src":"${cover}","previews":[]}]},{"label":"名称","name":"name","body":[]},{"label":"视频时长","name":"length","body":[]},{"label":"视频ID","name":"id","body":[]},{"label":"操作","sortable":false,"fixed":false,"type":"-","align":"none","body":[{"renderer":"action","category":"icon","icon":"Delete","body":{},"popupType":"confirm","tipContent":"确认删除吗？","actionType":"ajax","actionApi":{"url":"/api/delete","method":"delete","params":{}},"confirmTitle":"确定删除吗？"}]}],"actions":[],"initApi":{"url":"http://rap2api.taobao.org/app/mock/241577/videos","method":"get","params":{"type":"${type}","timestamp":"${timestamp}"}},"initData":{"type":3},"height":81,"showHeader":false}]},{"label":"在线人数","icon":"","body":[]}],"activeIndex":1,"stretch":true,"tabPosition":"top","activeTab":0},{"renderer":"divider","text":"blabla"},{"renderer":"service","syncLocation":false,"sendOn":"data.showForm","initApi":{"url":"http://rap2api.taobao.org/app/mock/241577/videos","method":"get","params":{"role_id":"${role_id}"},"cached":false},"initData":{},"body":[{"renderer":"data"}],"silentLoading":false}]}],"initData":{"title":"欢迎体验，纵享丝滑","showForm":false},"mergeUrlQuery":true}')},2:function(e,t,r){e.exports=r("eff7")},"457c":function(e,t,r){},eff7:function(e,t,r){"use strict";r.r(t);var n=r("1258"),o=r("656b"),a=r("1275");const c={class:"i-home__playground"},i={class:"i-home__playground__body"},d={key:0,class:"i-editor__container"};function l(e,t,r,o,a,l){const s=Object(n["resolveComponent"])("el-divider"),u=Object(n["resolveComponent"])("i-schema"),p=Object(n["resolveDirective"])("loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>t[0]||(t[0]=[Object(n["createTextVNode"])("左侧编辑 | 右侧预览")])),_:1}),Object(n["createElementVNode"])("div",i,[e.isEditorReady?(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])("i-editor"),{key:1,"is-json":!1})):Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,null,512)),[[p,!e.isEditorReady]]),Object(n["createVNode"])(s,{direction:"vertical"}),Object(n["createVNode"])(u,{"init-schema":e.initSchema,"can-schema-update":!1,track:"/editor",classname:"i-home__playground__preview"},null,8,["init-schema"])])])}var s=r("031e"),u=r("685a");const p=s;var b=Object(n["defineComponent"])({name:"Playground",setup(){const{proxy:e}=Object(n["getCurrentInstance"])(),t=Object(n["ref"])(!1);let o;return Object(n["onBeforeMount"])(()=>{window.IRenderer={pageSchema:p},u["a"].setWidth(window.innerHeight),o=e.$message.success("编辑器加载中，请稍等...")}),Object(n["onMounted"])(()=>{r.e("editor").then(r.t.bind(null,"729a",7)).then(r=>{const{Editor:n}=r;e.$.appContext.components[n.name]=n,t.value=!0,o&&o.close()}).catch(e=>{console.error(e)})}),{initSchema:p,isEditorReady:t}}}),f=r("9c21"),h=r.n(f);const m=h()(b,[["render",l]]);var y=m,v=r("ddb8");r("4daa"),r("cb8d"),r("457c");const g=Object(n["createApp"])(y);Object(v["a"])(Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),g.component(a["a"]),g.use(o["a"]).use(a["d"]).mount(".i-website-app__container")}});