if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const d=e=>i(e,r),o={module:{uri:r},exports:f,require:d};s[r]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(n(...e),f)))}}define(["./workbox-741dc75b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.css",revision:"09e58bc7f1844ac2c0cbbcfc0f8c0168"},{url:"build/App.js",revision:"9ddc8982973ec828bae0887c01262eba"},{url:"build/chunks/de.js",revision:"a3c1557942fff545750e49e1e3fde2b5"},{url:"build/chunks/es.js",revision:"61a9debc2ecfb58d59be19dddfac30c9"},{url:"build/chunks/ja.js",revision:"0afaeef891bd9529b66f781e531fdbd6"},{url:"build/chunks/nl.js",revision:"c4c6acafaa98fce4ab299dd5c9202743"},{url:"build/chunks/share.services.js",revision:"32026f7b4f15446efcf2fbf924059fe8"},{url:"build/client.js",revision:"25c3c0a28c53bbf3f98fe87093f5b8db"},{url:"build/hoisted.js",revision:"348948bc5cd9314dbc26ee71cd160a92"},{url:"index.html",revision:"ba796e3422c08b12f1b82be9e9a5c167"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
