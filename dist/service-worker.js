if(!self.define){let i,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(c,n)=>{const d=i||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let o={};const r=i=>s(i,d),b={module:{uri:d},exports:o,require:r};e[d]=Promise.all(c.map((i=>b[i]||r(i)))).then((i=>(n(...i),o)))}}define(["./workbox-d2120f8f"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/i-website/dist/chunk/chunk-2d0c1ed0.7fc4eb.js",revision:null},{url:"/i-website/dist/chunk/chunk-36ebdaed.2eecc3.js",revision:null},{url:"/i-website/dist/chunk/less.7f4ade.js",revision:null},{url:"/i-website/dist/circle.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/css/app.f5953b1b.css",revision:null},{url:"/i-website/dist/css/chunk-vendors.abfdbec0.css",revision:null},{url:"/i-website/dist/css/monaco-editor.719b2d48.css",revision:null},{url:"/i-website/dist/favicon.ico",revision:"fb18670e339868242239711ddf2c0fe4"},{url:"/i-website/dist/fonts/codicon.805fb6ad.ttf",revision:"805fb6ad1751ed8b849b5bf9be742ab5"},{url:"/i-website/dist/img/circle.ae48e207.svg",revision:"ae48e2078551e8a64156f767f51e5254"},{url:"/i-website/dist/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/i-website/dist/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/i-website/dist/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/i-website/dist/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/i-website/dist/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/i-website/dist/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/i-website/dist/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/i-website/dist/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/i-website/dist/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/i-website/dist/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/i-website/dist/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/i-website/dist/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/i-website/dist/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/i-website/dist/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/i-website/dist/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/i-website/dist/img/loading.ce9bbdf7.svg",revision:"ce9bbdf78b2c215adf3c80bc4534ce4c"},{url:"/i-website/dist/index.html",revision:"9357ee1288026259a01cd22a25da39e1"},{url:"/i-website/dist/js/app.d2c549.js",revision:null},{url:"/i-website/dist/loading.svg",revision:"ce9bbdf78b2c215adf3c80bc4534ce4c"},{url:"/i-website/dist/manifest.json",revision:"3866f3ee76597fcdadc88a83a339fdae"},{url:"/i-website/dist/precache-manifest.133bb24222b732e466c0f8c65eaf45dc.js",revision:"133bb24222b732e466c0f8c65eaf45dc"},{url:"/i-website/dist/service-worker.js",revision:"b8a61029df8151c6b1a7832abe913258"},{url:"/i-website/dist/worker/editor.worker.js",revision:"bc5aa5b64cb0e29c8e502685cbc20293"},{url:"/i-website/dist/worker/json.worker.js",revision:"2a6e3d32af8a17b92732e2e2e36105c4"}],{})}));
