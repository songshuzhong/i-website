(function(e){function t(t){for(var r,o,a=t[0],u=t[1],s=t[2],d=0,l=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={home:0},c={home:0},i=[];function a(e){return u.p+"chunk/"+({}[e]||e)+"."+{"chunk-2d2375a2":"79eaad","chunk-44b38984":"432ef6","chunk-74bd3adc":"510cba","chunk-2d2380f4":"86f3dd","chunk-565c88eb":"d821c4","chunk-7021b684":"a0b64c","chunk-2d0b3106":"04df0a","chunk-76d50c67":"512994","chunk-2d0b3a30":"cf03f8","chunk-2d0e595f":"d5553b","chunk-2d0f05f6":"0b8915","chunk-2d20fcf7":"3b4d1a","chunk-2d21b8cc":"3b7e07"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-44b38984":1,"chunk-565c88eb":1,"chunk-76d50c67":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2375a2":"31d6cfe0","chunk-44b38984":"0ea655d4","chunk-74bd3adc":"31d6cfe0","chunk-2d2380f4":"31d6cfe0","chunk-565c88eb":"142961a8","chunk-7021b684":"31d6cfe0","chunk-2d0b3106":"31d6cfe0","chunk-76d50c67":"a3e01b5a","chunk-2d0b3a30":"31d6cfe0","chunk-2d0e595f":"31d6cfe0","chunk-2d0f05f6":"31d6cfe0","chunk-2d20fcf7":"31d6cfe0","chunk-2d21b8cc":"31d6cfe0"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=a(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/i-website/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=d;i.push([5,"chunk-vendors","chunk-common"]),n()})({5:function(e,t,n){e.exports=n("8073")},7729:function(e,t,n){},8073:function(e,t,n){"use strict";n.r(t);var r=n("1258"),o=n("656b"),c=n("6ec4"),i=n.n(c),a=n("fbb7"),u=n("0e44"),s=n("cb66"),d=n("9109"),l=n("685a");let h;const p=Object(a["createRouter"])({history:Object(a["createWebHashHistory"])("/home"),routes:[{path:"/",name:"IHome",redirect:"/index",component:c["Schema"],props:{initSchema:d,classname:"i-renderer-website-schema__container",canSchemaUpdate:!1,iProtal:!0},children:[{path:"/index",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/home.json"}},{path:"/logs",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/logs.json"}},{path:"/me",component:c["Schema"],props:{url:Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",BASE_URL:"/i-website/dist/"}).VUE_APP_PUBLIC_PATH_HOME+"/page/me.json"}},{path:"/quality",component:c["Schema"],props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me"},meta:{permission:"quality"}},{path:"/playground",component:c["Schema"],classname:"i-renderer-website-schema__playground",props:{url:"https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/playground"},beforeEnter:()=>(document.documentElement.classList.add("playground"),!0)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e("chunk-44b38984").then(n.bind(null,"aa1f")),props:{status:404}},{path:"/forbidden",name:"Forbidden",component:()=>n.e("chunk-44b38984").then(n.bind(null,"aa1f")),props:{status:403}}]}],scrollBehavior(e,t,n){return n||{left:0,top:0}}});p.beforeEach((e,t,n)=>{var r;if(e.path!==t.path&&(h=u["a"].service({fullscreen:!0,customClass:"i-website__router__loader"})),null!==e&&void 0!==e&&null!==(r=e.meta)&&void 0!==r&&r.permission){const t=Object(c["checkPermission"])(e.meta.permission);if(!t)return n("/home/forbidden")}n()}),p.afterEach((e,t)=>{"/playground"===e.path&&l["a"].getUa()&&s["a"].confirm("建议横屏下浏览","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{l["a"].toHorizontal()}).catch(()=>{console.log("cancel horizontal")}),"/playground"===t.path&&l["a"].leavePlayground();const n=setTimeout(()=>{h&&"function"===typeof h.close&&(h.close(),clearTimeout(n))},1e3)});var m=p;function b(e,t,n,o,c,i){const a=Object(r["resolveComponent"])("router-view"),u=Object(r["resolveComponent"])("el-config-provider");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{locale:e.locale},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(a)]),_:1},8,["locale"])}var f=n("60df"),_=n("4853"),g=Object(r["defineComponent"])({name:"Application",components:{[f["a"].name]:f["a"]},setup(){const{proxy:e}=Object(r["getCurrentInstance"])(),t=()=>{e.$message.success("切换到PC端体验更加哦！")};return Object(r["onMounted"])(()=>{const e=l["a"].setNotice(t).setWidth(window.innerHeight).detectUa();e?l["a"].toMobile():l["a"].toPc()}),{locale:_["a"]}}}),E=n("9c21"),P=n.n(E);const y=P()(g,[["render",b]]);var T=y,O=n("ddb8");n("4daa"),n("b361"),n("7729");const A=Object(r["createApp"])(T);Object(O["a"])(Object({NODE_ENV:"production",VUE_APP_NODE_ENV:"production",VUE_APP_CONTEXT_PATH_HOME:"/home",VUE_APP_CONTEXT_PATH_WEBSITE:"/website",VUE_APP_API_BASE:"https://songshuzhong.github.io/i-website/public",BASE_URL:"/i-website/dist/"}).VUE_APP_SERVICE_WORKER),A.use(o["a"]).use(i.a).use(m).mount(".i-website-app__container")},9109:function(e){e.exports=JSON.parse('{"renderer":"page","classname":"i-home__page","body":{"renderer":"layout","direction":"vertical","body":[{"renderer":"header","classname":"flex j-sb a-c","body":[{"renderer":"avatar","fit":"contain","src":"https://songshuzhong.github.io/i-assets/public/img/shuttle.png","title":"百搭云平台"},{"renderer":"menu","name":"i-website-nav","router":true,"ellipsis":false,"defaultActive":"","body":[{"name":"/","title":"首页","renderer":"menuitem","icon":"HomeFilled"},{"name":"playground","title":"即刻体验","renderer":"menuitem","icon":"LocationInformation"},{"name":"https://songshuzhong.github.io/i-website/dist/index.html","title":" 案例合集","renderer":"menuitem","icon":"DataBoard","extra":true},{"name":"logs","title":"更新日志","renderer":"menuitem","icon":"Tickets"},{"name":"quality","title":"荣誉资质","renderer":"menuitem","icon":"Aim"},{"name":"me","title":"关于我","renderer":"menuitem","icon":"Avatar","extra":true}]}]},{"renderer":"main","routerView":true,"iProtal":true,"classname":"i-home__main"},{"renderer":"footer","classname":"i-home__footer","body":[{"renderer":"wrapper","body":[{"renderer":"html","html":"链接"},{"renderer":"action","isText":true,"text":"代码仓库","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"更新日志","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"},{"renderer":"action","isText":true,"text":"设计理念","actionType":"url","url":"https://songshuzhong.github.io/i-website/dist/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"相关"},{"renderer":"action","isText":true,"text":"react","actionType":"url","url":"https://react.docschina.org/"},{"renderer":"action","isText":true,"text":"vue","actionType":"url","url":"https://cn.vuejs.org/index.html"}]},{"renderer":"wrapper","body":[{"renderer":"html","html":"联系"},{"renderer":"action","isText":true,"text":"qq: 1462026137","actionType":"copy","content":"1462026137"},{"renderer":"action","isText":true,"text":"phone: 15510351839","actionType":"copy","content":"15510351839"},{"renderer":"action","isText":true,"text":"e-mail: sshuzhong@outlook.com","actionType":"mail"}]}]},{"renderer":"footer","classname":"i-home__copyright","body":"copyright © 2022 sshuzhong@outlook.com"}]}}')}});