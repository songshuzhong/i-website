(function(e){function t(t){for(var o,r,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={playground:0},a={playground:0},i=[];function c(e){return d.p+"chunk/"+({editor:"editor",fontawesome:"fontawesome","fontawesome-brands":"fontawesome-brands","fontawesome-regular":"fontawesome-regular","fontawesome-solid":"fontawesome-solid","vue-fontawesome":"vue-fontawesome"}[e]||e)+"."+{"chunk-2d0b6d26":"7147c5","chunk-594d6d48":"6660f0","chunk-2d20fe5f":"43448e","chunk-304f88aa":"6db8ca","chunk-507c1ab4":"5f406f","chunk-df75a0c2":"d9bceb",editor:"a6cb23",fontawesome:"e55c57","fontawesome-brands":"286676","fontawesome-regular":"d892a1","fontawesome-solid":"603a51","vue-fontawesome":"4da982","chunk-2d0c1ed0":"a70977"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-507c1ab4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({editor:"editor",fontawesome:"fontawesome","fontawesome-brands":"fontawesome-brands","fontawesome-regular":"fontawesome-regular","fontawesome-solid":"fontawesome-solid","vue-fontawesome":"vue-fontawesome"}[e]||e)+"."+{"chunk-2d0b6d26":"31d6cfe0","chunk-594d6d48":"31d6cfe0","chunk-2d20fe5f":"31d6cfe0","chunk-304f88aa":"31d6cfe0","chunk-507c1ab4":"719b2d48","chunk-df75a0c2":"31d6cfe0",editor:"31d6cfe0",fontawesome:"31d6cfe0","fontawesome-brands":"31d6cfe0","fontawesome-regular":"31d6cfe0","fontawesome-solid":"31d6cfe0","vue-fontawesome":"31d6cfe0","chunk-2d0c1ed0":"31d6cfe0"}[e]+".css",a=d.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}a[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/i-website/dist/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var m=l;i.push([2,"chunk-vendors"]),n()})({2:function(e,t,n){e.exports=n("eff7")},"457c":function(e,t,n){},"685a":function(e,t,n){"use strict";var o,r,a;n("ac1f"),n("00b4");t["a"]={getUa:function(){return o},setNotice:function(e){return a=e,this},setUa:function(e){o=e},setWidth:function(e){return r="".concat(e,"px"),this},detectUa:function(){return o=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),o},toPc:function(){var e=document.documentElement.classList;e.remove("mobile"),e.add("pc")},toMobile:function(){var e=document.documentElement.classList;e.remove("pc"),e.add("mobile")},toHorizontal:function(){var e=setTimeout((function(){clearTimeout(e),document.body.setAttribute("style","width:".concat(r)),a&&a(),a=null}),500);document.body.classList.add("horizontal")},leavePlayground:function(){var e=setTimeout((function(){clearTimeout(e),document.body.setAttribute("style","unset")}),500);document.documentElement.classList.remove("playground"),document.body.classList.remove("horizontal")}}},ddb8:function(e,t,n){"use strict";var o=n("2295"),r=n("9483"),a=!1,i=a?"/service-worker.js":"/i-website/dist/service-worker.js";Object(r["a"])(i,{updatefound:function(){Object(o["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated:function(){Object(o["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});var e=setTimeout((function(){clearTimeout(e),window.location.reload()}),1e4)}})},eff7:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("c3a1"),a={class:"i-home__playground"},i={class:"i-home__playground__body"},c={key:0,class:"i-editor__container"};function d(e,t,n,r,d,s){var l=Object(o["resolveComponent"])("el-divider"),u=Object(o["resolveComponent"])("i-editor"),m=Object(o["resolveComponent"])("i-schema"),f=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])("左侧编辑 | 右侧预览")]})),_:1}),Object(o["createElementVNode"])("div",i,[e.isEditorReady?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:1,"is-json":!1})):Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,null,512)),[[f,!e.isEditorReady]]),Object(o["createVNode"])(l,{direction:"vertical"}),Object(o["createVNode"])(m,{"init-schema":e.initSchema,"can-schema-update":!1,path:"/editor",classname:"i-home__playground__preview"},null,8,["init-schema"])])])}var s=n("3835"),l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),{renderer:"page",body:[{renderer:"html",html:"<h1><%=data.title%></h1>",inline:!0},{renderer:"action",text:"跳转到外链",actionType:"url",url:"https://baidu.com/s?search=123",body:{},params:{blank:"1"}},{renderer:"action",text:"弹个窗",type:"success",icon:"ChatLineSquare",actionType:"dialog",body:{body:[{renderer:"form",controls:[{renderer:"input",name:"title",label:"标题",requiredOn:"1==1",placeholder:"请输入",type:"text",rules:[{type:"string",message:"不允许出现数字"}]}],name:"DemoForm",actionApi:{url:"/api/submit",method:"post",params:{title:"${title}"}}}],footer:[{renderer:"action",text:"提交",actionType:"submit",remoteComponent:"DemoForm",body:{}}],fullscreen:!1,center:!1,closeOnClickModal:!0,closeOnPressEscape:!0}},{renderer:"divider",text:"blabla"},{renderer:"switch",name:"showForm",defaultValue:!1,label:"",width:40,target:"PerformancePage",activeText:"启动",inactiveText:"停止"},{renderer:"divider",text:"blabla"},{renderer:"tabs",panels:[{label:"直播方式",icon:"",body:[{renderer:"form",controls:[{renderer:"radio",name:"type",type:"button",target:"LiveVideoTable",options:[{text:"普通直播",value:"1"},{text:"控流直播",value:"2"},{text:"视频直播",value:"3",disabledOn:""},{text:"网页开播",value:"4",disabledOn:""}],defaultValue:"3"}],submitType:"target",actionApi:{},target:"LiveVideoTable"},{renderer:"table",name:"LiveVideoTable",columns:[{fixed:!1,sortable:!1,type:"index"},{label:"封面",name:"poster",body:[{renderer:"image",src:"${cover}",previews:[]}]},{label:"名称",name:"name"},{label:"视频时长",name:"length"},{label:"视频ID",name:"id"}],actions:[],initApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/videos",method:"get",params:{type:"${type}",timestamp:"${timestamp}"}},initData:{type:3},height:85,showDynamicColumn:!1,showHeader:!1}]},{label:"在线人数",icon:"",body:[{renderer:"html",html:"空",inline:!1,classname:"text-center"}]}],activeIndex:1,stretch:!0,tabPosition:"top"},{renderer:"divider",text:"blabla"},{renderer:"service",syncLocation:!1,sendOn:"data.showForm",initApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user",method:"get",params:{role_id:"${role_id}"},cached:!1},initData:{},body:[{renderer:"data"}],silentLoading:!1}],initData:{title:"欢迎体验，纵享丝滑",showForm:!1},mergeUrlQuery:!0,name:"PerformancePage"}),u=n("685a"),m=l,f=Object(o["defineComponent"])({name:"Playground",setup:function(){var e,t=Object(o["getCurrentInstance"])(),r=t.proxy,a=Object(o["ref"])(!1),i=setTimeout((function(){Promise.all([n.e("vue-fontawesome").then(n.bind(null,"ad3d")),n.e("fontawesome").then(n.bind(null,"cb5b")),n.e("fontawesome-solid").then(n.bind(null,"da3e")),n.e("fontawesome-regular").then(n.bind(null,"faaa")),n.e("fontawesome-brands").then(n.bind(null,"42b9")),n.e("editor").then(n.t.bind(null,"c4b6",7))]).then((function(t){var n=Object(s["a"])(t,6),o=n[0].FontAwesomeIcon,i=n[1],c=n[2],d=n[3],l=n[4],u=n[5].Editor;i.default.library.add(c.default),i.default.library.add(d.default),i.default.library.add(l.default),r.$.appContext.components[o.name]=o,r.$.appContext.components[u.name]=u,a.value=!0,e&&e.close()})).catch((function(e){console.error(e)})).finally((function(){clearTimeout(i)}))}),2e3);return Object(o["onBeforeMount"])((function(){window.IRender={pageSchema:m},u["a"].setWidth(window.innerHeight),e=r.$message.success("编辑器加载中，请稍等...")})),{initSchema:m,isEditorReady:a}}}),b=n("6b0d"),p=n.n(b);const h=p()(f,[["render",d]]);var v=h,w=n("3676"),y=n.n(w),g=(n("7437"),n("9ad76"),n("457c"),n("ddb8"),Object(o["createApp"])(v));g.component(w["Schema"]),g.use(r["a"]).use(y.a).mount(".i-website-app__container")}});