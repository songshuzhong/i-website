if(!self.define){let i,e={};const s=(s,d)=>(s=new URL(s+".js",d).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(d,n)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const c=i=>s(i,r),b={module:{uri:r},exports:t,require:c};e[r]=Promise.all(d.map((i=>b[i]||c(i)))).then((i=>(n(...i),t)))}}define(["./workbox-6e0ee806"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f.json",revision:"2e209dd5d2908f51a7e40ed16cab18a2"},{url:"/i-website/dist/api/user.json",revision:"bd58c4d30dcb3f76a1c6ce2469a869ca"},{url:"/i-website/dist/baidayun.png",revision:"c8c289f4d74237c22607f19cd897c254"},{url:"/i-website/dist/chunk/chunk-2d0b2c3a.fe27cb.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0b3a30.cf03f8.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0e595f.d5553b.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0f05f6.0b8915.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d20fcf7.3b4d1a.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d21b8cc.3b7e07.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2375a2.79eaad.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d2380f4.86f3dd.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.432ef6.js",revision:null},{url:"/i-website/dist/chunk/chunk-74bd3adc.510cba.js",revision:null},{url:"/i-website/dist/chunk/chunk-76d50c67.512994.js",revision:null},{url:"/i-website/dist/chunk/chunk-f1a323d4.ea14e9.js",revision:null},{url:"/i-website/dist/chunk/editor.61c4e9.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-44b38984.0ea655d4.css",revision:null},{url:"/i-website/dist/css/chunk-565c88eb.142961a8.css",revision:null},{url:"/i-website/dist/css/chunk-76d50c67.a3e01b5a.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.0f3db8e6.css",revision:null},{url:"/i-website/dist/css/home.0eba097a.css",revision:null},{url:"/i-website/dist/css/login.803f6719.css",revision:null},{url:"/i-website/dist/css/mobile.3a45e9b3.css",revision:null},{url:"/i-website/dist/css/playground.47028eed.css",revision:null},{url:"/i-website/dist/css/website.613e1f71.css",revision:null},{url:"/i-website/dist/editing.html",revision:"953f6334593f7f3545a3242a288b55e2"},{url:"/i-website/dist/favicon.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"78beebc774078c4d9f2b122b6902dee2"},{url:"/i-website/dist/img/attitude.jpg",revision:"633dc6ddffa7dc219bd52cd949d90155"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/img/qqb.png",revision:"70de1811bbfd30d72a89c960d94a82ed"},{url:"/i-website/dist/img/teacher20240603202001.png",revision:"628fd7df83ce1a174bc18972c71ce3b9"},{url:"/i-website/dist/img/teacher20240603202012.png",revision:"879aed357d71ac0e7f88ec8dc7222685"},{url:"/i-website/dist/img/teacher20240604070713.png",revision:"11b9b364a9f968705f4e8a05531d6e4a"},{url:"/i-website/dist/js/editing.04d29c.js",revision:null},{url:"/i-website/dist/js/home.196b72.js",revision:null},{url:"/i-website/dist/js/login.1a7ab1.js",revision:null},{url:"/i-website/dist/js/mobile.07932f.js",revision:null},{url:"/i-website/dist/js/playground.2a146a.js",revision:null},{url:"/i-website/dist/js/website.67d190.js",revision:null},{url:"/i-website/dist/login.html",revision:"718e63d2f1c2d0aabc4e4592a7a46ffa"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/mobile.html",revision:"47028ea4fb172d2b95938a8a92b53f56"},{url:"/i-website/dist/page/home.json",revision:"d243854b6a06830ff0e7330a269cb484"},{url:"/i-website/dist/page/logs.json",revision:"cad6b62700e676ce0d4394ddc178d9bf"},{url:"/i-website/dist/page/me.json",revision:"bda9296f03776b645762d539990769c9"},{url:"/i-website/dist/page/playground.json",revision:"8158c8101263d9a7457e6301499d5a36"},{url:"/i-website/dist/playground.html",revision:"7f2c866280ff3d6800688a407718b9ab"},{url:"/i-website/dist/precache-manifest.2354913d8512c5a1debe365c2aa30ebb.js",revision:"2354913d8512c5a1debe365c2aa30ebb"},{url:"/i-website/dist/service-worker.js",revision:"4731775a376dd316b1a08212a808758e"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/vue3-sfc-loader.js",revision:"bd2cb3a89ccf10dfeb5c743ff45fab41"},{url:"/i-website/dist/website.html",revision:"9efbd90c13d7bae412f260a1cd587892"},{url:"/i-website/dist/worker/editor.worker.js",revision:"db883b7efe156f73ef3aee676c9bfe54"},{url:"/i-website/dist/worker/html.worker.js",revision:"e8334c53446315a520d9062cb3998a4d"},{url:"/i-website/dist/worker/json.worker.js",revision:"4610c3daf4cd1abe4dfc69f20a38c258"}],{})}));
