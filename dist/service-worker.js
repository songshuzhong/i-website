if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,r)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const t=i=>s(i,c),o={module:{uri:c},exports:d,require:t};e[c]=Promise.all(n.map((i=>o[i]||t(i)))).then((i=>(r(...i),d)))}}define(["./workbox-4752ef36"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0b6d26.7147c5.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0c1ed0.a70977.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.242e36.js",revision:null},{url:"/i-website/dist/chunk/chunk-vendors.129f18.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-brands.286676.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-regular.d892a1.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-solid.603a51.js",revision:null},{url:"/i-website/dist/chunk/fontawesome.e55c57.js",revision:null},{url:"/i-website/dist/chunk/i-editor.f772c9.js",revision:null},{url:"/i-website/dist/chunk/vue-fontawesome.4da982.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/app.b23922cb.css",revision:null},{url:"/i-website/dist/css/chunk-44b38984.b6e854d1.css",revision:null},{url:"/i-website/dist/css/chunk-cb2af0f4.719b2d48.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.62f7a304.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"0a94f787d4dbb6a7dc98f9b4c1dea9cf"},{url:"/i-website/dist/js/app.0644c0.js",revision:null},{url:"/i-website/dist/js/spark-md5.min.js",revision:"6cc0b8c4be9a71f032824bbef584340e"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/precache-manifest.9bd4d2b03d8b99eb9c392bb3bcfbe559.js",revision:"9bd4d2b03d8b99eb9c392bb3bcfbe559"},{url:"/i-website/dist/service-worker.js",revision:"7c49606780bd8ed58bda23632929bcbf"},{url:"/i-website/dist/worker/editor.worker.js",revision:"bc5aa5b64cb0e29c8e502685cbc20293"},{url:"/i-website/dist/worker/json.worker.js",revision:"2a6e3d32af8a17b92732e2e2e36105c4"}],{})}));
