if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-781c29dd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/doc/index-T24T4AGZ.css",revision:"fd1189ee82587a23078e363a0042a718"},{url:"build/index-D3OH5JYE.js",revision:"e421cdcf616809874fcf875a1603573d"},{url:"build/index-K7AVW2NC.css",revision:"5c2d8feffc0688de85745030cf29460a"},{url:"index.html",revision:"117183736135d1671e0cb89e2923bd60"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
