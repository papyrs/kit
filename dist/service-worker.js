if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let c={};const d=e=>i(e,f),a={module:{uri:f},exports:c,require:d};s[f]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-741dc75b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/d-index-index.css",revision:"63effecb4a815d717788e7520250bf5c"},{url:"assets/d-index.css",revision:"193f5a2a978f75abd190178013789e13"},{url:"assets/index.css",revision:"77dcef63d36340f6b3ca5a3b2fbe00ff"},{url:"build/App.js",revision:"88c99400e1b3746cba157f9ae575502a"},{url:"build/chunks/de.js",revision:"a3c1557942fff545750e49e1e3fde2b5"},{url:"build/chunks/es.js",revision:"61a9debc2ecfb58d59be19dddfac30c9"},{url:"build/chunks/ja.js",revision:"0afaeef891bd9529b66f781e531fdbd6"},{url:"build/chunks/nl.js",revision:"c4c6acafaa98fce4ab299dd5c9202743"},{url:"build/chunks/share.services.js",revision:"32026f7b4f15446efcf2fbf924059fe8"},{url:"build/client.js",revision:"e3957f6562d29965e946ffbf6f758c0a"},{url:"build/hoisted.js",revision:"348948bc5cd9314dbc26ee71cd160a92"},{url:"index.html",revision:"d6b984735b87166910ef678bb73885be"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
