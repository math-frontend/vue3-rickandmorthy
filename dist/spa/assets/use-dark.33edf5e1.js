import{c as u}from"./index.209c7126.js";function s(t,e,r){return r<=e?e:Math.min(r,Math.max(e,t))}function l(t,e,r){if(r<=e)return e;const n=r-e+1;let a=e+(t-e)%n;return a<e&&(a=n+a),a===0?0:a}const c={dark:{type:Boolean,default:null}};function d(t,e){return u(()=>t.dark===null?e.dark.isActive:t.dark)}export{d as a,s as b,l as n,c as u};
