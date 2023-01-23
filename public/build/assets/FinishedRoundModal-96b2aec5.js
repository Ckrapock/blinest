import{_ as B}from"./Modal-5b330035.js";import{C as I}from"./Card-261bd2f6.js";import w from"./Podium-72440200.js";import{k as m,l as d,q as N,h as j,w as c,o,a as f,b as e,t as s,x as S,c as r,F as b,v as g,d as y,g as h}from"./app-f6824ecf.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"flex justify-between"},V={key:0,class:"w-full"},$={class:"mb-2 py-2 text-center text-xl font-bold"},F={class:"max-h-48 overflow-auto"},P={class:"broder-neutral-500 m-1 flex items-center gap-2 rounded border p-2"},R={class:"text-xl font-bold"},A={class:"flex-grow"},M=e("sup",{class:"ml-1"},"PTS",-1),q={key:1,class:"w-full"},z={class:"mb-2 py-2 text-center text-xl font-bold"},D={class:"max-h-48 overflow-auto"},E={class:"broder-neutral-500 m-1 flex items-center gap-2 rounded border p-2"},L={class:"text-xl font-bold"},O={class:"flex-grow"},G=e("sup",{class:"ml-1"},"PTS",-1),H={key:0},J={class:"flex w-full items-center gap-6"},K={class:"flex flex-grow flex-col"},Q={class:"relative flex h-6 w-full items-center overflow-hidden rounded-lg bg-purple-200"},U={class:"absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center text-sm text-neutral-600"},W={class:"ml-auto flex items-center"},se={__name:"FinishedRoundModal",props:{round:Object,users_podium:Array,teams_podium:Array,show:Boolean},emits:["close"],setup(p,{emit:k}){const l=p,i=m(parseInt(l.round.room.pause_between_rounds)),n=m(null),a=m(null);d(()=>l.round,t=>{i.value=parseInt(l.round.room.pause_between_rounds)}),d(()=>l.show,t=>{t&&v()}),d(()=>l.users_podium,t=>{t&&(n.value=t)}),d(()=>l.teams_podium,t=>{t&&(a.value=t)}),N(()=>{v()});const v=()=>{let t=setInterval(()=>{i.value===0?clearInterval(t):i.value--},1e3)},C=()=>{k("close")};return(t,x)=>(o(),j(B,{show:p.show,onClose:C},{default:c(()=>[f(I,null,{header:c(()=>[e("h2",null,s(t.__("Round finished")),1)]),footer:c(()=>[e("div",J,[e("div",K,[e("div",Q,[e("div",{class:"flex h-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-300 to-purple-400 text-neutral-700 transition-all duration-1000 ease-linear",style:S("width:"+i.value/parseInt(l.round.room.pause_between_rounds)*100+"%")},[e("span",U,"Prochaine partie dans "+s(i.value),1)],4)])]),e("div",W,[e("button",{type:"button",class:"btn-secondary mr-2",onClick:x[0]||(x[0]=u=>t.$emit("close"))},s(t.__("Close")),1)])])]),default:c(()=>[e("div",T,[n.value&&n.value.length?(o(),r("div",V,[e("h3",$,s(t.__("Ranking")),1),f(w,{list:n.value},null,8,["list"]),e("ul",F,[(o(!0),r(b,null,g(n.value,(u,_)=>(o(),r("li",P,[e("span",R,s(_+1),1),e("span",A,s(u.user.name),1),e("span",null,[y(s(u.total),1),M])]))),256))])])):h("",!0),a.value&&a.value.length?(o(),r("div",q,[e("h3",z,s(t.__("Teams")),1),f(w,{list:a.value},null,8,["list"]),e("ul",D,[(o(!0),r(b,null,g(a.value,(u,_)=>(o(),r("li",E,[e("span",L,s(_+1),1),e("span",O,s(u.team.name),1),e("span",null,[y(s(u.total),1),G])]))),256))])])):h("",!0)]),n.value&&!n.value.length&&a.value&&!a.value.length?(o(),r("div",H,s(t.__("No scores")),1)):h("",!0)]),_:1})]),_:1},8,["show"]))}};export{se as default};
