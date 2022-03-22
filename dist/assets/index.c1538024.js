import{c as L,a as k,r as p,s as l,j as c,b as e,L as h,H as u,d as E,W as S,R as _,e as $,P as H,B as N}from"./vendor.ad6a0d43.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}};P();const R={connected:!1,address:""},b=L({name:"wallet",initialState:R,reducers:{connect:(r,o)=>(r.connected=o.payload.connected,r.address=o.payload.address,r)}}),{connect:K}=b.actions,U=r=>r.wallet;var T=b.reducer;const O=k({reducer:{wallet:T}}),A="modulepreload",g={},I="/",x=function(o,a){return!a||a.length===0?o():Promise.all(a.map(s=>{if(s=`${I}${s}`,s in g)return;g[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":A,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((v,w)=>{i.addEventListener("load",v),i.addEventListener("error",w)})})).then(()=>o())},M=[{path:"/",exact:!0,component:p.exports.lazy(()=>x(()=>import("./index.33f90f1e.js"),["assets/index.33f90f1e.js","assets/vendor.ad6a0d43.js"]))},{path:"/mint",component:p.exports.lazy(()=>x(()=>import("./index.c033f8c2.js"),["assets/index.c033f8c2.js","assets/vendor.ad6a0d43.js"]))}];var W="/assets/logo.2b50e850.png";const y={sm:"767px",md:"768px",lg:"992px",xl:"1200px"},m=r=>o=>r==="sm"?`@media screen and (max-width: ${y[r]} ) {${o}}`:`@media screen and (min-width: ${y[r]} ) {${o}}`,B=l.img`
  width: 200px;
  cursor: pointer;
`,C=l.div`
  padding: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`,j=l.div`
  background-color: #000;
  font-size: 24px;
  ${m("sm")(`
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    display: none;
    &.toggled {
      display: block;
    }
  `)}
  ${m("md")(`
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    width: auto;
  `)}
`,d=l.div`
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: #aaa;
  }
  ${m("md")(`
    margin-bottom: 0px;
  `)}
`,D=l.div`
  display: flex;
  flex-direction: column;
  ${m("md")(`
    display: none;
  `)}
`,f=l.div`
  width: 28px;
  height: 3px;
  border-radius: 1.5px;
  background-color: #fff;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`,z=({clickEvent:r})=>c(D,{onClick:r,children:[e(f,{}),e(f,{}),e(f,{})]}),q=()=>{const[r,o]=p.exports.useState(!1);return c(C,{className:"header",children:[e(h,{to:"/",children:e(B,{src:W,alt:""})}),c(j,{className:r?"toggled":"",children:[e(u,{to:"/#club",children:e(d,{children:"THE CLUB"})}),e(u,{to:"/#team",children:e(d,{children:"THE TEAM"})}),e(u,{to:"/#roadmap",children:e(d,{children:"ROADMAP"})}),e(h,{to:"/mint",children:e(d,{children:"MINT"})})]}),e(z,{clickEvent:()=>{o(!r)}})]})};function V(){return c("div",{className:"App",children:[e(q,{}),e("div",{className:"page-wrapper",children:e(p.exports.Suspense,{fallback:e("div",{children:"Loading"}),children:E(M)})})]})}const F=S`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Syne Mono';
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    /* font-family: 'Syne Mono'; */
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
`;_.render(c($.StrictMode,{children:[e(F,{}),e(H,{store:O,children:e(N,{children:e(V,{})})})]}),document.getElementById("root"));export{K as c,m as r,U as s};
