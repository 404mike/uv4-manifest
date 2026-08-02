/**
 * Minified by jsDelivr using Terser v5.48.0.
 * Original file: /npm/@mango-iiif/iiif-viewer@0.3.3/src/dist/mango-viewer-element.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{
$ as e,A as t,B as n,C as r,Ct as i,D as a,Dt as o,Et as s,G as c,H as l,I as u,J as d,M as f,N as p,O as m,Q as h,R as g,S as _,St as v,T as y,Tt as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,_t as O,at as k,b as A,ct as j,dt as M,et as N,f as P,ft as F,g as I,gt as ee,h as te,i as L,it as R,j as z,k as B,lt as V,mt as H,n as U,nt as W,o as G,ot as K,p as ne,q,r as J,rt as re,st as ie,t as Y,u as ae,ut as oe,v as se,vt as X,w as ce,wt as le,x as ue,xt as Z,y as de,yt as Q,z as fe}from"./client-CruOUf1V.js";
import{
n as pe,t as me}from"./rectangleLabelLayout-dH3PYO3T.js";
import"./index-client-B4rLUVh0.js";
import{
i as he,n as ge,r as _e,t as ve}from"./i18n-CG_FGWUx.js";
import{
C as ye,D as be,E as xe,S as Se,T as Ce,_ as we,b as Te,c as Ee,g as De,h as Oe,m as ke,n as Ae,p as je,r as Me,s as Ne,t as Pe,v as Fe,w as Ie,x as Le,y as Re}from"./viewBoxAnimation-f4NOt-Mr.js";
import{
n as ze,t as Be}from"./x-g5RBTE3r.js";
import{
a as Ve,i as He,n as Ue,o as We,r as Ge,t as Ke}from"./PanelCloseButton-BNGDiR-j.js";
import{
a as qe,c as Je,i as Ye,n as Xe,r as Ze,s as Qe,t as $e}from"./chunk-CIAQZ2EB-IpMLQoKY.js";
var et="",tt=null,nt=new Set;
function rt(e){
if(et=e,tt)try{
tt.replaceSync(et)}catch{
tt=null}nt.forEach(e=>at(e))}function it(e,t=12){
let r=e&&e.shadowRoot;
r?(nt.add(r),at(r)):t>0&&requestAnimationFrame(()=>it(e,t-1))}function at(e){
if(!et)return;
if("adoptedStyleSheets"in e&&typeof CSSStyleSheet<"u"){
let t=e;
try{
if(tt||(tt=new CSSStyleSheet).replaceSync(et),t.adoptedStyleSheets.includes(tt))return;
return t.adoptedStyleSheets=[...t.adoptedStyleSheets,tt],void(t.__mangoCssAdopted=!0)}catch(e){
console.warn("[Browser Inject] CSSStyleSheet adoption failed, falling back:",e)}}let t=()=>{
if(e.querySelector("style[data-mango-viewer-css]"))return;
let t=document.createElement("style");
t.dataset.mangoViewerCss="mango-viewer-css",t.textContent=et,e.prepend(t)};
t();
let r=e;
r.__mangoCssObserver||(r.__mangoCssObserver=new MutationObserver(()=>t()),r.__mangoCssObserver.observe(e,{
childList:!0}))}if(typeof window<"u"&&(window.__setMangoViewerCss=rt),typeof window<"u"&&window.customElements){
let e=window.customElements.define;
window.customElements.define=function(t,r,a){
if(!window.customElements.get(t)){
if("mango-viewer"===t){
let e=r.prototype.connectedCallback;
r.prototype.connectedCallback=function(){
let t=e?e.call(this):void 0;
return it(this),t}}return e.call(this,t,r,a)}console.warn(`Custom element "${
t}" is already registered. Ignoring re-registration during HMR.`)}}var ot=e=>"object"==typeof e&&!!e&&!Array.isArray(e),st=(e,t)=>{
if(e){
if("string"==typeof e)try{
return JSON.parse(e)}catch(e){
return void t?.(e)}return e}},ct=e=>ot(e)?void 0===e.plugins||ot(e.plugins)?e:{
...e,plugins:{
}}:{
},lt=n('<div class="plugin-panel__body svelte-xnxskj"></div>'),ut=n('<div class="plugin-panel__panel svelte-xnxskj"><div class="plugin-panel__title svelte-xnxskj"> </div> <div class="plugin-panel__body svelte-xnxskj"></div></div>'),dt=n("<div><!></div>");
function ft(e,t){
le(t,!1);
let a=U(t,"plugin",8),n=U(t,"context",8),s=U(t,"slot",8),l=K(null),c=K(!1),v=!1,b=null,m=!1,x=async()=>{
if(d(c)||!d(l))return;
j(c,!0),m=!1;
let e={
...n(),mount:d(l)};
try{
let t=a().init(e);
t&&"function"==typeof t.then&&(b=t,await b)}catch(e){
m=!0;
let t=`Plugin "${
a().label}" (${
a().id}) failed to initialize`;
console.error(t,e),n().events.emit("pluginError",{
pluginId:a().id,pluginLabel:a().label,phase:"init",message:t,cause:e}),d(l)&&ie(l,d(l).innerHTML=`\n          <div style="padding: 12px;
 background: rgba(255, 79, 79, 0.1);
 border: 1px solid rgba(255, 79, 79, 0.3);
 border-radius: 8px;
 color: #ff9999;
">\n            <div style="font-weight: 600;
 margin-bottom: 4px;
">Plugin Error</div>\n            <div style="font-size: 12px;
 opacity: 0.9;
">${
a().label} failed to load</div>\n          </div>\n        `)}};
p(()=>{
x()}),f(()=>{
let e=()=>{
if(!v&&d(c)){
v=!0;
try{
a().destroy(),d(l)?.replaceChildren()}catch(e){
let t=`Plugin "${
a().label}" (${
a().id}) failed during cleanup`;
console.error(t,e),n().events.emit("pluginError",{
pluginId:a().id,pluginLabel:a().label,phase:"destroy",message:t,cause:e})}}};
b&&!m?b.finally(e):e()}),w(()=>(d(l),d(c)),()=>{
d(l)&&!d(c)&&x()}),E(),G();
var y=dt();
let _;
var k=W(y),I=e=>{
var t=lt();
ae(t,e=>j(l,e),()=>d(l)),g(e,t)},C=e=>{
var t=ut(),r=W(t),i=W(r,!0);
o(r);
var n=R(r,2);
ae(n,e=>j(l,e),()=>d(l)),o(t),h(()=>u(i,(q(a()),T(()=>a().label)))),g(e,t)};
z(k,e=>{
"overlay"===s()?e(I):e(C,-1)}),o(y),h(()=>_=r(y,1,"plugin-panel svelte-xnxskj",null,_,{
"plugin-panel--overlay":"overlay"===s()})),g(e,y),i()}var pt=n("<div></div>");
function mt(e,t){
let a=U(t,"plugins",24,()=>[]),i=U(t,"context",8),n=U(t,"slot",8);
var s=pt();
B(s,5,a,e=>e.id,(e,t)=>{
ft(e,{
get plugin(){
return d(t)},get context(){
return i()},get slot(){
return n()}})}),o(s),h(()=>r(s,1,`plugin-slot plugin-slot--${
n()??""}`,"svelte-1hfdlkl")),g(e,s)}var ht=new Set(["$$slots","$$events","$$legacy"]);
function gt(e,t){
let r=J(t,ht),a=[["path",{
d:"M5 12h14"}],["path",{
d:"m12 5 7 7-7 7"}]];
ze(e,L({
name:"arrow-right"},()=>r,{
get iconNode(){
return a}}))}var $=new Set(["$$slots","$$events","$$legacy"]);
function _t(e,t){
let r=J(t,$),a=[["path",{
d:"m6 9 6 6 6-6"}]];
ze(e,L({
name:"chevron-down"},()=>r,{
get iconNode(){
return a}}))}var vt=new Set(["$$slots","$$events","$$legacy"]);
function yt(e,t){
let r=J(t,vt),a=[["path",{
d:"m11 17-5-5 5-5"}],["path",{
d:"m18 17-5-5 5-5"}]];
ze(e,L({
name:"chevrons-left"},()=>r,{
get iconNode(){
return a}}))}var bt=new Set(["$$slots","$$events","$$legacy"]);
function xt(e,t){
let r=J(t,bt),a=[["path",{
d:"m6 17 5-5-5-5"}],["path",{
d:"m13 17 5-5-5-5"}]];
ze(e,L({
name:"chevrons-right"},()=>r,{
get iconNode(){
return a}}))}var St=new Set(["$$slots","$$events","$$legacy"]);
function Ct(e,t){
let r=J(t,St),a=[["rect",{
width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{
d:"M12 3v18"}]];
ze(e,L({
name:"columns-2"},()=>r,{
get iconNode(){
return a}}))}var wt=new Set(["$$slots","$$events","$$legacy"]);
function Tt(e,t){
let r=J(t,wt),a=[["circle",{
cx:"12",cy:"12",r:"1"}],["circle",{
cx:"19",cy:"12",r:"1"}],["circle",{
cx:"5",cy:"12",r:"1"}]];
ze(e,L({
name:"ellipsis"},()=>r,{
get iconNode(){
return a}}))}var Et=new Set(["$$slots","$$events","$$legacy"]);
function Dt(e,t){
let r=J(t,Et),a=[["path",{
d:"m15 15 6 6"}],["path",{
d:"m15 9 6-6"}],["path",{
d:"M21 16v5h-5"}],["path",{
d:"M21 8V3h-5"}],["path",{
d:"M3 16v5h5"}],["path",{
d:"m3 21 6-6"}],["path",{
d:"M3 8V3h5"}],["path",{
d:"M9 9 3 3"}]];
ze(e,L({
name:"expand"},()=>r,{
get iconNode(){
return a}}))}var Ot=new Set(["$$slots","$$events","$$legacy"]);
function kt(e,t){
let r=J(t,Ot),a=[["path",{
d:"M12 3v18"}],["path",{
d:"M3 12h18"}],["rect",{
x:"3",y:"3",width:"18",height:"18",rx:"2"}]];
ze(e,L({
name:"grid-2x2"},()=>r,{
get iconNode(){
return a}}))}var At=new Set(["$$slots","$$events","$$legacy"]);
function jt(e,t){
let r=J(t,At),a=[["path",{
d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}],["path",{
d:"m18 15 4-4"}],["path",{
d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];
ze(e,L({
name:"hammer"},()=>r,{
get iconNode(){
return a}}))}var Mt=new Set(["$$slots","$$events","$$legacy"]);
function Nt(e,t){
let r=J(t,Mt),a=[["path",{
d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{
d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];
ze(e,L({
name:"house"},()=>r,{
get iconNode(){
return a}}))}var Pt=new Set(["$$slots","$$events","$$legacy"]);
function Ft(e,t){
let r=J(t,Pt),a=[["line",{
x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{
d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{
x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{
x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{
d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{
d:"M21 15V5a2 2 0 0 0-2-2H9"}]];
ze(e,L({
name:"image-off"},()=>r,{
get iconNode(){
return a}}))}var It=new Set(["$$slots","$$events","$$legacy"]);
function Lt(e,t){
let r=J(t,It),a=[["rect",{
width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{
cx:"9",cy:"9",r:"2"}],["path",{
d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];
ze(e,L({
name:"image"},()=>r,{
get iconNode(){
return a}}))}var Rt=new Set(["$$slots","$$events","$$legacy"]);
function zt(e,t){
let r=J(t,Rt),a=[["path",{
d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"}],["path",{
d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"}],["circle",{
cx:"13",cy:"7",r:"1",fill:"currentColor"}],["rect",{
x:"8",y:"2",width:"14",height:"14",rx:"2"}]];
ze(e,L({
name:"images"},()=>r,{
get iconNode(){
return a}}))}var Bt=new Set(["$$slots","$$events","$$legacy"]);
function Vt(e,t){
let r=J(t,Bt),a=[["circle",{
cx:"12",cy:"12",r:"10"}],["path",{
d:"M12 16v-4"}],["path",{
d:"M12 8h.01"}]];
ze(e,L({
name:"info"},()=>r,{
get iconNode(){
return a}}))}var Ht=new Set(["$$slots","$$events","$$legacy"]);
function Ut(e,t){
let r=J(t,Ht),a=[["rect",{
width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{
width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{
width:"7",height:"7",x:"14",y:"14",rx:"1"}]];
ze(e,L({
name:"layout-panel-left"},()=>r,{
get iconNode(){
return a}}))}var Wt=new Set(["$$slots","$$events","$$legacy"]);
function Gt(e,t){
let r=J(t,Wt),a=[["path",{
d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{
d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];
ze(e,L({
name:"link"},()=>r,{
get iconNode(){
return a}}))}var Kt=new Set(["$$slots","$$events","$$legacy"]);
function qt(e,t){
let r=J(t,Kt),a=[["path",{
d:"M8 5h13"}],["path",{
d:"M13 12h8"}],["path",{
d:"M13 19h8"}],["path",{
d:"M3 10a2 2 0 0 0 2 2h3"}],["path",{
d:"M3 5v12a2 2 0 0 0 2 2h3"}]];
ze(e,L({
name:"list-tree"},()=>r,{
get iconNode(){
return a}}))}var Jt=new Set(["$$slots","$$events","$$legacy"]);
function Yt(e,t){
let r=J(t,Jt),a=[["path",{
d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{
d:"M7 11h10"}],["path",{
d:"M7 15h6"}],["path",{
d:"M7 7h8"}]];
ze(e,L({
name:"message-square-text"},()=>r,{
get iconNode(){
return a}}))}var Xt=new Set(["$$slots","$$events","$$legacy"]);
function Zt(e,t){
let r=J(t,Xt),a=[["path",{
d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];
ze(e,L({
name:"message-square"},()=>r,{
get iconNode(){
return a}}))}var Qt=new Set(["$$slots","$$events","$$legacy"]);
function $t(e,t){
let r=J(t,Qt),a=[["rect",{
width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{
x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{
x1:"12",x2:"12",y1:"17",y2:"21"}]];
ze(e,L({
name:"monitor"},()=>r,{
get iconNode(){
return a}}))}var en=new Set(["$$slots","$$events","$$legacy"]);
function tn(e,t){
let r=J(t,en),a=[["path",{
d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{
d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];
ze(e,L({
name:"quote"},()=>r,{
get iconNode(){
return a}}))}var nn=new Set(["$$slots","$$events","$$legacy"]);
function rn(e,t){
let r=J(t,nn),a=[["path",{
d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{
d:"m9 8 3-3-3-3"}],["path",{
d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];
ze(e,L({
name:"rotate-cw-square"},()=>r,{
get iconNode(){
return a}}))}var an=new Set(["$$slots","$$events","$$legacy"]);
function on(e,t){
let r=J(t,an),a=[["path",{
d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{
d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{
d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{
d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{
cx:"12",cy:"12",r:"1"}],["path",{
d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];
ze(e,L({
name:"scan-eye"},()=>r,{
get iconNode(){
return a}}))}var sn=new Set(["$$slots","$$events","$$legacy"]);
function cn(e,t){
let r=J(t,sn),a=[["path",{
d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{
d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];
ze(e,L({
name:"scroll"},()=>r,{
get iconNode(){
return a}}))}var ln=new Set(["$$slots","$$events","$$legacy"]);
function un(e,t){
let r=J(t,ln),a=[["path",{
d:"m21 21-4.34-4.34"}],["circle",{
cx:"11",cy:"11",r:"8"}]];
ze(e,L({
name:"search"},()=>r,{
get iconNode(){
return a}}))}var dn=new Set(["$$slots","$$events","$$legacy"]);
function fn(e,t){
let r=J(t,dn),a=[["path",{
d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{
cx:"12",cy:"12",r:"3"}]];
ze(e,L({
name:"settings"},()=>r,{
get iconNode(){
return a}}))}var pn=new Set(["$$slots","$$events","$$legacy"]);
function mn(e,t){
let r=J(t,pn),a=[["circle",{
cx:"18",cy:"5",r:"3"}],["circle",{
cx:"6",cy:"12",r:"3"}],["circle",{
cx:"18",cy:"19",r:"3"}],["line",{
x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{
x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];
ze(e,L({
name:"share-2"},()=>r,{
get iconNode(){
return a}}))}var hn=new Set(["$$slots","$$events","$$legacy"]);
function gn(e,t){
let r=J(t,hn),a=[["path",{
d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{
d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{
d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{
d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];
ze(e,L({
name:"shrink"},()=>r,{
get iconNode(){
return a}}))}var _n=new Set(["$$slots","$$events","$$legacy"]);
function vn(e,t){
let r=J(t,_n),a=[["path",{
d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{
d:"M20 2v4"}],["path",{
d:"M22 4h-4"}],["circle",{
cx:"4",cy:"20",r:"2"}]];
ze(e,L({
name:"sparkles"},()=>r,{
get iconNode(){
return a}}))}var yn=new Set(["$$slots","$$events","$$legacy"]);
function bn(e,t){
let r=J(t,yn),a=[["path",{
d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{
d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{
x1:"12",x2:"12",y1:"4",y2:"20"}]];
ze(e,L({
name:"square-split-horizontal"},()=>r,{
get iconNode(){
return a}}))}var xn=new Set(["$$slots","$$events","$$legacy"]);
function Sn(e,t){
let r=J(t,xn),a=[["path",{
d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];
ze(e,L({
name:"star"},()=>r,{
get iconNode(){
return a}}))}var Cn=(e,t)=>{
if(e.rect)return{
x:e.rect.x,y:e.rect.y,w:e.rect.w,h:e.rect.h};
if(e.polygon?.points?.length){
let t=e.polygon.points.map(e=>e.x),r=e.polygon.points.map(e=>e.y),a=Math.min(...t),o=Math.max(...t),i=Math.min(...r);
return{
x:a,y:i,w:o-a,h:Math.max(...r)-i}}if(e.point){
let r=t?Math.max(40,.25*Math.min(t.w,t.h)):200;
return{
x:e.point.x-r/2,y:e.point.y-r/2,w:r,h:r}}return null},wn=(e,t=.12)=>{
let r=Math.max(e.w,e.h)*t;
return{
x:Math.max(0,e.x-r),y:Math.max(0,e.y-r),w:e.w+2*r,h:e.h+2*r}},Tn=()=>{
let e=null;
return{
id:"annotation-focus",label:"Annotation Focus",slot:"overlay",init(t){
e=t.events.on("annotationSelect",e=>{
if(e.preventZoom)return;
let r=e.annotation;
if(!r)return;
let a=Cn(r,t.viewer.getViewBox());
!a||0===a.w||0===a.h||t.viewer.setViewBox(wn(a))})},destroy(){
e?.(),e=null}}},En=n('<span class="viewer__header-divider svelte-16fao6e" aria-hidden="true">|</span> <div class="manifest svelte-16fao6e"><span class="manifest__title svelte-16fao6e"><!></span></div>',1),Dn=n('<header class="viewer__header svelte-16fao6e"><!> <!></header>');
function On(e,t){
le(t,!1);
let r=()=>O(_e,"$t",a),[a,n]=ee(),s=U(t,"manifestId",8,""),d=U(t,"manifestEntry",8);
G();
var c=Dn(),p=W(c);
ye(p,{
position:"inline"});
var v=R(p,2),f=e=>{
var t=En(),a=R(re(t),2),i=W(a),n=W(i),s=e=>{
var t=l();
h(e=>u(t,e),[()=>(r(),T(()=>r()("viewer.status.loading")))]),g(e,t)},c=e=>{
var t=l();
h(e=>u(t,e),[()=>(r(),T(()=>r()("viewer.status.error")))]),g(e,t)},p=e=>{
var t=l();
h(()=>u(t,(q(d()),T(()=>d().label)))),g(e,t)};
z(n,e=>{
q(d()),T(()=>d()?.isFetching)?e(s):(q(d()),T(()=>d()?.error)?e(c,1):(q(d()),T(()=>d()?.label)&&e(p,2)))}),o(i),o(a),g(e,t)};
z(v,e=>{
q(s()),q(d()),T(()=>s()&&(d()?.label||d()?.isFetching||d()?.error))&&e(f)}),o(c),g(e,c),i(),n()}var kn=n('<div class="panel__tabs"><button type="button">View List</button> <button type="button">Draw Shape</button></div>'),An=n('<div class="panel__empty"><!></div>'),jn=n('<span class="annotation-list__badge svelte-13v0ti9">Tag</span>'),Mn=n('<span class="annotation-list__meta svelte-13v0ti9"> </span>'),Nn=n('<div class="annotation-list__header svelte-13v0ti9"><!> <!></div>'),Pn=n('<figure><img loading="lazy" class="svelte-13v0ti9"/></figure>'),Fn=n("<div></div>"),In=n("<div> </div>"),Ln=n('<div class="annotation-list__bodies svelte-13v0ti9"></div>'),Rn=n('<li><button type="button"><!> <div class="annotation-list__label svelte-13v0ti9"> </div> <!></button></li>'),zn=n('<ul class="annotation-list svelte-13v0ti9"></ul>'),Bn=n('<section class="panel panel--editor"><div class="panel__header"><div class="panel__title"> </div> <!></div> <button type="button" role="switch"><span class="annotation-visibility-toggle__copy svelte-13v0ti9"><span class="annotation-visibility-toggle__label svelte-13v0ti9"> </span> <span class="annotation-visibility-toggle__description svelte-13v0ti9"> </span></span> <span class="annotation-visibility-toggle__switch svelte-13v0ti9" aria-hidden="true"><span class="svelte-13v0ti9"></span></span></button> <!> <div class="panel__body"><!></div></section>');
function Vn(e,a){
le(a,!0);
let n=()=>O(_e,"$t",f),c=()=>O(M,"$keepAnnotationsVisible",f),p=()=>O(k,"$overlayAnnotations",f),v=()=>O(j,"$activeAnnotationId",f),[f,w]=ee(),b=U(a,"redesigned",3,!1),x=U(a,"onclose",3,void 0),y=Ge(),{
overlayAnnotations:k}=y.derived,{
activeAnnotationId:j,keepAnnotationsVisible:M}=y.state,S=y.controller,A=H(()=>y.canDrawAnnotations),q=H(()=>y.annotationMode),T=e=>{
d(A)&&S.setAnnotationMode(e)};
var $=Bn(),L=W($),N=W(L),E=W(N,!0);
o(N);
var P=R(N,2);
{
let e=H(()=>n()("viewer.panels.annotations.close"));
Ke(P,{
get lucide(){
return b()},get label(){
return d(e)},get onclose(){
return x()}})}o(L);
var V=R(L,2);
let F;
var D=W(V),Z=W(D),J=W(Z,!0);
o(Z);
var Q=R(Z,2),X=W(Q,!0);
o(Q),o(D),s(2),o(V);
var G=R(V,2),Y=e=>{
var t=kn(),a=W(t);
let i;
var n=R(a,2);
let s;
o(t),h(()=>{
i=r(a,1,"panel__tab",null,i,{
"panel__tab--active":"edit"===d(q)}),s=r(n,1,"panel__tab",null,s,{
"panel__tab--active":"create"===d(q)})}),C("click",a,()=>T("edit")),C("click",n,()=>T("create")),g(e,t)};
z(G,e=>{
d(A)&&e(Y)});
var K=R(G,2),te=W(K),ae=e=>{
var t=An(),r=W(t),a=e=>{
var t=l("Draw on the image to create a new annotation.");
g(e,t)},i=e=>{
var t=l();
h(e=>u(t,e),[()=>n()("viewer.panels.annotations.emptyList")]),g(e,t)};
z(r,e=>{
"create"===d(q)?e(a):e(i,-1)}),o(t),g(e,t)},oe=e=>{
var a=zn();
B(a,5,p,t,(e,a)=>{
var i=Rn(),s=W(i);
let l;
var c=W(s),p=e=>{
var t=Nn(),r=W(t),i=e=>{
var t=jn();
g(e,t)},n=H(()=>d(a).motivation?.includes("tagging"));
z(r,e=>{
d(n)&&e(i)});
var s=R(r,2),l=e=>{
var t=Mn(),r=W(t);
o(t),h(()=>u(r,`${
d(a).time.start??""}s`)),g(e,t)};
z(s,e=>{
d(a).time&&e(l)}),o(t),g(e,t)},f=H(()=>d(a).motivation?.includes("tagging")||d(a).time);
z(c,e=>{
d(f)&&e(p)});
var w=R(c,2),b=W(w,!0);
o(w);
var x=R(w,2),y=e=>{
var i=Ln();
B(i,21,()=>d(a).bodies,t,(e,t)=>{
var i=fe(),s=re(i),l=e=>{
var i=Pn(),s=W(i);
o(i),h(e=>{
r(i,1,`annotation-body annotation-body--image ${
d(t).styleClass??""??""}`,"svelte-13v0ti9"),_(i,d(t).style),I(s,"src",d(t).src),I(s,"alt",e)},[()=>d(a).text||n()("viewer.panels.annotations.fallback")]),g(e,i)},c=e=>{
var a=Fn();
m(a,()=>Ue(d(t).value),!0),o(a),h(()=>{
r(a,1,`annotation-body annotation-body--html ${
d(t).styleClass??""??""}`,"svelte-13v0ti9"),_(a,d(t).style)}),g(e,a)},p=e=>{
var a=In(),i=W(a,!0);
o(a),h(()=>{
r(a,1,`annotation-body annotation-body--text ${
d(t).styleClass??""??""}`,"svelte-13v0ti9"),_(a,d(t).style),u(i,d(t).value)}),g(e,a)};
z(s,e=>{
"image"===d(t).type&&d(t).src?e(l):"html"===d(t).type&&d(t).value?e(c,1):d(t).value&&e(p,2)}),g(e,i)}),o(i),g(e,i)};
z(x,e=>{
d(a).bodies?.length&&e(y)}),o(s),o(i),h((e,t)=>{
l=r(s,1,`annotation-list__item ${
e??""}`,"svelte-13v0ti9",l,{
"annotation-list__item--active":d(a).id===v()}),u(b,t)},[()=>d(a).motivation?.includes("tagging")?"annotation-list__item--tag":"",()=>d(a).text||n()("viewer.panels.annotations.fallback")]),C("click",s,()=>(e=>{
S.handleAnnotationSelect({
id:e})})(d(a).id)),g(e,i)}),o(a),g(e,a)};
z(te,e=>{
0===p().length?e(ae):e(oe,-1)}),o(K),o($),h((e,t,a,o)=>{
I($,"aria-label",e),I($,"data-mode",d(q)),u(E,t),F=r(V,1,"annotation-visibility-toggle svelte-13v0ti9",null,F,{
"annotation-visibility-toggle--active":c()}),I(V,"aria-checked",c()),u(J,a),u(X,o)},[()=>n()("viewer.panels.annotations.label"),()=>n()("viewer.panels.annotations.title"),()=>n()("viewer.panels.annotations.keepVisible"),()=>n()("viewer.panels.annotations.keepVisibleDescription")]),C("click",V,()=>M.update(e=>!e)),g(e,$),i(),w()}x(["click"]);
var Hn=n('<div class="tools__note svelte-noys36"> </div>'),Un=n('<section class="panel panel--tools"><div class="panel__header"><div class="panel__title"> </div> <!></div> <div class="panel__body"><!> <div class="tools__group svelte-noys36"><label class="tools__label svelte-noys36" for="brightness-slider"><span> </span> <span class="tools__value svelte-noys36"> </span></label> <input id="brightness-slider" class="tools__slider svelte-noys36" type="range" min="0" max="200"/></div> <div class="tools__group svelte-noys36"><label class="tools__label svelte-noys36" for="contrast-slider"><span> </span> <span class="tools__value svelte-noys36"> </span></label> <input id="contrast-slider" class="tools__slider svelte-noys36" type="range" min="0" max="200"/></div> <div class="tools__group svelte-noys36"><label class="tools__label svelte-noys36" for="saturation-slider"><span> </span> <span class="tools__value svelte-noys36"> </span></label> <input id="saturation-slider" class="tools__slider svelte-noys36" type="range" min="0" max="200"/></div> <div class="tools__divider svelte-noys36"> </div> <label class="tools__toggle svelte-noys36"><span> </span> <input type="checkbox" class="svelte-noys36"/></label> <label class="tools__toggle svelte-noys36"><span> </span> <input type="checkbox" class="svelte-noys36"/></label> <button class="tools__reset svelte-noys36" type="button"> </button></div></section>');
function Wn(e,t){
le(t,!0);
let r=()=>O(_e,"$t",s),a=()=>O(f,"$mediaType",s),n=()=>O(w,"$imageFilters",s),[s,l]=ee(),c=U(t,"redesigned",3,!1),p=U(t,"onclose",3,void 0),v=Ge(),{
mediaType:f}=v.derived,{
imageFilters:w}=v.state,b=v.controller;
var m=Un(),x=W(m),y=W(x),_=W(y,!0);
o(y);
var k=R(y,2);
{
let e=H(()=>r()("viewer.panels.tools.close"));
Ke(k,{
get lucide(){
return c()},get label(){
return d(e)},get onclose(){
return p()}})}o(x);
var j=R(x,2),M=W(j),S=e=>{
var t=Hn(),a=W(t,!0);
o(t),h(e=>u(a,e),[()=>r()("viewer.panels.tools.note")]),g(e,t)};
z(M,e=>{
"image"!==a()&&e(S)});
var A=R(M,2),q=W(A),T=W(q),$=W(T,!0);
o(T);
var L=R(T,2),N=W(L);
o(L),o(q);
var E=R(q,2);
te(E),o(A);
var B=R(A,2),P=W(B),V=W(P),F=W(V,!0);
o(V);
var Z=R(V,2),J=W(Z);
o(Z),o(P);
var Q=R(P,2);
te(Q),o(B);
var X=R(B,2),G=W(X),Y=W(G),K=W(Y,!0);
o(Y);
var re=R(Y,2),ae=W(re);
o(re),o(G);
var oe=R(G,2);
te(oe),o(X);
var ie=R(X,2),ne=W(ie,!0);
o(ie);
var de=R(ie,2),ce=W(de),pe=W(ce,!0);
o(ce);
var ve=R(ce,2);
te(ve),o(de);
var ge=R(de,2),ue=W(ge),he=W(ue,!0);
o(ue);
var fe=R(ue,2);
te(fe),o(ge);
var we=R(ge,2),be=W(we,!0);
o(we),o(j),o(m),h((e,t,r,o,i,s,l,d,c)=>{
I(m,"aria-label",e),u(_,t),u($,r),u(N,`${
n().brightness??""}%`),se(E,n().brightness),E.disabled="image"!==a(),u(F,o),u(J,`${
n().contrast??""}%`),se(Q,n().contrast),Q.disabled="image"!==a(),u(K,i),u(ae,`${
n().saturation??""}%`),se(oe,n().saturation),oe.disabled="image"!==a(),u(ne,s),u(pe,l),D(ve,n().invert),ve.disabled="image"!==a(),u(he,d),D(fe,n().grayscale),fe.disabled="image"!==a(),we.disabled="image"!==a(),u(be,c)},[()=>r()("viewer.panels.tools.label"),()=>r()("viewer.panels.tools.title"),()=>r()("viewer.panels.tools.brightness"),()=>r()("viewer.panels.tools.contrast"),()=>r()("viewer.panels.tools.saturation"),()=>r()("viewer.panels.tools.effects"),()=>r()("viewer.panels.tools.invert"),()=>r()("viewer.panels.tools.grayscale"),()=>r()("viewer.panels.tools.reset")]),C("input",E,e=>b.updateImageFilter("brightness",Number(e.currentTarget.value))),C("input",Q,e=>b.updateImageFilter("contrast",Number(e.currentTarget.value))),C("input",oe,e=>b.updateImageFilter("saturation",Number(e.currentTarget.value))),C("change",ve,e=>b.updateImageFilter("invert",e.currentTarget.checked)),C("change",fe,e=>b.updateImageFilter("grayscale",e.currentTarget.checked)),C("click",we,()=>b.resetImageFilters()),g(e,m),i(),l()}x(["input","change","click"]);
var Gn=n('<div class="panel__empty"> </div>'),Kn=n('<li><button class="search-list__button svelte-cvoopr" type="button"> </button></li>'),qn=n('<ul class="search-list svelte-cvoopr"></ul>'),Jn=n('<div class="search__count svelte-cvoopr"> </div> <!>',1),Yn=n('<section class="panel"><div class="panel__header"><div class="panel__title"> </div> <!></div> <div class="panel__body"><div class="search svelte-cvoopr"><label class="search__label svelte-cvoopr" for="search-input"> </label> <div class="search__row svelte-cvoopr"><input id="search-input" class="search__input svelte-cvoopr" type="search"/> <button class="search__clear svelte-cvoopr" type="button"> </button></div></div> <div class="panel__hint"> </div> <!></div></section>');
function Xn(e,a){
le(a,!0);
let n=()=>O(_e,"$t",p),s=()=>O(x,"$searchQuery",p),l=()=>O(m,"$searchHits",p),c=()=>O(y,"$selectedSearchResultId",p),[p,v]=ee(),f=U(a,"redesigned",3,!1),w=U(a,"onclose",3,void 0),b=Ge(),{
searchHits:m}=b.derived,{
searchQuery:x,selectedSearchResultId:y}=b.state,_=b.controller;
var k=Yn(),j=W(k),M=W(j),S=W(M,!0);
o(M);
var A=R(M,2);
{
let e=H(()=>n()("viewer.panels.search.close"));
Ke(A,{
get lucide(){
return f()},get label(){
return d(e)},get onclose(){
return w()}})}o(j);
var q=R(j,2),T=W(q),$=W(T),L=W($,!0);
o($);
var N=R($,2),E=W(N);
te(E);
var P=R(E,2),V=W(P,!0);
o(P),o(N),o(T);
var F=R(T,2),D=W(F,!0);
o(F);
var Z=R(F,2),J=e=>{
var a=Jn(),i=re(a),s=W(i,!0);
o(i);
var p=R(i,2),v=e=>{
var t=Gn(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.panels.search.noMatches")]),g(e,t)},f=e=>{
var a=qn();
B(a,5,l,t,(e,t)=>{
var a=Kn();
let i;
var s=W(a),l=W(s,!0);
o(s),o(a),h(e=>{
i=r(a,1,"search-list__item svelte-cvoopr",null,i,{
"search-list__item--selected":c()===d(t).id}),u(l,e)},[()=>d(t).text||n()("viewer.panels.search.hitFallback")]),C("click",s,()=>(e=>{
_.handleSearchResultClick(e)})(d(t))),g(e,a)}),o(a),g(e,a)};
z(p,e=>{
0===l().length?e(v):e(f,-1)}),h(e=>u(s,e),[()=>n()(1===l().length?"viewer.panels.search.matchCount_one":"viewer.panels.search.matchCount_other",{
count:l().length})]),g(e,a)},Q=e=>{
var t=Gn(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.panels.search.empty")]),g(e,t)};
z(Z,e=>{
s()?e(J):e(Q,-1)}),o(q),o(k),h((e,t,r,a,o,i)=>{
I(k,"aria-label",e),u(S,t),u(L,r),se(E,s()),I(E,"placeholder",a),u(V,o),u(D,i)},[()=>n()("viewer.panels.search.label"),()=>n()("viewer.panels.search.title"),()=>n()("viewer.panels.search.labelText"),()=>n()("viewer.panels.search.placeholder"),()=>n()("viewer.panels.search.clear"),()=>n()("viewer.panels.search.hint")]),C("input",E,e=>{
_.setSearchQuery(e.currentTarget.value)}),C("click",P,()=>{
_.setSearchQuery("")}),g(e,k),i(),v()}x(["input","click"]);
var Zn=`${
Ze}\n  .chapters {
 background: var(--mango-av-background);
 border: 1px solid var(--mango-av-border);
 border-radius: var(--mango-av-radius);
 padding: .75rem;
 }\n  h2 {
 font-size: 1rem;
 margin: 0 0 .5rem;
 }\n  ul {
 list-style: none;
 margin: 0;
 padding: 0;
 }\n  ul ul {
 border-left: 1px solid var(--mango-av-border);
 margin-left: .8rem;
 padding-left: .55rem;
 }\n  li {
 margin-block: .3rem;
 }\n  button {
 background: transparent;
 border: 0;
 border-radius: 0;
 color: inherit;
 display: grid;
 gap: .15rem;
 padding: .5rem;
 text-align: left;
 width: 100%;
 }\n  button:hover {
 background: var(--mango-av-surface);
 }\n  button.active {
 background: color-mix(in srgb, var(--mango-av-accent) 14%, transparent);
 box-shadow: inset 3px 0 var(--mango-av-accent);
 }\n`,Qn=(e,t,r,a=1)=>0===e.length&&1===a?`<p class="empty">${
qe(r.noChapters)}</p>`:`<ul>${
e.map(e=>`<li>\n    <button type="button" class="${
e.canvasId===t?"active":""}" ${
e.canvasId?`data-canvas="${
qe(e.canvasId)}"`:"disabled"} ${
e.time?`data-time="${
e.time.start}"`:""}>\n      <span>${
qe(e.label)}</span>\n      ${
e.time?`<span class="time">${
Qe(e.time.start)}</span>`:""}\n    </button>\n    ${
Qn(e.children,t,r,a+1)}\n  </li>`).join("")}</ul>`,$n=class extends Xe{
#e;
constructor(){
super(),this.#e=this.attachShadow({
mode:"open"})}controllerChanged(){
this.#t()}handleControllerEvent(e,t){
("av-ready"===e||"av-canvaschange"===e||"av-configchange"===e)&&this.#t()}#t(){
let e=this.controller.manifest,t=this.controller.canvas,r=Je(this.controller.config.strings);
this.#e.innerHTML=`<style>${
Zn}</style><section class="chapters" aria-label="${
qe(r.chapters)}">\n      <slot name="heading"><h2>${
qe(r.chapters)}</h2></slot>\n      ${
e&&t?Qn(e.chapters,t.id,r):`<p class="empty">${
qe(r.noManifest)}</p>`}\n    </section>`,this.#e.querySelectorAll("[data-canvas]").forEach(e=>e.addEventListener("click",()=>{
let t=e.dataset.canvas;
if(!t)return;
let r=Number(e.dataset.time??0);
this.dispatchEvent(new CustomEvent("av-chapterselect",{
detail:{
canvasId:t,time:r},bubbles:!0,composed:!0})),this.controller.selectCanvas(t,{
time:r,autoplay:"playing"===this.controller.state.status})}))}};
typeof window<"u"&&"customElements"in window&&((e="mango-av-chapters")=>{
typeof customElements>"u"||customElements.get(e)||customElements.define(e,$n)})();
var er=(e,t)=>{
e.play().catch(e=>{
if(e instanceof Error&&"AbortError"===e.name)return;
let r=e instanceof Error?e:Error(String(e));
t.dispatchEvent(new CustomEvent("av-error",{
detail:{
error:r},bubbles:!0,composed:!0}))})},tr=`${
Ze}\n  .transcript {
 background: var(--mango-av-background);
 border: 1px solid var(--mango-av-border);
 border-radius: var(--mango-av-radius);
 padding: .75rem;
 }\n  h2 {
 font-size: 1rem;
 margin: 0 0 .5rem;
 }\n  .tools {
 display: flex;
 flex-wrap: wrap;
 gap: .45rem;
 margin-bottom: .75rem;
 }\n  .tools input, .tools select {
 border: 1px solid var(--mango-av-border);
 border-radius: .35rem;
 min-width: 0;
 padding: .45rem;
 }\n  .tools input {
 flex: 1;
 }\n  .tools a {
 align-content: center;
 color: var(--mango-av-accent);
 }\n  ol {
 list-style: none;
 margin: 0;
 max-height: var(--mango-av-transcript-height, 34rem);
 overflow: auto;
 padding: 0;
 }\n  button {
 background: transparent;
 border: 0;
 border-radius: .35rem;
 color: inherit;
 display: grid;
 gap: .2rem;
 padding: .5rem;
 text-align: left;
 width: 100%;
 }\n  button:hover {
 background: var(--mango-av-surface);
 }\n  button.active {
 background: color-mix(in srgb, var(--mango-av-accent) 14%, transparent);
 box-shadow: inset 3px 0 var(--mango-av-accent);
 }\n  mark {
 background: #ffe770;
 }\n  .speaker {
 font-weight: 700;
 }\n`,nr=(e,t)=>{
let r=qe(e);
if(!t)return r;
let a=t.replace(/[.*+?^${
}()|[\]\\]/g,"\\$&");
return r.replace(RegExp(`(${
a})`,"gi"),"<mark>$1</mark>")},rr=class extends Xe{
#e;
#t=[];
#r=0;
#a="";
#o=0;
constructor(){
super(),this.#e=this.attachShadow({
mode:"open"})}controllerChanged(){
this.#t=[],this.#r=0,this.#i(),this.#n()}handleControllerEvent(e,t){
"av-ready"===e||"av-canvaschange"===e?(this.#t=[],this.#r=0,this.#i(),this.#n()):"av-configchange"===e?this.#i():("av-timeupdate"===e||"av-seek"===e||"av-statechange"===e)&&this.#s()}#i(){
let e=this.controller.canvas,t=e?.transcripts??[],r=t[this.#r],a=this.#a.trim(),o=Je(this.controller.config.strings),i=a?this.#t.filter(e=>e.text.toLowerCase().includes(a.toLowerCase())):this.#t;
this.#e.innerHTML=`<style>${
tr}</style><section class="transcript" aria-label="${
qe(o.transcript)}">\n      <slot name="heading"><h2>${
qe(o.transcript)}</h2></slot>\n      ${
e?0===t.length?`<p class="empty">${
qe(o.noTranscript)}</p>`:`\n        <div class="tools">\n          ${
t.length>1?`<select data-action="transcript" aria-label="${
qe(o.transcript)}">${
t.map((e,t)=>`<option value="${
t}" ${
t===this.#r?"selected":""}>${
qe(e.label)}</option>`).join("")}</select>`:""}\n          ${
this.controller.config.transcript.search?`<input type="search" data-action="search" value="${
qe(this.#a)}" placeholder="${
qe(o.searchTranscript)}" aria-label="${
qe(o.searchTranscript)}">`:""}\n          ${
this.controller.config.transcript.download&&r?.src?`<a href="${
qe(r.src)}" download>${
qe(o.download)}</a>`:""}\n        </div>\n        ${
0===this.#t.length?`<p class="empty">${
qe(o.loadingTranscript)}</p>`:`<ol>${
i.map(e=>`<li data-cue-id="${
qe(e.id)}" ${
void 0===e.start?"":`data-start="${
e.start}" data-end="${
e.end??e.start}"`}>\n          <button type="button" ${
void 0===e.start?"disabled":""}>\n            ${
void 0===e.start?"":`<span class="time">${
Qe(e.start)}</span>`}\n            ${
e.speaker?`<span class="speaker">${
qe(e.speaker)}</span>`:""}\n            <span>${
nr(e.text,a)}</span>\n          </button>\n        </li>`).join("")}</ol>`}\n      `:`<p class="empty">${
qe(o.noManifest)}</p>`}\n    </section>`,this.#l(),this.#s()}#l(){
this.#e.querySelector("[data-action=transcript]")?.addEventListener("change",e=>{
this.#r=Number(e.target.value),this.#t=[],this.#i(),this.#n()}),this.#e.querySelector("[data-action=search]")?.addEventListener("input",e=>{
let t=e.target,r=t.selectionStart;
this.#a=t.value,this.#i();
let a=this.#e.querySelector("[data-action=search]");
a?.focus(),null!==r&&a?.setSelectionRange(r,r),this.dispatchEvent(new CustomEvent("av-transcriptsearch",{
detail:{
query:this.#a},bubbles:!0,composed:!0}))}),this.#e.querySelectorAll("[data-start] button").forEach(e=>e.addEventListener("click",()=>{
let t=Number(e.parentElement?.dataset.start);
Number.isFinite(t)&&(this.dispatchEvent(new CustomEvent("av-transcriptcueselect",{
detail:{
time:t},bubbles:!0,composed:!0})),this.controller.seekTo(t),er(this.controller,this))}))}async#n(){
let e=this.controller.canvas?.transcripts[this.#r];
if(!e)return;
let t=++this.#o,r={
};
this.controller.config.fetch&&(r.fetch=this.controller.config.fetch),this.controller.config.requestInit&&(r.requestInit=this.controller.config.requestInit),void 0!==this.controller.config.transcript.showNotes&&(r.showNotes=this.controller.config.transcript.showNotes),void 0!==this.controller.config.transcript.showMetadata&&(r.showMetadata=this.controller.config.transcript.showMetadata);
try{
let a=await $e(e,r);
if(t!==this.#o)return;
this.#t=a,this.#i()}catch(e){
if(t!==this.#o)return;
let r=e instanceof Error?e:Error(String(e));
this.dispatchEvent(new CustomEvent("av-error",{
detail:{
error:r},bubbles:!0,composed:!0})),this.#t=[],this.#i()}}#s(){
let e,t=this.controller.state.currentTime;
this.#e.querySelectorAll("[data-start][data-end]").forEach(r=>{
let a=Number(r.dataset.start),o=Number(r.dataset.end),i=Number.isFinite(a)&&t>=a&&(!Number.isFinite(o)||t<o);
r.querySelector("button")?.classList.toggle("active",i),i&&(e=r)}),e&&this.controller.config.transcript.autoScroll&&e.scrollIntoView({
block:"nearest",behavior:"smooth"})}};
typeof window<"u"&&"customElements"in window&&((e="mango-av-transcript")=>{
typeof customElements>"u"||customElements.get(e)||customElements.define(e,rr)})();
var ir=n('<div class="panel__tabs" role="tablist"><button type="button" role="tab"> </button> <button type="button" role="tab"> </button></div>'),ar=n('<div class="panel__empty"> </div>'),or=n("<mango-av-chapters></mango-av-chapters>",2),sr=n("<mango-av-transcript></mango-av-transcript>",2),cr=n('<section class="panel panel--contents"><div class="panel__header"><div class="panel__title"> </div> <!></div> <!> <div class="panel__body"><!></div></section>');
function lr(t,a){
le(a,!0);
let n=()=>O(_e,"$t",s),[s,l]=ee(),c=U(a,"redesigned",3,!1),p=U(a,"selectedTab",3,"toc"),v=U(a,"onclose",3,void 0),f=Ge(),{
avChaptersAvailable:w,avTranscriptAvailable:b}=f.derived,m=f.derived.av.controller,x=V("toc"),y=V(null),_=V(null),k=H(()=>O(w,"$avChaptersAvailable",s)),M=H(()=>O(b,"$avTranscriptAvailable",s));
e(()=>{
"transcript"===p()&&d(M)?j(x,"transcript"):"toc"===p()&&d(k)&&j(x,"toc")}),e(()=>{
!d(k)&&d(M)&&j(x,"transcript"),d(k)&&!d(M)&&j(x,"toc")}),e(()=>{
d(y)&&(d(y).controller=m),d(_)&&(d(_).controller=m)});
var S=cr(),A=W(S),q=W(A),T=W(q,!0);
o(q);
var $=R(q,2);
{
let e=H(()=>n()("viewer.panels.contents.close"));
Ke($,{
get lucide(){
return c()},get label(){
return d(e)},get onclose(){
return v()}})}o(A);
var L=R(A,2),N=e=>{
var t=ir(),a=W(t);
let i;
var s=W(a,!0);
o(a);
var l=R(a,2);
let c;
var p=W(l,!0);
o(l),o(t),h((e,o,n)=>{
I(t,"aria-label",e),i=r(a,1,"panel__tab",null,i,{
"panel__tab--active":"toc"===d(x)}),I(a,"aria-selected","toc"===d(x)),u(s,o),c=r(l,1,"panel__tab",null,c,{
"panel__tab--active":"transcript"===d(x)}),I(l,"aria-selected","transcript"===d(x)),u(p,n)},[()=>n()("viewer.panels.contents.tabs"),()=>n()("viewer.panels.contents.tocTab"),()=>n()("viewer.panels.contents.transcriptTab")]),C("click",a,()=>j(x,"toc")),C("click",l,()=>j(x,"transcript")),g(e,t)};
z(L,e=>{
!c()&&d(k)&&d(M)&&e(N)});
var E=R(L,2),B=W(E),P=e=>{
var t=fe(),a=re(t),i=e=>{
var t=ar(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.panels.contents.emptyToc")]),g(e,t)},s=e=>{
var t=or();
r(t,1,"svelte-2jjn3h"),ae(t,e=>j(y,e),()=>d(y)),g(e,t)};
z(a,e=>{
d(k)?e(s,-1):e(i)}),g(e,t)},F=e=>{
var t=fe(),a=re(t),i=e=>{
var t=ar(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.panels.contents.emptyTranscript")]),g(e,t)},s=e=>{
var t=sr();
r(t,1,"svelte-2jjn3h"),ae(t,e=>j(_,e),()=>d(_)),g(e,t)};
z(a,e=>{
d(M)?e(s,-1):e(i)}),g(e,t)};
z(B,e=>{
"toc"===d(x)?e(P):e(F,-1)}),o(E),o(S),h((e,t)=>{
I(S,"aria-label",e),u(T,t)},[()=>n()("viewer.panels.contents.label"),()=>c()?"transcript"===d(x)?"Transcription":"Collections":n()("viewer.panels.contents.title")]),g(t,S),i(),l()}x(["click"]);
var ur=n("<option> </option>"),dr=n('<button type="button"> </button>'),fr=n('<section class="panel"><div class="panel__header"><div class="panel__title"> </div> <!></div> <div class="panel__body settings-panel svelte-1aaxlqa"><div class="settings-panel__section svelte-1aaxlqa"><div class="settings-panel__label svelte-1aaxlqa"> </div> <select class="svelte-1aaxlqa"></select></div> <div class="settings-panel__section svelte-1aaxlqa"><div class="settings-panel__label svelte-1aaxlqa"> </div> <div class="panel__tabs"></div></div> <div><div class="settings-panel__label svelte-1aaxlqa"> </div> <div class="page-layout-options svelte-1aaxlqa" role="radiogroup"><button type="button" role="radio"><span> </span> <!></button> <button type="button" role="radio"><span> </span> <!></button> <button type="button" role="radio"><span> </span> <!></button> <button type="button" role="radio"><span> </span> <!></button></div></div></div></section>');
function pr(e,a){
le(a,!0);
let n=()=>O(_e,"$t",l),s=()=>O(b,"$layoutMode",l),[l,c]=ee(),p=U(a,"redesigned",3,!1),v=U(a,"onclose",3,void 0),f=Ge(),w=f.settings,{
layoutMode:b}=f.state,m=H(()=>"1x1"!==w.layout);
var x=fr(),y=W(x),_=W(y),k=W(_,!0);
o(_);
var z=R(_,2);
{
let e=H(()=>n()("workspace.closeSettings"));
Ke(z,{
get lucide(){
return p()},get label(){
return d(e)},get onclose(){
return v()}})}o(y);
var j=R(y,2),M=W(j),S=W(M),q=W(S,!0);
o(S);
var T,$=R(S,2);
B($,21,()=>ge,t,(e,t)=>{
var r=ur(),a=W(r,!0);
o(r);
var i={
};
h(e=>{
u(a,e),i!==(i=d(t))&&(r.value=(r.__value=d(t))??"")},[()=>d(t).toUpperCase()]),g(e,r)}),o($),A($),o(M);
var L=R(M,2),N=W(L),E=W(N,!0);
o(N);
var P=R(N,2);
B(P,21,()=>We,t,(e,t)=>{
var a=dr();
let i;
var s=W(a,!0);
o(a),h(e=>{
i=r(a,1,"panel__tab",null,i,{
"panel__tab--active":w.theme===d(t)}),u(s,e)},[()=>n()(`workspace.theme${
d(t)[0].toUpperCase()}${
d(t).slice(1)}`)]),C("click",a,()=>w.theme=d(t)),g(e,a)}),o(P),o(L);
var V=R(L,2);
let F;
var D=W(V),Z=W(D,!0);
o(D);
var J=R(D,2),Q=W(J);
let X;
var G=W(Q),Y=W(G,!0);
o(G),Lt(R(G,2),{
"aria-hidden":"true"}),o(Q);
var K=R(Q,2);
let te;
var re=W(K),ae=W(re,!0);
o(re),zt(R(re,2),{
"aria-hidden":"true"}),o(K);
var oe=R(K,2);
let ie;
var ne=W(oe),se=W(ne,!0);
o(ne),cn(R(ne,2),{
"aria-hidden":"true"}),o(oe);
var de=R(oe,2);
let ce;
var pe=W(de),ve=W(pe,!0);
o(pe),kt(R(pe,2),{
"aria-hidden":"true"}),o(de),o(J),o(V),o(j),o(x),h((e,t,a,o,i,n,l,c,p,v,g,h,f,b)=>{
I(x,"aria-label",e),u(k,t),u(q,a),T!==(T=w.locale)&&($.value=($.__value=w.locale)??"",ue($,w.locale)),u(E,o),F=r(V,1,"settings-panel__section svelte-1aaxlqa",null,F,{
"settings-panel__section--disabled":d(m)}),I(V,"aria-disabled",d(m)),u(Z,i),I(J,"aria-label",n),X=r(Q,1,"page-layout-card svelte-1aaxlqa",null,X,{
"page-layout-card--selected":"single"===s()}),I(Q,"aria-checked","single"===s()),I(Q,"aria-label",l),Q.disabled=d(m),u(Y,c),te=r(K,1,"page-layout-card svelte-1aaxlqa",null,te,{
"page-layout-card--selected":"two-page"===s()}),I(K,"aria-checked","two-page"===s()),I(K,"aria-label",p),K.disabled=d(m),u(ae,v),ie=r(oe,1,"page-layout-card svelte-1aaxlqa",null,ie,{
"page-layout-card--selected":"continuous"===s()}),I(oe,"aria-checked","continuous"===s()),I(oe,"aria-label",g),oe.disabled=d(m),u(se,h),ce=r(de,1,"page-layout-card svelte-1aaxlqa",null,ce,{
"page-layout-card--selected":"gallery"===s()}),I(de,"aria-checked","gallery"===s()),I(de,"aria-label",f),de.disabled=d(m),u(ve,b)},[()=>n()("workspace.settings"),()=>n()("workspace.settings"),()=>n()("workspace.language"),()=>n()("workspace.theme"),()=>n()("workspace.viewMode")??"Page Layout",()=>n()("workspace.pageLayout.group"),()=>n()("workspace.pageLayout.singleAria"),()=>n()("workspace.viewModeSingle")??"Single",()=>n()("workspace.pageLayout.sideBySideAria"),()=>n()("workspace.viewModePaged")??"Side by Side",()=>n()("workspace.pageLayout.continuousAria"),()=>n()("workspace.viewModeContinuous")??"Continuous Scroll",()=>n()("workspace.pageLayout.galleryAria"),()=>n()("workspace.viewModeGallery")??"Gallery"]),C("change",$,e=>w.locale=e.currentTarget.value),C("click",Q,()=>w.layoutMode="single"),C("click",K,()=>w.layoutMode="two-page"),C("click",oe,()=>w.layoutMode="continuous"),C("click",de,()=>w.layoutMode="gallery"),g(e,x),i(),c()}x(["change","click"]);
var mr=n('<div class="layers__item svelte-r4toft"><div class="layers__info svelte-r4toft"><span class="layers__name svelte-r4toft"> </span> <span class="layers__value svelte-r4toft"> </span></div> <input class="layers__slider svelte-r4toft" type="range" min="0" max="100"/></div>'),hr=n('<section class="panel panel--layers"><div class="panel__header"><div class="panel__title"> </div> <!></div> <div class="panel__body"><div class="layers__list svelte-r4toft"></div></div></section>');
function gr(e,t){
le(t,!0);
let r=()=>O(w,"$layerOpacities",s),a=()=>O(f,"$mediaSources",s),n=()=>O(_e,"$t",s),[s,l]=ee(),c=U(t,"redesigned",3,!1),p=U(t,"onclose",3,void 0),v=Ge(),{
mediaSources:f}=v.derived,{
layerOpacities:w}=v.state,b=v.controller,m=e=>void 0===r()[e]?+(a()[0]?.id===e):r()[e];
var x=hr(),y=W(x),_=W(y),k=W(_,!0);
o(_);
var z=R(_,2);
{
let e=H(()=>n()("viewer.panels.layers.close")??"Close layers");
Ke(z,{
get lucide(){
return c()},get label(){
return d(e)},get onclose(){
return p()}})}o(y);
var j=R(y,2),M=W(j);
B(M,7,a,e=>e.id,(e,t,r)=>{
let a=H(()=>m(d(t).id));
var i=mr(),n=W(i),s=W(n),l=W(s,!0);
o(s);
var c=R(s,2),p=W(c);
o(c),o(n);
var v=R(n,2);
te(v),o(i),h((e,a)=>{
u(l,d(t).label||(0===d(r)?"Base Image":`Layer ${
d(r)+1}`)),u(p,`${
e??""}%`),se(v,a)},[()=>Math.round(100*d(a)),()=>Math.round(100*d(a))]),C("input",v,e=>b.updateLayerOpacity(d(t).id,Number(e.currentTarget.value)/100)),g(e,i)}),o(M),o(j),o(x),h((e,t)=>{
I(x,"aria-label",e),u(k,t)},[()=>n()("viewer.panels.layers.label")??"Layers panel",()=>c()?"Image layers":n()("viewer.panels.layers.title")??"Layers"]),g(e,x),i(),l()}x(["input"]);
var _r=n('<button type="button" role="radio"><span aria-hidden="true"><!></span> <span class="layout-card__copy svelte-1p0jjd6"><span class="layout-card__label svelte-1p0jjd6"> </span> <span class="layout-card__dimensions svelte-1p0jjd6"> </span></span></button>'),vr=n('<section class="panel"><div class="panel__header"><div class="panel__title"> </div> <!></div> <div class="panel__body compare-panel svelte-1p0jjd6"><div class="compare-panel__intro svelte-1p0jjd6"><div class="compare-panel__label svelte-1p0jjd6"> </div> <p class="svelte-1p0jjd6"> </p></div> <div class="compare-panel__options svelte-1p0jjd6" role="radiogroup"></div> <div class="compare-panel__status svelte-1p0jjd6" aria-live="polite" aria-atomic="true"> </div></div></section>');
function yr(e,t){
le(t,!0);
let a=()=>O(_e,"$t",n),[n,s]=ee(),l=U(t,"onclose",3,void 0),c=Ge().settings,p=H(()=>[{
value:"1x1",label:a()("workspace.compare.single"),dimensions:"1 × 1",accessibleName:a()("workspace.compare.singleAria"),announcement:a()("workspace.compare.singleAnnouncement")},{
value:"1x2",label:a()("workspace.compare.sideBySide"),dimensions:"1 × 2",accessibleName:a()("workspace.compare.sideBySideAria"),announcement:a()("workspace.compare.sideBySideAnnouncement")},{
value:"2x1",label:a()("workspace.compare.stacked"),dimensions:"2 × 1",accessibleName:a()("workspace.compare.stackedAria"),announcement:a()("workspace.compare.stackedAnnouncement")},{
value:"1x2-panel",label:a()("workspace.compare.oneByTwo"),dimensions:"1 × 2",accessibleName:a()("workspace.compare.oneByTwoAria"),announcement:a()("workspace.compare.oneByTwoAnnouncement")},{
value:"2x2",label:a()("workspace.compare.grid"),dimensions:"2 × 2",accessibleName:a()("workspace.compare.gridAria"),announcement:a()("workspace.compare.gridAnnouncement")}]),v=V(""),f=e=>{
c.layout!==e.value&&(c.layout=e.value,j(v,e.announcement,!0))},w=(e,t)=>{
let r=null;
if("ArrowRight"===e.key||"ArrowDown"===e.key?r=(t+1)%d(p).length:"ArrowLeft"===e.key||"ArrowUp"===e.key?r=(t-1+d(p).length)%d(p).length:"Home"===e.key?r=0:"End"===e.key&&(r=d(p).length-1),null===r)return;
e.preventDefault();
let a=d(p)[r];
f(a),e.currentTarget.closest('[role="radiogroup"]')?.querySelectorAll('[role="radio"]')[r]?.focus()};
var b=vr(),m=W(b),x=W(m),y=W(x,!0);
o(x);
var _=R(x,2);
{
let e=H(()=>a()("workspace.compare.close"));
Ke(_,{
lucide:!0,get label(){
return d(e)},get onclose(){
return l()}})}o(m);
var k=R(m,2),M=W(k),S=W(M),A=W(S,!0);
o(S);
var q=R(S,2),T=W(q,!0);
o(q),o(M);
var $=R(M,2);
B($,23,()=>d(p),e=>e.value,(e,t,a)=>{
var i=_r();
let n;
var s=W(i);
let l;
var p=W(s),v=e=>{
Ie(e,{
})},b=e=>{
kt(e,{
})},m=e=>{
Ut(e,{
})},x=e=>{
Ct(e,{
})};
z(p,e=>{
"1x1"===d(t).value?e(v):"2x2"===d(t).value?e(b,1):"1x2-panel"===d(t).value?e(m,2):e(x,-1)}),o(s);
var y=R(s,2),_=W(y),k=W(_,!0);
o(_);
var j=R(_,2),M=W(j,!0);
o(j),o(y),o(i),h(()=>{
n=r(i,1,"layout-card svelte-1p0jjd6",null,n,{
"layout-card--selected":c.layout===d(t).value}),I(i,"aria-checked",c.layout===d(t).value),I(i,"aria-label",d(t).accessibleName),I(i,"tabindex",c.layout===d(t).value?0:-1),l=r(s,1,"layout-card__icon svelte-1p0jjd6",null,l,{
"layout-card__icon--stacked":"2x1"===d(t).value}),u(k,d(t).label),u(M,d(t).dimensions)}),C("click",i,()=>f(d(t))),C("keydown",i,e=>w(e,d(a))),g(e,i)}),o($);
var L=R($,2),N=W(L,!0);
o(L),o(k),o(b),h((e,t,r,a,o)=>{
I(b,"aria-label",e),u(y,t),u(A,r),u(T,a),I($,"aria-label",o),u(N,d(v))},[()=>a()("workspace.compare.title"),()=>a()("workspace.compare.title"),()=>a()("workspace.layout"),()=>a()("workspace.compare.description"),()=>a()("workspace.compare.group")]),g(e,b),i(),s()}x(["click","keydown"]);
var br=e=>"object"==typeof e&&e&&!Array.isArray(e)?e:void 0,xr=e=>Array.isArray(e)?e:[],Sr=e=>"string"==typeof e&&e.trim()?e.trim():void 0,Cr=e=>Sr(e.id)??Sr(e["@id"])??"",wr=e=>Sr(e.type)??Sr(e["@type"])??"",Tr=e=>{
let t=e.toLowerCase().split(":").at(-1);
if("collection"===t||"manifest"===t||"range"===t||"canvas"===t)return t},Er=(e,t)=>{
if("string"==typeof e)return[{
value:e}];
if(Array.isArray(e))return e.flatMap(e=>Er(e,t));
let r=br(e);
if(!r)return[];
if("string"==typeof r["@value"]){
let e=Sr(r["@language"]);
return e?[{
language:e,value:r["@value"]}]:[{
value:r["@value"]}]}let a=Object.keys(r);
return[...t.filter(e=>a.includes(e)),...a.filter(e=>!t.includes(e))].flatMap(e=>xr(r[e]).flatMap(t=>{
let r=Sr(t);
return r?[{
language:e,value:r}]:[]}))},Dr=(e,t,r="")=>Er(e,t)[0]?.value??r,Or=(e,t)=>xr(e.metadata).flatMap(e=>{
let r=br(e);
if(!r)return[];
let a=Dr(r.label,t),o=Er(r.value,t);
return a&&o.length>0?[{
label:a,values:o}]:[]}),kr=e=>{
let t=e.behavior??e.viewingHint;
return(Array.isArray(t)?t:[t]).flatMap(e=>{
let t=Sr(e);
return t?[t]:[]})},Ar=(e,t)=>{
let r=t.map(e=>e.toLowerCase());
return e.find(e=>r.includes(e.label.toLowerCase()))?.values[0]?.value},jr={
jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,sept:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},Mr=(e,t=1,r=1)=>{
let a=new Date(Date.UTC(e,t-1,r));
return a.getUTCFullYear()===e&&a.getUTCMonth()===t-1&&a.getUTCDate()===r?a.toISOString():void 0},Nr=e=>{
let t=e.match(/^\s*(\d{
4})(?:[-/](\d{
1,2})(?:[-/](\d{
1,2}))?)?\s*$/);
if(t?.[1])return Mr(Number(t[1]),Number(t[2]??1),Number(t[3]??1));
let r=e.match(/^\s*([A-Za-z]+)\s+(\d{
1,2})(?:st|nd|rd|th)?,?\s+(\d{
4})\s*$/i);
if(r?.[1]&&r[2]&&r[3]){
let e=jr[r[1].toLowerCase()];
if(e)return Mr(Number(r[3]),e,Number(r[2]))}let a=e.match(/^\s*(\d{
1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{
4})\s*$/i);
if(a?.[1]&&a[2]&&a[3]){
let e=jr[a[2].toLowerCase()];
if(e)return Mr(Number(a[3]),e,Number(a[1]))}if(/T.*(?:Z|[+-]\d{
2}:?\d{
2})\s*$/i.test(e)){
let t=Date.parse(e);
if(!Number.isNaN(t))return new Date(t).toISOString()}},Pr=e=>{
if(e.match(/^\s*\d{
4}(?:[-/]\d{
1,2}(?:[-/]\d{
1,2})?)?\s*$/)){
let t=e.match(/[-/]/g)?.length??0;
return t>=2?"day":1===t?"month":"year"}return/^\s*(?:[A-Za-z]+\s+\d{
1,2}(?:st|nd|rd|th)?,?\s+\d{
4}|\d{
1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+\s+\d{
4})\s*$/i.test(e)||/T.*(?:Z|[+-]\d{
2}:?\d{
2})\s*$/i.test(e)?"day":"year"},Fr=e=>{
if(!e)return{
};
let t=e.match(/\b(1[0-9]{
3}|20[0-9]{
2})\b/),r=t?.[1]?Number(t[1]):void 0,a=Nr(e)??e;
return{
...a?{
navDate:a}:{
},...r?{
datePrecision:Pr(e)}:{
},...r?{
year:r}:{
}}},Ir=(e,t)=>Ar(t,["volume","volume number"])||e.match(/\bvol(?:ume)?\.?\s+([^,;
:]+)/i)?.[1]?.trim(),Lr=e=>["items","members","collections","manifests"].some(t=>t in e),Rr=e=>["items","sequences","structures"].some(t=>t in e),zr=e=>Array.isArray(e.items)?e.items:Array.isArray(e.members)?e.members:[...xr(e.collections),...xr(e.manifests)],Br=e=>{
if("string"==typeof e)return e.split("#")[0];
let t=br(e);
if(!t)return;
if("canvas"===Tr(wr(t)))return Cr(t).split("#")[0];
let r=br(t.source);
return r?Cr(r).split("#")[0]:void 0},Vr=(e,t)=>{
let r=Cr(e),a=Tr(wr(e))??"manifest",o=Or(e,t.preferredLanguages),i=Dr(e.label,t.preferredLanguages,(t.fallbackLabel??r)||`Untitled ${
a}`),n=Sr(e.navDate)??Ar(o,["displaydate","display date","date"]),s=Ar(o,["year"]),l=Fr(n??s),d=Dr(e.summary??e.description,t.preferredLanguages),c="manifest"===a?r:t.manifestId,p=[],v="loaded";
if("collection"===a)p=zr(e).flatMap(e=>{
let r=br(e);
return r?[Vr(r,{
...t,authoritative:!1})]:[]}),!t.authoritative&&!Lr(e)&&(v="idle");
else if("manifest"===a&&(t.authoritative||Rr(e))){
let a=xr(e.structures),o=xr(e.items).length>0?xr(e.items):xr(br(xr(e.sequences)[0])?.canvases);
p=(a.length>0?a:o).flatMap((e,a)=>{
let o=br(e);
if(!o)return[];
let i=Tr(wr(o));
return[Vr(o,{
...t,authoritative:!0,manifestId:r,..."canvas"===i?{
fallbackLabel:`Canvas ${
a+1}`}:{
}})]})}else"manifest"===a?v="idle":"range"===a&&(p=(xr(e.items).length>0?xr(e.items):xr(e.ranges).length>0?[...xr(e.ranges),...xr(e.canvases)]:xr(e.canvases)).flatMap((e,r)=>{
let a=br(e);
if(a){
let e=Tr(wr(a));
return[Vr(a,{
...t,authoritative:!0,...c?{
manifestId:c}:{
},..."canvas"===e?{
fallbackLabel:`Canvas ${
r+1}`}:{
}})]}let o=Br(e);
return o?[{
id:o,type:"canvas",label:`Canvas ${
r+1}`,...c?{
manifestId:c}:{
},canvasId:o,behavior:[],metadata:[],children:[],loadState:"loaded"}]:[]}));
let g="canvas"===a?r.split("#")[0]:void 0,u="range"===a?xr(e.items).map(Br).find(Boolean)??xr(e.canvases).map(Br).find(Boolean):void 0,h=g??u,f=Ir(i,o);
return{
id:r,type:a,label:i,...d?{
summary:d}:{
},...l,...f?{
volume:f}:{
},...c?{
manifestId:c}:{
},...h?{
canvasId:h}:{
},behavior:kr(e),metadata:o,children:p,loadState:v}},Hr=e=>{
let t={
collections:0,manifests:0,ranges:0,canvases:0,unresolved:0},r=e=>{
"collection"===e.type?t.collections+=1:"manifest"===e.type?t.manifests+=1:"range"===e.type?t.ranges+=1:t.canvases+=1,("idle"===e.loadState||"error"===e.loadState)&&(t.unresolved+=1),e.children.forEach(r)};
return r(e),t},Ur=(e,t={
})=>{
let r=Vr(e,{
preferredLanguages:t.preferredLanguages??["en","none"],authoritative:!0});
if(!r.id)throw TypeError("The IIIF resource must have an id or @id.");
return{
format:"mango-iiif-structure",version:1,root:r,stats:Hr(r)}},Wr=(e,t,r={
})=>{
let a=e.label,o=e.navDate,i=e.datePrecision,n=e.year,s=e.volume,l=Vr(t,{
preferredLanguages:r.preferredLanguages??["en","none"],authoritative:!0,...e.manifestId?{
manifestId:e.manifestId}:{
}});
Object.assign(e,l,{
loadState:"loaded"}),e.label=a,o&&(e.navDate=o),i&&(e.datePrecision=i),n&&(e.year=n),s&&(e.volume=s),delete e.error},Gr=(e,t)=>{
if(e.id===t)return e;
for(let r of e.children){
let e=Gr(r,t);
if(e)return e}},Kr=(e,t)=>{
if(t(e))return[e];
for(let r of e.children){
let a=Kr(r,t);
if(a)return[e,...a]}},qr=e=>"object"==typeof e&&!!e&&!Array.isArray(e),Jr=(e,t,r)=>{
e.dispatchEvent(new CustomEvent(t,{
detail:r}))},Yr=(e,t)=>{
let r=new AbortController,a=()=>r.abort(),o=[e,t];
return o.find(e=>e.aborted)?a():o.forEach(e=>e.addEventListener("abort",a,{
once:!0})),{
signal:r.signal,dispose:()=>o.forEach(e=>e.removeEventListener("abort",a))}},Xr=class extends EventTarget{
#e=null;
#t;
#r;
#a=new Map;
#o=null;
constructor(e={
}){
super(),this.#t=e.fetch??globalThis.fetch,this.#r=e.preferredLanguages?{
preferredLanguages:e.preferredLanguages}:{
}}get structure(){
return this.#e}async load(e,t={
}){
this.#o?.abort();
let r=new AbortController;
this.#o=r;
let a=t.signal?Yr(t.signal,r.signal):null,o=a?.signal??r.signal;
this.#t=t.fetch??this.#t,this.#r=t.preferredLanguages?{
preferredLanguages:t.preferredLanguages}:this.#r,this.#a.clear(),this.#e=null,Jr(this,"collection-loadstart",{
input:e});
try{
let r="string"==typeof e?await this.#i(e,o):e;
return o.throwIfAborted(),this.#e=Ur(r,this.#r),Jr(this,"collection-ready",{
structure:this.#e}),"all"===t.resolve&&await this.resolveAll({
...void 0===t.concurrency?{
}:{
concurrency:t.concurrency},...void 0===t.maxDepth?{
}:{
maxDepth:t.maxDepth},...void 0===t.resolveManifests?{
}:{
resolveManifests:t.resolveManifests},signal:o}),this.#e}catch(e){
let t=e instanceof Error?e:Error(String(e));
throw this.#o===r&&Jr(this,"collection-error",{
error:t}),t}finally{
a?.dispose()}}abort(){
this.#o?.abort()}async resolve(e,t){
if(!this.#e)throw Error("Load a IIIF resource before resolving nodes.");
let r="string"==typeof e?Gr(this.#e.root,e):e;
if(!r)throw Error(`Unknown structure node: ${
e}`);
if("loaded"===r.loadState||"collection"!==r.type&&"manifest"!==r.type)return r;
r.loadState="loading",delete r.error,this.#n();
try{
return Wr(r,await this.#l(r.id,t??this.#o?.signal),this.#r),this.#n(),r}catch(e){
let t=e instanceof Error?e:Error(String(e));
throw r.loadState="error",r.error=t.message,this.#n(),Jr(this,"collection-error",{
error:t,nodeId:r.id}),t}}async resolveAll(e={
}){
if(!this.#e)throw Error("Load a IIIF resource before resolving nodes.");
let t=Math.max(1,Math.floor(e.concurrency??4)),r=e.maxDepth??1/0,a=t=>"collection"===t.type||!0===e.resolveManifests&&"manifest"===t.type,o=[],i=new Set,n=(e,t)=>{
t>r||i.has(e.id)||(i.add(e.id),a(e)&&"loaded"!==e.loadState&&o.push({
node:e,depth:t}),e.children.forEach(e=>n(e,t+1)))};
n(this.#e.root,0);
let s=0;
return await new Promise((n,l)=>{
let d=0,c=!1,p=()=>{
if(!c){
try{
e.signal?.throwIfAborted()}catch(e){
return c=!0,void l(e)}for(;
d<t&&o.length>0;
){
let t=o.shift();
if(!t)break;
d+=1,this.resolve(t.node,e.signal).then(()=>{
s+=1;
for(let e of t.node.children)t.depth+1>r||i.has(e.id)||(i.add(e.id),a(e)&&"loaded"!==e.loadState&&o.push({
node:e,depth:t.depth+1}));
Jr(this,"collection-progress",{
loaded:s,pending:o.length,nodeId:t.node.id})}).then(()=>{
--d,p()},e=>{
--d,c||(c=!0,l(e))})}0===d&&0===o.length&&(c=!0,n())}};
p()}),this.#e}toJSON(){
return this.#e?structuredClone(this.#e):null}on(e,t){
let r=t;
return this.addEventListener(e,r),()=>this.removeEventListener(e,r)}async#i(e,t){
let r=e.trim();
if(r.startsWith("{
")){
let e=JSON.parse(r);
if(!qr(e))throw TypeError("The JSON input must be an object.");
return e}return this.#l(r,t)}#l(e,t){
let r=this.#a.get(e);
if(r)return r;
let a=(0,this.#t)(e,{
...t?{
signal:t}:{
},headers:{
Accept:"application/ld+json, application/json;
q=0.9"}}).then(async t=>{
if(!t.ok)throw Error(`Could not load ${
e}: HTTP ${
t.status}`);
let r=await t.json();
if(!qr(r))throw TypeError(`The response from ${
e} is not a JSON object.`);
return r}).catch(t=>{
throw this.#a.delete(e),t});
return this.#a.set(e,a),a}#n(){
this.#e&&(this.#e.stats=Hr(this.#e.root),Jr(this,"collection-change",{
structure:this.#e}))}},Zr="iiif-collection-select",Qr="iiif-collection-sort-change",$r="mango-collection-select",ei="mango-collection-sort-change",ti={
viewBy:"View by:",hierarchy:"hierarchy",date:"date",loadingDateMetadata:"Loading date metadata…",loadNextDates:"Load next {
count} dates",loadMissingDate:"Load {
count} missing date",loadMissingDates:"Load {
count} missing dates",dateNotLoaded:"Date not loaded",oneDateNotLoaded:"{
count} date not loaded",datesNotLoaded:"{
count} dates not loaded",undated:"Undated",expand:"Expand {
label}",collapse:"Collapse {
label}",retry:"{
error} — select + to retry",loadingStructure:"Loading IIIF structure…",noResource:"No IIIF collection or manifest loaded.",noNavigableItems:"No navigable items.",navigationLabel:"IIIF navigation"},ni=(e,t)=>Object.entries(t).reduce((e,[t,r])=>e.replaceAll(`{
${
t}}`,String(r)),e),ri=(e,t)=>`${
t}:resource:${
"manifest"!==e.type&&e.manifestId?`${
e.manifestId}::${
e.id}`:e.id}`,ii=(e,t)=>{
let r=!("range"===e.type&&e.canvasId);
return{
id:ri(e,t),kind:"resource",label:e.label,sourceId:e.id,sourceType:e.type,...e.manifestId?{
manifestId:e.manifestId}:{
},...e.canvasId?{
canvasId:e.canvasId}:{
},loadState:e.loadState,...e.error?{
error:e.error}:{
},children:r?e.children.map(e=>ii(e,t)):[]}},ai=e=>{
let t=[],r=new Set,a=e=>{
if("manifest"===e.type&&e.navDate&&!r.has(e.id)){
let a=Date.parse(e.navDate);
Number.isNaN(a)||(r.add(e.id),t.push({
node:e,date:new Date(a),precision:e.datePrecision??"day"}))}"manifest"!==e.type&&e.children.forEach(a)};
return a(e),t.sort((e,t)=>e.date.getTime()-t.date.getTime())},oi=(e,t)=>{
let r=new Set(t.map(({
node:e})=>e.id)),a=[],o=[],i=new Set,n=e=>{
"manifest"===e.type&&!r.has(e.id)&&!i.has(e.id)&&(i.add(e.id),"loaded"===e.loadState?o.push(e):a.push(e)),"manifest"!==e.type&&e.children.forEach(n)};
return n(e),{
notLoaded:a,undated:o}},si=(e,t)=>`${
new Intl.DateTimeFormat(t,{
weekday:"short",timeZone:"UTC"}).format(e)} ${
new Intl.DateTimeFormat(t,{
month:"short",timeZone:"UTC"}).format(e)} ${
e.getUTCDate()} ${
e.getUTCFullYear()}`,ci=(e,t,r,a,o)=>{
let i=new Map;
for(let t of e){
let e=10*Math.floor(t.date.getUTCFullYear()/10),r=i.get(e)??[];
r.push(t),i.set(e,r)}let n=[...i.entries()].sort(([e],[t])=>e-t).map(([e,t])=>{
let r=new Map;
for(let e of t){
let t=e.date.getUTCFullYear(),a=r.get(t)??[];
a.push(e),r.set(t,a)}let o=[...r.keys()].sort((e,t)=>e-t);
return{
id:`date:decade:${
e}`,kind:"group",label:`${
o[0]??e} - ${
o.at(-1)??e}`,groupBy:"decade",children:[...r.entries()].sort(([e],[t])=>e-t).map(([e,t])=>{
let r=t.filter(e=>"year"===e.precision),o=new Map;
for(let e of t){
if("year"===e.precision)continue;
let t=e.date.getUTCMonth(),r=o.get(t)??[];
r.push(e),o.set(t,r)}return{
id:`date:year:${
e}`,kind:"group",label:String(e),groupBy:"year",children:[...r.map(({
node:e})=>({
...ii(e,"date"),children:[]})),...[...o.entries()].sort(([e],[t])=>e-t).map(([t,r])=>({
id:`date:month:${
e}-${
String(t+1).padStart(2,"0")}`,kind:"group",label:new Intl.DateTimeFormat(a,{
month:"long",timeZone:"UTC"}).format(new Date(Date.UTC(e,t,1))),groupBy:"month",children:r.map(({
node:e,date:t,precision:r})=>({
...ii(e,"date"),label:"day"===r?si(t,a):e.label,children:[]}))}))]}})}}),s=t.length>0?[{
id:"date:not-loaded",kind:"group",label:o.dateNotLoaded,groupBy:"date-not-loaded",children:t.map(e=>({
...ii(e,"date"),children:[]}))}]:[],l=r.length>0?[{
id:"date:undated",kind:"group",label:o.undated,groupBy:"undated",children:r.map(e=>({
...ii(e,"date"),children:[]}))}]:[];
return[...n,...s,...l]},li=(e,t={
})=>{
let r=ai(e.root),{
notLoaded:a,undated:o}=oi(e.root,r),i={
total:r.length+a.length+o.length,known:r.length,notLoaded:a.length,undated:o.length},n={
date:i.known>0,volume:e.root.children.length>0},s=t.mode,l={
...ti,...t.messages},d=s&&n[s]?s:n.volume?"volume":"date";
return{
mode:d,availableModes:n,dateCoverage:i,nodes:"date"===d?ci(r,a,o,t.locale??"en",l):e.root.children.map(e=>ii(e,"volume"))}},ui=":host {
\n  --mango-collection-accent: #5b3fd6;
\n  --mango-collection-background: #fff;
\n  --mango-collection-surface: #f5f5f8;
\n  --mango-collection-text: #18181b;
\n  --mango-collection-muted: #62626a;
\n  --mango-collection-border: #d7d7de;
\n  --mango-collection-radius: .65rem;
\n  --mango-collection-font: ui-sans-serif, system-ui, sans-serif;
\n  color: var(--mango-collection-text);
\n  display: block;
\n  font-family: var(--mango-collection-font);
\n}\n\n*,\n*::before,\n*::after {
\n  box-sizing: border-box;
\n}\n\nbutton {
\n  background: transparent;
\n  border: 0;
\n  border-radius: .35rem;
\n  color: inherit;
\n  cursor: pointer;
\n  font: inherit;
\n}\n\nbutton:hover {
\n  background: var(--mango-collection-surface);
\n}\n\n.sidebar {
\n  background: var(--mango-collection-background);
\n  border: 1px solid var(--mango-collection-border);
\n  border-radius: var(--mango-collection-radius);
\n  min-width: 15rem;
\n  overflow: hidden;
\n}\n\nheader {
\n  border-bottom: 1px solid var(--mango-collection-border);
\n  padding: .8rem;
\n}\n\nh2 {
\n  font-size: 1rem;
\n  line-height: 1.35;
\n  margin: 0;
\n}\n\n.sort {
\n  align-items: center;
\n  display: flex;
\n  flex-wrap: wrap;
\n  gap: .55rem;
\n  margin-top: .75rem;
\n}\n\n.sort-label {
\n  font-size: .85rem;
\n  font-weight: 650;
\n}\n\n.sort-options {
\n  display: inline-flex;
\n}\n\n.sort-option {
\n  background: var(--mango-collection-surface);
\n  border-radius: 0;
\n  color: var(--mango-collection-muted);
\n  min-width: 6.5rem;
\n  padding: .35rem .75rem;
\n}\n\n.sort-spinner {
\n  height: .7rem;
\n  margin-left: .25rem;
\n  width: .7rem;
\n}\n\n.date-load {
\n  color: var(--mango-collection-accent);
\n  font-size: .78rem;
\n  font-weight: 650;
\n  margin-left: auto;
\n  padding: .35rem .5rem;
\n}\n\n.date-status {
\n  align-items: center;
\n  color: var(--mango-collection-muted);
\n  display: inline-flex;
\n  font-size: .75rem;
\n  gap: .35rem;
\n  width: 100%;
\n}\n\n.sort-option:first-child {
\n  border-radius: .45rem 0 0 .45rem;
\n}\n\n.sort-option:last-child {
\n  border-radius: 0 .45rem .45rem 0;
\n}\n\n.sort-option[aria-pressed='true'] {
\n  background: var(--mango-collection-text);
\n  color: var(--mango-collection-background);
\n}\n\n.sort-option:disabled {
\n  cursor: not-allowed;
\n  opacity: .45;
\n}\n\n.tree-scroll {
\n  max-height: var(--mango-collection-max-height, 70vh);
\n  overflow: auto;
\n  padding: .45rem;
\n}\n\n[role='tree'],\n[role='group'] {
\n  list-style: none;
\n  margin: 0;
\n  padding: 0;
\n}\n\n[role='group'] {
\n  margin-left: .8rem;
\n  padding-left: .85rem;
\n  position: relative;
\n}\n\n[role='group']::before {
\n  border-left: 1px solid var(--mango-collection-border);
\n  bottom: 1rem;
\n  content: '';
\n  left: 0;
\n  position: absolute;
\n  top: 0;
\n}\n\n[role='group'] > [role='treeitem'] {
\n  position: relative;
\n}\n\n[role='group'] > [role='treeitem']::before {
\n  border-top: 1px solid var(--mango-collection-border);
\n  content: '';
\n  left: -.85rem;
\n  position: absolute;
\n  top: .9rem;
\n  width: .85rem;
\n}\n\n.row {
\n  align-items: start;
\n  display: grid;
\n  grid-template-columns: 1.65rem minmax(0, 1fr);
\n  min-height: 2rem;
\n}\n\n.row.leaf {
\n  grid-template-columns: minmax(0, 1fr);
\n  padding-left: 1.65rem;
\n}\n\n.toggle {
\n  align-items: center;
\n  display: inline-flex;
\n  height: 1.8rem;
\n  justify-content: center;
\n  padding: 0;
\n  width: 1.55rem;
\n}\n\n.item {
\n  display: block;
\n  line-height: 1.25;
\n  min-width: 0;
\n  padding: .35rem .45rem;
\n  text-align: left;
\n  width: 100%;
\n}\n\n.item.active {
\n  background: color-mix(in srgb, var(--mango-collection-accent) 14%, transparent);
\n  border-left: 3px solid var(--mango-collection-accent);
\n  border-radius: 0;
\n}\n\n.meta {
\n  color: var(--mango-collection-muted);
\n  display: block;
\n  font-size: .72rem;
\n  margin-top: .12rem;
\n}\n\n.status {
\n  color: var(--mango-collection-muted);
\n  margin: 0;
\n  padding: 1rem;
\n}\n\n.error {
\n  color: #a21c1c;
\n}\n\n.spinner {
\n  animation: spin .8s linear infinite;
\n  border: 2px solid var(--mango-collection-border);
\n  border-radius: 50%;
\n  border-top-color: var(--mango-collection-accent);
\n  display: inline-block;
\n  height: .9rem;
\n  width: .9rem;
\n}\n\n@keyframes spin {
\n  to {
 transform: rotate(360deg);
 }\n}\n\n@media (prefers-reduced-motion: reduce) {
\n  .spinner {
 animation-duration: 1.8s;
 }\n}\n",di=globalThis.HTMLElement??class{
},fi=()=>globalThis.performance?.now()??Date.now(),pi=e=>Math.round(100*e)/100,mi=e=>e.replaceAll("&","&amp;
").replaceAll("<","&lt;
").replaceAll(">","&gt;
").replaceAll('"',"&quot;
").replaceAll("'","&#039;
"),hi=(e,t)=>{
for(let r of e){
if(r.id===t||r.sourceId===t)return r;
let e=hi(r.children,t);
if(e)return e}},gi=class extends di{
static observedAttributes=["src","sort-mode","date-discovery","date-discovery-limit","date-discovery-concurrency","locale"];
#e;
#t=new Xr;
#r=[];
#a=new Set;
#o="";
#i=!1;
#l="";
#n="";
#s=0;
#d="volume";
#c=new Map;
#p=!1;
#v={
...ti};
constructor(){
super(),this.#e=this.attachShadow({
mode:"open"}),this.#e.addEventListener("click",e=>this.#g(e))}get controller(){
return this.#t}set controller(e){
e!==this.#t&&(this.#u(),this.#t=e,this.#c.clear(),this.isConnected&&this.#h(),this.#f())}get src(){
return this.getAttribute("src")??""}set src(e){
e?this.setAttribute("src",e):this.removeAttribute("src")}get sortMode(){
return this.#d}set sortMode(e){
this.setAttribute("sort-mode",e)}get dateDiscovery(){
let e=this.getAttribute("date-discovery");
return"adaptive"===e||"on-demand"===e||"all"===e?e:"collection-only"}set dateDiscovery(e){
this.setAttribute("date-discovery",e)}get dateDiscoveryLimit(){
let e=this.getAttribute("date-discovery-limit");
if(null===e)return 50;
let t=Number(e);
return Number.isFinite(t)&&t>=0?Math.floor(t):50}set dateDiscoveryLimit(e){
this.setAttribute("date-discovery-limit",String(Math.max(0,Math.floor(e))))}get dateDiscoveryConcurrency(){
let e=Number(this.getAttribute("date-discovery-concurrency"));
return Number.isFinite(e)&&e>=1?Math.floor(e):4}set dateDiscoveryConcurrency(e){
this.setAttribute("date-discovery-concurrency",String(Math.max(1,Math.floor(e))))}get locale(){
return this.getAttribute("locale")||"en"}set locale(e){
e?this.setAttribute("locale",e):this.removeAttribute("locale")}get messages(){
return{
...this.#v}}set messages(e){
this.#v={
...ti,...e},this.#c.clear(),this.#f("messages")}get debug(){
return this.hasAttribute("debug")}set debug(e){
this.toggleAttribute("debug",e)}get data(){
return this.#t.toJSON()}get navigation(){
return this.#t.structure?structuredClone(this.#w(this.#d)):null}connectedCallback(){
this.#h(),this.#f(),this.src&&this.src!==this.#n&&this.load(this.src).catch(()=>{
})}attributeChangedCallback(e,t,r){
"src"===e&&this.isConnected&&r&&r!==t&&this.load(r).catch(()=>{
}),"sort-mode"===e&&r!==t&&("date"===r||"volume"===r)&&this.#b(r,!1),("date-discovery"===e||"date-discovery-limit"===e||"date-discovery-concurrency"===e)&&r!==t&&(this.#f(),"all"===r?this.loadMissingDates({
limit:1/0}):this.#m()),"locale"===e&&r!==t&&(this.#c.clear(),this.#f("locale"))}disconnectedCallback(){
this.#t.abort(),this.#u()}async load(e){
let t=fi();
this.#x("load:start",{
input:"string"!=typeof e||e.trim().startsWith("{
")?"inline JSON":e});
let r=++this.#s;
this.#i=!0,this.#l="",this.#a.clear(),this.#o="",this.#c.clear(),this.#f();
try{
let r=await this.#t.load(e);
return"string"==typeof e&&!e.trim().startsWith("{
")&&(this.#n=e),this.#x("load:complete",{
durationMs:pi(fi()-t),stats:r.stats}),r}finally{
r===this.#s&&(this.#i=!1,this.#f())}}expand(e){
let t=this.#t.structure;
if(!t)return;
let r=hi(this.#w(this.#d).nodes,e);
if(!r)return;
this.#a.add(r.id);
let a=r.sourceId?Gr(t.root,r.sourceId):void 0;
("idle"===a?.loadState||"error"===a?.loadState)&&this.#y(a),this.#f()}collapse(e){
let t=this.#t.structure?hi(this.#w(this.#d).nodes,e):void 0;
this.#a.delete(t?.id??e),this.#f()}toJSON(){
return this.#t.toJSON()}async loadMissingDates(e={
}){
let t=this.#t.structure;
if(!t||this.#p)return 0;
let r=[],a=e=>{
"manifest"!==e.type?e.children.forEach(a):!e.navDate&&("idle"===e.loadState||"error"===e.loadState)&&r.push(e)};
a(t.root);
let o=void 0===e.limit?100:Math.max(0,Math.floor(e.limit)),i=r.slice(0,o);
if(0===i.length)return 0;
this.#p=!0,this.#f("date-discovery:start");
let n=0,s=Math.max(1,Math.floor(e.concurrency??this.dateDiscoveryConcurrency)),l=async()=>{
for(;
n<i.length;
){
let e=i[n++];
e&&await this.#y(e)}};
try{
return await Promise.all(Array.from({
length:Math.min(s,i.length)},()=>l())),i.length}finally{
this.#p=!1,this.#f("date-discovery:complete")}}#h(){
this.#r.length>0||(this.#r=[this.#t.on("collection-loadstart",()=>{
this.#i=!0,this.#l="",this.#c.clear(),this.#f()}),this.#t.on("collection-ready",({
detail:e})=>{
this.#i=!1,this.#c.clear();
let t=this.getAttribute("sort-mode");
if("date"===t||"volume"===t)this.#d=this.#w(t).mode;
else{
let t=li(e.structure);
this.#c.set(t.mode,t),this.#d=t.mode}this.#f(),this.#m()}),this.#t.on("collection-change",()=>{
this.#c.clear(),this.#f(),this.#m()}),this.#t.on("collection-error",({
detail:e})=>{
this.#i=!1,e.nodeId||(this.#l=e.error.message),this.#f()})])}#u(){
this.#r.forEach(e=>e()),this.#r=[]}async#y(e){
let t=fi();
this.#x("lookup:start",{
id:e.id,type:e.type,method:"GET"});
try{
await this.#t.resolve(e),this.#x("lookup:complete",{
id:e.id,type:e.type,durationMs:pi(fi()-t),childCount:e.children.length})}catch(r){
this.#x("lookup:error",{
id:e.id,type:e.type,durationMs:pi(fi()-t),error:r instanceof Error?r.message:String(r)})}}#g(e){
let t=e.target instanceof Element?e.target.closest("[data-action]"):null;
if(!t)return;
if("sort"===t.dataset.action){
let e=t.dataset.mode;
return void(("date"===e||"volume"===e)&&this.#b(e,!0))}if("load-dates"===t.dataset.action)return void this.loadMissingDates({
concurrency:this.dateDiscoveryConcurrency});
let r=t.dataset.navigationId;
if(!r||!this.#t.structure)return;
let a=this.#c.has(this.#d),o=fi(),i=this.#w(this.#d),n=fi()-o,s=hi(i.nodes,r);
if(!s)return;
let l=s.sourceId?Gr(this.#t.structure.root,s.sourceId):void 0;
if("toggle"===t.dataset.action)return this.#x("toggle",{
navigationId:r,label:s.label,kind:s.kind,sourceType:l?.type??null,loadState:l?.loadState??null,requiresHttpLookup:"idle"===l?.loadState||"error"===l?.loadState,navigationCacheHit:a,navigationMs:pi(n)}),this.#a.has(r)?this.#a.delete(r):(this.#a.add(r),("idle"===l?.loadState||"error"===l?.loadState)&&this.#y(l)),void this.#f("toggle");
if("select"===t.dataset.action){
if(!l)return;
this.#o=s.id;
let e={
node:structuredClone(l),...l.manifestId?{
manifestId:l.manifestId}:{
},...l.canvasId?{
canvasId:l.canvasId}:{
}};
for(let t of[Zr,$r])this.dispatchEvent(new CustomEvent(t,{
detail:e,bubbles:!0,composed:!0}));
this.#f()}}#b(e,t){
if(this.#t.structure){
if(this.#w(e).availableModes[e]&&this.#d!==e&&(this.#d=e,this.getAttribute("sort-mode")!==e&&this.setAttribute("sort-mode",e),this.#f(),t))for(let t of[Qr,ei])this.dispatchEvent(new CustomEvent(t,{
detail:{
mode:e},bubbles:!0,composed:!0}))}else this.#d=e}#m(){
if(!this.#t.structure||this.#p)return;
if("all"===this.dateDiscovery)return void this.loadMissingDates({
concurrency:this.dateDiscoveryConcurrency,limit:1/0});
if("adaptive"!==this.dateDiscovery)return;
let e=this.#w(this.#d).dateCoverage.notLoaded;
e>0&&e<=this.dateDiscoveryLimit&&this.loadMissingDates({
concurrency:this.dateDiscoveryConcurrency,limit:this.dateDiscoveryLimit})}#_(e,t){
let r="group"===e.kind?e.children.length>0:"volume"===this.#d&&(e.children.length>0||"loaded"!==e.loadState),a=this.#a.has(e.id),o="resource"===e.kind&&("manifest"===e.sourceType||!!e.canvasId),i="loading"===e.loadState,n=i?'<span class="spinner" aria-hidden="true"></span>':a?"−":"+",s=r?"row":"row leaf",l=e.error?ni(this.#v.retry,{
error:e.error}):"",d=`${
i&&!r?'<span class="spinner" aria-hidden="true"></span>':""}<span>${
mi(e.label)}</span>${
l?`<span class="meta error">${
mi(l)}</span>`:""}`,c=o?`<button part="item" class="item${
this.#o===e.id?" active":""}" type="button" data-action="select" data-navigation-id="${
mi(e.id)}">${
d}</button>`:`<span part="label" class="item">${
d}</span>`;
return`<li role="treeitem" data-navigation-id="${
mi(e.id)}" aria-level="${
t}"${
r?` aria-expanded="${
a}"`:""}${
i?' aria-busy="true"':""}>\n      <div class="${
s}">\n        ${
r?`<button part="toggle" class="toggle" type="button" data-action="toggle" data-navigation-id="${
mi(e.id)}" aria-label="${
mi(ni(a?this.#v.collapse:this.#v.expand,{
label:e.label}))}">${
n}</button>`:""}\n        ${
c}\n      </div>\n      ${
a&&e.children.length>0?`<ul role="group">${
e.children.map(e=>this.#_(e,t+1)).join("")}</ul>`:""}\n    </li>`}#k(e,t){
let r=document.createElement("template");
r.innerHTML=this.#_(e,t).trim();
let a=r.content.firstElementChild;
if(!(a instanceof HTMLLIElement))throw TypeError("Could not create a navigation tree item.");
return a}#z(e,t){
return[...e.children].find(t)}#I(e,t,r){
let a=new Map([...e.children].filter(e=>e instanceof HTMLLIElement).map(e=>[e.dataset.navigationId,e])),o=new Set,i=e.firstElementChild;
for(let n of t){
let t=this.#k(n,r),s=a.get(n.id);
if(s){
for(let e of[...s.attributes])s.removeAttribute(e.name);
for(let e of[...t.attributes])s.setAttribute(e.name,e.value);
let e=this.#z(s,e=>e instanceof HTMLDivElement&&e.classList.contains("row")),a=this.#z(t,e=>e instanceof HTMLDivElement&&e.classList.contains("row"));
e&&a&&e.outerHTML!==a.outerHTML&&e.replaceWith(a);
let o=this.#z(s,e=>e instanceof HTMLUListElement&&"group"===e.getAttribute("role")),i=this.#z(t,e=>e instanceof HTMLUListElement&&"group"===e.getAttribute("role"));
if(i){
let e=o??i;
o||s.append(e),this.#I(e,n.children,r+1)}else o?.remove()}else s=t;
o.add(s),s!==i&&e.insertBefore(s,i),i=s.nextElementSibling}for(let e of a.values())o.has(e)||e.remove()}#C(){
let e=this.#e.querySelector(".tree-scroll"),t=this.#e.activeElement instanceof HTMLElement?this.#e.activeElement:null,r=t?.dataset.action,a=t?.dataset.navigationId,o=t?.dataset.mode,i=!!(r||a||o);
return{
scrollTop:e?.scrollTop??0,scrollLeft:e?.scrollLeft??0,...i?{
focus:{
...r?{
action:r}:{
},...a?{
navigationId:a}:{
},...o?{
mode:o}:{
}}}:{
}}}#j(e){
e.focus&&[...this.#e.querySelectorAll("[data-action]")].find(t=>!(e.focus?.action&&t.dataset.action!==e.focus.action||e.focus?.navigationId&&t.dataset.navigationId!==e.focus.navigationId||e.focus?.mode&&t.dataset.mode!==e.focus.mode))?.focus({
preventScroll:!0});
let t=this.#e.querySelector(".tree-scroll");
t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}#x(e,t){
this.debug&&console.debug("[collection-navigator]",e,t)}#w(e){
let t=this.#c.get(e);
if(t)return t;
let r=this.#t.structure;
if(!r)throw Error("Load a IIIF resource before creating navigation.");
let a=li(r,{
mode:e,locale:this.locale,messages:{
dateNotLoaded:this.#v.dateNotLoaded,undated:this.#v.undated}});
return this.#c.set(e,a),this.#c.set(a.mode,a),a}#f(e="state-change"){
let t=fi(),r=this.#C(),a=this.#t.structure;
if(!a)return this.#e.innerHTML=`<style>${
ui}</style><section part="sidebar" class="sidebar">${
this.#i?`<p class="status"><span class="spinner"></span> ${
mi(this.#v.loadingStructure)}</p>`:this.#l?`<p class="status error">${
mi(this.#l)}</p>`:`<p class="status">${
mi(this.#v.noResource)}</p>`}</section>`,this.#j(r),void this.#x("render",{
reason:e,totalMs:pi(fi()-t),state:this.#i?"loading":this.#l?"error":"empty"});
let o=this.#c.has(this.#d),i=fi(),n=this.#w(this.#d),s=fi()-i;
this.#d=n.mode;
let l=n.dateCoverage,d=this.#p?'<span class="spinner sort-spinner" aria-hidden="true"></span>':"",c="adaptive"===this.dateDiscovery||"on-demand"===this.dateDiscovery,p=Math.min(100,l.notLoaded),v=l.notLoaded>100?ni(this.#v.loadNextDates,{
count:p}):ni(1===l.notLoaded?this.#v.loadMissingDate:this.#v.loadMissingDates,{
count:l.notLoaded}),g=l.notLoaded>0&&("date"===n.mode||0===l.known)?this.#p?`<span part="date-discovery" class="date-status"><span class="spinner" aria-hidden="true"></span> ${
mi(this.#v.loadingDateMetadata)}</span>`:c?`<button part="date-discovery" class="date-load" type="button" data-action="load-dates">${
v}</button>`:`<span part="date-discovery" class="date-status">${
mi(ni(1===l.notLoaded?this.#v.oneDateNotLoaded:this.#v.datesNotLoaded,{
count:l.notLoaded}))}</span>`:"",u=n.availableModes.date||n.availableModes.volume?`<div part="navigation" class="sort"><span class="sort-label">${
mi(this.#v.viewBy)}</span><span class="sort-options">\n          <button part="sort-volume" class="sort-option" type="button" data-action="sort" data-mode="volume" aria-pressed="${
"volume"===n.mode}"${
n.availableModes.volume?"":" disabled"}>${
mi(this.#v.hierarchy)}</button>\n          <button part="sort-date" class="sort-option" type="button" data-action="sort" data-mode="date" aria-pressed="${
"date"===n.mode}"${
this.#p?' aria-busy="true"':""}${
n.availableModes.date?"":" disabled"}>${
mi(this.#v.date)}${
d}</button>\n        </span>${
g}</div>`:"",h=fi(),f=this.#e.querySelector(".sidebar"),w=f?.querySelector("header"),b=f?.querySelector(".tree-scroll");
(!f||!w||!b)&&(this.#e.innerHTML=`<style>${
ui}</style><section part="sidebar" class="sidebar" aria-label="${
mi(this.#v.navigationLabel)}">\n        <header part="header"></header>\n        <div part="tree-container" class="tree-scroll"></div>\n      </section>`,f=this.#e.querySelector(".sidebar"),w=f.querySelector("header"),b=f.querySelector(".tree-scroll"));
let m=null!==this.querySelector('[slot="heading"]'),x=`<slot name="heading"></slot>${
u}`;
w.innerHTML!==x&&(w.innerHTML=x),w.hidden=!m&&!u;
let y=this.#z(b,e=>e instanceof HTMLUListElement&&"tree"===e.getAttribute("role"));
if(n.nodes.length>0){
let e=y??document.createElement("ul");
e.setAttribute("role","tree"),e.setAttribute("aria-label",a.root.label),y||b.replaceChildren(e),this.#I(e,n.nodes,1)}else b.textContent!==this.#v.noNavigableItems&&(b.innerHTML=`<p class="status">${
mi(this.#v.noNavigableItems)}</p>`);
this.#j(r),this.#x("render",{
reason:e,mode:n.mode,navigationCacheHit:o,navigationMs:pi(s),domMs:pi(fi()-h),totalMs:pi(fi()-t),visibleNodeCount:this.#e.querySelectorAll('[role="treeitem"]').length,scrollTop:this.#e.querySelector(".tree-scroll")?.scrollTop??0})}};
typeof window<"u"&&"customElements"in window&&((e="mango-collection-tree")=>{
typeof customElements>"u"||customElements.get(e)||customElements.define(e,gi)})();
var _i=n('<div class="panel__empty" role="alert"> </div>'),vi=n('<section class="panel panel--collection svelte-16ujlb"><div class="panel__header"><div class="panel__title"> </div> <button class="panel__close" type="button"> </button></div> <!> <mango-collection-tree></mango-collection-tree></section>',2);
function yi(t,a){
le(a,!0);
let n=()=>O(_e,"$t",s),[s,l]=ee(),c=Ge(),p=c.derived.collectionEntry,v=c.derived.uiLocale,f=V(void 0),w="",b=V("");
e(()=>{
let e=d(f);
if(!e)return;
let t=e=>{
a.onselect?.(e.detail)};
return e.addEventListener("iiif-collection-select",t),()=>e.removeEventListener("iiif-collection-select",t)}),e(()=>{
let e=O(p,"$collectionEntry",s),t=d(f);
!t||!e?.json||(t.locale=O(v,"$uiLocale",s),t.messages={
viewBy:n()("viewer.panels.collection.messages.viewBy"),hierarchy:n()("viewer.panels.collection.messages.hierarchy"),date:n()("viewer.panels.collection.messages.date"),loadingDateMetadata:n()("viewer.panels.collection.messages.loadingDateMetadata"),loadNextDates:n()("viewer.panels.collection.messages.loadNextDates"),loadMissingDate:n()("viewer.panels.collection.messages.loadMissingDate"),loadMissingDates:n()("viewer.panels.collection.messages.loadMissingDates"),dateNotLoaded:n()("viewer.panels.collection.messages.dateNotLoaded"),oneDateNotLoaded:n()("viewer.panels.collection.messages.oneDateNotLoaded"),datesNotLoaded:n()("viewer.panels.collection.messages.datesNotLoaded"),undated:n()("viewer.panels.collection.messages.undated"),expand:n()("viewer.panels.collection.messages.expand"),collapse:n()("viewer.panels.collection.messages.collapse"),retry:n()("viewer.panels.collection.messages.retry"),loadingStructure:n()("viewer.panels.collection.messages.loadingStructure"),noResource:n()("viewer.panels.collection.messages.noResource"),noNavigableItems:n()("viewer.panels.collection.messages.noNavigableItems"),navigationLabel:n()("viewer.panels.collection.messages.navigationLabel")},e.id!==w&&(w=e.id,j(b,""),t.load(e.json).catch(e=>{
j(b,e instanceof Error?e.message:String(e),!0)})))});
var m=vi(),x=W(m),y=W(x),_=W(y,!0);
o(y);
var k=R(y,2),M=W(k,!0);
o(k),o(x);
var S=R(x,2),A=e=>{
var t=_i(),r=W(t);
o(t),h(e=>u(r,`${
e??""}: ${
d(b)??""}`),[()=>n()("viewer.panels.collection.error")]),g(e,t)};
z(S,e=>{
d(b)&&e(A)});
var q=R(S,2);
r(q,1,"svelte-16ujlb"),ae(q,e=>j(f,e),()=>d(f)),o(m),h((e,t,r,a)=>{
I(m,"aria-label",e),u(_,t),I(k,"aria-label",r),u(M,a)},[()=>n()("viewer.panels.collection.label"),()=>n()("viewer.panels.collection.title"),()=>n()("viewer.panels.collection.close"),()=>n()("common.closeGlyph")]),C("click",k,()=>a.onclose?.()),g(t,m),i(),l()}x(["click"]);
var bi=n("<div><!></div>"),xi=n("<aside><!> <!> <!> <!> <!> <!> <!> <!> <!> <!></aside>");
function Si(t,n){
le(n,!0);
let s=()=>O(A,"$mediaType",l),[l,c]=ee(),p=U(n,"visible",3,!0),v=U(n,"showCollection",3,!1),u=U(n,"showAnnotations",3,!1),f=U(n,"showTools",3,!1),w=U(n,"showContents",3,!1),b=U(n,"showSearch",3,!1),m=U(n,"showMetadata",3,!1),x=U(n,"showSettings",3,!1),y=U(n,"showLayers",3,!1),_=U(n,"showCompare",3,!1),C=U(n,"redesigned",3,!1),M=U(n,"contentsTab",3,"toc"),S=U(n,"leftPlugins",19,()=>[]),A=Ge().derived.mediaType,q=V(null),T=null,$=k({
collection:!1,contents:!1,settings:!1,compare:!1,annotations:!1,tools:!1,search:!1,metadata:!1,layers:!1});
e(()=>{
v()&&($.collection=!0),w()&&($.contents=!0),x()&&($.settings=!0),_()&&($.compare=!0),u()&&($.annotations=!0),f()&&($.tools=!0),b()&&($.search=!0),m()&&($.metadata=!0,d(q)?Promise.resolve():T||=import("./MetadataPanel-pT8C-yQw.js").then(e=>{
j(q,e.default,!0)})),y()&&($.layers=!0)});
var L=xi();
let N;
var E=W(L),B=e=>{
var t=bi();
yi(W(t),{
onclose:()=>n.onpanelToggle?.("collection",!1),get onselect(){
return n.oncollectionSelect}}),o(t),h(()=>I(t,"hidden",!v())),g(e,t)};
z(E,e=>{
$.collection&&e(B)});
var P=R(E,2),H=e=>{
var t=bi();
lr(W(t),{
get redesigned(){
return C()},get selectedTab(){
return M()},onclose:()=>n.onpanelToggle?.("contents",!1)}),o(t),h(()=>I(t,"hidden",!w()||"audio"!==s()&&"video"!==s())),g(e,t)};
z(P,e=>{
$.contents&&e(H)});
var F=R(P,2),D=e=>{
var t=bi();
pr(W(t),{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("settings",!1)}),o(t),h(()=>I(t,"hidden",!x())),g(e,t)};
z(F,e=>{
$.settings&&e(D)});
var Z=R(F,2),J=e=>{
var t=bi();
yr(W(t),{
onclose:()=>n.onpanelToggle?.("compare",!1)}),o(t),h(()=>I(t,"hidden",!_())),g(e,t)};
z(Z,e=>{
$.compare&&e(J)});
var Q=R(Z,2),X=e=>{
var t=bi();
Vn(W(t),{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("annotations",!1)}),o(t),h(()=>I(t,"hidden",!u())),g(e,t)};
z(Q,e=>{
$.annotations&&e(X)});
var G=R(Q,2),Y=e=>{
var t=bi();
Wn(W(t),{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("tools",!1)}),o(t),h(()=>I(t,"hidden",!f())),g(e,t)};
z(G,e=>{
$.tools&&e(Y)});
var K=R(G,2),te=e=>{
var t=bi();
Xn(W(t),{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("search",!1)}),o(t),h(()=>I(t,"hidden",!b())),g(e,t)};
z(K,e=>{
$.search&&e(te)});
var ae=R(K,2),oe=e=>{
var t=bi(),r=W(t),i=e=>{
var t=fe(),r=re(t);
a(r,()=>d(q),(e,t)=>{
t(e,{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("metadata",!1)})}),g(e,t)};
z(r,e=>{
d(q)&&e(i)}),o(t),h(()=>I(t,"hidden",!m())),g(e,t)};
z(ae,e=>{
$.metadata&&e(oe)});
var ie=R(ae,2),ne=e=>{
var t=bi();
gr(W(t),{
get redesigned(){
return C()},onclose:()=>n.onpanelToggle?.("layers",!1)}),o(t),h(()=>I(t,"hidden",!y())),g(e,t)};
z(ie,e=>{
$.layers&&e(ne)});
var se=R(ie,2),de=e=>{
mt(e,{
slot:"left",get plugins(){
return S()},get context(){
return n.pluginContext}})};
z(se,e=>{
S().length>0&&e(de)}),o(L),h(e=>{
N=r(L,1,"panel-stack panel-stack--left svelte-3ojvr2",null,N,{
"panel-stack--redesigned":C()}),I(L,"hidden",!p()),I(L,"aria-label",e)},[()=>O(_e,"$t",l)("viewer.panels.leftLabel")]),g(t,L),i(),c()}var Ci="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20version='1.1'%20width='400'%20height='400'%20id='svg423'%20sodipodi:docname='iiif_bw.svg'%20inkscape:version='1.2.2%20(b0a8486541,%202022-12-01)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs427'%20/%3e%3csodipodi:namedview%20id='namedview425'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20showgrid='false'%20inkscape:zoom='0.59'%20inkscape:cx='2.5423729'%20inkscape:cy='202.54237'%20inkscape:window-width='1854'%20inkscape:window-height='1131'%20inkscape:window-x='66'%20inkscape:window-y='32'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg423'%20/%3e%3cpath%20d='M0%200%20C1.62742882%200.00459984%201.62742882%200.00459984%203.28773499%200.0092926%20C4.11695969%200.01323532%204.94618439%200.01717804%205.80053711%200.02124023%20C5.82368363%207.54895181%205.84146402%2015.0766597%205.85234928%2022.60439873%20C5.85757304%2026.09964121%205.86466151%2029.59485939%205.87597656%2033.09008789%20C5.88889685%2037.10620358%205.89376951%2041.12229364%205.89819336%2045.13842773%20C5.90335464%2046.39678436%205.90851593%2047.65514099%205.91383362%2048.95162964%20C5.91390915%2050.11268219%205.91398468%2051.27373474%205.9140625%2052.4699707%20C5.91628311%2053.49589325%205.91850372%2054.5218158%205.92079163%2055.5788269%20C5.80053711%2058.02124023%205.80053711%2058.02124023%204.80053711%2060.02124023%20C3.93170898%2059.89104492%203.06288086%2059.76084961%202.16772461%2059.62670898%20C-5.23269374%2058.42546726%20-5.23269374%2058.42546726%20-11.88696289%2061.02124023%20C-17.39903444%2068.17203575%20-16.61440882%2076.78963354%20-16.82446289%2085.45874023%20C-16.86313477%2086.76262695%20-16.90180664%2088.06651367%20-16.94165039%2089.40991211%20C-17.0355299%2092.61355023%20-17.12121443%2095.81718855%20-17.19946289%2099.02124023%20C-16.64484375%2098.80395264%20-16.09022461%2098.58666504%20-15.51879883%2098.36279297%20C-12.99996394%2097.38333386%20-10.47494725%2096.42091679%20-7.94946289%2095.45874023%20C-7.07676758%2095.11649414%20-6.20407227%2094.77424805%20-5.30493164%2094.42163086%20C-4.4605957%2094.10258789%20-3.61625977%2093.78354492%20-2.74633789%2093.45483398%20C-1.97128906%2093.15633545%20-1.19624023%2092.85783691%20-0.39770508%2092.55029297%20C1.80053711%2092.02124023%201.80053711%2092.02124023%205.80053711%2093.02124023%20C5.80053711%20109.85124023%205.80053711%20126.68124023%205.80053711%20144.02124023%20C-4.51653606%20148.60660609%20-4.51653606%20148.60660609%20-9.07446289%20150.27124023%20C-9.97938477%20150.60639648%20-10.88430664%20150.94155273%20-11.81665039%20151.28686523%20C-14.19946289%20152.02124023%20-14.19946289%20152.02124023%20-17.19946289%20152.02124023%20C-17.19946289%20191.29124023%20-17.19946289%20230.56124023%20-17.19946289%20271.02124023%20C-22.14946289%20272.67124023%20-27.09946289%20274.32124023%20-32.19946289%20276.02124023%20C-34.69312842%20276.90065025%20-37.18306234%20277.79096502%20-39.66430664%20278.70483398%20C-41.5014624%20279.38002075%20-41.5014624%20279.38002075%20-43.37573242%20280.06884766%20C-44.29929535%20280.41017227%20-44.29929535%20280.41017227%20-45.24151611%20280.75839233%20C-47.18865679%20281.47784059%20-49.13706116%20282.19378198%20-51.08569336%20282.90917969%20C-56.58717379%20284.93163234%20-62.08368591%20286.96486086%20-67.55493164%20289.06811523%20C-68.29686768%20289.35243408%20-69.03880371%20289.63675293%20-69.80322266%20289.9296875%20C-71.65920185%20290.64504317%20-73.51155189%20291.36979608%20-75.36352539%20292.09545898%20C-78.19946289%20293.02124023%20-78.19946289%20293.02124023%20-82.19946289%20293.02124023%20C-82.269688%20265.67349446%20-82.32251708%20238.3257623%20-82.35489941%20210.97794437%20C-82.37033781%20198.27855977%20-82.39136926%20185.57923135%20-82.42578125%20172.87988281%20C-82.45577648%20161.80516519%20-82.47505986%20150.73048827%20-82.48172837%20139.65573114%20C-82.48562352%20133.79716508%20-82.49471408%20127.93871543%20-82.51665306%20122.08018684%20C-82.53717843%20116.55380728%20-82.54326457%20111.0275909%20-82.53878593%20105.50117683%20C-82.53960401%20103.48454905%20-82.54547319%20101.4679152%20-82.55707932%2099.45132065%20C-82.70613987%2072.18966858%20-77.77626206%2045.34382223%20-58.19946289%2025.02124023%20C-42.97652367%2010.32474272%20-21.41190207%20-0.07840547%200%200%20Z%20'%20fill='%23EA2025'%20transform='translate(359.199462890625,53.978759765625)'%20id='path409'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C3.53178538%200.51667787%206.76505698%201.53732094%2010.11328125%202.75%20C11.10247559%203.10682861%2012.09166992%203.46365723%2013.11083984%203.83129883%20C14.1673877%204.21697021%2015.22393555%204.6026416%2016.3125%205%20C17.41029785%205.39791748%2018.5080957%205.79583496%2019.63916016%206.20581055%20C29.30373884%209.72014007%2038.93414888%2013.3241595%2048.5546875%2016.95703125%20C54.02266437%2019.00850321%2059.51146896%2021.00417053%2065%2023%20C65%2079.1%2065%20135.2%2065%20193%20C60.3192274%20192.3313182%2057.12104078%20191.87345639%2052.90234375%20190.3203125%20C51.9498877%20189.97355469%2050.99743164%20189.62679687%2050.01611328%20189.26953125%20C49.0001709%20188.89183594%2047.98422852%20188.51414062%2046.9375%20188.125%20C45.86999512%20187.73441406%2044.80249023%20187.34382812%2043.70263672%20186.94140625%20C41.38348752%20186.09190593%2039.06549817%20185.2392341%2036.74853516%20184.38378906%20C32.76567863%20182.91349918%2028.77976197%20181.45175826%2024.79296875%20179.9921875%20C20.74909579%20178.51150759%2016.7054515%20177.03024182%2012.66381836%20175.54345703%20C11.44702393%20175.09599121%2010.23022949%20174.64852539%208.9765625%20174.1875%20C7.35355225%20173.59001953%207.35355225%20173.59001953%205.69775391%20172.98046875%20C3.80798041%20172.29365152%201.90752866%20171.63584289%200%20171%20C-1.44466375%20168.11067249%20-1.1259983%20165.61787061%20-1.12698364%20162.38829041%20C-1.12854363%20161.70125032%20-1.13010362%20161.01421024%20-1.13171089%20160.30635077%20C-1.13571477%20157.99319345%20-1.13253362%20155.68010122%20-1.12939453%20153.36694336%20C-1.13074883%20151.71311911%20-1.13252892%20150.05929517%20-1.13470459%20148.4054718%20C-1.13927516%20143.90565911%20-1.13749099%20139.40586927%20-1.1343255%20134.90605617%20C-1.13180039%20130.2059706%20-1.13413983%20125.50588703%20-1.13571167%20120.80580139%20C-1.13753274%20112.912767%20-1.1351285%20105.01974196%20-1.13037109%2097.12670898%20C-1.12492671%2087.98809655%20-1.12669266%2078.84950642%20-1.1321975%2069.71089453%20C-1.13672816%2061.87735583%20-1.13737947%2054.04382387%20-1.13475883%2046.21028429%20C-1.13319604%2041.526024%20-1.13300239%2036.8417742%20-1.13629532%2032.15751457%20C-1.13917341%2027.75565351%20-1.1371995%2023.35382135%20-1.13140106%2018.95196342%20C-1.13007321%2017.33176217%20-1.130468%2015.7115585%20-1.13266373%2014.09135818%20C-1.13537421%2011.88911404%20-1.13199542%209.68696401%20-1.12698364%207.48472595%20C-1.12660662%206.24935561%20-1.12622959%205.01398527%20-1.12584114%203.74117947%20C-1%201%20-1%201%200%200%20Z%20'%20fill='%230E7BA6'%20transform='translate(201,153)'%20id='path411'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C0%2056.1%200%20112.2%200%20170%20C-10.76768694%20174.61472298%20-21.46543109%20178.89600112%20-32.609375%20182.5%20C-39.44904612%20184.77770866%20-46.16022158%20187.43944551%20-52.87670898%20190.05395508%20C-53.87001221%20190.43447021%20-54.86331543%20190.81498535%20-55.88671875%20191.20703125%20C-56.77576904%20191.5522583%20-57.66481934%20191.89748535%20-58.58081055%20192.25317383%20C-61%20193%20-61%20193%20-65%20193%20C-65%20136.9%20-65%2080.8%20-65%2023%20C-53.76945127%2018.50778051%20-53.76945127%2018.50778051%20-48.19921875%2016.484375%20C-46.98411621%2016.04134033%20-45.76901367%2015.59830566%20-44.51708984%2015.1418457%20C-43.24058132%2014.6778382%20-41.96405096%2014.21389076%20-40.6875%2013.75%20C-33.27542056%2011.05271294%20-25.86633998%208.35513345%20-18.51171875%205.50390625%20C-17.54983643%205.13104492%20-16.5879541%204.75818359%20-15.59692383%204.37402344%20C-13.82751686%203.68397218%20-12.0602842%202.9883102%20-10.2956543%202.28613281%20C-9.51488525%201.9815918%20-8.73411621%201.67705078%20-7.9296875%201.36328125%20C-7.26179199%201.09813721%20-6.59389648%200.83299316%20-5.90576172%200.55981445%20C-4%200%20-4%200%200%200%20Z%20'%20fill='%23EA2025'%20transform='translate(187,153)'%20id='path413'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C6.7479953%201.12466588%206.7479953%201.12466588%209.79296875%202.27734375%20C10.84170166%202.66913818%2010.84170166%202.66913818%2011.91162109%203.06884766%20C12.66266113%203.35550293%2013.41370117%203.6421582%2014.1875%203.9375%20C15.87102262%204.5692%2017.55462104%205.20069803%2019.23828125%205.83203125%20C20.15303223%206.1770166%2021.0677832%206.52200195%2022.01025391%206.87744141%20C25.26702287%208.10025895%2028.52928647%209.30747725%2031.79296875%2010.51171875%20C32.96512939%2010.94427979%2034.13729004%2011.37684082%2035.3449707%2011.82250977%20C37.09233521%2012.46724243%2037.09233521%2012.46724243%2038.875%2013.125%20C47.61104266%2016.34864374%2056.30786218%2019.65687007%2065%2023%20C65%2079.1%2065%20135.2%2065%20193%20C59.85420319%20192.26488617%2056.22635759%20191.5511244%2051.5%20189.8125%20C50.27539062%20189.36261719%2049.05078125%20188.91273438%2047.7890625%20188.44921875%20C43.51154582%20186.83007674%2039.27838708%20185.10351731%2035.04248047%20183.37890625%20C23.55230765%20178.75333732%2011.74547844%20174.91515948%200%20171%20C0%20114.57%200%2058.14%200%200%20Z%20'%20fill='%230E7BA6'%20transform='translate(42,153)'%20id='path415'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C5.70589312%205.09778206%208.61402023%2010.82570022%209.31640625%2018.421875%20C9.84775528%2035.21936033%203.20127604%2048.78411562%20-8%2061%20C-18.59819469%2071.00501215%20-30.4648109%2075.53130833%20-44.8125%2075.2734375%20C-51.60523856%2074.970939%20-55.65457109%2072.65044548%20-60.3125%2067.8125%20C-66.32477049%2060.06371541%20-66.79382943%2051.52595321%20-66%2042%20C-64.44839446%2030.98499853%20-59.34967068%2021.31554116%20-52%2013%20C-51.34%2013%20-50.68%2013%20-50%2013%20C-49.75121094%2012.41089844%20-49.50242188%2011.82179688%20-49.24609375%2011.21484375%20C-44.71032809%203.15284021%20-33.86471766%20-1.2084981%20-25.4296875%20-3.78515625%20C-16.52979174%20-5.89155791%20-7.62510382%20-5.411364%200%200%20Z%20'%20fill='%23EA2025'%20transform='translate(183,78)'%20id='path417'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C14.55521945%208.63134692%2024.53016372%2021.39497906%2029.29296875%2037.59375%20C31.65934514%2047.05925557%2031.07787737%2056.9969086%2026.29296875%2065.59375%20C22.29497998%2070.24276825%2017.64569888%2074.10028954%2011.36987305%2074.81176758%20C-3.89004137%2075.64828315%20-13.87699795%2072.62506478%20-25.70703125%2062.59375%20C-36.57909366%2052.1319541%20-44.55480329%2039.52195245%20-45.18017578%2024.14624023%20C-45.28042052%2015.78491792%20-44.66056759%208.94263998%20-38.87109375%202.57421875%20C-28.15960583%20-7.50114632%20-12.49297387%20-6.48985656%200%200%20Z%20'%20fill='%230E7BA6'%20transform='translate(240.70703125,78.40625)'%20id='path419'%20style='fill:%23000000'%20/%3e%3cpath%20d='M0%200%20C11.36591132%208.6641783%2021.22293607%2022.27821292%2023.40625%2036.6796875%20C24.31352617%2044.78331329%2024.11942039%2051.91815333%2020.3125%2059.25%20C15.12505752%2065.41885051%2010.33268055%2069.46553385%202.13671875%2070.4765625%20C-11.76402794%2071.16650368%20-22.15492451%2067.06168323%20-32.9375%2058.3125%20C-38.19183768%2053.17872074%20-42.20321889%2047.24229002%20-46%2041%20C-46.55300781%2040.11054687%20-47.10601562%2039.22109375%20-47.67578125%2038.3046875%20C-51.1809407%2031.53133712%20-51.53518447%2024.80263112%20-51.6875%2017.3125%20C-51.7191626%2016.33812988%20-51.7508252%2015.36375977%20-51.78344727%2014.35986328%20C-51.71864925%205.79633165%20-48.53228419%200.53228419%20-42.5625%20-5.4375%20C-28.93535715%20-13.74673345%20-12.09003339%20-8.5171002%200%200%20Z%20'%20fill='%230E7BA6'%20transform='translate(89,83)'%20id='path421'%20style='fill:%23000000'%20/%3e%3c/svg%3e",wi=n('<button type="button"><!> <span class="svelte-wwdlzg"> </span></button>'),Ti=n('<button data-tone="collection" type="button"><!> <span class="svelte-wwdlzg"> </span></button>'),Ei=n('<button data-tone="info" type="button"><!> <span class="svelte-wwdlzg"> </span></button>'),Di=n('<div class="viewer-sidebar__section svelte-wwdlzg"><div class="viewer-sidebar__heading svelte-wwdlzg"> </div> <div class="viewer-sidebar__items svelte-wwdlzg"><button type="button"><!> <span class="svelte-wwdlzg"> </span></button></div></div>'),Oi=n('<nav><div class="viewer-sidebar__scroll svelte-wwdlzg"><div class="viewer-sidebar__section svelte-wwdlzg"><div class="viewer-sidebar__heading svelte-wwdlzg"> </div> <div class="viewer-sidebar__items svelte-wwdlzg"><!> <!> <!> <!> <!> <!> <!></div></div> <!> <div class="viewer-sidebar__section svelte-wwdlzg"><div class="viewer-sidebar__heading svelte-wwdlzg"> </div> <div class="viewer-sidebar__items svelte-wwdlzg"><button type="button"><img alt="" class="svelte-wwdlzg"/> <span class="svelte-wwdlzg"> </span></button> <!> <!> <button type="button"><!> <span class="svelte-wwdlzg"> </span></button> <button class="viewer-sidebar__button svelte-wwdlzg" type="button" disabled=""><!> <span class="svelte-wwdlzg"> </span></button> <button class="viewer-sidebar__button svelte-wwdlzg" type="button" disabled=""><!> <span class="svelte-wwdlzg"> </span></button> <button class="viewer-sidebar__button svelte-wwdlzg" type="button" disabled=""><!> <span class="svelte-wwdlzg"> </span></button></div></div></div> <button class="viewer-sidebar__collapse svelte-wwdlzg" type="button"><!> <span class="svelte-wwdlzg"> </span></button></nav>'),ki=n('<button type="button"><!></button>'),Ai=n('<button data-tone="collection" type="button"><!></button>'),ji=n('<button data-tone="info" type="button"><!></button>'),Mi=n('<div class="viewer-mobile-nav__group svelte-wwdlzg"><button type="button"><!></button></div>'),Ni=n('<nav class="viewer-mobile-nav svelte-wwdlzg"><div class="viewer-mobile-nav__group svelte-wwdlzg"><!> <!> <!> <!> <!> <!> <!></div> <!> <div class="viewer-mobile-nav__group svelte-wwdlzg"><button type="button"><img alt="" class="svelte-wwdlzg"/></button> <!> <!> <button type="button"><!></button> <button class="viewer-mobile-nav__button svelte-wwdlzg" type="button" disabled=""><!></button> <button class="viewer-mobile-nav__button svelte-wwdlzg" type="button" disabled=""><!></button> <button class="viewer-mobile-nav__button svelte-wwdlzg" type="button" disabled=""><!></button></div></nav>'),Pi=n('<button data-tone="gallery" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><rect x="3.5" y="4.5" width="17" height="15" rx="2"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="M20.5 16l-5.2-5.2a1.2 1.2 0 0 0-1.7 0L7 17"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Fi=n('<button data-tone="collection" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Ii=n('<button data-tone="contents" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><path d="M8 7h11"></path><path d="M8 12h11"></path><path d="M8 17h11"></path><circle cx="5" cy="7" r="0.8" fill="currentColor" stroke="none"></circle><circle cx="5" cy="12" r="0.8" fill="currentColor" stroke="none"></circle><circle cx="5" cy="17" r="0.8" fill="currentColor" stroke="none"></circle></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Li=n('<button data-tone="info" type="button"><span class="viewer__dock-icon viewer__dock-icon--info svelte-wwdlzg" aria-hidden="true"><span class="viewer__dock-info-chip svelte-wwdlzg">i</span></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Ri=n('<button data-tone="search" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><circle cx="11" cy="11" r="6"></circle><path d="M20 20l-4.2-4.2"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),zi=n('<button data-tone="annotations" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><rect x="4.5" y="4.5" width="15" height="15" rx="2"></rect><path d="M8 8h8v8H8z"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Bi=n('<button data-tone="tools" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.8l-5.2 5.2a1.8 1.8 0 1 0 2.5 2.5l5.2-5.2a3.5 3.5 0 0 0 4.8-4.8l-2.2 2.2-2.5-2.5 2.2-2.2z"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Vi=n('<button data-tone="layers" type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Hi=n('<button type="button"><span class="viewer__dock-icon svelte-wwdlzg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" class="svelte-wwdlzg"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z"></path><path d="M19.2 13.1v-2.2l-1.9-.5a5.8 5.8 0 0 0-.5-1.2l1.1-1.7-1.6-1.6-1.7 1.1a5.8 5.8 0 0 0-1.2-.5L13.1 4h-2.2l-.5 1.9a5.8 5.8 0 0 0-1.2.5L7.5 5.3 5.9 6.9 7 8.6a5.8 5.8 0 0 0-.5 1.2l-1.9.5v2.2l1.9.5c.1.4.3.8.5 1.2l-1.1 1.7 1.6 1.6 1.7-1.1c.4.2.8.4 1.2.5l.5 1.9h2.2l.5-1.9c.4-.1.8-.3 1.2-.5l1.7 1.1 1.6-1.6-1.1-1.7c.2-.4.4-.8.5-1.2l1.9-.5z"></path></svg></span> <span class="viewer__dock-label svelte-wwdlzg"> </span></button>'),Ui=n("<div><!> <!> <!> <!> <!> <!> <!> <!> <!></div>");
function Wi(e,t){
le(t,!0);
let a=()=>O(_e,"$t",n),[n,s]=ee(),l=U(t,"allowThumbnails",3,!0),d=U(t,"allowCollection",3,!1),c=U(t,"allowSearch",3,!0),p=U(t,"allowMetadata",3,!0),v=U(t,"allowAnnotations",3,!0),f=U(t,"allowTools",3,!0),w=U(t,"allowLayers",3,!1),b=U(t,"allowSettings",3,!1),m=U(t,"allowContents",3,!1),x=U(t,"allowChapters",3,!1),y=U(t,"allowTranscript",3,!1),_=U(t,"showThumbnails",3,!0),k=U(t,"showCollection",3,!1),j=U(t,"showContents",3,!1),M=U(t,"showSearch",3,!0),S=U(t,"showMetadata",3,!0),A=U(t,"showAnnotations",3,!0),q=U(t,"showTools",3,!1),T=U(t,"showLayers",3,!1),$=U(t,"showSettings",3,!1),L=U(t,"showCompare",3,!1),N=U(t,"showManifestManager",3,!1),E=U(t,"multiView",3,!1),B=U(t,"compact",3,!1),P=U(t,"variant",3,"legacy"),V=U(t,"mobile",3,!1),H=U(t,"iconOnly",3,!1),F=U(t,"galleryActive",3,!1),D=U(t,"contentsTab",3,"toc"),Z=U(t,"oncollapse",3,void 0),J=U(t,"ongalleryopen",3,void 0),Q=U(t,"oncontentsopen",3,void 0),X=U(t,"oncomparetoggle",3,void 0),G=U(t,"onmanifesttoggle",3,void 0),Y=U(t,"onpanelToggle",3,void 0);
var K=fe(),te=re(K),ae=e=>{
var t=Oi();
let i;
var n=W(t),s=W(n),m=W(s),_=W(m,!0);
o(m);
var O=R(m,2),U=W(O),B=e=>{
var t=wi();
let i;
var n=W(t);
Lt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":F()}),I(t,"title",e),I(t,"aria-pressed",F()),u(l,a)},[()=>H()?a()("workspace.sidebar.gallery"):void 0,()=>a()("workspace.sidebar.gallery")]),C("click",t,()=>J()?.()),g(e,t)};
z(U,e=>{
l()&&e(B)});
var P=R(U,2),V=e=>{
var t=Ti();
let i;
var n=W(t);
qt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":k()}),I(t,"title",e),I(t,"aria-pressed",k()),u(l,a)},[()=>H()?a()("viewer.panels.collection.title"):void 0,()=>a()("viewer.panels.collection.title")]),C("click",t,()=>Y()?.({
panel:"collection",open:!k()})),g(e,t)};
z(P,e=>{
d()&&e(V)});
var K=R(P,2),ee=e=>{
var t=Ei();
let i;
var n=W(t);
Vt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":S()}),I(t,"title",e),I(t,"aria-pressed",S()),t.disabled=E(),u(l,a)},[()=>H()?a()("workspace.sidebar.metadata"):void 0,()=>a()("workspace.sidebar.metadata")]),C("click",t,()=>Y()?.({
panel:"metadata",open:!S()})),g(e,t)};
z(K,e=>{
p()&&e(ee)});
var te=R(K,2),re=e=>{
var t=wi();
let i;
var n=W(t);
un(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":M()}),I(t,"title",e),I(t,"aria-pressed",M()),t.disabled=E(),u(l,a)},[()=>H()?a()("workspace.sidebar.search"):void 0,()=>a()("workspace.sidebar.search")]),C("click",t,()=>Y()?.({
panel:"search",open:!M()})),g(e,t)};
z(te,e=>{
c()&&e(re)});
var ae=R(te,2),oe=e=>{
var t=wi();
let i;
var n=W(t);
Zt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":A()}),I(t,"title",e),I(t,"aria-pressed",A()),t.disabled=E(),u(l,a)},[()=>H()?a()("workspace.sidebar.annotations"):void 0,()=>a()("workspace.sidebar.annotations")]),C("click",t,()=>Y()?.({
panel:"annotations",open:!A()})),g(e,t)};
z(ae,e=>{
v()&&e(oe)});
var ie=R(ae,2),ne=e=>{
var t=wi();
let i;
var n=W(t);
qt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":j()&&"toc"===D()}),I(t,"title",e),I(t,"aria-pressed",j()&&"toc"===D()),u(l,a)},[()=>H()?a()("workspace.sidebar.collections"):void 0,()=>a()("workspace.sidebar.collections")]),C("click",t,()=>Q()?.("toc")),g(e,t)};
z(ie,e=>{
x()&&e(ne)});
var se=R(ie,2),le=e=>{
var t=wi();
let i;
var n=W(t);
Yt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":j()&&"transcript"===D()}),I(t,"title",e),I(t,"aria-pressed",j()&&"transcript"===D()),u(l,a)},[()=>H()?a()("workspace.sidebar.transcription"):void 0,()=>a()("workspace.sidebar.transcription")]),C("click",t,()=>Q()?.("transcript")),g(e,t)};
z(se,e=>{
y()&&e(le)}),o(O),o(s);
var de=R(s,2),ce=e=>{
var t=Di(),i=W(t),n=W(i,!0);
o(i);
var s=R(i,2),l=W(s);
let d;
var c=W(l);
on(c,{
"aria-hidden":"true"});
var p=R(c,2),v=W(p,!0);
o(p),o(l),o(s),o(t),h((e,t,a)=>{
u(n,e),d=r(l,1,"viewer-sidebar__button svelte-wwdlzg",null,d,{
"viewer-sidebar__button--active":T()}),I(l,"title",t),I(l,"aria-pressed",T()),u(v,a)},[()=>a()("workspace.sidebar.explore"),()=>H()?a()("workspace.sidebar.imageLayers"):void 0,()=>a()("workspace.sidebar.imageLayers")]),C("click",l,()=>Y()?.({
panel:"layers",open:!T()})),g(e,t)};
z(de,e=>{
w()&&e(ce)});
var pe=R(de,2),ve=W(pe),ge=W(ve,!0);
o(ve);
var ue=R(ve,2),he=W(ue);
let fe;
var we=W(he),me=R(we,2),xe=W(me,!0);
o(me),o(he);
var ye=R(he,2),_e=e=>{
var t=wi();
let i;
var n=W(t);
jt(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":q()}),I(t,"title",e),I(t,"aria-pressed",q()),t.disabled=E(),u(l,a)},[()=>H()?a()("workspace.sidebar.tools"):void 0,()=>a()("workspace.sidebar.tools")]),C("click",t,()=>Y()?.({
panel:"tools",open:!q()})),g(e,t)};
z(ye,e=>{
f()&&e(_e)});
var ke=R(ye,2),ze=e=>{
var t=wi();
let i;
var n=W(t);
fn(n,{
"aria-hidden":"true"});
var s=R(n,2),l=W(s,!0);
o(s),o(t),h((e,a)=>{
i=r(t,1,"viewer-sidebar__button svelte-wwdlzg",null,i,{
"viewer-sidebar__button--active":$()}),I(t,"title",e),I(t,"aria-pressed",$()),u(l,a)},[()=>H()?a()("workspace.sidebar.viewSettings"):void 0,()=>a()("workspace.sidebar.viewSettings")]),C("click",t,()=>Y()?.({
panel:"settings",open:!$()})),g(e,t)};
z(ke,e=>{
b()&&e(ze)});
var Ie=R(ke,2);
let Ce;
var je=W(Ie);
bn(je,{
"aria-hidden":"true"});
var Me=R(je,2),Se=W(Me,!0);
o(Me),o(Ie);
var Ae=R(Ie,2),qe=W(Ae);
be(qe,{
"aria-hidden":"true"});
var Te=R(qe,2),$e=W(Te,!0);
o(Te),o(Ae);
var We=R(Ae,2),Le=W(We);
mn(Le,{
"aria-hidden":"true"});
var Re=R(Le,2),Ne=W(Re,!0);
o(Re),o(We);
var Oe=R(We,2),Ee=W(Oe);
tn(Ee,{
"aria-hidden":"true"});
var Ue=R(Ee,2),Be=W(Ue,!0);
o(Ue),o(Oe),o(ue),o(pe),o(n);
var Pe=R(n,2),Ve=W(Pe);
yt(Ve,{
"aria-hidden":"true"});
var He=R(Ve,2),Fe=W(He,!0);
o(He),o(Pe),o(t),h((e,a,o,n,s,l,d,c,p,v,g,h,f,w,b,m)=>{
i=r(t,1,"viewer-sidebar svelte-wwdlzg",null,i,{
"viewer-sidebar--icon-only":H()}),I(t,"aria-label",e),u(_,a),u(ge,o),fe=r(he,1,"viewer-sidebar__button viewer-sidebar__button--iiif svelte-wwdlzg",null,fe,{
"viewer-sidebar__button--active":N()}),I(he,"title",n),I(he,"aria-label",s),I(he,"aria-pressed",N()),I(we,"src",Ci),u(xe,l),Ce=r(Ie,1,"viewer-sidebar__button svelte-wwdlzg",null,Ce,{
"viewer-sidebar__button--active":L()}),I(Ie,"title",d),I(Ie,"aria-pressed",L()),u(Se,c),I(Ae,"title",p),u($e,v),I(We,"title",g),u(Ne,h),I(Oe,"title",f),u(Be,w),I(Pe,"title",b),u(Fe,m)},[()=>a()("workspace.sidebar.navigation"),()=>a()("workspace.sidebar.browse"),()=>a()("workspace.sidebar.tools"),()=>H()?a()("workspace.sidebar.iiifManifests"):void 0,()=>a()("workspace.sidebar.iiifManifests"),()=>a()("workspace.sidebar.iiifManifests"),()=>H()?a()("workspace.sidebar.compare"):void 0,()=>a()("workspace.sidebar.compare"),()=>H()?a()("workspace.sidebar.download"):void 0,()=>a()("workspace.sidebar.download"),()=>H()?a()("workspace.sidebar.share"):void 0,()=>a()("workspace.sidebar.share"),()=>H()?a()("workspace.sidebar.cite"):void 0,()=>a()("workspace.sidebar.cite"),()=>H()?a()("workspace.sidebar.collapse"):void 0,()=>a()("workspace.sidebar.collapse")]),C("click",he,()=>G()?.()),C("click",Ie,()=>X()?.()),C("click",Pe,()=>Z()?.()),g(e,t)},oe=e=>{
var t=Ni(),i=W(t),n=W(i),s=e=>{
var t=ki();
let i;
Lt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":F()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",F())},[()=>a()("workspace.sidebar.gallery"),()=>a()("workspace.sidebar.gallery")]),C("click",t,()=>J()?.()),g(e,t)};
z(n,e=>{
l()&&e(s)});
var u=R(n,2),m=e=>{
var t=Ai();
let i;
qt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":k()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",k())},[()=>a()("viewer.panels.collection.title"),()=>a()("viewer.panels.collection.title")]),C("click",t,()=>Y()?.({
panel:"collection",open:!k()})),g(e,t)};
z(u,e=>{
d()&&e(m)});
var _=R(u,2),O=e=>{
var t=ji();
let i;
Vt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":S()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",S()),t.disabled=E()},[()=>a()("workspace.sidebar.metadata"),()=>a()("workspace.sidebar.metadata")]),C("click",t,()=>Y()?.({
panel:"metadata",open:!S()})),g(e,t)};
z(_,e=>{
p()&&e(O)});
var U=R(_,2),B=e=>{
var t=ki();
let i;
un(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":M()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",M()),t.disabled=E()},[()=>a()("workspace.sidebar.search"),()=>a()("workspace.sidebar.search")]),C("click",t,()=>Y()?.({
panel:"search",open:!M()})),g(e,t)};
z(U,e=>{
c()&&e(B)});
var P=R(U,2),V=e=>{
var t=ki();
let i;
Zt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":A()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",A()),t.disabled=E()},[()=>a()("workspace.sidebar.annotations"),()=>a()("workspace.sidebar.annotations")]),C("click",t,()=>Y()?.({
panel:"annotations",open:!A()})),g(e,t)};
z(P,e=>{
v()&&e(V)});
var H=R(P,2),Z=e=>{
var t=ki();
let i;
qt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":j()&&"toc"===D()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",j()&&"toc"===D())},[()=>a()("workspace.sidebar.collections"),()=>a()("workspace.sidebar.collections")]),C("click",t,()=>Q()?.("toc")),g(e,t)};
z(H,e=>{
x()&&e(Z)});
var K=R(H,2),ee=e=>{
var t=ki();
let i;
Yt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":j()&&"transcript"===D()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",j()&&"transcript"===D())},[()=>a()("workspace.sidebar.transcription"),()=>a()("workspace.sidebar.transcription")]),C("click",t,()=>Q()?.("transcript")),g(e,t)};
z(K,e=>{
y()&&e(ee)}),o(i);
var te=R(i,2),re=e=>{
var t=Mi(),i=W(t);
let n;
on(W(i),{
"aria-hidden":"true"}),o(i),o(t),h((e,a,o)=>{
I(t,"aria-label",e),n=r(i,1,"viewer-mobile-nav__button svelte-wwdlzg",null,n,{
"viewer-mobile-nav__button--active":T()}),I(i,"aria-label",a),I(i,"title",o),I(i,"aria-pressed",T())},[()=>a()("workspace.sidebar.explore"),()=>a()("workspace.sidebar.imageLayers"),()=>a()("workspace.sidebar.imageLayers")]),C("click",i,()=>Y()?.({
panel:"layers",open:!T()})),g(e,t)};
z(te,e=>{
w()&&e(re)});
var ae=R(te,2),oe=W(ae);
let ie;
var ne=W(oe);
o(oe);
var se=R(oe,2),le=e=>{
var t=ki();
let i;
jt(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":q()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",q()),t.disabled=E()},[()=>a()("workspace.sidebar.tools"),()=>a()("workspace.sidebar.tools")]),C("click",t,()=>Y()?.({
panel:"tools",open:!q()})),g(e,t)};
z(se,e=>{
f()&&e(le)});
var de=R(se,2),ce=e=>{
var t=ki();
let i;
fn(W(t),{
"aria-hidden":"true"}),o(t),h((e,a)=>{
i=r(t,1,"viewer-mobile-nav__button svelte-wwdlzg",null,i,{
"viewer-mobile-nav__button--active":$()}),I(t,"aria-label",e),I(t,"title",a),I(t,"aria-pressed",$())},[()=>a()("workspace.sidebar.viewSettings"),()=>a()("workspace.sidebar.viewSettings")]),C("click",t,()=>Y()?.({
panel:"settings",open:!$()})),g(e,t)};
z(de,e=>{
b()&&e(ce)});
var pe=R(de,2);
let ve;
bn(W(pe),{
"aria-hidden":"true"}),o(pe);
var ge=R(pe,2),ue=W(ge);
be(ue,{
"aria-hidden":"true"}),o(ge);
var he=R(ge,2);
mn(W(he),{
"aria-hidden":"true"}),o(he);
var fe=R(he,2);
tn(W(fe),{
"aria-hidden":"true"}),o(fe),o(ae),o(t),h((e,a,o,n,s,l,d,c,p,v,g,u,h)=>{
I(t,"aria-label",e),I(i,"aria-label",a),I(ae,"aria-label",o),ie=r(oe,1,"viewer-mobile-nav__button viewer-mobile-nav__button--iiif svelte-wwdlzg",null,ie,{
"viewer-mobile-nav__button--active":N()}),I(oe,"aria-label",n),I(oe,"title",s),I(oe,"aria-pressed",N()),I(ne,"src",Ci),ve=r(pe,1,"viewer-mobile-nav__button svelte-wwdlzg",null,ve,{
"viewer-mobile-nav__button--active":L()}),I(pe,"aria-label",l),I(pe,"title",d),I(pe,"aria-pressed",L()),I(ge,"aria-label",c),I(ge,"title",p),I(he,"aria-label",v),I(he,"title",g),I(fe,"aria-label",u),I(fe,"title",h)},[()=>a()("workspace.sidebar.navigation"),()=>a()("workspace.sidebar.browse"),()=>a()("workspace.sidebar.tools"),()=>a()("workspace.sidebar.iiifManifests"),()=>a()("workspace.sidebar.iiifManifests"),()=>a()("workspace.sidebar.compare"),()=>a()("workspace.sidebar.compare"),()=>a()("workspace.sidebar.download"),()=>a()("workspace.sidebar.download"),()=>a()("workspace.sidebar.share"),()=>a()("workspace.sidebar.share"),()=>a()("workspace.sidebar.cite"),()=>a()("workspace.sidebar.cite")]),C("click",oe,()=>G()?.()),C("click",pe,()=>X()?.()),g(e,t)},ie=e=>{
var t=Ui();
let i;
var n=W(t),s=e=>{
var t=Pi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":_()}),I(t,"data-label",e),I(t,"aria-pressed",_()),I(t,"aria-label",a),u(s,o)},[()=>_()?a()("viewer.stage.controls.hideGallery"):a()("viewer.stage.controls.showGallery"),()=>a()("viewer.stage.controls.toggleGallery"),()=>a()("viewer.dock.gallery")]),C("click",t,()=>Y()?.({
panel:"thumbnails",open:!_()})),g(e,t)};
z(n,e=>{
l()&&e(s)});
var x=R(n,2),y=e=>{
var t=Fi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":k()}),I(t,"data-label",e),I(t,"aria-pressed",k()),I(t,"aria-label",a),u(s,o)},[()=>k()?a()("viewer.stage.controls.hideCollection"):a()("viewer.stage.controls.showCollection"),()=>a()("viewer.stage.controls.toggleCollection"),()=>a()("viewer.dock.collection")]),C("click",t,()=>Y()?.({
panel:"collection",open:!k()})),g(e,t)};
z(x,e=>{
d()&&e(y)});
var L=R(x,2),N=e=>{
var t=Ii();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":j()}),I(t,"data-label",e),I(t,"aria-pressed",j()),I(t,"aria-label",a),u(s,o)},[()=>j()?a()("viewer.stage.controls.hideContents"):a()("viewer.stage.controls.showContents"),()=>a()("viewer.stage.controls.toggleContents"),()=>a()("viewer.dock.contents")]),C("click",t,()=>Y()?.({
panel:"contents",open:!j()})),g(e,t)};
z(L,e=>{
m()&&e(N)});
var O=R(L,2),U=e=>{
var t=Li();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":S()}),I(t,"data-label",e),I(t,"aria-pressed",S()),I(t,"aria-label",a),u(s,o)},[()=>S()?a()("viewer.stage.controls.hideInfo"):a()("viewer.stage.controls.showInfo"),()=>a()("viewer.stage.controls.toggleMetadata"),()=>a()("viewer.dock.info")]),C("click",t,()=>Y()?.({
panel:"metadata",open:!S()})),g(e,t)};
z(O,e=>{
p()&&e(U)});
var P=R(O,2),V=e=>{
var t=Ri();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":M()}),I(t,"data-label",e),I(t,"aria-pressed",M()),I(t,"aria-label",a),u(s,o)},[()=>M()?a()("viewer.stage.controls.hideSearch"):a()("viewer.stage.controls.showSearch"),()=>a()("viewer.stage.controls.toggleSearch"),()=>a()("viewer.dock.search")]),C("click",t,()=>Y()?.({
panel:"search",open:!M()})),g(e,t)};
z(P,e=>{
c()&&e(V)});
var H=R(P,2),F=e=>{
var t=zi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":A()}),I(t,"data-label",e),I(t,"aria-pressed",A()),I(t,"aria-label",a),u(s,o)},[()=>A()?a()("viewer.stage.controls.hideAnnotations"):a()("viewer.stage.controls.showAnnotations"),()=>a()("viewer.stage.controls.toggleAnnotations"),()=>a()("viewer.dock.annotations")]),C("click",t,()=>Y()?.({
panel:"annotations",open:!A()})),g(e,t)};
z(H,e=>{
v()&&e(F)});
var D=R(H,2),Z=e=>{
var t=Bi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":q()}),I(t,"data-label",e),I(t,"aria-pressed",q()),I(t,"aria-label",a),t.disabled=E(),u(s,o)},[()=>q()?a()("viewer.stage.controls.hideTools"):a()("viewer.stage.controls.showTools"),()=>a()("viewer.stage.controls.toggleTools"),()=>a()("viewer.dock.tools")]),C("click",t,()=>Y()?.({
panel:"tools",open:!q()})),g(e,t)};
z(D,e=>{
f()&&e(Z)});
var J=R(D,2),Q=e=>{
var t=Vi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":T()}),I(t,"data-label",e),I(t,"aria-pressed",T()),I(t,"aria-label",a),u(s,o)},[()=>T()?a()("viewer.stage.controls.hideLayers"):a()("viewer.stage.controls.showLayers"),()=>a()("viewer.stage.controls.toggleLayers"),()=>a()("viewer.dock.layers")]),C("click",t,()=>Y()?.({
panel:"layers",open:!T()})),g(e,t)};
z(J,e=>{
w()&&e(Q)});
var X=R(J,2),G=e=>{
var t=Hi();
let i;
var n=R(W(t),2),s=W(n,!0);
o(n),o(t),h((e,a,o)=>{
i=r(t,1,"viewer__dock-button svelte-wwdlzg",null,i,{
"viewer__dock-button--active":$()}),I(t,"data-label",e),I(t,"aria-pressed",$()),I(t,"aria-label",a),u(s,o)},[()=>$()?a()("workspace.hideSettings"):a()("workspace.showSettings"),()=>a()("workspace.toggleSettings"),()=>a()("workspace.settings")]),C("click",t,()=>Y()?.({
panel:"settings",open:!$()})),g(e,t)};
z(X,e=>{
b()&&e(G)}),o(t),h(e=>{
i=r(t,1,"viewer__dock svelte-wwdlzg",null,i,{
"viewer__dock--compact":B()}),I(t,"aria-label",e)},[()=>a()("viewer.stage.controls.label")]),g(e,t)};
z(te,e=>{
"sidebar"!==P()||V()?"sidebar"===P()&&V()?e(oe,1):e(ie,-1):e(ae)}),g(e,K),i(),s()}x(["click"]);
var Gi={
brightness:100,contrast:100,saturation:100,invert:!1,grayscale:!1};
function Ki(t,r){
le(r,!0);
let o=U(r,"rendererComponent",3,null),n=U(r,"avController",3,void 0),s=U(r,"source",3,null),l=U(r,"annotations",19,()=>[]),c=U(r,"highlightIds",19,()=>[]),p=U(r,"activeAnnotationId",3,null),v=U(r,"hoverAnnotationId",3,null),u=U(r,"imageFilters",19,()=>({
...Gi})),h=U(r,"mediaType",3,null),f=U(r,"viewerConfig",19,()=>({
})),w=U(r,"rendererHandlers",3,null),b=U(r,"rotation",3,0),m=U(r,"initialViewBox",3,null),x=U(r,"onviewboxchange",3,void 0),y=U(r,"onzoomchange",3,void 0),_=U(r,"onrotationchange",3,void 0),k=U(r,"onviewerready",3,void 0),I=U(r,"onrenderererror",3,void 0),C=U(r,"layers",19,()=>[]),j=U(r,"layerOpacities",19,()=>({
})),M=U(r,"layoutMode",3,"single"),S=U(r,"activeLayoutImages",19,()=>[]),A=U(r,"rendererInstance",15,null),q=e=>{
w()?.onMediaPlay?.(e)},T=e=>{
w()?.onMediaPause?.(e)},$=e=>{
w()?.onMediaTimeUpdate?.(e)},W=e=>{
w()?.onMediaSeek?.(e)},L=()=>{
w()?.onMediaSegmentEnd?.()},R=e=>{
w()?.onAnnotationHover?.(e)},N=e=>{
w()?.onAnnotationSelect?.(e)},O=()=>{
w()?.onAnnotationClear?.()},E=e=>{
w()?.onModelChange?.(e)};
e(()=>{
A()?.setImageFilters&&("image"===h()?A().setImageFilters(u()):A().setImageFilters(Gi))}),e(()=>{
A()?.setRotation&&"image"===h()&&A().setRotation(b())});
var B=fe(),P=re(B),V=e=>{
let t=H(o);
var r=fe(),i=re(r);
{
let e=H(()=>f().pdf?.page);
a(i,()=>d(t),(t,r)=>{
ae(r(t,{
get controller(){
return n()},get source(){
return s()},get annotations(){
return l()},get highlightIds(){
return c()},get activeAnnotationId(){
return p()},get hoverAnnotationId(){
return v()},get rotation(){
return b()},get initialViewBox(){
return m()},get layers(){
return C()},get layerOpacities(){
return j()},get layoutMode(){
return M()},get activeLayoutImages(){
return S()},get osdConfig(){
return f().osdConfig},get legacyOsdConfig(){
return f().osd},get modelConfig(){
return f().modelConfig},get initialPage(){
return d(e)},get onviewboxchange(){
return x()},get onviewBoxChange(){
return x()},get onzoomchange(){
return y()},get onzoomChange(){
return y()},get onrotationchange(){
return _()},get onrotationChange(){
return _()},get onviewerready(){
return k()},get onloaderror(){
return I()},onmediaplay:q,onmediapause:T,onmediatimeupdate:$,onmediaseek:W,onmediasegmentend:L,onmodelchange:E,onannotationhover:R,onannotationHover:R,onannotationselect:N,onannotationSelect:N,onannotationclear:O,onannotationClear:O}),e=>A(e),()=>A())})}g(e,r)};
z(P,e=>{
o()&&s()&&e(V)}),g(t,B),i()}var qi=S('<text class="annotation-layer__label svelte-1u1ifbs"> </text>'),Ji=S('<rect role="button" tabindex="0"></rect><!>',1),Yi=S('<polyline role="button" tabindex="0"></polyline><!>',1),Xi=S('<polygon role="button" tabindex="0"></polygon><!>',1),Zi=S('<circle r="6" role="button" tabindex="0"></circle><!>',1),Qi=S('<svg class="annotation-layer svelte-1u1ifbs"></svg>');
function $i(e,t){
le(t,!0);
let a=U(t,"annotations",19,()=>[]),n=U(t,"viewBox",3,null),s=U(t,"width",3,0),l=U(t,"height",3,0),p=U(t,"activeAnnotationId",3,null),v=U(t,"hoverAnnotationId",3,null),f=U(t,"highlightIds",19,()=>[]),w=U(t,"onannotationHover",3,void 0),b=U(t,"onannotationSelect",3,void 0);
U(t,"onannotationClear",3,void 0);
let m=e=>(e-(n()?.x??0))/(n()?.w??1)*s(),x=e=>(e-(n()?.y??0))/(n()?.h??1)*l(),y=e=>e/(n()?.w??1)*s(),k=e=>e/(n()?.h??1)*l(),j=e=>e.map(e=>`${
m(e.x)},${
x(e.y)}`).join(" "),M={
research:"#fb7185",transcription:"#60a5fa",highlights:"#34d399",mine:"#a78bfa"},S="#a78bfa",A=e=>e.targetStyle?.trim()||(e=>{
let t=e?M[e]??S:S;
return`stroke: ${
t};
 fill: rgba(${
parseInt(t.slice(1,3),16)||0}, ${
parseInt(t.slice(3,5),16)||0}, ${
parseInt(t.slice(5,7),16)||0}, 0.18);
`})(e.targetStyleClass),q=e=>e.label?.trim()||"",T=e=>q(e)||"Annotation",$=e=>{
b()?.({
id:e})},L=(e,t)=>{
("Enter"===e.key||" "===e.key)&&(e.preventDefault(),e.stopPropagation(),$(t))},N=e=>{
let t=e.map(e=>e.x),r=e.map(e=>e.y),a=(Math.min(...t)+Math.max(...t))/2,o=Math.max(...r);
return{
x:m(a),y:x(o)+14}};
var O=fe(),E=re(O),P=e=>{
var t=Qi();
B(t,21,a,e=>e.id,(e,t)=>{
var a=fe(),i=re(a),n=e=>{
var a=Ji(),i=re(a);
let n;
var s=R(i),l=e=>{
var r=qi(),a=W(r,!0);
o(r),h((e,t,o)=>{
I(r,"x",e),I(r,"y",t),u(a,o)},[()=>m(d(t).rect.x+d(t).rect.w/2),()=>x(d(t).rect.y+d(t).rect.h)+14,()=>q(d(t))]),g(e,r)},b=H(()=>q(d(t)));
z(s,e=>{
d(b)&&e(l)}),h((e,a,o,s,l,c,v)=>{
n=r(i,0,"annotation-layer__shape svelte-1u1ifbs",null,n,e),I(i,"x",a),I(i,"y",o),I(i,"width",s),I(i,"height",l),_(i,c),I(i,"aria-label",v),I(i,"aria-pressed",d(t).id===p())},[()=>({
"annotation-layer__shape--hit":f().includes(d(t).id),"annotation-layer__shape--active":d(t).id===p(),"annotation-layer__shape--hover":d(t).id===v()}),()=>m(d(t).rect.x),()=>x(d(t).rect.y),()=>y(d(t).rect.w),()=>k(d(t).rect.h),()=>A(d(t)),()=>T(d(t))]),c("mouseenter",i,()=>w()?.({
id:d(t).id})),c("mouseleave",i,()=>w()?.({
id:null})),C("click",i,e=>{
e.stopPropagation(),$(d(t).id)}),C("keydown",i,e=>L(e,d(t).id)),g(e,a)},s=e=>{
var a=fe(),i=re(a),n=e=>{
var a=Yi(),i=re(a);
let n;
var s=R(i),l=e=>{
let r=H(()=>N(d(t).polygon.points));
var a=qi(),i=W(a,!0);
o(a),h(e=>{
I(a,"x",d(r).x),I(a,"y",d(r).y),u(i,e)},[()=>q(d(t))]),g(e,a)},b=H(()=>q(d(t)));
z(s,e=>{
d(b)&&e(l)}),h((e,a,o,s)=>{
n=r(i,0,"annotation-layer__shape annotation-layer__shape--polyline svelte-1u1ifbs",null,n,e),I(i,"points",a),_(i,o),I(i,"aria-label",s),I(i,"aria-pressed",d(t).id===p())},[()=>({
"annotation-layer__shape--hit":f().includes(d(t).id),"annotation-layer__shape--active":d(t).id===p(),"annotation-layer__shape--hover":d(t).id===v()}),()=>j(d(t).polygon.points),()=>A(d(t)),()=>T(d(t))]),c("mouseenter",i,()=>w()?.({
id:d(t).id})),c("mouseleave",i,()=>w()?.({
id:null})),C("click",i,e=>{
e.stopPropagation(),$(d(t).id)}),C("keydown",i,e=>L(e,d(t).id)),g(e,a)},s=H(()=>d(t).polygon.svg&&(d(t).polygon.svg.includes("<polyline")||d(t).polygon.svg.includes("<line"))),l=e=>{
var a=Xi(),i=re(a);
let n;
var s=R(i),l=e=>{
let r=H(()=>N(d(t).polygon.points));
var a=qi(),i=W(a,!0);
o(a),h(e=>{
I(a,"x",d(r).x),I(a,"y",d(r).y),u(i,e)},[()=>q(d(t))]),g(e,a)},b=H(()=>q(d(t)));
z(s,e=>{
d(b)&&e(l)}),h((e,a,o,s)=>{
n=r(i,0,"annotation-layer__shape svelte-1u1ifbs",null,n,e),I(i,"points",a),_(i,o),I(i,"aria-label",s),I(i,"aria-pressed",d(t).id===p())},[()=>({
"annotation-layer__shape--hit":f().includes(d(t).id),"annotation-layer__shape--active":d(t).id===p(),"annotation-layer__shape--hover":d(t).id===v()}),()=>j(d(t).polygon.points),()=>A(d(t)),()=>T(d(t))]),c("mouseenter",i,()=>w()?.({
id:d(t).id})),c("mouseleave",i,()=>w()?.({
id:null})),C("click",i,e=>{
e.stopPropagation(),$(d(t).id)}),C("keydown",i,e=>L(e,d(t).id)),g(e,a)};
z(i,e=>{
d(s)?e(n):e(l,-1)}),g(e,a)},l=e=>{
var a=Zi(),i=re(a);
let n;
var s=R(i),l=e=>{
var r=qi(),a=W(r,!0);
o(r),h((e,t,o)=>{
I(r,"x",e),I(r,"y",t),u(a,o)},[()=>m(d(t).point.x),()=>x(d(t).point.y)+14,()=>q(d(t))]),g(e,r)},b=H(()=>q(d(t)));
z(s,e=>{
d(b)&&e(l)}),h((e,a,o,s,l)=>{
n=r(i,0,"annotation-layer__shape svelte-1u1ifbs",null,n,e),I(i,"cx",a),I(i,"cy",o),_(i,s),I(i,"aria-label",l),I(i,"aria-pressed",d(t).id===p())},[()=>({
"annotation-layer__shape--hit":f().includes(d(t).id),"annotation-layer__shape--active":d(t).id===p(),"annotation-layer__shape--hover":d(t).id===v()}),()=>m(d(t).point.x),()=>x(d(t).point.y),()=>A(d(t)),()=>T(d(t))]),c("mouseenter",i,()=>w()?.({
id:d(t).id})),c("mouseleave",i,()=>w()?.({
id:null})),C("click",i,e=>{
e.stopPropagation(),$(d(t).id)}),C("keydown",i,e=>L(e,d(t).id)),g(e,a)};
z(i,e=>{
d(t).rect?e(n):d(t).polygon?.points?.length?e(s,1):d(t).point&&e(l,2)}),g(e,a)}),o(t),h(()=>{
I(t,"width",s()),I(t,"height",l()),I(t,"viewBox",`0 0 ${
s()} ${
l()}`)}),g(e,t)};
z(E,e=>{
n()&&s()>1&&l()>1&&e(P)}),g(e,O),i()}x(["click","keydown"]);
var ea=e=>e.trim().replace(/\s+/g," "),ta=e=>{
if(!e||"object"!=typeof e)return[];
let t=e.body;
return t?(Array.isArray(t)?t:[t]).filter(e=>!!e&&"object"==typeof e):[]},na=e=>e.rect?{
type:"rect",geometry:e.rect}:e.point?{
type:"point",geometry:e.point}:e.polygon?.points?.length?{
type:"polygon",geometry:{
points:e.polygon.points}}:null,ra=e=>"rect"===e.type?{
rect:e.geometry}:"point"===e.type?{
point:e.geometry}:"polygon"===e.type?{
polygon:{
points:e.geometry.points}}:"line"===e.type?{
polygon:{
points:[e.geometry.start,e.geometry.end]}}:"freehand"===e.type?{
polygon:{
points:e.geometry.points}}:{
},ia=e=>ta(e).map(e=>{
let t="string"==typeof e.format?e.format:void 0;
return{
type:"text/html"===t?"html":"text",value:"string"==typeof e.value?e.value:"",format:t,language:"string"==typeof e.language?e.language:void 0,purpose:"string"==typeof e.purpose?e.purpose:void 0}}),aa=(e,t)=>{
let r=na(e);
if(!r)return null;
let a=Le.serialize({
id:e.id||`anno-${
Date.now()}-${
Math.random().toString(16).slice(2,8)}`,canvasId:t,text:(e.text??e.bodies?.[0]?.value??"").trim(),label:e.label||void 0,layer:e.targetStyleClass||void 0,shape:r}),o=[...a.body],i=e.notes?.trim();
i&&o.push({
type:"TextualBody",value:i,format:"text/plain",purpose:"describing"});
for(let t of(e.tags??[]).map(ea).filter(Boolean))o.push({
type:"TextualBody",value:t,format:"text/plain",purpose:"tagging"});
return{
...a,motivation:e.motivation?.[0]||a.motivation,body:o}},oa=e=>{
let t;
try{
t=Le.parseAnnotation(e)}catch{
return null}let r=e,a=ia(e),o=a.filter(e=>e.purpose?.toLowerCase().endsWith("tagging")).map(e=>ea(e.value??"")).filter(Boolean),i=a.filter(e=>e.purpose?.toLowerCase().endsWith("describing")).map(e=>e.value??"").filter(Boolean).join("\n\n"),n=Array.isArray(r.motivation)?r.motivation:r.motivation?[r.motivation]:void 0,s="object"==typeof r.target?r.target:void 0;
return{
id:t.id,shapeType:"none"===t.shape.type?void 0:t.shape.type,...ra(t.shape),time:t.temporal?{
start:t.temporal.start,end:t.temporal.end}:void 0,text:t.text,label:t.label,notes:i,tags:Array.from(new Set(o)),bodies:a,motivation:n,targetStyleClass:s?.styleClass??t.layer,targetStyle:s?.style}},sa=e=>"none"===e.type?null:"rect"===e.type?"rectangle":e.type,ca=e=>{
try{
return sa(Le.parseAnnotation(e).shape)}catch{
}return null};
function la(t,r){
le(r,!0);
let a=U(r,"enabled",3,!1),o=U(r,"viewer",3,null),n=U(r,"canvasId",3,null),s=U(r,"canvasWidth",3,0),l=U(r,"canvasHeight",3,0),c=U(r,"annotations",19,()=>[]),p=U(r,"activeAnnotationId",3,null),v=U(r,"activeTool",3,"rectangle"),g=U(r,"layers",19,()=>[]),u=U(r,"ontoolchange",3,void 0),h=U(r,"onannotationcreate",3,void 0),f=U(r,"onannotationupdate",3,void 0),w=U(r,"onannotationdelete",3,void 0),b=U(r,"onannotationselect",3,void 0),m=V(null),x=()=>{
let e=o()?.container.querySelector(".mango-annotation-editor");
if(!e)return;
let t=new Map(c().flatMap(e=>{
let t=e.label?.trim();
return e.rect&&t?[[e.id,t]]:[]}));
for(let r of e.querySelectorAll("[data-annotation-id]")){
let e=r.dataset.annotationId,a=e?t.get(e):void 0,o=r.nextElementSibling;
if(!a||"rect"!==r.tagName.toLowerCase()||"text"!==o?.tagName.toLowerCase())continue;
let i=Number(r.getAttribute("x")),n=Number(r.getAttribute("y")),s=Number(r.getAttribute("width")),l=Number(r.getAttribute("height"));
if(![i,n,s,l].every(Number.isFinite)||s<=0||l<=0)continue;
let{
fontSize:d,lineHeight:c,lines:p}=me(s,l,a),v=i+s/2,g=n+l/2-(p.length-1)*c/2;
o.setAttribute("x",String(v)),o.setAttribute("y",String(g)),o.setAttribute("font-size",d.toFixed(2)),o.setAttribute("stroke-width",pe(d).toFixed(2)),o.setAttribute("dominant-baseline","middle"),o.setAttribute("text-anchor","middle"),o.setAttribute("data-fitted-rectangle-label",e);
let u=`${
a}|${
i}|${
n}|${
s}|${
l}|${
p.join("|")}`;
(o.getAttribute("data-label-layout")!==u||o.querySelectorAll("tspan").length!==p.length)&&(o.setAttribute("data-label-layout",u),o.replaceChildren(...p.map((e,t)=>{
let r=document.createElementNS("http://www.w3.org/2000/svg","tspan");
return r.textContent=e,r.setAttribute("x",String(v)),r.setAttribute("dy",0===t?"0":c.toFixed(2)),r})))}},y=e=>{
let t=e.targetStyle?.split(";
").map(e=>e.trim()).filter(Boolean);
if(!t?.length)return;
let r=new Map;
for(let e of t){
let t=e.indexOf(":");
t<0||r.set(e.slice(0,t).trim().toLowerCase(),e.slice(t+1).trim())}let a=Number.parseFloat(r.get("stroke-width")??"");
return{
...r.get("stroke")?{
strokeColor:r.get("stroke")}:{
},...r.get("fill")?{
fillColor:r.get("fill")}:{
},...Number.isFinite(a)?{
strokeWidth:a}:{
}}},_=e=>{
let t={
id:e.id,layer:e.targetStyleClass,label:e.label,text:e.text,style:y(e)};
if(e.rect)return{
...t,type:"rect",geometry:{
x:e.rect.x,y:e.rect.y,w:e.rect.w,h:e.rect.h}};
if(e.point)return{
...t,type:"point",geometry:{
x:e.point.x,y:e.point.y}};
if(e.polygon?.points?.length){
if("line"===e.shapeType&&e.polygon.points.length>=2){
let r=e.polygon.points[0],a=e.polygon.points[e.polygon.points.length-1];
return{
...t,type:"line",geometry:{
start:{
x:r.x,y:r.y},end:{
x:a.x,y:a.y}}}}let r=e.polygon.points.map(e=>({
x:e.x,y:e.y}));
return"freehand"===e.shapeType?{
...t,type:"freehand",geometry:{
points:r}}:{
...t,type:"polygon",geometry:{
points:r}}}return null},k=e=>"rect"===e.type?{
shapeType:"rect",rect:e.geometry,point:void 0,polygon:void 0}:"point"===e.type?{
shapeType:"point",rect:void 0,point:e.geometry,polygon:void 0}:"line"===e.type?{
shapeType:"line",rect:void 0,point:void 0,polygon:{
points:[e.geometry.start,e.geometry.end]}}:{
shapeType:e.type,rect:void 0,point:void 0,polygon:{
points:e.geometry.points}},z=e=>"select"===e?"select":e,I=(e,t=.18)=>{
let r=e.trim(),a=r.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i),o=r.match(/^#([0-9a-f]{
2})([0-9a-f]{
2})([0-9a-f]{
2})$/i),i=a?a.slice(1).map(e=>parseInt(`${
e}${
e}`,16)):o?o.slice(1).map(e=>parseInt(e,16)):null;
return i?`rgba(${
i[0]}, ${
i[1]}, ${
i[2]}, ${
t})`:r},C=e=>({
layers:Object.fromEntries(e.map(e=>[e.id,{
strokeColor:e.color,fillColor:I(e.color)}]))});
e(()=>{
if(!a()||!o()||s()<=0||l()<=0)return;
let e=new Se({
viewer:o(),canvasSize:{
width:s(),height:l()},annotations:T(()=>c().map(_).filter(e=>!!e)),selectedId:T(()=>p()),mode:T(()=>z(v())),currentLayer:"mine",theme:T(()=>C(g())),onSelectionChanged:e=>{
e&&c().some(t=>t.id===e)&&b()?.({
id:e})},onAnnotationCreated:e=>{
if(!n())return;
let t=sa(e);
if(!t)return;
let r=Le.serialize({
id:e.id,canvasId:n(),text:e.text??"",label:e.label,layer:e.layer,shape:e});
h()?.({
annotation:r,tool:t})},onAnnotationUpdated:e=>{
f()?.({
id:e.id,patch:k(e)})},onAnnotationDeleted:e=>w()?.({
id:e}),onModeChanged:e=>{
"select"===e&&u()?.({
tool:"select"})}});
j(m,e,!0);
let t=o().container.querySelector(".mango-annotation-editor"),r=null;
return t&&typeof MutationObserver<"u"&&(r=new MutationObserver(()=>x()),r.observe(t,{
childList:!0,subtree:!0})),x(),()=>{
r?.disconnect(),e.destroy(),d(m)===e&&j(m,null)}}),e(()=>{
d(m)&&(d(m).setAnnotations(c().map(_).filter(e=>!!e)),d(m).select(p()),x())}),e(()=>{
d(m)?.setMode(z(v()))}),e(()=>{
d(m)?.updateCanvasSize({
width:s(),height:l()})}),e(()=>{
d(m)?.updateTheme(C(g()))}),i()}var ua=class{
#e;
get manifestId(){
return d(this.#e)}set manifestId(e){
j(this.#e,e,!0)}#t;
get selectedCanvasIndex(){
return d(this.#t)}set selectedCanvasIndex(e){
j(this.#t,e,!0)}#r;
get viewBox(){
return d(this.#r)}set viewBox(e){
j(this.#r,e,!0)}#a;
get imageFilters(){
return d(this.#a)}set imageFilters(e){
j(this.#a,e,!0)}constructor(e){
this.#e=V(""),this.#t=V(0),this.#r=V(null),this.#a=V(k({
...Gi})),e&&("string"==typeof e.manifestId&&(this.manifestId=e.manifestId),"number"==typeof e.selectedCanvasIndex&&(this.selectedCanvasIndex=e.selectedCanvasIndex),void 0!==e.viewBox&&(this.viewBox=e.viewBox),e.imageFilters&&(this.imageFilters={
...e.imageFilters}))}},da="viewport-state",fa=n("<div><!></div>"),pa=n('<div class="stage__placeholder svelte-1udkqf7"> </div>'),ma=n('<span class="svelte-1udkqf7"> </span>'),ha=n('<div class="stage__placeholder svelte-1udkqf7" role="alert"><strong> </strong> <!></div>'),ga=n('<div class="stage__placeholder svelte-1udkqf7" role="status"> </div>'),_a=n('<div class="stage__container svelte-1udkqf7"><!>  <div role="application" tabindex="0"><!> <!> <!> <!></div></div>');
function va(t,a){
le(a,!0);
let n=()=>O(_e,"$t",s),[s,l]=ee(),c=U(a,"rendererComponent",3,null),p=U(a,"avController",3,void 0),f=U(a,"mediaSource",3,null),w=U(a,"annotations",19,()=>[]),b=U(a,"highlightIds",19,()=>[]),m=U(a,"activeAnnotationId",3,null),x=U(a,"hoverAnnotationId",3,null),y=U(a,"overlayPlugins",19,()=>[]),_=U(a,"isFetching",3,!1),M=U(a,"error",3,""),S=U(a,"mediaType",3,null),A=U(a,"viewerConfig",19,()=>({
})),q=U(a,"allowThumbnails",3,!0),T=U(a,"allowSearch",3,!0),$=U(a,"allowMetadata",3,!0),L=U(a,"allowAnnotations",3,!0),N=U(a,"allowTools",3,!0),E=U(a,"allowLayers",3,!1),B=U(a,"allowSettings",3,!1),P=U(a,"allowContents",3,!1),F=U(a,"showThumbnails",3,!0),D=U(a,"showContents",3,!1),Z=U(a,"showSearch",3,!0),J=U(a,"showMetadata",3,!0),Q=U(a,"showAnnotations",3,!0),X=U(a,"showTools",3,!1),G=U(a,"showLayers",3,!1),Y=U(a,"layers",19,()=>[]),K=U(a,"layerOpacities",19,()=>({
})),te=U(a,"showDock",3,!0),re=U(a,"rendererHandlers",3,null),oe=U(a,"rotation",3,0),ie=U(a,"initialViewBox",3,null),ne=U(a,"fillHeight",3,!1),se=U(a,"constrainMediaHeight",3,!1),de=U(a,"canZoom",15,!1),ce=U(a,"onviewboxchange",3,void 0),pe=U(a,"onzoomchange",3,void 0),ve=U(a,"onrotationchange",3,void 0),ge=U(a,"onpaneltoggle",3,void 0),ue=U(a,"annotationTool",3,"select"),he=U(a,"annotationEditorEnabled",3,!1),fe=U(a,"annotationEditorAnnotations",3,void 0),we=U(a,"annotationLayers",19,()=>[]),be=U(a,"canvasId",3,null),me=U(a,"onannotationcreate",3,void 0),xe=U(a,"onannotationupdate",3,void 0),ye=U(a,"onannotationdelete",3,void 0),ke=U(a,"onannotationselect",3,void 0),ze=U(a,"onannotationtoolchange",3,void 0),Ie=U(a,"layoutMode",3,"single"),Ce=U(a,"activeLayoutImages",19,()=>[]),je=v(da),Me=H(()=>be()??je?.manifestId??null),Se=H(()=>se()&&!ne()&&"video"!==S()),Ae=H(()=>!(ne()||f()&&"video"===S()||d(Se))),qe=H(()=>!ne()&&"audio"===S()),Te=H(()=>"image"===S()||"audio"===S()),$e=V(null),We=V(null),Le=V(k({
width:0,height:0})),Re=V(null),Ne=V(0),Oe=V(0),Ee=V(null),Ue=V(null),Be=V(k({
})),Pe=V(""),Ve=e=>{
d($e)?.zoomBy?.(e)},He=e=>{
j(Ee,e.viewBox,!0),ce()?.(e)},Fe=e=>{
j(Ee,e.viewBox,!0),pe()?.(e)},De=e=>{
j(Pe,""),j(We,e.viewer,!0),(e=>{
let t=e?.world?.getItemAt(0)?.getContentSize?.();
t?.x>0&&t?.y>0&&j(Le,{
width:t.x,height:t.y},!0)})(e.viewer)},Ze=e=>{
j(Pe,e.message||n()("viewer.stage.mediaError"),!0)};
e(()=>{
f(),f(),j(Pe,"")}),e(()=>{
de(!!d($e)?.zoomBy)}),e(()=>{
d($e)?.setModelPose&&d(Ue)&&d($e).setModelPose(d(Ue),d(Be))}),e(()=>{
if(!d(Re)||typeof ResizeObserver>"u")return;
j(Ne,d(Re).clientWidth,!0),j(Oe,d(Re).clientHeight,!0);
let e=new ResizeObserver(()=>{
d(Re)&&(j(Ne,d(Re).clientWidth,!0),j(Oe,d(Re).clientHeight,!0))});
return e.observe(d(Re)),()=>e.disconnect()});
let Je=H(()=>w().map(e=>aa(e,be()??"")).filter(e=>!!e).map(e=>oa(e)).filter(e=>!!e));
var Qe={
getViewBox:()=>d($e)?.getViewBox?.()??null,setViewBox:e=>{
d($e)?.setViewBox?.(e)},zoomBy:Ve,goHome:()=>{
d($e)?.goHome?.()},rotateBy:e=>{
d($e)?.rotateBy?.(e)},start:()=>{
d($e)?.start?.()},play:()=>{
d($e)?.play?.()},pause:()=>{
d($e)?.pause?.()},stop:()=>{
d($e)?.stop?.()},seekBy:e=>{
d($e)?.seekBy?.(e)},seekTo:e=>{
d($e)?.seekTo?.(e)},setMediaSegment:(e,t)=>{
d($e)?.setMediaSegment?.(e,t)},setModelOrbit:e=>{
j(Ue,{
...d(Ue)??{
},cameraOrbit:e},!0),d($e)?.setCameraOrbit?.(e)},setModelTarget:e=>{
j(Ue,{
...d(Ue)??{
},cameraTarget:e},!0),d($e)?.setCameraTarget?.(e)},setModelOrientation:e=>{
j(Ue,{
...d(Ue)??{
},orientation:e},!0),d($e)?.setOrientation?.(e)},setModelPose:(e,t)=>{
j(Ue,e,!0),j(Be,t??{
},!0),d($e)?.setModelPose?.(e,t)},getModelOrbit:()=>d($e)?.getCameraOrbit?.()??d(Ue)?.cameraOrbit??null,getModelTarget:()=>d($e)?.getCameraTarget?.()??d(Ue)?.cameraTarget??null,getModelOrientation:()=>d($e)?.getOrientation?.()??d(Ue)?.orientation??null,getModelPose:()=>d($e)?.getModelPose?.()??d(Ue)??null},Xe=_a(),Ge=W(Xe),Ye=e=>{
var t=fa();
let a;
Wi(W(t),{
get allowThumbnails(){
return q()},get allowContents(){
return P()},get allowSearch(){
return T()},get allowMetadata(){
return $()},get allowAnnotations(){
return L()},get allowTools(){
return N()},get allowLayers(){
return E()},get allowSettings(){
return B()},get showThumbnails(){
return F()},get showContents(){
return D()},get showSearch(){
return Z()},get showMetadata(){
return J()},get showAnnotations(){
return Q()},get showTools(){
return X()},get showLayers(){
return G()},onpanelToggle:e=>ge()?.(e)}),o(t),h(()=>a=r(t,1,"stage__dock svelte-1udkqf7",null,a,{
"stage__dock--inline":d(qe)})),g(e,t)};
z(Ge,e=>{
te()&&e(Ye)});
var Ke=R(Ge,2);
let et;
var tt=W(Ke),rt=e=>{
var t=pa(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.stage.loading")]),g(e,t)},at=e=>{
var t=pa(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.stage.error")]),g(e,t)},ot=e=>{
var t=ha(),r=W(t),a=W(r,!0);
o(r);
var i=R(r,2),s=e=>{
var t=ma(),r=W(t,!0);
o(t),h(()=>u(r,d(Pe))),g(e,t)},l=H(()=>d(Pe)!==n()("viewer.stage.mediaError"));
z(i,e=>{
d(l)&&e(s)}),o(t),h(e=>u(a,e),[()=>n()("viewer.stage.mediaError")]),g(e,t)},it=e=>{
{
let t=H(()=>he()?[]:w());
Ki(e,{
get rendererComponent(){
return c()},get avController(){
return p()},get source(){
return f()},get annotations(){
return d(t)},get highlightIds(){
return b()},get activeAnnotationId(){
return m()},get hoverAnnotationId(){
return x()},get imageFilters(){
return a.imageFilters},get mediaType(){
return S()},get viewerConfig(){
return A()},get rendererHandlers(){
return re()},get rotation(){
return oe()},get initialViewBox(){
return ie()},get layers(){
return Y()},get layerOpacities(){
return K()},get layoutMode(){
return Ie()},get activeLayoutImages(){
return Ce()},onviewboxchange:He,onzoomchange:Fe,onrotationchange:e=>ve()?.(e),onviewerready:De,onrenderererror:Ze,get rendererInstance(){
return d($e)},set rendererInstance(e){
j($e,e,!0)}})}},nt=e=>{
var t=ga(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("viewer.stage.missingMedia")]),g(e,t)};
z(tt,e=>{
_()?e(rt):M()?e(at,1):d(Pe)?e(ot,2):c()&&f()?e(it,3):e(nt,-1)});
var st=R(tt,2),lt=e=>{
$i(e,{
get annotations(){
return d(Je)},get viewBox(){
return d(Ee)},get width(){
return d(Ne)},get height(){
return d(Oe)},get activeAnnotationId(){
return m()},get hoverAnnotationId(){
return x()},get highlightIds(){
return b()},onannotationHover:e=>re()?.onAnnotationHover?.(e),onannotationSelect:e=>re()?.onAnnotationSelect?.(e),onannotationClear:()=>re()?.onAnnotationClear?.()})};
z(st,e=>{
d(Te)||e(lt)});
var dt=R(st,2);
{
let e=H(()=>d(Le).width||f()?.width||0),t=H(()=>d(Le).height||f()?.height||0),r=H(()=>fe()??w());
la(dt,{
get enabled(){
return he()},get viewer(){
return d(We)},get activeTool(){
return ue()},get canvasWidth(){
return d(e)},get canvasHeight(){
return d(t)},get canvasId(){
return d(Me)},get annotations(){
return d(r)},get activeAnnotationId(){
return m()},get layers(){
return we()},onannotationcreate:e=>me()?.(e),onannotationupdate:e=>xe()?.(e),onannotationdelete:e=>ye()?.(e),onannotationselect:e=>ke()?.(e),ontoolchange:e=>ze()?.(e)})}var ct=R(dt,2),pt=e=>{
var t=fa();
let i;
mt(W(t),{
slot:"overlay",get plugins(){
return y()},get context(){
return a.pluginContext}}),o(t),h(()=>i=r(t,1,"stage__overlay svelte-1udkqf7",null,i,{
"stage__overlay--flush":ne(),"stage__overlay--annotation-editing":he()})),g(e,t)};
z(ct,e=>{
y().length>0&&e(pt)}),o(Ke),ae(Ke,e=>j(Re,e),()=>d(Re)),o(Xe),h(e=>{
et=r(Ke,1,"stage__media svelte-1udkqf7",null,et,{
"stage__media--fixed":d(Ae),"stage__media--constrained":d(Se),"stage__media--fill":ne(),"stage__media--audio":"audio"===S(),"stage__media--video":"video"===S()}),I(Ke,"aria-label",e)},[()=>n()("viewer.stage.label")??"Viewer stage"]),C("keydown",Ke,e=>{
e.composedPath().some(e=>e instanceof HTMLElement&&(e.isContentEditable||e.matches("input, textarea, select")||!!e.closest('[contenteditable="true"]')))||(("+"===e.key||"="===e.key)&&(e.preventDefault(),Ve(1.2)),"-"===e.key&&(e.preventDefault(),Ve(.8)))}),g(t,Xe);
var vt=i(Qe);
return l(),vt}x(["keydown"]);
var ya=n('<div><div class="stage__toolbar-group stage__toolbar-group--single svelte-1vk8t58"><button class="stage__toolbar-button stage__toolbar-button--single svelte-1vk8t58" type="button"><span class="stage__toolbar-rotate-icon svelte-1vk8t58"><!></span></button></div> <span class="stage__toolbar-separator svelte-1vk8t58" aria-hidden="true"></span> <div class="stage__toolbar-group svelte-1vk8t58"><button class="stage__toolbar-button svelte-1vk8t58" type="button"><svg class="stage__toolbar-icon svelte-1vk8t58" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L7.5 12l7 6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <span class="stage__toolbar-value stage__toolbar-value--canvas svelte-1vk8t58"><input class="stage__toolbar-input stage__toolbar-input--canvas svelte-1vk8t58" type="text" inputmode="numeric" pattern="[0-9]*"/> <span class="stage__toolbar-input-divider svelte-1vk8t58" aria-hidden="true">/</span> <span class="stage__toolbar-input-suffix svelte-1vk8t58"> </span></span> <button class="stage__toolbar-button svelte-1vk8t58" type="button"><svg class="stage__toolbar-icon svelte-1vk8t58" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5l7 6.5-7 6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div> <span class="stage__toolbar-separator svelte-1vk8t58" aria-hidden="true"></span> <div class="stage__toolbar-group svelte-1vk8t58"><button class="stage__toolbar-button svelte-1vk8t58" type="button"><svg class="stage__toolbar-icon svelte-1vk8t58" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 12h11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button> <span class="stage__toolbar-value stage__toolbar-value--zoom svelte-1vk8t58"><input class="stage__toolbar-input stage__toolbar-input--zoom svelte-1vk8t58" type="text" inputmode="numeric" pattern="[0-9]*"/> <span class="stage__toolbar-input-suffix svelte-1vk8t58">%</span></span> <button class="stage__toolbar-button svelte-1vk8t58" type="button"><svg class="stage__toolbar-icon svelte-1vk8t58" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5v11M6.5 12h11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button></div> <span class="stage__toolbar-separator svelte-1vk8t58" aria-hidden="true"></span> <div class="stage__toolbar-group stage__toolbar-group--single svelte-1vk8t58"><button class="stage__toolbar-button stage__toolbar-button--single svelte-1vk8t58" type="button"><!></button></div></div>');
function ba(t,a){
le(a,!0);
let n=()=>O(_e,"$t",l),[l,p]=ee(),f=U(a,"canZoom",3,!1),w=U(a,"hasSource",3,!1),b=U(a,"mediaType",3,null),m=U(a,"placement",3,"below"),x=U(a,"selectedCanvasIndex",3,0),y=U(a,"totalCanvases",3,0),k=U(a,"zoomPercent",3,100),M=U(a,"rotation",3,0),S=U(a,"onhome",3,void 0),A=U(a,"onzoomIn",3,void 0),q=U(a,"onzoomOut",3,void 0),T=U(a,"onrotate",3,void 0),$=U(a,"onprevCanvas",3,void 0),L=U(a,"onnextCanvas",3,void 0),N=U(a,"onsetCanvasIndex",3,void 0),E=U(a,"onsetZoomPercent",3,void 0),B=v(da),P=V(null),F=-1,D=()=>{
let e=d(P);
if(!e)return;
let t=e.scrollWidth-e.clientWidth;
t!==F&&(F=t,t>0&&(e.scrollLeft=t/2))};
e(()=>{
let e=d(P);
if(!e||(D(),typeof ResizeObserver>"u"))return;
let t=new ResizeObserver(()=>D());
return t.observe(e),()=>t.disconnect()});
let Z=H(()=>B?.selectedCanvasIndex??x()),J=H(()=>"image"===b()||null===b()&&y()>0),Q=H(()=>y()>0&&d(Z)>0),X=H(()=>y()>0&&d(Z)<y()-1),G=H(()=>y()>0?Math.min(Math.max(d(Z)+1,1),y()):0),Y=H(()=>Math.max(10,Number.isFinite(k())?Math.round(k()):10)),K=H(()=>"image"===b()&&w()),oe=H(()=>"image"===b()&&w()),ie=V(!1),ne=V(!1),de=V(""),ce=V(""),pe=e=>e.replace(/\D+/g,""),ve=e=>{
let t=pe(e);
if(!t)return null;
let r=Number.parseInt(t,10);
return Number.isFinite(r)?r:null},ge=()=>{
j(de,y()>0?String(d(G)):"",!0)},ue=()=>{
j(ce,String(d(Y)),!0)},he=e=>{
let t=e.currentTarget;
j(de,pe(t.value),!0)},we=e=>{
let t=e.currentTarget;
j(ce,pe(t.value),!0)},be=()=>{
if(j(ie,!1),y()<=0)return void j(de,"");
let e=ve(d(de));
if(null===e)return void ge();
let t=Math.min(Math.max(e,1),y());
j(de,String(t),!0),t!==d(G)&&N()?.({
index:t-1})},me=()=>{
j(ne,!1);
let e=ve(d(ce));
if(null===e)return void ue();
let t=Math.min(Math.max(e,10),2e3);
j(ce,String(t),!0),t!==d(Y)&&E()?.({
percent:t})},xe=e=>{
if("Enter"===e.key)return e.preventDefault(),void e.currentTarget.blur();
"Escape"===e.key&&(e.preventDefault(),j(ie,!1),ge(),e.currentTarget.blur())},ye=e=>{
if("Enter"===e.key)return e.preventDefault(),void e.currentTarget.blur();
"Escape"===e.key&&(e.preventDefault(),j(ne,!1),ue(),e.currentTarget.blur())};
e(()=>{
d(ie)||ge()}),e(()=>{
d(ne)||ue()});
var ke=fe(),ze=re(ke),Ie=e=>{
var t=ya();
let a;
var i=W(t),l=W(i),p=W(l);
let v;
rn(W(p),{
class:"stage__toolbar-icon","aria-hidden":"true",strokeWidth:1.8}),o(p),o(l),o(i);
var b=R(i,4),x=W(b),k=R(x,2),z=W(k);
te(z);
var N=R(z,4),O=W(N,!0);
o(N),o(k);
var E=R(k,2);
o(b);
var U=R(b,4),B=W(U),V=R(B,2),H=W(V);
te(H),s(2),o(V);
var F=R(V,2);
o(U);
var D=R(U,4),Z=W(D);
Nt(W(Z),{
class:"stage__toolbar-icon","aria-hidden":"true",strokeWidth:1.8}),o(Z),o(D),o(t),ae(t,e=>j(P,e),()=>d(P)),h((e,o,i,n,s,c,g,h,b,k,C,j,S,A)=>{
a=r(t,1,"stage__toolbar svelte-1vk8t58",null,a,{
"stage__toolbar--above":"above"===m(),"stage__toolbar--below":"below"===m()}),I(t,"aria-label",e),I(l,"aria-label",o),I(l,"title",i),l.disabled=!d(K),v=_(p,"",v,{
transform:`rotate(${
M()}deg)`}),I(x,"aria-label",n),x.disabled=!d(Q),I(z,"aria-label",s),se(z,d(de)),_(z,c),z.disabled=y()<=0,u(O,y()),I(E,"aria-label",g),E.disabled=!d(X),I(B,"aria-label",h),I(B,"title",b),B.disabled=!w()||!f(),I(H,"aria-label",k),se(H,d(ce)),H.disabled=!w()||!f(),I(F,"aria-label",C),I(F,"title",j),F.disabled=!w()||!f(),I(Z,"aria-label",S),I(Z,"title",A),Z.disabled=!d(oe)},[()=>n()("viewer.toolbar.label"),()=>n()("viewer.toolbar.rotateRight"),()=>n()("viewer.toolbar.rotateRight"),()=>n()("viewer.stage.nav.prev"),()=>n()("viewer.toolbar.canvasNumber")??"Canvas number",()=>`width: ${
Math.max(2,String(Math.max(y(),d(G),1)).length)}ch;
`,()=>n()("viewer.stage.nav.next"),()=>n()("viewer.toolbar.zoomOut"),()=>n()("viewer.toolbar.zoomOut"),()=>n()("viewer.toolbar.zoomPercent")??"Zoom percent",()=>n()("viewer.toolbar.zoomIn"),()=>n()("viewer.toolbar.zoomIn"),()=>n()("viewer.toolbar.home"),()=>n()("viewer.toolbar.home")]),C("click",l,()=>T()?.()),C("click",x,()=>$()?.()),c("focus",z,()=>j(ie,!0)),C("input",z,he),c("blur",z,be),C("keydown",z,xe),C("click",E,()=>L()?.()),C("click",B,()=>q()?.()),c("focus",H,()=>j(ne,!0)),C("input",H,we),c("blur",H,me),C("keydown",H,ye),C("click",F,()=>A()?.()),C("click",Z,()=>S()?.()),g(e,t)};
z(ze,e=>{
d(J)&&e(Ie)}),g(t,ke),i(),p()}x(["click","input","keydown"]);
var xa=n('<button class="gallery__view-all svelte-fuzshn" type="button"><span> </span> <!></button>'),Sa=n('<button class="gallery__close svelte-fuzshn" type="button"> </button>'),Ca=n('<div class="gallery__empty svelte-fuzshn"> </div>'),wa=n('<img class="gallery__img svelte-fuzshn" loading="lazy"/>'),Ta=n('<span class="gallery__missing svelte-fuzshn"><!> <span class="svelte-fuzshn"> </span></span>'),Ea=n('<li class="gallery__item svelte-fuzshn"><button type="button" role="option"><span class="gallery__thumb svelte-fuzshn"><!></span> <span class="gallery__label svelte-fuzshn"> </span></button></li>'),Da=n('<ul class="gallery__list svelte-fuzshn" role="listbox"></ul>'),Oa=n('<section><div class="gallery__header svelte-fuzshn"><div class="gallery__title svelte-fuzshn"> </div> <!></div> <!></section>');
function ka(e,t){
le(t,!0);
let a=()=>O(_e,"$t",n),[n,s]=ee(),l=U(t,"canvases",19,()=>[]),c=U(t,"canvasThumbnails",19,()=>[]),p=U(t,"selectedCanvasIndex",3,0),f=U(t,"redesigned",3,!1),w=U(t,"onpanelToggle",3,void 0),b=U(t,"oncanvasSelect",3,void 0),m=U(t,"onviewall",3,void 0),x=v(da),y=H(()=>x?.selectedCanvasIndex??p()),_=[],k=e=>{
_[e]?.focus()},j=(e,t)=>{
if("ArrowDown"===e.key||"ArrowRight"===e.key){
e.preventDefault();
let r=Math.min(l().length-1,t+1);
b()?.({
index:r}),k(r)}if("ArrowUp"===e.key||"ArrowLeft"===e.key){
e.preventDefault();
let r=Math.max(0,t-1);
b()?.({
index:r}),k(r)}if("Home"===e.key&&(e.preventDefault(),b()?.({
index:0}),k(0)),"End"===e.key){
e.preventDefault();
let t=Math.max(0,l().length-1);
b()?.({
index:t}),k(t)}};
var M=Oa();
let S;
var A=W(M),q=W(A),T=W(q,!0);
o(q);
var $=R(q,2),L=e=>{
var t=xa(),r=W(t),a=W(r);
o(r),gt(R(r,2),{
"aria-hidden":"true"}),o(t),h(()=>u(a,`View all ${
l().length??""} pages`)),C("click",t,()=>m()?.()),g(e,t)},N=e=>{
var t=Sa(),r=W(t,!0);
o(t),h((e,a)=>{
I(t,"aria-label",e),u(r,a)},[()=>a()("viewer.gallery.hide"),()=>a()("common.closeGlyph")]),C("click",t,()=>w()?.({
panel:"thumbnails",open:!1})),g(e,t)};
z($,e=>{
f()&&m()?e(L):e(N,-1)}),o(A);
var E=R(A,2),P=e=>{
var t=Ca(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>a()("viewer.gallery.empty")]),g(e,t)},V=e=>{
var t=Da();
B(t,21,l,e=>e.id,(e,t)=>{
var i=Ea(),n=W(i);
let s;
var l=W(n),p=W(l),v=e=>{
var r=wa();
h(e=>{
I(r,"src",c()[d(t).index]),I(r,"alt",e)},[()=>d(t).label||a()("viewer.gallery.canvasAlt",{
index:d(t).index+1})]),g(e,r)},f=e=>{
var r=Ta(),i=W(r);
Ft(i,{
"aria-hidden":"true"});
var n=R(i,2),s=W(n,!0);
o(n),o(r),h(e=>{
I(r,"aria-label",e),u(s,d(t).index+1)},[()=>a()("viewer.gallery.unavailable")]),g(e,r)};
z(p,e=>{
c()[d(t).index]?e(v):e(f,-1)}),o(l);
var w=R(l,2),m=W(w,!0);
o(w),o(n),ae(n,(e,t)=>_[t.index]=e,e=>_?.[e.index],()=>[d(t)]),o(i),h(()=>{
s=r(n,1,"gallery__button svelte-fuzshn",null,s,{
"gallery__button--active":d(t).index===d(y)}),I(n,"aria-selected",d(t).index===d(y)),I(w,"title",d(t).label),u(m,d(t).label)}),C("click",n,()=>b()?.({
index:d(t).index})),C("keydown",n,e=>j(e,d(t).index)),g(e,i)}),o(t),g(e,t)};
z(E,e=>{
0===l().length?e(P):e(V,-1)}),o(M),h((e,t)=>{
S=r(M,1,"gallery svelte-fuzshn",null,S,{
"gallery--redesigned":f()}),I(M,"aria-label",e),u(T,t)},[()=>a()("viewer.gallery.label"),()=>f()?"Pages":a()("viewer.gallery.title")]),g(e,M),i(),s()}x(["click","keydown"]);
var Aa=e=>{
let t=!1!==e?.config?.sidebar?.enabled&&!1!==e?.config?.sidebar?.open,r=e?.config?.sidebar?.activePanel??"metadata";
return{
manifestId:Z(e?.manifestId??""),collectionId:Z(""),config:Z(e?.config),plugins:Z(e?.plugins??[]),selectedCanvasIndex:Z(e?.selectedCanvasIndex??0),selectedMediaIndex:Z(0),showThumbnails:Z(!0),showContents:Z(t&&"contents"===r),showCollection:Z(!1),showMetadata:Z(t&&"metadata"===r),showSearch:Z(t&&"search"===r),showAnnotations:Z(t&&"annotations"===r),keepAnnotationsVisible:Z(!1),showTools:Z(t&&"tools"===r),showSettings:Z(t&&"settings"===r),showLayers:Z(t&&"layers"===r),layoutMode:Z(e?.layoutMode??"single"),layerOpacities:Z({
}),annotationMode:Z("edit"),searchQuery:Z(""),selectedSearchResultId:Z(null),activeAnnotationId:Z(null),hoverAnnotationId:Z(null),imageFilters:Z({
...Gi}),viewBox:Z(e?.viewBox??null),zoom:Z(0),rotation:Z(e?.rotation??0),mediaTime:Z(0),mediaDuration:Z(void 0),userAnnotations:Z({
}),externalAnnotations:Z({
}),iiifSearchResults:Z([])}},ja=e=>{
let t=new Map;
for(let r of e)r?.id&&t.set(r.id,r);
return Array.from(t.values())},Ma=Z([]),Na={
subscribe:Ma.subscribe},Pa=e=>{
e?.id?Ma.update(t=>ja([...t,e])):console.warn(he("warnings.pluginMissingId"))},Fa=e=>{
if(!e)return"";
if("string"==typeof e)return e;
if("object"==typeof e){
if("id"in e&&"string"==typeof e.id)return e.id;
if("@id"in e&&"string"==typeof e["@id"])return e["@id"]}return""},Ia=e=>e?Array.isArray(e)?e:[e]:[],La=e=>e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),Ra=e=>{
let t=e.match(/xywh=([^&]+)/);
if(!t)return null;
let r=t[1].replace(/^pixel:/,"").split(",").map(e=>Number(e));
return 4!==r.length||r.some(e=>Number.isNaN(e))?null:{
x:r[0],y:r[1],w:r[2],h:r[3]}},za=e=>{
if(e){
if("string"==typeof e)return e;
if("object"==typeof e){
if("string"==typeof e.value)return e.value;
if("string"==typeof e.fragment)return e.fragment}}},Ba=e=>{
if(e){
if("string"==typeof e)return e.split("#")[0]?.split("?")[0]??e;
if(Array.isArray(e)){
for(let t of e){
let e=Ba(t);
if(e)return e}return}if("object"==typeof e){
return"source"in e?Fa(e.source)||void 0:Fa(e)||void 0}}},Va=e=>Ia(e?.stylesheet).map(e=>"string"==typeof e?e:"object"==typeof e&&e?Fa(e):"").filter(Boolean),Ha=e=>{
let t=e.match(/(?:\\?|#)t=([0-9.]+)(?:,([0-9.]+))?/);
if(!t)return null;
let r=Number(t[1]),a=t[2]?Number(t[2]):void 0;
return Number.isNaN(r)||null!=a&&Number.isNaN(a)?null:{
start:r,end:a}},Ua=e=>{
let t=e.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g);
if(!t)return[];
let r=[],a="",o=0,i=null;
for(;
o<t.length;
){
let e=t[o];
if(!e)break;
if(/[a-zA-Z]/.test(e)){
a=e,o+=1;
continue}let n=Number(t[o]),s=Number(t[o+1]);
if(Number.isNaN(n)||Number.isNaN(s)){
o+=1;
continue}let l="m"===a||"l"===a,d={
x:(l&&i?i.x:0)+n,y:(l&&i?i.y:0)+s};
("M"===a||"L"===a||"m"===a||"l"===a)&&(r.push(d),i=d),"M"===a&&(a="L"),"m"===a&&(a="l"),o+=2}if(r.length>0)return r;
let n=e.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/g);
if(!n)return[];
let s=[];
for(let e=0;
e<n.length-1;
e+=2){
let t=Number(n[e]),r=Number(n[e+1]);
Number.isNaN(t)||Number.isNaN(r)||s.push({
x:t,y:r})}return s},Wa=e=>{
let t=e.match(/points=['"]([^'"]+)['"]/i);
if(t){
let r=t[1].trim().split(/\s+/).flatMap(e=>e.split(",")).map(e=>Number(e)).reduce((e,t,r,a)=>{
if(r%2==0&&r+1<a.length){
let o=t,i=a[r+1];
!Number.isNaN(o)&&!Number.isNaN(i)&&e.push({
x:o,y:i})}return e},[]);
return r.length>0?{
points:r,svg:e}:null}let r=e.match(/d=['"]([^'"]+)['"]/i);
if(r){
let t=Ua(r[1]);
return t.length>0?{
points:t,svg:e}:null}return null},Ga=e=>Ia(e?.motivation).map(e=>"string"==typeof e?e:Fa(e)).filter(Boolean),Ka=e=>{
if(!e)return[];
if("string"==typeof e)return[{
type:"unknown",value:e}];
if("object"!=typeof e)return[];
let t=e;
if("SpecificResource"===t.type&&t.source){
let e=Ka(t.source);
return t.styleClass||t.style?e.map(e=>({
...e,styleClass:"string"==typeof t.styleClass?t.styleClass:e.styleClass,style:"string"==typeof t.style?t.style:e.style})):e}let r="string"==typeof t.format?t.format:void 0,a="string"==typeof t.language?t.language:void 0,o="string"==typeof t.type?t.type:"string"==typeof t["@type"]?t["@type"]:void 0,i="string"==typeof t.value?t.value:"string"==typeof t.chars?t.chars:"string"==typeof t["cnt:chars"]?t["cnt:chars"]:void 0;
if("TextualBody"===o||"Text"===o||"string"==typeof i)return[{
type:"text/html"===r||"application/html"===r?"html":"text",value:i??"",format:r,language:a,styleClass:"string"==typeof t.styleClass?t.styleClass:void 0,style:"string"==typeof t.style?t.style:void 0}];
if("Image"===t.type||"string"==typeof r&&r.startsWith("image/")){
let e=Fa(t);
return e?[{
type:"image",src:e,format:r,styleClass:"string"==typeof t.styleClass?t.styleClass:void 0,style:"string"==typeof t.style?t.style:void 0}]:[]}return[{
type:"unknown",value:"string"==typeof t.value?t.value:Fa(t),format:r,language:a,styleClass:"string"==typeof t.styleClass?t.styleClass:void 0,style:"string"==typeof t.style?t.style:void 0}]},qa=e=>Ia(e?.body??e?.resource??e?.item).flatMap(e=>Ka(e)),Ja=(e,t)=>{
let r=t.filter(e=>"text"===e.type||"html"===e.type).map(e=>{
let t=e.value??"";
return"html"===e.type?La(t):t}).filter(Boolean);
if(r.length>0)return r.join(" ");
let a=e,o=a?.label??a?.summary;
if("string"==typeof o)return o;
if(Array.isArray(o))return o.filter(Boolean).join(" ");
if(o&&"object"==typeof o){
let e=Object.values(o)[0];
if("string"==typeof e)return e;
if(Array.isArray(e))return e.filter(Boolean).join(" ")}},Ya=e=>{
let t,r,a=null,o=null,i=null,n=null,s=Ba(e),l=e=>{
e&&(a??=Ra(e),o??=Ha(e))};
if("string"==typeof e)return l(e),{
rect:a,time:o,point:i,polygon:n,targetId:s,targetStyleClass:t,targetStyle:r};
if(Array.isArray(e)){
for(let l of e){
let e=Ya(l);
a??=e.rect,o??=e.time,i??=e.point,n??=e.polygon,s||=e.targetId,t||=e.targetStyleClass,r||=e.targetStyle}return{
rect:a,time:o,point:i,polygon:n,targetId:s,targetStyleClass:t,targetStyle:r}}if("object"==typeof e&&e){
(e=>{
if(!e||"object"!=typeof e)return;
let a=e;
a.styleClass&&"string"==typeof a.styleClass&&(t=a.styleClass),a.style&&"string"==typeof a.style&&(r=a.style),s||=Ba(e)})(e);
let a=e,o=a?.selector??a?.selectors;
(e=>{
for(let t of e){
if(!t||"object"!=typeof t)continue;
let e=t;
if("PointSelector"===e.type){
let t=Number(e.x),r=Number(e.y);
!Number.isNaN(t)&&!Number.isNaN(r)&&(i??={
x:t,y:r})}"SvgSelector"===e.type&&"string"==typeof e.value&&(n??=Wa(e.value)),l(za(e))}})(Array.isArray(o)?o:o?[o]:[]),a?.fragment&&l(a.fragment)}return{
rect:a,time:o,point:i,polygon:n,targetId:s,targetStyleClass:t,targetStyle:r}},Xa=e=>{
if(!e||"object"!=typeof e)return[];
let t=e;
return Array.isArray(t.items)?t.items:Array.isArray(t.resources)?t.resources:[]},Za=(e,t,r)=>{
if(!e||"object"!=typeof e)return null;
let a=e,o=a?.target??a?.on,i=Ya(o),{
rect:n,time:s,point:l,polygon:d,targetId:c,targetStyleClass:p}=i,{
targetStyle:v}=i;
if("Annotation"===a.type&&o&&"object"==typeof o)try{
let e=Le.parseAnnotation(a);
c=e.canvasId||c,s=e.temporal?{
start:e.temporal.start,end:e.temporal.end}:s,"rect"===e.shape.type&&(n=e.shape.geometry),"point"===e.shape.type&&(l=e.shape.geometry),("polygon"===e.shape.type||"freehand"===e.shape.type)&&(d={
points:e.shape.geometry.points}),"line"===e.shape.type&&(d={
points:[e.shape.geometry.start,e.shape.geometry.end]}),p=e.layer||p}catch{
}let g=Ga(a),u=qa(a);
if(g.some(e=>"painting"===e||e.endsWith(":painting")||e.endsWith("/painting"))&&u.some(e=>"image"===e.type))return null;
let h=Ja(a,u),f=Va(a);
return t&&(c&&c!==t||!n&&!s&&!l&&!d&&c!==t)?null:{
id:Fa(a)||"anno-"+r.value++,rect:n??void 0,time:s??void 0,point:l??void 0,polygon:d??void 0,text:h,bodies:u,motivation:g.length>0?g:void 0,stylesheets:f.length>0?f:void 0,targetStyleClass:p,targetStyle:v}},Qa=(e,t,r)=>{
if(!e||"object"!=typeof e)return;
let a=e.getSequences();
if(!a||0===a.length)return;
let o=a[0].getCanvases();
if(o&&0!==o.length){
if(t){
let e=o.find(e=>e.id===t);
if(e)return e}return"number"==typeof r&&o[r]?o[r]:o[0]}},$a=(e,t,r)=>{
let a=Qa(e,t,r);
if(!a||"object"!=typeof a)return[];
let o=a,i=o.id||t,n=[],s={
value:0};
if("function"==typeof o.getAnnotations){
let e=o.getAnnotations();
for(let t of e){
let e=t,r="function"==typeof e.getItems?e.getItems():e.items||[];
for(let e of r){
let t=Za(e,i,s);
t&&n.push(t)}}}let l=a;
if("function"==typeof l.getProperty){
let e=l.getProperty("otherContent");
if(Array.isArray(e))for(let t of e){
let e=Xa(t);
for(let t of e){
let e=Za(t,i,s);
e&&n.push(e)}}}return n},eo=(e,t)=>{
let r=[],a={
value:0},o=Xa(e);
for(let e of o){
let o=Za(e,t,a);
o&&r.push(o)}return r},to=e=>{
if(!e||"object"!=typeof e)return!1;
let t=e;
if("function"==typeof t.getProperty){
let e=t.getProperty("otherContent");
if(Array.isArray(e))for(let t of e)if(t){
if("string"==typeof t)return!0;
if("object"==typeof t&&Fa(t)){
let e=t;
if(!Array.isArray(e.items)&&!Array.isArray(e.resources))return!0}}}return!1},no=class extends Error{
code;
cause;
constructor(e,t,r){
super(t),this.name="IIIFSearchError",this.code=e,r&&"cause"in r&&(this.cause=r.cause)}},ro=class extends no{
status;
url;
constructor(e,t){
super("HTTP_ERROR",`IIIF request failed with HTTP ${
e}: ${
t}`),this.name="IIIFSearchHttpError",this.status=e,this.url=t}},io=e=>null==e?[]:Array.isArray(e)?e:[e],ao=e=>"object"==typeof e&&!!e&&!Array.isArray(e),oo=e=>"string"==typeof e&&e.length>0?e:void 0,so=e=>"string"==typeof e?e:ao(e)?oo(e.id)??oo(e["@id"]):void 0,co=e=>{
if("string"==typeof e)return e;
if(Array.isArray(e))return e.find(e=>"string"==typeof e);
if(ao(e))for(let t of Object.values(e)){
let e=co(t);
if(e)return e}},lo=(e,t=1)=>{
if(!e)return t;
try{
let r=Number(new URL(e).searchParams.get("page"));
return Number.isInteger(r)&&r>=0?r:t}catch{
return t}},uo=(e,t)=>{
let r;
try{
r=new URL(e)}catch(t){
throw Error(`Invalid service URL: ${
e}`,{
cause:t})}for(let[e,a]of Object.entries(t))void 0!==a&&r.searchParams.set(e,String(a));
return r},fo="http://iiif.io/api/search/1/search",po="http://iiif.io/api/search/1/autocomplete",mo=e=>io(e.profile??e["@profile"]).flatMap(e=>{
if("string"==typeof e)return[e];
let t=so(e);
return t?[t]:[]}),ho=e=>{
let t=oo(e.type)??oo(e["@type"]);
return"SearchService2"===t?2:"SearchService1"===t||mo(e).includes(fo)?1:void 0},go=(e,t)=>{
let r=oo(e.type)??oo(e["@type"]);
return 2===t?"AutoCompleteService2"===r||"AutocompleteService2"===r:mo(e).includes(po)||"AutoCompleteService1"===r},_o=e=>{
if(!ao(e))return null;
let t="function"==typeof e.getProperty?e.getProperty("service")??e.getProperty("services"):e.service??e.services;
for(let e of io(t)){
if(!ao(e))continue;
let t,r=ho(e),a=so(e);
if(r&&a){
for(let a of io(e.service??e.services))if(ao(a)&&go(a,r)&&(t=so(a),t))break;
return t?{
searchServiceUrl:a,autocompleteServiceUrl:t,version:r}:{
searchServiceUrl:a,version:r}}}return null},vo=e=>{
let t=_o(e);
if(!t)throw new no("SERVICE_NOT_FOUND","No IIIF Content Search 1.0 or 2.0 service was found");
return t},yo=e=>"string"==typeof e?e:Array.isArray(e)?e.map(yo).filter(Boolean).join(" "):ao(e)?oo(e.value)??oo(e.chars)??oo(e["@value"])??"":"",bo=e=>{
if("string"==typeof e)return{
source:e};
if(!ao(e))return{
};
let t=so(e.source)??so(e)??oo(e.full);
return{
...t?{
source:t}:{
},selector:e.selector}},xo=e=>{
let{
source:t,selector:r}=bo(e),a=[t,...io(r).flatMap(e=>"string"==typeof e?[e]:ao(e)?[oo(e.value),so(e)].filter(e=>!!e):[])];
for(let e of a){
if(!e)continue;
let r=e.match(/(?:^|[#&?])xywh=(?:pixel:)?(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
if(!r)continue;
let a=(t??e).split("#")[0];
if(a)return{
canvasId:a,x:Number(r[1]),y:Number(r[2]),w:Number(r[3]),h:Number(r[4])}}},So=e=>{
if(!ao(e))return;
let t=so(e);
if(!t)return;
let r=yo(e.body??e.resource),a=co(e.label),o=xo(e.target??e.on);
return{
id:t,text:r,...a?{
label:a}:{
},...o?{
geometry:o}:{
}}},Co=e=>so(e),wo=(e,t)=>{
let r=so(e),a=Co(e.next),o=Co(e.prev),i=ao(e.partOf)?e.partOf:ao(e.within)?e.within:void 0,n=i?.total,s="number"==typeof n&&n>=0?n:t,l=lo(r,o?lo(o)+1:1),d=lo(i?Co(i.last):void 0,0);
return{
total:s,totalPages:d>0?d:a?Math.max(l+1,Math.ceil(s/Math.max(t,1))):l,currentPage:l,...a?{
nextPageUrl:a}:{
},...o?{
prevPageUrl:o}:{
}}},To=e=>{
if(!ao(e))return;
let t=oo(e.exact);
return t?`${
oo(e.prefix)??""}${
t}${
oo(e.suffix)??""}`:void 0},Eo=e=>{
let t=io(e.resources).map(So).filter(e=>!!e),r=new Map(t.map(e=>[e.id,e])),a=io(e.hits).filter(ao),o=a.length?a.map((e,t)=>{
let a=io(e.annotations).map(so).filter(e=>!!e).map(e=>r.get(e)).filter(e=>!!e),o=oo(e.match),i=io(e.selectors).map(To).find(Boolean),n=o??i??a.map(e=>e.text).join(" "),s=`${
oo(e.before)??""}${
n}${
oo(e.after)??""}`;
return{
id:so(e)??`hit-${
t+1}`,...s?{
matchText:s}:{
},annotations:a}}):t.map(e=>({
id:e.id,annotations:[e]}));
return{
...wo(e,o.length),hits:o}},Do=e=>{
let t=new Map;
for(let r of io(e.annotations))if(ao(r))for(let e of io(r.items)){
if(!ao(e))continue;
let r=e.target;
if(!ao(r))continue;
let a=so(r.source),o=io(r.selector).map(To).find(Boolean);
a&&o&&!t.has(a)&&t.set(a,o)}return t},Oo=e=>{
let t=Do(e),r=io(e.items).map(So).filter(e=>!!e).map(e=>{
let r=t.get(e.id);
return{
id:e.id,...r?{
matchText:r}:{
},annotations:[e]}});
return{
...wo(e,r.length),hits:r}},ko=e=>{
if(!ao(e))throw new no("INVALID_RESPONSE","Search response must be a JSON object");
if(Array.isArray(e.items)||"AnnotationPage"===e.type)return Oo(e);
if(Array.isArray(e.resources)||"sc:AnnotationList"===e["@type"])return Eo(e);
throw new no("INVALID_RESPONSE","Response is not a IIIF Content Search 1.0 or 2.0 result")},Ao=e=>{
if(!ao(e))throw new no("INVALID_RESPONSE","Autocomplete response must be a JSON object");
if(Array.isArray(e.terms))return e.terms.filter(ao).flatMap(e=>{
let t=oo(e.match);
if(!t)return[];
let r="number"==typeof e.count?e.count:void 0,a=oo(e.url),o=co(e.label);
return[{
match:t,...void 0===r?{
}:{
count:r},...a?{
url:a}:{
},...o?{
label:o}:{
}}]});
if(Array.isArray(e.items)||"TermPage"===e.type)return io(e.items).filter(ao).flatMap(e=>{
let t=oo(e.value);
if(!t)return[];
let r="number"==typeof e.total?e.total:void 0,a=co(e.label),o=oo(e.language),i=so(io(e.service).find(ao));
return[{
match:t,...void 0===r?{
}:{
count:r},...i?{
url:i}:{
},...a?{
label:a}:{
},...o?{
language:o}:{
}}]});
throw new no("INVALID_RESPONSE","Response is not a IIIF Content Search 1.0 or 2.0 autocomplete result")},jo=class e{
searchServiceUrl;
autocompleteServiceUrl;
fetcher;
constructor(e){
if(!e?.searchServiceUrl)throw new no("INVALID_CONFIGURATION","searchServiceUrl is required");
try{
new URL(e.searchServiceUrl)}catch(e){
throw new no("INVALID_CONFIGURATION","searchServiceUrl must be an absolute URL",{
cause:e})}if(e.autocompleteServiceUrl)try{
new URL(e.autocompleteServiceUrl)}catch(e){
throw new no("INVALID_CONFIGURATION","autocompleteServiceUrl must be an absolute URL",{
cause:e})}let t=e.fetcher??globalThis.fetch;
if(!t)throw new no("INVALID_CONFIGURATION","No fetch implementation is available");
this.searchServiceUrl=e.searchServiceUrl,this.autocompleteServiceUrl=e.autocompleteServiceUrl,this.fetcher=t.bind(globalThis)}static fromManifest(t,r={
}){
let a=vo(t);
return new e({
...a,...r})}hasAutocomplete(){
return!!this.autocompleteServiceUrl}async search(e){
if(!e?.q?.trim())throw new no("INVALID_CONFIGURATION","A non-empty search query is required");
return ko(await this.request(uo(this.searchServiceUrl,{
...e,q:e.q.trim()})))}async autocomplete(e){
if(!this.autocompleteServiceUrl)throw new no("AUTOCOMPLETE_UNAVAILABLE","This client has no autocomplete service");
let t="string"==typeof e?{
q:e}:e;
if(!t?.q?.trim())throw new no("INVALID_CONFIGURATION","A non-empty autocomplete query is required");
return Ao(await this.request(uo(this.autocompleteServiceUrl,{
...t,q:t.q.trim()})))}async request(e){
let t;
try{
t=await this.fetcher(e,{
headers:{
Accept:"application/json, application/ld+json"}})}catch(t){
throw new no("NETWORK_ERROR",`IIIF request failed: ${
e}`,{
cause:t})}if(!t.ok)throw new ro(t.status,e.toString());
try{
return await t.json()}catch(t){
throw new no("INVALID_RESPONSE",`IIIF response was not valid JSON: ${
e}`,{
cause:t})}}},Mo=(e,t)=>e?.id??`index-${
t}`,No=e=>e.motivation?.some(e=>"painting"===e||"sc:painting"===e)??!1,Po=e=>e.bodies?.some(e=>"image"===e.type)??!1,Fo=e=>!!(e.rect||e.point||e.polygon||e.time),Io=e=>!No(e)||!Po(e)&&Fo(e),Lo=null,Ro="http://iiif.io/api/search/0/search",zo=e=>{
let t=e.id??e["@id"];
return"string"==typeof t&&t?t:null},Bo=e=>"string"==typeof e?e===Ro:Array.isArray(e)?e.some(Bo):!(!e||"object"!=typeof e)&&zo(e)===Ro,Vo=e=>{
if(!e||"object"!=typeof e)return null;
let t=e,r=t.service??t.services,a=Array.isArray(r)?r:r?[r]:[];
for(let e of a){
if(!e||"object"!=typeof e)continue;
let t=e;
if(Bo(t.profile??t["@profile"]))return zo(t)}return null},Ho=(e,t)=>{
try{
return jo.fromManifest(e,{
fetcher:t})}catch(r){
let a=Vo(e);
if(!a)throw r;
return new jo({
searchServiceUrl:a,fetcher:t})}},Uo=e=>e.hits.flatMap(e=>e.annotations.map(t=>({
id:t.id,text:t.text||e.matchText||"",label:t.label,rect:t.geometry?{
x:t.geometry.x,y:t.geometry.y,w:t.geometry.w,h:t.geometry.h}:void 0,canvasId:t.geometry?.canvasId}))),Wo=async(e,t,r)=>{
if(Lo&&Lo.abort(),!t||!e)return void r.set([]);
let a=new AbortController;
Lo=a;
try{
let o=Uo(await Ho(e.json,(e,t)=>fetch(e,{
...t,signal:a.signal})).search({
q:t}));
if(Lo!==a)return;
r.set(o)}catch(e){
if(a.signal.aborted)return;
"SERVICE_NOT_FOUND"!==(e&&"object"==typeof e&&"code"in e?e.code:void 0)&&console.warn("[Mango IIIF Search] Search failed:",e),r.set([])}finally{
Lo===a&&(Lo=null)}},Go=({
manifestEntry:e,canvases:t,state:r})=>{
let a=X([e,t,r.selectedCanvasIndex,r.userAnnotations,r.externalAnnotations],([e,t,r,a,o])=>{
if(!e?.manifesto||0===t.length)return[];
let i=t[r],n=$a(e.manifesto,i?.id,r),s=Mo(i,r),l=a[s]??[];
return[...n,...o[s]??[],...l]}),o=X([e,t,r.userAnnotations,r.externalAnnotations],([e,t,r,a])=>0===t.length?[]:t.flatMap((t,o)=>{
let i=e?.manifesto?$a(e.manifesto,t.id,o):[],n=Mo(t,o);
return[...i,...a[n]??[],...r[n]??[]].map(e=>({
...e,canvasId:t.id}))})),i=X([r.searchQuery,r.showSearch,o,r.iiifSearchResults],([e,t,r,a])=>{
let o=e.trim().toLowerCase();
return t&&o?a.length>0?a:r.filter(e=>`${
e.label??""} ${
e.text??""}`.toLowerCase().includes(o)):[]}),n=X([r.showAnnotations,r.keepAnnotationsVisible,a,i,t,r.selectedCanvasIndex],([e,t,r,a,o,i])=>{
let n=r.filter(e=>Io(e));
if(e||t)return n;
if(0===a.length)return a;
let s=o[i];
return s?a.filter(e=>e.canvasId===s.id):[]}),s=X([i,r.selectedSearchResultId],([e,t])=>t&&e.some(e=>e.id===t)?[t]:e.map(e=>e.id));
return X([e,r.searchQuery,r.showSearch],([e,t,a])=>{
a?Wo(e,t.trim(),r.iiifSearchResults):r.iiifSearchResults.set([])}).subscribe(()=>{
}),{
annotations:a,searchHits:i,overlayAnnotations:n,highlightIds:s}},Ko=e=>e?Array.isArray(e)?e:[e]:[],qo=e=>"object"==typeof e&&e?e:null,Jo=(e,t)=>qo(e)?.[t],Yo=(e,t)=>{
let r=Jo(e,t);
return"function"==typeof r?r.call(e):void 0},Xo=e=>Zo(Jo(e,"id")??Jo(e,"@id"),"en"),Zo=(e,t)=>{
if(null==e)return"";
if("string"==typeof e||"number"==typeof e)return String(e);
if(Array.isArray(e)){
if(0===e.length)return"";
let r=e[0];
if(r&&"object"==typeof r&&"value"in r){
let a=e.find(e=>e?.locale===t||e?.language===t)||e.find(e=>"en"===e?.locale||"en"===e?.language)||e.find(e=>!e?.locale&&!e?.language)||r;
return Zo(a?.value??a,t)}return e.map(e=>Zo(e,t)).filter(Boolean).join(" ")}if("object"==typeof e){
if("value"in e)return Zo(e.value,t);
let r=e,a=t?.split("-")[0]??t;
if(t&&r[t])return Zo(r[t],t);
if(a&&r[a])return Zo(r[a],t);
if(r.en)return Zo(r.en,t);
let o=Object.keys(r)[0];
if(o)return Zo(r[o],t)}return String(e)},Qo=(e,t,r)=>{
let a=Jo(t,"metadata")??e?.getMetadata?.();
return Array.isArray(a)?a.map((t,a)=>{
let o=e?.getMetadata?.()?.[a],i=Jo(t,"label")??Yo(t,"getLabel")??Jo(o,"label")??Yo(o,"getLabel"),n=Jo(t,"value")??Yo(t,"getValue")??Jo(o,"value")??Yo(o,"getValue"),s=Zo(i,r),l=Zo(n,r);
return s||l?{
label:s,value:l}:null}).filter(e=>null!==e):[]},$o=(e,t,r)=>Zo(Jo(t,"label")??e?.getLabel?.(),r),es=(e,t,r)=>Zo(Jo(t,"summary")??Jo(t,"description")??e?.getDescription?.(),r),ts=(e,t,r)=>{
let a=e?.getRequiredStatement?.(),o=Jo(t,"requiredStatement"),i=Jo(o,"label")??Yo(a,"getLabel")??Jo(a,"label"),n=Jo(o,"value")??Yo(a,"getValue")??Jo(a,"value")??a??Jo(t,"attribution");
return{
label:Zo(i,r),value:Zo(n,r)}},ns=(e,t,r)=>Zo(e?.getLicense?.()??Jo(t,"license")??Jo(t,"rights"),r),rs=(e,t,r)=>Ko(Jo(t,"provider")??e?.getProviders?.()).map(e=>{
let t=Xo(e),a=Zo(Jo(e,"label")??Yo(e,"getLabel"),r);
if(!t&&!a)return null;
let o=Ko(Jo(e,"homepage"))[0],i=Ko(Jo(e,"logo"))[0],n=Ko(Jo(e,"seeAlso"))[0],s={
id:t,label:a};
if(o){
let e=Zo(Jo(o,"format"),r);
s.homepage={
id:Xo(o),label:Zo(Jo(o,"label"),r),...e?{
format:e}:{
}}}if(i&&(s.logo={
id:Xo(i),..."number"==typeof Jo(i,"width")?{
width:Jo(i,"width")}:{
},..."number"==typeof Jo(i,"height")?{
height:Jo(i,"height")}:{
}}),n){
let e=Zo(Jo(n,"format"),r),t=Zo(Jo(n,"profile"),r);
s.seeAlso={
id:Xo(n),label:Zo(Jo(n,"label"),r),...e?{
format:e}:{
},...t?{
profile:t}:{
}}}return s}).filter(e=>null!==e),is=(e,t,r)=>{
let a=Ko(Jo(Jo(t,"navPlace")??e?.navPlace,"features"))[0],o=Jo(a,"geometry"),i=Jo(o,"coordinates"),[n,s]=Array.isArray(i)?i:[];
return"Point"!==Jo(o,"type")||"number"!=typeof s||"number"!=typeof n?null:{
label:Zo(Jo(Jo(a,"properties"),"label"),r),lat:s,lng:n}},as=e=>{
if(e?.av?.preferredLanguages?.length)return e.av.preferredLanguages;
let t=e?.language?.trim(),r=typeof navigator<"u"?navigator.language?.trim():void 0;
return Array.from(new Set([t,r,"en","none"].filter(Boolean)))},os=e=>({
...e?.av,controls:{
navigation:!1,autoAdvance:!1,...e?.av?.controls},audioArt:{
transcript:!0,visualizer:"pulse",...e?.av?.audioArt},preferredLanguages:as(e)}),ss=(e,t)=>{
let r=t?.toLowerCase()??"",a=e.toLowerCase().split(/[?#]/)[0]??"";
return r.startsWith("text/")||"application/json"===r||/\.(?:vtt|srt|txt|json)$/.test(a)},cs=e=>{
for(let t of e.canvases){
let e=new Set(t.transcripts.map(e=>e.id));
for(let r of t.rendering)e.has(r.id)||!ss(r.id,r.format)||(t.transcripts.push({
id:r.id,src:r.id,label:r.label,...r.format?{
format:r.format}:{
},machineGenerated:!1}),e.add(r.id))}},ls=(e,t)=>({
type:e.kind,id:e.id,src:e.src,...e.format?{
format:e.format}:{
},...null==e.width?{
}:{
width:e.width},...null==e.height?{
}:{
height:e.height},...null==(e.duration??t.duration)?{
}:{
duration:e.duration??t.duration},...t.poster?{
poster:t.poster}:{
},...e.label?{
label:e.label}:{
}}),us=e=>{
let t=new Ye(os(Q(e.config))),r=Z(void 0),a=Z(void 0),o=[],i=0,n=!1,s=!1;
return o.push(e.config.subscribe(e=>t.configure(os(e)))),o.push(e.selectedCanvasIndex.subscribe(e=>{
let r=t.manifest;
!r||e<0||e>=r.canvases.length||t.state.canvasIndex!==e&&t.selectCanvas(e)})),o.push(e.selectedMediaIndex.subscribe(e=>{
let r=t.canvas;
!r||e<0||e>=r.sources.length||t.state.sourceIndex!==e&&t.selectSource(e)})),o.push(t.on("av-ready",({
detail:e})=>{
r.set(e.manifest),a.set(void 0)}),t.on("av-error",({
detail:e})=>a.set(e.error)),t.on("av-canvaschange",({
detail:t})=>{
s||Q(e.selectedCanvasIndex)!==t.canvasIndex&&e.selectedCanvasIndex.set(t.canvasIndex)}),t.on("av-sourcechange",({
detail:t})=>{
Q(e.selectedMediaIndex)!==t.sourceIndex&&e.selectedMediaIndex.set(t.sourceIndex)})),{
controller:t,manifest:r,error:a,load:async o=>{
let l=++i;
r.set(void 0),a.set(void 0);
let d=Q(e.selectedCanvasIndex);
s=!0;
try{
let e=await t.load(o);
return cs(e),n||l!==i?void 0:(r.set(e),d>0&&d<e.canvases.length&&t.state.canvasIndex!==d&&t.selectCanvas(d),e)}catch(e){
if(n||l!==i)return;
let t=e instanceof Error?e:Error(String(e));
return void a.set(t)}finally{
s=!1}},reset:()=>{
i+=1,t.stop(),r.set(void 0),a.set(void 0)},destroy:()=>{
n=!0,i+=1;
for(let e of o)e();
t.destroy()}}},ds=e=>e,fs={
image:async()=>ds(await import("./ImageRenderer-qAphX_7o.js")),video:async()=>ds(await import("./AVRenderer-RSqYgABN.js")),audio:async()=>ds(await import("./AVRenderer-RSqYgABN.js")),pdf:async()=>ds(await import("./PdfRenderer-C1Id5Xhw.js")),model:async()=>ds(await import("./ModelRenderer-B90Gm2ol.js"))},ps=e=>e?.language?e.language:typeof navigator<"u"&&navigator.language?navigator.language:"en",ms=e=>e.split("-")[0]||e,hs=e=>e?Array.isArray(e)?e:[e]:[],gs=e=>{
if(!e)return!1;
let t="http://iiif.io/api/search/0/search";
return"string"==typeof e?e===t:Array.isArray(e)?e.some(e=>gs(e)):"object"==typeof e&&(e.id??e["@id"])===t},_s=e=>{
if(!e||"object"!=typeof e)return!1;
let t,r=e;
return t="function"==typeof r.getProperty?hs(r.getProperty.call(e,"service")??r.getProperty.call(e,"services")):hs(r.service??r.services),t.some(e=>{
if(!e||"object"!=typeof e)return!1;
let t=e;
return gs(t.profile??t["@profile"])})},vs=(e,t)=>{
if(!e||0===t.length)return!1;
let r=Re(e);
return t.some((t,a)=>{
if($a(e,t.id,t.index).length>0)return!0;
let o=r[a];
return!(!o||!to(o))})},ys=(e,t)=>{
if(!e||t.length<2)return!1;
let r=0;
for(let a of t){
let t=Te(e,a.id,a.index);
if(t.primary){
if("image"!==t.primary.type)return!1;
r+=1}}return r>0},bs=e=>{
let t=us(e),r=X([Fe,e.manifestId],([e,t])=>t?e[t]:void 0),a=X([Fe,e.collectionId],([e,t])=>t?e[t]:void 0),o=X(r,e=>e?.canvases??[]),i=X(e.config,e=>ps(e)),n=X(i,e=>ms(e)),s=X([r,o],([e,t])=>e?.manifesto&&0!==t.length?t.map(t=>De(e.manifesto,t.id,t.index)):[]),l=X([r,o,e.selectedCanvasIndex,t.manifest],([e,t,r,a])=>{
if(!e?.manifesto||0===t.length)return[];
let o=t[r],i=a?.canvases.find(e=>e.id===o?.id);
if(i?.sources.length)return i.sources.map(e=>ls(e,i));
let n=Te(e.manifesto,o?.id,r);
return n.primary?[n.primary,...n.alternates]:[]}),d=X([r,o,e.selectedCanvasIndex,e.layoutMode],([e,t,r,a])=>{
if(!e?.manifesto||0===t.length)return[];
let o=r=>{
let a=t[r];
if(!a)return null;
let o=Te(e.manifesto,a.id,r);
return o.primary?{
source:o.primary,layers:o.alternates,index:r,id:a.id,width:a.width||o.primary.width||1e3,height:a.height||o.primary.height||1500}:null};
if("two-page"===a){
if(0===r){
let e=o(0);
return e?[e]:[]}let e=r%2==1?r:r-1,t=e+1,a=o(e),i=o(t),n=[];
return a&&n.push(a),i&&n.push(i),n}if("continuous"===a){
let e=[];
for(let r=0;
r<t.length;
r++){
let t=o(r);
t&&e.push(t)}return e}let i=o(r);
return i?[i]:[]}),c=X([l,e.selectedMediaIndex],([e,t])=>e[t]??null),p=X(c,e=>e?.type??null),v=X(p,(e,t)=>{
let r=!1;
return t(null),e&&fs[e]().then(e=>{
r||t(e.default)}),()=>{
r=!0}},null),{
annotations:g,searchHits:u,overlayAnnotations:h,highlightIds:f}=Go({
manifestEntry:r,canvases:o,state:e}),w=X(t.manifest,e=>(e?.chapters.length??0)>0),b=X([t.manifest,o,e.selectedCanvasIndex],([e,t,r])=>{
let a=t[r]?.id;
return!(!e||!a)&&!!e.canvases.find(e=>e.id===a)?.transcripts.length}),m=X([w,b,p],([e,t,r])=>("audio"===r||"video"===r)&&(e||t)),x=X([e.showContents,m],([e,t])=>e&&t),y=X(r,e=>_s(e?.manifesto??e?.json)),_=X([r,o],([e,t])=>vs(e?.manifesto,t)),k=X([r,o],([e,t])=>ys(e?.manifesto,t)),z=X([e.config,k],([e,t])=>!1!==e?.showThumbnails&&t),I=X([e.config,a],([e,t])=>!1!==e?.showCollection&&"collection"===t?.resourceType&&!!t.json),C=X(e.config,e=>!1!==e?.showMetadata),j=X([e.config,y],([e,t])=>!1!==e?.showSearch&&t),M=X([e.config,_],([e,t])=>!1!==e?.showAnnotations&&(t||!0===e?.allowCreateMode)),S=X([e.config,p],([e,t])=>!1!==e?.showTools&&"image"===t),A=X([e.config,l],([e,t])=>!1!==e?.showLayers&&t.length>1&&t.every(e=>"image"===e.type)),q=X([Na,e.plugins],([e,t])=>{
let r=new Map;
for(let a of[...e,...t])a?.id&&r.set(a.id,a);
let a=Array.from(r.values());
return{
top:a.filter(e=>"top"===e.slot),left:a.filter(e=>"left"===e.slot),right:a.filter(e=>"right"===e.slot),bottom:a.filter(e=>"bottom"===e.slot),overlay:a.filter(e=>"overlay"===e.slot)}});
return{
av:t,manifestEntry:r,collectionEntry:a,canvases:o,canvasThumbnails:s,mediaSources:l,mediaSource:c,mediaType:p,rendererComponent:v,annotations:g,overlayAnnotations:h,searchHits:u,highlightIds:f,avChaptersAvailable:w,avTranscriptAvailable:b,contentsAvailable:m,contentsVisible:x,searchAvailable:y,annotationsAvailable:_,galleryAvailable:k,pluginSlots:q,leftVisible:X([e.showCollection,I,e.showSearch,j,e.showAnnotations,M,x,e.showMetadata,e.showTools,e.showSettings,S,e.showLayers,A,q],([e,t,r,a,o,i,n,s,l,d,c,p,v,g])=>e&&t||r&&a||o&&i||n||s||d||l&&c||p&&v||g.left.length>0),rightVisible:X(q,e=>e.right.length>0),manifestTitle:X([r,n],([e,t])=>$o(e?.manifesto,e?.json,t)),manifestDescription:X([r,n],([e,t])=>es(e?.manifesto,e?.json,t)),manifestAttribution:X([r,n],([e,t])=>ts(e?.manifesto,e?.json,t)),manifestLicence:X([r,n],([e,t])=>ns(e?.manifesto,e?.json,t)),manifestMetadata:X([r,n],([e,t])=>Qo(e?.manifesto,e?.json,t)),manifestProviders:X([r,n],([e,t])=>rs(e?.manifesto,e?.json,t)),manifestGeoLocation:X([r,n],([e,t])=>is(e?.manifesto,e?.json,t)),uiLocale:i,metadataLocale:n,allowThumbnails:z,allowCollection:I,allowMetadata:C,allowSearch:j,allowAnnotations:M,allowTools:S,allowLayers:A,viewBox:X(e.viewBox,e=>e),activeLayoutImages:d}},xs=()=>{
let e=new Map;
return{
on:(t,r)=>{
let a=e.get(t)??new Set;
return a.add(r),e.set(t,a),()=>{
a.delete(r)}},off:(t,r)=>{
e.get(t)?.delete(r)},emit:(t,r)=>{
let a=e.get(t);
if(a)for(let e of a)e(r)}}},Ss=(e,t)=>t?Q(e.annotations).find(e=>e.id===t)??null:null,Cs=({
state:e,derived:t,emitEvent:r})=>({
handleAnnotationHover:a=>{
e.hoverAnnotationId.set(a.id),r("annotationHover",{
id:a.id,annotation:Ss(t,a.id)})},handleAnnotationSelect:a=>{
e.activeAnnotationId.set(a.id),e.hoverAnnotationId.set(null),r("annotationSelect",{
id:a.id,annotation:Ss(t,a.id),preventZoom:a.preventZoom})},handleAnnotationClear:()=>{
e.activeAnnotationId.set(null),e.hoverAnnotationId.set(null),r("annotationClear",void 0)}}),ws=e=>e?Array.isArray(e)?e:[e]:[],Ts=e=>"object"==typeof e&&e?e:null,Es=(e,t,...r)=>{
let a=Ts(e)?.[t];
return"function"==typeof a?a.apply(e,r):void 0},Ds=e=>{
if(!e)return"";
if("string"==typeof e)return e;
let t=Ts(e),r=t?.id??t?.["@id"];
return"string"==typeof r?r:""},Os=e=>{
if(!e)return[];
let t=[],r=[],a=Ts(e);
if("function"==typeof a?.getAnnotations){
let t=Es(e,"getAnnotations");
Array.isArray(t)&&r.push(...t)}if("function"==typeof a?.getProperty){
let t=Es(e,"getProperty","otherContent");
t&&r.push(...ws(t))}0===r.length&&(r=[...ws(a?.annotations),...ws(a?.otherContent)]);
for(let e of r){
if(!e)continue;
if("string"==typeof e){
t.push(e);
continue}let r=Ds(e);
if(!r)continue;
let a=!1,o=Ts(e);
if("function"==typeof o?.getItems){
let t=Es(e,"getItems");
a=Array.isArray(t)&&t.length>0}else a=Array.isArray(o?.items)||Array.isArray(o?.resources);
a||t.push(r)}return t},ks=(e=fetch)=>{
let t=new Map,r=new Set,a=new Map,o=new Map,i=0;
return{
load:async(n,s,l)=>{
if(!n)return[];
let d=Os(n),c=d.join("|"),p=o.get(s);
if(a.get(s)===c&&p)return p;
if(a.set(s,c),o.set(s,[]),0===d.length)return[];
let v=++i,g=await Promise.all(d.map(async a=>{
let o=`${
l??""}::${
a}`,i=t.get(o);
if(i)return i;
if(r.has(o))return[];
r.add(o);
try{
let r=await e(a);
if(!r.ok)return console.warn("[Mango ExternalAnnotations] Failed to fetch annotation page",a,"- status:",r.status),[];
let i=eo(await r.json(),l);
return t.set(o,i),i}catch(e){
return console.warn("[Mango ExternalAnnotations] Failed to load annotation page",a,e),[]}finally{
r.delete(o)}}));
if(v!==i)return o.get(s)??[];
let u=g.flat();
return o.set(s,u),u},getForKey:e=>o.get(e),clear:()=>{
t.clear(),r.clear(),a.clear(),o.clear(),i=0}}},As=(e,t)=>e||`index-${
t}`,js=(e,t,r)=>({
...e,[t]:r}),Ms=e=>{
if(typeof document>"u")return null;
if(e&&"getRootNode"in e){
let t=e.getRootNode();
if(t instanceof ShadowRoot)return t}return document.head},Ns=({
state:e,derived:t,getEventTarget:r})=>{
let a=ks(),o=new Set,i=[],n=async e=>{
await Promise.all(e.map(e=>(async e=>{
if(o.has(e))return;
let t=Ms(r());
if(t){
o.add(e);
try{
let r=await fetch(e);
if(!r.ok)throw Error(`HTTP ${
r.status}`);
let a=await r.text(),o=document.createElement("style");
o.setAttribute("data-annotation-stylesheet",e),o.textContent=a,t.appendChild(o)}catch(t){
o.delete(e),console.warn("Failed to load annotation stylesheet",e,t)}}})(e)))},s=X([t.manifestEntry,t.canvases,e.selectedCanvasIndex],([t,r,o])=>{
if(!t?.manifesto||0===r.length)return;
let i=r[o],n=Oe(t.manifesto,i?.id,o),s=As(i?.id??null,o);
a.load(n,s,i?.id).then(t=>{
e.externalAnnotations.update(e=>js(e,s,t))}).catch(e=>{
console.error("[Mango ExternalAnnotationEffects] Error loading external annotations:",e)})});
return i.push(s.subscribe(()=>{
})),i.push(t.annotations.subscribe(e=>{
let t=new Set;
for(let r of e)for(let e of r.stylesheets??[])t.add(e);
t.size>0&&n(Array.from(t))})),{
destroy:()=>{
a.clear();
for(let e of i)e()},reset:()=>{
a.clear()}}},Ps=({
state:e,derived:t,emitEvent:r,emitStateChange:a,preserveViewport:o=!1})=>{
let i="",n=-1,s=r=>{
let a=Q(t.canvases);
r<0||r>=a.length||e.selectedCanvasIndex.set(r)};
return{
getCanvasIndex:()=>Q(e.selectedCanvasIndex),getCanvasId:()=>Q(t.canvases)[Q(e.selectedCanvasIndex)]?.id??null,getCanvasCount:()=>Q(t.canvases).length,setCanvasByIndex:s,setCanvasById:e=>{
let r=Q(t.canvases).findIndex(t=>t.id===e);
r>=0&&s(r)},setupCanvasEffects:()=>{
let s=[],l=X([t.canvases,e.selectedCanvasIndex],([t,r])=>{
t.length>0&&r>=t.length&&e.selectedCanvasIndex.set(0)});
s.push(l.subscribe(()=>{
}));
let d=X([t.canvases,e.selectedCanvasIndex],([t,s])=>{
let l=t[s],d=l?.id??"";
if(d&&(d!==i||s!==n)){
let t=!i;
i=d,n=s,t||(e.selectedMediaIndex.set(0),e.layerOpacities.set({
}),o||(e.viewBox.set(null),e.zoom.set(0),e.rotation.set(0),e.imageFilters.set({
...Gi})),e.activeAnnotationId.set(null),e.hoverAnnotationId.set(null),e.mediaTime.set(0),e.mediaDuration.set(void 0)),r("pageChange",{
canvasId:d,index:s,label:l?.label}),a()}});
return s.push(d.subscribe(()=>{
})),s}}},Fs=({
state:e,derived:t,emitEvent:r,emitStateChange:a,getCanvasId:o})=>{
let i="";
return{
handleMediaPlay:e=>{
let t=o();
t&&r("mediaPlay",{
canvasId:t,time:e.time})},handleMediaPause:e=>{
let t=o();
t&&r("mediaPause",{
canvasId:t,time:e.time})},handleMediaTimeUpdate:t=>{
e.mediaTime.set(t.time),null!=t.duration&&e.mediaDuration.set(t.duration);
let a=o();
a&&r("mediaTimeUpdate",{
canvasId:a,...t})},handleMediaSeek:t=>{
e.mediaTime.set(t.to);
let a=o();
a&&r("mediaSeek",{
canvasId:a,...t})},handleMediaSegmentEnd:()=>{
let e=o();
e&&r("mediaSegmentEnd",{
canvasId:e})},handleModelChange:e=>{
let t=o();
t&&r("modelChange",{
canvasId:t,...e})},getMediaLabel:(e,t)=>"string"==typeof e.label&&e.label.trim()?e.label:e.format?e.format:t(`media.type.${
e.type}`),getMediaTypeLabel:(e,t)=>t(e?`media.type.${
e}`:"common.emptyValue"),setupMediaEffects:()=>{
let o=[],n=X([t.mediaSources,e.selectedMediaIndex],([t,r])=>{
t.length>0&&r>=t.length&&e.selectedMediaIndex.set(0),0===t.length&&0!==r&&e.selectedMediaIndex.set(0)});
o.push(n.subscribe(()=>{
}));
let s=X([t.mediaSource,t.mediaType,t.canvases,e.selectedCanvasIndex],([t,o,n,s])=>{
let l=t?`${
t.type}:${
t.src}`:"";
if(l&&l!==i){
i=l,e.viewBox.set(null),e.zoom.set(0),e.mediaTime.set(0),e.mediaDuration.set(void 0);
let t=n[s];
t?.id&&o&&(r("mediaChange",{
canvasId:t.id,mediaType:o}),a())}else l||(i="")});
return o.push(s.subscribe(()=>{
})),o}}},Is=(e,t)=>e||`index-${
t}`,Ls=(e,t,r)=>({
...e,[t]:r}),Rs=(e,t)=>t?Q(e.annotations).find(e=>e.id===t)??null:null,zs=({
state:e,derived:t,emitEvent:r,emitStateChange:a,getCanvasId:o,getCanvasIndex:i,setCanvasById:n,setPendingViewBox:s,applyViewBox:l})=>{
let d=t=>{
let n=Is(o(),i()),s={
...t,id:t.id||`user-${
Date.now()}-${
Math.random().toString(16).slice(2,8)}`};
e.userAnnotations.update(e=>{
let t=e[n]??[];
return Ls(e,n,[...t,s])}),r("addAnnotation",{
annotation:s}),r("annotationCreate",{
annotation:s}),a()};
return{
addAnnotation:async e=>{
let t=(e=>{
if(!e||"object"!=typeof e)return null;
let t=e;
if(t.rect||t.time||t.point||t.polygon)return{
id:t.id??"",rect:t.rect,time:t.time,point:t.point,polygon:t.polygon,text:t.text,label:t.label,notes:t.notes,tags:t.tags,bodies:t.bodies,motivation:t.motivation,stylesheets:t.stylesheets,targetStyleClass:t.targetStyleClass,targetStyle:t.targetStyle};
if("number"==typeof t.x&&"number"==typeof t.y&&"number"==typeof t.w&&"number"==typeof t.h)return{
id:t.id??"",rect:{
x:t.x,y:t.y,w:t.w,h:t.h},text:t.text};
if(t.target&&"object"==typeof t.target){
let e=t,r=oa(e);
if(!r)return null;
let a=Array.isArray(e.body)&&e.body[0]&&"object"==typeof e.body[0]?e.body[0].value??"":"";
return{
...r,text:r.text??a}}return null})(e);
t&&d(t)},updateAnnotation:async(t,o)=>{
e.userAnnotations.update(e=>{
let r={
};
for(let[a,i]of Object.entries(e))r[a]=i.map(e=>e.id===t?{
...e,...o,bodies:void 0===o.text?e.bodies:[{
type:"text",value:o.text}]}:e);
return r}),r("annotationUpdate",{
annotationId:t,patch:o}),a()},removeAnnotation:async t=>{
e.userAnnotations.update(e=>{
let r={
};
for(let[a,o]of Object.entries(e))r[a]=o.filter(e=>e.id!==t);
return r}),r("removeAnnotation",{
annotationId:t}),r("annotationDelete",{
annotationId:t}),a()},setAnnotationMode:t=>{
e.annotationMode.set(t)},setSearchQuery:t=>{
e.selectedSearchResultId.set(null),e.searchQuery.set(t)},handleSearchResultClick:a=>{
let o=a;
e.selectedSearchResultId.set(o.id);
let i=null;
if(o.rect){
let t=Cn(o,Q(e.viewBox));
t&&(i=wn(t,.15))}o.canvasId?Q(t.canvases)[Q(e.selectedCanvasIndex)]?.id===o.canvasId?i&&(e.viewBox.set(i),l(i),r("viewBoxChange",{
viewBox:i})):(s(i),n(o.canvasId)):i&&(e.viewBox.set(i),l(i),r("viewBoxChange",{
viewBox:i})),o.id&&setTimeout(()=>{
e.activeAnnotationId.set(o.id),r("annotationSelect",{
id:o.id,annotation:Rs(t,o.id)})},50)}}},Bs=({
state:e,derived:t,emitEvent:r,emitStateChange:a,initialOpen:o=!0,initialActivePanel:i="metadata"})=>{
let n=["collection","contents","annotations","tools","settings","search","metadata","layers"],s=n.includes(i)?i:"metadata",l=s,d=o,c={
collection:e.showCollection,contents:e.showContents,annotations:e.showAnnotations,tools:e.showTools,search:e.showSearch,metadata:e.showMetadata,settings:e.showSettings,layers:e.showLayers},p=e=>"thumbnails"!==e,v=r=>{
if(!1===Q(e.config)?.sidebar?.enabled)return!1;
switch(r){
case"collection":return Q(t.allowCollection);
case"contents":return Q(t.contentsAvailable);
case"annotations":return Q(t.allowAnnotations);
case"tools":return Q(t.allowTools);
case"search":return Q(t.allowSearch);
case"metadata":return Q(t.allowMetadata);
case"layers":return Q(t.allowLayers);
case"settings":return!1!==Q(e.config)?.showSettings;
default:return!1}},g=(e,t=!0)=>{
let r=((e,t=!0)=>e&&p(e)&&v(e)?e:n.find(e=>{
let t=c[e];
return!!t&&Q(t)&&v(e)})||(t?n.find(e=>v(e))??null:null))(e,t);
n.forEach(e=>{
let t=c[e];
if(!t)return;
let a=r===e;
Q(t)!==a&&t.set(a)}),r&&p(r)&&(l=r)};
return o&&v(s)?(g(s),d=!1):g(null,!1),{
setPanelOpen:(t,o)=>{
if("thumbnails"===t)e.showThumbnails.set(o);
else if(p(t)){
let e=c[t];
o?(l=t,g(t)):e&&e.set(!1)}r("panelToggle",{
panel:t,open:o}),a()},setupPanelEffects:()=>{
let e=[];
n.forEach(t=>{
let r=c[t];
r&&e.push(r.subscribe(e=>{
e&&l!==t&&(l=t,g(t))}))});
let r=X([t.allowCollection,t.allowAnnotations,t.allowSearch,t.allowMetadata,t.allowTools,t.contentsAvailable,t.allowLayers],()=>{
if(d&&v(s))return g(s,!1),void(d=!1);
g(n.some(e=>{
let t=c[e];
return!!t&&Q(t)})?l:null,!1)});
return e.push(r.subscribe(()=>{
})),e}}},Vs=({
state:e,emitEvent:t,applyViewBox:r})=>{
let a=null;
return{
handleViewBoxChange:o=>{
if(a){
let o=a;
return a=null,void setTimeout(()=>{
e.viewBox.set(o),r(o),t("viewBoxChange",{
viewBox:o})},100)}e.viewBox.set(o.viewBox),t("viewBoxChange",o)},handleZoomChange:r=>{
e.zoom.set(r.zoom),t("zoomChange",r)},handleRotationChange:r=>{
e.rotation.set(r.rotation),t("rotationChange",r)},updateImageFilter:(t,r)=>{
e.imageFilters.update(e=>({
...e,[t]:r}))},resetImageFilters:()=>{
e.imageFilters.set({
...Gi})},setPendingViewBox:e=>{
a=e},getPendingViewBox:()=>a,setRotation:t=>{
e.rotation.set(t)},getRotation:()=>Q(e.rotation)}},Hs=(e,{
resetViewport:t})=>{
t&&(e.selectedCanvasIndex.set(0),e.viewBox.set(null),e.zoom.set(0),e.rotation.set(0),e.layoutMode.set("single")),e.selectedMediaIndex.set(0),e.layerOpacities.set({
}),e.searchQuery.set(""),e.selectedSearchResultId.set(null),e.iiifSearchResults.set([]),e.imageFilters.set({
...Gi}),e.annotationMode.set("edit"),e.activeAnnotationId.set(null),e.hoverAnnotationId.set(null),e.mediaTime.set(0),e.mediaDuration.set(void 0),e.externalAnnotations.set({
}),e.userAnnotations.set({
})},Us=({
state:e,derived:t,dispatch:r,applyViewBox:a=()=>{
}})=>{
let o=xs(),i=null,n=[],s="",l="",d="",c="",p=(e,t)=>{
o.emit(e,t),r(e,t),i&&i.dispatchEvent(new CustomEvent(e,{
detail:t,bubbles:!0,composed:!0}))},v=()=>{
p("stateChange",{
snapshot:g()})},g=()=>{
let r=Q(t.canvases),a=Q(e.selectedCanvasIndex),o=r[a];
return{
manifestId:Q(e.manifestId),canvasId:o?.id??null,canvasIndex:a,canvasLabel:o?.label,canvases:r.map(e=>({
id:e.id,label:e.label,index:e.index})),mediaType:Q(t.mediaType),viewBox:Q(e.viewBox),zoom:Q(e.zoom),searchQuery:Q(e.searchQuery),annotationCount:Q(t.annotations).length,layerOpacities:Q(e.layerOpacities)}},u=Vs({
state:e,emitEvent:p,applyViewBox:a}),h=Ps({
state:e,derived:t,emitEvent:p,emitStateChange:v,preserveViewport:Q(e.config)?.osd?.preserveViewport??!1}),f=Fs({
state:e,derived:t,emitEvent:p,emitStateChange:v,getCanvasId:h.getCanvasId}),w=zs({
state:e,derived:t,emitEvent:p,emitStateChange:v,getCanvasId:h.getCanvasId,getCanvasIndex:h.getCanvasIndex,setCanvasById:h.setCanvasById,setPendingViewBox:u.setPendingViewBox,applyViewBox:a}),b=Bs({
state:e,derived:t,emitEvent:p,emitStateChange:v,initialOpen:!1!==Q(e.config)?.sidebar?.enabled&&!1!==Q(e.config)?.sidebar?.open,initialActivePanel:Q(e.config)?.sidebar?.activePanel}),m=Cs({
state:e,derived:t,emitEvent:p}),x=Ns({
state:e,derived:t,getEventTarget:()=>i});
n.push(...h.setupCanvasEffects()),n.push(...f.setupMediaEffects()),n.push(...b.setupPanelEffects()),n.push(e.manifestId.subscribe(r=>{
if(r&&we(r).then(()=>{
let a=Q(t.manifestEntry);
a?.id===r&&"collection"===a.resourceType&&Q(e.manifestId)===r&&(e.collectionId.set(r),b.setPanelOpen("collection",!0))}),r&&r!==s){
let a=!s;
s=r,l="",Hs(e,{
resetViewport:!a}),t.av.reset(),x.reset(),p("manifestChange",{
manifestId:r}),v()}})),n.push(e.config.subscribe(t=>{
let r=JSON.stringify(t??{
});
if(r===c)return;
c=r;
let a=!1!==t?.showThumbnails,o=!1!==t?.showMetadata,i=!1!==t?.showSearch,n=!1!==t?.showAnnotations,s=!1!==t?.showTools;
!1===t?.sidebar?.enabled&&(e.showCollection.set(!1),e.showContents.set(!1),e.showAnnotations.set(!1),e.keepAnnotationsVisible.set(!1),e.showTools.set(!1),e.showSettings.set(!1),e.showSearch.set(!1),e.showMetadata.set(!1),e.showLayers.set(!1)),a||e.showThumbnails.set(!1),!1===t?.showCollection&&e.showCollection.set(!1),o||e.showMetadata.set(!1),i||e.showSearch.set(!1),n||(e.showAnnotations.set(!1),e.keepAnnotationsVisible.set(!1)),!1===t?.showSettings&&e.showSettings.set(!1),t&&Object.prototype.hasOwnProperty.call(t,"showTools")?e.showTools.set(!1!==t.showTools):s||e.showTools.set(!1)}));
let y="",_="";
return n.push(t.manifestEntry.subscribe(r=>{
if(r?.error&&r.error!==l&&(l=r.error,p("error",{
scope:"manifest",message:r.error})),r?.manifesto&&r.id!==y){
y=r.id;
let t=r.manifesto.getViewingHint?.()?.toString(),a=r.manifesto.getProperty?.("behavior"),o=Array.isArray(a)?a:[a].filter(Boolean),i="single";
"paged"===t||o.includes("paged")?i="two-page":("continuous"===t||o.includes("continuous"))&&(i="continuous"),Q(e.config)?.initialLayoutMode||e.layoutMode.set(i)}r?.json&&"collection"!==r.resourceType&&r.id!==_&&(_=r.id,t.av.load(r.json))})),n.push(e.searchQuery.subscribe(e=>{
e!==d&&(d=e,v())})),n.push(t.uiLocale.subscribe(e=>ve(e))),{
events:o,on:o.on,off:o.off,emitEvent:p,emitStateChange:v,setEventTarget:e=>{
i=e},getStateSnapshot:g,getCanvasIndex:h.getCanvasIndex,getCanvasId:h.getCanvasId,getCanvasCount:h.getCanvasCount,setCanvasByIndex:h.setCanvasByIndex,setCanvasById:h.setCanvasById,setManifest:t=>{
e.collectionId.set(""),e.showCollection.set(!1),e.manifestId.set(t)},getManifestId:()=>Q(e.manifestId)||null,addAnnotation:w.addAnnotation,updateAnnotation:w.updateAnnotation,removeAnnotation:w.removeAnnotation,setAnnotationMode:w.setAnnotationMode,setSearchQuery:w.setSearchQuery,handleSearchResultClick:w.handleSearchResultClick,updateImageFilter:u.updateImageFilter,resetImageFilters:u.resetImageFilters,handleViewBoxChange:u.handleViewBoxChange,handleZoomChange:u.handleZoomChange,handleRotationChange:u.handleRotationChange,setPanelOpen:b.setPanelOpen,updateLayerOpacity:(t,r)=>{
e.layerOpacities.update(e=>({
...e,[t]:r})),v()},setLayoutMode:t=>{
e.layoutMode.set(t),v()},handleMediaPlay:f.handleMediaPlay,handleMediaPause:f.handleMediaPause,handleMediaTimeUpdate:f.handleMediaTimeUpdate,handleMediaSeek:f.handleMediaSeek,handleMediaSegmentEnd:f.handleMediaSegmentEnd,handleModelChange:f.handleModelChange,getMediaLabel:f.getMediaLabel,getMediaTypeLabel:f.getMediaTypeLabel,handleAnnotationHover:m.handleAnnotationHover,handleAnnotationSelect:m.handleAnnotationSelect,handleAnnotationClear:m.handleAnnotationClear,destroy:()=>{
x.destroy();
for(let e of n)e();
t.av.destroy()}}},Ws=e=>"object"==typeof e&&e?e:null,Gs=e=>{
let t=Ws(e);
return"AnnotationPage"===t?.type&&(void 0===t.items||Array.isArray(t.items))},Ks=e=>{
let t={
};
if(e.label)for(let[r,a]of Object.entries(e.label))Array.isArray(a)&&a.length>0&&(t[r]=a[0]);
let r,a={
},o=e.items||[],i=o.filter(e=>"overlay"===e["mango:role"]),n=o.filter(e=>"overlay"!==e["mango:role"]),s=n.map((e,t)=>{
let r=e.body?Array.isArray(e.body)?e.body:[e.body]:[],o=r.map(e=>je(e)).find(e=>void 0!==e),n=e.id?.split("/").pop()||`chapter_${
t+1}`;
try{
n=decodeURIComponent(n)}catch{
}let s=o?.chapterId||n,l={
};
if(e.label)for(let[t,r]of Object.entries(e.label))Array.isArray(r)&&r.length>0&&(l[t]=r[0]);
let d={
};
if(e.summary)for(let[t,r]of Object.entries(e.summary))Array.isArray(r)&&r.length>0&&(d[t]=r[0]);
let c,p,v=o?.playback?.transitionMs,g=o?.playback?.entryTransition,u=o?.playback?.presentationDurationMs,h="",f="",w=o?.canvasIndex??0,b=e.target;
if(!b&&e.body){
let e=r.find(e=>e.target);
e&&(b=e.target)}if(b){
let e="string"==typeof b?b:b.source;
if(h=("string"==typeof e?e:e?.id)||"",h.includes("#")){
let e=h.split("#");
h=e[0];
let t=e[1].match(/t=(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)/);
if(t){
let e=parseFloat(t[1]),r=parseFloat(t[2]);
!Number.isNaN(e)&&!Number.isNaN(r)&&(p={
start:e,end:r})}}let t="object"==typeof b?b:null;
if(t&&t.partOf&&t.partOf.id)f=t.partOf.id;
else if(h&&h.includes("/canvas/")){
let e=h.split("/canvas/");
f=e[0];
let t=parseInt(e[1],10);
w=Number.isNaN(t)?0:t}let r=t?.selector?Array.isArray(t.selector)?t.selector:[t.selector]:[];
for(let e of r){
if(!e.value)continue;
let t=e.value,r=t.match(/xywh=(\d+),(\d+),(\d+),(\d+)/);
r&&(c={
x:parseInt(r[1],10),y:parseInt(r[2],10),w:parseInt(r[3],10),h:parseInt(r[4],10)});
let a=t.match(/t=(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)/);
if(a){
let e=parseFloat(a[1]),t=parseFloat(a[2]);
!Number.isNaN(e)&&!Number.isNaN(t)&&(p={
start:e,end:t})}}}o?.viewBox&&(c=o.viewBox);
let m=o?o.canvasId??"":h,x={
},y={
},_=(e,t)=>{
if("Sound"===e.type){
let t=e.id||"",r=e.language||"en",o=t.split("#t="),i=o[0];
if(a[r]={
src:i},o[1]){
let e=o[1].split(","),t=parseFloat(e[0]),a=parseFloat(e[1]);
!Number.isNaN(t)&&!Number.isNaN(a)&&(x[r]={
start:t,end:a})}}else if("TextualBody"===e.type){
let r=e.value||"",a=e.language||"en",o={
x:.33,y:.33,w:.34,h:.34},i=e.target??t;
if(i&&"object"==typeof i&&i.selector){
let e=Array.isArray(i.selector)?i.selector:[i.selector];
for(let t of e){
let e=t.value?.match(/xywh=(\d+),(\d+),(\d+),(\d+)/);
if(e){
o={
x:parseInt(e[1],10),y:parseInt(e[2],10),w:parseInt(e[3],10),h:parseInt(e[4],10)};
break}}}y[a]={
text:r,placement:o}}};
r.forEach(e=>_(e));
for(let e of i)e["mango:chapterId"]!==s||!e.body||(Array.isArray(e.body)?e.body:[e.body]).forEach(t=>_(t,e.target));
let k=o?.playback?.advance?{
mode:o.playback.advance,...void 0===o.playback.delayMs?{
}:{
delayMs:o.playback.delayMs}}:void 0;
return Ee({
id:s,title:l,description:d,manifest:f,canvasIndex:w,canvasId:m,...void 0===v?{
}:{
transitionTimeMs:v},...g?{
entryTransition:g}:{
},...void 0===u?{
}:{
presentationDurationMs:u},viewBox:c,media:p,model:o?.modelPose,modelOptions:o?.modelOptions,layerOpacities:o?.layerOpacities,annotationPlacement:o?.annotationPlacement,cameraTrack:o?.cameraTrack,drawingAnnotations:o?.drawingAnnotations,advance:k,narrationSegment:Object.keys(x).length>0?x:void 0,annotations:Object.keys(y).length>0?y:void 0})}),l=s[0],d=n[0]?.id;
if(!e["mango:draft"]&&l&&d){
let t=encodeURIComponent(l.id);
if(d.endsWith(t)){
let a=d.slice(0,-t.length),o=e.id?`${
e.id.replace(/\/$/,"")}/annotation/`:void 0;
a&&a!==o&&(r=a)}}return{
id:e["mango:draft"]?void 0:e.id,...r?{
publication:{
annotationBase:r}}:{
},title:t,narration:Object.keys(a).length>0?{
tracks:a}:void 0,chapters:s}},qs=e=>({
...e,chapters:(e.chapters??[]).map(e=>({
...e,transitionTimeMs:e.transitionTimeMs??e.entryTransition?.durationMs??2e3}))}),Js=e=>Gs(e)?void 0===e["mango:storyVersion"]?{
ok:!1,error:"Missing Mango story version"}:"1.0"===e["mango:storyVersion"]?(e.items??[]).filter(e=>"overlay"!==e["mango:role"]).some(e=>!(e.body?Array.isArray(e.body)?e.body:[e.body]:[]).some(e=>je(e)))?{
ok:!1,error:"Invalid Mango story chapter state"}:{
ok:!0,story:qs(Ks(e))}:{
ok:!1,error:`Unsupported Mango story version: ${
e["mango:storyVersion"]}`}:{
ok:!1,error:"Invalid story shape: expected a Mango story AnnotationPage"},Ys=e=>{
let t=[];
return(!Array.isArray(e.chapters)||0===e.chapters.length)&&t.push("Story: must have at least one chapter"),(e.chapters??[]).forEach((e,r)=>{
let a=`Chapter ${
r+1}`;
if(e.id||t.push(`${
a}: missing id`),e.manifest||t.push(`${
a}: missing manifest`),(null==e.canvasIndex||Number.isNaN(e.canvasIndex))&&t.push(`${
a}: invalid canvas index`),e.viewBox||e.media||e.model||e.narrationSegment||t.push(`${
a}: must have viewBox, media, model, or narration segment`),e.media){
let{
start:r,end:o}=e.media;
("number"!=typeof r||"number"!=typeof o||o<=r)&&t.push(`${
a}: media end must be greater than start`)}if(null!=e.transitionTimeMs&&e.transitionTimeMs<=0&&t.push(`${
a}: transitionTimeMs must be positive`),e.narrationSegment)for(let[r,o]of Object.entries(e.narrationSegment))o.end<=o.start&&t.push(`${
a}: narration segment invalid for ${
r}`)}),{
ok:0===t.length,errors:t}},Xs=(e,t,r)=>Math.min(r,Math.max(t,e)),Zs=e=>Number.isFinite(e)?Math.max(0,Number(e)):0,Qs=class{
#e;
get state(){
return d(this.#e)}set state(e){
j(this.#e,e,!0)}constructor(e={
}){
this.#e=V(k({
currentTime:0,duration:0,playState:"idle",isBuffering:!1,phase:null})),this.timerId=null,this.phase=null,this.phaseStartedAtMs=0,this.phaseElapsedAtStartSec=0,this.listeners=new Set,this.now=e.now??(()=>Date.now()),this.setIntervalFn=e.setIntervalFn??setInterval,this.clearIntervalFn=e.clearIntervalFn??clearInterval,this.tickMs=Math.max(16,e.tickMs??50)}getState(){
return{
currentTime:this.state.currentTime,duration:this.state.duration,playState:this.state.playState,isBuffering:this.state.isBuffering,phase:this.state.phase}}getLiveCurrentTime(){
let e=this.phase;
if(!e||"playing"!==this.state.playState||this.state.isBuffering)return this.state.currentTime;
let t=Zs(e.durationSec);
return Xs(Zs(e.offsetSec)+Xs(this.computePhaseElapsedSec(e),0,t),0,this.state.duration)}subscribe(e){
return e(this.getState()),this.listeners.add(e),()=>{
this.listeners.delete(e)}}destroy(){
this.stop(),this.listeners.clear()}loadChapter(e){
let t=Zs(e);
this.stopTickLoop(),this.phase=null,this.phaseStartedAtMs=0,this.phaseElapsedAtStartSec=0,this.applyState({
currentTime:0,duration:t,playState:"idle",phase:null})}setBuffering(e){
this.applyState({
isBuffering:e})}startTimerPhase(e){
this.setPhase({
kind:"timer",durationSec:Zs(e.durationSec),offsetSec:Zs(e.offsetSec),onComplete:e.onComplete})}startNarrationPhase(e){
this.setPhase({
...e,kind:"narration",durationSec:Zs(e.durationSec),offsetSec:Zs(e.offsetSec),sourceStartSec:Number.isFinite(e.sourceStartSec)?Number(e.sourceStartSec):0})}startMediaPhase(e){
this.setPhase({
...e,kind:"media",durationSec:Zs(e.durationSec),offsetSec:Zs(e.offsetSec),sourceStartSec:Number.isFinite(e.sourceStartSec)?Number(e.sourceStartSec):0})}play(){
if("playing"!==this.state.playState){
if(!this.phase)return void this.applyState({
playState:"playing"});
this.phaseStartedAtMs=this.now(),this.applyState({
playState:"playing"}),this.tick(),"playing"===this.getState().playState&&this.startTickLoop()}}pause(){
"playing"===this.state.playState&&(this.phase&&(this.phaseElapsedAtStartSec=this.computePhaseElapsedSec(this.phase)),this.stopTickLoop(),this.applyState({
playState:"paused"}))}stop(){
this.stopTickLoop(),this.phase=null,this.phaseStartedAtMs=0,this.phaseElapsedAtStartSec=0,this.applyState({
currentTime:0,playState:"idle",phase:null})}setPhase(e){
this.stopTickLoop(),this.phase=e,this.phaseElapsedAtStartSec=0,this.phaseStartedAtMs=this.now();
let t=Zs(e.offsetSec),r=t+Zs(e.durationSec);
this.applyState({
duration:Math.max(this.state.duration,r),currentTime:Xs(t,0,Math.max(this.state.duration,r)),phase:e.kind}),"playing"===this.state.playState&&(this.tick(),"playing"===this.state.playState&&this.startTickLoop())}startTickLoop(){
this.stopTickLoop(),this.timerId=Reflect.apply(this.setIntervalFn,globalThis,[()=>this.tick(),this.tickMs])}stopTickLoop(){
this.timerId&&=(Reflect.apply(this.clearIntervalFn,globalThis,[this.timerId]),null)}tick(){
let e=this.phase;
if(!e||"playing"!==this.state.playState||this.state.isBuffering)return;
let t=Zs(e.durationSec),r=Zs(e.offsetSec),a=Xs(this.computePhaseElapsedSec(e),0,t),o=Xs(r+a,0,this.state.duration);
if(this.applyState({
currentTime:o}),Math.round(1e3*a)>=Math.round(1e3*t)){
let t=e.onComplete;
this.phase=null,this.phaseStartedAtMs=0,this.phaseElapsedAtStartSec=0,this.stopTickLoop(),this.applyState({
playState:"idle",phase:null}),t?.()}}computePhaseElapsedSec(e){
if("timer"===e.kind){
let e=Math.max(0,(this.now()-this.phaseStartedAtMs)/1e3);
return this.phaseElapsedAtStartSec+e}let t=e.getCurrentTime();
if(Number.isFinite(t))return Math.max(0,Number(t)-e.sourceStartSec);
let r=Math.max(0,(this.now()-this.phaseStartedAtMs)/1e3);
return this.phaseElapsedAtStartSec+r}applyState(e){
let t=!1;
if(void 0!==e.currentTime&&this.state.currentTime!==e.currentTime&&(this.state.currentTime=e.currentTime,t=!0),void 0!==e.duration&&this.state.duration!==e.duration&&(this.state.duration=e.duration,t=!0),void 0!==e.playState&&this.state.playState!==e.playState&&(this.state.playState=e.playState,t=!0),void 0!==e.isBuffering&&this.state.isBuffering!==e.isBuffering&&(this.state.isBuffering=e.isBuffering,t=!0),void 0!==e.phase&&this.state.phase!==e.phase&&(this.state.phase=e.phase,t=!0),!t)return;
let r=this.getState();
this.listeners.forEach(e=>{
e(r)})}},$s=(e={
})=>new Qs(e),ec=.01,tc=(e,t,r=ec)=>!!e&&(Math.abs(e.x-t.x)<r&&Math.abs(e.y-t.y)<r&&Math.abs(e.w-t.w)<r&&Math.abs(e.h-t.h)<r),nc=(e,t,r,a)=>r?(e.setViewBox?.(t),null):Ae(e,t,500,{
now:a.now,requestAnimationFrame:a.requestAnimationFrame,cancelAnimationFrame:a.cancelAnimationFrame}),rc=(e,t,r)=>{
let{
setTimeoutFn:a,clearTimeoutFn:o,requestAnimationFrame:i,cancelAnimationFrame:n,posePaintedTimeoutMs:s,sourceOpenTimeoutMs:l,layoutStabilityFrameCount:d=5}=t;
return{
waitForManifestChange:async(t,i)=>new Promise(n=>{
let s=!1,d=null,c=()=>t===r.currentRunId()&&!s,p=()=>{
d&&o(d)},v=e=>{
c()&&(s=!0,p(),n(e))};
if(r.registerCleanup(p),e.getManifestId?.()===i)return void v({
ok:!0,degraded:!1});
let g=e.on?.("manifestChange",e=>{
c()&&e.manifestId===i&&v({
ok:!0,degraded:!1})});
g&&r.registerCleanup(g),d=a(()=>{
c()&&v({
ok:!0,degraded:!0})},l)}),waitForCanvasesAvailable:async(t,i)=>new Promise(n=>{
let s=!1,d=null,c=null,p=()=>t===r.currentRunId()&&!s,v=()=>(e.getCanvasCount?.()??0)>i,g=()=>{
d&&o(d),c?.()},u=e=>{
p()&&(s=!0,g(),n(e))};
r.registerCleanup(g),v()?u({
ok:!0,degraded:!1}):(c=e.on?.("stateChange",()=>{
p()&&v()&&u({
ok:!0,degraded:!1})})??null,d=a(()=>{
p()&&u({
ok:!0,degraded:!0})},l))}),waitForPageChange:async(t,s,d=!1,c)=>new Promise(d=>{
let p=!1,v=null,g=null,u=()=>t===r.currentRunId()&&!p,h=()=>{
v&&o(v),null!=g&&n&&n(g)},f=e=>{
u()&&(p=!0,h(),d(e))},w=e=>{
let t=e,r=()=>{
if(u()){
if(--t,t>0&&i)return void(g=i(r));
f({
ok:!0,degraded:!1})}};
i?g=i(r):f({
ok:!0,degraded:!1})};
r.registerCleanup(h);
let b=(t=e.getCanvasId?.(),r=e.getCanvasIndex?.())=>c&&t===c||r===s;
if(b())return void w(2);
let m=e.on?.("pageChange",e=>{
u()&&b(e.canvasId,e.index)&&w(3)});
m&&r.registerCleanup(m),v=a(()=>{
u()&&f({
ok:!0,degraded:!0})},l)}),waitForPosePainted:async t=>new Promise(l=>{
let d=!1,c=null,p=null,v=!1,g=()=>t===r.currentRunId()&&!d,u=()=>{
c&&o(c),null!=p&&n&&n(p)},h=e=>{
g()&&(d=!0,u(),l(e))};
r.registerCleanup(u);
let f=()=>{
if(g()){
if(v=!0,!i)return void h({
ok:!0,degraded:!1});
p=i(()=>h({
ok:!0,degraded:!1}))}},w=e.on?.("viewBoxChange",f),b=e.on?.("zoomChange",f);
w&&r.registerCleanup(w),b&&r.registerCleanup(b),c=a(()=>{
g()&&h({
ok:!0,degraded:!0})},s),i&&(p=i(()=>{
if(!g()||v||!i)return;
let e=i(()=>{
g()&&!v&&h({
ok:!0,degraded:!0})});
n&&r.registerCleanup(()=>n(e))}))}),waitForContainerStable:async e=>new Promise(t=>{
let a=!1,o=[],s=()=>e===r.currentRunId()&&!a,l=()=>{
n&&o.forEach(e=>n(e)),o=[]},c=e=>{
s()&&(a=!0,l(),t(e))};
if(r.registerCleanup(l),!i)return void c({
ok:!0,degraded:!0});
let p=d,v=()=>{
if(s()){
if(--p,p>0)return void o.push(i(v));
c({
ok:!0,degraded:!1})}};
o.push(i(v))})}},ic=(e,t,r={
})=>{
let{
now:a=()=>Date.now(),setTimeoutFn:o=setTimeout,clearTimeoutFn:i=clearTimeout,requestAnimationFrame:n=globalThis.requestAnimationFrame?.bind(globalThis),cancelAnimationFrame:s=globalThis.cancelAnimationFrame?.bind(globalThis),posePaintedTimeoutMs:l=500,sourceOpenTimeoutMs:d=500}=r,c=null,p=null,v=0,g=null,u=null,h={
},f=[],w=rc(e,{
setTimeoutFn:o,clearTimeoutFn:i,requestAnimationFrame:n,cancelAnimationFrame:s,posePaintedTimeoutMs:l,sourceOpenTimeoutMs:d},{
currentRunId:()=>c,registerCleanup:e=>f.push(e)}),b=(e,t)=>{
let r=h[e];
r&&r.forEach(r=>{
try{
r(t)}catch(t){
console.error(`[Orchestrator] Error in ${
e} handler:`,t)}})},m=(e,t)=>{
let r=h[e];
if(!r)return;
let a=r.indexOf(t);
a>-1&&r.splice(a,1)},x=()=>{
if(!c)return;
let e=c,r=t.chapters[v];
f.forEach(e=>e()),f.length=0,g&&=(g(),null),u&&=(u(),null),b("transition:cancelled",{
chapterId:r?.id??"",runId:e}),c=null};
return{
loadChapter:async(r,o={
})=>{
x();
let i=t.chapters[r];
if(!i)throw Error(`Chapter ${
r} not found`);
let l=[...i.cameraTrack?.keyframes??[]].sort((e,t)=>e.timeMs-t.timeMs).find(e=>e.viewBox)?.viewBox??i.viewBox,d=`run-${
a()}-${
Math.random().toString(36).substring(2,9)}`;
c=d,v=r;
let h=()=>c!==d;
try{
b("transition:start",{
chapterId:i.id,runId:d}),b("transition:assetsLoading",{
chapterId:i.id,runId:d}),e.getManifestId&&(p=e.getManifestId()??null);
let t=!1;
if(i.manifest&&i.manifest!==p){
e.setManifest?.(i.manifest),t=!0;
let r=await w.waitForManifestChange(d,i.manifest);
if(h())return;
if(r.degraded&&console.warn("[Orchestrator] Manifest loaded with degraded certainty"),"number"==typeof i.canvasIndex){
let e=await w.waitForCanvasesAvailable(d,i.canvasIndex);
if(h())return;
e.degraded&&console.warn("[Orchestrator] Canvases loaded with degraded certainty")}p=i.manifest}let r=e.getCanvasIndex?.()??-1,o=e.getCanvasId?.()??null,c=i.canvasId?i.canvasId!==o:"number"==typeof i.canvasIndex&&i.canvasIndex!==r;
if(i.canvasId||"number"==typeof i.canvasIndex){
i.canvasId?(e.setCanvasById?.(i.canvasId),e.getCanvasId?.()!==i.canvasId&&"number"==typeof i.canvasIndex&&e.getCanvasIndex?.()!==i.canvasIndex&&e.setCanvasByIndex?.(i.canvasIndex)):e.setCanvasByIndex?.(i.canvasIndex);
let r=await w.waitForPageChange(d,i.canvasIndex,t,i.canvasId);
if(h())return;
r.degraded&&console.warn("[Orchestrator] Page changed with degraded certainty")}if(b("transition:sourceOpen",{
chapterId:i.id,runId:d}),t||c||!i.layerOpacities){
if(i.layerOpacities){
u&&=(u(),null);
for(let[t,r]of Object.entries(i.layerOpacities))e.updateLayerOpacity?.(t,r)}}else{
u&&=(u(),null);
let t=e.getLayerOpacities?.()??{
};
u=Pe(e,t,i.layerOpacities,1e3,{
now:a,requestAnimationFrame:n,cancelAnimationFrame:s})}if(l){
let t=e.getViewBox?.();
if(!tc(t,l)){
let e=await w.waitForContainerStable(d);
if(h())return;
e.degraded&&console.warn("[Orchestrator] Container stability check degraded - viewBox may not be optimal")}}if(l){
let r=e.getViewBox?.(),o=l;
tc(r,o)||(g&&=(g(),null),g=nc(e,o,t,{
now:a,requestAnimationFrame:n,cancelAnimationFrame:s}))}else i.model?((t,r)=>{
e.setModelPose?.(t,r),(!r||!e.setModelPose)&&(t.cameraOrbit&&e.setModelOrbit?.(t.cameraOrbit),t.cameraTarget&&e.setModelTarget?.(t.cameraTarget),t.orientation&&e.setModelOrientation?.(t.orientation))})(i.model,i.modelOptions):i.media&&e.seekTo?.(i.media.start);
if(h())return;
b("transition:poseApplied",{
chapterId:i.id,runId:d});
let v=!(!l&&!i.model),f={
ok:!0,degraded:!1};
if(v&&(f=await w.waitForPosePainted(d),h()))return;
b("transition:posePainted",{
chapterId:i.id,runId:d,degraded:f.degraded}),b("transition:ready",{
chapterId:i.id,runId:d})}catch(e){
if(h())return;
throw b("transition:error",{
chapterId:i.id,runId:d,error:e instanceof Error?e:Error(String(e))}),e}},cancelCurrentTransition:x,on:(e,t)=>(h[e]||(h[e]=[]),h[e].push(t),()=>m(e,t)),off:m,getCurrentRunId:()=>c,destroy:()=>{
x(),Object.keys(h).forEach(e=>{
delete h[e]})}}},ac=(e,t,r)=>{
if(!e?.chapters?.[t])return null;
let a=e.chapters[t].narrationSegment?.[r],o=e.narration?.tracks?.[r]?.src;
return!a||!o||a.end<=a.start?null:{
src:o,start:a.start,end:a.end}},oc=(e,t)=>{
if(!e)return 0;
let r=e.narrationSegment??{
},a=r[t]??(Object.keys(r).length>0?r[Object.keys(r)[0]]:void 0),o=a&&Number.isFinite(a.start)&&Number.isFinite(a.end)?Math.max(0,a.end-a.start):0,i=e.media&&Number.isFinite(e.media.start)&&Number.isFinite(e.media.end)?Math.max(0,e.media.end-e.media.start):0;
return Math.max(o+i,(e.cameraTrack?.durationMs??0)/1e3,ke(e).presentationDurationMs/1e3)},sc=(e,t={
})=>{
let r=null,a=null,o="IDLE",i=Z(0),n=Z(!1),s=Z("idle"),l=Z({
currentTime:0,duration:0,playState:"idle",isBuffering:!1,phase:null}),d=0,c=t.now??(()=>Date.now()),p=t.setTimeoutFn??setTimeout,v=t.clearTimeoutFn??clearTimeout,g=t.requestAnimationFrame??(e=>p(()=>e(c()),16)),u=t.cancelAnimationFrame??(e=>{
v(e)}),h=t.onTransitionEvent,f=t.createPlaybackClock?.()??$s({
now:c,setIntervalFn:t.setIntervalFn,clearIntervalFn:t.clearIntervalFn}),w=globalThis,b=w.__MangoStoryNarrationPlayer,m=t.createNarrationPlayer?.()??("function"==typeof b?b():Me({
onBufferingChange:e=>f.setBuffering(e)})),x=t.prefersReducedMotion??(typeof window<"u"&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),y=t=>{
let a=r?.chapters?.[d];
if(!a?.cameraTrack)return;
let o=x?a.cameraTrack.durationMs:1e3*t,i=Ne(a.cameraTrack,o);
if(i&&(i.viewBox&&e.setViewBox?.(i.viewBox),i.model&&e.setModelPose?.(i.model),i.layerOpacities))for(let[t,r]of Object.entries(i.layerOpacities))e.updateLayerOpacity?.(t,r)},_=null,k=()=>{
null!=_&&(u(_),_=null)},z=()=>{
_=null;
let e=f.getState();
if("playing"===e.playState){
if(!e.isBuffering){
let t="function"==typeof f.getLiveCurrentTime?f.getLiveCurrentTime():e.currentTime;
y(t)}_=g(z)}},I=f.subscribe(e=>{
l.set(e),"playing"!==e.playState||e.isBuffering||x?(k(),y(e.currentTime)):_??=g(z)}),C=t.language??"en",j=!1,M=null,S=null,A=0,q=[],T=e=>{
if(typeof window>"u")return;
let t=w.__calls;
t&&(t[e]=(t[e]??0)+1)},$=e=>{
o=e,"PLAYING_NARRATION"===e||"PLAYING_MEDIA"===e||"PRESENTING_SILENT"===e||"TRANSITION_DELAY"===e?s.set("playing"):"PAUSED"===e?s.set("paused"):s.set("idle")},W=()=>{
for(let e of q)e();
q=[]},L=(e=!0)=>{
let t=d+1;
if(r&&r.chapters&&t<r.chapters.length)return T("setCanvasByIndex"),void E(t,{
autoPlay:e});
i.set(0),d=0,E(0),$("ENDED")},R=()=>{
let e=r?.chapters?.[d];
if(!e)return;
if("manual"===e.advance?.mode)return f.stop(),void $("IDLE");
$("TRANSITION_DELAY"),M=null,S="transition";
let t=d+1;
r&&r.chapters&&t<r.chapters.length&&T("setCanvasByIndex");
let a=ke(e),o=a.migratedFromLegacy?a.presentationDurationMs:0;
f.startTimerPhase({
offsetSec:f.getState().duration,durationSec:(a.advanceDelayMs??o)/1e3,onComplete:()=>{
L(!0)}}),f.play()},N=e=>{
let t=r?.chapters?.[d];
if(!t)return;
let a=Math.max(0,oc(t,C)-Math.max(0,e));
a<=.001?R():($("PRESENTING_SILENT"),M=null,S="presentation",f.startTimerPhase({
offsetSec:Math.max(0,e),durationSec:a,onComplete:R}),f.play())},O=(t=0)=>{
let a=r?.chapters?.[d];
if(!a?.media)return!1;
let{
start:i,end:n}=a.media,s=Math.max(0,n-i);
return $("PLAYING_MEDIA"),M=null,S=null,A=i,e.setMediaSegment?.(i,n),e.play?.(),j=!0,f.startMediaPhase({
offsetSec:t,durationSec:s,sourceStartSec:i,getCurrentTime:()=>A,onComplete:()=>{
"PLAYING_MEDIA"!==o||!j||(j=!1,e.pause?.(),N(t+s))}}),f.play(),!0},E=async(t,o={
})=>{
if(r&&Array.isArray(r.chapters)&&r.chapters[t]){
if(m.stop(),f.stop(),f.setBuffering(!0),e.pause?.(),j=!1,A=0,M=null,S=null,$("LOADING_CHAPTER"),n.set(!0),!a)return $("IDLE"),n.set(!1),void f.setBuffering(!1);
try{
await a.loadChapter(t,o),i.set(t),d=t,(e=>{
let t=r?.chapters?.[e],a=oc(t,C);
f.loadChapter(a),f.setBuffering(!1),S=null})(t),$("IDLE"),n.set(!1),o.autoPlay&&(T("play"),U())}catch(e){
console.error("[StoryViewer] Chapter load error:",e),$("IDLE"),n.set(!1),f.setBuffering(!1)}}},U=()=>{
if(T("setCanvasByIndex"),T("play"),r){
if("ENDED"===o)return i.set(0),d=0,void E(0,{
autoPlay:!0});
if("PAUSED"===o&&"narration"===M&&m.resume())return f.play(),$("PLAYING_NARRATION"),void(M=null);
if("PAUSED"===o&&"media"===M)return e.play?.(),j=!0,f.play(),$("PLAYING_MEDIA"),void(M=null);
if("PAUSED"===o&&"timer"===M)return f.play(),$("presentation"===S?"PRESENTING_SILENT":"TRANSITION_DELAY"),void(M=null);
if((e=>{
if(!r||!r.chapters?.[e])return!1;
let t=r.chapters[e],a=!(!t.viewBox&&!t.model),o=!!t.media,i=!!(t.narrationSegment&&Object.keys(t.narrationSegment).length>0);
return a&&!o&&!i})(d))return void(()=>{
let e=r?.chapters?.[d];
e&&($("PRESENTING_SILENT"),M=null,S="presentation",f.startTimerPhase({
offsetSec:0,durationSec:oc(e,C),onComplete:R}),f.play())})();
if(!(()=>{
let e=r?.chapters?.[d]?.id,t=ac(r,d,C);
if(!t||!e)return!1;
let a=Math.max(0,t.end-t.start);
return $("PLAYING_NARRATION"),M=null,S=null,f.startNarrationPhase({
offsetSec:0,durationSec:a,sourceStartSec:t.start,getCurrentTime:()=>m.getCurrentTime?.()??null}),f.play(),m.playSegment(t).then(t=>{
if(r?.chapters?.[d]?.id===e){
if(!t)return f.stop(),void $("IDLE");
r?.chapters?.[d]?.media?O(a):N(a)}}).catch(()=>{
r?.chapters?.[d]?.id===e&&(f.stop(),$("IDLE"))}),!0})()){
if(r?.chapters?.[d]?.media)return void O(0);
R()}}},B=e.on?.("mediaSegmentEnd",()=>{
if("PLAYING_MEDIA"!==o||!j)return;
j=!1,e.pause?.();
let t=r?.chapters?.[d],a=ac(r,d,C),i=a?Math.max(0,a.end-a.start):0,n=t?.media?Math.max(0,t.media.end-t.media.start):0;
N(i+n)}),P=e.on?.("mediaTimeUpdate",e=>{
Number.isFinite(e.time)&&(A=e.time)});
return{
loadStory:async o=>{
r=o,W(),a&&=(a.destroy(),null),a=ic(e,r,{
now:c,setTimeoutFn:p,clearTimeoutFn:v,requestAnimationFrame:g,cancelAnimationFrame:u,posePaintedTimeoutMs:t.posePaintedTimeoutMs,sourceOpenTimeoutMs:t.sourceOpenTimeoutMs}),h?(q.push(a.on("transition:start",e=>{
f.setBuffering(!0),h("transition:start",e)})),q.push(a.on("transition:assetsLoading",e=>{
f.setBuffering(!0),h("transition:assetsLoading",e)})),q.push(a.on("transition:sourceOpen",e=>{
f.setBuffering(!0),h("transition:sourceOpen",e)})),q.push(a.on("transition:poseApplied",e=>{
h("transition:poseApplied",e)})),q.push(a.on("transition:posePainted",e=>{
h("transition:posePainted",e)})),q.push(a.on("transition:narrationStarted",e=>{
h("transition:narrationStarted",e)})),q.push(a.on("transition:mediaStarted",e=>{
h("transition:mediaStarted",e)})),q.push(a.on("transition:ready",e=>{
f.setBuffering(!1),h("transition:ready",e)})),q.push(a.on("transition:cancelled",e=>{
f.setBuffering(!1),h("transition:cancelled",e)})),q.push(a.on("transition:error",e=>{
f.setBuffering(!1),h("transition:error",e)}))):(q.push(a.on("transition:start",()=>{
f.setBuffering(!0)})),q.push(a.on("transition:assetsLoading",()=>{
f.setBuffering(!0)})),q.push(a.on("transition:sourceOpen",()=>{
f.setBuffering(!0)})),q.push(a.on("transition:ready",()=>{
f.setBuffering(!1)})),q.push(a.on("transition:cancelled",()=>f.setBuffering(!1))),q.push(a.on("transition:error",()=>f.setBuffering(!1))));
let i=Object.keys(r.narration?.tracks??{
}),n=r.chapters[0]?.narrationSegment?Object.keys(r.chapters[0].narrationSegment??{
}):[];
if(!i.includes(C)&&i.length>0?C=i.includes("en")?"en":i[0]:0===i.length&&n.length>0&&(C=n.includes("en")?"en":n[0]),!r.chapters||0===r.chapters.length)return f.loadChapter(0),void f.setBuffering(!1);
await E(0)},loadChapter:E,play:U,pause:()=>"PLAYING_MEDIA"===o&&j?(e.pause?.(),j=!1,f.pause(),M="media",void $("PAUSED")):"PLAYING_NARRATION"===o&&m.pause()?(f.pause(),M="narration",void $("PAUSED")):void(("PRESENTING_SILENT"===o||"TRANSITION_DELAY"===o)&&(f.pause(),M="timer",$("PAUSED"))),stop:()=>{
m.stop(),f.stop(),f.setBuffering(!1),j&&=(e.pause?.(),!1),A=0,M=null,S=null,$("IDLE"),r&&r.chapters?.length&&(i.set(0),d=0,E(0))},destroy:()=>{
B&&B(),P&&P(),W(),a&&=(a.destroy(),null),m.stop(),k(),f.destroy(),I(),j&&=(e.pause?.(),!1)},getState:()=>o,currentChapterIndex:i,isLoading:n,playState:s,playbackState:l,getStory:()=>r}},cc=n('<div class="empty-slot__row svelte-1b4ql1v"><input type="text" class="svelte-1b4ql1v"/> <button type="button" class="svelte-1b4ql1v"> </button></div>'),lc=n('<button class="empty-slot__library svelte-1b4ql1v" type="button"> </button>'),uc=n('<div role="region"><div class="empty-slot__card svelte-1b4ql1v"><div class="empty-slot__icon svelte-1b4ql1v" aria-hidden="true">📄</div> <p class="empty-slot__title svelte-1b4ql1v"> </p> <!></div></div>');
function dc(e,t){
le(t,!0);
let a=()=>O(_e,"$t",n),[n,s]=ee(),l=U(t,"onloadmanifest",3,void 0),p=U(t,"onopenmanifestmanager",3,void 0),v=U(t,"showInput",3,!0),f=V(!1),w=V(""),b=()=>{
let e=d(w).trim();
e&&(l()?.(e),j(w,""))};
var m=uc();
let x;
var y=W(m),_=R(W(y),2),k=W(_,!0);
o(_);
var M=R(_,2),S=e=>{
var t=cc(),r=W(t);
te(r);
var i=R(r,2),n=W(i,!0);
o(i),o(t),h((e,t)=>{
I(r,"placeholder",e),u(n,t)},[()=>a()("workspace.emptySlot.placeholder"),()=>a()("workspace.emptySlot.load")]),C("keydown",r,e=>"Enter"===e.key&&b()),ne(r,()=>d(w),e=>j(w,e)),C("click",i,b),g(e,t)},A=e=>{
var t=lc(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>a()("workspace.emptySlot.chooseLibrary")]),C("click",t,()=>p()?.()),g(e,t)};
z(M,e=>{
v()?e(S):e(A,-1)}),o(y),o(m),h((e,t)=>{
x=r(m,1,"empty-slot svelte-1b4ql1v",null,x,{
"empty-slot--active":d(f)}),I(m,"aria-label",e),u(k,t)},[()=>a()("workspace.emptySlot.dropZone"),()=>v()?a()("workspace.emptySlot.dragOrPaste"):a()("workspace.emptySlot.empty")]),c("dragover",m,e=>{
e.preventDefault(),j(f,!0)}),c("dragleave",m,e=>{
e.preventDefault(),j(f,!1)}),c("drop",m,e=>{
e.preventDefault(),j(f,!1);
let t=e.dataTransfer;
if(!t)return;
let r=t.getData("text/uri-list").trim(),a=t.getData("text/plain").trim(),o=r||a;
if(o.startsWith("http://")||o.startsWith("https://"))return void l()?.(o);
let i=t.files?.[0];
i&&("application/json"===i.type||i.name.toLowerCase().endsWith(".json"))&&(e=>{
let t=new FileReader;
t.onload=()=>{
try{
let e=String(t.result??""),r=JSON.parse(e),a=(r.id??r["@id"]??"").trim();
(a.startsWith("http://")||a.startsWith("https://"))&&l()?.(a)}catch{
}},t.readAsText(e)})(i)}),g(e,m),i(),s()}x(["keydown","click"]);
var fc=n('<div class="workspace-window__pagination svelte-1tm4fgg"><button type="button" class="svelte-1tm4fgg">‹</button> <label class="workspace-window__page-input svelte-1tm4fgg"><span class="workspace-window__visually-hidden svelte-1tm4fgg"> </span> <input type="number" min="1" class="svelte-1tm4fgg"/> <span aria-hidden="true"> </span></label> <button type="button" class="svelte-1tm4fgg">›</button></div>'),pc=n("<!> <!>",1),mc=n('<div class="workspace-window svelte-1tm4fgg" role="button" tabindex="0"><header class="workspace-window__header svelte-1tm4fgg"><span class="workspace-window__title svelte-1tm4fgg"> </span> <button class="workspace-window__manifest-button svelte-1tm4fgg" type="button"><img alt="" class="svelte-1tm4fgg"/></button></header> <div class="workspace-window__body svelte-1tm4fgg"><!></div></div>');
function hc(t,r){
le(r,!0);
let a=()=>O(_e,"$t",n),[n,s]=ee(),l=U(r,"windowNumber",3,1),p=U(r,"onfocuswindow",3,void 0);
U(r,"onmovewindow",3,void 0),U(r,"onclosewindow",3,void 0);
let v=U(r,"onloadmanifest",3,void 0),f=U(r,"oncanvaschange",3,void 0),w=U(r,"onopenmanifestmanager",3,void 0),b=H(()=>r.windowNode.manifestId?O(Fe,"$manifestsStore",n)[r.windowNode.manifestId]:void 0),m=H(()=>d(b)?.label||(r.windowNode.manifestId?r.windowNode.manifestId:a()("workspace.manifestManager.window",{
number:l()}))),x=H(()=>d(b)?.canvases.length??0),y=V("1");
e(()=>{
j(y,String(r.windowNode.canvasIndex+1),!0)});
let _=()=>{
let e=Number.parseInt(d(y),10),t=r.windowNode.canvasIndex+1;
if(!Number.isFinite(e))return void j(y,String(t),!0);
let a=Math.min(Math.max(e,1),d(x));
j(y,String(a),!0),a!==t&&f()?.({
id:r.windowNode.id,canvasIndex:a-1})},k=H(()=>{
let e=d(b);
if(!e?.manifesto)return!1;
let t=e.canvases[r.windowNode.canvasIndex];
return"image"===Te(e.manifesto,t?.id,r.windowNode.canvasIndex).primary?.type}),M={
allowCreateMode:!0,showThumbnails:!1,showContents:!1,showSearch:!1,showMetadata:!1,showAnnotations:!1,showTools:!1},S=async e=>{
e&&(await we(e),v()?.({
id:r.windowNode.id,manifestId:e}))};
var A=mc(),q=W(A),T=W(q),$=W(T,!0);
o(T);
var L=R(T,2),N=W(L);
o(L),o(q);
var E=R(q,2),B=W(E),P=e=>{
var t=pc(),i=re(t);
Al(i,{
get manifestId(){
return r.windowNode.manifestId},get config(){
return M},get canvasIndex(){
return r.windowNode.canvasIndex},oncanvaschange:e=>f()?.({
id:r.windowNode.id,canvasIndex:e.canvasIndex})});
var n=R(i,2),s=e=>{
var t=fc(),i=W(t),n=R(i,2),s=W(n),l=W(s,!0);
o(s);
var p=R(s,2);
te(p);
var v=R(p,2),w=W(v);
o(v),o(n);
var b=R(n,2);
o(t),h((e,a,o,n,s)=>{
I(t,"aria-label",e),I(i,"aria-label",a),i.disabled=r.windowNode.canvasIndex<=0,u(l,o),I(p,"max",d(x)),se(p,d(y)),I(p,"aria-label",n),u(w,`/ ${
d(x)??""}`),I(b,"aria-label",s),b.disabled=r.windowNode.canvasIndex>=d(x)-1},[()=>a()("workspace.window.canvasNavigation"),()=>a()("workspace.window.previousCanvas"),()=>a()("workspace.window.pageNumber"),()=>a()("workspace.window.pageNumber"),()=>a()("workspace.window.nextCanvas")]),C("click",i,e=>{
e.stopPropagation(),f()?.({
id:r.windowNode.id,canvasIndex:r.windowNode.canvasIndex-1})}),C("input",p,e=>j(y,e.currentTarget.value,!0)),C("click",p,e=>e.stopPropagation()),C("keydown",p,e=>{
e.stopPropagation(),"Enter"===e.key?(e.preventDefault(),_(),e.currentTarget.select()):"Escape"===e.key&&(j(y,String(r.windowNode.canvasIndex+1),!0),e.currentTarget.blur())}),c("blur",p,_),C("click",b,e=>{
e.stopPropagation(),f()?.({
id:r.windowNode.id,canvasIndex:r.windowNode.canvasIndex+1})}),g(e,t)};
z(n,e=>{
d(k)&&d(x)>1&&e(s)}),g(e,t)},F=e=>{
dc(e,{
onloadmanifest:S,onopenmanifestmanager:()=>w()?.(r.windowNode.id),showInput:!1})};
z(B,e=>{
r.windowNode.manifestId?e(P):e(F,-1)}),o(E),o(A),h((e,t)=>{
I(T,"title",d(m)),u($,d(m)),I(L,"aria-label",e),I(L,"title",t),I(N,"src",Ci)},[()=>a()("workspace.window.replaceManifest"),()=>a()("workspace.window.replaceManifest")]),C("click",A,()=>p()?.(r.windowNode.id)),C("keydown",A,e=>{
("Enter"===e.key||" "===e.key)&&(e.preventDefault(),p()?.(r.windowNode.id))}),C("click",L,e=>{
e.stopPropagation(),p()?.(r.windowNode.id),w()?.(r.windowNode.id)}),g(t,A),i(),s()}x(["click","keydown","input"]);
var gc=(e,t)=>({
...e,id:t}),_c=()=>`win-${
Math.random().toString(36).slice(2,8)}`,vc=e=>({
type:"window",id:_c(),manifestId:e?.manifestId??"",canvasIndex:e?.canvasIndex??0,viewBox:e?.viewBox??null}),yc=(e,t,r)=>"window"===e.type?e.id===t?r(e):e:{
...e,children:e.children.map(e=>yc(e,t,r))},bc=(e,t)=>{
if("window"===e.type)return e.id===t?null:e;
let r=e.children.map(e=>bc(e,t)).filter(e=>!!e);
return 0===r.length?null:1===r.length?r[0]:{
...e,children:r,sizes:e.sizes?.length===r.length?e.sizes:wc(r.length)}},xc=e=>"window"===e.type?[e.id]:e.children.flatMap(e=>xc(e)),Sc=e=>"window"===e.type?[e]:e.children.flatMap(e=>Sc(e)),Cc=e=>xc(e).join("|"),wc=e=>Array.from({
length:e},()=>100/e),Tc=(e,t,r)=>"window"===e.type?e:Cc(e)===t?{
...e,sizes:[...r]}:{
...e,children:e.children.map(e=>Tc(e,t,r))},Ec=(e,t,r,a,o)=>{
if("window"===e.type)return[{
id:e.id,x:t,y:r,width:a,height:o,centerX:t+a/2,centerY:r+o/2}];
let i=e.children.length;
if(i<=0)return[];
if("column"===e.type){
let n=a/i;
return e.children.flatMap((e,a)=>Ec(e,t+n*a,r,n,o))}let n=o/i;
return e.children.flatMap((e,o)=>Ec(e,t,r+n*o,a,n))},Dc=(e,t,r,a)=>Math.min(t,a)-Math.max(e,r)>1e-4,Oc=(e,t,r)=>{
let a=Ec(e,0,0,1,1),o=a.find(e=>e.id===t);
if(!o)return null;
let i=a.filter(e=>e.id!==o.id&&("left"===r?e.centerX<o.centerX&&Dc(o.y,o.y+o.height,e.y,e.y+e.height):"right"===r?e.centerX>o.centerX&&Dc(o.y,o.y+o.height,e.y,e.y+e.height):"up"===r?e.centerY<o.centerY&&Dc(o.x,o.x+o.width,e.x,e.x+e.width):e.centerY>o.centerY&&Dc(o.x,o.x+o.width,e.x,e.x+e.width)));
return 0===i.length?null:(i.sort((e,t)=>{
let a=Math.abs("left"===r||"right"===r?e.centerX-o.centerX:e.centerY-o.centerY),i=Math.abs("left"===r||"right"===r?t.centerX-o.centerX:t.centerY-o.centerY);
return Math.abs(a-i)>1e-4?a-i:Math.abs("left"===r||"right"===r?e.centerY-o.centerY:e.centerX-o.centerX)-Math.abs("left"===r||"right"===r?t.centerY-o.centerY:t.centerX-o.centerX)}),i[0]?.id??null)},kc=(e,t,r,a)=>"window"===e.type?e.id===t?a.get(r)??e:e.id===r?a.get(t)??e:e:{
...e,children:e.children.map(e=>kc(e,t,r,a))},Ac=e=>"1x1"===e?1:"1x2-panel"===e?3:"2x2"===e?4:2,jc=(e,t)=>{
let r=Ac(e),a=t.slice(0,r).map(e=>({
...e,id:e.id||_c()}));
for(;
a.length<r;
)a.push(vc());
let o=e=>a[e]??vc(),i=o(0),n=o(1),s=o(2),l=o(3);
return"1x1"===e?i:"1x2"===e?{
type:"column",children:[i,n],sizes:wc(2)}:"2x1"===e?{
type:"row",children:[i,n],sizes:wc(2)}:"1x2-panel"===e?{
type:"column",sizes:wc(2),children:[i,{
type:"row",children:[n,s],sizes:wc(2)}]}:{
type:"column",sizes:wc(2),children:[{
type:"row",children:[i,n],sizes:wc(2)},{
type:"row",children:[s,l],sizes:wc(2)}]}},Mc=class{
#e;
get state(){
return d(this.#e)}set state(e){
j(this.#e,e,!0)}constructor(e=""){
this.#e=V(k({
layout:vc(),activeWindowId:null}));
let t=vc({
manifestId:e,canvasIndex:0});
this.state={
layout:t,activeWindowId:t.id}}get layout(){
return this.state.layout}get activeWindowId(){
return this.state.activeWindowId}get activeWindow(){
let e=this.state.activeWindowId;
return e?this.findWindow(e):null}findWindow(e,t=this.state.layout){
if("window"===t.type)return t.id===e?t:null;
for(let r of t.children){
let t=this.findWindow(e,r);
if(t)return t}return null}setActiveWindow(e){
this.findWindow(e)&&(this.state={
...this.state,activeWindowId:e})}setLayoutPreset(e){
let t=Sc(this.state.layout),r=jc(e,t.length>0?t:[vc()]),a=xc(r),o=this.state.activeWindowId&&a.includes(this.state.activeWindowId)?this.state.activeWindowId:a[0]??null;
this.state={
layout:r,activeWindowId:o}}splitWindow(e,t){
let r=yc(this.state.layout,e,e=>({
type:t,children:[e,gc(e,_c())],sizes:wc(2)}));
this.state={
...this.state,layout:r}}moveWindow(e,t){
let r=Sc(this.state.layout);
if(r.length<2)return;
let a=Oc(this.state.layout,e,t);
if(!a)return;
let o=new Map(r.map(e=>[e.id,e])),i=kc(this.state.layout,e,a,o);
this.state={
...this.state,layout:i,activeWindowId:e}}closeWindow(e){
let t=bc(this.state.layout,e);
if(!t)return;
let r=xc(t),a=this.state.activeWindowId===e?r[0]??null:r.includes(this.state.activeWindowId??"")?this.state.activeWindowId:r[0]??null;
this.state={
layout:t,activeWindowId:a}}setWindowManifest(e,t){
let r=yc(this.state.layout,e,e=>({
...e,manifestId:t,canvasIndex:0,viewBox:null}));
this.state={
...this.state,layout:r}}setWindowCanvasIndex(e,t){
let r=yc(this.state.layout,e,e=>({
...e,canvasIndex:t}));
this.state={
...this.state,layout:r}}setWindowViewBox(e,t){
let r=yc(this.state.layout,e,e=>({
...e,viewBox:t}));
this.state={
...this.state,layout:r}}updateSplitSizes(e,t){
if(!e||t.length<2||t.some(e=>!Number.isFinite(e)))return;
let r=Tc(this.state.layout,e,t);
this.state={
...this.state,layout:r}}get windows(){
return Sc(this.state.layout)}},Nc=n('<input class="workspace-splitter workspace-splitter--row svelte-1pf4boi" type="range" min="10" max="90"/>'),Pc=n('<div class="workspace-grid__pane svelte-1pf4boi"><!></div> <!>',1),Fc=n('<div class="workspace-grid workspace-grid--row svelte-1pf4boi"></div>'),Ic=n('<input class="workspace-splitter workspace-splitter--column svelte-1pf4boi" type="range" min="10" max="90"/>'),Lc=n('<div class="workspace-grid workspace-grid--column svelte-1pf4boi"></div>');
function Rc(e,t){
le(t,!0);
let r=()=>O(_e,"$t",a),[a,n]=ee(),s=U(t,"startIndex",3,1),l=U(t,"activeWindowId",3,null),c=U(t,"onfocuswindow",3,void 0),p=U(t,"onmovewindow",3,void 0),v=U(t,"onclosewindow",3,void 0),u=U(t,"onloadmanifest",3,void 0),w=U(t,"oncanvaschange",3,void 0),b=U(t,"onresizesplit",3,void 0),m=U(t,"onopenmanifestmanager",3,void 0),x=V(null),y=null,k=e=>"window"===e.type?1:e.children.reduce((e,t)=>e+k(t),0),M=e=>"window"===e.type?[]:e.sizes?.length===e.children.length?e.sizes:e.children.map(()=>100/e.children.length),S=(e,r)=>{
if("window"===t.node.type||!d(x))return;
e.preventDefault(),e.stopPropagation();
let a=[...M(t.node)],o=d(x).getBoundingClientRect(),i="column"===t.node.type?o.width:o.height,n="column"===t.node.type?e.clientX:e.clientY,s=(a[r]??0)+(a[r+1]??0),l=Math.min(12,s/3),c=Cc(t.node),p=e=>{
let o="column"===t.node.type?e.clientX:e.clientY,d=i>0?(o-n)/i*100:0,p=Math.max(l,Math.min(s-l,(a[r]??0)+d)),v=[...a];
v[r]=p,v[r+1]=s-p,b()?.({
targetId:c,sizes:v})},v=()=>{
window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",v),y=null};
y?.(),y=v,window.addEventListener("pointermove",p),window.addEventListener("pointerup",v)},A=(e,r)=>{
if("window"===t.node.type)return;
let a="ArrowLeft"===e.key||"ArrowUp"===e.key,o="ArrowRight"===e.key||"ArrowDown"===e.key;
if(!a&&!o)return;
e.preventDefault();
let i=[...M(t.node)],n=(i[r]??0)+(i[r+1]??0),s=Math.max(10,Math.min(n-10,(i[r]??0)+(a?-2:2)));
i[r]=s,i[r+1]=n-s,b()?.({
targetId:Cc(t.node),sizes:i})};
f(()=>y?.());
var q=fe(),T=re(q),$=e=>{
var a=Fc();
B(a,23,()=>t.node.children,(e,t)=>`row-${
t}`,(e,a,i)=>{
let n=H(()=>s()+t.node.children.slice(0,d(i)).reduce((e,t)=>e+k(t),0));
var f=Pc(),x=re(f);
let y;
Rc(W(x),{
get node(){
return d(a)},get startIndex(){
return d(n)},get activeWindowId(){
return l()},get onfocuswindow(){
return c()},get onmovewindow(){
return p()},get onclosewindow(){
return v()},get onloadmanifest(){
return u()},get oncanvaschange(){
return w()},get onresizesplit(){
return b()},get onopenmanifestmanager(){
return m()}}),o(x);
var j=R(x,2),q=e=>{
var a=Nc();
te(a),h((e,t)=>{
I(a,"aria-label",e),se(a,t)},[()=>r()("workspace.resizeRows"),()=>Math.round(M(t.node)[d(i)]??50)]),C("pointerdown",a,e=>S(e,d(i))),C("keydown",a,e=>A(e,d(i))),g(e,a)};
z(j,e=>{
d(i)<t.node.children.length-1&&e(q)}),h(e=>y=_(x,"",y,e),[()=>({
flex:`${
M(t.node)[d(i)]??1} 1 0%`})]),g(e,f)}),o(a),ae(a,e=>j(x,e),()=>d(x)),g(e,a)},L=e=>{
var a=Lc();
B(a,23,()=>t.node.children,(e,t)=>`col-${
t}`,(e,a,i)=>{
let n=H(()=>s()+t.node.children.slice(0,d(i)).reduce((e,t)=>e+k(t),0));
var f=Pc(),x=re(f);
let y;
Rc(W(x),{
get node(){
return d(a)},get startIndex(){
return d(n)},get activeWindowId(){
return l()},get onfocuswindow(){
return c()},get onmovewindow(){
return p()},get onclosewindow(){
return v()},get onloadmanifest(){
return u()},get oncanvaschange(){
return w()},get onresizesplit(){
return b()},get onopenmanifestmanager(){
return m()}}),o(x);
var j=R(x,2),q=e=>{
var a=Ic();
te(a),h((e,t)=>{
I(a,"aria-label",e),se(a,t)},[()=>r()("workspace.resizeColumns"),()=>Math.round(M(t.node)[d(i)]??50)]),C("pointerdown",a,e=>S(e,d(i))),C("keydown",a,e=>A(e,d(i))),g(e,a)};
z(j,e=>{
d(i)<t.node.children.length-1&&e(q)}),h(e=>y=_(x,"",y,e),[()=>({
flex:`${
M(t.node)[d(i)]??1} 1 0%`})]),g(e,f)}),o(a),ae(a,e=>j(x,e),()=>d(x)),g(e,a)},N=e=>{
hc(e,{
get windowNode(){
return t.node},get windowNumber(){
return s()},get onfocuswindow(){
return c()},get onmovewindow(){
return p()},get onclosewindow(){
return v()},get onloadmanifest(){
return u()},get oncanvaschange(){
return w()},get onopenmanifestmanager(){
return m()}})};
z(T,e=>{
"row"===t.node.type?e($):"column"===t.node.type?e(L,1):e(N,-1)}),g(e,q),i(),n()}x(["pointerdown","keydown"]);
var zc=n('<button type="button"> </button>'),Bc=n("<option> </option>"),Vc=n('<img alt="" class="svelte-wepstp"/>'),Hc=n('<img class="manifest-card__iiif svelte-wepstp" alt=""/>'),Uc=n('<button class="manifest-card__more svelte-wepstp" type="button"><!></button>'),Wc=n('<article class="manifest-card svelte-wepstp"><button class="manifest-card__load svelte-wepstp" type="button"><span class="manifest-card__thumbnail svelte-wepstp"><!></span> <span class="manifest-card__details svelte-wepstp"><strong class="svelte-wepstp"> </strong> <span class="manifest-card__source svelte-wepstp"> </span> <span class="manifest-card__count svelte-wepstp"><!> </span></span></button> <button type="button"><!></button> <!></article>'),Gc=n('<div class="manifest-grid svelte-wepstp"></div>'),Kc=n('<div class="manifest-manager__empty svelte-wepstp"><!> <p class="svelte-wepstp"> </p></div>'),qc=n('<div class="manifest-manager__browse svelte-wepstp"><div class="manifest-manager__controls svelte-wepstp"><div class="search-field svelte-wepstp"><!> <input type="search" class="svelte-wepstp"/></div> <div class="filter-row svelte-wepstp"><div class="filter-tabs svelte-wepstp"></div> <label class="source-filter svelte-wepstp"><span class="sr-only svelte-wepstp"> </span> <select class="svelte-wepstp"><option> </option><!></select> <!></label></div></div> <div class="manifest-manager__results svelte-wepstp"><div class="manifest-manager__hint svelte-wepstp"><!> <p class="svelte-wepstp"> <button type="button" class="svelte-wepstp"> </button></p></div> <!></div> <footer class="manifest-manager__footer svelte-wepstp"><button class="primary-button add-button svelte-wepstp" type="button"><!> </button></footer></div>'),Jc=n('<label class="target-field svelte-wepstp" for="manifest-manager-window"><span> </span> <select id="manifest-manager-window" class="svelte-wepstp"></select></label>'),Yc=n('<p class="manifest-manager__error svelte-wepstp" role="alert"> </p>'),Xc=n('<button class="secondary-button svelte-wepstp" type="button"> </button>'),Zc=n('<form class="manifest-manager__add-form svelte-wepstp"><p class="svelte-wepstp"> </p> <label class="url-field svelte-wepstp" for="manifest-manager-url"><!> <input id="manifest-manager-url" type="url" required="" class="svelte-wepstp"/></label> <!> <!> <div class="manifest-manager__add-actions svelte-wepstp"><a href="https://iiif.io/get-started/how-iiif-works/" target="_blank" rel="noreferrer" class="svelte-wepstp"> <!></a> <div class="manifest-manager__load-buttons svelte-wepstp"><!> <button class="primary-button load-button svelte-wepstp" type="submit"> </button></div></div></form>'),Qc=n('<section data-testid="manifest-manager"><header class="manifest-manager__header svelte-wepstp"><h2 class="svelte-wepstp"> </h2> <button class="icon-button svelte-wepstp" type="button"><!></button></header> <!></section>');
function $c(e,a){
le(a,!0);
let n=()=>O(_e,"$t",l),s=()=>O(Fe,"$manifestsStore",l),[l,v]=ee(),f="mango-workspace-manifests:v1",w="mango-workspace-manifest-favourites:v1",b=[{
id:"https://iiif.wellcomecollection.org/presentation/v2/b18035723",label:"Wellcome Collection — B18035723"},{
id:"https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json",label:"IIIF Cookbook — Single image"},{
id:"https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json",label:"IIIF Cookbook — Audio"},{
id:"https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json",label:"IIIF Cookbook — Video"}],m=U(a,"workspace",3,null),x=U(a,"onclose",3,void 0),y=U(a,"onsingleload",3,void 0),_=V("browse"),M=V("all"),S=V(""),A=V("all"),q=V(""),T=V(""),$=V(k([])),L=V(k([])),N=V(""),E=V(!1),P=V(k({
})),F=H(()=>m()?.windows??[]),D=H(()=>d(F).length>1),Z=H(()=>[...d($).filter(e=>!b.some(t=>t.id===e.id)),...b]),J=H(()=>Array.from(new Set(d(Z).map(e=>G(e.id)))).sort()),X=H(()=>{
let e=d(S).trim().toLocaleLowerCase();
return d(Z).filter(t=>{
let r=Y(t.id),a=d($).some(e=>e.id===t.id);
return!("library"===d(M)&&!r||"recent"===d(M)&&!a||"favourites"===d(M)&&!d(L).includes(t.id)||"all"!==d(A)&&G(t.id)!==d(A))&&(!e||t.label.toLocaleLowerCase().includes(e)||t.id.toLocaleLowerCase().includes(e)||G(t.id).toLocaleLowerCase().includes(e))})});
function G(e){
try{
let t=new URL(e).hostname.replace(/^www\./,"");
return t.includes("wellcomecollection")?"Wellcome Collection":"iiif.io"===t?"IIIF Cookbook":t}catch{
return n()("workspace.manifestManager.unknownSource")}}let Y=e=>b.some(t=>t.id===e),K=(e,t)=>{
try{
localStorage.setItem(e,JSON.stringify(t))}catch{
}},re=e=>{
j(L,d(L).includes(e)?d(L).filter(t=>t!==e):[...d(L),e],!0),K(w,d(L))},ae=e=>{
if(Y(e))return;
j($,d($).filter(t=>t.id!==e),!0),j(L,d(L).filter(t=>t!==e),!0);
let t={
...d(P)};
delete t[e],j(P,t,!0),K(f,d($)),K(w,d(L))},oe=async(e=!1,t=d(q))=>{
let r=t.trim();
if(!r||d(E))return;
j(N,""),j(E,!0),await we(r);
let a=Q(Fe)[r];
if(j(E,!1),a?.error)j(N,n()("workspace.manifestManager.loadError",{
error:a.error}),!0);
else{
if(((e,t)=>{
j($,[{
id:e,label:t},...d($).filter(t=>t.id!==e)],!0),K(f,d($))})(r,a?.label??r),d(D)&&m())if(e)d(F).forEach(e=>m().setWindowManifest(e.id,r));
else{
let e=d(T)||m().activeWindowId||d(F)[0]?.id;
e&&(m().setWindowManifest(e,r),m().setActiveWindow(e))}else m()?.activeWindowId?m().setWindowManifest(m().activeWindowId,r):y()?.(r);
x()?.()}};
p(()=>{
j(T,m()?.activeWindowId??d(F)[0]?.id??"",!0),j($,(()=>{
try{
let e=JSON.parse(localStorage.getItem(f)??"[]");
return Array.isArray(e)?e.filter(e=>"string"==typeof e?.id&&"string"==typeof e?.label):[]}catch{
return[]}})(),!0),j(L,(()=>{
try{
let e=JSON.parse(localStorage.getItem(w)??"[]");
return Array.isArray(e)?Array.from(new Set(e.filter(e=>"string"==typeof e))):[]}catch{
return[]}})(),!0),(async e=>{
await Promise.all(e.map(async e=>{
await we(e.id);
let t=Q(Fe)[e.id];
j(P,{
...d(P),[e.id]:De(t?.manifesto)},!0)}))})([...b,...d($).filter(e=>!b.some(t=>t.id===e.id))])});
var ie=Qc();
let se;
var ce=W(ie),pe=W(ce),ve=W(pe,!0);
o(pe);
var ge=R(pe,2),ue=W(ge);
Be(ue,{
size:20}),o(ge),o(ce);
var he=R(ce,2),fe=e=>{
var a=qc(),i=W(a),l=W(i),c=W(l);
un(c,{
size:18,"aria-hidden":"true"});
var p=R(c,2);
te(p),o(l);
var v=R(l,2),f=W(v);
B(f,20,()=>["all","library","recent","favourites"],t,(e,t)=>{
var a=zc();
let i;
var s=W(a,!0);
o(a),h(e=>{
I(a,"aria-pressed",d(M)===t),i=r(a,1,"svelte-wepstp",null,i,{
active:d(M)===t}),u(s,e)},[()=>n()(`workspace.manifestManager.${
t}`)]),C("click",a,()=>j(M,t,!0)),g(e,a)}),o(f);
var w=R(f,2),b=W(w),m=W(b,!0);
o(b);
var x=R(b,2),y=W(x),k=W(y,!0);
o(y),y.value=y.__value="all";
var q=R(y);
B(q,17,()=>d(J),t,(e,t)=>{
var r=Bc(),a=W(r,!0);
o(r);
var i={
};
h(()=>{
u(a,d(t)),i!==(i=d(t))&&(r.value=(r.__value=d(t))??"")}),g(e,r)}),o(x),_t(R(x,2),{
size:16,"aria-hidden":"true"}),o(w),o(v),o(i);
var T=R(i,2),$=W(T),N=W($);
vn(N,{
size:32,"aria-hidden":"true"});
var O=R(N,2),U=W(O),V=R(U),F=W(V,!0);
o(V),o(O),o($);
var D=R($,2),Z=e=>{
var t=Gc();
B(t,21,()=>d(X),e=>e.id,(e,t)=>{
let a=H(()=>s()[d(t).id]);
var i=Wc(),l=W(i),c=W(l),p=W(c),v=e=>{
var r=Vc();
h(()=>I(r,"src",d(P)[d(t).id]??"")),g(e,r)},f=e=>{
var t=Hc();
h(()=>I(t,"src",Ci)),g(e,t)};
z(p,e=>{
d(P)[d(t).id]?e(v):e(f,-1)}),o(c);
var w=R(c,2),b=W(w),m=W(b,!0);
o(b);
var x=R(b,2),y=W(x,!0);
o(x);
var _=R(x,2),k=W(_);
xe(k,{
size:15,"aria-hidden":"true"});
var j=R(k);
o(_),o(w),o(l);
var M=R(l,2);
let S;
var A=W(M);
{
let e=H(()=>d(L).includes(d(t).id)?"currentColor":"none");
Sn(A,{
size:21,get fill(){
return d(e)}})}o(M);
var q=R(M,2),T=e=>{
var r=Uc();
Tt(W(r),{
size:20}),o(r),h((e,t)=>{
r.disabled=d(E),I(r,"title",e),I(r,"aria-label",t)},[()=>n()("workspace.manifestManager.remove"),()=>n()("workspace.manifestManager.removeAria",{
label:d(t).label})]),C("click",r,()=>ae(d(t).id)),g(e,r)},$=H(()=>!Y(d(t).id));
z(q,e=>{
d($)&&e(T)}),o(i),h((e,o,i,n,s,c)=>{
l.disabled=d(E),I(l,"aria-label",e),u(m,d(a)?.label??d(t).label),u(y,o),u(j,` ${
i??""}`),S=r(M,1,"manifest-card__favourite svelte-wepstp",null,S,n),I(M,"aria-pressed",s),I(M,"aria-label",c)},[()=>n()("workspace.manifestManager.openAria",{
label:d(t).label}),()=>G(d(t).id),()=>n()("workspace.manifestManager.itemCount",{
count:d(a)?.canvases?.length??0}),()=>({
active:d(L).includes(d(t).id)}),()=>d(L).includes(d(t).id),()=>n()("workspace.manifestManager.favouriteAria",{
label:d(t).label})]),C("click",l,()=>{
oe(!1,d(t).id)}),C("click",M,()=>re(d(t).id)),g(e,i)}),o(t),g(e,t)},Q=e=>{
var t=Kc(),r=W(t);
Sn(r,{
size:28,"aria-hidden":"true"});
var a=R(r,2),i=W(a,!0);
o(a),o(t),h(e=>u(i,e),[()=>n()("workspace.manifestManager.noResults")]),g(e,t)};
z(D,e=>{
d(X).length>0?e(Z):e(Q,-1)}),o(T);
var K=R(T,2),ee=W(K),ie=W(ee);
Ce(ie,{
size:20,"aria-hidden":"true"});
var se=R(ie);
o(ee),o(K),o(a),h((e,t,r,a,o,i,n,s)=>{
I(p,"placeholder",e),I(p,"aria-label",t),I(f,"aria-label",r),u(m,a),u(k,o),u(U,`${
i??""} `),u(F,n),u(se,` ${
s??""}`)},[()=>n()("workspace.manifestManager.searchPlaceholder"),()=>n()("workspace.manifestManager.search"),()=>n()("workspace.manifestManager.filterAria"),()=>n()("workspace.manifestManager.source"),()=>n()("workspace.manifestManager.allSources"),()=>n()("workspace.manifestManager.pasteHint"),()=>n()("workspace.manifestManager.yourLibrary"),()=>n()("workspace.manifestManager.addUrl")]),ne(p,()=>d(S),e=>j(S,e)),de(x,()=>d(A),e=>j(A,e)),C("click",V,()=>j(_,"add")),C("click",ee,()=>j(_,"add")),g(e,a)},be=e=>{
var t=Zc(),r=W(t),a=W(r,!0);
o(r);
var i=R(r,2),s=W(i);
Gt(s,{
size:18,"aria-hidden":"true"});
var l=R(s,2);
te(l),o(i);
var p=R(i,2),v=e=>{
var t=Jc(),r=W(t),a=W(r,!0);
o(r);
var i=R(r,2);
B(i,23,()=>d(F),e=>e.id,(e,t,r)=>{
var a=Bc(),i=W(a);
o(a);
var s={
};
h((e,r)=>{
u(i,`${
e??""}${
r??""}`),s!==(s=d(t).id)&&(a.value=(a.__value=d(t).id)??"")},[()=>n()("workspace.manifestManager.window",{
number:d(r)+1}),()=>d(t).id===m()?.activeWindowId?` — ${
n()("workspace.manifestManager.active")}`:""]),g(e,a)}),o(i),o(t),h(e=>u(a,e),[()=>n()("workspace.manifestManager.targetWindow")]),de(i,()=>d(T),e=>j(T,e)),g(e,t)};
z(p,e=>{
d(D)&&e(v)});
var f=R(p,2),w=e=>{
var t=Yc(),r=W(t,!0);
o(t),h(()=>u(r,d(N))),g(e,t)};
z(f,e=>{
d(N)&&e(w)});
var b=R(f,2),x=W(b),y=W(x);
Vt(R(y),{
size:15,"aria-hidden":"true"}),o(x);
var _=R(x,2),k=W(_),M=e=>{
var t=Xc(),r=W(t,!0);
o(t),h((e,a)=>{
t.disabled=e,u(r,a)},[()=>d(E)||!d(q).trim(),()=>n()("workspace.manifestManager.replaceAll")]),C("click",t,()=>{
oe(!0)}),g(e,t)};
z(k,e=>{
d(D)&&e(M)});
var S=R(k,2),A=W(S,!0);
o(S),o(_),o(b),o(t),h((e,t,r,o)=>{
u(a,e),I(l,"placeholder",t),u(y,`${
r??""} `),S.disabled=d(E),u(A,o)},[()=>n()("workspace.manifestManager.addDescription"),()=>n()("workspace.manifestManager.urlPlaceholder"),()=>n()("workspace.manifestManager.whatIsIiif"),()=>d(E)?n()("workspace.manifestManager.loading"):n()("workspace.manifestManager.load")]),c("submit",t,e=>{
e.preventDefault(),oe(!1)}),ne(l,()=>d(q),e=>j(q,e)),g(e,t)};
z(he,e=>{
"browse"===d(_)?e(fe):e(be,-1)}),o(ie),h((e,t,a)=>{
se=r(ie,1,"manifest-manager svelte-wepstp",null,se,{
"manifest-manager--add":"add"===d(_)}),I(ie,"aria-label",e),u(ve,t),I(ge,"aria-label",a)},[()=>n()("workspace.manifestManager.ariaLabel"),()=>"browse"===d(_)?n()("workspace.manifestManager.title"):n()("workspace.manifestManager.addTitle"),()=>n()("workspace.manifestManager.close")]),C("click",ge,()=>x()?.()),g(e,ie),i(),v()}x(["click"]);
var el=class e{
constructor(e,t,r,a){
this.x=e,this.y=t,this.w=r,this.h=a}toString(){
return[Math.floor(this.x),Math.floor(this.y),Math.floor(this.w),Math.floor(this.h)].join(",")}static fromString(t){
let[r,a,o,i]=t.replace("xywh=","").split(",").map(Number);
return new e(r,a,o,i)}};
function tl(e=window.location.hash){
let t={
};
if(!e||e.length<=1)return t;
let r=e.replace(/^[#?]/,""),a=new URLSearchParams(r);
if((a.has("manifest")||a.has("iiifManifestId"))&&(t.manifestId=a.get("manifest")||a.get("iiifManifestId")||void 0),a.has("cv")){
let e=parseInt(a.get("cv")||"",10);
isNaN(e)||(t.canvasIndex=e)}if(a.has("xywh")&&(t.xywh=a.get("xywh")||void 0),a.has("r")){
let e=parseInt(a.get("r")||"",10);
isNaN(e)||(t.rotation=e)}else if(a.has("rotation")){
let e=parseInt(a.get("rotation")||"",10);
isNaN(e)||(t.rotation=e)}return a.has("target")&&(t.target=a.get("target")||void 0),a.has("iiif-content")&&(t.iiifContent=a.get("iiif-content")||void 0),t}var nl=e=>!!(e&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.w)&&Number.isFinite(e.h)&&e.w>0&&e.h>0),rl=e=>{
if(!e)return null;
let t=el.fromString(e),r={
x:t.x,y:t.y,w:t.w,h:t.h};
return nl(r)?r:null},il=(e={
},t={
})=>{
let r=Number.isInteger(e.initialCanvasIndex)?Math.max(0,e.initialCanvasIndex??0):0,a=Number.isFinite(e.initialRotation)?e.initialRotation??0:0,o=rl(t.xywh),i=nl(e.initialViewBox)?{
...e.initialViewBox}:null;
return{
selectedCanvasIndex:Number.isInteger(t.canvasIndex)&&(t.canvasIndex??-1)>=0?t.canvasIndex??0:r,layoutMode:e.initialLayoutMode??"single",rotation:Number.isFinite(t.rotation)?t.rotation??0:a,viewBox:o??i}},al=(e=navigator)=>/iPad/i.test(e.userAgent)||"MacIntel"===e.platform&&e.maxTouchPoints>1,ol=e=>e instanceof Element&&(e.classList.contains("gallery__list")||e.classList.contains("panel-stack--left")||e.classList.contains("stage-gallery-view")||e.classList.contains("story-shell__footer")||e.classList.contains("stage__toolbar")||e.classList.contains("viewer__control-rail")||e.classList.contains("viewer__dock")||e.classList.contains("osd")||e.classList.contains("osd__viewport")||e.classList.contains("openseadragon-canvas")),sl=({
getRoot:e,getShadowHost:t,onChange:r,preferFallback:a=()=>!1})=>{
let o=!1,i=null,n=()=>{
let r=e();
if(!r||typeof document>"u")return!1;
let a=r.getRootNode(),o=a instanceof ShadowRoot?a.fullscreenElement:null;
return document.fullscreenElement===r||document.fullscreenElement===t()||o===r},s=()=>r({
active:o||n(),fallback:o}),l=e=>{
if(!(typeof document>"u")){
if(i?.(),i=null,o=e,e){
let e=document.body.style.overflow,t=document.documentElement.style.overflow;
document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",i=()=>{
document.body.style.overflow=e,document.documentElement.style.overflow=t}}s()}},d=e=>{
(o||n())&&("pointerType"in e&&"touch"!==e.pointerType||e.composedPath().some(ol)||e.preventDefault())},c=e=>{
"Escape"!==e.key||!o||(e.preventDefault(),l(!1))};
return{
toggle:async()=>{
if(typeof document>"u")return;
if(o)return void l(!1);
if(n())return await(document.exitFullscreen?.()),void s();
let t=e();
if(t){
if(a())return void l(!0);
if(t.requestFullscreen&&!1!==document.fullscreenEnabled)try{
return await t.requestFullscreen({
navigationUI:"hide"}),s(),void(n()||l(!0))}catch{
return void l(!0)}l(!0)}},attach:()=>{
if(typeof document>"u")return()=>{
};
let t=e();
return s(),document.addEventListener("fullscreenchange",s),document.addEventListener("keydown",c,{
capture:!0}),t?.addEventListener("touchmove",d,{
capture:!0,passive:!1}),t?.addEventListener("pointermove",d,{
capture:!0}),()=>{
document.removeEventListener("fullscreenchange",s),document.removeEventListener("keydown",c,{
capture:!0}),t?.removeEventListener("touchmove",d,{
capture:!0}),t?.removeEventListener("pointermove",d,{
capture:!0}),l(!1)}}}},cl=({
root:e,breakpoint:t,wasMobile:r,onChange:a,onEnterMobile:o,blockBreakpoint:i,onBlockChange:n})=>{
if(!e)return()=>{
};
let s=r,l=()=>{
let t=getComputedStyle(e),r=parseFloat(t.paddingLeft||"0")+parseFloat(t.paddingRight||"0");
return e.clientWidth-(Number.isFinite(r)?r:0)},d=()=>{
let t=getComputedStyle(e),r=parseFloat(t.paddingTop||"0")+parseFloat(t.paddingBottom||"0");
return e.clientHeight-(Number.isFinite(r)?r:0)},c=(e,r)=>{
let l=e<=t;
l&&!s&&o(),s=l,a(l),"number"==typeof i&&n?.(r<=i)};
if(c(l(),d()),typeof ResizeObserver>"u")return()=>{
};
let p=new ResizeObserver(e=>{
let t=e[0]?.contentBoxSize?.[0]?.inlineSize,r=e[0]?.contentBoxSize?.[0]?.blockSize;
c("number"==typeof t?t:l(),"number"==typeof r?r:d())});
return p.observe(e),()=>p.disconnect()},ll=e=>{
if(!e||"object"!=typeof e||Array.isArray(e))return null;
try{
let t=Kr(Ur(e).root,e=>"manifest"===e.type),r=t?.[t.length-1];
return r?.manifestId??r?.id??null}catch{
return null}},ul=async(e,t)=>{
e.on?await new Promise(r=>{
let a,o=!1,i=()=>{
o||(o=!0,a?.(),clearTimeout(n),r())},n=setTimeout(i,t);
a=e.on?.("stateChange",()=>{
(e.getCanvasCount?.()??1)>0&&i()})}):await new Promise(e=>setTimeout(e,0))},dl=async(e,t,r={
})=>{
if(!t.manifestId)return;
let a=e.getManifestId?.()!==t.manifestId;
a&&e.setManifest(t.manifestId),t.canvasId&&e.setCanvasById&&(a&&await ul(e,r.canvasTimeoutMs??1e4),e.setCanvasById(t.canvasId))},fl=n('<button type="button" class="viewer__backdrop viewer__backdrop--active svelte-zw2q18" aria-label="Close panels"></button>'),pl=n('<span class="viewer__title-divider svelte-zw2q18" aria-hidden="true">|</span> <span class="svelte-zw2q18"> </span>',1),ml=n("<!> <!>",1),hl=n('<button type="button" class="viewer__export-btn svelte-zw2q18"> </button>'),gl=n('<button class="viewer__expand-sidebar svelte-zw2q18" type="button" aria-label="Expand sidebar" title="Expand sidebar"><!></button>'),_l=n('<aside class="viewer__control-rail svelte-zw2q18"><!></aside>'),vl=n("<div><!></div>"),yl=n('<div class="stage__story-slot svelte-zw2q18"><!> <!></div>'),bl=n('<main class="stage stage--story svelte-zw2q18"><!></main>'),xl=n('<img class="stage-gallery-view__img svelte-zw2q18" loading="lazy"/>'),Sl=n('<div class="stage-gallery-view__placeholder svelte-zw2q18"><!> <span class="stage-gallery-view__index svelte-zw2q18"> </span></div>'),Cl=n('<button type="button"><div class="stage-gallery-view__thumb-wrapper svelte-zw2q18"><!></div> <div class="stage-gallery-view__label svelte-zw2q18"> </div></button>'),wl=n('<div class="stage-gallery-view svelte-zw2q18"><div class="stage-gallery-view__grid svelte-zw2q18"></div></div>'),Tl=n('<div class="stage__bottom svelte-zw2q18"><!></div>'),El=n("<div><!> <!> <!></div> <!> <!>",1),Dl=n("<main><!></main>"),Ol=n('<aside class="panel-stack panel-stack--right svelte-zw2q18"><!></aside>'),kl=n('<div aria-live="polite"><!> <div class="viewer__top-row svelte-zw2q18"><div class="viewer__top-title svelte-zw2q18"><!></div> <div class="viewer__top-actions svelte-zw2q18"><!> <!> <button type="button" class="viewer__fullscreen-btn viewer__fullscreen-btn--labelled svelte-zw2q18"><!> <span class="svelte-zw2q18"> </span></button></div></div> <!> <div><!> <!> <!> <!> <!></div></div>');
function Al(t,n){
le(n,!0);
let s=()=>O(et,"$mediaSource",ne),l=()=>O(dt,"$allowThumbnails",ne),c=()=>O(gt,"$allowSearch",ne),v=()=>O(ut,"$allowAnnotations",ne),w=()=>O(ht,"$allowTools",ne),m=()=>O(Et,"$annotationMode",ne),x=()=>O(Ct,"$zoom",ne),y=()=>O(It,"$selectedCanvasIndex",ne),_=()=>O(Ye,"$canvases",ne),M=()=>O(Pt,"$imageFilters",ne),S=()=>O(ot,"$overlayAnnotations",ne),A=()=>O(Nt,"$layoutMode",ne),q=()=>O(pt,"$allowCollection",ne),T=()=>O(ft,"$allowLayers",ne),$=()=>O(tt,"$mediaType",ne),L=()=>O(Xe,"$manifestEntry",ne),E=()=>O(nt,"$pluginSlots",ne),P=()=>O(_e,"$t",ne),F=()=>O(St,"$showMetadata",ne),D=()=>O(rt,"$rendererComponent",ne),J=()=>O(kt,"$activeLayoutImages",ne),X=()=>O(it,"$highlightIds",ne),G=()=>O(Ut,"$activeAnnotationId",ne),Y=()=>O(Bt,"$hoverAnnotationId",ne),K=()=>O(Ot,"$rotation",ne),te=()=>O(wt,"$mediaSources",ne),oe=()=>O(Rt,"$layerOpacities",ne),ie=()=>O(Ke,"$canvasThumbnails",ne),[ne,se]=ee(),de="#a78bfa",pe=["#fb7185","#2ac7ff","#22c55e","#06b6d4","#818cf8","#ec4899"],ge=[{
id:"research",name:"Research Notes",color:"#fb7185",visible:!0},{
id:"transcription",name:"Transcription",color:"#60a5fa",visible:!0},{
id:"highlights",name:"Highlights",color:"#34d399",visible:!0},{
id:"mine",name:"My Annotations",color:"#a78bfa",visible:!0}],ue=e=>`stroke: ${
e};
 fill: rgba(${
parseInt(e.slice(1,3),16)||0}, ${
parseInt(e.slice(3,5),16)||0}, ${
parseInt(e.slice(5,7),16)||0}, 0.18);
`,he=e=>{
if(!e)return null;
let t=e.match(/stroke:\s*([^;
]+)/i);
if(!t)return null;
let r=t[1]?.trim();
if(!r)return null;
let a=r.match(/^#([0-9a-f]{
6})$/i);
return a?`#${
a[1].toLowerCase()}`:null},be=e=>e.split(/[-_\s]+/).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")||"Layer",me=U(n,"manifestId",15,""),xe=U(n,"config",3,void 0),ke=U(n,"plugins",19,()=>[]),ze=U(n,"mode",3,void 0),Ie=U(n,"story",3,void 0),Ce=U(n,"storyUrl",3,void 0),je=U(n,"onstoryViewerError",3,void 0),Me=U(n,"canvasIndex",3,void 0),Se=U(n,"oncanvaschange",3,void 0),Ae=typeof window<"u"&&"function"==typeof window.matchMedia&&window.matchMedia("(max-width: 1024px)").matches,qe=[Tn()],Te=e=>{
let t=ct(e);
return ze()&&"viewer"!==ze()||void 0!==t.sidebar?.open?t:{
...t,sidebar:{
...t.sidebar,open:!1}}},$e=Te(xe()),We=V(k($e)),Le=il($e,typeof window<"u"?tl(window.location.hash):{
}),Re=V(null),Ne=V(null),Oe=V(null),Ee=!1,Ue=!1,Be=Aa({
manifestId:me(),config:d(We),plugins:[...qe],...Le,selectedCanvasIndex:Me()??Le.selectedCanvasIndex}),Pe=bs(Be),Ze=Me()??Q(Be.selectedCanvasIndex),Je=V(null),Qe=Us({
state:Be,derived:Pe,dispatch:(e,t)=>{
"storyViewerError"===e&&je()?.(t)},applyViewBox:e=>d(Je)?.setViewBox?.(e)}),{
manifestEntry:Xe,collectionEntry:Ge,canvases:Ye,canvasThumbnails:Ke,mediaSource:et,mediaType:tt,rendererComponent:rt,annotations:at,overlayAnnotations:ot,highlightIds:it,pluginSlots:nt,leftVisible:st,rightVisible:lt,allowThumbnails:dt,allowCollection:pt,allowMetadata:vt,allowSearch:gt,allowAnnotations:ut,allowTools:ht,allowLayers:ft,mediaSources:wt,contentsAvailable:bt,avChaptersAvailable:yt,avTranscriptAvailable:_t,activeLayoutImages:kt}=Pe,zt=Pe.av.controller,{
selectedCanvasIndex:It,zoom:Ct,showThumbnails:jt,showCollection:Mt,showMetadata:St,showSearch:At,showAnnotations:qt,showTools:Tt,showSettings:$t,showContents:Wt,showLayers:Lt,layerOpacities:Rt,layoutMode:Nt,rotation:Ot,annotationMode:Et,activeAnnotationId:Ut,hoverAnnotationId:Bt,imageFilters:Pt,userAnnotations:Vt}=Be,Ht=new ua;
b(da,Ht);
let Zt,Jt=V(k(Ae)),Qt=V(!1),Xt=V(!1),Gt=H(()=>!1!==d(We).sidebar?.enabled),Yt=H(()=>d(We).sidebar?.position??"left"),Kt=V(!1),er=H(()=>!!s()),tr=H(()=>O(jt,"$showThumbnails",ne)&&l()),rr=H(()=>O(At,"$showSearch",ne)&&c()),ar=H(()=>O(qt,"$showAnnotations",ne)&&v()),or=H(()=>O(Tt,"$showTools",ne)&&w()),ir=H(()=>"story-viewer"===ze()),nr=H(()=>"story-builder"===ze()),sr=H(()=>"annotation-editor"===ze()),lr=H(()=>!ze()||"viewer"===ze()),dr=V(!0),cr=()=>{
void 0!==Zt&&(clearTimeout(Zt),Zt=void 0)},pr=()=>{
d(lr)&&(cr(),Zt=setTimeout(()=>{
j(dr,!1),Zt=void 0},2800))},vr=()=>{
d(lr)&&(j(dr,!0),pr())},gr=()=>{
d(lr)&&(j(dr,!0),cr())},ur=e=>{
let t=e=>(e=>{
let t=e.currentTarget;
e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||pr()})(e);
return e.addEventListener("pointermove",vr),e.addEventListener("pointerdown",vr),e.addEventListener("keydown",vr),e.addEventListener("focusin",gr),e.addEventListener("focusout",t),{
destroy:()=>{
e.removeEventListener("pointermove",vr),e.removeEventListener("pointerdown",vr),e.removeEventListener("keydown",vr),e.removeEventListener("focusin",gr),e.removeEventListener("focusout",t)}}};
e(()=>{
d(ir)&&(async()=>{
if(d(Re)&&d(Ne)||Ee)return;
Ee=!0;
let[e,t]=await Promise.all([import("./StoryControlsStage-C_wRC44T.js"),import("./StoryAnnotationOverlay-DgdFk0G0.js").then(e=>e.n)]);
j(Re,e.default,!0),j(Ne,t.default,!0),Ee=!1})(),d(sr)&&(async()=>{
if(d(Oe)||Ue)return;
Ue=!0;
let e=await import("./AnnotationWorkspace-DD9CnKsf.js");
j(Oe,e.default,!0),Ue=!1})()}),e(()=>{
d(sr)&&("rectangle"===d(fr)||"point"===d(fr)||"polygon"===d(fr)||"freehand"===d(fr)||"line"===d(fr)?Qe.setAnnotationMode("create"):Qe.setAnnotationMode("edit"))});
let hr=H(()=>d(nr)||d(sr)||!0===d(We).allowCreateMode),fr=V("rectangle"),wr=V(k([])),br=V(!1),mr=V(null),xr=H(()=>d(hr)?m():"edit"),yr=V("1x1"),_r=V("toc"),kr=V(!1),zr=V(!1),Ir="",Cr="",jr=V(null),Mr=H(()=>"1x1"!==d(yr)&&!!d(jr)),Sr=()=>{
Be.showCollection.set(!1),Be.showContents.set(!1),Be.showAnnotations.set(!1),Be.showTools.set(!1),Be.showSettings.set(!1),Be.showSearch.set(!1),Be.showMetadata.set(!1),Be.showLayers.set(!1),j(kr,!1),j(zr,!1)},Ar=()=>{
Sr(),Be.showThumbnails.set(!1)},qr=e=>{
d(_r)===e&&Q(Wt)?Qe.setPanelOpen("contents",!1):(j(kr,!1),j(_r,e,!0),Qe.setPanelOpen("contents",!0))},Tr=(e,t)=>{
j(zr,!1),"compare"!==e?(j(kr,!1),Qe.setPanelOpen(e,t)):t?(Sr(),j(kr,!0)):j(kr,!1)},$r=()=>{
let e=!d(zr);
Sr(),j(zr,e)};
Ae&&Ar();
let Wr=V("dark"),Lr=V("en"),Rr=H(()=>d(lr)&&d(Gt)&&(d(Jt)||!d(Xt))),Nr=H(()=>!(d(ir)||d(Rr)||d(lr)&&d(Gt)&&d(Xt))),Or=V(0),Er=V(-1),Ur=H(()=>x()>0&&d(Or)>0?Math.max(10,Math.round(x()/d(Or)*100)):100),Br=e=>{
e.homeZoom&&e.homeZoom>0&&(j(Or,e.homeZoom,!0),j(Er,y(),!0)),Qe.handleZoomChange(e)},Pr=V(null),Vr=V(null),Hr=V(null),Fr=V(!1),Dr=V(0),Zr=V(!0),Jr=0,Qr=V(void 0),Xr=V(void 0),Gr=V(0),Yr=V(!1),Kr=V("idle"),ea=V(null),ta=V(!1),ra=V(!1),aa=V(k([])),ia=new Map,na=V(0),sa=V(0),la=H(()=>{
let e=d(Vr)?.chapters?.[d(Gr)];
return no(e?.title,d(xa))||(d(Dr)>0?`Chapter ${
d(Gr)+1}`:"")}),pa=H(()=>no(d(Vr)?.title,d(xa))||"Untitled story"),ga=H(()=>no(d(Vr)?.chapters?.[d(Gr)]?.description,d(xa))),ha=Z(null),fa=Object.freeze({
chapters:Object.freeze([])}),wa=Z(fa),ma=()=>{
let e=d(We).language?.trim();
if(e)return e.toLowerCase();
if(typeof navigator<"u"&&navigator.language){
let e=navigator.language.split("-")[0]?.trim().toLowerCase();
if(e)return e}return"en"},xa=H(ma),ya=H(()=>_()[y()]?.id??null);
function _a(){
if(!d(ea))return null;
let e=d(ea).getRootNode();
return e instanceof ShadowRoot?e.host:null}function za(e,t,...r){
let a=_a(),o=a?a[e]:void 0;
return"function"==typeof o?o.apply(a,r):t(...r)}e(()=>{
Ht.manifestId=me()??"",Ht.selectedCanvasIndex=y(),Ht.viewBox=ko(),Ht.imageFilters={
...M()}}),e(()=>{
j(Lr,(d(We).language??"en").toLowerCase(),!0)}),e(()=>{
let e=d(We).theme?.toLowerCase();
j(Wr,He(e)?e:"dark",!0)}),e(()=>{
ve(d(Lr))}),e(()=>{
if(d(sr)){
let e=d(fr)&&"select"!==d(fr)?"create":"edit";
m()!==e&&Qe.setAnnotationMode(e)}});
let Ia=sc({
getViewBox:()=>za("getViewBox",ko),setViewBox:e=>za("setViewBox",zo,e),getMediaType:()=>za("getMediaType",Ao),getState:()=>za("getState",Eo),getCanvasIndex:()=>za("getCanvasIndex",Uo),getCanvasId:()=>za("getCanvasId",Bo),getCanvasCount:()=>za("getCanvasCount",Po),setCanvasByIndex:e=>za("setCanvasByIndex",Vo,e),setCanvasById:e=>za("setCanvasById",Ho,e),setManifest:e=>za("setManifest",Fo,e),getManifestId:()=>za("getManifestId",Zo),start:()=>za("start",Jo),play:()=>za("play",Qo),pause:()=>za("pause",Xo),stop:()=>za("stop",Go),seekBy:e=>za("seekBy",Yo,e),seekTo:e=>za("seekTo",Ko,e),setModelOrbit:e=>za("setModelOrbit",qo,e),setModelTarget:e=>za("setModelTarget",To,e),setModelOrientation:e=>za("setModelOrientation",$o,e),setModelPose:(e,t)=>za("setModelPose",Wo,e,t),getModelOrbit:()=>za("getModelOrbit",Lo),getModelTarget:()=>za("getModelTarget",Ro),getModelOrientation:()=>za("getModelOrientation",No),getModelPose:()=>za("getModelPose",Oo),addAnnotation:e=>za("addAnnotation",ti,e),removeAnnotation:e=>za("removeAnnotation",ri,e),on:(e,t)=>za("on",yo,e,t),off:(e,t)=>za("off",_o,e,t),updateLayerOpacity:(e,t)=>za("updateLayerOpacity",(e,t)=>Qe.updateLayerOpacity(e,t),e,t),getLayerOpacities:()=>za("getLayerOpacities",()=>Q(Rt)),getMediaSources:()=>za("getMediaSources",()=>Q(wt))},{
language:ma()}),Ca=Ia.currentChapterIndex.subscribe(e=>{
j(Gr,e??0,!0)}),ja=Ia.isLoading.subscribe(e=>{
j(Yr,e,!0),e&&(j(sa,0),j(na,0))}),Ma=Ia.playState.subscribe(e=>{
j(Kr,e,!0)}),Sa=Ia.playbackState.subscribe(e=>{
j(na,e?.duration??0,!0),j(sa,e?.currentTime??0,!0)}),qa=()=>{
d(Zr)||Ia.play()},Ta=()=>{
d(Zr)||Ia.pause()},$a=()=>{
d(Zr)||Ia.stop()},Wa=(e,t=!0)=>{
if(d(Zr)||d(Fr))return;
let r=d(Dr);
if(!r)return;
let a=Math.max(0,Math.min(e,r-1));
j(Gr,a,!0),Ia.loadChapter(a,{
autoPlay:t})},La=()=>{
Wa(d(Gr)-1,!0)},Ra=()=>{
Wa(d(Gr)+1,!0)},Na=()=>{
d(Zr)||d(Fr)||Ia.loadChapter(d(Gr),{
autoPlay:!1})},Oa=sl({
getRoot:()=>d(ea),getShadowHost:_a,preferFallback:()=>typeof navigator<"u"&&al(navigator),onChange:({
active:e,fallback:t})=>{
j(ta,e,!0),j(ra,t,!0)}}),Ea=()=>{
Qe.setPanelOpen("contents",!1),Qe.setPanelOpen("annotations",!1),Qe.setPanelOpen("tools",!1),Qe.setPanelOpen("settings",!1),Qe.setPanelOpen("search",!1),Qe.setPanelOpen("metadata",!1),Qe.setPanelOpen("layers",!1),j(kr,!1)},Ua=()=>{
j(Xt,!0)},Ba=()=>{
j(Xt,!1)};
p(()=>{
let e=Oa.attach(),t=cl({
root:d(ea),breakpoint:1024,wasMobile:Ae,onChange:e=>{
j(Jt,e,!0)},onEnterMobile:Ar,blockBreakpoint:500,onBlockChange:e=>{
j(Qt,e,!0)}});
return vr(),()=>{
cr(),t(),e()}});
let Pa=V(null),Va=V(k([...ge])),Ha=H(()=>new Set(d(Va).filter(e=>e.visible).map(e=>e.id))),Fa=e=>(e?.trim()||"mine").trim(),Da=e=>{
let t=Fa(e.targetStyleClass);
return d(Ha).has(t)},Za=H(()=>d(sr)?O(at,"$annotations",ne):S()),Ja=H(()=>d(Za).filter(e=>Da(e))),Qa=H(()=>d(Pa)&&Da(d(Pa))?d(Pa):null),Xa=H(()=>d(Qa)?[...d(Ja),d(Qa)]:d(Ja)),Ga=e=>{
j(Va,d(Va).map(t=>t.id===e.id?{
...t,visible:!t.visible}:t),!0)},Ya=()=>{
let e=d(Va).length+1,t=`layer-${
e}`;
for(;
d(Va).some(e=>e.id===t);
)e+=1,t=`layer-${
e}`;
let r=pe[(e-1)%pe.length]??de;
j(Va,[...d(Va),{
id:t,name:`Layer ${
e}`,color:r,visible:!0}],!0)},Ka=e=>{
j(Va,d(Va).map(t=>t.id===e.id?{
...t,color:e.color}:t),!0);
let t={
targetStyleClass:e.id,targetStyle:ue(e.color)},r=new Set(d(Za).filter(t=>Fa(t.targetStyleClass)===e.id).map(e=>e.id));
d(Pa)&&Fa(d(Pa).targetStyleClass)===e.id&&r.add(d(Pa).id);
for(let e of r)ao(e,t)};
e(()=>{
let e=new Set(d(Va).map(e=>e.id)),t=[],r=d(Pa)?[...d(Za),d(Pa)]:d(Za);
for(let a of r){
let r=a.targetStyleClass?.trim();
!r||e.has(r)||(e.add(r),t.push({
id:r,name:be(r),color:he(a.targetStyle)??de,visible:!0}))}t.length>0&&j(Va,[...d(Va),...t],!0)});
let eo=Ut.subscribe(e=>{
d(Pa)&&e&&e!==d(Pa).id&&j(Pa,null)});
f(eo);
let to=async e=>{
let t=e?.annotation;
if(!t||"object"!=typeof t)return;
let r=oa(t);
if(r){
if(r.targetStyleClass="mine",r.targetStyle=ue((e=>d(Va).find(t=>t.id===e))("mine")?.color??de),r.motivation=r.motivation&&r.motivation.length>0?r.motivation:["oa:commenting"],d(nr))return Qe.emitEvent("annotationCreate",{
annotation:r,tool:e.tool??ca(t)??void 0}),j(fr,"select"),void Qe.setAnnotationMode("edit");
j(Pa,r),Qe.handleAnnotationSelect({
id:r.id,preventZoom:!0})}},ro=async e=>{
if(!d(nr))return d(Pa)&&d(Pa).id===e?(j(Pa,null),void Qe.handleAnnotationClear()):void await Qe.removeAnnotation(e);
Qe.emitEvent("annotationDelete",{
annotationId:e})},ao=(e,t)=>{
d(nr)?Qe.emitEvent("annotationUpdate",{
annotationId:e,patch:t}):d(Pa)&&d(Pa).id===e?j(Pa,{
...d(Pa),...t}):Qe.updateAnnotation(e,t)},oo=async()=>{
if(d(Pa))return await Qe.addAnnotation(d(Pa)),j(Pa,null),j(fr,"select"),Qe.setAnnotationMode("edit"),void Qe.handleAnnotationClear();
let e=Q(Ut);
e&&(await Qe.updateAnnotation(e,{
}),j(fr,"select"),Qe.setAnnotationMode("edit"),Qe.handleAnnotationClear())},io=()=>{
let e=Q(Vt)??{
},t=Object.values(e).flat();
Qe.emitEvent("exportAnnotations",{
annotations:t})},no=(e,t)=>e?e[t]?.trim()||(Object.values(e).find(e=>"string"==typeof e&&e.trim().length>0)?.trim()??""):"",so={
viewer:{
getViewBox:ko,setViewBox:zo,getZoom:Io,setZoom:Co,zoomIn:jo,zoomOut:Mo,panTo:So,getMediaType:Ao,getState:Eo,getCanvasIndex:Uo,getCanvasId:Bo,getCanvasCount:Po,setCanvasByIndex:Vo,setCanvasById:Ho,setManifest:Fo,getManifestId:Zo,start:Jo,play:Qo,pause:Xo,stop:Go,seekBy:Yo,seekTo:Ko,setMediaSegment:ei,setModelOrbit:qo,setModelTarget:To,setModelOrientation:$o,setModelPose:Wo,getModelOrbit:Lo,getModelTarget:Ro,getModelOrientation:No,getModelPose:Oo,addAnnotation:ti,removeAnnotation:ri,setAnnotationTool:e=>{
j(fr,e,!0),Qe.setAnnotationMode("select"===e?"edit":"create")},setStoryAnnotations:e=>{
j(wr,e,!0),d(mr)&&!e.some(e=>e.id===d(mr))&&j(mr,null)},setStoryAnnotationEditing:e=>{
j(br,e,!0),e||(j(mr,null),j(fr,"select"),Qe.setAnnotationMode("edit"))},setStoryAnnotationSelection:e=>{
j(mr,e,!0)},updateLayerOpacity:(e,t)=>{
Qe.updateLayerOpacity(e,t)},getLayerOpacities:()=>Q(Rt),getMediaSources:()=>Q(wt),on:yo,off:_o},events:Qe.events,get config(){
return d(We)}},lo={
onMediaPlay:e=>Qe.handleMediaPlay(e),onMediaPause:e=>Qe.handleMediaPause(e),onMediaTimeUpdate:e=>Qe.handleMediaTimeUpdate(e),onMediaSeek:e=>Qe.handleMediaSeek(e),onMediaSegmentEnd:()=>Qe.handleMediaSegmentEnd(),onModelChange:e=>Qe.handleModelChange(e),onAnnotationHover:e=>Qe.handleAnnotationHover(e),onAnnotationSelect:e=>{
d(sr)&&"create"===m()||(Qe.handleAnnotationSelect(e),d(sr)&&d(Pa)?.id!==e.id&&(j(fr,"select"),Qe.setAnnotationMode("edit")))},onAnnotationClear:()=>Qe.handleAnnotationClear()},co=e=>{
if(!d(Je)?.zoomBy)return;
j(Pr,e,!0);
let t=Math.max(10,d(Ur)),r=((e,t)=>{
if("in"===e){
let e=10*Math.ceil(t/10);
return e<=t+.01?e+10:e}let r=10*Math.floor(t/10),a=r>=t-.01?r-10:r;
return Math.max(10,a)})(e,t)/t;
!Number.isFinite(r)||r<=0||d(Je).zoomBy(r)},po=()=>co("in"),vo=()=>co("out"),go=e=>{
if(!d(Je)?.zoomBy)return;
let t=Math.max(10,Math.min(2e3,Math.round(e.percent)))/Math.max(10,d(Ur));
!Number.isFinite(t)||t<=0||Math.abs(t-1)<.001||(j(Pr,null),d(Je).zoomBy(t))},uo=()=>{
let e=y();
if("two-page"===A())if(e<=2)Qe.setCanvasByIndex(0);
else{
let t=e%2==1?e:e-1;
Qe.setCanvasByIndex(Math.max(0,t-2))}else Qe.setCanvasByIndex(e-1)},ho=()=>{
let e=y();
if("two-page"===A())if(0===e)Qe.setCanvasByIndex(1);
else{
let t=e%2==1?e:e-1;
Qe.setCanvasByIndex(Math.min(_().length-1,t+2))}else Qe.setCanvasByIndex(e+1)},fo=e=>{
Qe.setCanvasByIndex(e.index)},wo=()=>d(Je)?.goHome?.(),bo=()=>{
Qe.setPanelOpen("thumbnails",!d(ni))},mo=e=>{
let t=(()=>{
let e=d(ea)?.querySelector(".gallery");
return!!e&&"absolute"===getComputedStyle(e).position})();
Qe.setCanvasByIndex(e),t&&Qe.setPanelOpen("thumbnails",!1)},xo=()=>d(Je)?.rotateBy?.(90);
function yo(e,t){
return Qe.on(e,t)}function _o(e,t){
Qe.off(e,t)}function ko(){
return d(Je)?.getViewBox?.()??null}function zo(e){
d(Je)?.setViewBox?.(e)}function Io(){
return d(Ur)}function Co(e){
Number.isFinite(e)&&go({
percent:e})}function jo(){
po()}function Mo(){
vo()}function So(e,t){
if(!Number.isFinite(e)||!Number.isFinite(t))return;
let r=ko();
r&&zo({
x:e-r.w/2,y:t-r.h/2,w:r.w,h:r.h})}function Ao(){
return Q(tt)}function qo(e){
d(Je)?.setModelOrbit?.(e)}function To(e){
d(Je)?.setModelTarget?.(e)}function $o(e){
d(Je)?.setModelOrientation?.(e)}function Wo(e,t){
d(Je)?.setModelPose?.(e,t)}function Lo(){
return d(Je)?.getModelOrbit?.()??null}function Ro(){
return d(Je)?.getModelTarget?.()??null}function No(){
return d(Je)?.getModelOrientation?.()??null}function Oo(){
return d(Je)?.getModelPose?.()??null}function Eo(){
return Qe.getStateSnapshot()}function Uo(){
return Qe.getCanvasIndex()}function Bo(){
return Qe.getCanvasId()}function Po(){
return Qe.getCanvasCount()}function Vo(e){
Qe.setCanvasByIndex(e)}function Ho(e){
Qe.setCanvasById(e)}function Fo(e){
Be.collectionId.set(""),Be.showCollection.set(!1),Ir="",me(e)}let Do=async e=>{
try{
await dl({
getManifestId:Zo,getCanvasCount:Po,setManifest:e=>{
Ir=e,me(e)},setCanvasById:Ho,on:yo},e)}catch(e){
Qe.emitEvent("error",{
scope:"manifest",message:"Unable to open the selected collection item.",cause:e})}};
function Zo(){
return me()||null}function Jo(){
d(Je)?.start?.()}function Qo(){
d(Je)?.play?.()}function Xo(){
d(Je)?.pause?.()}function Go(){
d(Je)?.stop?.()}function Yo(e){
d(Je)?.seekBy?.(e)}function Ko(e){
d(Je)?.seekTo?.(e)}function ei(e,t){
d(Je)?.setMediaSegment?.(e,t)}async function ti(e){
return Qe.addAnnotation(e)}async function ri(e){
return Qe.removeAnnotation(e)}let ai=e=>{
j(Hr,e,!0),j(Zr,!0),je()?.({
message:e})};
f(()=>Qe.destroy()),f(Ca),f(ja),f(Ma),f(Sa),N(()=>{
j(We,Te(xe()),!0)}),N(()=>{
let e=me()??"";
e!==Cr&&(Cr&&!(e&&e===Ir)&&(Be.collectionId.set(""),Be.showCollection.set(!1)),Ir="",Cr=e,j(_r,"toc"),j(kr,!1),j(zr,!1),j(Pa,null),j(Va,[...ge],!0),d(sr)&&j(fr,"select")),Be.manifestId.set(e)}),e(()=>{
let e=Me();
void 0!==e&&e!==Q(It)&&Qe.setCanvasByIndex(e)}),e(()=>{
let e=y();
e!==Ze&&(Ze=e,Se()?.({
canvasIndex:e}))}),e(()=>{
let e=O(Ge,"$collectionEntry",ne);
if(!e?.json||me()!==e.id)return;
let t=ll(e.json);
t&&(Ir=t,me(t))}),N(()=>{
let e={
...d(We),allowCreateMode:d(We).allowCreateMode||d(nr)||d(sr)};
Be.config.set(e),d(Jt)&&Ar()}),N(()=>{
Be.plugins.set([...qe,...ke()])}),N(()=>{
y()!==d(Er)&&(j(Er,y(),!0),j(Or,x()>0?x():0,!0),j(Pr,null))}),N(()=>{
x()>0&&0===d(Or)&&("in"===d(Pr)?j(Or,x()/1.1):"out"===d(Pr)?j(Or,x()/.9):j(Or,x(),!0))}),e(()=>{
d(ir)&&(Ie()!==d(Qr)||Ce()!==d(Xr))&&(j(Qr,Ie()),j(Xr,Ce()),(async()=>{
let e,t=++Jr;
if(j(Fr,!0),j(Hr,null),j(Zr,!0),j(Vr,null),j(Dr,0),void 0!==Ie()&&null!==Ie()&&""!=`${
Ie()}`)e=Ie();
else{
if(!Ce())return ai("Story input missing"),void j(Fr,!1);
try{
let t=await fetch(Ce());
if(!t.ok)throw Error(`HTTP ${
t.status}`);
e=await t.json()}catch{
if(t!==Jr)return;
return ai("Failed to load story"),void j(Fr,!1)}}if(t!==Jr)return;
let r=e;
if("string"==typeof e)try{
r=JSON.parse(e)}catch{
return ai("Invalid story JSON"),void j(Fr,!1)}let a=Js(r);
if(!a.ok||!a.story)return ai(a.error??"Invalid story"),void j(Fr,!1);
let o=Ys(a.story);
if(!o.ok)return ai(o.errors[0]??"Invalid story"),void j(Fr,!1);
j(Vr,a.story,!0),j(Dr,a.story.chapters.length,!0),j(Zr,!1),j(Fr,!1),await Ia.loadStory(a.story)})())}),e(()=>{
d(ir)&&d(Vr)?.chapters?.length&&(async e=>{
let t=Array.from(new Set((e.chapters??[]).map(e=>e.manifest).filter(e=>"string"==typeof e&&e.length>0)));
await Promise.all(t.map(e=>we(e)))})(d(Vr))}),e(()=>{
j(aa,d(ir)&&d(Vr)?.chapters?.length?d(Vr).chapters.map(e=>{
let t=`${
e.id}:${
e.manifest}:${
e.canvasIndex}`,r=O(Fe,"$manifestsStore",ne)[e.manifest];
if(!r?.manifesto)return ia.get(t)??null;
let a=De(r.manifesto,void 0,e.canvasIndex);
return a?(ia.set(t,a),a):ia.get(t)??null}):[],!0)}),e(()=>{
d(ir)||(j(na,0),j(sa,0))});
let oi=H(()=>!(d(ir)||d(sr)||!d(Gt)||d(lr)&&d(Xt)&&!d(Jt))&&(O(st,"$leftVisible",ne)||d(kr))),ii=H(()=>d(nr)&&O(lt,"$rightVisible",ne)),ni=H(()=>!d(ir)&&d(tr)),si=H(()=>!d(ir)&&d(rr)),li=H(()=>!d(ir)&&d(ar)),di=H(()=>!d(ir)&&d(or)),ci=H(()=>!!d(lr)&&O($t,"$showSettings",ne)),pi=H(()=>d(lr)&&!1!==d(We).showSettings),vi=H(()=>!d(ir)&&!d(nr)&&O(Wt,"$showContents",ne)),gi=H(()=>!!d(lr)&&(O(Mt,"$showCollection",ne)&&q())),ui=H(()=>O(Lt,"$showLayers",ne)&&T()),hi=H(()=>!d(ir)&&d(ui)),fi=H(()=>!d(ir)&&l()),wi=H(()=>!!d(lr)&&q()),bi=H(()=>!d(ir)&&O(vt,"$allowMetadata",ne)),mi=H(()=>!d(ir)&&c()),xi=H(()=>!d(ir)&&v()),yi=H(()=>!d(ir)&&w()),_i=H(()=>!d(ir)&&!d(nr)&&T()),ki=H(()=>!d(ir)&&!d(nr)&&O(bt,"$contentsAvailable",ne)),zi=H(()=>!d(ir)&&("audio"===$()||"video"===$())&&O(yt,"$avChaptersAvailable",ne)),Ii=H(()=>!d(ir)&&("audio"===$()||"video"===$())&&O(_t,"$avTranscriptAvailable",ne));
e(()=>{
wa.set(d(Vr)??fa)});
let Ci=H(()=>d(Vr)?.chapters[d(Gr)]?.id??null);
Ve({
state:Be,derived:Pe,controller:Qe,settings:{
get layout(){
return d(yr)},set layout(e){
e!==d(yr)&&(j(yr,e,!0),"1x1"===e?j(jr,null):(Be.showMetadata.set(!1),Be.showSearch.set(!1),Be.showAnnotations.set(!1),Be.showTools.set(!1),d(jr)||j(jr,new Mc(me()),!0),d(jr).setLayoutPreset(e)))},get theme(){
return d(Wr)},set theme(e){
j(Wr,e,!0)},get locale(){
return d(Lr)},set locale(e){
(e=>{
let t=e.toLowerCase();
j(Lr,t,!0),j(We,{
...d(We),language:t},!0),Be.config.update(e=>({
...e??{
},language:t}))})(e)},get layoutMode(){
return Q(Nt)},set layoutMode(e){
Qe.setLayoutMode(e)}},get canDrawAnnotations(){
return d(hr)},get annotationMode(){
return d(xr)}});
var ji={
on:yo,off:_o,setEventTarget:function(e){
Qe.setEventTarget(e)},getViewBox:ko,setViewBox:zo,getZoom:Io,setZoom:Co,zoomIn:jo,zoomOut:Mo,panTo:So,getMediaType:Ao,setModelOrbit:qo,setModelTarget:To,setModelOrientation:$o,setModelPose:Wo,getModelOrbit:Lo,getModelTarget:Ro,getModelOrientation:No,getModelPose:Oo,getState:Eo,getCanvasIndex:Uo,getCanvasId:Bo,getCanvasCount:Po,setCanvasByIndex:Vo,setCanvasById:Ho,setManifest:Fo,getManifestId:Zo,start:Jo,play:Qo,pause:Xo,stop:Go,seekBy:Yo,seekTo:Ko,setMediaSegment:ei,addAnnotation:ti,removeAnnotation:ri,updateLayerOpacity:function(e,t){
Qe.updateLayerOpacity(e,t)},getLayerOpacities:function(){
return Q(Rt)},getMediaSources:function(){
return Q(wt)}},Mi=kl();
let Ai;
var qi=W(Mi),Ti=e=>{
var t=fl();
C("click",t,Ea),g(e,t)};
z(qi,e=>{
d(oi)&&!d(ir)&&!d(nr)&&e(Ti)});
var $i=R(qi,2),Li=W($i),Ri=W(Li),Ni=e=>{
var t=ml(),r=re(t);
ye(r,{
position:"inline"});
var a=R(r,2),i=e=>{
var t=pl(),r=R(re(t),2),a=W(r,!0);
o(r),h(()=>u(a,d(pa))),g(e,t)};
z(a,e=>{
d(pa)&&e(i)}),g(e,t)},Oi=e=>{
On(e,{
get manifestId(){
return me()},get manifestEntry(){
return L()}})};
z(Ri,e=>{
d(ir)?e(Ni):d(nr)||e(Oi,1)}),o(Li);
var Ei=R(Li,2),Ui=W(Ei),Bi=e=>{
mt(e,{
slot:"top",get plugins(){
return E().top},get pluginContext(){
return so}})};
z(Ui,e=>{
E().top.length>0&&e(Bi)});
var Pi=R(Ui,2),Vi=e=>{
var t=hl(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>P()("viewer.panels.annotations.export")||"Export Annotations"]),C("click",t,io),g(e,t)};
z(Pi,e=>{
d(sr)&&e(Vi)});
var Hi=R(Pi,2),Fi=W(Hi),Di=e=>{
gn(e,{
"aria-hidden":"true"})},Zi=e=>{
Dt(e,{
"aria-hidden":"true"})};
z(Fi,e=>{
d(ta)?e(Di):e(Zi,-1)});
var Ji=R(Fi,2),Qi=W(Ji,!0);
o(Ji),o(Hi),o(Ei),o($i);
var Xi=R($i,2),Gi=e=>{
var t=gl();
xt(W(t),{
"aria-hidden":"true"}),o(t),C("click",t,Ba),g(e,t)};
z(Xi,e=>{
d(lr)&&d(Gt)&&d(Xt)&&!d(Jt)&&e(Gi)});
var Yi=R(Xi,2);
let Ki;
var en=W(Yi),tn=e=>{
var t=_l(),r=W(t);
{
let e=H(()=>d(Jt)||d(Qt)),t=H(()=>d(oi)||d(zr));
Wi(r,{
compact:!0,variant:"sidebar",get mobile(){
return d(e)},get iconOnly(){
return d(t)},get galleryActive(){
return d(ni)},get contentsTab(){
return d(_r)},get allowThumbnails(){
return d(fi)},get allowCollection(){
return d(wi)},get allowContents(){
return d(ki)},get allowChapters(){
return d(zi)},get allowTranscript(){
return d(Ii)},get allowSearch(){
return d(mi)},get allowMetadata(){
return d(bi)},get allowAnnotations(){
return d(xi)},get allowTools(){
return d(yi)},get allowLayers(){
return d(_i)},get allowSettings(){
return d(pi)},get showThumbnails(){
return d(ni)},get showCollection(){
return d(gi)},get showContents(){
return d(vi)},get showSearch(){
return d(si)},get showMetadata(){
return F()},get showAnnotations(){
return d(li)},get showTools(){
return d(di)},get showLayers(){
return d(hi)},get showSettings(){
return d(ci)},get showCompare(){
return d(kr)},get showManifestManager(){
return d(zr)},get multiView(){
return d(Mr)},oncollapse:Ua,ongalleryopen:bo,oncontentsopen:qr,oncomparetoggle:()=>Tr("compare",!d(kr)),onmanifesttoggle:$r,onpanelToggle:e=>Tr(e.panel,e.open)})}o(t),h(e=>I(t,"aria-label",e),[()=>P()("viewer.stage.controls.label")]),g(e,t)};
z(en,e=>{
d(Rr)&&e(tn)});
var rn=R(en,2),an=e=>{
var t=vl();
let a;
$c(W(t),{
get workspace(){
return d(jr)},onclose:()=>j(zr,!1),onsingleload:e=>me(e)}),o(t),h(()=>a=r(t,1,"viewer__manifest-overlay svelte-zw2q18",null,a,{
"viewer__manifest-overlay--right":"right"===d(Yt)})),g(e,t)};
z(rn,e=>{
d(zr)&&e(an)});
var on=R(rn,2),nn=e=>{
Si(e,{
get visible(){
return d(oi)},get redesigned(){
return d(lr)},get contentsTab(){
return d(_r)},get showAnnotations(){
return d(li)},get showCollection(){
return d(gi)},get showTools(){
return d(di)},get showSearch(){
return d(si)},get showMetadata(){
return F()},get showSettings(){
return d(ci)},get showContents(){
return d(vi)},get showLayers(){
return d(hi)},get showCompare(){
return d(kr)},get leftPlugins(){
return E().left},get pluginContext(){
return so},onpanelToggle:Tr,oncollectionSelect:Do})};
z(on,e=>{
!d(ir)&&!d(sr)&&d(Gt)&&e(nn)});
var sn=R(on,2),ln=e=>{
var t=bl(),r=W(t),i=e=>{
var t=fe(),r=re(t);
{
let e=e=>{
var t=yl(),r=W(t);
{
let e=H(()=>L()?.isFetching??!1),t=H(()=>L()?.error??"");
ae(va(r,{
fillHeight:!0,get rendererComponent(){
return D()},get avController(){
return zt},get mediaSource(){
return s()},get layoutMode(){
return A()},get activeLayoutImages(){
return J()},get annotations(){
return S()},get highlightIds(){
return X()},get activeAnnotationId(){
return G()},get hoverAnnotationId(){
return Y()},get overlayPlugins(){
return E().overlay},get pluginContext(){
return so},get rendererHandlers(){
return lo},get isFetching(){
return d(e)},get error(){
return d(t)},get imageFilters(){
return M()},get mediaType(){
return $()},get viewerConfig(){
return d(We)},get rotation(){
return K()},get initialViewBox(){
return Le.viewBox},get allowThumbnails(){
return d(fi)},get allowSearch(){
return d(mi)},get allowMetadata(){
return d(bi)},get allowAnnotations(){
return d(xi)},get allowTools(){
return d(yi)},get allowLayers(){
return d(_i)},get allowContents(){
return d(ki)},get showDock(){
return d(Nr)},constrainMediaHeight:!1,get showThumbnails(){
return d(ni)},get showSearch(){
return d(si)},showMetadata:!1,get showAnnotations(){
return d(li)},get showTools(){
return d(di)},get showContents(){
return d(vi)},get showLayers(){
return d(hi)},get layers(){
return te()},get layerOpacities(){
return oe()},get canvasId(){
return d(ya)},onviewboxchange:e=>{
Qe.handleViewBoxChange(e),ha.set(e.viewBox)},onzoomchange:Br,onrotationchange:e=>Qe.handleRotationChange(e),onpaneltoggle:e=>Qe.setPanelOpen(e.panel,e.open),onannotationcreate:to,onannotationupdate:e=>ao(e.id,e.patch),get canZoom(){
return d(Kt)},set canZoom(e){
j(Kt,e,!0)}}),e=>j(Je,e,!0),()=>d(Je))}var i=R(r,2);
a(i,()=>d(Ne),(e,t)=>{
t(e,{
get story(){
return wa},get viewBox(){
return ha},get chapterId(){
return d(Ci)},get language(){
return d(xa)}})}),o(t),g(e,t)},t=H(()=>d(Zr)||d(Fr));
a(r,()=>d(Re),(r,a)=>{
a(r,{
get currentChapterIndex(){
return d(Gr)},get totalChapters(){
return d(Dr)},get chapterThumbnails(){
return d(aa)},get chapterDurationSec(){
return d(na)},get chapterElapsedSec(){
return d(sa)},get chapterTitle(){
return d(la)},get chapterDescription(){
return d(ga)},get disabled(){
return d(t)},get loading(){
return d(Yr)},get error(){
return d(Hr)},get playState(){
return d(Kr)},onselectChapter:e=>Wa(e.index,!0),onplay:qa,onpause:Ta,onstop:$a,onzoomIn:po,onzoomOut:vo,onfit:wo,onrefresh:Na,onpreviousChapter:La,onnextChapter:Ra,stage:e,$$slots:{
stage:!0}})})}g(e,t)};
z(r,e=>{
d(Re)&&d(Ne)&&e(i)}),o(t),h(e=>I(t,"aria-label",e),[()=>P()("viewer.stage.label")]),g(e,t)},dn=e=>{
var t=bl(),r=W(t),i=e=>{
var t=fe(),r=re(t);
{
let e=e=>{
var t=yl(),r=W(t);
{
let e=H(()=>L()?.isFetching??!1),t=H(()=>L()?.error??"");
ae(va(r,{
fillHeight:!0,get rendererComponent(){
return D()},get avController(){
return zt},get mediaSource(){
return s()},get layoutMode(){
return A()},get activeLayoutImages(){
return J()},get annotations(){
return d(Xa)},get highlightIds(){
return X()},get activeAnnotationId(){
return G()},get hoverAnnotationId(){
return Y()},get overlayPlugins(){
return E().overlay},get pluginContext(){
return so},get rendererHandlers(){
return lo},get isFetching(){
return d(e)},get error(){
return d(t)},get imageFilters(){
return M()},get mediaType(){
return $()},get viewerConfig(){
return d(We)},get rotation(){
return K()},get initialViewBox(){
return Le.viewBox},get layers(){
return te()},get layerOpacities(){
return oe()},allowThumbnails:!1,allowSearch:!1,allowMetadata:!1,allowAnnotations:!1,allowTools:!1,allowContents:!1,showDock:!1,constrainMediaHeight:!1,showThumbnails:!1,showSearch:!1,showMetadata:!1,showAnnotations:!1,showTools:!1,showContents:!1,get annotationTool(){
return d(fr)},annotationEditorEnabled:!0,get annotationLayers(){
return d(Va)},get canvasId(){
return d(ya)},onviewboxchange:e=>Qe.handleViewBoxChange(e),onzoomchange:Br,onrotationchange:e=>Qe.handleRotationChange(e),onannotationcreate:to,onannotationupdate:e=>ao(e.id,e.patch),onannotationdelete:e=>ro(e.id),onannotationselect:e=>{
Qe.handleAnnotationSelect(e),j(fr,"select"),Qe.setAnnotationMode("edit")},onannotationtoolchange:e=>{
j(fr,e.tool,!0)},get canZoom(){
return d(Kt)},set canZoom(e){
j(Kt,e,!0)}}),e=>j(Je,e,!0),()=>d(Je))}ba(R(r,2),{
get canZoom(){
return d(Kt)},get hasSource(){
return d(er)},placement:"below",get mediaType(){
return $()},get selectedCanvasIndex(){
return y()},get totalCanvases(){
return _().length},get zoomPercent(){
return d(Ur)},get rotation(){
return K()},onhome:wo,onzoomIn:po,onzoomOut:vo,onsetZoomPercent:e=>go(e),onrotate:xo,onsetCanvasIndex:e=>fo(e),onprevCanvas:uo,onnextCanvas:ho}),o(t),g(e,t)};
a(r,()=>d(Oe),(t,r)=>{
r(t,{
get annotations(){
return d(Ja)},get activeAnnotationId(){
return G()},get draftAnnotation(){
return d(Qa)},get activeTool(){
return d(fr)},get layers(){
return d(Va)},ontoolchange:e=>{
"rectangle"===e.tool||"point"===e.tool||"polygon"===e.tool||"freehand"===e.tool||"line"===e.tool?(j(fr,e.tool,!0),Qe.setAnnotationMode("create")):(j(fr,e.tool,!0),Qe.setAnnotationMode("edit"),Qe.handleAnnotationClear())},ontogglelayer:Ga,onaddlayer:Ya,onlayercolorchange:Ka,onannotationselect:e=>{
let t=d(Pa)?.id===e.id;
d(Pa)&&d(Pa).id!==e.id&&j(Pa,null),Qe.handleAnnotationSelect(e),t||(j(fr,"select"),Qe.setAnnotationMode("edit"))},onannotationdelete:e=>ro(e.id),onannotationupdate:e=>ao(e.id,e.patch),onannotationsave:oo,stage:e,$$slots:{
stage:!0}})})}g(e,t)};
z(r,e=>{
d(Oe)&&e(i)}),o(t),h(e=>I(t,"aria-label",e),[()=>P()("viewer.stage.label")]),g(e,t)},cn=e=>{
var t=Dl();
let a;
var i=W(t),n=e=>{
var t=El(),a=re(t);
let i;
var n=W(a);
z(n,e=>{
});
var l=R(n,2),c=e=>{
var t=wl(),a=W(t);
B(a,5,_,e=>e.id,(e,t)=>{
var a=Cl();
let i;
var n=W(a),s=W(n),l=e=>{
var r=xl();
h(()=>{
I(r,"src",ie()[d(t).index]),I(r,"alt",d(t).label||`Page ${
d(t).index+1}`)}),g(e,r)},c=e=>{
var r=Sl(),a=W(r);
Ft(a,{
"aria-hidden":"true"});
var i=R(a,2),n=W(i,!0);
o(i),o(r),h(e=>{
I(r,"aria-label",e),u(n,d(t).index+1)},[()=>P()("viewer.gallery.unavailable")]),g(e,r)};
z(s,e=>{
ie()[d(t).index]?e(l):e(c,-1)}),o(n);
var p=R(n,2),v=W(p,!0);
o(p),o(a),h(()=>{
i=r(a,1,"stage-gallery-view__card svelte-zw2q18",null,i,{
"stage-gallery-view__card--active":d(t).index===y()}),u(v,d(t).label||`Page ${
d(t).index+1}`)}),C("click",a,()=>{
Qe.setCanvasByIndex(d(t).index),Qe.setLayoutMode("single")}),g(e,a)}),o(a),o(t),g(e,t)},p=e=>{
{
let t=H(()=>d(nr)&&d(br)?d(mr):G()),r=H(()=>L()?.isFetching??!1),a=H(()=>L()?.error??""),o=H(()=>d(nr)&&d(br));
ae(va(e,{
get fillHeight(){
return d(nr)},get rendererComponent(){
return D()},get avController(){
return zt},get mediaSource(){
return s()},get layoutMode(){
return A()},get activeLayoutImages(){
return J()},get annotations(){
return S()},get highlightIds(){
return X()},get activeAnnotationId(){
return d(t)},get hoverAnnotationId(){
return Y()},get overlayPlugins(){
return E().overlay},get pluginContext(){
return so},get rendererHandlers(){
return lo},get isFetching(){
return d(r)},get error(){
return d(a)},get imageFilters(){
return M()},get mediaType(){
return $()},get viewerConfig(){
return d(We)},get rotation(){
return K()},get initialViewBox(){
return Le.viewBox},get allowThumbnails(){
return d(fi)},get allowSearch(){
return d(mi)},get allowMetadata(){
return d(bi)},get allowAnnotations(){
return d(xi)},get allowTools(){
return d(yi)},get allowLayers(){
return d(_i)},get allowContents(){
return d(ki)},get showDock(){
return d(Nr)},constrainMediaHeight:!0,get showThumbnails(){
return d(ni)},get showSearch(){
return d(si)},get showMetadata(){
return F()},get showAnnotations(){
return d(li)},get showTools(){
return d(di)},get showContents(){
return d(vi)},get showLayers(){
return d(hi)},get layers(){
return te()},get layerOpacities(){
return oe()},get canvasId(){
return d(ya)},onviewboxchange:e=>Qe.handleViewBoxChange(e),onzoomchange:Br,onrotationchange:e=>Qe.handleRotationChange(e),onpaneltoggle:e=>Qe.setPanelOpen(e.panel,e.open),onannotationcreate:to,onannotationupdate:e=>ao(e.id,e.patch),get annotationTool(){
return d(fr)},get annotationEditorEnabled(){
return d(o)},get annotationEditorAnnotations(){
return d(wr)},get annotationLayers(){
return d(Va)},onannotationdelete:e=>ro(e.id),onannotationselect:e=>{
d(nr)&&d(br)&&j(mr,e.id,!0)},onannotationtoolchange:e=>{
j(fr,e.tool,!0),Qe.setAnnotationMode("select"===e.tool?"edit":"create")},get canZoom(){
return d(Kt)},set canZoom(e){
j(Kt,e,!0)}}),e=>j(Je,e,!0),()=>d(Je))}};
z(l,e=>{
"gallery"===A()?e(c):e(p,-1)});
var v=R(l,2),f=e=>{
ba(e,{
get canZoom(){
return d(Kt)},get hasSource(){
return d(er)},placement:"below",get mediaType(){
return $()},get selectedCanvasIndex(){
return y()},get totalCanvases(){
return _().length},get zoomPercent(){
return d(Ur)},get rotation(){
return K()},onhome:wo,onzoomIn:po,onzoomOut:vo,onsetZoomPercent:e=>go(e),onrotate:xo,onsetCanvasIndex:e=>fo(e),onprevCanvas:uo,onnextCanvas:ho})};
z(v,e=>{
"gallery"!==A()&&e(f)}),o(a),ce(a,e=>ur?.(e));
var w=R(a,2),b=e=>{
{
let t=H(()=>d(lr)?()=>Qe.setLayoutMode("gallery"):void 0);
ka(e,{
get redesigned(){
return d(lr)},get canvases(){
return _()},get canvasThumbnails(){
return ie()},get selectedCanvasIndex(){
return y()},onpanelToggle:e=>Qe.setPanelOpen(e.panel,e.open),oncanvasSelect:e=>mo(e.index),get onviewall(){
return d(t)}})}};
z(w,e=>{
d(ni)&&"gallery"!==A()&&e(b)});
var m=R(w,2),x=e=>{
var t=Tl();
mt(W(t),{
get plugins(){
return E().bottom},get pluginContext(){
return so}}),o(t),g(e,t)};
z(m,e=>{
E().bottom.length>0&&e(x)}),h(()=>i=r(a,1,"stage__primary svelte-zw2q18",null,i,{
"stage__viewer-frame":d(lr),"stage__viewer-frame--controls-visible":d(lr)&&d(dr)})),g(e,t)},l=e=>{
Rc(e,{
get node(){
return d(jr).layout},get activeWindowId(){
return d(jr).activeWindowId},onfocuswindow:e=>d(jr).setActiveWindow(e),onmovewindow:e=>d(jr)?.moveWindow(e.id,e.direction),onclosewindow:e=>{
d(jr)?.closeWindow(e),d(jr)&&"window"===d(jr).layout.type&&j(yr,"1x1")},onloadmanifest:e=>{
d(jr)?.setWindowManifest(e.id,e.manifestId),d(jr)?.setActiveWindow(e.id)},oncanvaschange:e=>d(jr)?.setWindowCanvasIndex(e.id,e.canvasIndex),onresizesplit:e=>d(jr)?.updateSplitSizes(e.targetId,e.sizes),onopenmanifestmanager:e=>{
d(jr)?.setActiveWindow(e),Sr(),j(zr,!0)}})};
z(i,e=>{
"1x1"===d(yr)?e(n):d(jr)&&e(l,1)}),o(t),h(e=>{
a=r(t,1,"stage svelte-zw2q18",null,a,{
"stage--viewer":d(lr),"stage--joined-sidebar-left":d(lr)&&d(Rr)&&!d(oi)&&!d(Jt)&&"left"===d(Yt),"stage--joined-sidebar-right":d(lr)&&d(Rr)&&!d(oi)&&!d(Jt)&&"right"===d(Yt),"stage--story-builder":d(nr),"stage--with-bottom-toolbar":!0,"stage--workspace":!!d(jr)&&"1x1"!==d(yr)}),I(t,"aria-label",e)},[()=>P()("viewer.stage.label")]),g(e,t)};
z(sn,e=>{
d(ir)?e(ln):d(sr)?e(dn,1):e(cn,-1)});
var pn=R(sn,2),vn=e=>{
var t=Ol(),r=W(t),a=e=>{
mt(e,{
get plugins(){
return E().right},get pluginContext(){
return so}})};
z(r,e=>{
E().right.length>0&&e(a)}),o(t),h(e=>I(t,"aria-label",e),[()=>P()("viewer.panels.rightLabel")]),g(e,t)};
z(pn,e=>{
!d(ir)&&d(ii)&&e(vn)}),o(Yi),o(Mi),ae(Mi,e=>j(ea,e),()=>d(ea)),h(()=>{
Ai=r(Mi,1,"viewer svelte-zw2q18",null,Ai,{
"viewer--story-viewer":d(ir),"viewer--story-builder":d(nr),"viewer--annotation-editor":d(sr),"viewer--fullscreen-fallback":d(ra)}),I(Mi,"data-theme",d(Wr)),I(Hi,"aria-label",d(ta)?"Close fullscreen":"Enter fullscreen"),I(Hi,"title",d(ta)?"Close fullscreen":"Enter fullscreen"),u(Qi,d(ta)?"Close fullscreen":"Fullscreen"),Ki=r(Yi,1,"viewer__grid svelte-zw2q18",null,Ki,{
"viewer__grid--controls":d(Rr),"viewer__grid--nav-compact":d(Rr)&&(d(oi)||d(zr))&&!d(Jt),"viewer__grid--left":d(oi),"viewer__grid--right":d(ii),"viewer__grid--sidebar-right":"right"===d(Yt)})}),C("click",Hi,()=>Oa.toggle()),g(t,Mi);
var un=i(ji);
return se(),un}x(["click"]);
var jl=n('<button type="button"> </button>'),Ml=n("<option> </option>"),Nl=n('<div role="dialog"><section class="settings-section svelte-sc3yzj"><h3 class="svelte-sc3yzj"> </h3> <div class="layout-grid svelte-sc3yzj"></div></section> <section class="settings-section svelte-sc3yzj"><h3 class="svelte-sc3yzj"> </h3> <div class="segment svelte-sc3yzj"><button type="button"> </button> <button type="button"> </button></div></section> <section class="settings-section svelte-sc3yzj"><h3 class="svelte-sc3yzj"> </h3> <select class="svelte-sc3yzj"></select></section></div>'),Pl=n('<div class="settings-wrap svelte-sc3yzj"><button class="settings-trigger svelte-sc3yzj" type="button">⚙</button> <!></div>');
function Fl(e,a){
le(a,!0);
let n=()=>O(_e,"$t",s),[s,l]=ee(),c=U(a,"activeLayout",3,"1x1"),p=U(a,"theme",3,"dark"),v=U(a,"locale",3,"en"),f=U(a,"placement",3,"left"),w=U(a,"onlayoutchange",3,void 0),b=U(a,"onthemechange",3,void 0),m=U(a,"onlocalechange",3,void 0),x=V(!1),y=["1x1","1x2","2x1","1x2-panel","2x2"];
var _=Pl(),k=W(_),M=R(k,2),S=e=>{
var a=Nl();
let i;
var s=W(a),l=W(s),x=W(l,!0);
o(l);
var _=R(l,2);
B(_,21,()=>y,t,(e,t)=>{
var a=jl();
let i;
var n=W(a,!0);
o(a),h(()=>{
i=r(a,1,"layout-option svelte-sc3yzj",null,i,{
"layout-option--active":d(t)===c()}),u(n,d(t))}),C("click",a,()=>w()?.(d(t))),g(e,a)}),o(_),o(s);
var k=R(s,2),z=W(k),j=W(z,!0);
o(z);
var M=R(z,2),S=W(M);
let q;
var T=W(S,!0);
o(S);
var $=R(S,2);
let L;
var N=W($,!0);
o($),o(M),o(k);
var O=R(k,2),E=W(O),U=W(E,!0);
o(E);
var P,V=R(E,2);
B(V,21,()=>ge,t,(e,t)=>{
var r=Ml(),a=W(r,!0);
o(r);
var i={
};
h(e=>{
u(a,e),i!==(i=d(t))&&(r.value=(r.__value=d(t))??"")},[()=>d(t).toUpperCase()]),g(e,r)}),o(V),A(V),o(O),o(a),h((e,t,o,n,s,l)=>{
i=r(a,1,"settings-popover svelte-sc3yzj",null,i,{
"settings-popover--right":"right"===f()}),I(a,"aria-label",e),u(x,t),u(j,o),q=r(S,1,"segment__btn svelte-sc3yzj",null,q,{
"segment__btn--active":"dark"===p()}),u(T,n),L=r($,1,"segment__btn svelte-sc3yzj",null,L,{
"segment__btn--active":"light"===p()}),u(N,s),u(U,l),P!==(P=v())&&(V.value=(V.__value=v())??"",ue(V,v()))},[()=>n()("workspace.settings"),()=>n()("workspace.layout"),()=>n()("workspace.theme"),()=>n()("workspace.themeDark"),()=>n()("workspace.themeLight"),()=>n()("workspace.language")]),C("click",S,()=>b()?.("dark")),C("click",$,()=>b()?.("light")),C("change",V,e=>m()?.(e.currentTarget.value)),g(e,a)};
z(M,e=>{
d(x)&&e(S)}),o(_),h(e=>I(k,"aria-label",e),[()=>n()("workspace.settings")]),C("click",k,()=>j(x,!d(x))),g(e,_),i(),l()}x(["click","change"]);
var Il=n('<p class="workspace-drawer__notice svelte-1b9z2ra"> </p>'),Ll=n('<div class="workspace-drawer__section svelte-1b9z2ra"><span class="workspace-drawer__label svelte-1b9z2ra"> </span> <strong> </strong> <p class="svelte-1b9z2ra"> </p> <span class="workspace-drawer__muted svelte-1b9z2ra"> </span></div> <!>',1),Rl=n('<div class="workspace-drawer__section svelte-1b9z2ra"><span class="workspace-drawer__label svelte-1b9z2ra"> </span> <strong> </strong> <span class="workspace-drawer__muted svelte-1b9z2ra"> </span></div>'),zl=n('<div class="workspace-drawer__section svelte-1b9z2ra"><p class="svelte-1b9z2ra"> </p></div>'),Bl=n('<aside class="workspace-drawer svelte-1b9z2ra"><div class="workspace-drawer__header svelte-1b9z2ra"><div><span class="workspace-drawer__eyebrow svelte-1b9z2ra"> </span> <h2 class="svelte-1b9z2ra"> </h2></div></div> <!></aside>'),Vl=n('<div class="workspace__manifest-overlay svelte-1b9z2ra"><!></div>'),Hl=n('<div class="workspace svelte-1b9z2ra"><aside class="workspace-rail svelte-1b9z2ra"><div class="workspace-rail__top svelte-1b9z2ra"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <div class="workspace-rail__bottom svelte-1b9z2ra"><button type="button"><img alt="" class="svelte-1b9z2ra"/></button> <!></div></aside> <!> <main class="workspace__main svelte-1b9z2ra"><!></main> <!></div>');
function Ul(t,a){
le(a,!0);
let n=()=>O(_e,"$t",s),[s,l]=ee(),c=U(a,"manifestId",3,""),p=U(a,"config",3,void 0);
U(a,"plugins",19,()=>[]);
let v=new Mc(c()),f=V("dark"),w=V(k((p()?.language??"en").toLowerCase())),b=V("1x1"),m=V("viewport"),x=H(()=>v.windows.length>1),y=H(()=>"iiif"===d(m)),_=H(()=>"iiif"!==d(m)),M=H(()=>{
let e=v.activeWindow;
return e?.manifestId?Q(Fe)[e.manifestId]??null:null}),S=H(()=>d(M)?.label??v.activeWindow?.manifestId??"No manifest loaded"),A=H(()=>d(M)?.canvases?.length??0),q=H(()=>(v.activeWindow?.canvasIndex??0)+1),T=e=>{
d(x)&&["metadata","search","annotations"].includes(e)||j(m,d(m)===e&&"viewport"!==e?"viewport":e,!0)};
e(()=>{
typeof document>"u"||(document.documentElement.dataset.workspaceTheme=d(f))}),e(()=>ve(d(w)));
var $=Hl(),L=W($),N=W(L),E=W(N);
let B;
$t(W(E),{
size:20}),o(E);
var P=R(E,2);
let F;
Vt(W(P),{
size:20}),o(P);
var D=R(P,2);
let Z;
un(W(D),{
size:20}),o(D);
var J=R(D,2);
let X;
Yt(W(J),{
size:20}),o(J),o(N);
var G=R(N,2),Y=W(G);
let K;
var te=W(Y);
o(Y),Fl(R(Y,2),{
get activeLayout(){
return d(b)},get theme(){
return d(f)},get locale(){
return d(w)},placement:"right",onlayoutchange:e=>{
j(b,e,!0),v.setLayoutPreset(e),"1x1"!==e&&["metadata","search","annotations"].includes(d(m))&&j(m,"viewport")},onthemechange:e=>j(f,e,!0),onlocalechange:e=>{
j(w,e,!0),ve(e)}}),o(G),o(L);
var ae=R(L,2),oe=e=>{
var t=Bl(),r=W(t),a=W(r),i=W(a),s=W(i,!0);
o(i);
var l=R(i,2),c=W(l,!0);
o(l),o(a),o(r);
var p=R(r,2),f=e=>{
var t=Ll(),r=re(t),a=W(r),i=W(a,!0);
o(a);
var s=R(a,2),l=W(s,!0);
o(s);
var c=R(s,2),p=W(c,!0);
o(c);
var f=R(c,2),w=W(f,!0);
o(f),o(r);
var b=R(r,2),m=e=>{
var t=Il(),r=W(t,!0);
o(t),h(e=>u(r,e),[()=>n()("workspace.singleViewOnly")]),g(e,t)};
z(b,e=>{
d(x)&&e(m)}),h((e,t,r)=>{
u(i,e),u(l,t),u(p,d(S)),u(w,r)},[()=>n()("workspace.selectedWindow"),()=>v.activeWindowId??n()("workspace.none"),()=>n()("workspace.canvasPosition",{
current:d(q),total:Math.max(1,d(A))})]),g(e,t)},w=e=>{
var t=Rl(),r=W(t),a=W(r,!0);
o(r);
var i=R(r,2),s=W(i,!0);
o(i);
var l=R(i,2),c=W(l,!0);
o(l),o(t),h(e=>{
u(a,e),u(s,d(S)),u(c,v.activeWindow?.manifestId)},[()=>n()("workspace.manifest")]),g(e,t)},b=e=>{
var t=zl(),r=W(t),a=W(r,!0);
o(r),o(t),h(e=>u(a,e),[()=>n()("workspace.searchHint")]),g(e,t)},y=e=>{
var t=zl(),r=W(t),a=W(r,!0);
o(r),o(t),h(e=>u(a,e),[()=>n()("workspace.annotationsHint")]),g(e,t)};
z(p,e=>{
"viewport"===d(m)?e(f):"metadata"===d(m)?e(w,1):"search"===d(m)?e(b,2):e(y,-1)}),o(t),h((e,r,a)=>{
I(t,"aria-label",e),u(s,r),u(c,a)},[()=>n()("workspace.details"),()=>n()("workspace.eyebrow"),()=>"viewport"===d(m)?n()("workspace.activeViewport"):"metadata"===d(m)?n()("viewer.panels.metadata.title"):"search"===d(m)?n()("viewer.panels.search.title"):n()("viewer.panels.annotations.title")]),g(e,t)};
z(ae,e=>{
d(_)&&e(oe)});
var ie=R(ae,2);
Rc(W(ie),{
get node(){
return v.layout},get activeWindowId(){
return v.activeWindowId},onfocuswindow:e=>{
v.setActiveWindow(e)},onmovewindow:e=>v.moveWindow(e.id,e.direction),onclosewindow:e=>v.closeWindow(e),onloadmanifest:e=>{
v.setWindowManifest(e.id,e.manifestId),v.setActiveWindow(e.id)},oncanvaschange:e=>v.setWindowCanvasIndex(e.id,e.canvasIndex),onresizesplit:e=>v.updateSplitSizes(e.targetId,e.sizes),onopenmanifestmanager:e=>{
v.setActiveWindow(e),j(m,"iiif")}}),o(ie);
var ne=R(ie,2),se=e=>{
var t=Vl();
$c(W(t),{
get workspace(){
return v},onclose:()=>j(m,"viewport")}),o(t),g(e,t)};
z(ne,e=>{
d(y)&&e(se)}),o($),h((e,t,a,o,i,n,s,l,c,p,v)=>{
I($,"data-theme",d(f)),I($,"data-locale",d(w)),I(L,"aria-label",e),B=r(E,1,"workspace-rail__button svelte-1b9z2ra",null,B,{
"workspace-rail__button--active":"viewport"===d(m)}),I(E,"aria-label",t),I(E,"title",a),F=r(P,1,"workspace-rail__button svelte-1b9z2ra",null,F,{
"workspace-rail__button--active":"metadata"===d(m)}),I(P,"aria-label",o),I(P,"title",i),P.disabled=d(x),Z=r(D,1,"workspace-rail__button svelte-1b9z2ra",null,Z,{
"workspace-rail__button--active":"search"===d(m)}),I(D,"aria-label",n),I(D,"title",s),D.disabled=d(x),X=r(J,1,"workspace-rail__button svelte-1b9z2ra",null,X,{
"workspace-rail__button--active":"annotations"===d(m)}),I(J,"aria-label",l),I(J,"title",c),J.disabled=d(x),K=r(Y,1,"workspace-rail__button workspace-rail__button--iiif svelte-1b9z2ra",null,K,{
"workspace-rail__button--active":d(y)}),I(Y,"aria-label",p),I(Y,"title",v),I(te,"src",Ci)},[()=>n()("workspace.sidebar.workspaceTools"),()=>n()("workspace.activeViewport"),()=>n()("workspace.activeViewport"),()=>n()("viewer.panels.metadata.title"),()=>d(x)?n()("workspace.unavailableMultiView"):n()("viewer.panels.metadata.title"),()=>n()("viewer.panels.search.title"),()=>d(x)?n()("workspace.unavailableMultiView"):n()("viewer.panels.search.title"),()=>n()("viewer.panels.annotations.title"),()=>d(x)?n()("workspace.unavailableMultiView"):n()("viewer.panels.annotations.title"),()=>n()("workspace.sidebar.manageIiif"),()=>n()("workspace.sidebar.manageIiif")]),C("click",E,()=>T("viewport")),C("click",P,()=>T("metadata")),C("click",D,()=>T("search")),C("click",J,()=>T("annotations")),C("click",Y,()=>T("iiif")),g(t,$),i(),l()}x(["click"]);
var Wl=class{
constructor(e){
this.getTarget=e}on(e,t){
return this.getTarget()?.on?.(e,t)??(()=>{
})}off(e,t){
this.getTarget()?.off?.(e,t)}setEventTarget(e){
this.getTarget()?.setEventTarget?.(e)}getViewBox(){
return this.getTarget()?.getViewBox?.()??null}setViewBox(e){
this.getTarget()?.setViewBox?.(e)}getZoom(){
return this.getTarget()?.getZoom?.()??100}setZoom(e){
this.getTarget()?.setZoom?.(e)}zoomIn(){
this.getTarget()?.zoomIn?.()}zoomOut(){
this.getTarget()?.zoomOut?.()}panTo(e,t){
this.getTarget()?.panTo?.(e,t)}getMediaType(){
return this.getTarget()?.getMediaType?.()??null}getState(){
return this.getTarget()?.getState?.()??null}getCanvasIndex(){
return this.getTarget()?.getCanvasIndex?.()??-1}getCanvasId(){
return this.getTarget()?.getCanvasId?.()??null}getCanvasCount(){
return this.getTarget()?.getCanvasCount?.()??0}setCanvasByIndex(e){
this.getTarget()?.setCanvasByIndex?.(e)}setCanvasById(e){
this.getTarget()?.setCanvasById?.(e)}setManifest(e){
this.getTarget()?.setManifest?.(e)}getManifestId(){
return this.getTarget()?.getManifestId?.()??null}start(){
this.getTarget()?.start?.()}play(){
this.getTarget()?.play?.()}pause(){
this.getTarget()?.pause?.()}stop(){
this.getTarget()?.stop?.()}seekBy(e){
this.getTarget()?.seekBy?.(e)}seekTo(e){
this.getTarget()?.seekTo?.(e)}setMediaSegment(e,t){
this.getTarget()?.setMediaSegment?.(e,t)}setModelOrbit(e){
this.getTarget()?.setModelOrbit?.(e)}setModelTarget(e){
this.getTarget()?.setModelTarget?.(e)}setModelOrientation(e){
this.getTarget()?.setModelOrientation?.(e)}setModelPose(e,t){
this.getTarget()?.setModelPose?.(e,t)}getModelOrbit(){
return this.getTarget()?.getModelOrbit?.()??null}getModelTarget(){
return this.getTarget()?.getModelTarget?.()??null}getModelOrientation(){
return this.getTarget()?.getModelOrientation?.()??null}getModelPose(){
return this.getTarget()?.getModelPose?.()??null}addAnnotation(e){
return this.getTarget()?.addAnnotation?.(e)??Promise.resolve()}removeAnnotation(e){
return this.getTarget()?.removeAnnotation?.(e)??Promise.resolve()}updateLayerOpacity(e,t){
this.getTarget()?.updateLayerOpacity?.(e,t)}getLayerOpacities(){
return this.getTarget()?.getLayerOpacities?.()??{
}}getMediaSources(){
return this.getTarget()?.getMediaSources?.()??[]}};
function Gl(t,r){
le(r,!0);
let a=U(r,"manifestId",15,""),o=U(r,"config",3,void 0),n=U(r,"plugins",19,()=>[]),s=U(r,"mode",3,void 0),l=U(r,"story",3,void 0),c=U(r,"storyUrl",15,void 0),p=V(null),v=new Wl(()=>d(p));
e(()=>{
if(typeof window<"u"){
let e=new URLSearchParams(window.location.search).get("iiif-content");
e&&("story-viewer"===s()||"story-builder"===s()?c(e):a(e))}});
var u={
on:function(e,t){
return v.on(e,t)},off:function(e,t){
v.off(e,t)},setEventTarget:function(e){
v.setEventTarget(e)},getViewBox:function(){
return v.getViewBox()},setViewBox:function(e){
v.setViewBox(e)},getZoom:function(){
return v.getZoom()},setZoom:function(e){
v.setZoom(e)},zoomIn:function(){
v.zoomIn()},zoomOut:function(){
v.zoomOut()},panTo:function(e,t){
v.panTo(e,t)},getMediaType:function(){
return v.getMediaType()},setModelOrbit:function(e){
v.setModelOrbit(e)},setModelTarget:function(e){
v.setModelTarget(e)},setModelOrientation:function(e){
v.setModelOrientation(e)},setModelPose:function(e,t){
v.setModelPose(e,t)},getModelOrbit:function(){
return v.getModelOrbit()},getModelTarget:function(){
return v.getModelTarget()},getModelOrientation:function(){
return v.getModelOrientation()},getModelPose:function(){
return v.getModelPose()},getState:function(){
return v.getState()},getCanvasIndex:function(){
return v.getCanvasIndex()},getCanvasId:function(){
return v.getCanvasId()},getCanvasCount:function(){
return v.getCanvasCount()},setCanvasByIndex:function(e){
v.setCanvasByIndex(e)},setCanvasById:function(e){
v.setCanvasById(e)},setManifest:function(e){
v.setManifest(e)},getManifestId:function(){
return v.getManifestId()},start:function(){
v.start()},play:function(){
v.play()},pause:function(){
v.pause()},stop:function(){
v.stop()},seekBy:function(e){
v.seekBy(e)},seekTo:function(e){
v.seekTo(e)},setMediaSegment:function(e,t){
v.setMediaSegment(e,t)},addAnnotation:async function(e){
return v.addAnnotation(e)},removeAnnotation:async function(e){
return v.removeAnnotation(e)},updateLayerOpacity:function(e,t){
v.updateLayerOpacity(e,t)},getLayerOpacities:function(){
return v.getLayerOpacities()},getMediaSources:function(){
return v.getMediaSources()}},h=fe(),f=re(h),w=e=>{
ae(Ul(e,{
get config(){
return o()},get plugins(){
return n()},get manifestId(){
return a()},set manifestId(e){
a(e)}}),e=>j(p,e,!0),()=>d(p))},b=e=>{
ae(Al(e,{
get config(){
return o()},get plugins(){
return n()},get mode(){
return s()},get story(){
return l()},get storyUrl(){
return c()},get manifestId(){
return a()},set manifestId(e){
a(e)}}),e=>j(p,e,!0),()=>d(p))};
return z(f,e=>{
"workspace"===s()?e(w):e(b,-1)}),g(t,h),i(u)}var Kl=n("<div><!></div>"),ql={
hash:"svelte-allfp2",code:":host {
display:block;
width:100%;
\n    /*\n     * The element owns one definite block size. Embedders can override this\n     * with ordinary site CSS (`mango-viewer {
 height: 900px;
 }`) or with the\n     * custom property. A definite host height keeps the shadow layout from\n     * alternating between percentage and intrinsic sizing at breakpoints.\n     */height:var(--mango-viewer-height, min(720px, 100vh));
height:var(--mango-viewer-height, min(720px, 100svh));
min-height:0;
}.element-root.svelte-allfp2 {
width:100%;
height:100%;
min-height:0;
box-sizing:border-box;
}:host([mode='workspace']) {
height:var(--mango-viewer-height, 100vh);
height:var(--mango-viewer-height, 100dvh);
}"};
function Jl(e,t){
le(t,!1),y(e,ql);
let a=U(t,"manifestId",12,""),n=U(t,"config",12,void 0),s=U(t,"mode",12,void 0),l=U(t,"story",12,void 0),c=U(t,"storyUrl",12,void 0),p=U(t,"plugins",28,()=>[]),v=K(),u=K({
}),f=K([]),b=K(void 0),m=K(void 0),x=K([]),_=K(null),k=new Wl(()=>d(_)),z=K(null),I=K(null),C=K(0);
function S(){
return k.getViewBox()}function A(e){
k.setViewBox(e)}function T(){
return k.getZoom()}function $(e){
k.setZoom(e)}function L(){
k.zoomIn()}function R(){
k.zoomOut()}function N(e,t){
k.panTo(e,t)}function O(){
return k.getMediaType()}function B(){
return k.getState()}function V(){
return k.getCanvasIndex()}function H(){
return k.getCanvasId()}function D(){
return k.getCanvasCount()}function Z(e){
k.setCanvasByIndex(e)}function J(e){
k.setCanvasById(e)}function Q(e){
k.setManifest(e)}function X(){
return k.getManifestId()}function Y(){
k.start()}function ee(){
k.play()}function te(){
k.pause()}function re(){
k.stop()}function ie(e){
k.seekBy(e)}function ne(e){
k.seekTo(e)}function se(e,t){
k.setMediaSegment(e,t)}function de(e){
k.setModelOrbit(e)}function ce(e){
k.setModelTarget(e)}function pe(e){
k.setModelOrientation(e)}function ve(e,t){
k.setModelPose(e,t)}function ge(){
return k.getModelOrbit()}function ue(){
return k.getModelTarget()}function fe(){
return k.getModelOrientation()}function we(){
return k.getModelPose()}function be(e){
return k.addAnnotation(e)}function me(e){
return k.removeAnnotation(e)}function xe(e,t){
k.updateLayerOpacity(e,t)}function ye(){
return k.getLayerOpacities()}function _e(){
return k.getMediaSources()}function ke(e,t){
return k.on(e,t)}function ze(e,t){
k.off(e,t)}w(()=>(q(n()),he),()=>{
j(v,st(n(),e=>{
console.warn(he("warnings.invalidConfig"),e)}))}),w(()=>d(v),()=>{
j(u,ct(d(v)))}),w(()=>q(s()),()=>{
if(typeof window<"u"){
let e=new URLSearchParams(window.location.search).get("iiif-content");
e&&("story-viewer"===s()||"story-builder"===s()?c(e):a(e))}}),w(()=>(q(s()),d(b),q(l()),d(m),q(c()),d(C),d(u)),()=>{
if(s()!==d(b)||"story-builder"===s()&&(l()!==d(m)||c()!==d(m)))if(j(b,s()),"story-builder"===s()){
j(m,l()||c());
let e=M(C);
(async function(){
let e;
if(void 0!==l()&&null!==l()&&""!=`${
l()}`)e=l();
else{
if(!c())return null;
try{
let t=await fetch(c());
if(!t.ok)throw Error(`HTTP ${
t.status}`);
e=await t.json()}catch(e){
return console.error("Failed to load story for builder:",e),null}}let t=e;
if("string"==typeof e)try{
t=JSON.parse(e)}catch(e){
return console.error("Invalid story JSON:",e),null}let r=Js(t);
return r.ok&&r.story?r.story:(console.error(r.error??"Invalid Mango story AnnotationPage"),null)})().then(t=>{
e===d(C)&&import("./storyBuilder-z4LWypd9.js").then(({
createStoryBuilderPlugins:r})=>{
e===d(C)&&j(f,r({
initialStory:t??void 0,languages:d(u).story?.languages,annotationPageId:d(u).story?.annotationPageId,annotationBase:d(u).story?.annotationBase,identifiersLocked:d(u).story?.identifiersLocked}))})})}else oe(C),j(f,[])}),w(()=>(d(f),q(p())),()=>{
j(x,[...d(f),...p()])}),w(()=>(d(_),d(z),d(I)),()=>{
d(_)&&d(z)&&d(I)!==d(_)&&(k.setEventTarget(d(z)),j(I,d(_)))}),E();
var Ie={
getViewBox:S,setViewBox:A,getZoom:T,setZoom:$,zoomIn:L,zoomOut:R,panTo:N,getMediaType:O,getState:B,getCanvasIndex:V,getCanvasId:H,getCanvasCount:D,setCanvasByIndex:Z,setCanvasById:J,setManifest:Q,getManifestId:X,start:Y,play:ee,pause:te,stop:re,seekBy:ie,seekTo:ne,setMediaSegment:se,setModelOrbit:de,setModelTarget:ce,setModelOrientation:pe,setModelPose:ve,getModelOrbit:ge,getModelTarget:ue,getModelOrientation:fe,getModelPose:we,addAnnotation:be,removeAnnotation:me,updateLayerOpacity:xe,getLayerOpacities:ye,getMediaSources:_e,on:ke,off:ze,get manifestId(){
return a()},set manifestId(e){
a(e),F()},get config(){
return n()},set config(e){
n(e),F()},get mode(){
return s()},set mode(e){
s(e),F()},get story(){
return l()},set story(e){
l(e),F()},get storyUrl(){
return c()},set storyUrl(e){
c(e),F()},get plugins(){
return p()},set plugins(e){
p(e),F()}};
G();
var Ce=Kl();
let je;
var Me=W(Ce);
return ae(Gl(Me,{
get manifestId(){
return a()},get config(){
return d(u)},get story(){
return l()},get storyUrl(){
return c()},get plugins(){
return d(x)},get mode(){
return s()},$$legacy:!0}),e=>j(_,e),()=>d(_)),o(Ce),ae(Ce,e=>j(z,e),()=>d(z)),h(()=>je=r(Ce,1,"element-root svelte-allfp2",null,je,{
"element-root--workspace":"workspace"===s()})),g(e,Ce),P(t,"getViewBox",S),P(t,"setViewBox",A),P(t,"getZoom",T),P(t,"setZoom",$),P(t,"zoomIn",L),P(t,"zoomOut",R),P(t,"panTo",N),P(t,"getMediaType",O),P(t,"getState",B),P(t,"getCanvasIndex",V),P(t,"getCanvasId",H),P(t,"getCanvasCount",D),P(t,"setCanvasByIndex",Z),P(t,"setCanvasById",J),P(t,"setManifest",Q),P(t,"getManifestId",X),P(t,"start",Y),P(t,"play",ee),P(t,"pause",te),P(t,"stop",re),P(t,"seekBy",ie),P(t,"seekTo",ne),P(t,"setMediaSegment",se),P(t,"setModelOrbit",de),P(t,"setModelTarget",ce),P(t,"setModelOrientation",pe),P(t,"setModelPose",ve),P(t,"getModelOrbit",ge),P(t,"getModelTarget",ue),P(t,"getModelOrientation",fe),P(t,"getModelPose",we),P(t,"addAnnotation",be),P(t,"removeAnnotation",me),P(t,"updateLayerOpacity",xe),P(t,"getLayerOpacities",ye),P(t,"getMediaSources",_e),P(t,"on",ke),P(t,"off",ze),i(Ie)}customElements.define("mango-viewer",Y(Jl,{
manifestId:{
attribute:"manifest-id",reflect:!0,type:"String"},config:{
attribute:"config",type:"String"},mode:{
attribute:"mode",reflect:!0,type:"String"},story:{
attribute:"story",reflect:!0,type:"String"},storyUrl:{
attribute:"story-url",reflect:!0,type:"String"},plugins:{
attribute:"plugins",type:"Object"}},[],"getViewBox.setViewBox.getZoom.setZoom.zoomIn.zoomOut.panTo.getMediaType.getState.getCanvasIndex.getCanvasId.getCanvasCount.setCanvasByIndex.setCanvasById.setManifest.getManifestId.start.play.pause.stop.seekBy.seekTo.setMediaSegment.setModelOrbit.setModelTarget.setModelOrientation.setModelPose.getModelOrbit.getModelTarget.getModelOrientation.getModelPose.addAnnotation.removeAnnotation.updateLayerOpacity.getLayerOpacities.getMediaSources.on.off".split("."),{
mode:"open"})),typeof window<"u"&&(window.MangoViewer=window.MangoViewer||{
registerPlugin:Pa},Array.isArray(window.MangoViewerPlugins)&&window.MangoViewerPlugins.forEach(e=>Pa(e))),"undefined"!=typeof window&&window.__setMangoViewerCss&&window.__setMangoViewerCss(".mango-about-backdrop.svelte-1y7ou5c{
--mango-about-accent:var(--story-builder-accent,#e07a3f);
--mango-about-accent-hover:var(--story-builder-accent-hover,#e8864b);
--mango-about-surface:var(--viewer-panel,#18202c);
--mango-about-text:var(--viewer-text,#e8edf4);
--mango-about-muted:var(--viewer-muted,#b3c0ce);
--mango-about-border:color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
z-index:99999;
-webkit-backdrop-filter:blur(8px);
backdrop-filter:blur(8px);
--lightningcss-light: ;
--lightningcss-dark:initial;
color-scheme:dark;
letter-spacing:normal;
text-align:left;
background:#0a0e14bf;
place-items:center;
padding:16px;
font-family:sans-serif;
font-style:normal;
animation:.2s cubic-bezier(.16,1,.3,1) svelte-1y7ou5c-mangoAboutFadeIn;
display:grid;
position:fixed;
inset:0}.mango-about-modal.svelte-1y7ou5c{
box-sizing:border-box;
overscroll-behavior:contain;
background:var(--mango-about-surface);
border:1px solid var(--mango-about-border);
width:100%;
max-width:480px;
max-height:calc(100dvh - 32px);
color:var(--mango-about-text);
box-shadow:0 24px 48px #0009, 0 0 0 1px color-mix(in srgb, var(--story-builder-accent,#e07a3f) 15%, transparent);
border-radius:16px;
padding:28px;
animation:.25s cubic-bezier(.16,1,.3,1) svelte-1y7ou5c-mangoAboutScaleUp;
position:relative;
overflow:hidden auto}.mango-about-modal__close.svelte-1y7ou5c{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent);
width:32px;
height:32px;
color:var(--mango-about-muted);
cursor:pointer;
border:0;
border-radius:50%;
place-items:center;
transition:all .15s;
display:grid;
position:absolute;
top:16px;
right:16px}.mango-about-modal__close.svelte-1y7ou5c:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
color:#fff}.mango-about-modal__header.svelte-1y7ou5c{
text-align:center;
flex-direction:column;
align-items:center;
margin-bottom:20px;
display:flex}.mango-about-modal__badge.svelte-1y7ou5c{
background:color-mix(in srgb, var(--story-builder-accent,#e07a3f) 12%, transparent);
border:1px solid color-mix(in srgb, var(--story-builder-accent,#e07a3f) 25%, transparent);
border-radius:18px;
place-items:center;
width:64px;
height:64px;
margin-bottom:12px;
display:grid}.mango-about-modal__header.svelte-1y7ou5c h2:where(.svelte-1y7ou5c){
letter-spacing:-.02em;
color:#fff;
margin:0;
font-size:22px;
font-weight:800}.mango-about-modal__version.svelte-1y7ou5c{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
color:var(--mango-about-muted);
letter-spacing:.03em;
border-radius:12px;
margin-top:6px;
margin-bottom:2px;
padding:2px 10px;
font-size:11px;
font-weight:600;
display:inline-block}.mango-about-modal__body.svelte-1y7ou5c{
color:var(--mango-about-muted);
gap:16px;
font-size:13px;
line-height:1.55;
display:grid}.mango-about-modal__body.svelte-1y7ou5c p:where(.svelte-1y7ou5c){
text-align:center;
margin:0}.mango-about-modal__easter-egg.svelte-1y7ou5c{
aspect-ratio:16/9;
border:1px solid var(--mango-about-border);
background:#000;
border-radius:12px;
width:100%;
overflow:hidden}.mango-about-modal__easter-egg.svelte-1y7ou5c iframe:where(.svelte-1y7ou5c){
border:0;
width:100%;
height:100%;
display:block}.mango-about-modal__footer.svelte-1y7ou5c{
border-top:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
justify-content:space-between;
align-items:center;
gap:12px;
margin-top:24px;
padding-top:18px;
display:flex}.mango-about-modal__link.svelte-1y7ou5c{
background:var(--mango-about-accent);
color:#fff;
overflow-wrap:anywhere;
border-radius:10px;
align-items:center;
gap:8px;
padding:10px 16px;
font-size:13px;
font-weight:700;
text-decoration:none;
transition:background .15s,transform .1s;
display:inline-flex}@media (width<=520px),(height<=700px){
.mango-about-modal.svelte-1y7ou5c{
padding:20px}.mango-about-modal__header.svelte-1y7ou5c{
margin-bottom:14px}.mango-about-modal__badge.svelte-1y7ou5c{
width:52px;
height:52px;
margin-bottom:8px}.mango-about-modal__body.svelte-1y7ou5c{
gap:12px}.mango-about-modal__footer.svelte-1y7ou5c{
flex-wrap:wrap;
margin-top:16px;
padding-top:14px}}.mango-about-modal__link.svelte-1y7ou5c:hover{
background:var(--mango-about-accent-hover);
transform:translateY(-1px)}.mango-about-modal__button.svelte-1y7ou5c{
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent);
color:#fff;
cursor:pointer;
border-radius:10px;
padding:10px 16px;
font-size:13px;
font-weight:600;
transition:background .15s}.mango-about-modal__button.svelte-1y7ou5c:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent)}@keyframes svelte-1y7ou5c-mangoAboutFadeIn{
0%{
opacity:0}to{
opacity:1}}@keyframes svelte-1y7ou5c-mangoAboutScaleUp{
0%{
opacity:0;
transform:scale(.94)}to{
opacity:1;
transform:scale(1)}}.mango-footer-brand.svelte-14g11u2{
z-index:999;
align-items:center;
line-height:1;
display:inline-flex}.mango-footer-brand--fixed.svelte-14g11u2{
position:fixed;
bottom:8px;
right:8px}.mango-footer-brand--absolute.svelte-14g11u2{
position:absolute;
bottom:8px;
right:8px}.mango-footer-brand--inline.svelte-14g11u2{
display:inline-flex}.mango-footer-brand__button.svelte-14g11u2{
-webkit-backdrop-filter:none;
backdrop-filter:none;
color:currentColor;
cursor:pointer;
box-shadow:none;
opacity:.75;
background:0 0;
border:none;
align-items:center;
gap:4px;
margin:0;
padding:0;
font-size:11px;
font-weight:700;
line-height:1;
transition:opacity .2s;
display:inline-flex}.mango-footer-brand__button.svelte-14g11u2:hover{
opacity:1;
box-shadow:none;
background:0 0;
border:none}.mango-footer-brand__label.svelte-14g11u2{
letter-spacing:-.01em;
color:currentColor;
line-height:1}.panel__close.svelte-1rom8wj svg{
stroke-width:2px;
width:17px;
height:17px}.plugin-panel--overlay.svelte-xnxskj{
pointer-events:auto}.plugin-panel__panel.svelte-xnxskj{
background:var(--viewer-panel,#121922);
border:1px solid var(--viewer-panel-border,#ffffff14);
border-radius:18px;
gap:8px;
padding:14px;
font-size:13px;
display:grid}.plugin-panel__title.svelte-xnxskj{
text-transform:uppercase;
letter-spacing:.16em;
color:var(--viewer-muted,#9aa6b2);
font-size:12px}.plugin-panel__body.svelte-xnxskj{
color:var(--viewer-text,#e8edf4);
line-height:1.4}.hello-panel{
gap:8px;
display:grid}.hello-panel__title{
color:var(--viewer-muted,#9aa6b2);
word-break:break-word;
font-size:12px}.hello-panel__meta{
color:var(--viewer-text,#e8edf4);
font-size:13px;
font-weight:600}.hello-panel__button{
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
background:#ffffff14;
border:none;
border-radius:10px;
padding:8px 12px;
font-size:11px}.annotation-plugin{
gap:10px;
display:grid}.annotation-plugin__note{
color:var(--viewer-muted,#9aa6b2);
font-size:12px}.annotation-plugin__button{
background:var(--viewer-accent,#ff4fa2);
color:#0b0f14;
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
border:none;
border-radius:10px;
padding:8px 12px;
font-size:11px}.plugin-slot.svelte-1hfdlkl{
gap:12px;
display:grid}.viewer__header.svelte-16fao6e{
justify-content:flex-start;
align-items:center;
gap:10px;
width:100%;
min-width:0;
display:flex}.viewer__header-divider.svelte-16fao6e{
color:var(--viewer-muted,#ffffff59);
-webkit-user-select:none;
user-select:none;
flex-shrink:0;
font-size:14px;
font-weight:300;
line-height:1}.manifest.svelte-16fao6e{
text-align:left;
justify-items:start;
gap:6px;
width:100%;
min-width:0;
display:grid}.manifest__title.svelte-16fao6e{
text-overflow:ellipsis;
white-space:nowrap;
letter-spacing:.02em;
width:100%;
min-width:0;
max-width:100%;
font-size:22px;
font-weight:600;
display:block;
overflow:hidden}@media (width<=900px){
.viewer__header.svelte-16fao6e{
text-align:center}}.annotation-visibility-toggle.svelte-13v0ti9{
border:1px solid var(--viewer-panel-border,#ffffff1f);
width:calc(100% - 24px);
color:var(--viewer-text);
text-align:left;
cursor:pointer;
background:#ffffff0b;
border-radius:11px;
justify-content:space-between;
align-items:center;
gap:12px;
margin:0 12px 12px;
padding:10px 11px;
display:flex}.annotation-visibility-toggle.svelte-13v0ti9:hover{
background:#ffffff13}.annotation-visibility-toggle.svelte-13v0ti9:focus-visible{
outline:2px solid var(--viewer-accent-2,#2ac7ff);
outline-offset:2px}.annotation-visibility-toggle__copy.svelte-13v0ti9{
gap:3px;
min-width:0;
display:grid}.annotation-visibility-toggle__label.svelte-13v0ti9{
font-size:12px;
font-weight:650;
line-height:1.3}.annotation-visibility-toggle__description.svelte-13v0ti9{
color:var(--viewer-muted);
font-size:11px;
line-height:1.35}.annotation-visibility-toggle__switch.svelte-13v0ti9{
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff2e);
background:#ffffff1f;
border-radius:999px;
flex:none;
width:34px;
height:20px;
padding:2px;
transition:background-color .16s,border-color .16s}.annotation-visibility-toggle__switch.svelte-13v0ti9 span:where(.svelte-13v0ti9){
background:var(--viewer-text);
border-radius:50%;
width:14px;
height:14px;
transition:transform .16s;
display:block}.annotation-visibility-toggle--active.svelte-13v0ti9 .annotation-visibility-toggle__switch:where(.svelte-13v0ti9){
border-color:var(--viewer-accent-2,#2ac7ff);
background:var(--viewer-accent-2,#2ac7ff)}.annotation-visibility-toggle--active.svelte-13v0ti9 .annotation-visibility-toggle__switch:where(.svelte-13v0ti9) span:where(.svelte-13v0ti9){
transform:translate(14px)}.annotation-list.svelte-13v0ti9{
gap:8px;
margin:0;
padding:0;
list-style:none;
display:grid}.annotation-list__item.svelte-13v0ti9{
appearance:none;
width:100%;
color:inherit;
font-size:12px;
font:inherit;
text-align:left;
cursor:pointer;
background:#ffffff0d;
border:1px solid #0000;
border-radius:10px;
gap:6px;
padding:8px 10px;
display:grid}.annotation-list__item--tag.svelte-13v0ti9{
background:#ff4fa214;
border:1px solid #ff4fa259}.annotation-list__item--active.svelte-13v0ti9{
border-color:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 7%, transparent);
box-shadow:0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 2%, transparent)}.annotation-list__item.svelte-13v0ti9:focus-visible{
outline:2px solid color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 6%, transparent);
outline-offset:2px}.annotation-list__header.svelte-13v0ti9{
justify-content:space-between;
align-items:center;
gap:8px;
display:flex}.annotation-list__badge.svelte-13v0ti9{
color:var(--viewer-text);
text-transform:uppercase;
letter-spacing:.08em;
background:#ff4fa233;
border-radius:999px;
padding:2px 6px;
font-size:10px}.annotation-list__label.svelte-13v0ti9{
color:var(--viewer-text);
font-weight:600;
line-height:1.4}.annotation-list__meta.svelte-13v0ti9{
color:var(--viewer-muted);
font-size:11px}.annotation-list__bodies.svelte-13v0ti9{
gap:6px;
display:grid}.annotation-body.svelte-13v0ti9{
color:var(--viewer-text);
font-size:12px;
line-height:1.4}.annotation-body--image.svelte-13v0ti9{
margin:0}.annotation-body--image.svelte-13v0ti9 img:where(.svelte-13v0ti9){
border:1px solid #ffffff14;
border-radius:8px;
width:100%;
display:block}.annotation-body--html p{
margin:0 0 6px}.annotation-body--html p:last-child{
margin-bottom:0}.annotation-body--html a{
color:var(--viewer-accent-2)}.annotation-body--html img{
border-radius:6px;
max-width:100%;
height:auto}.tools__note.svelte-noys36{
color:var(--viewer-muted);
margin-bottom:10px;
font-size:12px}.tools__group.svelte-noys36{
gap:6px;
margin-bottom:12px;
display:grid}.tools__label.svelte-noys36{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--viewer-muted);
justify-content:space-between;
align-items:center;
font-size:11px;
display:flex}.tools__value.svelte-noys36{
color:var(--viewer-text);
font-weight:600}.tools__slider.svelte-noys36{
width:100%;
accent-color:var(--viewer-accent-2)}.tools__slider.svelte-noys36:disabled{
opacity:.5}.tools__divider.svelte-noys36{
text-transform:uppercase;
letter-spacing:.16em;
color:var(--viewer-muted);
margin:4px 0 8px;
font-size:10px}.tools__toggle.svelte-noys36{
color:var(--viewer-text);
background:#ffffff0d;
border-radius:10px;
justify-content:space-between;
align-items:center;
gap:10px;
margin-bottom:8px;
padding:6px 8px;
font-size:12px;
display:flex}.tools__toggle.svelte-noys36 input:where(.svelte-noys36){
accent-color:var(--viewer-accent-tools)}.tools__reset.svelte-noys36{
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
background:#ffffff14;
border-radius:999px;
margin-top:8px;
padding:6px 12px;
font-size:11px}.tools__reset.svelte-noys36:disabled{
opacity:.5;
cursor:not-allowed}.search.svelte-cvoopr{
gap:8px;
display:grid}.search__label.svelte-cvoopr{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--viewer-muted);
font-size:11px}.search__row.svelte-cvoopr{
grid-template-columns:1fr auto;
gap:8px;
display:grid}.search__input.svelte-cvoopr{
border:1px solid var(--viewer-panel-border);
background:var(--viewer-search-input-bg,#0a0e13cc);
color:var(--viewer-text);
border-radius:10px;
padding:8px 10px;
font-size:12px}.search__input.svelte-cvoopr::placeholder{
color:var(--viewer-muted)}.search__clear.svelte-cvoopr{
background:var(--viewer-search-clear-bg,#ffffff1a);
color:var(--viewer-text);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
border:none;
border-radius:10px;
padding:8px 12px;
font-size:11px}.search__count.svelte-cvoopr{
color:var(--viewer-muted);
margin-top:6px;
font-size:12px}.search-list.svelte-cvoopr{
gap:6px;
margin:8px 0 0;
padding:0;
list-style:none;
display:grid}.search-list__item.svelte-cvoopr{
background:var(--viewer-search-item-bg,#ffffff0f);
border:2px solid #0000;
border-radius:10px;
padding:0;
font-size:12px;
transition:border-color .2s}.search-list__item--selected.svelte-cvoopr{
border-color:var(--viewer-search-selected-border,var(--viewer-accent-2,#2ac7ff))}.search-list__button.svelte-cvoopr{
width:100%;
color:var(--viewer-text);
text-align:left;
cursor:pointer;
background:0 0;
border:none;
border-radius:10px;
padding:6px 8px;
font-size:12px;
transition:background-color .2s}.search-list__button.svelte-cvoopr:hover{
background:var(--viewer-search-item-hover-bg,#ffffff1a)}.search-list__button.svelte-cvoopr:focus{
outline:2px solid var(--viewer-search-focus,#007bff);
outline-offset:-2px}@media (width<=900px){
.search__row.svelte-cvoopr{
grid-template-columns:1fr}}mango-av-chapters.svelte-2jjn3h,mango-av-transcript.svelte-2jjn3h{
--mango-av-accent:var(--viewer-accent,#e07a3f);
--mango-av-accent-contrast:#fff;
--mango-av-background:transparent;
--mango-av-surface:#ffffff0f;
--mango-av-text:var(--viewer-text,#e8edf4);
--mango-av-muted:var(--viewer-muted,#9aa6b2);
--mango-av-border:var(--viewer-panel-border,#ffffff1f);
--mango-av-radius:.625rem;
display:block}mango-av-transcript.svelte-2jjn3h{
--mango-av-radius:0}.settings-panel.svelte-1aaxlqa{
gap:10px;
display:grid}.settings-panel__section.svelte-1aaxlqa{
gap:8px;
display:grid}.settings-panel__label.svelte-1aaxlqa{
letter-spacing:.1em;
text-transform:uppercase;
color:var(--viewer-muted);
font-size:11px}.settings-panel__section--disabled.svelte-1aaxlqa{
opacity:.48}select.svelte-1aaxlqa{
color:var(--viewer-text);
background:#ffffff14;
border:1px solid #ffffff2e;
border-radius:10px;
padding:8px 10px}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel .panel__tabs{
background:#fff9;
border:1px solid #2230411a}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel .panel__tab{
color:#223041;
background:#ffffffd6}.settings-panel .panel__tab--active{
border:1px solid color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 64%, transparent);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 14%, transparent);
color:var(--viewer-text,#f5fbff);
box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 8%, transparent)}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel .panel__tab--active{
border-color:var(--viewer-accent-2,#159fce);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 13%, transparent);
color:var(--viewer-text,#16435a)}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel select{
background:#ffffffd6;
border-color:#2230412e}.page-layout-options.svelte-1aaxlqa{
grid-template-columns:repeat(2,minmax(0,1fr));
gap:10px;
display:grid}.page-layout-card.svelte-1aaxlqa{
color:#ebf2fae6;
text-align:left;
cursor:pointer;
background:#ffffff0b;
border:1px solid #ffffff24;
border-radius:12px;
grid-template-columns:minmax(0,1fr) auto;
align-items:center;
gap:10px;
min-height:64px;
padding:11px 12px;
font-size:12px;
font-weight:650;
line-height:1.2;
transition:background-color .16s,border-color .16s,box-shadow .16s;
display:grid}.page-layout-card.svelte-1aaxlqa svg{
color:#e2ebf5d1;
stroke-width:1.8px;
width:25px;
height:25px;
transition:color .16s}.page-layout-card.svelte-1aaxlqa:hover:not(:disabled):not(.page-layout-card--selected){
border-color:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 46%, transparent);
background:#ffffff14}.page-layout-card.svelte-1aaxlqa:hover:not(:disabled):not(.page-layout-card--selected) svg,.page-layout-card--selected.svelte-1aaxlqa svg{
color:var(--viewer-accent-2,#2ac7ff)}.page-layout-card--selected.svelte-1aaxlqa{
border:2px solid var(--viewer-accent-2,#2ac7ff);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent);
color:var(--viewer-text,#f5fbff);
box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent);
padding:10px 11px}.page-layout-card.svelte-1aaxlqa:focus-visible{
outline:3px solid color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 82%, transparent);
outline-offset:3px}.page-layout-card.svelte-1aaxlqa:disabled{
cursor:not-allowed}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel .page-layout-card{
color:#223041;
background:#ffffffb8;
border-color:#2230412e}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .settings-panel .page-layout-card--selected{
border-color:var(--viewer-accent-2,#159fce);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 13%, transparent);
color:var(--viewer-text,#16435a)}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .page-layout-card.svelte-1aaxlqa svg{
color:#223041b8}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .page-layout-card--selected.svelte-1aaxlqa svg{
color:var(--viewer-accent-2,#159fce)}@container mango-viewer (width<=560px){
.page-layout-options.svelte-1aaxlqa{
grid-template-columns:1fr}}@media (prefers-reduced-motion:reduce){
.page-layout-card.svelte-1aaxlqa,.page-layout-card.svelte-1aaxlqa svg{
transition:none}}.layers__list.svelte-r4toft{
gap:12px;
display:grid}.layers__item.svelte-r4toft{
background:#ffffff0a;
border:1px solid #ffffff08;
border-radius:10px;
gap:8px;
padding:10px 12px;
transition:background-color .2s,border-color .2s;
display:grid}.layers__item.svelte-r4toft:hover{
background:#ffffff0f;
border-color:#ffffff0f}.layers__info.svelte-r4toft{
text-transform:uppercase;
letter-spacing:.08em;
justify-content:space-between;
align-items:center;
font-size:11px;
display:flex}.layers__name.svelte-r4toft{
color:var(--viewer-text,#e8edf4);
font-weight:700}.layers__value.svelte-r4toft{
color:var(--viewer-muted,#9aa6b2);
font-variant-numeric:tabular-nums;
font-weight:600}.layers__slider.svelte-r4toft{
width:100%;
accent-color:var(--viewer-layer-accent,var(--viewer-accent-2,#2ac7ff));
cursor:pointer;
background:#ffffff1a;
border-radius:2px;
outline:none;
height:4px;
transition:opacity .2s}.layers__slider.svelte-r4toft::-webkit-slider-runnable-track{
background:0 0}.layers__slider.svelte-r4toft::-moz-range-track{
background:0 0}.compare-panel.svelte-1p0jjd6{
gap:14px;
display:grid}.compare-panel__intro.svelte-1p0jjd6{
gap:4px;
display:grid}.compare-panel__label.svelte-1p0jjd6{
letter-spacing:.1em;
text-transform:uppercase;
color:var(--viewer-muted);
font-size:11px;
font-weight:700}.compare-panel__intro.svelte-1p0jjd6 p:where(.svelte-1p0jjd6){
color:var(--viewer-muted);
margin:0;
font-size:12px;
line-height:1.45}.compare-panel__options.svelte-1p0jjd6{
grid-template-columns:repeat(2,minmax(0,1fr));
gap:10px;
display:grid}.layout-card.svelte-1p0jjd6{
min-height:72px;
color:var(--viewer-text);
text-align:left;
cursor:pointer;
background:#ffffff0b;
border:1px solid #ffffff24;
border-radius:12px;
grid-template-columns:minmax(0,1fr) auto;
align-items:center;
gap:10px;
padding:12px;
transition:background-color .16s,border-color .16s,box-shadow .16s;
display:grid;
position:relative}.layout-card.svelte-1p0jjd6:hover:not(:disabled):not(.layout-card--selected){
border-color:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 46%, transparent);
background:#ffffff14}.layout-card.svelte-1p0jjd6:focus-visible{
outline:3px solid color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 82%, transparent);
outline-offset:3px}.layout-card--selected.svelte-1p0jjd6{
border:2px solid var(--viewer-accent-2,#2ac7ff);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent);
box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent);
padding:11px}.layout-card.svelte-1p0jjd6:disabled{
opacity:.42;
cursor:not-allowed}.layout-card__icon.svelte-1p0jjd6{
color:#e2ebf5d1;
order:2;
place-items:center;
width:28px;
height:28px;
transition:color .16s;
display:grid}.layout-card__icon--stacked.svelte-1p0jjd6{
transform:rotate(90deg)}.layout-card__icon.svelte-1p0jjd6 svg{
stroke-width:1.8px;
width:25px;
height:25px}.layout-card.svelte-1p0jjd6:hover:not(:disabled):not(.layout-card--selected) .layout-card__icon:where(.svelte-1p0jjd6),.layout-card--selected.svelte-1p0jjd6 .layout-card__icon:where(.svelte-1p0jjd6){
color:var(--viewer-accent-2,#2ac7ff)}.layout-card__copy.svelte-1p0jjd6{
order:1;
gap:3px;
min-width:0;
display:grid}.layout-card__label.svelte-1p0jjd6{
color:#ebf2fae6;
font-size:12px;
font-weight:650;
line-height:1.2}.layout-card--selected.svelte-1p0jjd6 .layout-card__label:where(.svelte-1p0jjd6){
color:var(--viewer-text,#f5fbff)}.layout-card__dimensions.svelte-1p0jjd6{
color:var(--viewer-muted);
font-variant-numeric:tabular-nums;
font-size:11px;
line-height:1.2}.compare-panel__status.svelte-1p0jjd6{
clip:rect(0, 0, 0, 0);
white-space:nowrap;
border:0;
width:1px;
height:1px;
margin:-1px;
padding:0;
position:absolute;
overflow:hidden}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card{
color:#223041;
background:#ffffffb8;
border-color:#2230412e}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card:hover:not(:disabled):not(.layout-card--selected){
background:#ecf7fcf0;
border-color:#12a0cf8c}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card--selected{
border-color:var(--viewer-accent-2,#159fce);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 13%, transparent);
box-shadow:inset 0 0 0 1px #159fce24}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card__label{
color:#223041}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card__icon{
color:#223041b8}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card:hover:not(:disabled):not(.layout-card--selected) .layout-card__icon,.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .compare-panel .layout-card--selected .layout-card__icon{
color:var(--viewer-accent-2,#159fce)}@container mango-viewer (width<=560px){
.compare-panel__options.svelte-1p0jjd6{
grid-template-columns:1fr}}@media (prefers-reduced-motion:reduce){
.layout-card.svelte-1p0jjd6,.layout-card__icon.svelte-1p0jjd6{
transition:none}}.panel--collection.svelte-16ujlb{
min-height:0}mango-collection-tree.svelte-16ujlb{
--mango-collection-accent:var(--viewer-accent,#e07a3f);
--mango-collection-background:var(--viewer-panel,#121922);
--mango-collection-surface:var(--viewer-panel-strong,#1b242e);
--mango-collection-text:var(--viewer-text,#e8edf4);
--mango-collection-muted:var(--viewer-muted,#ffffffa6);
--mango-collection-border:var(--viewer-panel-border,#ffffff1f);
--mango-collection-radius:10px;
--mango-collection-max-height:none;
min-height:0;
display:block}.panel-stack.svelte-3ojvr2{
flex-direction:column;
align-content:start;
gap:16px;
min-height:0;
display:flex}.panel-stack[hidden].svelte-3ojvr2{
display:none!important}.panel-stack--left.svelte-3ojvr2{
box-sizing:border-box;
background:var(--story-sidebar-bg,var(--viewer-panel,#121922));
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
border:1px solid var(--story-sidebar-border,var(--viewer-panel-border,#ffffff14));
overscroll-behavior:contain;
border-radius:18px;
flex-direction:column;
height:100%;
min-height:0;
max-height:100%;
padding:16px;
display:flex;
overflow:auto;
box-shadow:inset 0 0 0 1px #ffffff05}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
box-shadow:none;
transform-origin:0;
background:#121922b8;
border-radius:0 18px 18px 0;
padding:18px 24px 28px;
animation:.22s cubic-bezier(.2,.8,.2,1) svelte-3ojvr2-viewer-secondary-panel-enter}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
background:#e9edf3e6;
border-color:#2230411f}.viewer[data-theme=sepia] .panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
background:#e8dcc6eb;
border-color:#4c3a2329}.viewer[data-theme=midnight] .panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
background:#071321e6;
border-color:#7eb4eb26}.viewer[data-theme=ringo] .panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
background:#ffeb8ceb;
border-color:#4a30002e}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2 .panel{
background:0 0;
border:0;
border-radius:0;
gap:18px;
padding:0}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2 .panel__header{
min-height:46px}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2 .panel__title{
color:var(--viewer-text);
letter-spacing:0;
text-transform:none;
font-family:Georgia,Times New Roman,serif;
font-size:24px;
font-weight:600}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2 .panel__close{
width:38px;
height:38px;
font-size:19px}.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2 .panel__body{
font-size:13px;
line-height:1.55}@keyframes svelte-3ojvr2-viewer-secondary-panel-enter{
0%{
opacity:0;
transform:translate(-10px)}to{
opacity:1;
transform:translate(0)}}@media (prefers-reduced-motion:reduce){
.panel-stack--left.panel-stack--redesigned.svelte-3ojvr2{
animation:none}}.panel-stack--left.svelte-3ojvr2 .panel{
background:var(--story-sidebar-row-bg,color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent));
box-shadow:none;
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
border:1px solid #0000;
border-radius:14px;
gap:12px;
padding:12px;
display:grid}.panel-stack--left.svelte-3ojvr2 .panel+.panel{
margin-top:10px}.panel-stack--left.svelte-3ojvr2 .panel__header{
justify-content:space-between;
align-items:center;
gap:10px;
display:flex}.panel-stack--left.svelte-3ojvr2 .panel__title{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--story-sidebar-muted,var(--viewer-muted,#ffffffa6));
font-size:12px;
font-weight:700}.panel-stack--left.svelte-3ojvr2 .panel__close{
background:var(--story-sidebar-button-bg,var(--viewer-close-button-bg));
border-color:var(--story-sidebar-button-border,var(--viewer-close-button-border))}.panel-stack--left.svelte-3ojvr2 .panel__body{
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
font-size:13px;
line-height:1.4}.panel-stack--left.svelte-3ojvr2 a{
color:var(--story-sidebar-link,var(--viewer-accent-2,#2ac7ff));
text-underline-offset:2px;
font-weight:600;
text-decoration:underline;
text-decoration-thickness:2px}.panel-stack--left.svelte-3ojvr2 a:visited{
color:var(--story-sidebar-link,var(--viewer-accent-2,#2ac7ff))}.panel-stack--left.svelte-3ojvr2 a:hover,.panel-stack--left.svelte-3ojvr2 a:focus-visible{
color:var(--story-sidebar-link-hover,var(--viewer-accent,#e07a3f));
outline-offset:2px;
outline:2px solid}.panel-stack--left.svelte-3ojvr2 .panel__subtext,.panel-stack--left.svelte-3ojvr2 .panel__empty,.panel-stack--left.svelte-3ojvr2 .panel__hint{
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9))}.panel{
background:var(--viewer-panel);
border:1px solid var(--viewer-panel-border);
border-radius:16px;
gap:10px;
padding:14px;
font-size:13px;
display:grid}.panel__header{
justify-content:space-between;
align-items:center;
gap:10px;
display:flex}.panel__title{
text-transform:uppercase;
letter-spacing:.16em;
color:var(--viewer-muted);
font-size:11px}.panel__close{
width:var(--viewer-close-button-size,28px);
height:var(--viewer-close-button-size,28px);
border:1px solid var(--viewer-close-button-border,#ffffff2e);
border-radius:var(--viewer-close-button-radius,10px);
background:var(--viewer-close-button-bg,#ffffff1a);
color:var(--viewer-close-button-color,var(--viewer-text));
font-size:var(--viewer-close-button-glyph-size,15px);
cursor:pointer;
justify-content:center;
align-items:center;
line-height:1;
transition:background-color .18s,border-color .18s,transform 80ms;
display:inline-flex}.panel__close:hover:not(:disabled){
background:var(--viewer-close-button-hover-bg,#ffffff29);
border-color:var(--viewer-close-button-hover-border,#ffffff57)}.panel__close:focus-visible{
outline:2px solid var(--viewer-close-button-focus-ring,#2ac7ff8c);
outline-offset:2px}.panel__close:active:not(:disabled){
transform:translateY(1px)}.panel__close:disabled{
opacity:.45;
cursor:not-allowed}.panel__tabs{
background:#ffffff0d;
border-radius:12px;
grid-template-columns:repeat(2,minmax(0,1fr));
gap:8px;
padding:6px;
display:grid}.panel__tab{
color:var(--viewer-text);
cursor:pointer;
background:#ffffff0f;
border:none;
border-radius:10px;
padding:6px 10px;
font-size:12px;
font-weight:600}.panel__tab--active{
border:1px solid color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 64%, transparent);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 14%, transparent);
color:var(--viewer-text,#f5fbff);
box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 8%, transparent)}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .panel-stack--left.svelte-3ojvr2 .panel__tab{
color:#223041;
background:#ffffffc7}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .panel-stack--left.svelte-3ojvr2 .panel__tab--active{
border-color:var(--viewer-accent-2,#159fce);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 13%, transparent);
color:var(--viewer-text,#16435a);
box-shadow:inset 0 0 0 1px #159fce1a}.panel__subtext{
color:var(--viewer-muted);
text-align:center;
font-size:12px}.panel__body{
color:var(--viewer-text);
line-height:1.4}.panel__empty{
color:var(--viewer-muted);
font-size:12px}.panel__hint{
color:var(--viewer-muted);
letter-spacing:.08em;
text-transform:uppercase;
margin-top:8px;
font-size:11px}@container mango-viewer (width<=768px){
.panel-stack--left.svelte-3ojvr2{
padding:12px}}.viewer-mobile-nav.svelte-wwdlzg{
box-sizing:border-box;
scrollbar-width:none;
touch-action:pan-x;
align-items:center;
gap:10px;
width:max-content;
max-width:100%;
padding:0;
display:flex;
overflow:clip}.viewer-mobile-nav.svelte-wwdlzg::-webkit-scrollbar{
display:none}.viewer-mobile-nav__group.svelte-wwdlzg{
flex:none;
align-items:center;
gap:4px;
display:inline-flex}.viewer-mobile-nav__group.svelte-wwdlzg+.viewer-mobile-nav__group:where(.svelte-wwdlzg){
border-left:1px solid var(--viewer-panel-border);
padding-left:10px}@container mango-viewer (height<=500px) and (width>=560px){
.viewer-mobile-nav.svelte-wwdlzg{
overscroll-behavior-x:auto;
overscroll-behavior-y:contain;
touch-action:pan-y;
flex-direction:column;
width:max-content;
max-height:100%;
overflow:clip auto}.viewer-mobile-nav__group.svelte-wwdlzg{
flex-direction:column}.viewer-mobile-nav__group.svelte-wwdlzg+.viewer-mobile-nav__group:where(.svelte-wwdlzg){
border-top:1px solid var(--viewer-panel-border);
border-left:0;
padding-top:8px;
padding-left:0}}.viewer-mobile-nav__button.svelte-wwdlzg{
width:44px;
height:44px;
color:var(--viewer-text);
cursor:pointer;
background:#ffffff06;
border:1px solid #0000;
border-radius:9px;
flex:0 0 44px;
justify-content:center;
align-items:center;
padding:0;
display:inline-flex}.viewer-mobile-nav__button.svelte-wwdlzg svg{
stroke-width:1.8px;
width:19px;
height:19px}.viewer-mobile-nav__button--active.svelte-wwdlzg{
border-color:var(--viewer-accent-2);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 9%, transparent);
color:var(--viewer-text)}.viewer-mobile-nav__button.svelte-wwdlzg:disabled{
opacity:.35;
cursor:not-allowed}.viewer-sidebar.svelte-wwdlzg{
box-sizing:border-box;
flex-direction:column;
gap:10px;
width:100%;
height:100%;
min-height:0;
transition:gap .22s;
display:flex}.viewer-sidebar__scroll.svelte-wwdlzg{
overscroll-behavior:contain;
scrollbar-gutter:stable;
scrollbar-width:thin;
scrollbar-color:#97a5b36b transparent;
flex-direction:column;
flex:auto;
gap:34px;
min-height:0;
padding:0 4px 8px 0;
transition:gap .22s;
display:flex;
overflow:hidden auto}.viewer-sidebar__scroll.svelte-wwdlzg::-webkit-scrollbar{
width:6px}.viewer-sidebar__scroll.svelte-wwdlzg::-webkit-scrollbar-thumb{
background:#97a5b36b;
border-radius:999px}.viewer-sidebar__section.svelte-wwdlzg,.viewer-sidebar__items.svelte-wwdlzg{
display:grid}.viewer-sidebar__section.svelte-wwdlzg{
gap:14px;
transition:gap .22s}.viewer-sidebar__items.svelte-wwdlzg{
gap:10px}.viewer-sidebar__heading.svelte-wwdlzg{
color:var(--viewer-muted);
letter-spacing:.12em;
text-transform:uppercase;
opacity:1;
max-height:18px;
padding-inline:8px;
font-size:11px;
font-weight:700;
transition:max-height .18s,opacity .14s,padding .18s;
overflow:hidden}.viewer-sidebar__button.svelte-wwdlzg,.viewer-sidebar__collapse.svelte-wwdlzg{
box-sizing:border-box;
border:1px solid var(--viewer-nav-button-border,var(--viewer-panel-border));
background:var(--viewer-nav-button-bg,#ffffff06);
width:100%;
min-height:46px;
color:var(--viewer-nav-button-color,var(--viewer-text));
font:inherit;
text-align:left;
cursor:pointer;
border-radius:10px;
align-items:center;
gap:12px;
padding:10px 12px;
font-size:13px;
font-weight:600;
transition:background-color .18s,border-color .18s,color .18s,gap .22s,padding .22s;
display:flex}.viewer-sidebar__button.svelte-wwdlzg span:where(.svelte-wwdlzg),.viewer-sidebar__collapse.svelte-wwdlzg span:where(.svelte-wwdlzg){
opacity:1;
white-space:nowrap;
max-width:160px;
transition:max-width .22s,opacity .14s,transform .22s;
overflow:hidden;
transform:translate(0)}.viewer-sidebar__button.svelte-wwdlzg svg,.viewer-sidebar__collapse.svelte-wwdlzg svg{
stroke-width:1.8px;
flex:0 0 20px;
width:20px;
height:20px}.viewer-sidebar__button--iiif.svelte-wwdlzg img:where(.svelte-wwdlzg),.viewer-mobile-nav__button--iiif.svelte-wwdlzg img:where(.svelte-wwdlzg){
filter:invert();
flex:0 0 20px;
width:20px;
height:20px}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .viewer-sidebar__button--iiif.svelte-wwdlzg img:where(.svelte-wwdlzg),.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .viewer-mobile-nav__button--iiif.svelte-wwdlzg img:where(.svelte-wwdlzg){
filter:none}.viewer[data-theme=ringo] .viewer-sidebar__button--iiif.svelte-wwdlzg img:where(.svelte-wwdlzg){
filter:invert()}.viewer-sidebar__button.svelte-wwdlzg:hover:not(:disabled),.viewer-sidebar__collapse.svelte-wwdlzg:hover{
background:var(--viewer-nav-button-hover-bg,#ffffff0f);
border-color:var(--viewer-nav-button-hover-border,#ffffff2e)}.viewer-sidebar__button--active.svelte-wwdlzg{
border-color:var(--viewer-nav-button-active-border,var(--viewer-accent-2));
background:var(--viewer-nav-button-active-bg,color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 9%, transparent));
box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent)}.viewer-sidebar__button.svelte-wwdlzg:disabled{
opacity:.38;
cursor:not-allowed}.viewer-sidebar__collapse.svelte-wwdlzg{
min-height:38px;
color:var(--viewer-muted);
background:0 0;
border-color:#0000;
flex:none;
margin-top:0}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__scroll:where(.svelte-wwdlzg){
gap:22px}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__section:where(.svelte-wwdlzg){
gap:0}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__section:where(.svelte-wwdlzg)+.viewer-sidebar__section:where(.svelte-wwdlzg){
border-top:1px solid var(--viewer-panel-border);
padding-top:18px}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__heading:where(.svelte-wwdlzg){
opacity:0;
max-height:0;
padding:0}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__button:where(.svelte-wwdlzg),.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__collapse:where(.svelte-wwdlzg){
gap:0;
min-height:44px;
padding:10px 15px}.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__button:where(.svelte-wwdlzg) span:where(.svelte-wwdlzg),.viewer-sidebar--icon-only.svelte-wwdlzg .viewer-sidebar__collapse:where(.svelte-wwdlzg) span:where(.svelte-wwdlzg){
opacity:0;
max-width:0;
transform:translate(-8px)}@media (prefers-reduced-motion:reduce){
.viewer-sidebar.svelte-wwdlzg,.viewer-sidebar__scroll.svelte-wwdlzg,.viewer-sidebar__section.svelte-wwdlzg,.viewer-sidebar__heading.svelte-wwdlzg,.viewer-sidebar__button.svelte-wwdlzg,.viewer-sidebar__collapse.svelte-wwdlzg,.viewer-sidebar__button.svelte-wwdlzg span:where(.svelte-wwdlzg),.viewer-sidebar__collapse.svelte-wwdlzg span:where(.svelte-wwdlzg){
transition:none}}.viewer__dock.svelte-wwdlzg{
z-index:2;
gap:12px;
display:grid;
position:absolute;
top:50%;
right:18px;
transform:translateY(-50%)}.viewer__dock-button.svelte-wwdlzg{
border:1px solid var(--viewer-dock-button-border,#ffffff1f);
background:var(--viewer-dock-button-bg,#0f141bf2);
width:46px;
height:46px;
color:var(--viewer-text);
letter-spacing:.08em;
cursor:pointer;
box-shadow:var(--viewer-dock-button-shadow,0 12px 24px #00000059);
border-radius:50%;
justify-content:center;
align-items:center;
gap:8px;
font-size:12px;
font-weight:700;
display:inline-flex;
position:relative}.viewer__dock-icon.svelte-wwdlzg{
justify-content:center;
align-items:center;
width:22px;
height:22px;
display:inline-flex}.viewer__dock-icon.svelte-wwdlzg svg:where(.svelte-wwdlzg){
stroke:currentColor;
stroke-width:2px;
stroke-linecap:round;
stroke-linejoin:round;
width:22px;
height:22px}.viewer__dock-icon--info.svelte-wwdlzg{
width:26px;
height:26px}.viewer__dock-info-chip.svelte-wwdlzg{
text-transform:lowercase;
border:2px solid;
border-radius:50%;
place-items:center;
width:24px;
height:24px;
font-family:Times New Roman,Georgia,serif;
font-size:18px;
font-weight:700;
line-height:1;
display:inline-grid}.viewer__dock-label.svelte-wwdlzg{
white-space:nowrap;
clip-path:inset(100%);
clip:rect(0 0 0 0);
border:0;
width:1px;
height:1px;
margin:-1px;
padding:0;
position:absolute;
overflow:hidden}.viewer__dock--compact.svelte-wwdlzg .viewer__dock-button:where(.svelte-wwdlzg){
width:44px;
height:44px}.viewer__dock--compact.svelte-wwdlzg{
width:100%;
position:static;
top:auto;
bottom:auto;
right:auto;
transform:none}.viewer__dock--compact.svelte-wwdlzg .viewer__dock-button:where(.svelte-wwdlzg):after{
left:calc(100% + 10px);
right:auto}.viewer__dock-button.svelte-wwdlzg:after{
content:attr(data-label);
background:var(--viewer-dock-tooltip-bg,#0a0e13f2);
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
letter-spacing:.08em;
text-transform:uppercase;
white-space:nowrap;
opacity:0;
pointer-events:none;
border-radius:999px;
padding:4px 10px;
font-size:10px;
transition:opacity .2s;
position:absolute;
top:50%;
right:calc(100% + 10px);
transform:translateY(-50%)}.viewer__dock-button.svelte-wwdlzg:hover:after,.viewer__dock-button.svelte-wwdlzg:focus-visible:after{
opacity:1}.viewer__dock-button--active.svelte-wwdlzg{
color:var(--viewer-accent-2);
border-color:var(--viewer-dock-active-border,#2ac7ff94);
box-shadow:0 0 0 1px var(--viewer-dock-active-ring,#2ac7ff38), var(--viewer-dock-active-shadow-base,0 12px 24px #00000059)}.viewer__dock-button--active.svelte-wwdlzg .viewer__dock-info-chip:where(.svelte-wwdlzg){
background:var(--viewer-accent-2);
border-color:var(--viewer-accent-2);
color:var(--viewer-dock-active-chip-text,#0b0f14)}@container mango-viewer (width<=900px){
.viewer__dock.svelte-wwdlzg{
grid-template-columns:repeat(auto-fit,minmax(32px,1fr));
grid-auto-flow:column;
gap:4px;
top:auto;
bottom:16px;
right:16px;
transform:none}.viewer__dock-button.svelte-wwdlzg,.viewer__dock--compact.svelte-wwdlzg .viewer__dock-button:where(.svelte-wwdlzg){
border-radius:10px;
width:36px;
height:36px}.viewer__dock-icon.svelte-wwdlzg,.viewer__dock-icon.svelte-wwdlzg svg:where(.svelte-wwdlzg){
width:18px;
height:18px}.viewer__dock-icon--info.svelte-wwdlzg{
width:20px;
height:20px}.viewer__dock-info-chip.svelte-wwdlzg{
width:19px;
height:19px;
font-size:14px}.viewer__dock--compact.svelte-wwdlzg{
width:100%;
position:static;
top:auto;
bottom:auto;
right:auto;
transform:none}}.annotation-layer.svelte-1u1ifbs{
pointer-events:none;
position:absolute;
inset:0}.annotation-layer__shape.svelte-1u1ifbs{
fill:#2ac7ff2e;
stroke:#2ac7ffeb;
stroke-width:2px;
cursor:pointer;
pointer-events:auto}.annotation-layer__shape--polyline.svelte-1u1ifbs{
fill:none!important}.annotation-layer__shape--hit.svelte-1u1ifbs{
fill:var(--viewer-search-hit-fill,#2ac7ff40)!important;
stroke:var(--viewer-search-hit-border,#2ac7fff2)!important}.annotation-layer__shape--hover.svelte-1u1ifbs{
opacity:.95}.annotation-layer__shape--active.svelte-1u1ifbs{
stroke-width:3px}.annotation-layer__label.svelte-1u1ifbs{
fill:#f1f5f9;
paint-order:stroke;
stroke:#0a0e14e6;
stroke-width:3px;
stroke-linejoin:round;
text-anchor:middle;
dominant-baseline:middle;
pointer-events:none;
font-size:11px}.stage__container.svelte-1udkqf7{
gap:16px;
min-width:0;
height:100%;
min-height:0;
display:grid;
position:relative}.stage__dock.svelte-1udkqf7{
z-index:2;
position:absolute;
top:50%;
right:18px;
transform:translateY(-50%)}.stage__dock--inline.svelte-1udkqf7{
justify-self:start;
position:static;
transform:none}.stage__dock.svelte-1udkqf7 .viewer__dock{
position:static;
top:auto;
right:auto;
transform:none}.stage__dock--inline.svelte-1udkqf7 .viewer__dock{
grid-template-columns:repeat(auto-fit,minmax(44px,1fr));
grid-auto-flow:column}.stage__media.svelte-1udkqf7{
background:var(--viewer-stage);
border:1px solid #ffffff0f;
border-radius:18px;
outline:none;
min-width:0;
height:auto;
position:relative;
overflow:hidden}.stage__media--fixed.svelte-1udkqf7{
height:clamp(240px,68cqh,676px)}.stage__media--constrained.svelte-1udkqf7,.stage__media--fill.svelte-1udkqf7{
height:100%;
min-height:0}.stage__media.svelte-1udkqf7:focus-visible{
box-shadow:0 0 0 3px color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 4%, transparent)}.stage__placeholder.svelte-1udkqf7{
box-sizing:border-box;
width:100%;
height:100%;
min-height:0;
color:var(--viewer-muted);
text-transform:uppercase;
letter-spacing:.16em;
background:#ffffff0a;
border-radius:18px;
place-items:center;
padding:16px;
font-size:12px;
display:grid}.stage__placeholder.svelte-1udkqf7 span:where(.svelte-1udkqf7){
opacity:.8;
margin-top:.5rem;
font-size:.85em;
display:block}.stage__overlay.svelte-1udkqf7{
pointer-events:none;
align-content:start;
gap:12px;
display:grid;
position:absolute;
inset:12px}.stage__overlay--flush.svelte-1udkqf7{
inset:0}.stage__overlay.svelte-1udkqf7 .plugin-panel--overlay{
pointer-events:auto}.stage__overlay--annotation-editing.svelte-1udkqf7 .plugin-panel--overlay{
pointer-events:none}@container mango-viewer (width<=1024px){
.stage__container.svelte-1udkqf7{
gap:6px}.stage__dock.svelte-1udkqf7{
justify-self:start;
position:static;
transform:none}.stage__dock.svelte-1udkqf7 .viewer__dock{
grid-template-columns:repeat(auto-fit,minmax(32px,1fr));
grid-auto-flow:column;
gap:4px}.stage__media--fixed.svelte-1udkqf7{
height:clamp(200px,52cqh,560px)}.stage__media--audio.svelte-1udkqf7{
height:min(43.75cqw + 44px,510px);
min-height:0}.stage__media--video.svelte-1udkqf7{
aspect-ratio:16/9;
height:auto;
min-height:0}}@container mango-viewer (width<=480px){
.stage__media--fixed.svelte-1udkqf7{
height:clamp(160px,44cqh,340px)}.stage__media--audio.svelte-1udkqf7{
height:clamp(200px,26cqh,240px)}.stage__media--video.svelte-1udkqf7{
height:clamp(210px,30cqh,240px)}}@container mango-viewer (height<=560px){
.stage__media--fixed.svelte-1udkqf7,.stage__media--audio.svelte-1udkqf7,.stage__media--video.svelte-1udkqf7{
height:100%;
min-height:0}}.stage__toolbar.svelte-1vk8t58{
--stage-toolbar-gap:5px;
--stage-toolbar-button-width:36px;
--stage-toolbar-button-height:34px;
--stage-toolbar-group-height:calc(var(--stage-toolbar-button-height) + 2px);
--stage-toolbar-value-width:85px;
--stage-toolbar-zoom-width:74px;
--stage-toolbar-zoom-input-width:3.6ch;
--stage-toolbar-value-font-size:12px;
--stage-toolbar-value-gap:4px;
--stage-toolbar-value-padding:8px;
--stage-toolbar-icon-size:17px;
--stage-toolbar-radius:10px;
justify-content:center;
align-items:center;
row-gap:5px;
gap:var(--stage-toolbar-gap);
box-sizing:border-box;
width:100%;
max-width:100%;
box-shadow:none;
margin-inline:auto;
background:0 0;
border:none;
border-radius:11px;
flex-wrap:nowrap;
margin-top:0;
padding:3px;
display:flex;
container-type:inline-size}.stage__toolbar--below.svelte-1vk8t58{
--stage-toolbar-button-width:40px;
--stage-toolbar-button-height:38px;
--stage-toolbar-group-height:40px;
--stage-toolbar-value-width:90px;
--stage-toolbar-zoom-width:78px;
--stage-toolbar-icon-size:18px;
margin-top:-6px}.stage__toolbar--above.svelte-1vk8t58{
margin-bottom:6px}.stage__toolbar-separator.svelte-1vk8t58{
background:var(--viewer-toolbar-separator,#ffffff24);
width:1px;
height:29px}.stage__toolbar-group.svelte-1vk8t58{
box-sizing:border-box;
border:1px solid var(--viewer-toolbar-group-border,#ffffff1a);
border-radius:var(--stage-toolbar-radius);
background:var(--viewer-toolbar-group-bg,transparent);
min-width:0;
max-width:100%;
min-height:var(--stage-toolbar-group-height);
flex:none;
align-items:center;
display:inline-flex;
overflow:hidden}.stage__toolbar-group--single.svelte-1vk8t58{
border-radius:var(--stage-toolbar-radius)}.stage__toolbar-button.svelte-1vk8t58{
width:var(--stage-toolbar-button-width);
min-width:var(--stage-toolbar-button-width);
height:var(--stage-toolbar-button-height);
min-height:var(--stage-toolbar-button-height);
flex:0 0 var(--stage-toolbar-button-width);
background:var(--viewer-toolbar-button-bg,#ffffff08);
color:var(--viewer-toolbar-button-color,var(--viewer-text));
cursor:pointer;
border:0;
justify-content:center;
align-items:center;
padding:0;
transition:background-color .2s;
display:inline-flex}.stage__toolbar-button.svelte-1vk8t58:hover:not(:disabled){
background:var(--viewer-toolbar-button-hover-bg,#ffffff14)}.stage__toolbar-button.svelte-1vk8t58:disabled{
opacity:.35;
cursor:not-allowed}.stage__toolbar-button--single.svelte-1vk8t58{
width:var(--stage-toolbar-button-width);
height:var(--stage-toolbar-button-height);
background:var(--viewer-toolbar-button-bg,#ffffff08);
border:0;
border-radius:0}.stage__toolbar-value.svelte-1vk8t58{
min-width:var(--stage-toolbar-value-width);
max-width:100%;
min-height:var(--stage-toolbar-button-height);
box-sizing:border-box;
justify-content:center;
align-items:center;
gap:var(--stage-toolbar-value-gap);
padding-inline:var(--stage-toolbar-value-padding);
font-size:var(--stage-toolbar-value-font-size);
letter-spacing:.01em;
color:var(--viewer-toolbar-value-text,#e6ecf6f5);
background:var(--viewer-toolbar-value-bg,transparent);
font-variant-numeric:tabular-nums;
white-space:nowrap;
flex:none;
font-weight:600;
display:inline-flex}.stage__toolbar-value--zoom.svelte-1vk8t58{
width:var(--stage-toolbar-zoom-width);
min-width:var(--stage-toolbar-zoom-width);
flex-basis:var(--stage-toolbar-zoom-width)}.stage__toolbar-input.svelte-1vk8t58{
color:inherit;
font:inherit;
font-weight:inherit;
text-align:right;
font-variant-numeric:tabular-nums;
background:0 0;
border:none;
outline:none;
min-width:2ch;
max-width:7ch;
margin:0;
padding:0;
line-height:1}.stage__toolbar-input--zoom.svelte-1vk8t58{
width:var(--stage-toolbar-zoom-input-width);
min-width:var(--stage-toolbar-zoom-input-width);
max-width:var(--stage-toolbar-zoom-input-width);
flex:0 0 var(--stage-toolbar-zoom-input-width)}.stage__toolbar-input.svelte-1vk8t58:disabled{
opacity:.6;
cursor:not-allowed}.stage__toolbar-input-divider.svelte-1vk8t58{
opacity:.7}.stage__toolbar-input-suffix.svelte-1vk8t58{
opacity:.95}.stage__toolbar-icon.svelte-1vk8t58{
width:var(--stage-toolbar-icon-size);
height:var(--stage-toolbar-icon-size);
display:block;
overflow:visible}.stage__toolbar-rotate-icon.svelte-1vk8t58{
width:var(--stage-toolbar-icon-size);
height:var(--stage-toolbar-icon-size);
transform-origin:50%;
place-items:center;
transition:transform .22s cubic-bezier(.4,0,.2,1);
display:grid}.stage__toolbar-rotate-icon.svelte-1vk8t58 svg{
width:100%;
height:100%;
display:block}.stage__toolbar-button.svelte-1vk8t58>svg.stage__toolbar-icon{
width:var(--stage-toolbar-icon-size);
height:var(--stage-toolbar-icon-size)}@media (prefers-reduced-motion:reduce){
.stage__toolbar-rotate-icon.svelte-1vk8t58{
transition:none}}@container (width<=500px){
.stage__toolbar--below.svelte-1vk8t58{
--stage-toolbar-gap:clamp(2px, 1cqw, 4px);
--stage-toolbar-button-width:clamp(30px, 9.4cqw, 44px);
--stage-toolbar-button-height:44px;
--stage-toolbar-group-height:calc(var(--stage-toolbar-button-height) + 2px);
--stage-toolbar-value-width:clamp(44px, 15cqw, 58px);
--stage-toolbar-zoom-width:clamp(40px, 14cqw, 54px);
--stage-toolbar-zoom-input-width:3.6ch;
--stage-toolbar-value-font-size:clamp(10px, 3.4cqw, 12px);
--stage-toolbar-value-gap:clamp(2px, .8cqw, 4px);
--stage-toolbar-value-padding:clamp(3px, 1.2cqw, 6px);
--stage-toolbar-icon-size:clamp(15px, 5.2cqw, 18px);
--stage-toolbar-radius:clamp(8px, 2.8cqw, 10px);
overscroll-behavior-x:contain;
scrollbar-width:thin;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
justify-content:center;
width:100%;
max-width:100%;
margin-inline:auto;
padding:0;
position:relative;
left:50%;
overflow:auto hidden;
transform:translate(-50%)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-separator:where(.svelte-1vk8t58){
display:none}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-group:where(.svelte-1vk8t58){
min-height:var(--stage-toolbar-group-height);
border-radius:var(--stage-toolbar-radius)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-group--single:where(.svelte-1vk8t58){
min-height:var(--stage-toolbar-group-height)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-button:where(.svelte-1vk8t58){
width:var(--stage-toolbar-button-width);
height:var(--stage-toolbar-button-height);
min-height:var(--stage-toolbar-button-height)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-button--single:where(.svelte-1vk8t58){
width:var(--stage-toolbar-button-width);
height:var(--stage-toolbar-button-height);
min-height:var(--stage-toolbar-button-height);
border-radius:0}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-value:where(.svelte-1vk8t58){
min-width:var(--stage-toolbar-value-width);
min-height:var(--stage-toolbar-button-height);
font-size:var(--stage-toolbar-value-font-size);
gap:var(--stage-toolbar-value-gap);
padding-inline:var(--stage-toolbar-value-padding)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-value--zoom:where(.svelte-1vk8t58){
width:var(--stage-toolbar-zoom-width);
min-width:var(--stage-toolbar-zoom-width);
flex-basis:var(--stage-toolbar-zoom-width)}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-icon:where(.svelte-1vk8t58){
width:var(--stage-toolbar-icon-size);
height:var(--stage-toolbar-icon-size)}}@container (width<=300px){
.stage__toolbar--below.svelte-1vk8t58{
justify-content:flex-start}}@container mango-viewer (width<=380px){
.stage__toolbar--below.svelte-1vk8t58{
overscroll-behavior-x:contain;
scrollbar-width:none;
-webkit-overflow-scrolling:touch;
flex-wrap:nowrap;
justify-content:flex-start;
overflow:auto hidden}.stage__toolbar--below.svelte-1vk8t58::-webkit-scrollbar{
display:none}.stage__toolbar--below.svelte-1vk8t58 .stage__toolbar-group:where(.svelte-1vk8t58){
flex:none}}@container mango-viewer (height<=360px){
.stage__toolbar--below.svelte-1vk8t58{
--stage-toolbar-button-height:38px;
--stage-toolbar-group-height:40px}}.gallery.svelte-fuzshn{
background:var(--viewer-gallery-bg,#0a0e13d9);
border:1px solid var(--viewer-panel-border);
border-radius:16px;
gap:12px;
margin-top:4px;
padding:16px 12px 12px;
display:grid}.gallery__header.svelte-fuzshn{
justify-content:space-between;
align-items:center;
display:flex}.gallery__title.svelte-fuzshn{
text-transform:uppercase;
letter-spacing:.16em;
color:var(--viewer-muted);
font-size:11px}.gallery__view-all.svelte-fuzshn{
color:var(--viewer-muted);
font:inherit;
cursor:pointer;
background:0 0;
border:0;
align-items:center;
gap:8px;
padding:5px;
font-size:12px;
display:inline-flex}.gallery__view-all.svelte-fuzshn:hover{
color:var(--viewer-text)}.gallery__view-all.svelte-fuzshn svg{
width:16px;
height:16px}.gallery__close.svelte-fuzshn{
width:var(--viewer-close-button-size,28px);
height:var(--viewer-close-button-size,28px);
border:1px solid var(--viewer-close-button-border,#ffffff2e);
border-radius:var(--viewer-close-button-radius,10px);
background:var(--viewer-gallery-close-bg,var(--viewer-close-button-bg,#ffffff1a));
color:var(--viewer-close-button-color,var(--viewer-text));
font-size:var(--viewer-close-button-glyph-size,15px);
cursor:pointer;
justify-content:center;
align-items:center;
line-height:1;
transition:background-color .18s,border-color .18s,transform 80ms;
display:inline-flex}.gallery__close.svelte-fuzshn:hover:not(:disabled){
background:var(--viewer-close-button-hover-bg,#ffffff29);
border-color:var(--viewer-close-button-hover-border,#ffffff57)}.gallery__close.svelte-fuzshn:focus-visible{
outline:2px solid var(--viewer-close-button-focus-ring,#2ac7ff8c);
outline-offset:2px}.gallery__close.svelte-fuzshn:active:not(:disabled){
transform:translateY(1px)}.gallery__empty.svelte-fuzshn{
color:var(--viewer-muted);
font-size:12px}.gallery__list.svelte-fuzshn{
overscroll-behavior-x:contain;
margin:0;
margin-inline:-4px;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
grid-auto-columns:minmax(96px,130px);
grid-auto-flow:column;
gap:12px;
margin-top:-4px;
padding:4px 4px 10px;
list-style:none;
display:grid;
overflow:auto hidden}.gallery__item.svelte-fuzshn{
list-style:none}.gallery__missing.svelte-fuzshn{
color:var(--viewer-muted);
place-items:center;
gap:6px;
font-size:12px;
display:grid}.gallery__missing.svelte-fuzshn svg{
opacity:.75;
width:24px;
height:24px}.gallery__button.svelte-fuzshn{
text-align:left;
border:1px solid var(--viewer-gallery-item-border,#ffffff14);
background:var(--viewer-gallery-item-bg,#121922d9);
width:100%;
color:var(--viewer-text);
cursor:pointer;
border-radius:12px;
gap:8px;
padding:8px;
display:grid}.gallery__button--active.svelte-fuzshn{
border-color:var(--viewer-accent-2);
box-shadow:0 0 0 2px var(--viewer-gallery-active-ring,#2ac7ff33)}.gallery__thumb.svelte-fuzshn{
aspect-ratio:1;
background:var(--viewer-gallery-thumb-bg,#ffffff0f);
width:100%;
color:var(--viewer-muted);
border-radius:10px;
place-items:center;
font-size:12px;
display:grid;
overflow:hidden}.gallery__img.svelte-fuzshn{
object-fit:contain;
width:100%;
height:100%}.gallery__missing.svelte-fuzshn span:where(.svelte-fuzshn){
font-weight:600}.gallery__label.svelte-fuzshn{
white-space:nowrap;
text-overflow:ellipsis;
width:100%;
min-width:0;
color:var(--viewer-muted);
font-size:11px;
display:block;
overflow:hidden}.gallery--redesigned.svelte-fuzshn .gallery__title:where(.svelte-fuzshn){
letter-spacing:0;
text-transform:none;
color:var(--viewer-text);
font-size:14px;
font-weight:600}.gallery--redesigned.svelte-fuzshn .gallery__list:where(.svelte-fuzshn){
grid-auto-columns:minmax(112px,144px);
gap:18px}.gallery--redesigned.svelte-fuzshn .gallery__button:where(.svelte-fuzshn){
background:0 0;
border-color:#0000;
border-radius:10px;
padding:5px}.gallery--redesigned.svelte-fuzshn .gallery__label:where(.svelte-fuzshn){
text-align:center}.empty-slot.svelte-1b4ql1v{
background:linear-gradient(140deg,#091623b8,#0f1e2ed9);
border:1px dashed #85a7c675;
border-radius:14px;
place-items:center;
height:100%;
min-height:220px;
padding:14px;
display:grid}.empty-slot--active.svelte-1b4ql1v{
border-color:#2ac7ffcc;
box-shadow:inset 0 0 0 1px #2ac7ff59}.empty-slot__card.svelte-1b4ql1v{
text-align:center;
gap:12px;
width:min(420px,100%);
display:grid}.empty-slot__icon.svelte-1b4ql1v{
font-size:30px}.empty-slot__title.svelte-1b4ql1v{
color:#d8e7f8;
letter-spacing:.04em;
margin:0;
font-size:13px}.empty-slot__row.svelte-1b4ql1v{
grid-template-columns:1fr auto;
gap:8px;
display:grid}input.svelte-1b4ql1v,button.svelte-1b4ql1v{
color:#e6eef8;
background:#ffffff14;
border:1px solid #fff3;
border-radius:10px;
padding:9px 10px}button.svelte-1b4ql1v{
cursor:pointer;
letter-spacing:.08em;
font-weight:600}.empty-slot__library.svelte-1b4ql1v{
justify-self:center}.workspace-window.svelte-1tm4fgg{
isolation:isolate;
background:#09111ce0;
border:1px solid #ffffff1f;
border-radius:14px;
grid-template-rows:auto minmax(0,1fr);
width:100%;
height:100%;
min-height:0;
display:grid;
position:relative;
overflow:hidden}.workspace-window__header.svelte-1tm4fgg{
background:#0c1826eb;
border-bottom:1px solid #ffffff14;
justify-content:center;
align-items:center;
gap:8px;
padding:8px 10px;
display:flex;
position:relative}.workspace-window__title.svelte-1tm4fgg{
color:#dce8f7d6;
letter-spacing:.1em;
text-align:center;
text-overflow:ellipsis;
white-space:nowrap;
min-width:0;
max-width:calc(100% - 72px);
font-size:11px;
overflow:hidden}.workspace-window__manifest-button.svelte-1tm4fgg{
cursor:pointer;
background:0 0;
border:1px solid #0000;
border-radius:7px;
place-items:center;
width:28px;
height:28px;
padding:5px;
display:grid;
position:absolute;
top:50%;
right:8px;
transform:translateY(-50%)}.workspace-window__manifest-button.svelte-1tm4fgg:hover{
background:#ffffff14;
border-color:#ffffff2e}.workspace-window__manifest-button.svelte-1tm4fgg:focus-visible{
outline-offset:1px;
outline:2px solid #a6cdffe6}.workspace-window__manifest-button.svelte-1tm4fgg img:where(.svelte-1tm4fgg){
object-fit:contain;
opacity:.86;
filter:invert();
width:17px;
height:17px;
display:block}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .workspace-window__manifest-button.svelte-1tm4fgg img:where(.svelte-1tm4fgg){
filter:none}.workspace-window__pagination.svelte-1tm4fgg{
z-index:4;
-webkit-backdrop-filter:blur(8px);
backdrop-filter:blur(8px);
color:#eef5fce6;
font-variant-numeric:tabular-nums;
background:#081019c7;
border:1px solid #ffffff29;
border-radius:999px;
align-items:center;
gap:10px;
max-width:calc(100% - 20px);
padding:6px 8px;
font-size:11px;
display:flex;
position:absolute;
bottom:12px;
left:50%;
transform:translate(-50%)}.workspace-window__pagination.svelte-1tm4fgg button:where(.svelte-1tm4fgg){
color:#dce8f5;
cursor:pointer;
background:#ffffff14;
border:0;
border-radius:999px;
place-items:center;
width:28px;
height:28px;
padding:0;
font-size:20px;
line-height:1;
display:grid}.workspace-window__pagination.svelte-1tm4fgg button:where(.svelte-1tm4fgg):disabled{
cursor:default;
opacity:.36}.workspace-window__page-input.svelte-1tm4fgg{
align-items:center;
gap:5px;
display:flex}.workspace-window__page-input.svelte-1tm4fgg input:where(.svelte-1tm4fgg){
box-sizing:border-box;
width:42px;
height:28px;
color:inherit;
font:inherit;
font-variant-numeric:tabular-nums;
text-align:center;
appearance:textfield;
background:#ffffff14;
border:1px solid #ffffff2e;
border-radius:7px;
outline:none;
padding:0 5px;
font-size:12px}.workspace-window__page-input.svelte-1tm4fgg input:where(.svelte-1tm4fgg)::-webkit-inner-spin-button{
appearance:none;
margin:0}.workspace-window__page-input.svelte-1tm4fgg input:where(.svelte-1tm4fgg)::-webkit-outer-spin-button{
appearance:none;
margin:0}.workspace-window__page-input.svelte-1tm4fgg input:where(.svelte-1tm4fgg):focus-visible{
border-color:#a6cdffd1;
box-shadow:0 0 0 2px #559be647}.workspace-window__visually-hidden.svelte-1tm4fgg{
clip:rect(0, 0, 0, 0);
white-space:nowrap;
border:0;
width:1px;
height:1px;
margin:-1px;
padding:0;
position:absolute;
overflow:hidden}.workspace-window__body.svelte-1tm4fgg{
grid-template-rows:minmax(0,1fr);
height:100%;
min-height:0;
display:grid;
position:relative;
overflow:hidden}.workspace-window__body.svelte-1tm4fgg .viewer{
height:100%;
box-shadow:none;
border:0;
border-radius:0;
grid-template-rows:minmax(0,1fr);
gap:0;
padding:0;
min-height:0!important;
max-height:none!important}.workspace-window__body.svelte-1tm4fgg .viewer__grid{
grid-template-columns:minmax(0,1fr);
row-gap:0;
height:100%;
min-height:0;
grid-template-rows:minmax(0,1fr)!important;
max-height:none!important}.workspace-window__body.svelte-1tm4fgg .stage,.workspace-window__body.svelte-1tm4fgg .stage__container,.workspace-window__body.svelte-1tm4fgg .stage__media{
height:100%;
min-height:0}.workspace-window__body.svelte-1tm4fgg .stage{
overflow:hidden}.workspace-window__body.svelte-1tm4fgg .stage__primary{
height:100%}.workspace-window__body.svelte-1tm4fgg .stage__viewer-frame{
background:0 0;
border:0;
border-radius:0;
padding:0}.workspace-window__body.svelte-1tm4fgg .stage__viewer-frame .stage__media{
border-radius:0}.workspace-window__body.svelte-1tm4fgg .viewer__top-row,.workspace-window__body.svelte-1tm4fgg .viewer__header,.workspace-window__body.svelte-1tm4fgg .viewer__control-rail,.workspace-window__body.svelte-1tm4fgg .viewer__mobile-overlay,.workspace-window__body.svelte-1tm4fgg .stage__toolbar,.workspace-window__body.svelte-1tm4fgg .stage__bottom{
display:none!important}.workspace-grid.svelte-1pf4boi{
width:100%;
height:100%;
min-height:0;
display:flex}.workspace-grid--row.svelte-1pf4boi{
flex-direction:column}.workspace-grid--column.svelte-1pf4boi{
flex-direction:row}.workspace-grid__pane.svelte-1pf4boi{
min-width:0;
min-height:0;
display:flex;
overflow:hidden}.workspace-splitter.svelte-1pf4boi{
--splitter-handle:#97a5b39e;
appearance:none;
touch-action:none;
z-index:4;
background:0 0;
border:0;
outline:none;
flex:0 0 10px;
width:auto;
min-width:0;
height:auto;
min-height:0;
padding:0;
position:relative}.workspace-splitter--column.svelte-1pf4boi{
cursor:col-resize;
background:linear-gradient(var(--splitter-handle), var(--splitter-handle)) center / 4px 30px no-repeat}.workspace-splitter--row.svelte-1pf4boi{
cursor:row-resize;
background:linear-gradient(var(--splitter-handle), var(--splitter-handle)) center / 30px 4px no-repeat}.workspace-splitter.svelte-1pf4boi::-webkit-slider-runnable-track{
background:0 0}.workspace-splitter.svelte-1pf4boi::-webkit-slider-thumb{
appearance:none;
opacity:0;
width:1px;
height:1px}.workspace-splitter.svelte-1pf4boi::-moz-range-track{
background:0 0}.workspace-splitter.svelte-1pf4boi::-moz-range-thumb{
opacity:0;
background:0 0;
border:0;
width:1px;
height:1px}.workspace-splitter.svelte-1pf4boi:hover,.workspace-splitter.svelte-1pf4boi:focus-visible{
--splitter-handle:#dce4ece6;
filter:drop-shadow(0 0 3px #dce4ec47)}.manifest-manager.svelte-wepstp{
box-sizing:border-box;
width:100%;
height:100%;
color:var(--viewer-text,#e4edf8);
background:radial-gradient(circle at 68% 20%, #204a6233, transparent 42%), color-mix(in srgb, var(--viewer-bg,#07111d) 97%, transparent);
-webkit-backdrop-filter:blur(20px);
backdrop-filter:blur(20px);
grid-template-rows:auto minmax(0,1fr);
display:grid;
overflow:hidden}.manifest-manager__header.svelte-wepstp{
justify-content:space-between;
align-items:center;
gap:20px;
padding:22px 30px 12px;
display:flex}h2.svelte-wepstp{
margin:0;
font-size:20px;
line-height:1.25}button.svelte-wepstp,input.svelte-wepstp,select.svelte-wepstp{
font:inherit}button.svelte-wepstp{
color:inherit}.icon-button.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff1f);
cursor:pointer;
background:#ffffff09;
border-radius:10px;
place-items:center;
width:36px;
height:36px;
padding:0;
display:grid}.manifest-manager__browse.svelte-wepstp{
grid-template-rows:auto minmax(0,1fr) auto;
min-height:0;
display:grid}.manifest-manager__controls.svelte-wepstp{
padding:0 30px 14px}.search-field.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff29);
height:42px;
color:var(--viewer-muted,#a6b2c0);
background:#0000002e;
border-radius:9px;
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:10px;
padding:0 13px;
display:grid}.search-field.svelte-wepstp input:where(.svelte-wepstp),.url-field.svelte-wepstp input:where(.svelte-wepstp){
width:100%;
min-width:0;
color:inherit;
background:0 0;
border:0;
outline:0;
padding:0}.search-field.svelte-wepstp input:where(.svelte-wepstp)::placeholder,.url-field.svelte-wepstp input:where(.svelte-wepstp)::placeholder{
color:var(--viewer-muted,#a6b2c0);
opacity:.64}.filter-row.svelte-wepstp{
align-items:center;
gap:10px;
margin-top:11px;
display:flex}.filter-tabs.svelte-wepstp{
gap:9px;
display:flex}.filter-tabs.svelte-wepstp button:where(.svelte-wepstp),.source-filter.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff24);
background:0 0;
border-radius:999px;
min-height:34px;
padding:0 17px;
font-size:12px;
position:relative}.filter-tabs.svelte-wepstp button:where(.svelte-wepstp){
cursor:pointer}.filter-tabs.svelte-wepstp button.active:where(.svelte-wepstp){
color:#fff;
background:#117aa9;
border-color:#0000}.source-filter.svelte-wepstp{
grid-template-columns:minmax(0,1fr) auto;
align-items:center;
min-width:128px;
padding-right:12px;
display:grid}.source-filter.svelte-wepstp select:where(.svelte-wepstp){
appearance:none;
min-width:0;
color:inherit;
cursor:pointer;
background:0 0;
border:0;
outline:0;
padding:0 24px 0 0}.source-filter.svelte-wepstp svg{
pointer-events:none;
position:absolute;
right:11px}.manifest-manager__results.svelte-wepstp{
overscroll-behavior:contain;
scrollbar-width:thin;
min-height:0;
padding:0 30px 16px;
overflow-y:auto}.manifest-manager__hint.svelte-wepstp{
color:var(--viewer-muted,#a6b2c0);
align-items:center;
gap:16px;
padding:15px 8px 18px;
font-size:13px;
line-height:1.5;
display:none}.manifest-manager__hint.svelte-wepstp svg{
color:#27b9f0;
flex:none}.manifest-manager__hint.svelte-wepstp p:where(.svelte-wepstp){
margin:0}.manifest-manager__hint.svelte-wepstp button:where(.svelte-wepstp){
color:#56ccf5;
cursor:pointer;
background:0 0;
border:0;
padding:0}.manifest-grid.svelte-wepstp{
grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
gap:12px;
display:grid}.manifest-card.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff1c);
background:#ffffff08;
border-radius:12px;
min-width:0;
min-height:240px;
position:relative;
overflow:hidden}.manifest-card.svelte-wepstp:hover{
background:#ffffff0e;
border-color:#56ccf56b}.manifest-card__load.svelte-wepstp{
text-align:left;
cursor:pointer;
background:0 0;
border:0;
width:100%;
height:100%;
padding:12px;
display:block}.manifest-card__thumbnail.svelte-wepstp{
background:#00000057;
border-radius:7px;
place-items:center;
width:100%;
height:122px;
display:grid;
overflow:hidden}.manifest-card__thumbnail.svelte-wepstp img:where(.svelte-wepstp){
object-fit:cover;
width:100%;
height:100%}.manifest-card__thumbnail.svelte-wepstp .manifest-card__iiif:where(.svelte-wepstp){
object-fit:contain;
filter:invert();
opacity:.64;
width:38px;
height:38px}.manifest-card__details.svelte-wepstp{
min-width:0;
padding-top:12px;
display:block}.manifest-card.svelte-wepstp strong:where(.svelte-wepstp),.manifest-card__source.svelte-wepstp,.manifest-card__count.svelte-wepstp{
min-width:0;
display:block}.manifest-card.svelte-wepstp strong:where(.svelte-wepstp){
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
min-height:38px;
font-size:14px;
line-height:1.35;
display:-webkit-box;
overflow:hidden}.manifest-card__source.svelte-wepstp{
color:var(--viewer-muted,#a6b2c0);
text-overflow:ellipsis;
white-space:nowrap;
margin-top:6px;
font-size:12px;
overflow:hidden}.manifest-card__count.svelte-wepstp{
color:var(--viewer-muted,#a6b2c0);
align-items:center;
gap:6px;
margin-top:8px;
font-size:12px;
display:flex}.manifest-card__favourite.svelte-wepstp,.manifest-card__more.svelte-wepstp{
z-index:2;
cursor:pointer;
background:#07111d94;
border:0;
place-items:center;
width:34px;
height:34px;
padding:0;
display:grid;
position:absolute}.manifest-card__favourite.svelte-wepstp{
border-radius:8px;
top:12px;
right:12px}.manifest-card__favourite.active.svelte-wepstp{
color:#55ccf5}.manifest-card__more.svelte-wepstp{
border-radius:8px;
bottom:7px;
right:8px}.manifest-manager__empty.svelte-wepstp{
min-height:180px;
color:var(--viewer-muted,#a6b2c0);
text-align:center;
align-content:center;
place-items:center;
display:grid}.manifest-manager__empty.svelte-wepstp p:where(.svelte-wepstp){
margin:10px 0 0}.manifest-manager__footer.svelte-wepstp{
padding:12px 30px max(16px, env(safe-area-inset-bottom));
border-top:1px solid var(--viewer-panel-border,#ffffff14);
background:#07111dc2;
justify-content:center;
display:flex}.primary-button.svelte-wepstp,.secondary-button.svelte-wepstp{
cursor:pointer;
border-radius:9px;
min-height:42px;
padding:0 22px;
font-weight:600}.primary-button.svelte-wepstp{
color:#fff;
background:linear-gradient(100deg,#209dcc,#0874a4);
border:1px solid #168fc1}.secondary-button.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff29);
background:#ffffff0a}.add-button.svelte-wepstp{
justify-content:center;
align-items:center;
gap:10px;
width:min(250px,100%);
display:flex}.manifest-manager__add-form.svelte-wepstp{
grid-template-columns:minmax(0,1fr) auto;
align-content:start;
gap:12px 16px;
padding:0 30px 24px;
display:grid}.manifest-manager__add-form.svelte-wepstp>p:where(.svelte-wepstp),.manifest-manager__error.svelte-wepstp,.target-field.svelte-wepstp{
grid-column:1/-1}.manifest-manager__add-form.svelte-wepstp>p:where(.svelte-wepstp){
color:var(--viewer-muted,#a6b2c0);
margin:0;
font-size:13px}.url-field.svelte-wepstp{
border:1px solid var(--viewer-panel-border,#ffffff29);
min-height:42px;
color:var(--viewer-muted,#a6b2c0);
background:#0000002e;
border-radius:9px;
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:10px;
padding:0 12px;
display:grid}.target-field.svelte-wepstp{
color:var(--viewer-muted,#a6b2c0);
gap:6px;
font-size:12px;
display:grid}.target-field.svelte-wepstp select:where(.svelte-wepstp){
border:1px solid var(--viewer-panel-border,#ffffff29);
min-height:40px;
color:inherit;
background:#0000002e;
border-radius:9px;
padding:0 12px}.manifest-manager__error.svelte-wepstp{
color:#ff9292;
margin:0;
font-size:12px}.manifest-manager__add-actions.svelte-wepstp{
grid-column:1/-1;
justify-content:space-between;
align-items:center;
gap:16px;
margin-top:2px;
display:flex}.manifest-manager__add-actions.svelte-wepstp a:where(.svelte-wepstp){
color:#56ccf5;
align-items:center;
gap:5px;
font-size:12px;
text-decoration:none;
display:flex}.manifest-manager__load-buttons.svelte-wepstp{
gap:10px;
display:flex}.load-button.svelte-wepstp{
min-width:210px}button.svelte-wepstp:disabled{
cursor:default;
opacity:.48}button.svelte-wepstp:focus-visible,input.svelte-wepstp:focus-visible,select.svelte-wepstp:focus-visible,a.svelte-wepstp:focus-visible{
outline:2px solid var(--viewer-accent-2,#2ac7ff);
outline-offset:2px}.sr-only.svelte-wepstp{
clip:rect(0, 0, 0, 0);
white-space:nowrap;
border:0;
width:1px;
height:1px;
margin:-1px;
padding:0;
position:absolute;
overflow:hidden}.viewer:is([data-theme=light],[data-theme=sepia],[data-theme=ringo]) .manifest-card__thumbnail.svelte-wepstp .manifest-card__iiif:where(.svelte-wepstp),.workspace[data-theme=light] .manifest-card__thumbnail.svelte-wepstp .manifest-card__iiif:where(.svelte-wepstp){
filter:none}@container mango-viewer (width<=700px){
.manifest-manager__header.svelte-wepstp{
padding:17px 20px 11px}h2.svelte-wepstp{
font-size:18px}.manifest-manager__controls.svelte-wepstp{
padding:0 20px 12px}.filter-row.svelte-wepstp{
scrollbar-width:none;
overflow-x:auto}.filter-tabs.svelte-wepstp{
flex:none}.filter-tabs.svelte-wepstp button:where(.svelte-wepstp){
padding:0 15px}.source-filter.svelte-wepstp{
display:none}.manifest-manager__results.svelte-wepstp{
padding:0 16px 12px}.manifest-manager__hint.svelte-wepstp{
display:flex}.manifest-grid.svelte-wepstp{
grid-template-columns:minmax(0,1fr);
gap:10px;
display:grid}.manifest-card.svelte-wepstp{
min-height:108px}.manifest-card__load.svelte-wepstp{
grid-template-columns:94px minmax(0,1fr);
align-items:center;
gap:14px;
padding:10px;
display:grid}.manifest-card__thumbnail.svelte-wepstp{
width:94px;
height:88px}.manifest-card__details.svelte-wepstp{
padding:0 34px 0 0}.manifest-card.svelte-wepstp strong:where(.svelte-wepstp){
min-height:0}.manifest-card__favourite.svelte-wepstp{
background:0 0;
top:6px;
right:6px}.manifest-card__more.svelte-wepstp{
background:0 0;
bottom:4px;
right:5px}.manifest-manager__footer.svelte-wepstp{
padding:12px 16px max(14px, env(safe-area-inset-bottom))}.add-button.svelte-wepstp{
width:100%}.manifest-manager--add.svelte-wepstp{
align-content:start}.manifest-manager__add-form.svelte-wepstp{
grid-template-columns:minmax(0,1fr);
padding:0 18px 18px;
display:grid}.manifest-manager__add-actions.svelte-wepstp{
gap:14px;
display:grid}.manifest-manager__load-buttons.svelte-wepstp{
display:grid}.load-button.svelte-wepstp,.secondary-button.svelte-wepstp{
width:100%;
min-width:0}}@media (width<=700px){
.manifest-manager__header.svelte-wepstp{
padding:17px 20px 11px}.manifest-manager__controls.svelte-wepstp{
padding:0 20px 12px}.source-filter.svelte-wepstp{
display:none}.manifest-manager__hint.svelte-wepstp{
display:flex}.manifest-grid.svelte-wepstp{
grid-template-columns:minmax(0,1fr)}}.stage-gallery-view.svelte-zw2q18{
background:var(--viewer-stage,#111720);
box-sizing:border-box;
border:1px solid #ffffff0f;
border-radius:18px;
width:100%;
min-width:0;
height:100%;
padding:24px;
overflow-y:auto}.stage-gallery-view__grid.svelte-zw2q18{
grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
gap:24px;
width:100%;
display:grid}.stage-gallery-view__card.svelte-zw2q18{
-webkit-backdrop-filter:blur(10px);
cursor:pointer;
box-sizing:border-box;
background:#ffffff08;
border:1px solid #ffffff14;
border-radius:16px;
outline:none;
flex-direction:column;
align-items:center;
width:100%;
padding:12px;
transition:border-color .22s;
display:flex}.stage-gallery-view__card.svelte-zw2q18:hover{
border-color:var(--viewer-accent-2,#2ac7ff)}.stage-gallery-view__card.svelte-zw2q18:focus-visible{
outline:2px solid var(--viewer-accent-2,#2ac7ff);
outline-offset:2px}.stage-gallery-view__card--active.svelte-zw2q18{
border-color:var(--viewer-accent-2,#2ac7ff);
box-shadow:0 0 0 2px var(--viewer-accent-2,#2ac7ff33);
background:#2ac7ff0f}.stage-gallery-view__thumb-wrapper.svelte-zw2q18{
aspect-ratio:3/4;
background:#ffffff0a;
border:1px solid #ffffff0d;
border-radius:10px;
place-items:center;
width:100%;
display:grid;
position:relative;
overflow:hidden}.stage-gallery-view__img.svelte-zw2q18{
object-fit:contain;
width:100%;
height:100%}.stage-gallery-view__placeholder.svelte-zw2q18{
width:100%;
height:100%;
color:var(--viewer-muted,#9aa6b2);
place-items:center;
gap:8px;
display:grid}.stage-gallery-view__placeholder.svelte-zw2q18 svg{
opacity:.75;
width:32px;
height:32px}.stage-gallery-view__index.svelte-zw2q18{
font-size:24px;
font-weight:700}.stage-gallery-view__label.svelte-zw2q18{
color:var(--viewer-text,#e8edf4);
text-align:center;
white-space:nowrap;
text-overflow:ellipsis;
width:100%;
margin-top:12px;
font-size:13px;
font-weight:500;
overflow:hidden}.viewer__top-row.svelte-zw2q18{
align-items:flex-start;
gap:12px;
min-width:0;
display:flex}.viewer__top-title.svelte-zw2q18{
flex:auto;
align-items:center;
gap:10px;
min-width:0;
display:flex}.viewer__title-divider.svelte-zw2q18{
color:var(--viewer-muted,#ffffff59);
-webkit-user-select:none;
user-select:none;
flex-shrink:0;
font-size:14px;
font-weight:300;
line-height:1}.viewer__top-actions.svelte-zw2q18{
flex:none;
justify-content:flex-end;
align-items:center;
gap:10px;
display:flex}.viewer__export-btn.svelte-zw2q18{
color:#fff;
cursor:pointer;
background:#ff6b35;
border:none;
border-radius:8px;
padding:8px 16px;
font-family:inherit;
font-weight:600;
transition:background .2s,transform .1s;
box-shadow:0 4px 12px #ff6b3540}.viewer__export-btn.svelte-zw2q18:hover{
background:#ff8552;
transform:translateY(-1px)}.viewer__export-btn.svelte-zw2q18:active{
transform:translateY(0)}.viewer__fullscreen-btn.svelte-zw2q18{
border:1px solid var(--viewer-panel-border);
background:var(--viewer-panel);
color:var(--viewer-text);
cursor:pointer;
z-index:10;
border-radius:10px;
justify-content:center;
align-items:center;
gap:8px;
width:34px;
height:34px;
font-size:16px;
line-height:1;
display:inline-flex}.viewer__fullscreen-btn--labelled.svelte-zw2q18{
background:0 0;
border-color:#0000;
width:auto;
padding-inline:10px;
font-size:13px}.viewer__fullscreen-btn.svelte-zw2q18 svg{
width:18px;
height:18px}.viewer__expand-sidebar.svelte-zw2q18{
z-index:8;
border:1px solid var(--viewer-panel-border);
background:var(--viewer-panel-strong);
width:38px;
height:58px;
color:var(--viewer-text);
font:inherit;
cursor:pointer;
border-left:0;
border-radius:0 12px 12px 0;
justify-content:center;
align-items:center;
padding:0;
transition:width .16s,background-color .16s,border-color .16s;
display:inline-flex;
position:absolute;
top:50%;
left:-1px;
transform:translateY(-50%);
box-shadow:6px 0 18px #0000003d}.viewer__expand-sidebar.svelte-zw2q18:hover{
border-color:var(--viewer-accent);
background:var(--viewer-panel);
width:42px}.viewer__expand-sidebar.svelte-zw2q18:focus-visible{
outline:2px solid var(--viewer-accent);
outline-offset:2px}.viewer__expand-sidebar.svelte-zw2q18 svg{
width:20px;
height:20px}.viewer.svelte-zw2q18{
--viewer-bg:#0f141b;
--viewer-surface:#151d26;
--viewer-panel:#121922;
--viewer-panel-strong:#1b242e;
--viewer-panel-border:#ffffff14;
--viewer-text:#e8edf4;
--viewer-muted:#9aa6b2;
--viewer-accent:#ff4fa2;
--viewer-accent-2:#2ac7ff;
--viewer-accent-tools:#a3e635;
--viewer-stage:#111720;
--viewer-stage-glow:#2ac7ff1f;
--viewer-stage-tail:#0b0f14;
--viewer-dock-button-bg:#0f141bf2;
--viewer-dock-button-border:#ffffff1f;
--viewer-dock-tooltip-bg:#0a0e13f2;
--viewer-dock-active-border:#2ac7ff94;
--viewer-dock-active-ring:#2ac7ff38;
--viewer-dock-active-chip-text:#06141d;
--viewer-dock-button-shadow:0 12px 24px #00000059;
--viewer-dock-active-shadow-base:0 12px 24px #00000059;
--viewer-gallery-bg:#0a0e13d9;
--viewer-gallery-item-bg:#121922d9;
--viewer-gallery-item-border:#ffffff14;
--viewer-gallery-thumb-bg:#ffffff0f;
--viewer-gallery-close-bg:#ffffff1a;
--viewer-gallery-active-ring:#2ac7ff33;
--viewer-close-button-size:28px;
--viewer-close-button-radius:10px;
--viewer-close-button-border:#ffffff2e;
--viewer-close-button-bg:#ffffff1a;
--viewer-close-button-hover-bg:#ffffff29;
--viewer-close-button-hover-border:#ffffff57;
--viewer-close-button-color:var(--viewer-text);
--viewer-close-button-glyph-size:15px;
--viewer-close-button-focus-ring:#2ac7ff8c;
--viewer-stage-bottom-bg:#0c1016b8;
--viewer-toolbar-separator:#ffffff24;
--viewer-toolbar-group-border:#ffffff1a;
--viewer-toolbar-group-bg:transparent;
--viewer-toolbar-button-bg:#ffffff08;
--viewer-toolbar-button-hover-bg:#ffffff14;
--viewer-toolbar-value-text:#e6ecf6f5;
--viewer-toolbar-value-bg:transparent;
--viewer-search-input-bg:#0a0e13cc;
--viewer-search-clear-bg:#ffffff1a;
--viewer-search-item-bg:#ffffff0f;
--viewer-search-item-hover-bg:#ffffff1a;
--viewer-search-focus:#2ac7ffa6;
--viewer-control-rail-bg:linear-gradient(180deg, #141c25eb 0%, #0e141deb 100%);
--story-shell-bg:linear-gradient(180deg, #10161e 0%, #0b1118 100%);
--story-line:#ffffff24;
--story-text:#edf5ff;
--story-muted:#d8dee9;
--story-accent:#9a57ff;
--story-accent-2:#4bc6ff;
--story-accent-text:#be8dff;
--story-accent-text-hover:#d8bcff;
--story-control-bg:#08112099;
--story-control-border:#ffffff3d;
--story-control-hover-bg:#ffffff1f;
--story-track-bg:#fff3;
--story-track-border:#ffffff26;
--story-active-ring:#40abf5d6;
--story-active-halo:#e3f0ff6b;
--story-error:#ffb3c1;
--story-note-bg:#ffffffeb;
--story-note-text:#2b2520;
--story-label-bg:#14100cd1;
--story-label-text:#fff;
--viewer-danger:#ffb8b8;
--viewer-success:#72cea4;
--viewer-warning:#e8b85f;
--story-builder-accent:#b4551f;
--story-builder-accent-hover:#a8480f;
--viewer-well-bg:#050a1059;
--viewer-focus-ring:#2ac7ffb3;
box-sizing:border-box;
height:100%;
min-height:0;
max-height:none;
color:var(--viewer-text);
font-variant:normal;
letter-spacing:normal;
word-spacing:normal;
word-break:normal;
overflow-wrap:normal;
white-space:normal;
text-align:left;
text-indent:0;
text-transform:none;
direction:var(--mango-viewer-direction,ltr);
box-shadow:var(--viewer-frame-shadow,none);
background:radial-gradient(120% 120% at 10% 0,#1d2632 0%,#111720 55%,#0b0f14 100%);
border:1px solid #1c2530;
border-radius:24px;
grid-template-rows:auto 1fr;
gap:16px;
padding:20px;
font-family:sans-serif;
font-size:16px;
font-style:normal;
font-weight:400;
line-height:normal;
display:grid;
position:relative;
overflow:hidden;
container:mango-viewer/size}.viewer.svelte-zw2q18:fullscreen{
overscroll-behavior:none;
touch-action:auto;
border-radius:0;
width:100vw;
height:100vh;
min-height:0;
max-height:100vh}.viewer.viewer--story-builder.svelte-zw2q18{
gap:12px;
min-height:0;
padding:14px}.viewer--story-builder.svelte-zw2q18 .viewer__top-row:where(.svelte-zw2q18){
align-items:center}.viewer--story-builder.svelte-zw2q18 .viewer__top-title:where(.svelte-zw2q18){
display:none}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18),.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18) .plugin-slot{
flex:auto}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18) .plugin-panel__title{
display:none}.viewer.viewer--story-viewer.svelte-zw2q18{
--story-shell-radius:18px;
border-radius:var(--story-shell-radius);
background:var(--viewer-surface);
border:0;
grid-template-rows:auto minmax(0,1fr);
gap:0;
padding:0}.viewer--story-viewer.svelte-zw2q18 .viewer__top-row:where(.svelte-zw2q18){
z-index:12;
box-sizing:border-box;
background:var(--viewer-surface);
border-bottom:1px solid var(--viewer-panel-border);
align-items:center;
min-height:56px;
padding:10px 12px;
position:relative}.viewer--story-viewer.svelte-zw2q18 .viewer__top-title:where(.svelte-zw2q18){
color:var(--viewer-text);
white-space:nowrap;
align-items:center;
gap:10px;
font-size:18px;
font-weight:700;
line-height:1.2;
display:flex;
overflow:hidden}.viewer--story-viewer.svelte-zw2q18 .viewer__top-title:where(.svelte-zw2q18) span:where(.svelte-zw2q18):last-child{
text-overflow:ellipsis;
overflow:hidden}.viewer--story-viewer.svelte-zw2q18 .viewer__fullscreen-btn:where(.svelte-zw2q18){
width:auto;
height:36px}.viewer--story-viewer.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18){
height:auto;
min-height:0}.viewer.svelte-zw2q18:-webkit-full-screen{
overscroll-behavior:none;
touch-action:auto;
border-radius:0;
width:100vw;
height:100vh;
min-height:0;
max-height:100vh}.viewer.viewer--fullscreen-fallback.svelte-zw2q18{
z-index:2147483647;
overscroll-behavior:none;
touch-action:auto;
border:0;
border-radius:0;
width:100vw;
height:100dvh;
min-height:0;
max-height:100dvh;
position:fixed;
inset:0}:-webkit-any(.viewer--story-viewer.svelte-zw2q18:fullscreen,.viewer--story-viewer.svelte-zw2q18:-webkit-full-screen,.viewer--story-viewer.viewer--fullscreen-fallback.svelte-zw2q18){
--story-shell-radius:0}:is(.viewer--story-viewer.svelte-zw2q18:fullscreen,.viewer--story-viewer.svelte-zw2q18:fullscreen,.viewer--story-viewer.viewer--fullscreen-fallback.svelte-zw2q18){
--story-shell-radius:0}.viewer.svelte-zw2q18:fullscreen .viewer__grid:where(.svelte-zw2q18){
max-height:100%}.viewer.svelte-zw2q18:fullscreen .viewer__grid:where(.svelte-zw2q18){
max-height:100%}.viewer.viewer--fullscreen-fallback.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18){
max-height:100%}.viewer.svelte-zw2q18:fullscreen::backdrop{
background:#0b0f14}.viewer[data-theme=light].svelte-zw2q18{
--viewer-bg:#f3f5f8;
--viewer-surface:#f7f8fb;
--viewer-panel:#e9edf3;
--viewer-panel-strong:#dde4ed;
--viewer-panel-border:#2230411f;
--viewer-text:#223041;
--viewer-muted:#586576;
--viewer-accent:#53719c;
--viewer-accent-2:#357f99;
--viewer-stage:#f3f5f8;
--viewer-stage-glow:#6caec729;
--viewer-stage-tail:#fff;
--viewer-dock-button-bg:#f8fbfff5;
--viewer-dock-button-border:#22304133;
--viewer-dock-tooltip-bg:#f1f6fcf7;
--viewer-dock-active-border:#159fcea6;
--viewer-dock-active-ring:#2ac7ff2e;
--viewer-dock-active-chip-text:#16435a;
--viewer-dock-button-shadow:0 10px 20px #2230412e;
--viewer-dock-active-shadow-base:0 10px 20px #22304133;
--viewer-gallery-bg:#f2f6fceb;
--viewer-gallery-item-bg:#ffffffeb;
--viewer-gallery-item-border:#22304124;
--viewer-gallery-thumb-bg:#e0e8f1b8;
--viewer-gallery-close-bg:#ffffffeb;
--viewer-gallery-active-ring:#6caec742;
--viewer-close-button-border:#22304133;
--viewer-close-button-bg:#ffffffeb;
--viewer-close-button-hover-bg:#e9f0f8f5;
--viewer-close-button-hover-border:#2230414d;
--viewer-close-button-color:#223041;
--viewer-close-button-focus-ring:var(--viewer-focus-ring);
--viewer-stage-bottom-bg:#f1f5fbdb;
--viewer-toolbar-separator:#22304129;
--viewer-toolbar-group-border:#22304129;
--viewer-toolbar-group-bg:transparent;
--viewer-toolbar-button-bg:#ffffffd6;
--viewer-toolbar-button-hover-bg:#7c96be33;
--viewer-toolbar-value-text:#223041;
--viewer-toolbar-value-bg:transparent;
--viewer-search-input-bg:#ffffffeb;
--viewer-search-clear-bg:#7c96be33;
--viewer-search-item-bg:#ffffffc7;
--viewer-search-item-hover-bg:#7c96be38;
--viewer-search-focus:var(--viewer-focus-ring);
--viewer-control-rail-bg:linear-gradient(180deg, #f1f5fbf2 0%, #e5ecf5f2 100%);
--story-shell-bg:linear-gradient(180deg, #fff 0%, #eaf0f8 100%);
--story-line:#22304124;
--story-text:#1d2a3a;
--story-muted:#56677d;
--story-accent:#6d3bd4;
--story-accent-2:#1f8fc4;
--story-accent-text:#5a2fbd;
--story-accent-text-hover:#43219a;
--story-control-bg:#ffffffe0;
--story-control-border:#22304138;
--story-control-hover-bg:#6d3bd41f;
--story-track-bg:#22304124;
--story-track-border:#2230411f;
--story-active-ring:#1f8fc4b8;
--story-active-halo:#2230413d;
--story-error:#b3243c;
--story-note-bg:#fffffff2;
--story-note-text:#1d2a3a;
--story-label-bg:#1d2a3adb;
--story-label-text:#fff;
--viewer-danger:#b3243c;
--viewer-success:#1d7a52;
--viewer-warning:#8a5a00;
--story-builder-accent:#b4551f;
--story-builder-accent-hover:#93430f;
--viewer-well-bg:#22304112;
--viewer-focus-ring:#0b6fa4;
box-shadow:var(--viewer-frame-shadow,none);
background:radial-gradient(135% 135% at 10% 0,#e6f1ff 0%,#f5faff 45%,#fff 100%);
border-color:#dbe2eb}.viewer[data-theme=sepia].svelte-zw2q18{
--viewer-bg:#eee4d2;
--viewer-surface:#f7f0e3;
--viewer-panel:#e8dcc6;
--viewer-panel-strong:#dac9aa;
--viewer-panel-border:#4c3a2329;
--viewer-text:#3d3023;
--viewer-muted:#67563f;
--viewer-accent:#a86f46;
--viewer-accent-2:#2f858b;
--viewer-accent-tools:#66864a;
--viewer-stage:#f4ecde;
--viewer-stage-glow:#2f858b21;
--viewer-stage-tail:#fffaf0;
--viewer-dock-button-bg:#fffaf0f0;
--viewer-dock-button-border:#4c3a2333;
--viewer-dock-tooltip-bg:#faf3e6f7;
--viewer-dock-active-border:#2f858bad;
--viewer-dock-active-ring:#2f858b33;
--viewer-dock-active-chip-text:#173f42;
--viewer-dock-button-shadow:0 10px 20px #4c3a2329;
--viewer-dock-active-shadow-base:0 10px 20px #4c3a232e;
--viewer-gallery-bg:#f4ecdef0;
--viewer-gallery-item-bg:#fffaf0f0;
--viewer-gallery-item-border:#4c3a2326;
--viewer-gallery-thumb-bg:#e0d2b9b8;
--viewer-gallery-close-bg:#fffaf0f0;
--viewer-gallery-active-ring:#2f858b3d;
--viewer-close-button-border:#4c3a2333;
--viewer-close-button-bg:#fffaf0f0;
--viewer-close-button-hover-bg:#efe3cff5;
--viewer-close-button-hover-border:#4c3a2352;
--viewer-close-button-color:#3d3023;
--viewer-close-button-focus-ring:var(--viewer-focus-ring);
--viewer-stage-bottom-bg:#f1e7d4e0;
--viewer-toolbar-separator:#4c3a2329;
--viewer-toolbar-group-border:#4c3a2329;
--viewer-toolbar-group-bg:transparent;
--viewer-toolbar-button-bg:#fffaf0db;
--viewer-toolbar-button-hover-bg:#2f858b26;
--viewer-toolbar-value-text:#3d3023;
--viewer-toolbar-value-bg:transparent;
--viewer-search-input-bg:#fffaf0f0;
--viewer-search-clear-bg:#2f858b24;
--viewer-search-item-bg:#fffaf0c7;
--viewer-search-item-hover-bg:#2f858b29;
--viewer-search-focus:var(--viewer-focus-ring);
--viewer-control-rail-bg:linear-gradient(180deg, #f1e7d4f5 0%, #e5d6bcf5 100%);
--story-shell-bg:linear-gradient(180deg, #f9f3e7 0%, #e8dbc2 100%);
--story-line:#4c3a232e;
--story-text:#3d3023;
--story-muted:#6b5a44;
--story-accent:#a8562a;
--story-accent-2:#2f858b;
--story-accent-text:#8d451f;
--story-accent-text-hover:#6d3415;
--story-control-bg:#fffaf0e6;
--story-control-border:#4c3a233d;
--story-control-hover-bg:#a8562a24;
--story-track-bg:#4c3a2329;
--story-track-border:#4c3a2324;
--story-active-ring:#2f858bbd;
--story-active-halo:#4c3a2342;
--story-error:#a32b26;
--story-note-bg:#fffaf0f2;
--story-note-text:#3d3023;
--story-label-bg:#3d3023db;
--story-label-text:#fffaf0;
--viewer-danger:#a32b26;
--viewer-success:#2f6b4a;
--viewer-warning:#7a5410;
--story-builder-accent:#a8562a;
--story-builder-accent-hover:#8a4319;
--viewer-well-bg:#4c3a2317;
--viewer-focus-ring:#1b6b70;
box-shadow:var(--viewer-frame-shadow,none);
background:radial-gradient(135% 135% at 10% 0,#f5ead7 0%,#eee4d2 48%,#e5d7bf 100%);
border-color:#d8c7aa}.viewer[data-theme=midnight].svelte-zw2q18{
--viewer-bg:#07111f;
--viewer-surface:#0a1728;
--viewer-panel:#0c192a;
--viewer-panel-strong:#13263d;
--viewer-panel-border:#7eb4eb26;
--viewer-text:#edf6ff;
--viewer-muted:#91a7bf;
--viewer-accent:#a78bfa;
--viewer-accent-2:#38bdf8;
--viewer-accent-tools:#5eead4;
--viewer-stage:#050d18;
--viewer-stage-glow:#38bdf826;
--viewer-stage-tail:#020711;
--viewer-dock-button-bg:#07111ff5;
--viewer-dock-tooltip-bg:#030a14f7;
--viewer-control-rail-bg:linear-gradient(180deg, #0c1d30f5 0%, #050f1cf5 100%);
--story-shell-bg:linear-gradient(180deg, #0b1b30 0%, #040c18 100%);
--story-line:#7eb4eb2e;
--story-text:#edf6ff;
--story-muted:#a8bdd6;
--story-accent:#a78bfa;
--story-accent-2:#38bdf8;
--story-accent-text:#c4b1ff;
--story-accent-text-hover:#ddd0ff;
--story-control-bg:#050f1cb8;
--story-control-border:#7eb4eb47;
--story-control-hover-bg:#7eb4eb24;
--story-track-bg:#7eb4eb33;
--story-track-border:#7eb4eb29;
--story-active-ring:#38bdf8d1;
--story-active-halo:#c7e2ff66;
--story-error:#ff9db0;
--viewer-danger:#ff9db0;
--viewer-success:#5eead4;
--viewer-warning:#fbbf24;
--story-builder-accent:#c2410c;
--story-builder-accent-hover:#d4550f;
--viewer-well-bg:#03081073;
box-shadow:var(--viewer-frame-shadow,none);
background:radial-gradient(130% 130% at 8% 0,#142a46 0%,#07111f 50%,#020711 100%);
border-color:#142b46}.viewer[data-theme=ringo].svelte-zw2q18{
--viewer-bg:#ffd60a;
--viewer-surface:#ffe987;
--viewer-panel:#ffe15c;
--viewer-panel-strong:#ffcf1f;
--viewer-panel-border:#4a30003d;
--viewer-text:#2e2000;
--viewer-muted:#6d5200;
--viewer-accent:#a8232b;
--viewer-accent-2:#0072c6;
--viewer-accent-tools:#00875a;
--viewer-stage:#fff6c2;
--viewer-stage-glow:#a8232b1a;
--viewer-stage-tail:#fffdf0;
--viewer-dock-button-bg:#fffad6f5;
--viewer-dock-button-border:#4a30003d;
--viewer-dock-tooltip-bg:#fff7c7f7;
--viewer-dock-active-border:#a8232bb3;
--viewer-dock-active-ring:#a8232b33;
--viewer-dock-active-chip-text:#5a0723;
--viewer-dock-button-shadow:0 10px 20px #4a300038;
--viewer-dock-active-shadow-base:0 10px 20px #4a30003d;
--viewer-gallery-bg:#fff3b0f0;
--viewer-gallery-item-bg:#fffce2f0;
--viewer-gallery-item-border:#4a30002e;
--viewer-gallery-thumb-bg:#f0d678b8;
--viewer-gallery-close-bg:#fffce2f0;
--viewer-gallery-active-ring:#0072c642;
--viewer-close-button-border:#4a30003d;
--viewer-close-button-bg:#fffce2f0;
--viewer-close-button-hover-bg:#ffeea0f5;
--viewer-close-button-hover-border:#4a30005c;
--viewer-close-button-color:#2e2000;
--viewer-close-button-focus-ring:var(--viewer-focus-ring);
--viewer-stage-bottom-bg:#fff4b8e0;
--viewer-toolbar-separator:#4a300033;
--viewer-toolbar-group-border:#4a300033;
--viewer-toolbar-group-bg:transparent;
--viewer-toolbar-button-bg:#9c2b22f0;
--viewer-toolbar-button-hover-bg:#7c2019fa;
--viewer-toolbar-button-color:#fff4b8;
--viewer-toolbar-value-text:#2e2000;
--viewer-nav-button-bg:#9c2b22f0;
--viewer-nav-button-hover-bg:#7c2019fa;
--viewer-nav-button-hover-border:#4a300066;
--viewer-nav-button-border:#4a300047;
--viewer-nav-button-color:#fff4b8;
--viewer-nav-button-active-bg:#7c2019fa;
--viewer-nav-button-active-border:#fff4b8;
--viewer-toolbar-value-bg:transparent;
--viewer-search-input-bg:#fffce2f0;
--viewer-search-clear-bg:#a8232b29;
--viewer-search-item-bg:#fffce2c7;
--viewer-search-item-hover-bg:#a8232b2e;
--viewer-search-focus:var(--viewer-focus-ring);
--viewer-control-rail-bg:#ffe15cf5;
--story-shell-bg:#ffe15c;
--story-line:#4a300038;
--story-text:#2e2000;
--story-muted:#6d5200;
--story-accent:#a8232b;
--story-accent-2:#0072c6;
--story-accent-text:#8c1f1a;
--story-accent-text-hover:#701712;
--story-control-bg:#fff9d6e6;
--story-control-border:#4a300047;
--story-control-hover-bg:#a8232b24;
--story-track-bg:#4a30002e;
--story-track-border:#4a300024;
--story-active-ring:#0072c6cc;
--story-active-halo:#4a300042;
--story-error:#a3123c;
--story-note-bg:#fffadbf2;
--story-note-text:#2e2000;
--story-label-bg:#2e2000db;
--story-label-text:#fff4b8;
--viewer-danger:#a3123c;
--viewer-success:#00694a;
--viewer-warning:#7a4b00;
--story-builder-accent:#9c2b22;
--story-builder-accent-hover:#8c1f1a;
--viewer-well-bg:#4a30001a;
--viewer-focus-ring:#0056a3;
box-shadow:var(--viewer-frame-shadow,none);
background:var(--viewer-bg);
border-color:#e0a800}.viewer__grid.svelte-zw2q18{
grid-template-columns:minmax(0,1fr);
align-items:stretch;
gap:18px;
height:100%;
min-height:0;
max-height:100%;
transition:grid-template-columns .24s cubic-bezier(.2,.8,.2,1),column-gap .24s;
display:grid;
position:relative}.viewer__manifest-overlay.svelte-zw2q18{
z-index:20;
overscroll-behavior:contain;
min-width:0;
min-height:0;
position:absolute;
inset:0;
overflow-y:auto}.viewer__manifest-overlay--right.svelte-zw2q18{
inset:0}.viewer__grid--left.svelte-zw2q18{
grid-template-columns:minmax(240px,300px) 1fr}.viewer__grid--controls.svelte-zw2q18{
grid-template-columns:220px 1fr;
column-gap:0}.viewer__grid--right.svelte-zw2q18{
grid-template-columns:1fr minmax(220px,280px)}.viewer__grid.viewer__grid--controls.viewer__grid--left.svelte-zw2q18{
grid-template-columns:220px minmax(320px,410px) 1fr;
column-gap:0}.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--nav-compact.svelte-zw2q18{
grid-template-columns:72px minmax(320px,410px) 1fr}.viewer__grid.viewer__grid--sidebar-right.viewer__grid--controls.svelte-zw2q18{
grid-template-columns:1fr 220px}.viewer__grid.viewer__grid--sidebar-right.viewer__grid--controls.viewer__grid--left.svelte-zw2q18{
grid-template-columns:1fr minmax(320px,410px) 220px;
column-gap:0}.viewer__grid.viewer__grid--sidebar-right.viewer__grid--controls.viewer__grid--left.viewer__grid--nav-compact.svelte-zw2q18{
grid-template-columns:1fr minmax(320px,410px) 72px}.viewer__grid--sidebar-right.svelte-zw2q18>.stage:where(.svelte-zw2q18){
order:1;
margin-right:18px;
margin-left:0!important}.viewer__grid--sidebar-right.viewer__grid--controls.svelte-zw2q18:not(.viewer__grid--left)>.stage:where(.svelte-zw2q18){
margin-right:0}.viewer__grid--sidebar-right.svelte-zw2q18 .panel-stack--left{
border-right:none;
order:2;
border-left:1px solid var(--viewer-panel-border)!important;
border-radius:18px 0 0 18px!important}.viewer__grid--sidebar-right.svelte-zw2q18>.viewer__control-rail:where(.svelte-zw2q18){
border-right:1px solid var(--viewer-panel-border);
border-left:none;
border-radius:0 18px 18px 0;
order:3}.viewer__grid.viewer__grid--controls.viewer__grid--right.svelte-zw2q18{
grid-template-columns:220px 1fr minmax(220px,280px)}.viewer__grid.viewer__grid--left.viewer__grid--right.svelte-zw2q18{
grid-template-columns:minmax(240px,300px) 1fr minmax(220px,280px)}.viewer--story-builder.svelte-zw2q18 .viewer__grid.viewer__grid--left.viewer__grid--right:where(.svelte-zw2q18){
grid-template-columns:minmax(250px,310px) minmax(430px,1fr) minmax(330px,370px);
column-gap:14px}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18){
row-gap:14px}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18){
border:1px solid var(--viewer-panel-border);
background:var(--viewer-panel);
border-radius:18px;
min-height:0;
overflow:hidden}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-slot,.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-panel,.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-panel__panel,.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-panel__body{
height:100%;
min-height:0}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18) .plugin-panel__title{
display:none}.viewer--story-preview .viewer__grid.svelte-zw2q18{
grid-template-columns:minmax(0,1fr)!important}.viewer--story-preview .viewer__grid.svelte-zw2q18 .panel-stack--left,.viewer--story-preview .panel-stack--right.svelte-zw2q18{
display:none!important}.viewer--story-preview .viewer__grid.svelte-zw2q18>.stage:where(.svelte-zw2q18){
grid-area:1/1/-1!important}.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.svelte-zw2q18{
grid-template-columns:220px minmax(320px,410px) 1fr minmax(220px,280px);
column-gap:0}.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.viewer__grid--nav-compact.svelte-zw2q18{
grid-template-columns:72px minmax(320px,410px) 1fr minmax(220px,280px)}.viewer__grid.viewer__grid--controls.viewer__grid--left.svelte-zw2q18>.stage:where(.svelte-zw2q18){
margin-left:18px}.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.svelte-zw2q18>.stage:where(.svelte-zw2q18){
margin-right:18px}.viewer__control-rail.svelte-zw2q18{
z-index:4;
box-sizing:border-box;
border:1px solid var(--viewer-panel-border);
background:var(--viewer-control-rail-bg);
border-right:none;
border-radius:18px 0 0 18px;
align-content:start;
justify-items:stretch;
width:100%;
min-height:0;
padding:24px 14px 18px;
transition:width .24s cubic-bezier(.2,.8,.2,1),padding .22s;
display:grid;
position:relative;
overflow:hidden}.viewer__control-rail.svelte-zw2q18 .viewer__dock{
position:static;
top:auto;
right:auto;
transform:none}.viewer__grid--nav-compact.svelte-zw2q18>.viewer__control-rail:where(.svelte-zw2q18){
width:72px;
padding-inline:10px}.viewer__grid--sidebar-right.viewer__grid--nav-compact.svelte-zw2q18>.viewer__control-rail:where(.svelte-zw2q18){
justify-self:end}.viewer__grid.viewer__grid--controls.viewer__grid--left.svelte-zw2q18 .panel-stack--left,.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.svelte-zw2q18 .panel-stack--left{
border-left:none;
border-radius:0 18px 18px 0}.panel-stack.svelte-zw2q18{
align-content:start;
gap:16px;
min-height:0;
display:grid}.stage.svelte-zw2q18{
align-content:start;
gap:12px;
min-width:0;
height:100%;
min-height:0;
display:grid;
overflow:hidden auto}.stage--viewer.svelte-zw2q18{
grid-template-rows:minmax(min(160px,100%),1fr) auto;
gap:12px}.stage__primary.svelte-zw2q18{
grid-template-rows:minmax(0,1fr) auto;
min-width:0;
min-height:0;
display:grid}.stage__viewer-frame.svelte-zw2q18{
box-sizing:border-box;
background:0 0;
border:0;
border-radius:16px;
grid-template-rows:minmax(0,1fr);
gap:0;
padding:0;
position:relative;
overflow:hidden}.stage__viewer-frame.svelte-zw2q18 .stage__media{
border:0;
border-radius:16px}.stage__viewer-frame.svelte-zw2q18 .stage__toolbar--below{
z-index:12;
border:1px solid var(--viewer-panel-border,#ffffff1f);
background:var(--viewer-stage-bottom-bg,#090e15c7);
-webkit-backdrop-filter:blur(12px);
opacity:0;
pointer-events:none;
border-radius:14px;
width:min(100% - 24px,560px);
margin:0;
padding:6px;
transition:opacity .22s,transform .22s;
position:absolute;
bottom:14px;
left:50%;
transform:translate(-50%,8px);
box-shadow:0 8px 28px #00000057}.stage__viewer-frame--controls-visible.svelte-zw2q18 .stage__toolbar--below,.stage__viewer-frame.svelte-zw2q18 .stage__toolbar--below:focus-within{
opacity:1;
pointer-events:auto;
transform:translate(-50%)}@media (prefers-reduced-motion:reduce){
.stage__viewer-frame.svelte-zw2q18 .stage__toolbar--below{
transition:none}}.stage--joined-sidebar-left.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18) .stage__media{
border-radius:0 16px 16px 0}.stage--joined-sidebar-right.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18) .stage__media{
border-radius:16px 0 0 16px}.stage--joined-sidebar-left.svelte-zw2q18{
--mango-viewer-media-radius:0 16px 16px 0}.stage--joined-sidebar-right.svelte-zw2q18{
--mango-viewer-media-radius:16px 0 0 16px}.stage--joined-sidebar-left.svelte-zw2q18 .stage-gallery-view:where(.svelte-zw2q18){
border-radius:0 18px 18px 0}.stage--joined-sidebar-right.svelte-zw2q18 .stage-gallery-view:where(.svelte-zw2q18){
border-radius:18px 0 0 18px}.stage--story-builder.svelte-zw2q18 .stage__toolbar--below{
margin-top:0;
padding-top:8px}.stage--story-builder.svelte-zw2q18{
overscroll-behavior-y:contain;
scrollbar-gutter:stable;
-webkit-overflow-scrolling:touch;
grid-template-rows:minmax(clamp(220px,42cqh,420px),1fr) auto;
align-content:stretch;
overflow:hidden auto}.stage--with-bottom-toolbar.svelte-zw2q18:not(.stage--story-builder){
grid-template-rows:minmax(0,1fr);
grid-auto-rows:auto;
overflow:hidden}.stage--story.svelte-zw2q18{
--mango-viewer-av-player-max-width:calc((100cqh - 24px) * 16 / 9);
align-content:stretch;
overflow:hidden}.stage__story-slot.svelte-zw2q18{
grid-template-rows:minmax(0,1fr) auto;
gap:0;
height:100%;
min-height:0;
display:grid;
position:relative;
overflow:hidden}.stage__bottom.svelte-zw2q18{
box-sizing:border-box;
background:var(--viewer-stage-bottom-bg,#0c1016b8);
border:1px solid var(--viewer-panel-border);
border-radius:16px;
gap:12px;
width:100%;
max-width:100%;
padding:12px;
display:grid}.viewer :is(button,input,select,textarea):focus-visible{
outline:2px solid var(--viewer-focus-ring,#2ac7ffb3);
outline-offset:2px}.viewer__backdrop.svelte-zw2q18{
display:none}@container mango-viewer (width<=1024px){
.viewer.svelte-zw2q18{
border-radius:16px;
gap:10px;
height:100%;
min-height:0;
max-height:100%;
padding:12px;
overflow:hidden}.viewer.viewer--story-viewer.svelte-zw2q18{
gap:0;
padding:0}.viewer.viewer--story-builder.svelte-zw2q18{
height:100%;
min-height:0;
max-height:100%;
overflow:hidden}.viewer--story-builder.svelte-zw2q18 .viewer__top-row:where(.svelte-zw2q18){
flex-wrap:wrap}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18){
width:100%}.viewer__grid.svelte-zw2q18{
grid-template-rows:minmax(0,1fr) auto;
grid-template-columns:minmax(0,1fr);
row-gap:8px;
height:100%;
min-height:0;
max-height:100%;
overflow:hidden}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18){
grid-template-rows:minmax(320px,1fr) minmax(260px,42%);
gap:8px;
height:100%;
max-height:100%;
overflow:hidden;
grid-template-columns:minmax(220px,36%) minmax(0,1fr)!important}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18)>.stage:where(.svelte-zw2q18){
overscroll-behavior-y:contain;
-webkit-overflow-scrolling:touch;
grid-area:1/1/auto/-1;
height:100%;
overflow:hidden auto}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18) .panel-stack--left{
width:100%;
max-width:none;
height:100%;
box-shadow:none;
grid-area:2/1;
animation:none;
position:relative;
inset:auto;
transform:none}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18){
grid-area:2/2;
height:100%}.viewer__grid.viewer__grid--left.viewer__grid--right.svelte-zw2q18,.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.svelte-zw2q18,.viewer__grid.viewer__grid--left.svelte-zw2q18,.viewer__grid.viewer__grid--controls.viewer__grid--left.svelte-zw2q18,.viewer__grid.viewer__grid--right.svelte-zw2q18,.viewer__grid.viewer__grid--controls.viewer__grid--right.svelte-zw2q18,.viewer__grid.viewer__grid--controls.svelte-zw2q18{
grid-template-columns:minmax(0,1fr)}.viewer__grid.viewer__grid--controls.viewer__grid--left.svelte-zw2q18>.stage:where(.svelte-zw2q18),.viewer__grid.viewer__grid--controls.viewer__grid--left.viewer__grid--right.svelte-zw2q18>.stage:where(.svelte-zw2q18){
margin-left:0;
margin-right:0}.viewer__grid.svelte-zw2q18{
position:relative}.viewer__backdrop.svelte-zw2q18{
z-index:13;
-webkit-backdrop-filter:blur(4px);
backdrop-filter:blur(4px);
opacity:0;
pointer-events:none;
background:#0000008c;
border:0;
margin:0;
padding:0;
transition:opacity .25s linear;
display:block;
position:absolute;
inset:0}.viewer__backdrop--active.svelte-zw2q18{
opacity:1;
pointer-events:auto}.viewer__grid.svelte-zw2q18 .panel-stack--left{
z-index:14;
width:min(280px,85%);
max-width:85%;
animation:.3s cubic-bezier(.25,.8,.25,1) svelte-zw2q18-viewer-slidein-left;
position:absolute;
top:0;
bottom:0;
left:0;
transform:translate(0);
box-shadow:10px 0 30px #0006}.viewer__grid--sidebar-right.svelte-zw2q18 .panel-stack--left{
animation-name:svelte-zw2q18-viewer-slidein-right;
left:auto;
right:0;
box-shadow:-10px 0 30px #0006;
border:1px solid var(--viewer-panel-border)!important;
border-radius:18px!important}.viewer__grid--sidebar-right.svelte-zw2q18>.stage:where(.svelte-zw2q18){
order:initial;
margin-right:0}.viewer__grid--sidebar-right.svelte-zw2q18>.viewer__control-rail:where(.svelte-zw2q18){
order:initial}.viewer__control-rail.svelte-zw2q18{
box-sizing:border-box;
background:var(--viewer-panel);
overscroll-behavior-x:contain;
scrollbar-width:none;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
border:0;
border-radius:9px;
grid-area:2/1;
justify-self:center;
align-items:center;
width:fit-content;
max-width:100%;
height:auto;
padding:0;
display:grid;
overflow:auto hidden}.viewer__control-rail.svelte-zw2q18::-webkit-scrollbar{
display:none}.viewer__grid.svelte-zw2q18>.stage:where(.svelte-zw2q18){
grid-area:1/1}.viewer__control-rail.svelte-zw2q18 .viewer__dock{
grid-template-columns:repeat(auto-fit,minmax(32px,1fr));
align-items:center;
gap:3px;
width:100%;
max-width:none;
padding:0;
display:grid}.viewer__control-rail.svelte-zw2q18 .viewer__dock-button{
border-radius:9px;
justify-self:center;
width:100%;
max-width:44px;
height:44px}.viewer__control-rail.svelte-zw2q18 .viewer__dock-icon,.viewer__control-rail.svelte-zw2q18 .viewer__dock-icon svg{
width:18px;
height:18px}.viewer__control-rail.svelte-zw2q18 .viewer__dock-icon--info{
width:19px;
height:19px}.viewer__control-rail.svelte-zw2q18 .viewer__dock-info-chip{
width:18px;
height:18px;
font-size:13px}.stage.svelte-zw2q18{
height:100%;
min-height:0;
overflow:hidden}.stage--story.svelte-zw2q18{
height:100%;
overflow:hidden}.stage__viewer-frame.svelte-zw2q18{
border-radius:14px;
grid-template-rows:minmax(0,1fr) auto;
overflow:hidden}.stage__viewer-frame.svelte-zw2q18 .stage__media{
border-radius:14px 14px 0 0}.stage__viewer-frame.svelte-zw2q18 .stage__toolbar--below{
width:100%;
box-shadow:none;
-webkit-backdrop-filter:none;
opacity:1;
pointer-events:auto;
background:0 0;
border:0;
border-radius:0 0 14px 14px;
margin:0;
padding:6px;
transition:none;
position:static;
transform:none}.stage__viewer-frame--controls-visible.svelte-zw2q18 .stage__toolbar--below,.stage__viewer-frame.svelte-zw2q18 .stage__toolbar--below:focus-within{
transform:none}.stage--viewer.svelte-zw2q18{
--mango-viewer-av-player-aspect-ratio:16 / 9;
--mango-viewer-audio-art-aspect-ratio:16 / 7;
--mango-viewer-audio-art-min-height:0}}@container mango-viewer (width<=700px){
.viewer--annotation-editor.svelte-zw2q18 .viewer__top-row:where(.svelte-zw2q18){
flex-wrap:wrap;
row-gap:8px}.viewer--annotation-editor.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18){
flex:1 0 100%;
justify-content:flex-start}.viewer.viewer--story-builder.svelte-zw2q18{
height:100%;
min-height:0;
max-height:100%;
overflow:hidden}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18){
overscroll-behavior-x:contain;
scrollbar-width:none;
-webkit-overflow-scrolling:touch;
justify-content:flex-start;
min-width:0;
overflow-x:auto}.viewer--story-builder.svelte-zw2q18 .viewer__top-actions:where(.svelte-zw2q18)::-webkit-scrollbar{
display:none}.viewer--story-builder.svelte-zw2q18 .viewer__fullscreen-btn:where(.svelte-zw2q18){
flex:0 0 40px;
width:40px;
min-width:40px;
height:40px;
padding:0}.viewer--story-builder.svelte-zw2q18 .viewer__fullscreen-btn:where(.svelte-zw2q18) span:where(.svelte-zw2q18){
display:none}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18){
overscroll-behavior-y:contain;
-webkit-overflow-scrolling:touch;
grid-template-rows:360px 280px 440px;
height:100%;
max-height:100%;
overflow:hidden auto;
grid-template-columns:1fr!important}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18)>.stage:where(.svelte-zw2q18){
grid-area:1/1}.viewer--story-builder.svelte-zw2q18 .viewer__grid:where(.svelte-zw2q18) .panel-stack--left{
grid-area:2/1}.viewer--story-builder.svelte-zw2q18 .panel-stack--right:where(.svelte-zw2q18){
grid-area:3/1}}@container mango-viewer (height<=560px){
.stage--viewer.svelte-zw2q18{
grid-template-rows:minmax(min(120px,100%),1fr);
position:relative}.stage--viewer.svelte-zw2q18>.gallery{
z-index:15;
overscroll-behavior:contain;
background:var(--viewer-gallery-bg,#0a0e13f5);
align-content:start;
margin-top:0;
position:absolute;
inset:0;
overflow-y:auto}.stage--viewer.svelte-zw2q18>.gallery .gallery__list{
touch-action:auto;
grid-template-columns:repeat(auto-fill,minmax(84px,1fr));
grid-auto-columns:auto;
grid-auto-flow:row;
overflow:visible}}@container mango-viewer (height<=500px){
.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__grid:where(.svelte-zw2q18){
grid-template-rows:minmax(0,1fr) auto;
row-gap:6px;
height:100%;
min-height:0;
position:relative;
overflow:hidden;
grid-template-columns:minmax(0,1fr)!important}.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__grid:where(.svelte-zw2q18)>.stage:where(.svelte-zw2q18){
grid-area:1/1;
height:100%;
min-height:0;
margin:0;
overflow:hidden}.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__control-rail:where(.svelte-zw2q18){
overscroll-behavior-x:contain;
scrollbar-width:none;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
border:0;
border-radius:9px;
grid-area:2/1;
justify-self:center;
width:fit-content;
max-width:100%;
height:44px;
padding:0;
overflow:auto hidden}.stage--viewer.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18){
grid-template-rows:minmax(min(96px,26cqh),1fr) auto;
overflow:hidden}.stage--viewer.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18) .stage__media{
border-radius:12px 12px 0 0;
min-height:0}.stage--viewer.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18) .stage__toolbar--below{
width:100%;
box-shadow:none;
-webkit-backdrop-filter:none;
opacity:1;
pointer-events:auto;
background:0 0;
border:0;
border-radius:0 0 12px 12px;
margin:0;
padding:4px;
transition:none;
position:static;
transform:none}.stage--viewer.svelte-zw2q18 .stage__viewer-frame--controls-visible:where(.svelte-zw2q18) .stage__toolbar--below,.stage--viewer.svelte-zw2q18 .stage__viewer-frame:where(.svelte-zw2q18) .stage__toolbar--below:focus-within{
transform:none}}@container mango-viewer (height<=500px) and (width>=560px){
.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__grid:where(.svelte-zw2q18){
grid-template-rows:minmax(0,1fr);
gap:0 8px;
grid-template-columns:minmax(0,1fr) max-content!important}.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__grid:where(.svelte-zw2q18)>.stage:where(.svelte-zw2q18){
grid-area:1/1}.viewer.svelte-zw2q18:not(.viewer--story-viewer):not(.viewer--story-builder):not(.viewer--annotation-editor) .viewer__control-rail:where(.svelte-zw2q18){
overscroll-behavior-y:contain;
touch-action:pan-y;
grid-area:1/2;
place-self:stretch end;
width:max-content;
min-width:44px;
max-width:40%;
height:100%;
overflow:clip auto}}@container mango-viewer (width<=1024px){
.viewer.viewer--story-builder.svelte-zw2q18{
height:100%;
min-height:0;
max-height:100%;
overflow:hidden}}@media (prefers-reduced-motion:reduce){
.viewer__grid.svelte-zw2q18,.viewer__control-rail.svelte-zw2q18,.viewer__expand-sidebar.svelte-zw2q18{
transition:none}}@keyframes svelte-zw2q18-viewer-slidein-left{
0%{
transform:translate(-100%)}to{
transform:translate(0)}}@keyframes svelte-zw2q18-viewer-slidein-right{
0%{
transform:translate(100%)}to{
transform:translate(0)}}.settings-wrap.svelte-sc3yzj{
position:relative}.settings-trigger.svelte-sc3yzj{
color:#dbe7f4;
cursor:pointer;
background:#101822d9;
border:1px solid #fff3;
border-radius:12px;
width:40px;
height:40px}.settings-popover.svelte-sc3yzj{
-webkit-backdrop-filter:blur(12px);
backdrop-filter:blur(12px);
z-index:15;
background:#09121edb;
border:1px solid #ffffff29;
border-radius:14px;
gap:12px;
width:250px;
padding:14px;
display:grid;
position:absolute;
bottom:48px;
left:0;
box-shadow:0 18px 32px #00000073}.settings-popover--right.svelte-sc3yzj{
bottom:0;
left:48px}.settings-section.svelte-sc3yzj{
gap:8px;
display:grid}h3.svelte-sc3yzj{
letter-spacing:.1em;
text-transform:uppercase;
color:#e0eaf5c2;
margin:0;
font-size:11px}.layout-grid.svelte-sc3yzj{
grid-template-columns:repeat(2,1fr);
gap:8px;
display:grid}.layout-option.svelte-sc3yzj,.segment__btn.svelte-sc3yzj,select.svelte-sc3yzj{
color:#e5eef9;
background:#ffffff0f;
border:1px solid #ffffff29;
border-radius:10px;
padding:8px 10px;
font-size:12px}.layout-option.svelte-sc3yzj,.segment__btn.svelte-sc3yzj{
cursor:pointer}.layout-option--active.svelte-sc3yzj,.segment__btn--active.svelte-sc3yzj{
background:#2ac7ff42;
border-color:#2ac7ff99}.segment.svelte-sc3yzj{
grid-template-columns:1fr 1fr;
gap:8px;
display:grid}.workspace.svelte-1b9z2ra{
--panel-bg:#0c1622f0;
--panel-border:#ffffff1f;
color:#e4edf8;
background:#07111d;
width:100%;
height:100%;
min-height:0;
display:flex;
position:relative;
overflow:hidden}.workspace[data-theme=light].svelte-1b9z2ra{
--panel-bg:#fffffff5;
--panel-border:#141c2626;
color:#1d2a37;
background:#eaf0f6}.workspace-rail.svelte-1b9z2ra{
z-index:30;
border-right:1px solid var(--panel-border);
background:var(--panel-bg);
flex-direction:column;
flex:0 0 58px;
justify-content:space-between;
padding:10px 8px;
display:flex;
position:relative}.workspace-rail__top.svelte-1b9z2ra,.workspace-rail__bottom.svelte-1b9z2ra{
gap:8px;
display:grid}.workspace-rail__button.svelte-1b9z2ra{
width:40px;
height:40px;
color:inherit;
cursor:pointer;
background:0 0;
border:1px solid #0000;
border-radius:10px;
place-items:center;
padding:0;
display:grid}.workspace-rail__button.svelte-1b9z2ra:hover:not(:disabled),.workspace-rail__button--active.svelte-1b9z2ra{
color:#75dbff;
background:#2ac7ff29;
border-color:#2ac7ff73}.workspace-rail__button.svelte-1b9z2ra:disabled{
cursor:not-allowed;
opacity:.28}.workspace-rail__button--iiif.svelte-1b9z2ra img:where(.svelte-1b9z2ra){
filter:invert();
width:22px;
height:22px}.workspace[data-theme=light].svelte-1b9z2ra .workspace-rail__button--iiif:where(.svelte-1b9z2ra) img:where(.svelte-1b9z2ra){
filter:none}.workspace-drawer.svelte-1b9z2ra{
border-right:1px solid var(--panel-border);
background:var(--panel-bg);
flex:0 0 280px;
min-width:0;
padding:18px;
overflow:auto}.workspace-drawer__header.svelte-1b9z2ra h2:where(.svelte-1b9z2ra){
margin:0}.workspace-drawer__eyebrow.svelte-1b9z2ra,.workspace-drawer__label.svelte-1b9z2ra{
letter-spacing:.13em;
text-transform:uppercase;
opacity:.62;
margin-bottom:5px;
font-size:10px;
display:block}.workspace-drawer__header.svelte-1b9z2ra h2:where(.svelte-1b9z2ra){
font-size:18px}.workspace-drawer__section.svelte-1b9z2ra{
border:1px solid var(--panel-border);
overflow-wrap:anywhere;
background:#ffffff09;
border-radius:12px;
gap:9px;
margin-top:24px;
padding:14px;
display:grid}.workspace-drawer__section.svelte-1b9z2ra p:where(.svelte-1b9z2ra){
margin:0;
font-size:13px;
line-height:1.5}.workspace-drawer__muted.svelte-1b9z2ra,.workspace-drawer__notice.svelte-1b9z2ra{
opacity:.64;
font-size:12px}.workspace-drawer__notice.svelte-1b9z2ra{
background:#ffffff0d;
border-radius:10px;
padding:12px;
line-height:1.45}.workspace__main.svelte-1b9z2ra{
flex:auto;
min-width:0;
height:100%;
min-height:0;
padding:10px}.workspace__manifest-overlay.svelte-1b9z2ra{
z-index:50;
min-width:0;
position:absolute;
inset:0}@container mango-viewer (width<=820px){
.workspace-drawer.svelte-1b9z2ra{
display:none}}@media (width<=820px){
.workspace.svelte-1b9z2ra{
flex-direction:column;
height:100dvh;
min-height:100dvh}.workspace-rail.svelte-1b9z2ra{
box-sizing:border-box;
width:100%;
min-width:0;
padding:6px max(8px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));
border-top:1px solid var(--panel-border);
overscroll-behavior-x:contain;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
border-right:0;
flex-direction:row;
flex:none;
order:2;
overflow:auto hidden}.workspace-drawer.svelte-1b9z2ra{
display:none}.workspace-rail__top.svelte-1b9z2ra,.workspace-rail__bottom.svelte-1b9z2ra{
flex:none;
gap:6px;
display:flex}.workspace-rail__bottom.svelte-1b9z2ra{
margin-left:auto;
padding-left:8px}.workspace-rail__button.svelte-1b9z2ra{
width:44px;
height:44px}.workspace__main.svelte-1b9z2ra{
flex:auto;
order:1;
height:auto;
padding:6px}.workspace__manifest-overlay.svelte-1b9z2ra{
inset:0}}:root,:host{
--ol-background-color:white;
--ol-accent-background-color:#f5f5f5;
--ol-subtle-background-color:#80808040;
--ol-partial-background-color:#ffffffbf;
--ol-foreground-color:#333;
--ol-subtle-foreground-color:#666;
--ol-brand-color:#0af}.ol-box{
box-sizing:border-box;
border:1.5px solid var(--ol-background-color);
background-color:var(--ol-partial-background-color);
border-radius:2px}.ol-mouse-position{
position:absolute;
top:8px;
right:8px}.ol-scale-line{
background:var(--ol-partial-background-color);
border-radius:4px;
padding:2px;
position:absolute;
bottom:8px;
left:8px}.ol-scale-line-inner{
border:1px solid var(--ol-subtle-foreground-color);
color:var(--ol-foreground-color);
text-align:center;
will-change:contents, width;
border-top:none;
margin:1px;
font-size:10px;
transition:all .25s}.ol-scale-bar{
position:absolute;
bottom:8px;
left:8px}.ol-scale-bar-inner{
display:flex}.ol-scale-step-marker{
background-color:var(--ol-foreground-color);
float:right;
z-index:10;
width:1px;
height:15px}.ol-scale-step-text{
z-index:11;
color:var(--ol-foreground-color);
text-shadow:-1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
font-size:10px;
position:absolute;
bottom:-5px}.ol-scale-text{
text-align:center;
color:var(--ol-foreground-color);
text-shadow:-1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
font-size:12px;
position:absolute;
bottom:25px}.ol-scale-singlebar{
z-index:9;
box-sizing:border-box;
border:1px solid var(--ol-foreground-color);
height:10px;
position:relative}.ol-scale-singlebar-even{
background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{
background-color:var(--ol-background-color)}.ol-unsupported{
display:none}.ol-viewport,.ol-unselectable{
-webkit-touch-callout:none;
-webkit-user-select:none;
user-select:none;
-webkit-tap-highlight-color:transparent}.ol-viewport canvas{
all:unset;
overflow:hidden}.ol-viewport{
touch-action:pan-x pan-y}.ol-selectable{
-webkit-touch-callout:default;
-webkit-user-select:text;
user-select:text}.ol-grabbing{
cursor:-webkit-grabbing;
cursor:-moz-grabbing;
cursor:grabbing}.ol-grab{
cursor:move;
cursor:-webkit-grab;
cursor:-moz-grab;
cursor:grab}.ol-control{
background-color:var(--ol-subtle-background-color);
border-radius:4px;
position:absolute}.ol-zoom{
top:.5em;
left:.5em}.ol-rotate{
transition:opacity .25s linear,visibility linear;
top:.5em;
right:.5em}.ol-rotate.ol-hidden{
opacity:0;
visibility:hidden;
transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{
top:4.643em;
left:.5em}.ol-full-screen{
top:.5em;
right:.5em}.ol-control button{
color:var(--ol-subtle-foreground-color);
font-weight:700;
font-size:inherit;
text-align:center;
background-color:var(--ol-background-color);
border:none;
border-radius:2px;
width:1.375em;
height:1.375em;
margin:1px;
padding:0;
line-height:.4em;
text-decoration:none;
display:block}.ol-control button::-moz-focus-inner{
border:none;
padding:0}.ol-zoom-extent button{
line-height:1.4em}.ol-compass{
will-change:transform;
font-weight:400;
display:block}.ol-touch .ol-control button{
font-size:1.5em}.ol-touch .ol-zoom-extent{
top:5.5em}.ol-control button:hover,.ol-control button:focus{
outline:1px solid var(--ol-subtle-foreground-color);
color:var(--ol-foreground-color);
text-decoration:none}.ol-zoom .ol-zoom-in{
border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{
border-radius:0 0 2px 2px}.ol-attribution{
text-align:right;
flex-flow:row-reverse;
align-items:center;
max-width:calc(100% - 1.3em);
display:flex;
bottom:.5em;
right:.5em}.ol-attribution a{
color:var(--ol-subtle-foreground-color);
text-decoration:none}.ol-attribution ul{
color:var(--ol-foreground-color);
text-shadow:0 0 2px var(--ol-background-color);
margin:0;
padding:1px .5em;
font-size:12px}.ol-attribution li{
list-style:none;
display:inline}.ol-attribution li:not(:last-child):after{
content:\" \"}.ol-attribution img{
max-height:2em;
max-width:inherit;
vertical-align:middle}.ol-attribution button{
flex-shrink:0}.ol-attribution.ol-collapsed ul{
display:none}.ol-attribution:not(.ol-collapsed){
background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{
border-radius:4px 0 0;
bottom:0;
right:0}.ol-attribution.ol-uncollapsible img{
max-height:1.6em;
margin-top:-.2em}.ol-attribution.ol-uncollapsible button{
display:none}.ol-zoomslider{
height:200px;
top:4.5em;
left:.5em}.ol-zoomslider button{
height:10px;
position:relative}.ol-touch .ol-zoomslider{
top:5.5em}.ol-overviewmap{
bottom:.5em;
left:.5em}.ol-overviewmap.ol-uncollapsible{
border-radius:0 4px 0 0;
bottom:0;
left:0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{
display:block}.ol-overviewmap .ol-overviewmap-map{
border:1px solid var(--ol-subtle-foreground-color);
width:150px;
height:150px}.ol-overviewmap:not(.ol-collapsed) button{
position:absolute;
bottom:0;
left:0}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{
display:none}.ol-overviewmap:not(.ol-collapsed){
background:var(--ol-subtle-background-color)}.ol-overviewmap-box{
border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{
cursor:move}.ol-overviewmap .ol-viewport:hover{
cursor:pointer}.metadata.svelte-1a5u456{
gap:10px;
display:grid}.metadata__label.svelte-1a5u456{
color:var(--viewer-text);
font-size:14px;
font-weight:600}.metadata__map-target.svelte-1a5u456{
width:100%;
height:220px}.metadata__description.svelte-1a5u456{
color:var(--viewer-text);
font-size:12px;
line-height:1.5}.metadata__block.svelte-1a5u456{
gap:4px;
display:grid}.metadata__block-title.svelte-1a5u456{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--viewer-muted);
font-size:11px}.metadata__block-value.svelte-1a5u456{
color:var(--viewer-text);
font-size:12px}.metadata__link.svelte-1a5u456{
color:inherit;
word-break:break-all}.metadata__list.svelte-1a5u456{
grid-template-columns:1fr;
gap:4px;
margin:0;
display:grid}.metadata__term.svelte-1a5u456{
color:var(--viewer-muted);
margin:6px 0 0;
font-size:12px}.metadata__term.svelte-1a5u456:first-child{
margin-top:0}.metadata__value.svelte-1a5u456{
color:var(--viewer-text);
margin:0 0 8px;
font-size:12px}.metadata__value.svelte-1a5u456:last-child{
margin-bottom:0}.metadata__provider-logo.svelte-1a5u456{
object-fit:contain;
width:auto;
max-width:100%;
max-height:100%;
display:block}.metadata__provider-body.svelte-1a5u456,.metadata__provider-name.svelte-1a5u456{
font-weight:700;
line-height:1.8em}.metadata__provider-body.svelte-1a5u456 a:where(.svelte-1a5u456){
display:block}.metadata--redesigned.svelte-1a5u456{
gap:0}.metadata--redesigned.svelte-1a5u456 .metadata__description:where(.svelte-1a5u456),.metadata--redesigned.svelte-1a5u456 .metadata__block:where(.svelte-1a5u456){
border-bottom:1px solid var(--viewer-panel-border);
padding-block:14px}.metadata--redesigned.svelte-1a5u456 .metadata__block:where(.svelte-1a5u456){
gap:7px}.metadata--redesigned.svelte-1a5u456 .metadata__block-value:where(.svelte-1a5u456),.metadata--redesigned.svelte-1a5u456 .metadata__value:where(.svelte-1a5u456){
font-size:13px;
line-height:1.55}.metadata--redesigned.svelte-1a5u456 .metadata__list:where(.svelte-1a5u456){
gap:0}.metadata--redesigned.svelte-1a5u456 .metadata__term:where(.svelte-1a5u456){
border-top:1px solid var(--viewer-panel-border);
letter-spacing:.08em;
text-transform:uppercase;
margin:0;
padding-top:14px;
font-size:11px;
font-weight:700}.metadata--redesigned.svelte-1a5u456 .metadata__term:where(.svelte-1a5u456):first-child{
border-top:0}.metadata--redesigned.svelte-1a5u456 .metadata__value:where(.svelte-1a5u456){
margin:0;
padding-block:7px 14px}.osd__viewport .openseadragon-canvas{
filter:var(--osd-canvas-filter)!important}.osd.svelte-16dhwsm{
border-radius:inherit;
background:radial-gradient(120% 120% at 10% 0%, var(--viewer-stage-glow,#2ac7ff1f), var(--viewer-stage,#111720) 55%, var(--viewer-stage-tail,#0b0f14) 100%);
width:100%;
height:100%;
position:relative;
overflow:hidden}.osd__viewport.svelte-16dhwsm,.osd__overlays.svelte-16dhwsm{
position:absolute;
inset:0}.osd__viewport.svelte-16dhwsm{
touch-action:none}.osd__overlays.svelte-16dhwsm{
pointer-events:none}.annotation-svg.svelte-16dhwsm{
pointer-events:none;
width:100%;
height:100%;
position:absolute;
inset:0}.annotation-shape.svelte-16dhwsm{
fill:#ff4fa233;
stroke:#ff4fa2d9;
stroke-width:2px;
vector-effect:non-scaling-stroke;
pointer-events:auto;
cursor:pointer;
transition:stroke .2s,fill .2s,opacity .2s}.annotation-shape--polyline.svelte-16dhwsm{
fill:none!important}.annotation-shape.annotation--hit.svelte-16dhwsm{
fill:var(--viewer-search-hit-fill,#2ac7ff40)!important;
stroke:var(--viewer-search-hit-border,#2ac7fff2)!important}.annotation-shape.annotation--active.svelte-16dhwsm{
stroke-width:3px}.annotation.svelte-16dhwsm{
pointer-events:auto;
cursor:pointer;
background:#ff4fa233;
border:2px solid #ff4fa2d9;
border-radius:6px;
transition:border-color .2s,background .2s,opacity .2s;
position:absolute}.annotation--point.svelte-16dhwsm{
border-radius:999px;
width:12px;
height:12px;
transform:translate(-50%,-50%)}.annotation--hit.svelte-16dhwsm{
animation:1.6s ease-in-out infinite svelte-16dhwsm-pulse;
border-color:var(--viewer-search-hit-border,#2ac7fff2)!important;
background:var(--viewer-search-hit-fill,#2ac7ff40)!important}.annotation--active.svelte-16dhwsm{
border-width:3px}.annotation--dimmed.svelte-16dhwsm{
opacity:.18}.annotation-label.svelte-16dhwsm{
color:#f1f5f9;
white-space:nowrap;
text-overflow:ellipsis;
pointer-events:none;
background:#0c1016d6;
border:1px solid #ffffff1f;
border-radius:6px;
max-width:min(220px,60cqw);
padding:2px 6px;
font-size:11px;
line-height:1.2;
position:absolute;
overflow:hidden;
transform:translate(-50%)}.annotation-label--dimmed.svelte-16dhwsm{
opacity:.3}.annotation-tooltip.svelte-16dhwsm{
color:var(--viewer-text,#e8edf4);
pointer-events:auto;
z-index:2;
background:#0c1016eb;
border:1px solid #ffffff1a;
border-radius:10px;
padding:8px 10px;
font-size:12px;
line-height:1.4;
position:absolute;
transform:translate(-50%);
box-shadow:0 12px 30px #00000073}@keyframes svelte-16dhwsm-pulse{
0%{
box-shadow:0 0 #2ac7ff59}70%{
box-shadow:0 0 0 12px #2ac7ff00}to{
box-shadow:0 0 #2ac7ff00}}.image-placeholder.svelte-ggurt8{
height:100%;
color:var(--viewer-muted,#9aa6b2);
text-transform:uppercase;
letter-spacing:.16em;
place-items:center;
font-size:12px;
display:grid}.av-renderer.svelte-kxiicu{
box-sizing:border-box;
place-items:start center;
width:100%;
height:100%;
min-height:0;
display:grid;
container-type:size}mango-av-player.svelte-kxiicu{
--mango-av-accent:var(--viewer-accent,#e07a3f);
--mango-av-accent-contrast:#fff;
--mango-av-background:var(--viewer-stage,#111720);
--mango-av-surface:var(--viewer-panel,#121922);
--mango-av-text:var(--viewer-text,#e8edf4);
--mango-av-muted:var(--viewer-muted,#9aa6b2);
--mango-av-border:var(--viewer-panel-border,#ffffff1f);
--mango-av-radius:var(--mango-viewer-media-radius,1rem);
--media-primary-color:var(--viewer-text,#e8edf4);
--media-secondary-color:var(--viewer-stage,#111720);
width:100%;
height:100%;
min-height:0;
display:block}.av-renderer--video.svelte-kxiicu mango-av-player:where(.svelte-kxiicu){
height:100%}.pdf.svelte-e20l1p{
grid-template-rows:auto minmax(0,1fr);
gap:12px;
width:100%;
min-width:0;
height:100%;
min-height:0;
display:grid}.pdf__controls.svelte-e20l1p{
flex-wrap:wrap;
align-items:center;
gap:8px;
display:flex}.pdf__button.svelte-e20l1p{
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.1em;
cursor:pointer;
background:#ffffff14;
border:none;
border-radius:10px;
padding:6px 10px;
font-size:12px}.pdf__status.svelte-e20l1p{
color:var(--viewer-muted,#9aa6b2);
font-size:12px}.pdf__canvas-wrap.svelte-e20l1p{
box-sizing:border-box;
background:#0a0e13cc;
border-radius:16px;
min-width:0;
min-height:0;
padding:10px;
overflow:auto}.pdf__placeholder.svelte-e20l1p{
box-sizing:border-box;
width:100%;
height:100%;
min-height:0;
color:var(--viewer-muted,#9aa6b2);
text-transform:uppercase;
letter-spacing:.16em;
grid-row:1/-1;
place-items:center;
font-size:12px;
display:grid}.media.svelte-1dg7xf8{
width:100%;
height:100%;
display:grid}.media__viewer.svelte-1dg7xf8{
border-radius:var(--mango-viewer-media-radius,18px);
background:var(--viewer-stage,#111720);
width:100%;
height:100%}.media__placeholder.svelte-1dg7xf8{
height:100%;
color:var(--viewer-muted,#9aa6b2);
text-transform:uppercase;
letter-spacing:.16em;
place-items:center;
font-size:12px;
display:grid}.story-shell.svelte-1wj95mh{
border-radius:var(--story-shell-radius,18px);
background:var(--story-shell-bg,linear-gradient(180deg, #10161e 0%, #0b1118 100%));
border:0;
grid-template-rows:minmax(0,1fr) auto auto;
gap:0;
min-width:0;
height:100%;
min-height:0;
padding:0;
display:grid;
overflow:hidden}.story-shell__body.svelte-1wj95mh{
grid-template-columns:minmax(0,1fr) minmax(240px,320px);
gap:0;
min-height:0;
display:grid;
overflow:hidden}.story-shell__sidebar.svelte-1wj95mh{
border-left:1px solid var(--story-line,#ffffff24);
flex-direction:column;
min-height:0;
padding:14px 16px;
display:flex;
overflow:auto}.story-shell__chapter-label.svelte-1wj95mh{
color:var(--story-accent-text,#be8dff);
margin:0;
font-size:19px;
font-weight:600}.story-shell__title.svelte-1wj95mh{
color:var(--story-text,#edf5ff);
margin:10px 0;
font-family:Georgia,Times New Roman,serif;
font-size:clamp(32px,2.6cqw,58px);
line-height:1.03}.story-shell__accent.svelte-1wj95mh{
background:linear-gradient(90deg, var(--story-accent,#9a57ff), var(--story-accent-text,#b87fff));
border-radius:999px;
width:70px;
height:4px;
margin-bottom:14px}.story-shell__description.svelte-1wj95mh{
color:var(--story-muted,#d8dee9);
margin:0 0 18px;
font-size:clamp(15px,1.15cqw,20px);
line-height:1.55}.story-shell__metadata-toggle.svelte-1wj95mh{
color:var(--story-accent-text,#be8dff);
font:inherit;
cursor:pointer;
background:0 0;
border:0;
margin:2px 0 0;
padding:6px 0;
font-size:14px;
font-weight:700}.story-shell__metadata-toggle.svelte-1wj95mh:hover,.story-shell__metadata-toggle.svelte-1wj95mh:focus-visible{
color:var(--story-accent-text-hover,#d8bcff);
text-decoration:underline}.story-shell__playback.svelte-1wj95mh{
flex-shrink:0;
margin-top:auto;
padding-top:24px}@container mango-viewer (width>=1025px){
.story-shell__sidebar.svelte-1wj95mh{
grid-template-rows:minmax(0,1fr) auto;
display:grid;
overflow:hidden}.story-shell__metadata.svelte-1wj95mh{
overscroll-behavior-y:contain;
min-height:0;
overflow-y:auto}.story-shell__playback.svelte-1wj95mh{
margin-top:0}}.story-shell__transport.svelte-1wj95mh{
justify-content:center;
align-items:center;
gap:12px;
display:flex}.story-shell__transport-btn.svelte-1wj95mh,.story-shell__play-btn.svelte-1wj95mh{
border:1px solid var(--story-control-border,#ffffff3d);
background:var(--story-control-bg,#08112099);
color:var(--story-text,#edf5ff);
cursor:pointer;
border-radius:999px;
place-items:center;
display:grid}.story-shell__transport-btn.svelte-1wj95mh{
width:46px;
height:46px}.story-shell__play-btn.svelte-1wj95mh{
border-color:color-mix(in srgb, var(--story-accent,#9a57ff) 88%, transparent);
width:66px;
height:66px;
box-shadow:0 0 0 6px color-mix(in srgb, var(--story-accent,#9a57ff) 20%, transparent), 0 10px 24px color-mix(in srgb, var(--story-accent,#9a57ff) 40%, transparent);
font-size:19px}.story-shell__play-btn--active.svelte-1wj95mh{
background:radial-gradient(circle at 32% 25%, color-mix(in srgb, var(--story-accent,#9a57ff) 62%, white) 0%, var(--story-accent,#9a57ff) 72%)}.story-shell__timeline.svelte-1wj95mh{
margin-top:12px}.story-shell__timeline-track.svelte-1wj95mh{
background:var(--story-track-bg,#fff3);
border:1px solid var(--story-track-border,#ffffff26);
border-radius:999px;
width:100%;
height:10px;
position:relative;
overflow:hidden}.story-shell__timeline-fill.svelte-1wj95mh{
background:linear-gradient(90deg, var(--story-accent,#8b45ff) 0%, color-mix(in srgb, var(--story-accent,#9a57ff) 68%, white) 100%);
border-radius:999px;
width:0%;
transition:width .12s linear;
position:absolute;
top:0;
bottom:0;
left:0}.story-shell__timeline-thumb.svelte-1wj95mh{
background:color-mix(in srgb, var(--story-accent,#9a57ff) 72%, white);
width:12px;
height:12px;
box-shadow:0 0 0 3px color-mix(in srgb, var(--story-accent,#9a57ff) 26%, transparent);
border-radius:999px;
transition:left .12s linear;
position:absolute;
top:50%;
transform:translate(-50%,-50%)}.story-shell__timeline-text.svelte-1wj95mh{
text-align:right;
color:var(--story-muted,#d0dcf0);
font-variant-numeric:tabular-nums;
direction:ltr;
unicode-bidi:isolate;
margin-top:4px;
font-size:12px}.story-shell__stage-wrap.svelte-1wj95mh{
flex-direction:column;
min-width:0;
min-height:0;
display:flex;
overflow:hidden}.story-shell__stage-frame.svelte-1wj95mh{
background:0 0;
border-radius:0;
flex:auto;
width:100%;
min-height:0;
position:relative;
overflow:hidden}.story-shell__stage-frame.svelte-1wj95mh .stage__story-slot,.story-shell__stage-frame.svelte-1wj95mh .stage{
height:100%;
min-height:100%;
overflow:hidden}.story-shell__stage-frame.svelte-1wj95mh .stage__media{
border:0;
border-radius:0;
height:100%;
min-height:0}.story-shell__chapter.svelte-1wj95mh:hover:not(:disabled),.story-shell__transport-btn.svelte-1wj95mh:hover:not(:disabled),.story-shell__play-btn.svelte-1wj95mh:hover:not(:disabled){
background:var(--story-control-hover-bg,#ffffff1f)}.story-shell__chapter.svelte-1wj95mh:disabled,.story-shell__transport-btn.svelte-1wj95mh:disabled,.story-shell__play-btn.svelte-1wj95mh:disabled{
opacity:.5;
cursor:not-allowed}.story-shell__footer.svelte-1wj95mh{
overscroll-behavior-x:contain;
scrollbar-width:none;
touch-action:pan-x;
-webkit-overflow-scrolling:touch;
border-top:0;
grid-auto-columns:clamp(68px,6cqw,82px);
grid-auto-flow:column;
align-items:start;
gap:10px;
min-height:0;
padding:12px 12px 10px;
display:grid;
overflow:auto hidden}.story-shell__footer.svelte-1wj95mh::-webkit-scrollbar{
display:none}.story-shell__chapter.svelte-1wj95mh{
color:var(--story-muted,#c6d4ed);
cursor:pointer;
font:inherit;
background:0 0;
border:none;
justify-items:center;
padding:0 0 4px;
display:grid}.story-shell__chapter-thumb.svelte-1wj95mh{
aspect-ratio:1;
border:1px solid var(--story-control-border,#fff3);
border-radius:12px;
width:100%;
min-height:66px;
display:block;
overflow:hidden}.story-shell__chapter-thumb.svelte-1wj95mh img:where(.svelte-1wj95mh){
object-fit:cover;
width:100%;
height:100%;
display:block}.story-shell__chapter-fallback.svelte-1wj95mh{
width:100%;
height:100%;
display:block}.story-shell__chapter-number.svelte-1wj95mh{
text-align:center;
color:var(--story-muted,#cad7ee);
margin-top:6px;
font-size:14px;
display:block}.story-shell__chapter--active.svelte-1wj95mh .story-shell__chapter-thumb:where(.svelte-1wj95mh){
border-color:color-mix(in srgb, var(--story-accent,#9a57ff) 82%, white);
box-shadow:0 0 0 2px var(--story-active-ring,#40abf5d6) inset, 0 0 0 1px var(--story-active-halo,#e3f0ff6b)}.story-shell__chapter--active.svelte-1wj95mh .story-shell__chapter-number:where(.svelte-1wj95mh){
color:var(--story-text,#f0e8ff)}.story-shell__dot.svelte-1wj95mh{
background:var(--story-accent,#8f4dff);
opacity:0;
border-radius:999px;
width:6px;
height:6px;
margin-top:5px;
transition:opacity .14s;
display:block}.story-shell__dot--active.svelte-1wj95mh{
opacity:1}.story-shell__error.svelte-1wj95mh{
color:var(--story-error,#ffb3c1);
font-size:13px}.story-shell__loading.svelte-1wj95mh{
align-items:center;
gap:8px;
display:inline-flex}.story-shell__spinner.svelte-1wj95mh{
border:2px solid color-mix(in srgb, var(--story-accent,#9a57ff) 30%, transparent);
border-top-color:var(--story-accent,#9a57ff);
border-radius:50%;
width:14px;
height:14px;
animation:.8s linear infinite svelte-1wj95mh-spin}@keyframes svelte-1wj95mh-spin{
to{
transform:rotate(360deg)}}@container mango-viewer (width<=1024px){
.story-shell.svelte-1wj95mh{
grid-template-rows:minmax(0,1fr) auto auto;
overflow:hidden}.story-shell__body.svelte-1wj95mh{
grid-template-rows:minmax(220px,1fr) auto;
grid-template-columns:1fr;
height:100%;
overflow:hidden}.story-shell__stage-wrap.svelte-1wj95mh{
flex:none;
min-height:0}.story-shell__sidebar.svelte-1wj95mh{
border-top:1px solid var(--story-line,#ffffff24);
border-left:0;
overflow:hidden}.story-shell__playback.svelte-1wj95mh{
order:-1}.story-shell__title.svelte-1wj95mh{
font-size:clamp(32px,8cqw,48px)}.story-shell__description.svelte-1wj95mh{
font-size:clamp(15px,3.2cqw,20px)}}@container mango-viewer (width>=701px) and (width<=1024px){
.story-shell__sidebar.svelte-1wj95mh{
grid-template-rows:auto auto;
grid-template-columns:minmax(0,1fr);
padding:10px 16px 12px;
display:grid}.story-shell__playback.svelte-1wj95mh{
border-bottom:1px solid var(--story-line,#ffffff24);
grid-area:1/1;
align-self:auto;
width:100%;
min-width:0;
margin-top:0;
padding:0 0 8px}.story-shell__metadata.svelte-1wj95mh{
grid-area:2/1;
min-width:0;
padding-top:10px}.story-shell__title.svelte-1wj95mh{
margin:4px 0 6px;
font-size:clamp(30px,4cqw,36px)}.story-shell__accent.svelte-1wj95mh{
margin-bottom:8px}.story-shell__description.svelte-1wj95mh{
-webkit-line-clamp:3;
-webkit-box-orient:vertical;
margin:0;
font-size:clamp(14px,1.8cqw,18px);
line-height:1.4;
display:-webkit-box;
overflow:hidden}.story-shell__play-btn.svelte-1wj95mh{
width:58px;
height:58px}.story-shell__transport-btn.svelte-1wj95mh{
width:42px;
height:42px}.story-shell__timeline.svelte-1wj95mh{
margin-top:8px}.story-shell__footer.svelte-1wj95mh{
grid-auto-columns:72px;
padding:8px 10px 6px}}@container mango-viewer (width<=700px){
.story-shell.svelte-1wj95mh{
border-radius:min(var(--story-shell-radius,18px), 14px)}.story-shell__footer.svelte-1wj95mh{
grid-auto-columns:64px;
gap:10px;
min-height:0;
padding-inline:10px}.story-shell__stage-wrap.svelte-1wj95mh{
min-height:0}.story-shell__body.svelte-1wj95mh{
grid-template-rows:minmax(180px,1fr) auto}.story-shell__sidebar.svelte-1wj95mh{
padding:10px 12px}.story-shell__chapter-label.svelte-1wj95mh{
font-size:15px}.story-shell__title.svelte-1wj95mh{
margin:4px 0 6px;
font-size:clamp(27px,8cqw,34px)}.story-shell__accent.svelte-1wj95mh{
height:3px;
margin-bottom:7px}.story-shell__description.svelte-1wj95mh{
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
margin:0 0 7px;
font-size:14px;
line-height:1.35;
display:-webkit-box;
overflow:hidden}.story-shell__playback.svelte-1wj95mh{
border-bottom:1px solid var(--story-line,#ffffff24);
order:-1;
margin-top:0;
padding:3px 0 9px}.story-shell__metadata.svelte-1wj95mh{
padding-top:8px}.story-shell__transport.svelte-1wj95mh{
gap:10px}.story-shell__play-btn.svelte-1wj95mh{
width:58px;
height:58px}.story-shell__timeline.svelte-1wj95mh{
margin-top:8px}}@container mango-viewer (width<=1024px){
.story-shell__description--expanded.svelte-1wj95mh{
-webkit-line-clamp:unset;
display:block;
overflow:visible}.story-shell--metadata-expanded.svelte-1wj95mh{
overscroll-behavior-y:contain;
-webkit-overflow-scrolling:touch;
grid-template-rows:auto auto auto;
overflow-y:auto}.story-shell--metadata-expanded.svelte-1wj95mh .story-shell__body:where(.svelte-1wj95mh){
grid-template-rows:minmax(260px,45cqw) auto;
height:max-content;
min-height:max-content;
overflow:visible}.story-shell--metadata-expanded.svelte-1wj95mh .story-shell__sidebar:where(.svelte-1wj95mh){
overflow:visible}}@container mango-viewer (height<=500px) and (width>=560px){
.story-shell__body.svelte-1wj95mh{
grid-template-rows:minmax(0,1fr);
grid-template-columns:minmax(0,1fr) minmax(280px,38%)}.story-shell__stage-wrap.svelte-1wj95mh{
grid-area:1/1}.story-shell__sidebar.svelte-1wj95mh{
border-top:0;
border-left:1px solid var(--story-line,#ffffff24);
grid-area:1/2;
padding:8px 12px;
display:flex}.story-shell__chapter-label.svelte-1wj95mh{
font-size:14px}.story-shell__title.svelte-1wj95mh{
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
margin:2px 0 4px;
font-size:26px;
display:-webkit-box;
overflow:hidden}.story-shell__accent.svelte-1wj95mh{
height:3px;
margin-bottom:5px}.story-shell__description.svelte-1wj95mh{
-webkit-line-clamp:1;
-webkit-box-orient:vertical;
margin:0;
font-size:13px;
line-height:1.3;
display:-webkit-box;
overflow:hidden}.story-shell__description--expanded.svelte-1wj95mh{
-webkit-line-clamp:unset;
display:block;
overflow:visible}.story-shell__playback.svelte-1wj95mh{
order:initial;
border-bottom:0;
grid-area:auto;
align-self:auto;
margin-top:auto;
padding-top:2px}.story-shell__transport-btn.svelte-1wj95mh{
width:38px;
height:38px}.story-shell__play-btn.svelte-1wj95mh{
width:50px;
height:50px}.story-shell__timeline.svelte-1wj95mh{
margin-top:5px}.story-shell__footer.svelte-1wj95mh{
grid-auto-columns:56px;
gap:8px;
padding:6px 10px 4px}.story-shell__chapter-thumb.svelte-1wj95mh{
border-radius:10px;
min-height:56px}.story-shell__chapter-number.svelte-1wj95mh{
margin-top:3px;
font-size:12px}.story-shell__dot.svelte-1wj95mh{
margin-top:2px}}@container mango-viewer (height<=560px) and (width<=559px){
.story-shell__body.svelte-1wj95mh{
grid-template-rows:minmax(120px,1fr) auto}.story-shell__sidebar.svelte-1wj95mh{
padding:6px 12px 8px}.story-shell__title.svelte-1wj95mh{
-webkit-line-clamp:1;
margin:1px 0 3px;
font-size:22px}.story-shell__accent.svelte-1wj95mh{
margin-bottom:4px}.story-shell__description.svelte-1wj95mh{
-webkit-line-clamp:1;
margin:0 0 4px}.story-shell__transport-btn.svelte-1wj95mh{
width:36px;
height:36px}.story-shell__play-btn.svelte-1wj95mh{
width:46px;
height:46px}.story-shell__timeline.svelte-1wj95mh{
margin-top:4px}.story-shell__footer.svelte-1wj95mh{
grid-auto-columns:46px;
gap:6px;
padding:4px 10px 3px}.story-shell__chapter-thumb.svelte-1wj95mh{
border-radius:8px;
min-height:46px}.story-shell__chapter-number.svelte-1wj95mh{
margin-top:2px;
font-size:11px}.story-shell__dot.svelte-1wj95mh{
width:5px;
height:5px;
margin-top:2px}}@container mango-viewer (height<=430px) and (width<=559px){
.story-shell.svelte-1wj95mh{
grid-template-rows:minmax(0,1fr) auto}.story-shell__footer.svelte-1wj95mh{
display:none}.story-shell__body.svelte-1wj95mh{
grid-template-rows:minmax(110px,1fr) auto}.story-shell__transport-btn.svelte-1wj95mh{
width:34px;
height:34px}.story-shell__play-btn.svelte-1wj95mh{
width:44px;
height:44px}.story-shell__timeline.svelte-1wj95mh{
margin-top:3px}}@container mango-viewer (height<=360px){
.story-shell__sidebar.svelte-1wj95mh{
padding:6px 10px}.story-shell__chapter-label.svelte-1wj95mh{
font-size:13px}.story-shell__title.svelte-1wj95mh{
-webkit-line-clamp:1;
margin:1px 0 3px;
font-size:22px}.story-shell__accent.svelte-1wj95mh{
margin-bottom:4px}.story-shell__transport-btn.svelte-1wj95mh{
width:34px;
height:34px}.story-shell__play-btn.svelte-1wj95mh{
width:44px;
height:44px}.story-shell__timeline.svelte-1wj95mh{
margin-top:3px}.story-shell__timeline-text.svelte-1wj95mh{
font-size:11px}.story-shell__footer.svelte-1wj95mh{
grid-auto-columns:46px;
gap:6px;
padding:4px 8px 3px}.story-shell__chapter-thumb.svelte-1wj95mh{
border-radius:8px;
min-height:46px}.story-shell__chapter-number.svelte-1wj95mh{
margin-top:2px;
font-size:11px}}.story-annotation-overlay.svelte-14qi414{
box-sizing:border-box;
pointer-events:none;
position:absolute;
inset:0}.story-annotation-overlay__note.svelte-14qi414{
box-sizing:border-box;
max-width:100%;
max-height:100%;
padding:calc(10px * var(--annotation-scale,1)) calc(12px * var(--annotation-scale,1));
border-radius:calc(12px * var(--annotation-scale,1));
background:var(--story-note-bg,#ffffffeb);
color:var(--ink,var(--story-note-text,#2b2520));
font:inherit;
font-size:calc(13px * var(--annotation-scale,1));
text-align:center;
pointer-events:none;
border:0;
justify-content:center;
align-items:center;
line-height:1.4;
display:flex;
position:absolute;
overflow:hidden;
box-shadow:0 12px 28px #2b252029}.story-annotation-overlay__note--editable.svelte-14qi414{
pointer-events:auto;
cursor:move;
outline:1px solid color-mix(in srgb, var(--accent,#e07a3f) 72%, white)}.story-annotation-overlay__note--editable.svelte-14qi414:hover,.story-annotation-overlay__note--editable.svelte-14qi414:focus-visible{
outline:2px solid var(--accent,#e07a3f);
outline-offset:2px}.story-annotation-overlay__drawings.svelte-14qi414{
width:100%;
height:100%;
position:absolute;
inset:0;
overflow:visible}.story-annotation-overlay__shape.svelte-14qi414,.story-annotation-overlay__line.svelte-14qi414{
vector-effect:non-scaling-stroke;
stroke:var(--accent,#e07a3f);
stroke-width:2px}.story-annotation-overlay__shape.svelte-14qi414{
fill:color-mix(in srgb, var(--accent,#e07a3f) 16%, transparent)}.story-annotation-overlay__line.svelte-14qi414{
fill:none;
stroke-linecap:round;
stroke-linejoin:round}.story-annotation-overlay__markers.svelte-14qi414{
pointer-events:none;
position:absolute;
inset:0}.story-annotation-overlay__point.svelte-14qi414{
background:var(--accent,#e07a3f);
color:#fff;
border:2px solid #fff;
border-radius:999px;
place-items:center;
width:18px;
height:18px;
font-size:10px;
font-weight:850;
line-height:1;
display:grid;
position:absolute;
transform:translate(-50%,-50%);
box-shadow:0 2px 6px #00000059}.story-annotation-overlay__label.svelte-14qi414{
max-width:40%;
padding:calc(3px * var(--annotation-scale,1)) calc(7px * var(--annotation-scale,1));
border:1px solid var(--accent,#e07a3f);
border-radius:calc(7px * var(--annotation-scale,1));
background:var(--story-label-bg,#14100cd1);
color:var(--story-label-text,#fff);
font-size:calc(11px * var(--annotation-scale,1));
white-space:nowrap;
text-overflow:ellipsis;
line-height:1.3;
position:absolute;
overflow:hidden;
transform:translate(-50%,8px)}.story-annotation-overlay__label--rectangle.svelte-14qi414{
box-sizing:border-box;
color:#fff;
white-space:normal;
overflow-wrap:anywhere;
text-align:center;
text-overflow:clip;
-webkit-text-stroke-color:#0f172ae6;
paint-order:stroke fill;
background:0 0;
border:0;
border-radius:0;
justify-content:center;
align-items:center;
font-weight:700;
display:flex;
overflow:hidden;
transform:translate(-50%,-50%)}.left-sidebar.svelte-1rad5mv{
align-content:start;
gap:12px;
display:grid}.left-sidebar__label.svelte-1rad5mv{
letter-spacing:.1em;
text-transform:uppercase;
color:var(--viewer-muted);
margin:0;
font-size:11px}.left-sidebar__tools.svelte-1rad5mv,.left-sidebar__layers.svelte-1rad5mv{
gap:8px;
display:grid}.left-sidebar__tool.svelte-1rad5mv{
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
cursor:pointer;
text-align:left;
background:#ffffff0d;
border-radius:10px;
justify-content:space-between;
align-items:center;
gap:8px;
min-height:38px;
padding:8px 10px;
display:flex}.left-sidebar__tool--active.svelte-1rad5mv{
background:#2ac7ff29;
border-color:#2ac7ffbf}@container mango-viewer (width<=1024px){
.left-sidebar__tools.svelte-1rad5mv{
flex-wrap:wrap;
gap:6px;
display:flex}.left-sidebar__tool.svelte-1rad5mv{
flex:auto;
justify-content:center;
min-width:0;
min-height:34px;
padding:6px 10px}}.left-sidebar__layers-head.svelte-1rad5mv{
justify-content:space-between;
align-items:center;
display:flex}.left-sidebar__plus.svelte-1rad5mv{
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
background:#ffffff14;
border-radius:8px;
width:26px;
height:26px}.left-sidebar__layer.svelte-1rad5mv{
border:1px solid var(--viewer-panel-border);
background:#ffffff0d;
border-radius:10px;
align-items:center;
gap:6px;
min-height:38px;
padding:4px 6px;
display:flex}.left-sidebar__layer--hidden.svelte-1rad5mv{
opacity:.62}.left-sidebar__layer-toggle.svelte-1rad5mv{
min-width:0;
color:var(--viewer-text);
cursor:pointer;
text-align:left;
background:0 0;
border:none;
border-radius:8px;
flex:1;
align-items:center;
gap:8px;
min-height:30px;
padding:0 4px;
display:flex}.left-sidebar__dot.svelte-1rad5mv{
border-radius:50%;
flex:none;
width:10px;
height:10px}.left-sidebar__eye.svelte-1rad5mv{
justify-content:center;
align-items:center;
display:flex}.left-sidebar__eye-svg.svelte-1rad5mv{
color:var(--viewer-muted);
display:block}.left-sidebar__layer-name.svelte-1rad5mv{
text-overflow:ellipsis;
white-space:nowrap;
flex:1;
min-width:0;
overflow:hidden}.left-sidebar__layer-color.svelte-1rad5mv{
border:1px solid var(--viewer-panel-border);
cursor:pointer;
background:0 0;
border-radius:8px;
width:28px;
height:28px;
padding:0}.right-inspector.svelte-1hh10hh{
flex-direction:column;
gap:12px;
height:100%;
min-height:0;
display:flex}.right-inspector__head.svelte-1hh10hh{
border-bottom:1px solid var(--viewer-panel-border);
justify-content:space-between;
align-items:baseline;
gap:8px;
padding-bottom:8px;
display:flex}.right-inspector__head.svelte-1hh10hh h3:where(.svelte-1hh10hh){
margin:0;
font-size:14px}.right-inspector__head.svelte-1hh10hh span:where(.svelte-1hh10hh){
color:var(--viewer-muted);
font-size:11px}.right-inspector__scroll.svelte-1hh10hh{
flex-direction:column;
flex:1;
gap:4px;
padding-right:4px;
display:flex;
overflow-y:auto}.inspector-accordion.svelte-1hh10hh{
border-bottom:1px solid #ffffff0f;
padding:4px 0}.inspector-accordion__summary.svelte-1hh10hh{
text-transform:uppercase;
letter-spacing:.05em;
color:var(--viewer-text);
cursor:pointer;
-webkit-user-select:none;
user-select:none;
justify-content:space-between;
align-items:center;
padding:8px 4px;
font-size:12px;
font-weight:600;
list-style:none;
display:flex}.inspector-accordion__summary.svelte-1hh10hh::-webkit-details-marker{
display:none}.inspector-accordion__summary.svelte-1hh10hh:after{
content:\"▸\";
color:var(--viewer-muted);
font-size:10px;
transition:transform .2s}.inspector-accordion[open].svelte-1hh10hh .inspector-accordion__summary:where(.svelte-1hh10hh):after{
transform:rotate(90deg)}.inspector-accordion__content.svelte-1hh10hh{
gap:12px;
padding:10px 4px 16px;
display:grid}.right-inspector__group.svelte-1hh10hh{
gap:6px;
display:grid}.right-inspector__group.svelte-1hh10hh label:where(.svelte-1hh10hh){
text-transform:uppercase;
letter-spacing:.08em;
color:var(--viewer-muted);
font-size:10px}.right-inspector__group.svelte-1hh10hh input:where(.svelte-1hh10hh),.right-inspector__group.svelte-1hh10hh select:where(.svelte-1hh10hh),.right-inspector__group.svelte-1hh10hh textarea:where(.svelte-1hh10hh){
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
font:inherit;
box-sizing:border-box;
background:#ffffff0a;
border-radius:8px;
width:100%;
padding:8px 10px;
font-size:12px}.right-inspector__group.svelte-1hh10hh select:where(.svelte-1hh10hh){
appearance:none;
background-image:url(\"data:image/svg+xml;
charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");
background-position:right 10px center;
background-repeat:no-repeat;
background-size:14px;
padding-right:32px}.tag-editor.svelte-1hh10hh{
gap:8px;
display:flex}.tag-editor.svelte-1hh10hh input:where(.svelte-1hh10hh){
flex:1;
min-width:0}.tag-editor__add.svelte-1hh10hh{
border:1px solid var(--viewer-panel-border);
color:var(--viewer-text);
cursor:pointer;
background:#ffffff0f;
border-radius:8px;
min-height:34px;
padding:0 12px;
font-size:12px}.tag-list.svelte-1hh10hh{
flex-wrap:wrap;
gap:6px;
display:flex}.tag-pill.svelte-1hh10hh{
color:var(--viewer-text);
cursor:pointer;
background:#2ac7ff29;
border:1px solid #2ac7ff73;
border-radius:999px;
align-items:center;
gap:6px;
padding:4px 8px;
font-size:11px;
display:inline-flex}.tag-pill.svelte-1hh10hh span:where(.svelte-1hh10hh){
opacity:.75;
font-weight:700}.right-inspector__actions.svelte-1hh10hh{
border-top:1px solid var(--viewer-panel-border);
gap:8px;
padding-top:12px;
display:grid}.right-inspector__save.svelte-1hh10hh{
color:#fff;
cursor:pointer;
background:#ff6b35;
border:none;
border-radius:10px;
min-height:38px;
font-size:13px;
font-weight:600;
transition:background .2s}.right-inspector__save.svelte-1hh10hh:hover{
background:#ff8552}.right-inspector__delete.svelte-1hh10hh{
color:#ffb3b3;
cursor:pointer;
background:#ff6b6b14;
border:1px solid #ff6b6b66;
border-radius:10px;
min-height:38px;
font-size:13px;
transition:background .2s}.right-inspector__delete.svelte-1hh10hh:hover{
background:#ff6b6b29}.right-inspector__empty.svelte-1hh10hh{
color:var(--viewer-muted);
margin:0;
font-size:12px}.annotation-table.svelte-egmfhz{
gap:8px;
min-height:0;
display:grid}.annotation-table__toolbar.svelte-egmfhz{
justify-content:space-between;
align-items:center;
gap:10px;
display:flex}.annotation-table__toolbar.svelte-egmfhz h3:where(.svelte-egmfhz){
margin:0;
font-size:14px}.annotation-table__toolbar.svelte-egmfhz input:where(.svelte-egmfhz){
border:1px solid var(--viewer-panel-border);
min-width:220px;
color:var(--viewer-text);
background:#ffffff0f;
border-radius:10px;
padding:8px 10px}.annotation-table__wrap.svelte-egmfhz{
border:1px solid var(--viewer-panel-border);
border-radius:12px;
overflow:auto}table.svelte-egmfhz{
border-collapse:collapse;
width:100%;
font-size:12px}th.svelte-egmfhz,td.svelte-egmfhz{
text-align:left;
border-bottom:1px solid #ffffff14;
padding:8px 10px}tr.svelte-egmfhz{
cursor:pointer}tr.active.svelte-egmfhz{
background:#2ac7ff24}.annotation-workspace.svelte-5l63lu{
grid-template-columns:240px minmax(0,1fr) 280px;
gap:12px;
height:100%;
min-height:0;
display:grid}.annotation-workspace__left.svelte-5l63lu,.annotation-workspace__right.svelte-5l63lu,.annotation-workspace__bottom.svelte-5l63lu{
border:1px solid var(--viewer-panel-border);
background:#ffffff08;
border-radius:14px;
min-height:0;
padding:10px;
overflow:auto}.annotation-workspace__center.svelte-5l63lu{
grid-template-rows:minmax(0,1fr) 220px;
gap:10px;
min-height:0;
display:grid}.annotation-workspace__stage.svelte-5l63lu{
min-height:0;
overflow:hidden}@container mango-viewer (width<=1024px){
.annotation-workspace.svelte-5l63lu{
-webkit-overflow-scrolling:touch;
grid-template-rows:minmax(220px,32%) minmax(520px,1fr) minmax(220px,32%);
grid-template-columns:1fr;
height:100%;
overflow:hidden auto}.annotation-workspace__center.svelte-5l63lu{
grid-template-rows:minmax(300px,1fr) 220px}}@container mango-viewer (width<=700px){
.annotation-workspace.svelte-5l63lu{
grid-template-rows:280px 520px 280px}}.panel-stack--left:has(.story-sidebar){
box-shadow:none!important;
background:0 0!important;
border:none!important;
flex-direction:column!important;
height:100%!important;
min-height:0!important;
padding:0!important;
display:flex!important;
overflow:hidden!important}.panel-stack--left:has(.story-sidebar)>.plugin-slot{
flex-direction:column!important;
gap:0!important;
height:100%!important;
min-height:0!important;
display:flex!important}.panel-stack--left:has(.story-sidebar) .plugin-panel{
flex-direction:column!important;
height:100%!important;
min-height:0!important;
display:flex!important}.panel-stack--left:has(.story-sidebar) .plugin-panel__panel{
height:100%!important;
min-height:0!important;
box-shadow:none!important;
background:0 0!important;
border:none!important;
flex-direction:column!important;
padding:0!important;
display:flex!important}.panel-stack--left:has(.story-sidebar) .plugin-panel__title{
display:none!important}.panel-stack--left:has(.story-sidebar) .plugin-panel__body{
flex-direction:column!important;
height:100%!important;
min-height:0!important;
display:flex!important}.story-sidebar.svelte-20ocan{
background:var(--story-sidebar-bg,var(--viewer-panel,#121922));
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
border-right:1px solid var(--story-sidebar-border,var(--viewer-panel-border,#ffffff14));
box-sizing:border-box;
border:1px solid var(--story-sidebar-border,var(--viewer-panel-border,#ffffff14));
border-radius:18px;
flex-direction:column;
gap:18px;
height:100%;
max-height:100%;
padding:18px;
transition:opacity .2s;
display:flex;
position:relative;
overflow:hidden}.story-sidebar--embedded.svelte-20ocan{
border-right:none}.story-sidebar--disabled.svelte-20ocan{
opacity:.45;
pointer-events:none}.story-sidebar__label.svelte-20ocan{
letter-spacing:.12em;
text-transform:uppercase;
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9));
font-size:12px}.story-sidebar__header.svelte-20ocan{
text-transform:uppercase;
letter-spacing:.16em;
color:var(--story-sidebar-muted,var(--viewer-muted,#ffffffa6));
justify-content:space-between;
align-items:center;
font-size:11px;
display:flex}.story-sidebar__header-add.svelte-20ocan{
color:var(--viewer-accent-2,#2ac7ff);
cursor:pointer;
background:0 0;
border:0;
align-items:center;
gap:5px;
padding:5px;
font-size:11px;
font-weight:700;
display:inline-flex}.story-sidebar__header-add.svelte-20ocan svg{
width:15px;
height:15px}.story-sidebar__empty.svelte-20ocan{
border:1px solid var(--viewer-panel-border,#ffffff14);
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9));
border-radius:12px;
gap:6px;
padding:14px;
font-size:12px;
display:grid}.story-sidebar__empty.svelte-20ocan strong:where(.svelte-20ocan){
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4))}.story-sidebar__empty.svelte-20ocan span:where(.svelte-20ocan){
line-height:1.45}.story-sidebar__chapters.svelte-20ocan{
flex-direction:column;
flex:auto;
gap:10px;
min-height:0;
display:flex}.story-sidebar__list.svelte-20ocan{
flex-direction:column;
flex:auto;
gap:10px;
min-height:0;
margin-top:6px;
padding-right:4px;
display:flex;
overflow-y:auto}.story-sidebar__row.svelte-20ocan{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--viewer-surface,#151d26) 60%, transparent);
border-radius:12px;
grid-template-columns:minmax(0,1fr) auto;
align-items:start;
gap:4px;
padding:10px;
display:grid;
position:relative}.story-sidebar__row-select.svelte-20ocan{
min-width:0;
color:inherit;
text-align:left;
cursor:pointer;
background:0 0;
border:0;
grid-template-columns:auto minmax(0,1fr);
align-items:start;
gap:10px;
padding:0;
display:grid}.story-sidebar__row--draggable.svelte-20ocan,.story-sidebar__row--draggable.svelte-20ocan .story-sidebar__row-select:where(.svelte-20ocan){
cursor:grab;
cursor:-webkit-grab}.story-sidebar__row--active.svelte-20ocan{
border-color:var(--viewer-accent-2,#2ac7ff);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 6%, var(--viewer-surface,#151d26))}.story-sidebar__row--dragging.svelte-20ocan{
opacity:.65;
cursor:grabbing;
cursor:-webkit-grabbing}.story-sidebar__row--dragging.svelte-20ocan .story-sidebar__row-select:where(.svelte-20ocan){
cursor:grabbing;
cursor:-webkit-grabbing}.story-sidebar__row--drop-before.svelte-20ocan:before,.story-sidebar__row--drop-after.svelte-20ocan:after{
content:\"\";
background:var(--accent,var(--story-builder-accent,#e07a3f));
height:2px;
position:absolute;
left:10px;
right:10px}.story-sidebar__row--drop-before.svelte-20ocan:before{
top:-2px}.story-sidebar__row--drop-after.svelte-20ocan:after{
bottom:-2px}.story-sidebar__thumbnail-wrap.svelte-20ocan{
width:56px;
height:56px;
position:relative}.story-sidebar__thumbnail.svelte-20ocan{
object-fit:cover;
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
border-radius:8px;
width:56px;
height:56px;
display:block}.story-sidebar__thumbnail--placeholder.svelte-20ocan{
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 75%, transparent);
place-items:center;
font-size:14px;
font-weight:600;
display:grid}.story-sidebar__thumbnail-index.svelte-20ocan{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 88%, transparent);
min-width:18px;
height:18px;
color:var(--viewer-panel,#13202d);
box-sizing:border-box;
border-radius:5px;
place-items:center;
padding:0 3px;
font-size:9px;
font-weight:800;
display:grid;
position:absolute;
top:3px;
left:3px}.story-sidebar__row-content.svelte-20ocan{
gap:4px;
min-width:0;
display:grid}.story-sidebar__row-index.svelte-20ocan{
color:var(--story-sidebar-muted,var(--viewer-muted,#ffffffa6));
font-size:12px}.story-sidebar__row-title.svelte-20ocan{
white-space:nowrap;
text-overflow:ellipsis;
font-size:14px;
font-weight:600;
overflow:hidden}.story-sidebar__row-duration.svelte-20ocan{
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9));
justify-self:start;
align-items:center;
gap:5px;
font-size:12px;
display:inline-flex}.story-sidebar__row-duration.svelte-20ocan svg{
width:13px;
height:13px}.story-sidebar__row-error.svelte-20ocan{
color:var(--viewer-danger,#ffb8b8);
justify-self:start;
font-size:11px;
font-weight:650}.story-sidebar__row-menu.svelte-20ocan{
align-self:start;
position:relative}.story-sidebar__menu-button.svelte-20ocan{
color:inherit;
cursor:pointer;
background:0 0;
border:none;
border-radius:8px;
min-width:30px;
padding:6px}.story-sidebar__menu-button.svelte-20ocan svg{
width:16px;
height:16px}.story-sidebar__menu-button.svelte-20ocan:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent)}.story-sidebar__menu-popover.svelte-20ocan{
background:color-mix(in srgb, var(--viewer-panel,#121922) 98%, transparent);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
z-index:5;
border-radius:10px;
min-width:120px;
padding:6px;
position:absolute;
top:32px;
right:0;
box-shadow:0 10px 24px #00000059}.story-sidebar__menu-action.svelte-20ocan{
text-align:left;
cursor:pointer;
width:100%;
color:inherit;
background:0 0;
border:none;
border-radius:8px;
padding:8px 10px;
font-size:12px}.story-sidebar__menu-action.svelte-20ocan:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent)}.story-sidebar__menu-action.svelte-20ocan:disabled{
opacity:.4;
cursor:not-allowed}.story-sidebar__menu-action--danger.svelte-20ocan{
color:var(--viewer-danger,#ff9aa2)}.story-sidebar__reorder.svelte-20ocan{
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9));
justify-content:center;
align-items:center;
gap:7px;
padding:8px;
font-size:11px;
display:flex}.story-sidebar__reorder.svelte-20ocan svg{
width:15px;
height:15px}.story-sidebar__debug.svelte-20ocan{
color:var(--story-sidebar-muted,var(--viewer-muted,#fff9));
word-break:break-word;
gap:6px;
font-size:11px;
display:grid}.story-sidebar__debug-output.svelte-20ocan{
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
font-size:11px}.story-sidebar__error.svelte-20ocan{
background:color-mix(in srgb, var(--viewer-accent,#ff4fa2) 12%, transparent);
color:var(--story-sidebar-text,var(--viewer-text,#e8edf4));
border:1px solid color-mix(in srgb, var(--viewer-accent,#ff4fa2) 30%, transparent);
border-radius:12px;
padding:10px 12px;
font-size:12px}.story-sidebar__modal-backdrop.svelte-20ocan{
z-index:15;
background:#00000073;
place-items:center;
padding:16px;
display:grid;
position:absolute;
inset:0}.story-sidebar__modal.svelte-20ocan{
background:var(--viewer-panel,#111922);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
border-radius:12px;
gap:12px;
width:100%;
max-width:280px;
padding:14px;
display:grid}.story-sidebar__modal-text.svelte-20ocan{
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 94%, transparent);
font-size:13px}.story-sidebar__modal-actions.svelte-20ocan{
justify-content:flex-end;
gap:8px;
display:flex}.story-sidebar__modal-button.svelte-20ocan{
cursor:pointer;
border:none;
border-radius:8px;
padding:8px 10px;
font-size:12px}.story-sidebar__modal-button--cancel.svelte-20ocan{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 92%, transparent)}.story-sidebar__modal-button--danger.svelte-20ocan{
background:color-mix(in srgb, var(--viewer-danger,#ffb8b8) 20%, transparent);
color:var(--viewer-danger,#ffb8b8)}.narration-panel.svelte-14kn6em{
pointer-events:none;
z-index:12;
justify-content:flex-end;
display:flex;
position:absolute;
inset:0}.narration-panel[hidden].svelte-14kn6em{
display:none}.narration-panel--docked.svelte-14kn6em{
pointer-events:auto;
height:100%;
display:block;
position:relative;
inset:auto}.narration-panel--docked.svelte-14kn6em .narration-panel__panel:where(.svelte-14kn6em){
background:var(--viewer-panel,#121922);
border-left:0;
width:100%;
max-width:none}.narration-panel--docked.svelte-14kn6em .narration-overlay__header:where(.svelte-14kn6em){
grid-template-columns:1fr auto}.narration-panel__panel.svelte-14kn6em{
pointer-events:auto;
border-left:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
width:clamp(360px,42cqw,500px);
max-width:92cqw;
height:100%;
min-height:100%;
color:var(--viewer-text,#e8edf4);
box-shadow:none;
box-sizing:border-box;
border-radius:0;
align-self:stretch;
position:relative;
overflow:auto}.narration-overlay__header.svelte-14kn6em{
z-index:3;
background:var(--viewer-panel,#121922);
border-bottom:1px solid var(--viewer-panel-border,#ffffff14);
grid-template-columns:auto 1fr auto;
align-items:center;
gap:12px;
min-height:72px;
padding:16px 18px;
display:grid;
position:sticky;
top:0}.narration-overlay__title.svelte-14kn6em{
color:var(--viewer-text,#e8edf4);
letter-spacing:.01em;
font-size:18px;
font-weight:650}.narration-overlay__subtitle.svelte-14kn6em{
color:var(--viewer-muted,#9aa6b2);
margin-top:3px;
font-size:12px;
line-height:1.35}.narration-overlay__back.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
border-radius:10px;
padding:8px 10px;
font-size:11px}.narration-overlay__close.svelte-14kn6em{
width:var(--viewer-close-button-size,28px);
height:var(--viewer-close-button-size,28px);
border:1px solid var(--viewer-close-button-border,#ffffff2e);
border-radius:var(--viewer-close-button-radius,10px);
background:var(--viewer-close-button-bg,#ffffff1a);
color:var(--viewer-close-button-color,#e8edf6e6);
font-size:var(--viewer-close-button-glyph-size,15px);
text-transform:none;
letter-spacing:0;
cursor:pointer;
justify-content:center;
align-items:center;
padding:0;
line-height:1;
transition:background-color .18s,border-color .18s,transform 80ms;
display:inline-flex}.narration-overlay__close.svelte-14kn6em:hover:not(:disabled){
background:var(--viewer-close-button-hover-bg,#ffffff29);
border-color:var(--viewer-close-button-hover-border,#ffffff57)}.narration-overlay__close.svelte-14kn6em:focus-visible{
outline:2px solid var(--viewer-close-button-focus-ring,#2ac7ff8c);
outline-offset:2px}.narration-overlay__close.svelte-14kn6em:active:not(:disabled){
transform:translateY(1px)}.narration-overlay__label.svelte-14kn6em{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--viewer-muted,#9aa6b2);
gap:6px;
font-size:11px;
display:grid}.narration-overlay__input-shell.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
border-radius:10px;
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:10px;
min-height:44px;
padding:0 12px;
display:grid}.narration-overlay__input-shell.svelte-14kn6em:focus-within{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
box-shadow:0 0 0 2px color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 18%, transparent)}.narration-overlay__input-shell.svelte-14kn6em svg{
width:16px;
height:16px;
color:var(--viewer-muted,#9aa6b2)}.narration-overlay__input.svelte-14kn6em{
width:100%;
min-width:0;
color:var(--viewer-text,#e8edf4);
box-sizing:border-box;
background:0 0;
border:0;
outline:none;
padding:11px 0;
font-size:13px}.narration-overlay__input--standalone.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
border-radius:10px;
min-height:44px;
padding:10px 12px}.narration-overlay__input--standalone.svelte-14kn6em:focus{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
box-shadow:0 0 0 2px color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 18%, transparent)}.narration-overlay__input.svelte-14kn6em::placeholder{
color:color-mix(in srgb, var(--viewer-muted,#9aa6b2) 45%, transparent)}.narration-overlay__input.svelte-14kn6em:disabled{
opacity:.56;
cursor:not-allowed}.narration-overlay__warning.svelte-14kn6em{
border:1px solid color-mix(in srgb, var(--story-builder-accent,#e07a3f) 45%, transparent);
background:color-mix(in srgb, var(--story-builder-accent,#e07a3f) 10%, transparent);
color:var(--story-builder-accent-hover,#ffd2b2);
border-radius:9px;
margin:0;
padding:10px 12px;
font-size:12px;
line-height:1.4}.narration-overlay__player-shell.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
border-radius:10px;
align-items:center;
min-height:72px;
padding:12px;
display:flex}.narration-overlay__player.svelte-14kn6em{
width:100%;
min-height:48px;
color:var(--viewer-text,#e8edf4);
accent-color:var(--accent,var(--story-builder-accent,#e07a3f))}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-enclosure{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
text-shadow:none}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-panel{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
text-shadow:none}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-current-time-display{
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
-webkit-text-fill-color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
text-shadow:none;
filter:none}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-time-remaining-display{
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
-webkit-text-fill-color:color-mix(in srgb, var(--viewer-text,#e8edf4) 72%, transparent);
text-shadow:none;
filter:none}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-play-button{
filter:brightness(0)saturate()invert(92%)sepia(8%)saturate(356%)hue-rotate(184deg)brightness(98%)contrast(93%)}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-mute-button{
filter:brightness(0)saturate()invert(92%)sepia(8%)saturate(356%)hue-rotate(184deg)brightness(98%)contrast(93%)}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-fullscreen-button{
filter:brightness(0)saturate()invert(92%)sepia(8%)saturate(356%)hue-rotate(184deg)brightness(98%)contrast(93%)}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-timeline{
filter:brightness(0)saturate()invert(92%)sepia(8%)saturate(356%)hue-rotate(184deg)brightness(98%)contrast(93%)}.narration-overlay__player.svelte-14kn6em::-webkit-media-controls-volume-slider{
filter:brightness(0)saturate()invert(92%)sepia(8%)saturate(356%)hue-rotate(184deg)brightness(98%)contrast(93%)}.narration-overlay__row.svelte-14kn6em{
flex-wrap:wrap;
align-items:center;
gap:6px;
display:flex}.narration-overlay__button.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
min-height:42px;
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
white-space:nowrap;
border-radius:11px;
padding:8px 12px;
font-size:11px;
transition:background .16s,border-color .16s}.narration-overlay__button.svelte-14kn6em:disabled{
opacity:.5;
cursor:not-allowed}.narration-overlay__button--accent.svelte-14kn6em{
background:var(--accent,var(--story-builder-accent,#e07a3f));
color:#fff;
border-color:#0000;
width:100%}.narration-overlay__button.svelte-14kn6em:not(:disabled):hover{
background:color-mix(in srgb, var(--viewer-panel-strong,#1b242e) 82%, white)}.narration-overlay__button--accent.svelte-14kn6em:not(:disabled):hover{
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 86%, black)}.narration-overlay__form.svelte-14kn6em{
gap:22px;
padding:20px 18px 28px;
display:grid}.narration-overlay__section.svelte-14kn6em{
gap:12px;
display:grid}.narration-overlay__section--card.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-surface,#151d26);
border-radius:12px;
gap:18px;
padding:18px}.narration-overlay__section-title.svelte-14kn6em{
text-transform:uppercase;
letter-spacing:.14em;
color:var(--viewer-muted,#9aa6b2);
font-size:12px;
font-weight:700}.narration-overlay__language-tabs.svelte-14kn6em{
flex-wrap:wrap;
gap:7px;
display:flex}.narration-overlay__language-tab.svelte-14kn6em{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
min-width:54px;
min-height:38px;
color:var(--viewer-muted,#9aa6b2);
font:inherit;
cursor:pointer;
border-radius:9px;
padding:8px 13px;
font-size:12px;
font-weight:700}.narration-overlay__language-tab--active.svelte-14kn6em{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 16%, transparent);
color:var(--viewer-text,#e8edf4)}.narration-overlay__source-heading.svelte-14kn6em{
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:12px;
display:grid}.narration-overlay__source-heading.svelte-14kn6em strong:where(.svelte-14kn6em),.narration-overlay__source-heading.svelte-14kn6em small:where(.svelte-14kn6em){
display:block}.narration-overlay__source-heading.svelte-14kn6em strong:where(.svelte-14kn6em){
color:var(--viewer-text,#e8edf4);
font-size:14px}.narration-overlay__source-heading.svelte-14kn6em small:where(.svelte-14kn6em){
color:var(--viewer-muted,#9aa6b2);
margin-top:3px;
font-size:12px;
line-height:1.4}.narration-overlay__source-icon.svelte-14kn6em{
background:var(--viewer-panel-strong,#1b242e);
width:38px;
height:38px;
color:var(--accent,var(--story-builder-accent,#e07a3f));
border-radius:10px;
justify-content:center;
align-items:center;
display:inline-flex}.narration-overlay__source-icon.svelte-14kn6em svg{
width:19px;
height:19px}.narration-overlay__source-icon--title.svelte-14kn6em{
font-family:Georgia,Times New Roman,serif;
font-size:20px;
font-weight:700}.narration-overlay__preview.svelte-14kn6em{
gap:8px;
display:grid}.narration-overlay__preview-label.svelte-14kn6em{
color:var(--viewer-muted,#9aa6b2);
letter-spacing:.12em;
text-transform:uppercase;
font-size:11px;
font-weight:700}.narration-overlay__hint.svelte-14kn6em{
color:var(--viewer-muted,#9aa6b2);
margin:0;
font-size:12px;
line-height:1.45}.narration-overlay__button.svelte-14kn6em svg{
width:16px;
height:16px}@media (width<=860px){
.narration-panel__panel.svelte-14kn6em{
border-radius:0;
width:100%;
max-width:100%}}.chapter-task-card.svelte-14vchp6{
border-bottom:1px solid var(--viewer-panel-border,#ffffff14);
background:0 0;
min-width:0}.chapter-task-card.svelte-14vchp6:last-child{
border-bottom:0}.chapter-task-card--attention.svelte-14vchp6{
box-shadow:inset 2px 0 color-mix(in srgb, var(--story-builder-accent,#e07a3f) 75%, transparent)}.chapter-task-card__button.svelte-14vchp6{
width:100%;
min-height:76px;
color:inherit;
text-align:left;
cursor:pointer;
background:0 0;
border:0;
grid-template-columns:auto minmax(0,1fr) auto;
align-items:center;
gap:12px;
padding:13px 16px;
display:grid}.chapter-task-card__button.svelte-14vchp6:hover:not(:disabled){
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 9%, transparent)}.chapter-task-card__button.svelte-14vchp6:focus-visible{
outline:2px solid var(--accent,var(--story-builder-accent,#e07a3f));
outline-offset:-3px}.chapter-task-card__button.svelte-14vchp6:disabled{
color:inherit;
cursor:not-allowed}.chapter-task-card__icon.svelte-14vchp6{
width:32px;
height:32px;
color:var(--viewer-text,#e8edf4);
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 3.5%, transparent);
border:1px solid var(--viewer-panel-border,#ffffff14);
border-radius:10px;
place-items:center;
display:grid}.chapter-task-card__icon.svelte-14vchp6 svg{
width:18px;
height:18px}.chapter-task-card__content.svelte-14vchp6,.chapter-task-card__heading.svelte-14vchp6,.chapter-task-card__status.svelte-14vchp6,.chapter-task-card__state.svelte-14vchp6{
display:flex}.chapter-task-card__content.svelte-14vchp6{
flex-direction:column;
gap:3px;
min-width:0}.chapter-task-card__heading.svelte-14vchp6,.chapter-task-card__status.svelte-14vchp6{
justify-content:flex-start;
align-items:center;
gap:8px}.chapter-task-card__heading.svelte-14vchp6 strong:where(.svelte-14vchp6){
font-size:13px}.chapter-task-card__advanced.svelte-14vchp6{
color:var(--viewer-muted,#9aa6b2);
letter-spacing:.1em;
text-transform:uppercase;
font-size:9px;
font-weight:700}.chapter-task-card__description.svelte-14vchp6{
color:var(--viewer-muted,#9aa6b2);
font-size:10px;
line-height:1.35}.chapter-task-card__status.svelte-14vchp6{
color:var(--viewer-muted,#9aa6b2);
flex-wrap:wrap;
font-size:10px}.chapter-task-card__state.svelte-14vchp6{
align-items:center;
gap:5px}.chapter-task-card__state.svelte-14vchp6 svg{
display:none}.chapter-task-card__state--complete.svelte-14vchp6{
color:var(--viewer-success,#72cea4)}.chapter-task-card__state--partial.svelte-14vchp6{
color:var(--viewer-warning,#e8b85f)}.chapter-task-card__state--attention.svelte-14vchp6{
color:var(--story-builder-accent-hover,#ff9d5c)}.chapter-task-card__unavailable.svelte-14vchp6{
display:none}.chapter-task-card__unavailable.svelte-14vchp6 small:where(.svelte-14vchp6){
color:color-mix(in srgb, var(--viewer-muted,#9aa6b2) 78%, white)}.chapter-task-card--disabled.svelte-14vchp6{
opacity:.76}.chapter-task-card__trail.svelte-14vchp6{
color:var(--viewer-muted,#9aa6b2);
align-items:center;
gap:10px;
display:inline-flex}.chapter-task-card__trail.svelte-14vchp6 svg{
width:15px;
height:15px}.chapter-task-card__trail--complete.svelte-14vchp6 svg:first-child{
color:var(--viewer-success,#55c993)}.chapter-task-card__trail--partial.svelte-14vchp6 svg:first-child{
color:var(--viewer-warning,#e8b85f)}.chapter-task-card__trail--attention.svelte-14vchp6 svg:first-child{
color:var(--story-builder-accent-hover,#ff9d5c)}.chapter-task-card--disabled.svelte-14vchp6 .chapter-task-card__trail:where(.svelte-14vchp6) svg:first-child{
color:var(--viewer-muted,#9aa6b2)}.chapter-dashboard.svelte-1frgpbh{
gap:14px;
display:grid}.chapter-dashboard__intro.svelte-1frgpbh h2:where(.svelte-1frgpbh){
clip:rect(0, 0, 0, 0);
white-space:nowrap;
border:0;
width:1px;
height:1px;
margin:-1px;
padding:0;
position:absolute;
overflow:hidden}.chapter-dashboard__intro.svelte-1frgpbh p:where(.svelte-1frgpbh){
color:var(--viewer-muted,#9aa6b2);
margin:0;
font-size:12px;
line-height:1.45}.chapter-dashboard__grid.svelte-1frgpbh{
border-top:1px solid var(--viewer-panel-border,#ffffff14);
border-bottom:1px solid var(--viewer-panel-border,#ffffff14);
flex-direction:column;
margin-inline:-14px;
display:flex}.motion-panel.svelte-6hkoeh{
gap:12px;
display:grid}.motion-panel__intro.svelte-6hkoeh{
justify-content:space-between;
align-items:center;
gap:12px;
display:flex}.motion-panel__intro.svelte-6hkoeh>div:where(.svelte-6hkoeh){
gap:3px;
display:grid}.motion-panel__intro.svelte-6hkoeh strong:where(.svelte-6hkoeh){
font-size:14px}.motion-panel__intro.svelte-6hkoeh span:where(.svelte-6hkoeh){
color:var(--viewer-muted,#9aa6b2);
font-size:11px;
line-height:1.4}.motion-panel__preview.svelte-6hkoeh{
background:var(--accent,var(--story-builder-accent,#e07a3f));
color:#fff;
cursor:pointer;
border:0;
border-radius:9px;
align-items:center;
gap:6px;
padding:9px 11px;
font-weight:700;
display:inline-flex}.motion-panel__preview.svelte-6hkoeh:disabled{
opacity:.4;
cursor:not-allowed}.motion-panel__feedback.svelte-6hkoeh{
border:1px solid color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 38%, transparent);
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 9%, transparent);
color:var(--viewer-muted,#9aa6b2);
border-radius:9px;
margin:0;
padding:8px 10px;
font-size:11px;
line-height:1.45}.motion-panel__preview.svelte-6hkoeh svg{
width:14px;
height:14px}.motion-panel__section.svelte-6hkoeh{
background:0 0;
border:0;
border-radius:0;
padding:0}.motion-panel__section.svelte-6hkoeh+.motion-panel__section:where(.svelte-6hkoeh){
border-top:1px solid var(--viewer-panel-border,#ffffff14);
padding-top:12px}.motion-panel__section-label.svelte-6hkoeh{
color:var(--viewer-muted,#9aa6b2);
letter-spacing:.1em;
text-transform:uppercase;
font-size:10px;
font-weight:700}.motion-panel__presets.svelte-6hkoeh{
grid-template-columns:repeat(3,minmax(0,1fr));
gap:6px;
display:grid}.motion-panel__presets.svelte-6hkoeh button:where(.svelte-6hkoeh){
border:1px solid var(--viewer-panel-border,#ffffff1a);
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
background:0 0;
border-radius:9px;
padding:9px 5px;
font-size:11px}.motion-panel__presets.svelte-6hkoeh button:where(.svelte-6hkoeh):disabled{
opacity:.42;
cursor:not-allowed}.motion-panel__presets.svelte-6hkoeh .motion-panel__preset--active:where(.svelte-6hkoeh){
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 12%, transparent);
color:var(--viewer-text,#e8edf4)}.motion-panel__heading.svelte-6hkoeh{
align-items:center;
gap:10px;
display:flex}.motion-panel__heading.svelte-6hkoeh>span:where(.svelte-6hkoeh):last-child{
gap:2px;
display:grid}.motion-panel__heading.svelte-6hkoeh strong:where(.svelte-6hkoeh){
font-size:13px}.motion-panel__heading.svelte-6hkoeh small:where(.svelte-6hkoeh){
color:var(--viewer-muted,#9aa6b2);
font-size:11px}.motion-panel__icon.svelte-6hkoeh{
width:32px;
height:32px;
color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 14%, transparent);
border-radius:9px;
place-items:center;
display:grid}.motion-panel.svelte-6hkoeh input:where(.svelte-6hkoeh){
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:var(--viewer-panel,#121922);
min-width:0;
color:inherit;
border-radius:8px;
padding:8px}.chapter-overlay{
pointer-events:none;
z-index:12;
justify-content:flex-end;
width:100%;
height:100%;
display:flex;
position:absolute;
inset:0}.chapter-overlay[hidden]{
display:none}.chapter-overlay--docked{
pointer-events:auto;
height:100%;
display:block;
position:relative;
inset:auto}.chapter-overlay--docked .chapter-overlay__panel{
background:var(--viewer-panel,#121922);
border-left:0;
width:100%;
max-width:none}.chapter-overlay--docked .chapter-overlay__header{
grid-template-columns:1fr;
padding:16px}.chapter-overlay--docked .chapter-overlay__form{
padding:14px 14px 22px}.chapter-overlay__scrim{
background:var(--viewer-well-bg,#050a162e);
pointer-events:auto;
position:absolute;
inset:0}.chapter-overlay__panel{
pointer-events:auto;
border-left:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
width:clamp(360px,42cqw,500px);
max-width:92cqw;
height:100%;
min-height:100%;
color:var(--viewer-text,#e8edf4);
box-shadow:none;
box-sizing:border-box;
border-radius:0;
align-self:stretch;
position:relative;
overflow:auto}.chapter-overlay__header{
z-index:3;
background:var(--viewer-panel,#121922);
border-bottom:1px solid var(--viewer-panel-border,#ffffff14);
grid-template-columns:auto 1fr auto;
align-items:center;
gap:12px;
padding:16px 18px;
display:grid;
position:sticky;
top:0}.chapter-overlay__eyebrow{
letter-spacing:.16em;
text-transform:uppercase;
color:var(--viewer-muted,#9aa6b2);
font-size:10px}.chapter-overlay__title{
color:var(--viewer-text,#e8edf4);
letter-spacing:.01em;
font-size:18px;
font-weight:600}.chapter-overlay__set-view{
border:1px solid color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 48%, transparent);
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 10%, transparent);
width:100%;
color:var(--viewer-text,#e8edf4);
text-align:left;
cursor:pointer;
border-radius:11px;
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:10px;
padding:10px 12px;
display:grid}.chapter-overlay__set-view:hover,.chapter-overlay__set-view:focus-visible{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 16%, transparent)}.chapter-overlay__set-view svg{
width:17px;
height:17px;
color:var(--accent,var(--story-builder-accent,#e07a3f))}.chapter-overlay__set-view span{
gap:2px;
display:grid}.chapter-overlay__set-view strong{
font-size:12px}.chapter-overlay__set-view small{
color:var(--viewer-muted,#9aa6b2);
font-size:10px;
line-height:1.35}.chapter-overlay__back{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
border-radius:10px;
padding:8px 10px;
font-size:11px}.chapter-overlay__close{
width:var(--viewer-close-button-size,28px);
height:var(--viewer-close-button-size,28px);
border:1px solid var(--viewer-close-button-border,#ffffff2e);
border-radius:var(--viewer-close-button-radius,10px);
background:var(--viewer-close-button-bg,#ffffff1a);
color:var(--viewer-close-button-color,#e8edf6e6);
font-size:var(--viewer-close-button-glyph-size,15px);
text-transform:none;
letter-spacing:0;
cursor:pointer;
justify-content:center;
align-items:center;
padding:0;
line-height:1;
transition:background-color .18s,border-color .18s,transform 80ms;
display:inline-flex}.chapter-overlay__close:hover:not(:disabled){
background:var(--viewer-close-button-hover-bg,#ffffff29);
border-color:var(--viewer-close-button-hover-border,#ffffff57)}.chapter-overlay__close:focus-visible{
outline:2px solid var(--viewer-close-button-focus-ring,#2ac7ff8c);
outline-offset:2px}.chapter-overlay__close:active:not(:disabled){
transform:translateY(1px)}.chapter-overlay__form{
gap:14px;
padding:14px 18px 22px;
display:grid}.chapter-overlay__body{
gap:12px;
display:grid}.chapter-overlay__dashboard-hint{
border-top:1px solid var(--viewer-panel-border,#ffffff14);
color:var(--viewer-muted,#9aa6b2);
margin-top:auto;
padding:14px 0 2px;
font-size:11px}.chapter-overlay__dashboard-save-compat{
display:none}.chapter-overlay__wide-tool-note{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 7%, transparent);
border-radius:10px;
gap:4px;
padding:13px;
display:grid}.chapter-overlay__wide-tool-note strong{
font-size:12px}.chapter-overlay__wide-tool-note span{
color:var(--viewer-muted,#9aa6b2);
font-size:10px;
line-height:1.4}.chapter-overlay__wide-tool-note ul{
color:var(--viewer-muted,#9aa6b2);
gap:7px;
margin:6px 0 0;
padding-left:17px;
font-size:10px;
line-height:1.45;
display:grid}.chapter-overlay__narration-compat{
display:none}.chapter-overlay__annotation-tools{
grid-template-columns:repeat(2,minmax(0,1fr));
gap:7px;
margin-top:11px;
display:grid}.chapter-overlay__annotation-tools button{
border:1px solid var(--viewer-panel-border,#ffffff1a);
min-width:0;
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
background:0 0;
border-radius:8px;
align-items:center;
gap:7px;
padding:8px;
font-size:10px;
display:flex}.chapter-overlay__annotation-tools button svg{
flex:none;
width:14px;
height:14px}.chapter-overlay__annotation-tools .chapter-overlay__annotation-tool--active{
border-color:var(--viewer-accent-2,#2ac7ff);
background:color-mix(in srgb, var(--viewer-accent-2,#2ac7ff) 12%, transparent);
color:var(--viewer-text,#e8edf4)}.chapter-overlay__annotation-editor{
gap:14px;
display:grid}.chapter-overlay__field{
color:var(--viewer-muted,#9aa6b2);
gap:7px;
font-size:10px;
font-weight:700;
display:grid}.chapter-overlay__translation-field{
grid-template-columns:28px minmax(0,1fr);
align-items:center;
gap:7px;
display:grid}.chapter-overlay__translation-field small{
color:var(--viewer-muted,#9aa6b2);
font-size:9px}.chapter-overlay__translation-field input{
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:var(--viewer-well-bg,#04090f59);
min-width:0;
color:var(--viewer-text,#e8edf4);
font:inherit;
border-radius:8px;
padding:8px 9px}.chapter-overlay__annotation-palette{
flex-wrap:wrap;
align-items:center;
gap:7px;
display:flex}.chapter-overlay__annotation-palette button{
background:var(--annotation-color);
cursor:pointer;
border:2px solid #0000;
border-radius:999px;
width:25px;
height:25px}.chapter-overlay__annotation-palette .chapter-overlay__annotation-swatch--active{
border-color:var(--viewer-text,#fff);
box-shadow:0 0 0 2px var(--annotation-color)}.chapter-overlay__annotation-palette input[type=color]{
border:1px solid var(--viewer-panel-border,#ffffff1a);
cursor:pointer;
background:0 0;
border-radius:7px;
width:30px;
height:27px;
padding:1px}.chapter-overlay__segmented-control{
gap:5px;
display:flex}.chapter-overlay__segmented-control button{
border:1px solid var(--viewer-panel-border,#ffffff1a);
color:var(--viewer-muted,#9aa6b2);
text-transform:capitalize;
cursor:pointer;
background:0 0;
border-radius:8px;
flex:1;
padding:7px}.chapter-overlay__segmented-control .chapter-overlay__segmented-control--active{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 14%, transparent);
color:var(--viewer-text,#e8edf4)}.chapter-overlay__task{
gap:12px;
display:grid}.chapter-overlay__task[hidden]{
display:none}.chapter-overlay__task-back{
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
background:0 0;
border:0;
justify-self:start;
padding:4px 0;
font-size:12px;
font-weight:650}.chapter-overlay__task-back:hover,.chapter-overlay__task-back:focus-visible{
color:var(--viewer-text,#e8edf4)}.chapter-overlay__section{
gap:12px;
display:grid}.chapter-overlay__section--card{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-surface,#151d26);
border-radius:12px;
padding:16px}.chapter-overlay__section-title{
text-transform:uppercase;
letter-spacing:.14em;
color:var(--viewer-muted,#9aa6b2);
font-size:12px;
font-weight:700}.chapter-overlay__section-header{
justify-content:space-between;
align-items:center;
gap:8px;
display:flex}.chapter-overlay__section-content{
gap:10px;
display:grid}.chapter-overlay__section-content[hidden]{
display:none}.chapter-overlay__language-tabs{
flex-wrap:wrap;
gap:6px;
display:flex}.chapter-overlay__language-tab{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
min-width:48px;
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
border-radius:9px;
padding:8px 10px;
font-size:12px;
font-weight:700}.chapter-overlay__language-tab--active{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--story-builder-accent,#e07a3f) 16%, transparent);
color:var(--viewer-text,#fff)}.chapter-overlay__collapse-toggle{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
width:26px;
height:26px;
color:var(--viewer-text,#e8edf4);
cursor:pointer;
border-radius:9px;
justify-content:center;
align-items:center;
transition:border-color .16s,background .16s;
display:inline-flex}.chapter-overlay__collapse-toggle:hover{
border-color:color-mix(in srgb, var(--viewer-muted,#9aa6b2) 55%, transparent);
background:color-mix(in srgb, var(--viewer-panel-strong,#1b242e) 80%, white)}.chapter-overlay__collapse-icon{
font-size:13px;
line-height:1;
transition:transform .14s;
transform:rotate(0)}.chapter-overlay__collapse-icon--collapsed{
transform:rotate(-90deg)}.chapter-overlay__label{
text-transform:uppercase;
letter-spacing:.12em;
color:var(--viewer-muted,#9aa6b2);
gap:6px;
font-size:11px;
display:grid}.chapter-overlay__label--inline{
width:100%}.chapter-overlay__hint{
color:var(--viewer-muted,#9aa6b2);
font-size:12px;
line-height:1.45}.chapter-overlay__validation{
border:1px solid color-mix(in srgb, var(--viewer-danger,#ffb8b8) 35%, transparent);
background:color-mix(in srgb, var(--viewer-danger,#ffb8b8) 10%, transparent);
color:var(--viewer-danger,#ffd0d0);
border-radius:12px;
padding:12px 14px;
font-size:12px}.chapter-overlay__validation ul{
margin:6px 0 0;
padding-left:18px}.chapter-overlay__input,.chapter-overlay__select,.chapter-overlay__textarea{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel,#121922);
color:var(--viewer-text,#e8edf4);
border-radius:12px;
outline:none;
padding:10px 12px;
font-size:13px}.chapter-overlay__input::placeholder,.chapter-overlay__textarea::placeholder{
color:color-mix(in srgb, var(--viewer-muted,#9aa6b2) 45%, transparent)}.chapter-overlay__input:focus,.chapter-overlay__select:focus,.chapter-overlay__textarea:focus{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
box-shadow:0 0 0 2px color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 18%, transparent)}.chapter-overlay__textarea{
resize:vertical;
min-height:94px}.chapter-overlay__input:disabled,.chapter-overlay__select:disabled,.chapter-overlay__textarea:disabled{
opacity:.56;
cursor:not-allowed}.chapter-overlay__row{
grid-template-columns:1fr auto;
align-items:end;
gap:8px;
display:grid}.chapter-overlay__row--tight{
align-items:center}.chapter-overlay__onboarding-finish{
gap:10px;
display:grid}.chapter-overlay__onboarding-finish .chapter-overlay__button{
justify-self:start}.chapter-overlay__button{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-panel-strong,#1b242e);
color:var(--viewer-text,#e8edf4);
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
white-space:nowrap;
border-radius:11px;
padding:8px 12px;
font-size:11px;
transition:background .16s,border-color .16s}.chapter-overlay__button:disabled{
opacity:.5;
cursor:not-allowed}.chapter-overlay__button--primary,.chapter-overlay__button--accent{
background:var(--accent,var(--story-builder-accent,#e07a3f));
color:#fff;
border-color:#0000}.chapter-overlay__button--subtle{
background:var(--viewer-panel-strong,#1b242e)}.chapter-overlay__button:not(:disabled):hover{
background:color-mix(in srgb, var(--viewer-panel-strong,#1b242e) 82%, white);
border-color:color-mix(in srgb, var(--viewer-muted,#9aa6b2) 45%, transparent)}.chapter-overlay__button--primary:not(:disabled):hover,.chapter-overlay__button--accent:not(:disabled):hover{
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 86%, black)}.chapter-overlay__audio-source{
display:none}.chapter-overlay__timegrid{
gap:10px;
display:grid}.chapter-overlay__timerow{
grid-template-columns:1fr auto;
align-items:end;
gap:8px;
display:grid}.chapter-overlay__input--time{
width:100%}.chapter-overlay__timerow .chapter-overlay__input,.chapter-overlay__timerow .chapter-overlay__button{
box-sizing:border-box;
height:38px}.chapter-overlay__placement-editor{
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
background:linear-gradient(to right, color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent) 1px, transparent 1px), var(--viewer-panel,#121922);
background-size:16px 16px,16px 16px,auto;
border-radius:12px;
width:100%;
height:168px;
position:relative;
overflow:hidden}.chapter-overlay__hint--placement{
margin-top:-2px}.chapter-overlay__actions{
z-index:2;
border-top:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 10%, transparent);
background:var(--viewer-panel,#121922);
gap:8px;
margin:0 -18px -22px;
padding:12px 18px 18px;
display:grid;
position:sticky;
bottom:-22px}.chapter-overlay__actions-group{
flex-wrap:wrap;
gap:8px;
display:flex}.chapter-overlay__actions-group .chapter-overlay__button{
flex:150px}.chapter-overlay__layer-item{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 4%, transparent);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 3%, transparent);
border-radius:12px;
gap:8px;
padding:10px 12px;
transition:background-color .2s,border-color .2s;
display:grid}.chapter-overlay__layer-item:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent);
border-color:color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent)}.chapter-overlay__layer-info{
text-transform:uppercase;
letter-spacing:.08em;
justify-content:space-between;
align-items:center;
font-size:11px;
display:flex}.chapter-overlay__layer-name{
color:color-mix(in srgb, var(--viewer-text,#e8edf4) 90%, transparent);
font-weight:700}.chapter-overlay__layer-value{
color:var(--viewer-muted,#9aa6b2);
font-variant-numeric:tabular-nums;
font-weight:600}.chapter-overlay__layer-slider{
width:100%;
accent-color:var(--accent,var(--story-builder-accent,#e07a3f));
cursor:pointer;
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 10%, transparent);
border-radius:2px;
outline:none;
height:4px}@media (width<=860px){
.chapter-overlay__panel{
border-radius:0;
width:100%;
max-width:100%}.chapter-overlay__timerow,.chapter-overlay__row{
grid-template-columns:1fr}}.save-modal.svelte-8bgb8s{
z-index:40;
pointer-events:auto;
display:block;
position:fixed;
inset:0}.save-modal[hidden].svelte-8bgb8s{
display:none}.save-modal__scrim.svelte-8bgb8s{
background:#0000008c;
position:absolute;
inset:0}.save-modal__panel.svelte-8bgb8s{
background:var(--viewer-panel,#0f1722);
width:min(720px,90cqw);
height:min(640px,85cqh);
max-height:90cqh;
color:var(--viewer-text,#e8edf4);
box-sizing:border-box;
border-radius:14px;
grid-template-rows:auto 1fr auto;
gap:12px;
padding:16px;
display:grid;
position:absolute;
top:50%;
left:50%;
overflow:hidden;
transform:translate(-50%,-50%);
box-shadow:0 24px 48px #00000059}.save-modal__header.svelte-8bgb8s{
grid-template-columns:1fr auto;
align-items:center;
display:grid}.save-modal__title.svelte-8bgb8s{
font-size:16px;
font-weight:700}.save-modal__close.svelte-8bgb8s{
width:var(--viewer-close-button-size,28px);
height:var(--viewer-close-button-size,28px);
border:1px solid var(--viewer-close-button-border,#ffffff2e);
border-radius:var(--viewer-close-button-radius,10px);
background:var(--viewer-close-button-bg,#ffffff1a);
color:var(--viewer-close-button-color,inherit);
font-size:var(--viewer-close-button-glyph-size,15px);
cursor:pointer;
justify-content:center;
align-items:center;
line-height:1;
transition:background-color .18s,border-color .18s,transform 80ms;
display:inline-flex}.save-modal__close.svelte-8bgb8s:hover:not(:disabled){
background:var(--viewer-close-button-hover-bg,#ffffff29);
border-color:var(--viewer-close-button-hover-border,#ffffff57)}.save-modal__close.svelte-8bgb8s:focus-visible{
outline:2px solid var(--viewer-close-button-focus-ring,#2ac7ff8c);
outline-offset:2px}.save-modal__close.svelte-8bgb8s:active:not(:disabled){
transform:translateY(1px)}.save-modal__code.svelte-8bgb8s{
background:var(--viewer-panel,#0b111a);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
resize:none;
width:100%;
height:100%;
color:var(--viewer-muted,#d5e2f5);
box-sizing:border-box;
border-radius:10px;
margin:0;
padding:12px;
font-family:Monaco,Courier New,monospace;
font-size:12px;
display:block;
overflow-y:auto}.save-modal__actions.svelte-8bgb8s{
flex-wrap:wrap;
justify-content:flex-end;
gap:10px;
display:flex}.save-modal__button.svelte-8bgb8s{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
color:inherit;
text-transform:uppercase;
letter-spacing:.12em;
cursor:pointer;
border:none;
border-radius:10px;
padding:8px 12px;
font-size:12px}.save-modal__button--primary.svelte-8bgb8s{
background:var(--story-builder-accent,#e07a3f);
color:var(--viewer-text,#fffaf6)}.rect-placement-editor.svelte-1r5mkwx{
touch-action:none;
position:absolute;
inset:0}.rect-placement-editor--passthrough.svelte-1r5mkwx{
pointer-events:none}.rect-placement-editor__label.svelte-1r5mkwx{
z-index:4;
box-sizing:border-box;
color:var(--ink,#2b2520);
text-align:center;
overflow-wrap:anywhere;
white-space:pre-wrap;
pointer-events:none;
background:#ffffffeb;
border-radius:12px;
justify-content:center;
align-items:center;
padding:10px 12px;
font-size:13px;
line-height:1.4;
display:flex;
position:absolute;
overflow:hidden}.story-builder-overlay-root.svelte-vbep3g{
pointer-events:none;
z-index:40;
position:absolute;
inset:0}.story-builder-inspector-root.svelte-vbep3g{
background:var(--viewer-panel,#121922);
height:100%;
min-height:0;
color:var(--viewer-text,#e8edf4);
overflow:hidden}.story-builder-motion-markers.svelte-vbep3g{
pointer-events:none;
z-index:45;
position:absolute;
inset:0}.story-builder-motion-marker.svelte-vbep3g{
left:var(--motion-x);
top:var(--motion-y);
width:38px;
height:44px;
transform:translate(calc(-50% + var(--motion-offset-x)), calc(-88% + var(--motion-offset-y)));
color:#fff;
filter:drop-shadow(0 3px 3px #000000b8);
cursor:move;
pointer-events:auto;
background:0 0;
border:0;
border-radius:50%;
place-items:center;
font-size:11px;
font-weight:800;
display:grid;
position:absolute}.story-builder-motion-marker.svelte-vbep3g svg{
width:38px;
height:44px;
fill:var(--accent,var(--story-builder-accent,#e07a3f));
stroke:#fff;
stroke-width:1.8px;
position:absolute;
inset:0}.story-builder-motion-marker.svelte-vbep3g span:where(.svelte-vbep3g){
z-index:1;
margin-top:-7px;
position:relative}.story-builder-motion-marker.svelte-vbep3g:hover,.story-builder-motion-marker.svelte-vbep3g:focus-visible{
transform:translate(calc(-50% + var(--motion-offset-x)), calc(-88% + var(--motion-offset-y))) scale(1.14);
outline:2px solid color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 45%, white);
outline-offset:2px}.story-builder-inspector-empty.svelte-vbep3g{
min-height:220px;
color:var(--viewer-muted,#9aa6b2);
align-content:center;
gap:8px;
padding:28px;
font-size:13px;
line-height:1.5;
display:grid}.story-builder-inspector-empty.svelte-vbep3g strong:where(.svelte-vbep3g){
color:var(--viewer-text,#e8edf4);
font-size:16px}.story-builder-positioning-container.svelte-vbep3g{
pointer-events:auto;
z-index:100;
background:#0b121a66;
position:absolute;
inset:0}.story-builder-positioning-editor-wrapper.svelte-vbep3g{
z-index:101;
position:absolute;
inset:0}.story-builder-positioning-toolbar.svelte-vbep3g{
background:color-mix(in srgb, var(--viewer-panel-strong,#1b242e) 95%, transparent);
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 10%, transparent);
z-index:102;
border-radius:16px;
gap:12px;
padding:12px 16px;
display:flex;
position:absolute;
bottom:24px;
left:50%;
transform:translate(-50%);
box-shadow:0 10px 30px #0006}.story-builder-positioning-button.svelte-vbep3g{
cursor:pointer;
border:none;
border-radius:10px;
padding:10px 18px;
font-size:13px;
font-weight:500;
transition:all .2s}.story-builder-positioning-button--cancel.svelte-vbep3g{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 15%, transparent);
color:var(--viewer-text,#eef3f8)}.story-builder-positioning-button--cancel.svelte-vbep3g:hover{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 25%, transparent)}.story-builder-positioning-button--confirm.svelte-vbep3g{
background:var(--accent,var(--story-builder-accent,#e07a3f));
color:var(--viewer-text,#fffaf6)}.story-builder-positioning-button--confirm.svelte-vbep3g:hover{
background:var(--accent-hover,#ef8f56);
box-shadow:0 0 12px color-mix(in srgb, var(--story-builder-accent,#e07a3f) 40%, transparent)}.story-builder-motion-placement.svelte-vbep3g{
z-index:102;
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 14%, transparent);
background:color-mix(in srgb, var(--viewer-panel,#121922) 96%, transparent);
width:auto;
max-width:min(440px,100% - 32px);
color:var(--viewer-text,#e8edf4);
pointer-events:auto;
border-radius:12px;
align-items:center;
gap:12px;
padding:6px 12px;
display:inline-flex;
position:absolute;
bottom:16px;
left:50%;
transform:translate(-50%);
box-shadow:0 8px 24px #0000006b}.story-builder-motion-point-surface.svelte-vbep3g{
z-index:100;
cursor:crosshair;
pointer-events:auto;
background:0 0;
border:0;
padding:0;
position:absolute;
inset:0}.story-builder-motion-placement-pin.svelte-vbep3g{
color:#fff;
filter:drop-shadow(0 4px 4px #000000bf);
pointer-events:none;
place-items:center;
width:42px;
height:50px;
transition:filter .15s,transform .1s;
display:grid;
position:absolute;
transform:translate(-50%,-88%)}.story-builder-motion-placement-pin--dragging.svelte-vbep3g{
filter:drop-shadow(0 8px 14px color-mix(in srgb, var(--story-builder-accent,#e07a3f) 85%, transparent));
transform:translate(-50%,-96%)scale(1.08)}.story-builder-motion-placement-target.svelte-vbep3g{
background:var(--accent,var(--story-builder-accent,#e07a3f));
pointer-events:none;
border:2px solid #fff;
border-radius:50%;
width:14px;
height:14px;
position:absolute;
bottom:4px;
left:50%;
transform:translate(-50%,50%);
box-shadow:0 0 8px #0009,inset 0 0 0 2px #0000004d}.story-builder-motion-placement-pin.svelte-vbep3g svg{
width:42px;
height:50px;
fill:var(--accent,var(--story-builder-accent,#e07a3f));
stroke:#fff;
stroke-width:1.8px;
position:absolute;
inset:0}.story-builder-motion-placement-pin.svelte-vbep3g span:where(.svelte-vbep3g){
z-index:1;
margin-top:-9px;
font-size:12px;
font-weight:850;
position:relative}.story-builder-motion-placement__message.svelte-vbep3g{
gap:3px;
min-width:0;
margin-right:auto;
display:grid}.story-builder-motion-placement__message.svelte-vbep3g strong:where(.svelte-vbep3g){
font-size:13px}.story-builder-motion-placement__actions.svelte-vbep3g{
flex:none;
gap:7px;
display:flex}.story-builder-motion-placement__actions.svelte-vbep3g button:where(.svelte-vbep3g){
border:1px solid color-mix(in srgb, var(--viewer-text,#e8edf4) 12%, transparent);
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
color:inherit;
cursor:pointer;
border-radius:9px;
padding:9px 11px;
font-weight:650}.story-builder-motion-placement__actions.svelte-vbep3g .story-builder-motion-placement__confirm:where(.svelte-vbep3g){
background:var(--accent,var(--story-builder-accent,#e07a3f));
color:#fff;
border-color:#0000}.story-builder-motion-placement__actions.svelte-vbep3g .story-builder-motion-placement__confirm:where(.svelte-vbep3g):disabled{
opacity:.45;
cursor:not-allowed}@media (width<=560px){
.story-builder-motion-placement.svelte-vbep3g{
flex-direction:column;
align-items:stretch;
gap:10px}.story-builder-motion-placement__actions.svelte-vbep3g{
justify-content:flex-end}}.story-topbar.svelte-1jdhrsw{
min-width:0;
color:var(--viewer-text,#e8edf4);
justify-content:flex-end;
align-items:center;
gap:8px;
display:flex}.story-topbar__status.svelte-1jdhrsw{
max-width:180px;
color:var(--viewer-muted,#ffffffa6);
white-space:nowrap;
text-overflow:ellipsis;
align-items:center;
gap:7px;
font-size:12px;
display:inline-flex;
overflow:hidden}.story-topbar__title.svelte-1jdhrsw{
min-width:0;
color:var(--viewer-text,#e8edf4);
text-overflow:ellipsis;
white-space:nowrap;
align-items:center;
gap:10px;
margin-right:auto;
font-size:18px;
font-weight:700;
line-height:1.2;
display:flex;
overflow:hidden}.story-topbar__title-divider.svelte-1jdhrsw{
color:var(--viewer-muted,#ffffff59);
-webkit-user-select:none;
user-select:none;
flex-shrink:0;
font-size:14px;
font-weight:300;
line-height:1}.story-topbar__status-dot.svelte-1jdhrsw{
background:var(--viewer-success,#55b889);
border-radius:50%;
flex:none;
width:7px;
height:7px}.story-topbar__status-dot--dirty.svelte-1jdhrsw{
background:var(--viewer-warning,#f2ad4f)}.story-topbar__group.svelte-1jdhrsw{
border-right:1px solid var(--viewer-panel-border,#ffffff1f);
gap:3px;
padding-right:8px;
display:flex}.story-topbar.svelte-1jdhrsw button:where(.svelte-1jdhrsw){
border:1px solid var(--viewer-panel-border,#ffffff24);
background:var(--viewer-panel,#121922);
min-height:36px;
color:inherit;
font:inherit;
cursor:pointer;
border-radius:10px;
justify-content:center;
align-items:center;
gap:7px;
padding:7px 10px;
font-size:12px;
font-weight:650;
display:inline-flex}.story-topbar.svelte-1jdhrsw button:where(.svelte-1jdhrsw):hover:not(:disabled){
background:var(--viewer-panel-strong,#1b2633)}.story-topbar.svelte-1jdhrsw button:where(.svelte-1jdhrsw):disabled{
opacity:.42;
cursor:not-allowed}.story-topbar.svelte-1jdhrsw button:where(.svelte-1jdhrsw) svg{
width:16px;
height:16px}.story-topbar__button--primary.svelte-1jdhrsw{
background:var(--accent,var(--story-builder-accent,#e07a3f))!important;
color:#fff!important;
border-color:#0000!important}@container mango-viewer (width<=860px){
.story-topbar__status.svelte-1jdhrsw,.story-topbar__button.svelte-1jdhrsw span:where(.svelte-1jdhrsw){
display:none}.story-topbar.svelte-1jdhrsw button:where(.svelte-1jdhrsw){
width:40px;
min-width:40px;
height:40px;
padding:0}.story-topbar__title.svelte-1jdhrsw{
font-size:15px}}@container mango-viewer (width<=500px){
.story-topbar__title.svelte-1jdhrsw{
display:none}}.viewer--story-preview .story-topbar__status.svelte-1jdhrsw,.viewer--story-preview .story-topbar__group.svelte-1jdhrsw,.viewer--story-preview .story-topbar__button--narration.svelte-1jdhrsw,.viewer--story-preview .story-topbar__button--export.svelte-1jdhrsw,.viewer--story-preview .story-topbar__button--primary.svelte-1jdhrsw{
display:none}.audio-region.svelte-11475xn{
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:var(--viewer-well-bg,#050a106b);
border-radius:8px;
min-width:0;
min-height:64px;
position:relative;
overflow:hidden}.audio-region__wave.svelte-11475xn{
min-height:64px}.audio-region__zoom.svelte-11475xn{
border-bottom:1px solid var(--viewer-panel-border,#ffffff1a);
color:var(--viewer-muted,#9aa6b2);
align-items:center;
gap:8px;
padding:6px 8px;
font-size:9px;
display:flex}.audio-region__zoom.svelte-11475xn label:where(.svelte-11475xn){
flex:auto;
align-items:center;
gap:7px;
min-width:130px;
display:flex}.audio-region__zoom.svelte-11475xn input:where(.svelte-11475xn){
width:100%;
accent-color:var(--accent,var(--story-builder-accent,#e07a3f))}.audio-region__zoom.svelte-11475xn button:where(.svelte-11475xn){
border:1px solid var(--viewer-panel-border,#ffffff1f);
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 4%, transparent);
color:var(--viewer-text,#e8edf4);
font:inherit;
cursor:pointer;
border-radius:6px;
padding:5px 7px}.audio-region__wave.svelte-11475xn ::part(region){
border-right:2px solid var(--story-builder-accent-hover,#ffb184);
border-left:2px solid var(--story-builder-accent-hover,#ffb184);
background:color-mix(in srgb, var(--story-builder-accent,#e07a3f) 32%, transparent)!important;
z-index:4!important}.audio-region__wave.svelte-11475xn ::part(region-content){
color:#fff;
white-space:nowrap;
pointer-events:none;
padding:3px 6px;
font-size:9px;
font-weight:700}.audio-region__wave.svelte-11475xn ::part(region-handle-left),.audio-region__wave.svelte-11475xn ::part(region-handle-right){
border-color:var(--story-builder-accent-hover,#ffb184)!important;
width:8px!important}.audio-region__message.svelte-11475xn{
color:var(--viewer-muted,#9aa6b2);
background:var(--viewer-well-bg,#050a1066);
pointer-events:none;
place-items:center;
padding:8px;
font-size:10px;
display:grid;
position:absolute;
inset:0}.audio-region__message--error.svelte-11475xn{
color:var(--viewer-danger,#f2b4a9)}.story-wide-narration.svelte-1i6rmmb{
box-sizing:border-box;
scrollbar-gutter:stable;
resize:vertical;
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--viewer-panel,#121922) 92%, transparent);
min-height:166px;
max-height:clamp(280px,56cqh,620px);
color:var(--viewer-text,#e8edf4);
border-radius:16px;
grid-template-columns:minmax(0,1fr);
gap:12px;
padding:18px;
display:grid;
overflow:hidden auto}.story-wide-narration__summary.svelte-1i6rmmb{
border-bottom:1px solid var(--viewer-panel-border,#ffffff14);
align-content:start;
gap:8px;
padding-bottom:12px;
display:grid}.story-wide-narration__title.svelte-1i6rmmb,.story-wide-narration__title.svelte-1i6rmmb>span:where(.svelte-1i6rmmb):last-child,.story-wide-narration__waveform-header.svelte-1i6rmmb,.story-wide-narration__waveform-header.svelte-1i6rmmb>span:where(.svelte-1i6rmmb){
align-items:center;
display:flex}.story-wide-narration__title.svelte-1i6rmmb{
gap:9px}.story-wide-narration__title.svelte-1i6rmmb>span:where(.svelte-1i6rmmb):last-child{
gap:7px}.story-wide-narration__title.svelte-1i6rmmb strong:where(.svelte-1i6rmmb){
font-size:13px}.story-wide-narration__title.svelte-1i6rmmb small:where(.svelte-1i6rmmb){
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 7%, transparent);
color:var(--viewer-muted,#9aa6b2);
border-radius:7px;
padding:3px 6px;
font-size:10px}.story-wide-narration__icon.svelte-1i6rmmb{
width:30px;
height:30px;
color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 14%, transparent);
border-radius:9px;
place-items:center;
display:grid}.story-wide-narration.svelte-1i6rmmb svg{
width:14px;
height:14px}.story-wide-narration__summary.svelte-1i6rmmb p:where(.svelte-1i6rmmb){
color:var(--viewer-muted,#9aa6b2);
margin:0;
font-size:11px;
line-height:1.45}.story-wide-narration__languages.svelte-1i6rmmb{
flex-wrap:wrap;
gap:5px;
display:flex}.story-wide-narration__languages.svelte-1i6rmmb button:where(.svelte-1i6rmmb){
border:1px solid var(--viewer-panel-border,#ffffff1a);
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
background:0 0;
border-radius:7px;
padding:5px 7px;
font-size:9px;
font-weight:800}.story-wide-narration__languages.svelte-1i6rmmb .story-wide-narration__language--active:where(.svelte-1i6rmmb){
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
color:var(--viewer-text,#e8edf4)}.story-wide-narration__editor.svelte-1i6rmmb{
align-content:start;
gap:8px;
min-width:0;
display:grid}.story-wide-narration__track.svelte-1i6rmmb,.story-wide-narration__range.svelte-1i6rmmb label:where(.svelte-1i6rmmb){
min-width:0;
color:var(--viewer-muted,#9aa6b2);
letter-spacing:.08em;
text-transform:uppercase;
gap:5px;
font-size:9px;
font-weight:700;
display:grid}.story-wide-narration.svelte-1i6rmmb input:where(.svelte-1i6rmmb){
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:var(--viewer-well-bg,#050a1059);
min-width:0;
color:var(--viewer-text,#e8edf4);
font:inherit;
border-radius:8px;
padding:8px 10px;
font-size:11px}.story-wide-narration__waveform-header.svelte-1i6rmmb{
justify-content:space-between;
gap:8px}.story-wide-narration__waveform-header.svelte-1i6rmmb>span:where(.svelte-1i6rmmb){
color:var(--viewer-muted,#9aa6b2);
text-transform:uppercase;
gap:6px;
font-size:9px;
font-weight:700}.story-wide-narration__waveform-header.svelte-1i6rmmb button:where(.svelte-1i6rmmb),.story-wide-narration__apply.svelte-1i6rmmb{
border:1px solid color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 55%, transparent);
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 12%, transparent);
color:inherit;
cursor:pointer;
border-radius:8px;
align-items:center;
gap:6px;
padding:7px 10px;
font-size:10px;
display:inline-flex}.story-wide-narration__waveform-header.svelte-1i6rmmb button:where(.svelte-1i6rmmb):disabled,.story-wide-narration__apply.svelte-1i6rmmb:disabled{
opacity:.4;
cursor:not-allowed}.story-wide-narration__range.svelte-1i6rmmb{
grid-template-columns:minmax(120px,1fr) auto minmax(120px,1fr) auto;
align-items:end;
gap:8px;
display:grid}.story-wide-narration__range.svelte-1i6rmmb label:where(.svelte-1i6rmmb){
width:100%}.story-wide-narration__apply.svelte-1i6rmmb{
align-self:end;
min-height:34px}.story-wide-narration__range.svelte-1i6rmmb>span:where(.svelte-1i6rmmb){
align-self:end;
place-items:center;
min-height:34px;
display:grid}@media (width<=760px){
.story-wide-narration__range.svelte-1i6rmmb{
grid-template-columns:minmax(110px,1fr) auto}.story-wide-narration__range.svelte-1i6rmmb>span:where(.svelte-1i6rmmb){
display:none}}@container mango-viewer (width<=1024px){
.story-wide-narration.svelte-1i6rmmb{
resize:none;
scrollbar-gutter:auto;
max-height:none;
overflow:visible}}.story-wide-media.svelte-109xt2v{
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--viewer-panel,#121922) 92%, transparent);
min-height:166px;
color:var(--viewer-text,#e8edf4);
border-radius:16px;
grid-template-columns:minmax(0,1fr);
gap:8px;
padding:18px;
display:grid}.story-wide-media__toolbar.svelte-109xt2v{
align-items:center;
display:flex}.story-wide-media.svelte-109xt2v svg{
width:14px;
height:14px}.story-wide-media__error.svelte-109xt2v{
color:var(--viewer-muted,#9aa6b2);
margin:0;
font-size:10px;
line-height:1.45}.story-wide-media__current.svelte-109xt2v,.story-wide-media__toolbar.svelte-109xt2v button:where(.svelte-109xt2v){
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 4%, transparent);
color:inherit;
cursor:pointer;
border-radius:8px;
justify-content:center;
align-items:center;
gap:6px;
padding:7px 10px;
font-size:10px;
display:inline-flex}.story-wide-media__editor.svelte-109xt2v{
align-content:start;
gap:8px;
min-width:0;
display:grid}.story-wide-media__toolbar.svelte-109xt2v{
gap:8px}.story-wide-media__toolbar.svelte-109xt2v>strong:where(.svelte-109xt2v){
margin-right:auto}.story-wide-media__range.svelte-109xt2v{
grid-template-columns:minmax(120px,1fr) auto auto minmax(120px,1fr) auto;
align-items:end;
gap:7px;
display:grid}.story-wide-media__range.svelte-109xt2v label:where(.svelte-109xt2v){
min-width:105px;
color:var(--viewer-muted,#9aa6b2);
gap:3px;
font-size:8px;
display:grid}.story-wide-media__range.svelte-109xt2v input:where(.svelte-109xt2v){
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff1a);
background:var(--viewer-well-bg,#050a1047);
width:100%;
color:inherit;
border-radius:7px;
padding:7px 8px}.story-wide-media__range.svelte-109xt2v>span:where(.svelte-109xt2v),.story-wide-media__current.svelte-109xt2v{
align-self:end;
min-height:34px}.story-wide-media__range.svelte-109xt2v>span:where(.svelte-109xt2v){
place-items:center;
display:grid}.story-wide-media.svelte-109xt2v button:where(.svelte-109xt2v):disabled{
opacity:.45;
cursor:not-allowed}.story-wide-media__error.svelte-109xt2v{
color:var(--viewer-danger,#ff9d9d)}@media (width<=760px){
.story-wide-media__range.svelte-109xt2v{
grid-template-columns:minmax(110px,1fr) auto}.story-wide-media__range.svelte-109xt2v>span:where(.svelte-109xt2v){
display:none}}.story-wide-annotations.svelte-qnipvf{
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--viewer-panel,#121922) 92%, transparent);
color:var(--viewer-text,#e8edf4);
border-radius:16px;
gap:10px;
padding:11px 13px;
display:grid}.story-wide-annotations__header.svelte-qnipvf{
align-items:center;
gap:8px;
font-size:13px;
display:flex}.story-wide-annotations__header.svelte-qnipvf>svg{
width:16px;
color:var(--accent,var(--story-builder-accent,#e07a3f))}.story-wide-annotations__header.svelte-qnipvf strong:where(.svelte-qnipvf){
align-items:center;
gap:7px;
display:flex}.story-wide-annotations__header.svelte-qnipvf span:where(.svelte-qnipvf){
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 8%, transparent);
min-width:18px;
height:18px;
color:var(--viewer-muted,#9aa6b2);
border-radius:9px;
place-items:center;
font-size:9px;
display:grid}.story-wide-annotations__items.svelte-qnipvf{
gap:8px;
display:flex;
overflow:auto hidden}.story-wide-annotations__item.svelte-qnipvf{
border:1px solid var(--viewer-panel-border,#ffffff14);
background:var(--viewer-well-bg,#050a1033);
border-radius:10px;
flex:0 0 min(250px,72cqw);
grid-template-columns:minmax(0,1fr) auto;
align-items:center;
padding:3px;
display:grid}.story-wide-annotations__item--selected.svelte-qnipvf{
border-color:var(--accent,var(--story-builder-accent,#e07a3f));
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 9%, transparent)}.story-wide-annotations__select.svelte-qnipvf{
min-width:0;
color:inherit;
text-align:left;
cursor:pointer;
background:0 0;
border:0;
border-radius:7px;
grid-template-columns:auto minmax(0,1fr);
align-items:center;
gap:9px;
padding:7px;
display:grid}.story-wide-annotations__select.svelte-qnipvf:hover,.story-wide-annotations__select.svelte-qnipvf:focus-visible{
background:color-mix(in srgb, var(--viewer-text,#e8edf4) 6%, transparent);
outline:none}.story-wide-annotations__number.svelte-qnipvf{
background:color-mix(in srgb, var(--annotation-color) 18%, transparent);
width:29px;
height:29px;
color:var(--annotation-color);
border-radius:9px;
place-items:center;
font-size:10px;
font-weight:800;
display:grid}.story-wide-annotations__copy.svelte-qnipvf{
gap:2px;
min-width:0;
display:grid}.story-wide-annotations__copy.svelte-qnipvf strong:where(.svelte-qnipvf){
text-overflow:ellipsis;
white-space:nowrap;
font-size:12px;
overflow:hidden}.story-wide-annotations__copy.svelte-qnipvf small:where(.svelte-qnipvf){
color:var(--viewer-muted,#9aa6b2);
text-transform:uppercase;
letter-spacing:.05em;
font-size:9px}.story-wide-annotations__delete.svelte-qnipvf{
width:30px;
height:30px;
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
background:0 0;
border:0;
border-radius:8px;
place-items:center;
display:grid}.story-wide-annotations__delete.svelte-qnipvf:hover{
background:color-mix(in srgb, var(--viewer-danger,#ffb8b8) 12%, transparent);
color:var(--viewer-danger,#ef5f7a)}.story-wide-annotations__delete.svelte-qnipvf svg{
width:14px}.story-wide-annotations__empty.svelte-qnipvf{
color:var(--viewer-muted,#9aa6b2);
margin:0;
font-size:12px}.stage__bottom:has(.story-wide-authoring--empty){
display:none}.stage__bottom:has(.story-wide-authoring){
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-narration){
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-media){
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-annotations){
background:0 0;
border:0;
padding:0}:is(.stage__bottom:has(.story-wide-authoring) .plugin-slot,.stage__bottom:has(.story-wide-authoring) .plugin-panel,.stage__bottom:has(.story-wide-authoring) .plugin-panel__panel,.stage__bottom:has(.story-wide-authoring) .plugin-panel__body),:is(.stage__bottom:has(.story-wide-narration) .plugin-slot,.stage__bottom:has(.story-wide-narration) .plugin-panel,.stage__bottom:has(.story-wide-narration) .plugin-panel__panel,.stage__bottom:has(.story-wide-narration) .plugin-panel__body),:is(.stage__bottom:has(.story-wide-media) .plugin-slot,.stage__bottom:has(.story-wide-media) .plugin-panel,.stage__bottom:has(.story-wide-media) .plugin-panel__panel,.stage__bottom:has(.story-wide-media) .plugin-panel__body),:is(.stage__bottom:has(.story-wide-annotations) .plugin-slot,.stage__bottom:has(.story-wide-annotations) .plugin-panel,.stage__bottom:has(.story-wide-annotations) .plugin-panel__panel,.stage__bottom:has(.story-wide-annotations) .plugin-panel__body){
width:100%;
min-width:0}.stage__bottom:has(.story-wide-authoring) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-narration) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-media) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-annotations) .plugin-panel__panel{
background:0 0;
border:0;
padding:0}.stage__bottom:has(.story-wide-authoring) .plugin-panel__title{
display:none}.stage__bottom:has(.story-wide-narration) .plugin-panel__title{
display:none}.stage__bottom:has(.story-wide-media) .plugin-panel__title{
display:none}.stage__bottom:has(.story-wide-annotations) .plugin-panel__title{
display:none}.story-wide-authoring.svelte-1oqot5w{
box-sizing:border-box;
border:1px solid var(--viewer-panel-border,#ffffff14);
background:color-mix(in srgb, var(--viewer-panel,#121922) 92%, transparent);
color:var(--viewer-text,#e8edf4);
border-radius:16px;
grid-template-columns:minmax(0,1fr);
gap:12px;
padding:12px 14px;
display:grid}.story-wide-authoring__add.svelte-1oqot5w svg{
width:14px;
height:14px}.story-wide-authoring__timeline.svelte-1oqot5w{
grid-template-rows:20px 68px auto;
align-content:start;
min-width:0;
padding:0 10px;
display:grid;
position:relative}.story-wide-authoring__scale.svelte-1oqot5w{
color:var(--viewer-muted,#9aa6b2);
font-size:10px;
position:relative}.story-wide-authoring__scale.svelte-1oqot5w span:where(.svelte-1oqot5w){
white-space:nowrap;
position:absolute;
transform:translate(-50%)}.story-wide-authoring__scale.svelte-1oqot5w span:where(.svelte-1oqot5w):first-child{
transform:none}.story-wide-authoring__scale.svelte-1oqot5w span:where(.svelte-1oqot5w):last-child{
transform:translate(-100%)}.story-wide-authoring__rail.svelte-1oqot5w{
background:color-mix(in srgb, var(--accent,var(--story-builder-accent,#e07a3f)) 78%, var(--viewer-panel-border));
height:2px;
margin-top:14px;
position:relative}.story-wide-authoring__rail.svelte-1oqot5w:before,.story-wide-authoring__rail.svelte-1oqot5w:after{
content:\"\";
background:var(--viewer-muted,#9aa6b2);
width:1px;
height:8px;
position:absolute;
top:-3px}.story-wide-authoring__rail.svelte-1oqot5w:before{
left:0}.story-wide-authoring__rail.svelte-1oqot5w:after{
right:0}.story-wide-authoring__point-item.svelte-1oqot5w{
left:var(--point-position);
flex-direction:column;
align-items:center;
gap:3px;
width:76px;
display:flex;
position:absolute;
top:0;
transform:translate(-50%,-14px)}.story-wide-authoring__point-item.svelte-1oqot5w:first-child{
transform:translateY(-14px)}.story-wide-authoring__point-item.svelte-1oqot5w:last-child:not(:first-child){
transform:translate(-100%,-14px)}.story-wide-authoring__point.svelte-1oqot5w{
width:100%;
color:inherit;
cursor:pointer;
background:0 0;
border:0;
padding:0}.story-wide-authoring__point-delete.svelte-1oqot5w{
border:1px solid var(--viewer-panel-border,#ffffff1f);
background:var(--viewer-panel,#121922);
width:18px;
height:18px;
color:var(--viewer-muted,#9aa6b2);
cursor:pointer;
opacity:.65;
border-radius:5px;
justify-content:center;
align-items:center;
padding:0;
transition:opacity .15s,color .15s,border-color .15s;
display:inline-flex}.story-wide-authoring__point-delete.svelte-1oqot5w:hover{
opacity:1;
color:var(--viewer-danger,#ef4444);
border-color:color-mix(in srgb, var(--viewer-danger,#ffb8b8) 50%, transparent)}.story-wide-authoring__point-delete.svelte-1oqot5w svg{
width:10px;
height:10px}.story-wide-authoring__pin.svelte-1oqot5w{
color:#fff;
filter:drop-shadow(0 2px 2px #000000a6);
place-items:center;
width:28px;
height:34px;
margin:0 auto;
display:grid;
position:relative}.story-wide-authoring__point.svelte-1oqot5w:first-child .story-wide-authoring__pin:where(.svelte-1oqot5w){
margin-left:0}.story-wide-authoring__point.svelte-1oqot5w:last-child:not(:first-child) .story-wide-authoring__pin:where(.svelte-1oqot5w){
margin-right:0}.story-wide-authoring__pin.svelte-1oqot5w svg{
width:28px;
height:34px;
fill:var(--accent,var(--story-builder-accent,#e07a3f));
stroke:#fff;
stroke-width:1.7px;
position:absolute}.story-wide-authoring__pin.svelte-1oqot5w b:where(.svelte-1oqot5w){
z-index:1;
margin-top:-6px;
font-size:10px;
position:relative}.story-wide-authoring__point-label.svelte-1oqot5w{
white-space:nowrap;
margin-top:3px;
font-size:10px;
display:grid}.story-wide-authoring__point-label.svelte-1oqot5w small:where(.svelte-1oqot5w){
color:var(--viewer-muted,#9aa6b2)}.story-wide-authoring__empty.svelte-1oqot5w{
color:var(--viewer-muted,#9aa6b2);
text-align:center;
align-self:center;
margin:-28px 0 0;
font-size:11px}.story-wide-authoring__add.svelte-1oqot5w{
border:1px solid var(--viewer-panel-border,#ffffff1a);
color:inherit;
cursor:pointer;
background:0 0;
border-radius:9px;
place-self:end center;
align-items:center;
gap:6px;
padding:8px 12px;
font-size:11px;
font-weight:700;
display:inline-flex}.story-wide-authoring__add.svelte-1oqot5w:hover,.story-wide-authoring__point.svelte-1oqot5w:hover .story-wide-authoring__point-label:where(.svelte-1oqot5w) strong:where(.svelte-1oqot5w){
color:var(--accent,var(--story-builder-accent,#e07a3f))}@media (width<=720px){
.story-wide-authoring.svelte-1oqot5w{
gap:14px}}\n/*$vite$:1*/");

//# sourceMappingURL=/sm/21b42fbb3d85c38167bdce942239dca5afebcea05e5247399ffde4d44b6461c5.map