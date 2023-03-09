import{a as u}from"./apis.7c1b8d68.js";import{_ as g,C as v,r as _,D as n,a2 as h,a3 as e,a8 as o,I as p,E as k,G as m,a4 as y,a5 as C,a7 as w,J as I,H as $}from"./index.afd89e2d.js";import"./axios.f1f32898.js";const D=v({name:"IndexPage",async mounted(){const s=this.characterId;await this.getDataCharacter(s);const r=this.character.episode,t=r.length;for(let a=0;a<t;a++){const d=await u().getEpisode(r[a]);r[a]!==void 0&&(this.episodes.push(d),a===0?this.loading=!0:a+1===t&&(this.loading=!1))}},computed:{characterId(){return this.$route.params.id}},setup(){const s=_(),f=_([]),r=_(""),t=_(!1),a=u();function d(c){return c.replace(/[^0-9]/g,"")}async function l(c){t.value=!0;try{const i=await a.getCharacter(c);s.value=i}catch(i){console.error(i)}t.value=!1}return{character:s,episodes:f,search:r,loading:t,getDataCharacter:l,locationId:d}}}),B={key:0,class:"row"},E={class:"col"},N={class:"wrapper"},V={class:"profile-card js-profile-card"},j={class:"profile-card__img"},F=["src"],L={class:"profile-card__cnt js-profile-cnt"},P={class:"profile-card__name"},A={class:"profile-card__txt"},G={class:"profile-card-loc"},H=e("span",{class:"profile-card-loc__icon"},[e("svg",{class:"icon"},[e("use",{"xlink:href":"#icon-location"})])],-1),J={class:"profile-card-loc__txt"},O={key:1},S={class:"profile-card-inf"},T={class:"profile-card-inf__item"},b={class:"profile-card-inf__title"},q=e("div",{class:"profile-card-inf__txt"},"Epis\xF3dios",-1),x={class:"profile-card__txt"};function z(s,f,r,t,a,d){const l=I("router-link");return s.character?(n(),h("div",B,[e("div",E,[e("div",N,[e("div",V,[e("div",j,[e("img",{src:s.character.image,alt:"profile card"},null,8,F)]),e("div",L,[e("div",P,o(s.character.name),1),e("div",A,[p(o(s.character.gender)+" - ",1),e("strong",null,o(s.character.species),1),p(" | "+o(s.character.status),1)]),e("div",G,[H,e("span",J,[p(" Origem: "),s.character.origin.name!=="unknown"?(n(),k(l,{key:0,to:`/local/${s.locationId(s.character.origin.url)}`},{default:m(()=>[p(o(s.character.origin.name),1)]),_:1},8,["to"])):(n(),h("span",O,"Desconhecida"))])]),e("div",S,[e("div",T,[e("div",b,o(s.episodes.length),1),q])])]),(n(!0),h(y,null,C(s.episodes,(c,i)=>(n(),h("div",{class:"profile-card__cnt js-profile-cnt",key:i},[$(l,{to:`/episodio/${c.id}`},{default:m(()=>[e("div",x,o(c.name),1)]),_:2},1032,["to"])]))),128))])])])])):w("",!0)}var R=g(D,[["render",z]]);export{R as default};
