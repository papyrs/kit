/* empty css                                           */import{s as se}from"./chunks/share.services.js";function L(){}const Ft=e=>e;function ue(e,t){for(const n in t)e[n]=t[n];return e}function Gt(e){return e()}function It(){return Object.create(null)}function F(e){e.forEach(Gt)}function Jt(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function ae(e,...t){if(e==null)return L;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function fe(e,t,n){e.$$.on_destroy.push(ae(t,n))}function vt(e,t,n,i){if(e){const r=Kt(e,t,n,i);return e[0](r)}}function Kt(e,t,n,i){return e[1]&&i?ue(n.ctx.slice(),e[1](i(t))):n.ctx}function wt(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(t.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=t.dirty[s]|r[s];return l}return t.dirty|r}return t.dirty}function yt(e,t,n,i,r,l){if(r){const o=Kt(t,n,i,l);e.p(o,r)}}function Et(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}const Qt=typeof window<"u";let he=Qt?()=>window.performance.now():()=>Date.now(),kt=Qt?e=>requestAnimationFrame(e):L;const K=new Set;function Xt(e){K.forEach(t=>{t.c(e)||(K.delete(t),t.f())}),K.size!==0&&kt(Xt)}function de(e){let t;return K.size===0&&kt(Xt),{promise:new Promise(n=>{K.add(t={c:e,f:n})}),abort(){K.delete(t)}}}let _t=!1;function _e(){_t=!0}function me(){_t=!1}function pe(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function ge(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let a=0;a<t.length;a++){const d=t[a];d.claim_order!==void 0&&u.push(d)}t=u}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let u=0;u<t.length;u++){const a=t[u].claim_order,d=(r>0&&t[n[r]].claim_order<=a?r+1:pe(1,r,f=>t[n[f]].claim_order,a))-1;i[u]=n[d]+1;const c=d+1;n[c]=u,r=Math.max(c,r)}const l=[],o=[];let s=t.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(l.push(t[u-1]);s>=u;s--)o.push(t[s]);s--}for(;s>=0;s--)o.push(t[s]);l.reverse(),o.sort((u,a)=>u.claim_order-a.claim_order);for(let u=0,a=0;u<o.length;u++){for(;a<l.length&&o[u].claim_order>=l[a].claim_order;)a++;const d=a<l.length?l[a]:null;e.insertBefore(o[u],d)}}function be(e,t){e.appendChild(t)}function Yt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ve(e){const t=N("style");return we(Yt(e),t),t.sheet}function we(e,t){return be(e.head||e,t),t.sheet}function b(e,t){if(_t){for(ge(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function C(e,t,n){_t&&!n?b(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function N(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function D(e){return document.createTextNode(e)}function I(){return D(" ")}function jt(){return D("")}function Q(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $t(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e){return Array.from(e.childNodes)}function ye(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function te(e,t,n,i,r=!1){ye(e);const l=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,r||(e.claim_info.last_index=o),s}}for(let o=e.claim_info.last_index-1;o>=0;o--){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,r?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,s}}return i()})();return l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,l}function ee(e,t,n,i){return te(e,r=>r.nodeName===t,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(t))}function B(e,t,n){return ee(e,t,n,N)}function E(e,t,n){return ee(e,t,n,y)}function X(e,t){return te(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>D(t),!0)}function j(e){return X(e," ")}function z(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function J(e,t,n){e.classList[n?"add":"remove"](t)}function Ee(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}const ht=new Map;let dt=0;function $e(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Le(e,t){const n={stylesheet:ve(t),rules:{}};return ht.set(e,n),n}function Ot(e,t,n,i,r,l,o,s=0){const u=16.666/i;let a=`{
`;for(let $=0;$<=1;$+=u){const v=t+(n-t)*l($);a+=$*100+`%{${o(v,1-v)}}
`}const d=a+`100% {${o(n,1-n)}}
}`,c=`__svelte_${$e(d)}_${s}`,f=Yt(e),{stylesheet:m,rules:g}=ht.get(f)||Le(f,e);g[c]||(g[c]=!0,m.insertRule(`@keyframes ${c} ${d}`,m.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${c} ${i}ms linear ${r}ms 1 both`,dt+=1,c}function xe(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),dt-=r,dt||ke())}function ke(){kt(()=>{dt||(ht.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&_(t)}),ht.clear())})}let Ct;function it(e){Ct=e}function ne(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const rt=[],lt=[],at=[],Lt=[],Ce=Promise.resolve();let xt=!1;function Ne(){xt||(xt=!0,Ce.then(re))}function Y(e){at.push(e)}function Tt(e){Lt.push(e)}const gt=new Set;let ut=0;function re(){const e=Ct;do{for(;ut<rt.length;){const t=rt[ut];ut++,it(t),Se(t.$$)}for(it(null),rt.length=0,ut=0;lt.length;)lt.pop()();for(let t=0;t<at.length;t+=1){const n=at[t];gt.has(n)||(gt.add(n),n())}at.length=0}while(rt.length);for(;Lt.length;)Lt.pop()();xt=!1,gt.clear(),it(e)}function Se(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}let nt;function Be(){return nt||(nt=Promise.resolve(),nt.then(()=>{nt=null})),nt}function bt(e,t,n){e.dispatchEvent(Ee(`${t?"intro":"outro"}${n}`))}const ft=new Set;let O;function ie(){O={r:0,c:[],p:O}}function le(){O.r||F(O.c),O=O.p}function k(e,t){e&&e.i&&(ft.delete(e),e.i(t))}function S(e,t,n,i){if(e&&e.o){if(ft.has(e))return;ft.add(e),O.c.push(()=>{ft.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Me={duration:0};function ct(e,t,n,i){let r=t(e,n),l=i?0:1,o=null,s=null,u=null;function a(){u&&xe(e,u)}function d(f,m){const g=f.b-l;return m*=Math.abs(g),{a:l,b:f.b,d:g,duration:m,start:f.start,end:f.start+m,group:f.group}}function c(f){const{delay:m=0,duration:g=300,easing:w=Ft,tick:$=L,css:v}=r||Me,Z={start:he()+m,b:f};f||(Z.group=O,O.r+=1),o||s?s=Z:(v&&(a(),u=Ot(e,l,f,g,m,w,v)),f&&$(0,1),o=d(Z,g),Y(()=>bt(e,f,"start")),de(M=>{if(s&&M>s.start&&(o=d(s,g),s=null,bt(e,o.b,"start"),v&&(a(),u=Ot(e,l,o.b,o.duration,0,w,r.css))),o){if(M>=o.end)$(l=o.b,1-l),bt(e,o.b,"end"),s||(o.b?a():--o.group.r||F(o.group.c)),o=null;else if(M>=o.start){const tt=M-o.start;l=o.a+o.d*w(tt/o.duration),$(l,1-l)}}return!!(o||s)}))}return{run(f){Jt(r)?Be().then(()=>{r=r(),c(f)}):c(f)},end(){a(),o=s=null}}}function Dt(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function U(e){e&&e.c()}function W(e,t){e&&e.l(t)}function R(e,t,n,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:s}=e.$$;r&&r.m(t,n),i||Y(()=>{const u=l.map(Gt).filter(Jt);o?o.push(...u):F(u),e.$$.on_mount=[]}),s.forEach(Y)}function V(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(rt.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,i,r,l,o,s=[-1]){const u=Ct;it(e);const a=e.$$={fragment:null,ctx:null,props:l,update:L,not_equal:r,bound:It(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:It(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(c,f,...m)=>{const g=m.length?m[0]:f;return a.ctx&&r(a.ctx[c],a.ctx[c]=g)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](g),d&&Pe(e,c)),f}):[],a.update(),d=!0,F(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){_e();const c=p(t.target);a.fragment&&a.fragment.l(c),c.forEach(_)}else a.fragment&&a.fragment.c();t.intro&&k(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),me(),re()}it(u)}class H{$destroy(){V(this,1),this.$destroy=L}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ae="modulepreload",ze=function(e){return"/"+e},Rt={},mt=function(t,n,i){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=ze(r),r in Rt)return;Rt[r]=!0;const l=r.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":Ae,l||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),l)return new Promise((u,a)=>{s.addEventListener("load",u),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},G=[];function Ie(e,t=L){let n;const i=new Set;function r(s){if(T(e,s)&&(e=s,n)){const u=!G.length;for(const a of i)a[1](),G.push(a,e);if(u){for(let a=0;a<G.length;a+=2)G[a][0](G[a+1]);G.length=0}}}function l(s){r(s(e))}function o(s,u=L){const a=[s,u];return i.add(a),i.size===1&&(n=t(r)||L),s(e),()=>{i.delete(a),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:o}}const je={close:"Close"},oe={core:je},Oe=async()=>({lang:"es",...await mt(()=>import("./chunks/es.js"),[])}),Te=async()=>({lang:"de",...await mt(()=>import("./chunks/de.js"),[])}),De=async()=>({lang:"nl",...await mt(()=>import("./chunks/nl.js"),[])}),Re=async()=>({lang:"ja",...await mt(()=>import("./chunks/ja.js"),[])}),Ve=()=>({lang:"en",...oe}),qe=e=>{switch(e){case"es":return Oe();case"de":return Te();case"nl":return De();case"ja":return Re();default:return Promise.resolve(Ve())}},He=()=>{const{subscribe:e,set:t}=Ie({lang:"en",...oe});return{subscribe:e,switchLang:async n=>{const i=await qe(n);t(i),localStorage.setItem("lang",n)}}},Ze=He(),Ue=e=>({}),Vt=e=>({});function We(e){let t,n,i,r,l,o;const s=e[4].icon,u=vt(s,e,e[3],Vt),a=e[4].default,d=vt(a,e,e[3],null);return{c(){t=N("button"),u&&u.c(),n=I(),i=N("span"),d&&d.c(),this.h()},l(c){t=B(c,"BUTTON",{type:!0,class:!0});var f=p(t);u&&u.l(f),n=j(f),i=B(f,"SPAN",{class:!0});var m=p(i);d&&d.l(m),m.forEach(_),f.forEach(_),this.h()},h(){h(i,"class","visually-hidden"),h(t,"type","button"),h(t,"class","toolbar svelte-11w6hm4"),t.disabled=e[1],J(t,"hidden",e[2])},m(c,f){C(c,t,f),u&&u.m(t,null),b(t,n),b(t,i),d&&d.m(i,null),e[6](t),r=!0,l||(o=Q(t,"click",e[5]),l=!0)},p(c,[f]){u&&u.p&&(!r||f&8)&&yt(u,s,c,c[3],r?wt(s,c[3],f,Ue):Et(c[3]),Vt),d&&d.p&&(!r||f&8)&&yt(d,a,c,c[3],r?wt(a,c[3],f,null):Et(c[3]),null),(!r||f&2)&&(t.disabled=c[1]),(!r||f&4)&&J(t,"hidden",c[2])},i(c){r||(k(u,c),k(d,c),r=!0)},o(c){S(u,c),S(d,c),r=!1},d(c){c&&_(t),u&&u.d(c),d&&d.d(c),e[6](null),l=!1,o()}}}function Fe(e,t,n){let{$$slots:i={},$$scope:r}=t,{button:l=void 0}=t,{disabled:o=!1}=t,{hidden:s=!1}=t;function u(d){ne.call(this,e,d)}function a(d){lt[d?"unshift":"push"](()=>{l=d,n(0,l)})}return e.$$set=d=>{"button"in d&&n(0,l=d.button),"disabled"in d&&n(1,o=d.disabled),"hidden"in d&&n(2,s=d.hidden),"$$scope"in d&&n(3,r=d.$$scope)},[l,o,s,r,i,u,a]}class Ge extends H{constructor(t){super(),q(this,t,Fe,We,T,{button:0,disabled:1,hidden:2})}}function Je(e){const t=e-1;return t*t*t+1}function qt(e){return--e*e*e*e*e+1}function Ht(e,{delay:t=0,duration:n=400,easing:i=Ft}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:l=>`opacity: ${l*r}`}}function Zt(e,{delay:t=0,duration:n=400,easing:i=Je,start:r=0,opacity:l=0}={}){const o=getComputedStyle(e),s=+o.opacity,u=o.transform==="none"?"":o.transform,a=1-r,d=s*(1-l);return{delay:t,duration:n,easing:i,css:(c,f)=>`
			transform: ${u} scale(${1-a*f});
			opacity: ${s-d*f}
		`}}function Ke(e){let t,n,i;return{c(){t=y("svg"),n=y("path"),i=y("path"),this.h()},l(r){t=E(r,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var l=p(t);n=E(l,"path",{d:!0,fill:!0}),p(n).forEach(_),i=E(l,"path",{d:!0}),p(i).forEach(_),l.forEach(_),this.h()},h(){h(n,"d","M0 0h24v24H0V0z"),h(n,"fill","none"),h(i,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"height","24px"),h(t,"viewBox","0 0 24 24"),h(t,"width","24px"),h(t,"fill","currentColor")},m(r,l){C(r,t,l),b(t,n),b(t,i)},p:L,i:L,o:L,d(r){r&&_(t)}}}class Qe extends H{constructor(t){super(),q(this,t,null,Ke,T,{})}}function Ut(e){let t,n,i,r,l,o,s,u,a,d,c=e[3]&&Wt(e);const f=e[11].default,m=vt(f,e,e[10],null);return{c(){t=N("div"),n=N("div"),i=I(),r=N("div"),c&&c.c(),l=I(),m&&m.c(),this.h()},l(g){t=B(g,"DIV",{role:!0,"aria-orientation":!0,class:!0,tabindex:!0,style:!0});var w=p(t);n=B(w,"DIV",{class:!0}),p(n).forEach(_),i=j(w),r=B(w,"DIV",{class:!0});var $=p(r);c&&c.l($),l=j($),m&&m.l($),$.forEach(_),w.forEach(_),this.h()},h(){h(n,"class","backdrop svelte-fzcj3l"),h(r,"class","wrapper svelte-fzcj3l"),J(r,"center",e[2]),J(r,"rtl",e[1]==="rtl"),h(t,"role","menu"),h(t,"aria-orientation","vertical"),h(t,"class","popover svelte-fzcj3l"),h(t,"tabindex","-1"),z(t,"--popover-top",`${e[4]}px`),z(t,"--popover-left",`${e[5]}px`)},m(g,w){C(g,t,w),b(t,n),b(t,i),b(t,r),c&&c.m(r,null),b(r,l),m&&m.m(r,null),u=!0,a||(d=[Q(n,"click",$t(e[13])),Q(t,"click",$t(e[12]))],a=!0)},p(g,w){e=g,e[3]?c?(c.p(e,w),w&8&&k(c,1)):(c=Wt(e),c.c(),k(c,1),c.m(r,l)):c&&(ie(),S(c,1,1,()=>{c=null}),le()),m&&m.p&&(!u||w&1024)&&yt(m,f,e,e[10],u?wt(f,e[10],w,null):Et(e[10]),null),(!u||w&4)&&J(r,"center",e[2]),(!u||w&2)&&J(r,"rtl",e[1]==="rtl"),(!u||w&16)&&z(t,"--popover-top",`${e[4]}px`),(!u||w&32)&&z(t,"--popover-left",`${e[5]}px`)},i(g){u||(k(c),k(m,g),Y(()=>{o||(o=ct(r,Zt,{delay:25,duration:150,easing:qt},!0)),o.run(1)}),Y(()=>{s||(s=ct(t,Ht,{},!0)),s.run(1)}),u=!0)},o(g){S(c),S(m,g),o||(o=ct(r,Zt,{delay:25,duration:150,easing:qt},!1)),o.run(0),s||(s=ct(t,Ht,{},!1)),s.run(0),u=!1},d(g){g&&_(t),c&&c.d(),m&&m.d(g),g&&o&&o.end(),g&&s&&s.end(),a=!1,F(d)}}}function Wt(e){let t,n,i,r,l,o;return n=new Qe({}),{c(){t=N("button"),U(n.$$.fragment),this.h()},l(s){t=B(s,"BUTTON",{"aria-label":!0,class:!0});var u=p(t);W(n.$$.fragment,u),u.forEach(_),this.h()},h(){h(t,"aria-label",i=e[6].core.close),h(t,"class","close icon svelte-fzcj3l")},m(s,u){C(s,t,u),R(n,t,null),r=!0,l||(o=Q(t,"click",$t(e[8])),l=!0)},p(s,u){(!r||u&64&&i!==(i=s[6].core.close))&&h(t,"aria-label",i)},i(s){r||(k(n.$$.fragment,s),r=!0)},o(s){S(n.$$.fragment,s),r=!1},d(s){s&&_(t),V(n),l=!1,o()}}}function Xe(e){let t,n,i,r,l=e[0]&&Ut(e);return{c(){l&&l.c(),t=jt()},l(o){l&&l.l(o),t=jt()},m(o,s){l&&l.m(o,s),C(o,t,s),n=!0,i||(r=Q(window,"resize",e[7]),i=!0)},p(o,[s]){o[0]?l?(l.p(o,s),s&1&&k(l,1)):(l=Ut(o),l.c(),k(l,1),l.m(t.parentNode,t)):l&&(ie(),S(l,1,1,()=>{l=null}),le())},i(o){n||(k(l),n=!0)},o(o){S(l),n=!1},d(o){l&&l.d(o),o&&_(t),i=!1,r()}}}function Ye(e,t,n){let i;fe(e,Ze,v=>n(6,i=v));let{$$slots:r={},$$scope:l}=t,{anchor:o=void 0}=t,{visible:s=!1}=t,{direction:u="ltr"}=t,{center:a=!1}=t,{closeButton:d=!1}=t,c,f;const m=()=>n(4,{bottom:c,left:f}=o?o.getBoundingClientRect():{bottom:0,left:0},c,n(5,f)),g=()=>n(0,s=!1);function w(v){ne.call(this,e,v)}const $=()=>n(0,s=!1);return e.$$set=v=>{"anchor"in v&&n(9,o=v.anchor),"visible"in v&&n(0,s=v.visible),"direction"in v&&n(1,u=v.direction),"center"in v&&n(2,a=v.center),"closeButton"in v&&n(3,d=v.closeButton),"$$scope"in v&&n(10,l=v.$$scope)},e.$$.update=()=>{e.$$.dirty&512&&m()},[s,u,a,d,c,f,i,m,g,o,l,r,w,$]}class tn extends H{constructor(t){super(),q(this,t,Ye,Xe,T,{anchor:9,visible:0,direction:1,center:2,closeButton:3})}}function en(e){let t,n,i;return{c(){t=y("svg"),n=y("path"),i=y("path"),this.h()},l(r){t=E(r,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var l=p(t);n=E(l,"path",{d:!0,fill:!0}),p(n).forEach(_),i=E(l,"path",{d:!0}),p(i).forEach(_),l.forEach(_),this.h()},h(){h(n,"d","M0 0h24v24H0V0z"),h(n,"fill","none"),h(i,"d","M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"height","24px"),h(t,"viewBox","0 0 24 24"),h(t,"width","24px"),h(t,"fill","currentColor")},m(r,l){C(r,t,l),b(t,n),b(t,i)},p:L,i:L,o:L,d(r){r&&_(t)}}}class nn extends H{constructor(t){super(),q(this,t,null,en,T,{})}}function rn(e){let t,n,i,r,l,o,s,u,a,d;return{c(){t=y("svg"),n=y("defs"),i=y("style"),r=D(`.e {
        fill: none;
      }
`),l=y("g"),o=y("g"),s=y("g"),u=y("g"),a=y("rect"),d=y("polygon"),this.h()},l(c){t=E(c,"svg",{xmlns:!0,viewBox:!0,height:!0,width:!0});var f=p(t);n=E(f,"defs",{});var m=p(n);i=E(m,"style",{});var g=p(i);r=X(g,`.e {
        fill: none;
      }
`),g.forEach(_),m.forEach(_),l=E(f,"g",{id:!0}),p(l).forEach(_),o=E(f,"g",{id:!0});var w=p(o);s=E(w,"g",{id:!0});var $=p(s);u=E($,"g",{});var v=p(u);a=E(v,"rect",{id:!0,class:!0,x:!0,width:!0,height:!0}),p(a).forEach(_),d=E(v,"polygon",{points:!0}),p(d).forEach(_),v.forEach(_),$.forEach(_),w.forEach(_),f.forEach(_),this.h()},h(){h(l,"id","a"),h(a,"id","d"),h(a,"class","e"),h(a,"x","0"),h(a,"width","15"),h(a,"height","15"),h(d,"points","15 6.5 8.5 6.5 8.5 0 6.5 0 6.5 6.5 0 6.5 0 8.5 6.5 8.5 6.5 15 8.5 15 8.5 8.5 15 8.5 15 6.5"),h(s,"id","c"),h(o,"id","b"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"viewBox","0 0 15 15"),h(t,"height","24px"),h(t,"width","24px")},m(c,f){C(c,t,f),b(t,n),b(n,i),b(i,r),b(t,l),b(t,o),b(o,s),b(s,u),b(u,a),b(u,d)},p:L,i:L,o:L,d(c){c&&_(t)}}}class ln extends H{constructor(t){super(),q(this,t,null,rn,T,{})}}function on(e){let t,n,i,r,l,o,s;return{c(){t=y("svg"),n=y("g"),i=y("rect"),r=y("g"),l=y("g"),o=y("polygon"),s=y("polygon"),this.h()},l(u){t=E(u,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var a=p(t);n=E(a,"g",{});var d=p(n);i=E(d,"rect",{fill:!0,height:!0,width:!0}),p(i).forEach(_),d.forEach(_),r=E(a,"g",{});var c=p(r);l=E(c,"g",{});var f=p(l);o=E(f,"polygon",{points:!0}),p(o).forEach(_),s=E(f,"polygon",{points:!0}),p(s).forEach(_),f.forEach(_),c.forEach(_),a.forEach(_),this.h()},h(){h(i,"fill","none"),h(i,"height","24"),h(i,"width","24"),h(o,"points","20,8 15,8 15,10 18,10 18,21 6,21 6,10 9,10 9,8 4,8 4,23 20,23"),h(s,"points","11,16 13,16 13,5 16,5 12,1 8,5 11,5"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"height","24px"),h(t,"viewBox","0 0 24 24"),h(t,"width","24px"),h(t,"fill","currentColor")},m(u,a){C(u,t,a),b(t,n),b(n,i),b(t,r),b(r,l),b(l,o),b(l,s)},p:L,i:L,o:L,d(u){u&&_(t)}}}class sn extends H{constructor(t){super(),q(this,t,null,on,T,{})}}const un=typeof window<"u";function cn(e){let t;return{c(){t=D("Menu")},l(n){t=X(n,"Menu")},m(n,i){C(n,t,i)},d(n){n&&_(t)}}}function an(e){let t,n;return t=new nn({props:{slot:"icon"}}),{c(){U(t.$$.fragment)},l(i){W(t.$$.fragment,i)},m(i,r){R(t,i,r),n=!0},p:L,i(i){n||(k(t.$$.fragment,i),n=!0)},o(i){S(t.$$.fragment,i),n=!1},d(i){V(t,i)}}}function fn(e){let t,n,i,r,l,o;return n=new ln({}),{c(){t=N("a"),U(n.$$.fragment),i=I(),r=N("span"),l=D("More from author"),this.h()},l(s){t=B(s,"A",{"aria-label":!0,href:!0,class:!0,role:!0,"aria-haspopup":!0});var u=p(t);W(n.$$.fragment,u),i=j(u),r=B(u,"SPAN",{});var a=p(r);l=X(a,"More from author"),a.forEach(_),u.forEach(_),this.h()},h(){h(t,"aria-label","More blog posts from the same author"),h(t,"href","/"),h(t,"class","menu"),h(t,"role","menuitem"),h(t,"aria-haspopup","menu")},m(s,u){C(s,t,u),R(n,t,null),b(t,i),b(t,r),b(r,l),o=!0},i(s){o||(k(n.$$.fragment,s),o=!0)},o(s){S(n.$$.fragment,s),o=!1},d(s){s&&_(t),V(n)}}}function hn(e){let t,n,i,r,l,o,s,u,a,d,c,f,m,g,w,$,v,Z,M,tt,ot,pt,Nt,P=!e[2]&&fn();return i=new sn({}),{c(){P&&P.c(),t=I(),n=N("button"),U(i.$$.fragment),r=I(),l=N("span"),o=D("Share"),s=I(),u=N("a"),a=y("svg"),d=y("g"),c=y("path"),f=y("g"),m=y("path"),g=y("g"),w=y("path"),$=y("g"),v=y("path"),Z=I(),M=N("span"),tt=D("Papyrs"),this.h()},l(x){P&&P.l(x),t=j(x),n=B(x,"BUTTON",{type:!0,role:!0,"aria-haspopup":!0,class:!0});var A=p(n);W(i.$$.fragment,A),r=j(A),l=B(A,"SPAN",{});var St=p(l);o=X(St,"Share"),St.forEach(_),A.forEach(_),s=j(x),u=B(x,"A",{href:!0,class:!0,"aria-haspopup":!0,rel:!0});var st=p(u);a=E(st,"svg",{height:!0,width:!0,viewBox:!0,xmlns:!0});var et=p(a);d=E(et,"g",{transform:!0});var Bt=p(d);c=E(Bt,"path",{d:!0,style:!0}),p(c).forEach(_),Bt.forEach(_),f=E(et,"g",{transform:!0});var Mt=p(f);m=E(Mt,"path",{d:!0,style:!0}),p(m).forEach(_),Mt.forEach(_),g=E(et,"g",{transform:!0});var Pt=p(g);w=E(Pt,"path",{d:!0,style:!0}),p(w).forEach(_),Pt.forEach(_),$=E(et,"g",{transform:!0});var At=p($);v=E(At,"path",{d:!0,style:!0}),p(v).forEach(_),At.forEach(_),et.forEach(_),Z=j(st),M=B(st,"SPAN",{});var zt=p(M);tt=X(zt,"Papyrs"),zt.forEach(_),st.forEach(_),this.h()},h(){h(n,"type","button"),h(n,"role","menuitem"),h(n,"aria-haspopup","menu"),h(n,"class","menu"),h(c,"d","M0,8.808L0,-10.596L-30,-10.596L-30,19.404L-10.596,19.404L0,8.808Z"),z(c,"fill","white"),z(c,"fill-rule","nonzero"),h(d,"transform","matrix(1,0,0,1,30,10.596)"),h(m,"d","M0,-1.296L1.782,-1.296C2.358,-1.296 2.817,-1.455 3.159,-1.774C3.501,-2.091 3.672,-2.514 3.672,-3.042C3.672,-3.57 3.501,-3.993 3.159,-4.312C2.817,-4.629 2.358,-4.788 1.782,-4.788L0,-4.788L0,-1.296ZM-2.7,5.922L-2.7,-7.218L1.782,-7.218C2.706,-7.218 3.513,-7.044 4.203,-6.696C4.893,-6.348 5.427,-5.862 5.805,-5.238C6.183,-4.614 6.372,-3.882 6.372,-3.042C6.372,-2.214 6.18,-1.485 5.796,-0.856C5.412,-0.226 4.878,0.264 4.194,0.612C3.51,0.96 2.706,1.134 1.782,1.134L0,1.134L0,5.922L-2.7,5.922Z"),z(m,"fill-rule","nonzero"),h(f,"transform","matrix(1,0,0,1,12.5867,15.7577)"),h(w,"d","M0,-29L26,-29L26,-12.925L15.958,-12.925L15.958,-3L0,-3L0,-29ZM28,-28L28,-31L-2,-31L-2,-1L1,-1L1,2L17.404,2L31,-11.596L31,-28L28,-28Z"),z(w,"fill-rule","nonzero"),h(g,"transform","matrix(1,0,0,1,2,31.0005)"),h(v,"d","M0,8.094L0,0L8.094,0L0,8.094Z"),z(v,"fill","rgb(255, 238, 214)"),z(v,"fill-rule","nonzero"),h($,"transform","matrix(1,0,0,1,19.9584,20.0762)"),h(a,"height","24px"),h(a,"width","24px"),h(a,"viewBox","0 0 33 34"),h(a,"xmlns","http://www.w3.org/2000/svg"),h(u,"href","https://papy.rs"),h(u,"class","menu"),h(u,"aria-haspopup","menu"),h(u,"rel","noopener norefferer")},m(x,A){P&&P.m(x,A),C(x,t,A),C(x,n,A),R(i,n,null),b(n,r),b(n,l),b(l,o),C(x,s,A),C(x,u,A),b(u,a),b(a,d),b(d,c),b(a,f),b(f,m),b(a,g),b(g,w),b(a,$),b($,v),b(u,Z),b(u,M),b(M,tt),ot=!0,pt||(Nt=Q(n,"click",se),pt=!0)},p:L,i(x){ot||(k(P),k(i.$$.fragment,x),ot=!0)},o(x){S(P),S(i.$$.fragment,x),ot=!1},d(x){P&&P.d(x),x&&_(t),x&&_(n),V(i),x&&_(s),x&&_(u),pt=!1,Nt()}}}function dn(e){let t,n,i,r,l,o;function s(c){e[3](c)}let u={$$slots:{icon:[an],default:[cn]},$$scope:{ctx:e}};e[1]!==void 0&&(u.button=e[1]),t=new Ge({props:u}),lt.push(()=>Dt(t,"button",s)),t.$on("click",e[4]);function a(c){e[5](c)}let d={anchor:e[1],$$slots:{default:[hn]},$$scope:{ctx:e}};return e[0]!==void 0&&(d.visible=e[0]),r=new tn({props:d}),lt.push(()=>Dt(r,"visible",a)),{c(){U(t.$$.fragment),i=I(),U(r.$$.fragment)},l(c){W(t.$$.fragment,c),i=j(c),W(r.$$.fragment,c)},m(c,f){R(t,c,f),C(c,i,f),R(r,c,f),o=!0},p(c,[f]){const m={};f&128&&(m.$$scope={dirty:f,ctx:c}),!n&&f&2&&(n=!0,m.button=c[1],Tt(()=>n=!1)),t.$set(m);const g={};f&2&&(g.anchor=c[1]),f&128&&(g.$$scope={dirty:f,ctx:c}),!l&&f&1&&(l=!0,g.visible=c[0],Tt(()=>l=!1)),r.$set(g)},i(c){o||(k(t.$$.fragment,c),k(r.$$.fragment,c),o=!0)},o(c){S(t.$$.fragment,c),S(r.$$.fragment,c),o=!1},d(c){V(t,c),c&&_(i),V(r,c)}}}function _n(e,t,n){let i,r;const{location:{pathname:l}}=un?window:{location:{pathname:"/"}};let o=l==="/";function s(d){r=d,n(1,r)}const u=()=>n(0,i=!0);function a(d){i=d,n(0,i)}return[i,r,o,s,u,a]}class mn extends H{constructor(t){super(),q(this,t,_n,dn,T,{})}}function pn(e){let t,n,i;return n=new mn({}),{c(){t=N("nav"),U(n.$$.fragment)},l(r){t=B(r,"NAV",{});var l=p(t);W(n.$$.fragment,l),l.forEach(_)},m(r,l){C(r,t,l),R(n,t,null),i=!0},p:L,i(r){i||(k(n.$$.fragment,r),i=!0)},o(r){S(n.$$.fragment,r),i=!1},d(r){r&&_(t),V(n)}}}class vn extends H{constructor(t){super(),q(this,t,null,pn,T,{})}}export{vn as default};
