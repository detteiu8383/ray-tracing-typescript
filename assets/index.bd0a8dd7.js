var q=Object.defineProperty;var I=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();class n{constructor(e,t,o){w(this,"e",[0,0,0]);this.e[0]=e,this.e[1]=t,this.e[2]=o}static add(e,t){return new n(e.e[0]+t.e[0],e.e[1]+t.e[1],e.e[2]+t.e[2])}static sub(e,t){return new n(e.e[0]-t.e[0],e.e[1]-t.e[1],e.e[2]-t.e[2])}static scale(e,t){return new n(e.e[0]*t,e.e[1]*t,e.e[2]*t)}static mul(e,t){return new n(e.e[0]*t.e[0],e.e[1]*t.e[1],e.e[2]*t.e[2])}static div(e,t){return new n(e.e[0]/t,e.e[1]/t,e.e[2]/t)}static mag(e){return Math.sqrt(n.lengthSquared(e))}static lengthSquared(e){return e.e[0]*e.e[0]+e.e[1]*e.e[1]+e.e[2]*e.e[2]}static dot(e,t){return e.e[0]*t.e[0]+e.e[1]*t.e[1]+e.e[2]*t.e[2]}static cross(e,t){return new n(e.e[1]*t.e[2]-e.e[2]*t.e[1],e.e[2]*t.e[0]-e.e[0]*t.e[2],e.e[0]*t.e[1]-e.e[1]*t.e[0])}static normalize(e){const t=n.mag(e);return t===0?new n(0,0,0):n.div(e,t)}}class a extends n{constructor(e,t,o){super(e,t,o)}static legalize(e){return new a(Math.min(Math.max(e.e[0],0),1),Math.min(Math.max(e.e[1],0),1),Math.min(Math.max(e.e[2],0),1))}static writeColor(e,t,o){const r=a.scale(a.legalize(e),255);o[t]=r.e[0],o[t+1]=r.e[1],o[t+2]=r.e[2],o[t+3]=255}}class O{constructor(e,t){this.origin=e,this.direction=t}at(e){return n.add(this.origin,n.scale(this.direction,e))}}const A=s=>{const e=n.normalize(s.direction),t=.5*(e.e[1]+1);return a.add(a.scale(new a(1,1,1),1-t),a.scale(new a(.5,.7,1),t))},E=()=>{const s=1.7777777777777777,e=400,t=Math.floor(e/s),o=4,r=new Uint8Array(e*t*o),i=2,c=s*i,p=1,d=new n(0,0,0),m=new n(c,0,0),f=new n(0,i,0),y=n.sub(n.sub(n.sub(d,n.div(m,2)),n.div(f,2)),new n(0,0,p));for(let l=t-1;l>=0;l--)for(let u=0;u<e;u++){const b=u/(e-1),L=l/(t-1),z=((t-l)*e+u)*o,C=new O(d,n.sub(n.add(n.add(y,n.scale(m,b)),n.scale(f,L)),d)),D=A(C);a.writeColor(D,z,r)}const h=document.getElementById("canvas");h.width=e,h.height=t;const g=h.getContext("2d");if(g===null)throw new Error("Failed to get context");const x=new Uint8ClampedArray(r),M=new ImageData(x,e,t);g.putImageData(M,0,0)};E();
