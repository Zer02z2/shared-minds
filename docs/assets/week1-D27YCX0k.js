/* empty css              */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=l(o);fetch(o.href,e)}})();const d={float:(t,n)=>{const l=Math.random()*(n-t);return t+l},integer:(t,n)=>Math.floor(d.float(t,n))},y=t=>{const n=t.getBoundingClientRect(),[l,a]=[n.left,n.top];return[l,a]},g=(t,n,l,a,o)=>{t.beginPath(),t.moveTo(n,l),t.lineTo(a,o),t.stroke()},f=document.getElementById("canvas"),c=f.getContext("2d"),i=document.getElementById("input-field");let s={};window.localStorage.clear();const m=()=>{if(!(c&&i))return;f.width=window.innerWidth,f.height=window.innerHeight,c.fillStyle="rgba(150,150,150,0.9)",c.fillRect(0,0,f.width,f.height),i.style.left="2vw",i.style.top="5vh";let[t,n]=y(i);console.log(t),i.addEventListener("keydown",l=>{l.key==="Enter"&&(i.value.split(new RegExp("(\\s+|(?=\\.)|(?<=\\.)|\\b)")).filter(Boolean).forEach(e=>{if(e==="."){window.localStorage.removeItem("lastWord"),t=d.float(10,50),n+=80;return}if(!/[a-zA-Z]/.test(e))return;const r=window.localStorage.getItem("lastWord");if(s[e])s[e].occurrence++,r&&g(c,s[r].x,s[r].y,s[e].x,s[e].y);else{const u=n+d.float(-20,20);s[e]={occurrence:1,x:t,y:u},c.fillStyle="black",c.font="30px Helvetica",c.fillText(e,t,u),r&&g(c,s[r].x,s[r].y,t,u)}window.localStorage.setItem("lastWord",e),t+=e.length*30+d.float(20,50)}),i.value="",i.style.left=`${t}px`,i.style.top=`${n}px`)})};m();
