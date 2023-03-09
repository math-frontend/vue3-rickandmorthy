import{j as w,Q as y,k as b}from"./default.67b0577a.js";import{a as k}from"./apis.7c1b8d68.js";import{_ as V,C as D,r as l,a1 as _,D as u,a2 as p,a3 as t,H as i,G as v,J as m,a4 as L,a5 as j}from"./index.afd89e2d.js";import"./QBtn.fe0c314a.js";import"./QIcon.9f0ec4b0.js";import"./use-router-link.d25af9ed.js";import"./use-dark.43b4630b.js";import"./axios.f1f32898.js";var C="/assets/rick-and-morty-locations.650b7beb.svg";const $=D({name:"LocationsPage",mounted(){this.getDataList()},components:{cardDefault:w},setup(){const e=l([]),s=l(""),n=l(1),d=l(0),c=l(!1),f=k();_(()=>{s.value!==""&&(n.value=1,r())}),_(()=>{n.value&&r()});async function r(){c.value=!0;try{const o=await f.getLocations(n.value,s.value);e.value=o.results,d.value=o.info.pages}catch(o){console.error(o)}c.value=!1}return{locations:e,pages:d,page:n,search:s,loading:c,getDataList:r}}}),q={class:"row"},x={class:"col"},P={class:"wrapper"},A={class:"q-pa-sm"},B=t("div",{class:"row justify-center"},[t("img",{src:C,style:{width:"300px"},alt:"rickandmorty",class:"image-home"})],-1),E=t("div",{class:"row justify-center"},[t("h6",{class:"text-deep-purple-7"},"LOCALIZA\xC7\xD5ES")],-1),I={class:"row justify-center"},Q={class:"row justify-center ma-4"},N={class:"row justify-center mt-4"};function U(e,s,n,d,c,f){const r=m("cardDefault"),o=m("router-link"),h=m("q-container");return u(),p("div",q,[t("div",x,[t("div",P,[i(h,null,{default:v(()=>[t("div",A,[B,E,t("div",I,[i(y,{dark:"",color:"deep-purple-7",modelValue:e.page,"onUpdate:modelValue":s[0]||(s[0]=a=>e.page=a),min:1,max:e.pages,disable:e.loading,"boundary-numbers":""},null,8,["modelValue","max","disable"])]),t("div",Q,[i(b,{style:{width:"50%"},standout:"bg-purple-9 text-white",placeholder:"Pesquisar por nome",modelValue:e.search,"onUpdate:modelValue":s[1]||(s[1]=a=>e.search=a)},null,8,["modelValue"])]),t("div",N,[(u(!0),p(L,null,j(e.locations,(a,g)=>(u(),p("div",{key:g},[i(o,{to:`/local/${a.id}`},{default:v(()=>[i(r,{id:a.id,title:a.name,subtitle:""},null,8,["id","title"])]),_:2},1032,["to"])]))),128))])])]),_:1})])])])}var K=V($,[["render",U]]);export{K as default};