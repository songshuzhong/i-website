(function(e){function t(t){for(var o,r,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={home:0},a={home:0},c=[];function i(e){return s.p+"chunk/"+({}[e]||e)+"."+{"chunk-2d0db7d7":"1ade0d","chunk-2f20b63c":"096f35","chunk-76e90fbe":"3f8410","chunk-b2126b70":"140341","chunk-2d0a479b":"8a8165","chunk-63ab760a":"9427da","chunk-2d208dfb":"e2897a","chunk-be71587c":"b7a8a6","chunk-2d0ccba9":"9ea3ea","chunk-2d225f49":"1a8097"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2f20b63c":1,"chunk-76e90fbe":1,"chunk-be71587c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0db7d7":"31d6cfe0","chunk-2f20b63c":"0ea655d4","chunk-76e90fbe":"a95d3abd","chunk-b2126b70":"31d6cfe0","chunk-2d0a479b":"31d6cfe0","chunk-63ab760a":"31d6cfe0","chunk-2d208dfb":"31d6cfe0","chunk-be71587c":"142961a8","chunk-2d0ccba9":"31d6cfe0","chunk-2d225f49":"31d6cfe0"}[e]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===o||d===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],m.parentNode.removeChild(m),n(c)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/i-website/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=d;c.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("8073")},"685a":function(e,t,n){"use strict";let o,r,a;t["a"]={getUa(){return o},setNotice(e){return a=e,this},setUa(e){o=e},setWidth(e){return r=e+"px",this},detectUa(){return o=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),o},toPc(){const e=document.documentElement.classList;e.remove("mobile"),e.add("pc")},toMobile(){const e=document.documentElement.classList;e.remove("pc"),e.add("mobile")},toHorizontal(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","width:"+r),a&&a(),a=null},500);document.body.classList.add("horizontal")},leavePlayground(){const e=setTimeout(()=>{clearTimeout(e),document.body.setAttribute("style","unset")},500);document.documentElement.classList.remove("playground"),document.body.classList.remove("horizontal")}}},7729:function(e,t,n){},8073:function(e,t,n){"use strict";n.r(t);var o=n("6625"),r=n("4442"),a=n("18cf"),c=n("ecf9"),i=n("6702"),s=n("433d"),u=n.n(s),d={renderer:"page",classname:"i-home__page",body:{renderer:"layout",direction:"vertical",body:[{renderer:"header",classname:"flex j-sb a-c",body:[{renderer:"avatar",fit:"contain",src:"https://songshuzhong.github.io/i-assets/public/img/shuttle.png",title:"IRenderer"},{renderer:"menu",name:"i-website-nav",router:!0,ellipsis:!1,defaultActive:"",body:[{name:"/",title:"首页",renderer:"menuitem",icon:"HomeFilled"},{name:"playground",title:"即刻体验",renderer:"menuitem",icon:"LocationInformation"},{name:"https://songshuzhong.github.io/i-website/dist/index.html",title:" 案例合集",renderer:"menuitem",icon:"DataBoard",extra:!0},{name:"logs",title:"更新日志",renderer:"menuitem",icon:"Tickets"},{name:"quality",title:"荣誉资质",renderer:"menuitem",icon:"Aim"},{name:"me",title:"关于我",renderer:"menuitem",icon:"Avatar",extra:!0}]}]},{renderer:"main",routerView:!0,iProtal:!0,classname:"i-home__main"},{renderer:"footer",classname:"i-home__footer",body:[{renderer:"wrapper",body:[{renderer:"html",html:"链接"},{renderer:"action",isText:!0,text:"代码仓库",actionType:"url",url:"https://songshuzhong.github.io/i-website/dist/index.html"},{renderer:"action",isText:!0,text:"更新日志",actionType:"url",url:"https://songshuzhong.github.io/i-website/dist/index.html"},{renderer:"action",isText:!0,text:"设计理念",actionType:"url",url:"https://songshuzhong.github.io/i-website/dist/index.html"}]},{renderer:"wrapper",body:[{renderer:"html",html:"相关"},{renderer:"action",isText:!0,text:"react",actionType:"url",url:"https://react.docschina.org/"},{renderer:"action",isText:!0,text:"vue",actionType:"url",url:"https://cn.vuejs.org/index.html"}]},{renderer:"wrapper",body:[{renderer:"html",html:"联系"},{renderer:"action",isText:!0,text:"qq: 1462026137",actionType:"copy",content:"1462026137"},{renderer:"action",isText:!0,text:"phone: 15510351839",actionType:"copy",content:"15510351839"},{renderer:"action",isText:!0,text:"e-mail: sshuzhong@outlook.com",actionType:"mail"}]}]},{renderer:"footer",classname:"i-home__copyright",body:"copyright © 2022 sshuzhong@outlook.com"}]}},l=n("685a");let m;const p=Object(a["createRouter"])({history:Object(a["createWebHashHistory"])(),routes:[{path:"/",name:"IHome",component:s["Schema"],props:{initSchema:d,classname:"i-renderer-website-schema__container",canSchemaUpdate:!1,iProtal:!0},children:[{path:"/",component:s["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/home"}},{path:"/logs",component:s["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/logs"}},{path:"/me",component:s["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me"}},{path:"/quality",component:s["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me"},meta:{permission:"quality"}},{path:"/playground",component:s["Schema"],classname:"i-renderer-website-schema__playground",props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/playground"},beforeEnter:()=>(document.documentElement.classList.add("playground"),!0)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e("chunk-2f20b63c").then(n.bind(null,"aa1f")),props:{status:404}},{path:"/forbidden",name:"Forbidden",component:()=>n.e("chunk-2f20b63c").then(n.bind(null,"aa1f")),props:{status:403}}]}],scrollBehavior(e,t,n){return n||{left:0,top:0}}});p.beforeEach((e,t,n)=>{var o;if(e.path!==t.path&&(m=c["a"].service({fullscreen:!0,customClass:"i-website__router__loader"})),null!==e&&void 0!==e&&null!==(o=e.meta)&&void 0!==o&&o.permission){const t=Object(s["checkPermission"])(e.meta.permission);if(!t)return n("/forbidden")}n()}),p.afterEach((e,t)=>{"/playground"===e.path&&l["a"].getUa()&&i["a"].confirm("建议横屏下浏览","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{l["a"].toHorizontal()}).catch(()=>{console.log("cancel horizontal")}),"/playground"===t.path&&l["a"].leavePlayground();const n=setTimeout(()=>{m&&"function"===typeof m.close&&(m.close(),clearTimeout(n))},1e3)});var h=p;function b(e,t,n,r,a,c){const i=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("el-config-provider");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{locale:e.locale},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i)]),_:1},8,["locale"])}var f=n("388a"),g=n("3d8a"),y=Object(o["defineComponent"])({name:"Application",components:{[f["a"].name]:f["a"]},setup(){const{proxy:e}=Object(o["getCurrentInstance"])(),t=()=>{e.$message.success("切换到PC端体验更加哦！")};return Object(o["onMounted"])(()=>{const e=l["a"].setNotice(t).setWidth(window.innerHeight).detectUa();e?l["a"].toMobile():l["a"].toPc()}),{locale:g["a"]}}}),v=n("b3f2"),w=n.n(v);const k=w()(y,[["render",b]]);var x=k;n("2cf3"),n("5972"),n("7729"),n("ddb8");const T=Object(o["createApp"])(x);T.use(r["a"]).use(u.a).use(h).mount(".i-website-app__container")},ddb8:function(e,t,n){"use strict";var o=n("199b"),r=n("08e7");const a=!1,c=a?"/service-worker.js":"/i-website/dist/service-worker.js";Object(r["a"])(c,{updatefound(){Object(o["a"])({title:"温馨提示",message:"检测到新版本，正在下载中，请稍后...",type:"info",position:"bottom-right",offset:50})},updated(){Object(o["a"])({title:"温馨提示",message:"版本更新完成，10s后刷新项目",type:"success",position:"bottom-right",duration:1e4,offset:50});const e=setTimeout(()=>{clearTimeout(e),window.location.reload()},1e4)}})}});