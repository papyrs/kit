const i=()=>{document.addEventListener("DOMContentLoaded",t,{once:!0})},t=()=>{document.querySelector("web-social-share")?.addEventListener("closed",()=>r("none"),{passive:!0})},l=()=>{const o=document.querySelector("web-social-share");if(!o)return;const e=new MutationObserver(async()=>{e.disconnect(),await c()});e.observe(o,{attributes:!0,subtree:!0}),r("block")},s=async()=>{const o=`${window.location.protocol}//${window.location.host}${window.location.pathname}`;await navigator.share({title:document.title,url:o})},n=()=>{const o=document.querySelector("web-social-share");if(!o){console.error("No component to share on desktop.");return}const e=`${window.location.protocol}//${window.location.host}${window.location.pathname}`,a={displayNames:!0,config:[{twitter:{socialShareUrl:e,socialSharePopupWidth:300,socialSharePopupHeight:400}},{telegram:{socialShareUrl:e}},{openchat:{socialShareUrl:e}},{linkedin:{socialShareUrl:e}},{dscvr:{socialShareUrl:e}},{hackernews:{socialShareUrl:e}},{email:{socialShareBody:e}},{copy:{socialShareUrl:e}}]};o.share=a,o.show=!0},c=async()=>{if(navigator&&navigator.share){await s();return}n()},r=o=>{const e=document.querySelectorAll("web-social-share div");Array.from(e).forEach(a=>a.style.setProperty("display",o))};export{i,l as s};
