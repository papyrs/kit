if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const f=e=>i(e,r),a={module:{uri:r},exports:d,require:f};s[r]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(c(...e),d)))}}define(["./workbox-741dc75b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/d-index-index.css",revision:"7d218cfda1a68bfdd7b0512ee9d57a1b"},{url:"assets/d-index.css",revision:"544c9883c759bdccd50cbf4d9a596c0e"},{url:"assets/index.css",revision:"77dcef63d36340f6b3ca5a3b2fbe00ff"},{url:"build/chunks/de.js",revision:"a3c1557942fff545750e49e1e3fde2b5"},{url:"build/chunks/es.js",revision:"61a9debc2ecfb58d59be19dddfac30c9"},{url:"build/chunks/ja.js",revision:"0afaeef891bd9529b66f781e531fdbd6"},{url:"build/chunks/nl.js",revision:"c4c6acafaa98fce4ab299dd5c9202743"},{url:"build/chunks/share.services.js",revision:"32026f7b4f15446efcf2fbf924059fe8"},{url:"build/client.js",revision:"e3957f6562d29965e946ffbf6f758c0a"},{url:"build/hoisted.js",revision:"aedd2bea81b3fe8009a50657b5382fc1"},{url:"build/Nav.js",revision:"8c2b96d8fb3c6392e9d4a36bcff06b5e"},{url:"index.html",revision:"f9172642e9aa5c3a0e380668d5c28462"},{url:"manifest.webmanifest",revision:"7df634450d2e90c36071cfe47d883e41"},{url:"robots.txt",revision:"4f261bf7f54fd4d6ec30e5e40a54c4fe"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/^(?!.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^(?=.*(?:unsplash|giphy|tenor|firebasestorage))(?=.*(?:png|jpg|jpeg|svg|webp|gif)).*/,new e.StaleWhileRevalidate({cacheName:"cors-images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
