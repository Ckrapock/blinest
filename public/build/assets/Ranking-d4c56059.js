import{J as j,k as p,l as N,q as E,L as M,c as a,a as v,w as x,u as h,h as T,g as i,o,b as s,t as r,_ as V,F as w,v as g,f as C,d as k}from"./app-f6824ecf.js";import{C as $}from"./Card-261bd2f6.js";import{_ as z}from"./Icon-1ce38a62.js";import L from"./PodiumModal-8ca13769.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-5b330035.js";import"./Spinner-7dbf9677.js";const P={class:"flex w-full items-center justify-between"},R={class:"text-xl font-bold"},F={class:"mr-2 text-xs"},O=["title"],q={class:"h-64 overflow-y-scroll pr-2 md:h-80 2xl:h-96"},D={class:"flex items-center justify-center text-xl font-bold"},G={class:"flex items-center"},I=["src","alt"],J={class:"flex flex-grow flex-col"},U={class:"mb-2"},H={key:0,class:"text-[9px] uppercase"},K={class:"flex items-center flex-wrap gap-1"},Q={key:0,class:"mr-1 text-white"},W=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-3 w-3"},[s("path",{"fill-rule":"evenodd",d:"M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z","clip-rule":"evenodd"})],-1),X=[W],Y={key:1,class:"absolute -right-2 -top-1 ml-2 flex h-3 w-3 items-center justify-center rounded-full bg-purple-500 text-[11px] text-neutral-100"},Z={key:0,class:"relative flex rounded bg-neutral-300 px-1 text-[11px] font-bold uppercase text-neutral-500 text-white"},A=s("sup",null,"PTS",-1),re={__name:"Ranking",props:{room:Object,users:Array,channel:String,data:Object},setup(b){const d=b,u=j().props.auth.user,B=p([]),n=p(d==null?void 0:d.users),_=p(null),m=p(!1);return N(()=>d.users,t=>{n.value=t}),E(()=>{Echo.channel(d.channel).listen("NewScore",t=>{B.value.push(t.score);let l=n.value.findIndex(e=>e.id===t.score.user_id);n.value[l].score.total=t.score.total,n.value[l].score.answers.push(...t.score.answers),n.value.sort((e,f)=>f.score.total-e.score.total)}).listen("TrackPlayed",t=>{_.value=t.track,n.value.map(l=>{if(l.score)return l.score.answers=[]})}).listen("RoundStarted",()=>{n.value.forEach(t=>{t.score.total=0})})}),M(()=>{Echo.leave(d.channel)}),(t,l)=>(o(),a("div",null,[v($,null,{header:x(()=>[s("div",P,[s("h3",R,r(t.__("Ranking")),1),s("div",null,[s("sup",F,r(n.value.length),1),h(u)?(o(),a("button",{key:0,type:"button",onClick:l[0]||(l[0]=e=>m.value=!0),title:t.__("Show rankings for this room")},[v(z,{name:"podium",class:"mr-2 h-8 w-8"})],8,O)):i("",!0)])])]),default:x(()=>[s("div",q,[v(V,{name:"flip-list",tag:"ul"},{default:x(()=>[(o(!0),a(w,null,g(n.value,(e,f)=>(o(),a("li",{key:e.id,class:C(["flex items-center rounded border-b border-neutral-600 px-2 py-4 gap-4",{"bg-neutral-700":h(u)&&h(u).id===e.id}])},[s("div",D,r(f+1),1),s("div",G,[s("img",{src:e.photo,alt:e.name,class:"w-12 h-12 rounded-full shadow-lg"},null,8,I)]),s("div",J,[s("div",U,[k(r(e.name)+" ",1),e.team?(o(),a("sup",H,"["+r(e.team.name)+"]",1)):i("",!0)]),s("div",K,[e.score?(o(!0),a(w,{key:0},g(e.score.answers,c=>(o(),a("span",{class:C(["relative flex items-center rounded bg-purple-500 px-1 text-[11px] font-bold uppercase text-white",{"mr-2":c.order<4}])},[c.speedBonus?(o(),a("span",Q,X)):i("",!0),k(" "+r(t.__(c.name))+" ",1),c.order<4?(o(),a("span",Y,r(c.order),1)):i("",!0)],2))),256)):i("",!0),_.value?(o(!0),a(w,{key:1},g(_.value.answers,c=>{var y;return o(),a("span",null,[(y=e==null?void 0:e.score)!=null&&y.answers.find(S=>S.id===c.id)?i("",!0):(o(),a("span",Z,r(t.__(c.name)),1))])}),256)):i("",!0)])]),s("div",null,[k(r(e!=null&&e.score?e.score.total:0)+" ",1),A])],2))),128))]),_:1})])]),_:1}),h(u)&&m.value?(o(),T(L,{key:0,room:b.room,show:m.value,onClose:l[1]||(l[1]=e=>m.value=!1)},null,8,["room","show"])):i("",!0)]))}};export{re as default};
