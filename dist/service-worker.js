if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let d={};const t=i=>s(i,r),o={module:{uri:r},exports:d,require:t};e[r]=Promise.all(n.map((i=>o[i]||t(i)))).then((i=>(c(...i),d)))}}define(["./workbox-b3a946dc"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0bdf0d.b07b56.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d0c9159.c9bf4c.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d20fe5f.cbd064.js",revision:null},{url:"/i-website/dist/chunk/chunk-2d225f49.1a8097.js",revision:null},{url:"/i-website/dist/chunk/chunk-404f5084.411af5.js",revision:null},{url:"/i-website/dist/chunk/chunk-44b38984.0a9f43.js",revision:null},{url:"/i-website/dist/chunk/chunk-b2126b70.6a540e.js",revision:null},{url:"/i-website/dist/chunk/chunk-fcdd8a66.35b536.js",revision:null},{url:"/i-website/dist/chunk/chunk-vendors.ec4858.js",revision:null},{url:"/i-website/dist/chunk/editor.338b8f.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-brands.8b1edc.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-regular.c675fd.js",revision:null},{url:"/i-website/dist/chunk/fontawesome-solid.a341c9.js",revision:null},{url:"/i-website/dist/chunk/fontawesome.172310.js",revision:null},{url:"/i-website/dist/chunk/vue-fontawesome.b89287.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/chunk-03b8efda.a9b80e5f.css",revision:null},{url:"/i-website/dist/css/chunk-404f5084.0d357c10.css",revision:null},{url:"/i-website/dist/css/chunk-44b38984.0d357c10.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.b115d6c3.css",revision:null},{url:"/i-website/dist/css/home.7ba3e2d3.css",revision:null},{url:"/i-website/dist/css/index.cfb1ea96.css",revision:null},{url:"/i-website/dist/css/playground.a2833d96.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/home.html",revision:"3f9a3502f167c5a17b4101eda6ea553c"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/forbidden.25b99dca.jpeg",revision:"25b99dcac91b4c512353eccd69f391e4"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"17603ce7dfffd91f9d4e71f884c16552"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"cef583d86c3ad023bc650651d5a353a6"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"8cdd7d67b9ce440b6e660426c13f548d"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"90b07ae88255cce77000bf3560f8ba70"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"7ace12ccae0aeb68e016a1201aaf0578"},{url:"/i-website/dist/img/icons/favicon.ico",revision:"4cb0206694f4ffa408d72171e5e419c6"},{url:"/i-website/dist/img/icons/logo-300x300.jpg",revision:"51ade93364924d6ae3ecbd72acae00d3"},{url:"/i-website/dist/img/icons/logo-300x300.png",revision:"8334e854672aa8c86729d37c30f9d287"},{url:"/i-website/dist/img/not-found.06512621.jpeg",revision:"06512621b564df8be841598d77e6e195"},{url:"/i-website/dist/index.html",revision:"3f6b5f4c047b69996f73454ec3e0d99a"},{url:"/i-website/dist/js/home.6172a5.js",revision:null},{url:"/i-website/dist/js/index.8dab35.js",revision:null},{url:"/i-website/dist/js/playground.e9c639.js",revision:null},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/playground.html",revision:"2cd60b6fb005dad5219e6c976bc04eb6"},{url:"/i-website/dist/precache-manifest.37d225241a7379f62c213d1613d42b84.js",revision:"37d225241a7379f62c213d1613d42b84"},{url:"/i-website/dist/service-worker.js",revision:"bcfa2c6ff44ddc9216adea0a168681c2"},{url:"/i-website/dist/shuttle.png",revision:"9df39e09fcb3cb9b413a46f9ab221d71"},{url:"/i-website/dist/worker/editor.worker.js",revision:"96ae88e617004c7b4b4b8f42ac475a74"},{url:"/i-website/dist/worker/json.worker.js",revision:"55a39908513ae7c0fc39a5f1ca0a8088"}],{})}));
