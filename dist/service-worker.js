if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const o=e=>s(e,c),t={module:{uri:c},exports:b,require:o};i[c]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(d(...e),b)))}}define(["./workbox-6e0ee806"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/i-website/dist/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f.json",revision:"2e209dd5d2908f51a7e40ed16cab18a2"},{url:"/i-website/dist/api/mock/alternative-payeruid.json",revision:"ad465a07b9a94154c5b65439e64ef6a7"},{url:"/i-website/dist/api/mock/availableDates.json",revision:"1238965cf825e8a39d945995416185dd"},{url:"/i-website/dist/api/mock/bigForm.json",revision:"b8a2bec3378d7c648f8b42ecd4139056"},{url:"/i-website/dist/api/mock/bigTable.json",revision:"f26a16e1d9d6ade56fa77aee1f0af8f7"},{url:"/i-website/dist/api/mock/bp-state.json",revision:"715b0515981c3e4dd4b38e81f43c1e18"},{url:"/i-website/dist/api/mock/calendar.json",revision:"40a04472ec86527529b69a067cfc4921"},{url:"/i-website/dist/api/mock/chart-love.json",revision:"e21972ba891f406325cf706507b2d620"},{url:"/i-website/dist/api/mock/chart-map.json",revision:"f55a6d24e5488b31a1c76823775df667"},{url:"/i-website/dist/api/mock/cities.json",revision:"209a796c96810ed21ec8dfb665c46cb8"},{url:"/i-website/dist/api/mock/columnData.json",revision:"9dd9c1392fb9cc73ced2cb77121e4dde"},{url:"/i-website/dist/api/mock/coupon-task-list.json",revision:"4e68e884d873767122dc2714b144a556"},{url:"/i-website/dist/api/mock/coupon-task-stop.json",revision:"5ed0f802d0ba3f37c452337e422c6af2"},{url:"/i-website/dist/api/mock/demo-users.json",revision:"9b31c11eb669b68bbb20d49bf933370e"},{url:"/i-website/dist/api/mock/dependencies.json",revision:"5ae6291729bf0ea3ea37b4239daaa6a9"},{url:"/i-website/dist/api/mock/dynamicSelect.json",revision:"d0973ce6db19f949d87378c0679ff6a9"},{url:"/i-website/dist/api/mock/effectScatter.json",revision:"6b42ed6fda28a5dcb793933369fa1aa5"},{url:"/i-website/dist/api/mock/error.json",revision:"237e150aa63ceb118e8b3a8a508f07c5"},{url:"/i-website/dist/api/mock/fieldinfo.json",revision:"d2db9e421c328acc7d87716f8ba2ec17"},{url:"/i-website/dist/api/mock/form-combo-all.json",revision:"c60759f8bd612fbe5b446a128a70e50a"},{url:"/i-website/dist/api/mock/form-verify.json",revision:"ac0db3d5e3f202734116fb11f50edec7"},{url:"/i-website/dist/api/mock/getSceneItem.json",revision:"db22927cabbeaeeb8dc0e83b53e9445f"},{url:"/i-website/dist/api/mock/holiday.json",revision:"03f6005b69934694fe252ffef4b16873"},{url:"/i-website/dist/api/mock/holidayDetails.json",revision:"361e44360122a334cc71b6a5eb45e2cb"},{url:"/i-website/dist/api/mock/iconHome.json",revision:"5ab4114f8dd779d26524728aba36d2ec"},{url:"/i-website/dist/api/mock/libs.json",revision:"7b46364d9b056521408ce17c478bb3fe"},{url:"/i-website/dist/api/mock/mapCity.json",revision:"a18646fcaeaa79833a3799973f06d8d1"},{url:"/i-website/dist/api/mock/mapSelect.json",revision:"3e8533760a503b34d31bcac208466f50"},{url:"/i-website/dist/api/mock/news.json",revision:"501157015ba5ef170c4d4ae3137e638a"},{url:"/i-website/dist/api/mock/number.json",revision:"f6ce90df9da6083f1db80bd36ecb17ac"},{url:"/i-website/dist/api/mock/order-delivery.json",revision:"158becf6c452c6cd4f23573bea8f63ef"},{url:"/i-website/dist/api/mock/order-list.json",revision:"fde1e300eca0d5fc99ac8d68993f0132"},{url:"/i-website/dist/api/mock/params.json",revision:"6fb0043f32b631ad41794522b7505dd0"},{url:"/i-website/dist/api/mock/permissions.json",revision:"f3438cda769e45727e65645eaa62967c"},{url:"/i-website/dist/api/mock/plugins.json",revision:"b3b6316e359d4bea55bd97203dc19100"},{url:"/i-website/dist/api/mock/products.json",revision:"73696bd476b7fae18565350bccf0f571"},{url:"/i-website/dist/api/mock/pv.json",revision:"505f698024c870462a47beb4523290d4"},{url:"/i-website/dist/api/mock/rb-campaign.json",revision:"0a0e43192e6c221eed4649736d0d4bc7"},{url:"/i-website/dist/api/mock/roles.json",revision:"cf69efe8cb4ec32c39bf8421df5a1385"},{url:"/i-website/dist/api/mock/scheduleTable.json",revision:"c0b415ddf1f272dc8ad6e72b02866356"},{url:"/i-website/dist/api/mock/shopping-price.json",revision:"649a2a894b0d1f83d6f1ef859c4c3410"},{url:"/i-website/dist/api/mock/showTabs.json",revision:"f023db2d0f62167080759e6540f4c0f6"},{url:"/i-website/dist/api/mock/stressTesting.json",revision:"1be3a16763aea026f0cb47658e4c1382"},{url:"/i-website/dist/api/mock/table-stressTesting.json",revision:"a770c205c08d10a1b451ec9a57f853d8"},{url:"/i-website/dist/api/mock/tableSchedule.json",revision:"2ede0f89b4d73b09989872bc2290aa39"},{url:"/i-website/dist/api/mock/tasks.json",revision:"3c6e336d2884aae6b045d5fe4c4dce73"},{url:"/i-website/dist/api/mock/tasks2.json",revision:"4cdd13ef807d6ee8fa97eb99a435c7f2"},{url:"/i-website/dist/api/mock/tast-start.json",revision:"d2d33a71bbeb69d5bf512bc0570a08d0"},{url:"/i-website/dist/api/mock/td-select.json",revision:"7813341b2ebe24a19871ec78a23dd9c4"},{url:"/i-website/dist/api/mock/tob-operation-advance-price.json",revision:"4551956b757704841c3ddc321c65426e"},{url:"/i-website/dist/api/mock/tob-operation-advance-query.json",revision:"595595aaeab07a51d14e996fa3576ed1"},{url:"/i-website/dist/api/mock/todos.json",revision:"7bcc78a26f987d9f1ff858512b162910"},{url:"/i-website/dist/api/mock/upload-image.json",revision:"6f23e2caa2cdd34f29c25b2b3019373b"},{url:"/i-website/dist/api/mock/upload.json",revision:"6788bd64d049991f97a8b21ee97df6a9"},{url:"/i-website/dist/api/mock/valid-comment.json",revision:"29847aff223eda4b9071d4779961d794"},{url:"/i-website/dist/api/mock/viewSchema.json",revision:"7016e638b5cd043d34a45464deb367bf"},{url:"/i-website/dist/api/mock/virus-country.json",revision:"0079b9feed2a8a42e12824eab52ff634"},{url:"/i-website/dist/api/mock/virus-province.json",revision:"fd06e2f55dc553aa1cac65ecf7bd5d62"},{url:"/i-website/dist/api/mock/weeksInMonth.json",revision:"05cf41dbd0cab0ae6f4672a80f24085f"},{url:"/i-website/dist/api/page/030acc1b-5401-4189-86e9-e989fa8b3404.json",revision:"f828b18e36906532fadb324c6734bfda"},{url:"/i-website/dist/api/page/180de081-02e3-409e-9f80-29548f8d4c02.json",revision:"7fdfcbe867084df3343909a02ee1f287"},{url:"/i-website/dist/api/page/18edafdb-7f3d-41e3-a65d-cdb04090fa72.json",revision:"4c65aaf1f5d066dd5e90f40b3aa43aa2"},{url:"/i-website/dist/api/page/19f59d90-3203-4250-bf4a-93d35ab16ee9.json",revision:"30baa8650ff5bff3754e0cfb7a2b1fc5"},{url:"/i-website/dist/api/page/2b13f116-34ce-4f2f-9741-3bf20a4f231c.json",revision:"c96bd21dc7672181a0c065d07360ab64"},{url:"/i-website/dist/api/page/2b7900e7-2236-4257-a2a6-3cac14b5862f.json",revision:"9140ea05e578d85a292332d47d419d24"},{url:"/i-website/dist/api/page/2ccde496-7d68-45ec-be1f-735e2b5da59a.json",revision:"b4b1dcc470a9ab31dfcce2742f7f7915"},{url:"/i-website/dist/api/page/2cfb7da9-b9fc-42e5-b3c6-412b913a2804.json",revision:"8c0dbd5d0ec43a502474c46d8e8bcc2d"},{url:"/i-website/dist/api/page/3381e12c-a587-47bb-8874-71055f0f11df.json",revision:"67dc919b59bb8f20544e40dfa957df63"},{url:"/i-website/dist/api/page/33be59d3-b72c-4325-a275-2a48ab1a5d09.json",revision:"7c34b2c3a5f55340847ea39e0aac2b49"},{url:"/i-website/dist/api/page/419c3641-a47d-44b8-9c97-2c06dbd1d2b3.json",revision:"d9f2d8b2fcb4f8aafa9a1b053a6ee023"},{url:"/i-website/dist/api/page/6adfc32d-a1c8-4c02-9fde-99d79df28a8a.json",revision:"775396ae076e2cc91bac83c6304dd567"},{url:"/i-website/dist/api/page/70428cf7-c5b2-472d-b670-d3e9542b2f4d.json",revision:"29a8a7166818e56ed27a4bc975cabad8"},{url:"/i-website/dist/api/page/7fe82cb4-4156-4897-a6f1-82cd8e1cc9f5.json",revision:"7d0d99a4b9abf85c50f08788a618b3aa"},{url:"/i-website/dist/api/page/813d8511-6ee5-4631-bc97-f3354281f13d.json",revision:"7d25420d6d5fa3302c32815e63788863"},{url:"/i-website/dist/api/page/8781564d-590a-4484-b20a-40c7eb1ab048.json",revision:"f2ed0c42cb94577d5d3c49cac7588a59"},{url:"/i-website/dist/api/page/897a06c3-84c4-4d7d-950d-f9d23a570672.json",revision:"056c70d49c03d84be6acdcc08c7f775c"},{url:"/i-website/dist/api/page/8ead0c99-16ff-441f-88e4-5fc5e30fbd58.json",revision:"6050a92cdb357085876a697a76e62752"},{url:"/i-website/dist/api/page/96932910-8814-4428-b4e1-f2a91785da0b.json",revision:"1c546d8b23811899415afb9b73fddada"},{url:"/i-website/dist/api/page/9898b4da-37c2-44a6-8fe4-3a13b2d33df6.json",revision:"2dabf3cbafc25558389108079bcb124e"},{url:"/i-website/dist/api/page/a6c047bb-ced5-4f5b-912b-4984eca059fe.json",revision:"ab31bd1887cfc5a46b9685a9b308ae10"},{url:"/i-website/dist/api/page/b021f6ff-a7e1-448b-ac6b-3da19a06d258.json",revision:"4f03f472a2cc4ff412dfe572557518d0"},{url:"/i-website/dist/api/page/baaa7a7c-6280-4961-8b3b-aada78e970f7.json",revision:"d2f4a6d8e3037ee1d490ea7ddcb94302"},{url:"/i-website/dist/api/page/bfbc45cc-4a8d-4f02-ac7d-0cf2d9929a94.json",revision:"c38c80a5b687bf1692a585e35212321a"},{url:"/i-website/dist/api/page/c264c4e7-1fa8-43b1-bd38-d87cfd0be4e9.json",revision:"87185d7a2544b60bc12c103c9e2b1143"},{url:"/i-website/dist/api/page/c6be5603-a17d-406d-a192-8dd0112a29e0.json",revision:"75b44856794931a8cb0bfb803e877f37"},{url:"/i-website/dist/api/page/c85640d1-fe0b-46da-ad95-71b9a4e05f6b.json",revision:"f697c1a4c821fe3da874962fcccd8abb"},{url:"/i-website/dist/api/page/d50ffc69-3e09-41d7-a50e-a0342e16cdd3.json",revision:"a162f8dba581a6ec5ce6cdb97f3c8e69"},{url:"/i-website/dist/api/page/db938182-0ff9-4d25-b11e-3f522481089d.json",revision:"64cc9767fb74f9afc76490c8c546a2a5"},{url:"/i-website/dist/api/page/e5f07294-b1ea-4301-bc4e-5a3c2858a1c9.json",revision:"26fd30fb72ef0eaad0a3aea2c02c0d05"},{url:"/i-website/dist/api/page/e6082431-2c79-4c70-82a6-3f8378af90b3.json",revision:"f862f996c740d7005faf9509fc029f79"},{url:"/i-website/dist/api/page/ec18f1cc-408b-472e-a99b-354e736f0623.json",revision:"f46139a3ce55121afe98bf61742466ac"},{url:"/i-website/dist/api/page/f2f9da99-dd99-4ee1-b227-e821e61d1939.json",revision:"3fc05c73c98f4850cce33c45b8c8c0cb"},{url:"/i-website/dist/api/page/fa5efa68-8e4f-4eb6-a633-cff9cda9c407.json",revision:"3f1f6d25d1c6f57fe8a0d7e5eac9eaa1"},{url:"/i-website/dist/api/page/fb924838-8837-4af5-b62c-8b7d5ee79a87.json",revision:"9c43c5c5296461758be59a37093de063"},{url:"/i-website/dist/api/page/fc3a856e-46ff-4012-a1e7-70677a98d29c.json",revision:"8903b36374c8dea98eadc0772399902f"},{url:"/i-website/dist/api/page/fd213a77-7f79-4f88-81ad-39f53612da0a.json",revision:"a9d49a5dcdeadbfdf6d644d0678adf9d"},{url:"/i-website/dist/api/page/fde6bd44-d592-4f27-b809-f9fd027d84ba.json",revision:"70fbebb4c8dfa46f15e668bdff6f5fea"},{url:"/i-website/dist/api/page/ff661e43-23b4-4f1d-be5e-6e1aa90b44d4.json",revision:"d048dfc250cddbe9a56f3efd9814f214"},{url:"/i-website/dist/api/page/ffc87f9e-d008-4ee5-99b2-dd0734fea6cb.json",revision:"1e10c40c3df0bbd5095ea43ee8e05f72"},{url:"/i-website/dist/api/page/home.json",revision:"d243854b6a06830ff0e7330a269cb484"},{url:"/i-website/dist/api/page/logs.json",revision:"cad6b62700e676ce0d4394ddc178d9bf"},{url:"/i-website/dist/api/page/me.json",revision:"bda9296f03776b645762d539990769c9"},{url:"/i-website/dist/api/page/playground.json",revision:"8158c8101263d9a7457e6301499d5a36"},{url:"/i-website/dist/api/user.json",revision:"bd58c4d30dcb3f76a1c6ce2469a869ca"},{url:"/i-website/dist/baidayun.png",revision:"c8c289f4d74237c22607f19cd897c254"},{url:"/i-website/dist/chunk/chunk-2d0b2c3a.fe27cb.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0b3a30.cf03f8.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0e595f.d5553b.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0f05f6.0b8915.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d20fcf7.3b4d1a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d21b8cc.3b7e07.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2375a2.79eaad.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2380f4.86f3dd.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.432ef6.js",revision:null},{url:"/i-website/dist/chunk/chunk-74bd3adc.510cba.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d50c67.512994.js",revision:null},{url:"/i-website/dist/chunk/chunk-f1a323d4.ea14e9.js",revision:null},{url:"/i-website/dist/chunk/editor.4482a1.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-44b38984.36f8d24d.css",revision:null},{url:"/i-website/dist/css/chunk-565c88eb.142961a8.css",revision:null},{url:"/i-website/dist/css/chunk-76d50c67.a3e01b5a.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.244954f9.css",revision:null},{url:"/i-website/dist/css/home.d4107264.css",revision:null},{url:"/i-website/dist/css/login.78cb387e.css",revision:null},{url:"/i-website/dist/css/mobile.354e59e7.css",revision:null},{url:"/i-website/dist/css/playground.a7dc6fcc.css",revision:null},{url:"/i-website/dist/css/website.caed2f5b.css",revision:null},{url:"/i-website/dist/editing.html",revision:"5b7f87e13562e3cf58a63e873f2b506f"},{url:"/i-website/dist/favicon.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"c0e0a3e32f7e94ccda0d6f9cc7fd78aa"},{url:"/i-website/dist/img/attitude.jpg",revision:"633dc6ddffa7dc219bd52cd949d90155"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/img/qqb.png",revision:"70de1811bbfd30d72a89c960d94a82ed"},{url:"/i-website/dist/img/teacher20240603202001.png",revision:"628fd7df83ce1a174bc18972c71ce3b9"},{url:"/i-website/dist/img/teacher20240603202012.png",revision:"879aed357d71ac0e7f88ec8dc7222685"},{url:"/i-website/dist/img/teacher20240604070713.png",revision:"11b9b364a9f968705f4e8a05531d6e4a"},{url:"/i-website/dist/js/editing.c6cb47.js",revision:null},{url:"/i-website/dist/js/home.8c370c.js",revision:null},{url:"/i-website/dist/js/login.f03963.js",revision:null},{url:"/i-website/dist/js/mobile.1f88ba.js",revision:null},{url:"/i-website/dist/js/playground.314a4a.js",revision:null},{url:"/i-website/dist/js/website.c52551.js",revision:null},{url:"/i-website/dist/login.html",revision:"250fb0645f76f8ed43ec9138e3d05c99"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/mobile.html",revision:"cd1c655c7d078872447455a53eaeec09"},{url:"/i-website/dist/playground.html",revision:"acbfbe8088f2caa54f530ac67f4f8128"},{url:"/i-website/dist/precache-manifest.37800f55a627feb10b4c91a389e4ade9.js",revision:"37800f55a627feb10b4c91a389e4ade9"},{url:"/i-website/dist/service-worker.js",revision:"6df5052fe694910b266f04dad2bb9958"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/vue3-sfc-loader.js",revision:"bd2cb3a89ccf10dfeb5c743ff45fab41"},{url:"/i-website/dist/website.html",revision:"7dca3330ab0818f336d6b6c0158d5366"},{url:"/i-website/dist/worker/editor.worker.js",revision:"4ab0085353594bb527c7c3b633d02ab4"},{url:"/i-website/dist/worker/html.worker.js",revision:"ffe94af9a95f8764907713996f347a4b"},{url:"/i-website/dist/worker/json.worker.js",revision:"68ad45d05f75340535953516e9a58709"}],{})}));
