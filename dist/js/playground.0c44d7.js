(function(e){function t(t){for(var r,o,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var r={},o={playground:0},a={playground:0},i=[];function c(e){return d.p+"chunk/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b6d26":"7147c5","chunk-594d6d48":"6660f0","chunk-2d21367b":"0d5443","chunk-5be386f4":"17984d","chunk-2d207356":"8a4833","chunk-7f94a70e":"e30333","chunk-76eb17d8":"7c95bf",editor:"af9e15","chunk-2d0bb267":"9beaa4","chunk-2d0c1ed0":"a70977"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-7f94a70e":1,"chunk-76eb17d8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({editor:"editor"}[e]||e)+"."+{"chunk-2d0b6d26":"31d6cfe0","chunk-594d6d48":"31d6cfe0","chunk-2d21367b":"31d6cfe0","chunk-5be386f4":"31d6cfe0","chunk-2d207356":"31d6cfe0","chunk-7f94a70e":"ba4ddaba","chunk-76eb17d8":"ab936f36",editor:"31d6cfe0","chunk-2d0bb267":"31d6cfe0","chunk-2d0c1ed0":"31d6cfe0"}[e]+".css",a=d.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],b.parentNode.removeChild(b),n(i)},b.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/i-website/dist/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;i.push([2,"chunk-vendors"]),n()})({2:function(e,t,n){e.exports=n("eff7")},"457c":function(e,t,n){},"685a":function(e,t,n){"use strict";let r,o,a;t["a"]={getUa(){return r},setNotice(e){return a=e,this},setUa(e){r=e},setWidth(e){return o=e+"px",this},detectUa(){return r=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),r},toPc(){const e=document.documentElement.classList;e.remove("mobile"),e.add("pc")},toMobile(){const e=document.documentElement.classList;e.remove("pc"),e.add("mobile")},toHorizontal(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","width:"+o),a&&a(),a=null},500);document.body.classList.add("horizontal")},leavePlayground(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","unset")},500);document.documentElement.classList.remove("playground"),document.body.classList.remove("horizontal")}}},ddb8:function(e,t,n){"use strict";var r=n("2295"),o=n("9483");const a=!1,i=a?"/service-worker.js":"/i-website/dist/service-worker.js";Object(o["a"])(i,{updatefound(){Object(r["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(r["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})},eff7:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=n("c3a1");const a={class:"i-home__playground"},i={class:"i-home__playground__body"},c={key:0,class:"i-editor__container"};function d(e,t,n,o,d,s){const l=Object(r["resolveComponent"])("el-divider"),u=Object(r["resolveComponent"])("i-schema"),b=Object(r["resolveDirective"])("loading");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("左侧编辑 | 右侧预览")]),_:1}),Object(r["createElementVNode"])("div",i,[e.isEditorReady?(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])("i-editor"),{key:1,"is-json":!1})):Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,null,512)),[[b,!e.isEditorReady]]),Object(r["createVNode"])(l,{direction:"vertical"}),Object(r["createVNode"])(u,{"init-schema":e.initSchema,"can-schema-update":!1,path:"/editor",classname:"i-home__playground__preview"},null,8,["init-schema"])])])}var s={renderer:"page",body:[{renderer:"html",html:"<h1><%=data.title%></h1>",inline:!0},{renderer:"action",text:"跳转到外链",actionType:"url",url:"https://baidu.com/s?search=123",body:{},params:{blank:"1"}},{renderer:"action",text:"弹个窗",type:"success",icon:"ChatLineSquare",actionType:"dialog",body:{body:[{renderer:"form",controls:[{renderer:"input",name:"title",label:"标题",requiredOn:"1==1",placeholder:"请输入",type:"text",rules:[{type:"string",message:"不允许出现数字"}]}],name:"DemoForm",actionApi:{url:"/api/submit",method:"post",params:{title:"${title}"}}}],footer:[{renderer:"action",text:"提交",actionType:"submit",remoteComponent:"DemoForm",body:{}}],fullscreen:!1,center:!1,closeOnClickModal:!0,closeOnPressEscape:!0}},{renderer:"divider",text:"blabla"},{renderer:"switch",name:"showForm",defaultValue:!1,label:"",width:40,target:"PerformancePage",activeText:"启动",inactiveText:"停止"},{renderer:"divider",text:"blabla"},{renderer:"tabs",panels:[{label:"直播方式",icon:"",body:[{renderer:"form",controls:[{renderer:"radio",name:"type",type:"button",target:"LiveVideoTable",options:[{text:"普通直播",value:"1"},{text:"控流直播",value:"2"},{text:"视频直播",value:"3",disabledOn:""},{text:"网页开播",value:"4",disabledOn:""}],defaultValue:"3"}],submitType:"target",actionApi:{},target:"LiveVideoTable"},{renderer:"table",name:"LiveVideoTable",columns:[{fixed:!1,sortable:!1,type:"index",body:[]},{label:"封面",name:"poster",body:[{renderer:"image",src:"${cover}",previews:[]}]},{label:"名称",name:"name",body:[]},{label:"视频时长",name:"length",body:[]},{label:"视频ID",name:"id",body:[]},{label:"操作",sortable:!1,fixed:!1,type:"-",align:"none",body:[{renderer:"action",category:"icon",icon:"Delete",body:{},popupType:"confirm",tipContent:"确认删除吗？",actionType:"ajax",actionApi:{url:"/api/delete",method:"delete",params:{}},confirmTitle:"确定删除吗？"}]}],actions:[],initApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/videos",method:"get",params:{type:"${type}",timestamp:"${timestamp}"}},initData:{type:3},height:81,showHeader:!1}]},{label:"在线人数",icon:"",body:[]}],activeIndex:1,stretch:!0,tabPosition:"top",activeTab:1},{renderer:"divider",text:"blabla"},{renderer:"service",syncLocation:!1,sendOn:"data.showForm",initApi:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user",method:"get",params:{role_id:"${role_id}"},cached:!1},initData:{},body:[{renderer:"data"}],silentLoading:!1}],initData:{title:"欢迎体验，纵享丝滑",showForm:!1},mergeUrlQuery:!0,name:"PerformancePage"},l=n("685a");const u=s;var b=Object(r["defineComponent"])({name:"Playground",setup(){const{proxy:e}=Object(r["getCurrentInstance"])(),t=Object(r["ref"])(!1);let o;return Object(r["onBeforeMount"])(()=>{window.IRenderer={pageSchema:u},l["a"].setWidth(window.innerHeight),o=e.$message.success("编辑器加载中，请稍等...")}),Object(r["onMounted"])(()=>{n.e("editor").then(n.t.bind(null,"0aaa",7)).then(n=>{const{Editor:r}=n;e.$.appContext.components[r.name]=r,t.value=!0,o&&o.close()}).catch(e=>{console.error(e)})}),{initSchema:u,isEditorReady:t}}}),m=n("6b0d"),p=n.n(m);const h=p()(b,[["render",d]]);var f=h,y=n("abd3"),v=n.n(y);n("7437"),n("fb46"),n("457c"),n("ddb8");const g=Object(r["createApp"])(f);g.component(y["Schema"]),g.use(o["a"]).use(v.a).mount(".i-website-app__container")}});