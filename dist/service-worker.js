if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>i(e,f),b={module:{uri:f},exports:r,require:d};s[f]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-741dc75b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/d-index-index.css",revision:"e3c0def48f6e139d7f0923b41fc1bfb9"},{url:"assets/d-index.css",revision:"09e58bc7f1844ac2c0cbbcfc0f8c0168"},{url:"assets/index.css",revision:"77dcef63d36340f6b3ca5a3b2fbe00ff"},{url:"build/App.js",revision:"59b7c2ec5ab06e214da0fcbf7f5b1b47"},{url:"build/chunks/de.js",revision:"a3c1557942fff545750e49e1e3fde2b5"},{url:"build/chunks/es.js",revision:"61a9debc2ecfb58d59be19dddfac30c9"},{url:"build/chunks/ja.js",revision:"0afaeef891bd9529b66f781e531fdbd6"},{url:"build/chunks/nl.js",revision:"c4c6acafaa98fce4ab299dd5c9202743"},{url:"build/chunks/share.services.js",revision:"32026f7b4f15446efcf2fbf924059fe8"},{url:"build/client.js",revision:"25c3c0a28c53bbf3f98fe87093f5b8db"},{url:"build/hoisted.js",revision:"63d7b73a6045dd602c32eb83f7bcf0c6"},{url:"index.html",revision:"723d3b2c28067923aabfe8d5660da619"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
