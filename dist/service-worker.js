if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),a={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-655a1c20"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"build/doc/index-T24T4AGZ.css",revision:"fd1189ee82587a23078e363a0042a718"},{url:"build/index-AOGLKAYP.js",revision:"d86a8f28f0a7ab6dc309eea909dcf43b"},{url:"build/index-MMTNTCNZ.css",revision:"30a885d113dd12b2ab2476e76210d8d4"},{url:"index.html",revision:"f837851958240c31051197bf3c1e8586"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
