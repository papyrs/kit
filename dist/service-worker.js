if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),a={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c5b993f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/doc/index-ZP3OQYFH.css",revision:"fafe3a279ee22a8e8490951cfbef6298"},{url:"build/index-CQI662FM.js",revision:"0bf4822a45ab32904f1ee8d6bc4b7245"},{url:"build/index-LO55ESMI.css",revision:"7959dd568f622d248bf4e12034688635"},{url:"d/index.html",revision:"e1a7e8c1f6eef3c597198c185973c1c0"},{url:"index.html",revision:"19f39ae86a15027f890a07021bc347f6"},{url:"manifest.webmanifest",revision:"e78fe8f13a9efb780ebb7a89131a1bdd"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
