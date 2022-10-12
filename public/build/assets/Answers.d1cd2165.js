import{j as m,k as g,l as C,C as T,o,c as $,w as h,a as s,b as r,t as n,h as c,g as v,d,y as f,F as x,M as L}from"./app.2ccf841f.js";import{C as V}from"./Card.53d0f134.js";import{_ as p}from"./Icon.6689216d.js";import"./plugin-vue_export-helper.21dcd24c.js";const B={class:"flex w-full items-center justify-between"},E=s("h3",{class:"text-xl font-bold"},"Playlist",-1),N={key:0,class:"text-xl font-bold text-neutral-500"},j={class:"text-neutral-700"},D={class:"p-2"},S=["src","alt"],A={class:"flex-grow p-2"},F={class:"flex h-full justify-between"},M={class:"mr-1 flex-shrink-0 rounded bg-neutral-500 px-1 text-[10px] font-bold uppercase text-neutral-300 text-white"},P={class:"flex flex-col items-end"},U=["href","title"],G={class:"mt-4 flex items-center text-xs"},I=["onClick","title"],R=["onClick","title"],K={__name:"Answers",props:{users:Array,channel:String},setup(w){const u=w,k=m(u.users),l=m(null),a=m([]);g(()=>u.users,e=>{k.value=e}),C(()=>{Echo.channel(u.channel).listen("RoundStarted",e=>{l.value=e.round,a.value=[]}).listen("TrackPlayed",e=>{l.value=e.round}).listen("TrackEnded",e=>{a.value.unshift(e.track),l.value=e.round}).listen("TrackVoted",e=>{let _=a.value.findIndex(t=>t.id===e.track.id);a.value[_].downvotes=e.track.downvotes,a.value[_].upvotes=e.track.upvotes})}),T(()=>{Echo.leave(u.channel)});const b=e=>{axios.post(`/rooms/${l.value.room.id}/tracks/${e.id}/downvote`)},y=e=>{axios.post(`/rooms/${l.value.room.id}/tracks/${e.id}/upvote`)};return(e,_)=>(o(),$(V,null,{header:h(()=>[s("div",B,[E,l.value?(o(),r("span",N,[s("span",j,n(l.value.current),1),c(" / "+n(l.value.tracks.length),1)])):v("",!0)])]),default:h(()=>[d(L,{name:"flip-list",tag:"ul",class:"h-64 overflow-y-scroll pr-2 md:h-80 2xl:h-96"},{default:h(()=>[(o(!0),r(x,null,f(a.value,t=>(o(),r("li",{key:t.id,class:"mb-2 flex rounded bg-neutral-900 opacity-70"},[s("div",D,[s("img",{src:t.artwork_url,alt:t.album_name,class:"h-20 w-auto rounded"},null,8,S)]),s("div",A,[s("div",F,[s("ul",null,[(o(!0),r(x,null,f(t.answers,i=>(o(),r("li",{key:i.id,class:"mb-2 flex items-start overflow-ellipsis text-sm"},[s("span",M,n(e.__(i.type.name)),1),c(" "+n(i.value),1)]))),128))]),s("div",P,[t.track_url?(o(),r("a",{key:0,class:"flex items-center whitespace-nowrap text-xs opacity-50 hover:opacity-90",href:t.track_url,target:"_blank",title:e.__("Listen on")+" "+t.provider},[c(n(e.__("Listen on"))+" ",1),d(p,{name:t.provider,class:"ml-1 h-5 w-5"},null,8,["name"])],8,U)):v("",!0),s("div",G,[s("button",{onClick:i=>y(t),class:"mr-4 flex items-center",title:e.__("Like")},[d(p,{name:"thumb-up",class:"mr-1 h-5 w-5"}),c(" "+n(t.upvotes),1)],8,I),s("button",{onClick:i=>b(t),class:"flex items-center",title:e.__("Don't like")},[d(p,{name:"thumb-down",class:"mr-1 h-5 w-5"}),c(" "+n(t.downvotes),1)],8,R)])])])])]))),128))]),_:1})]),_:1}))}};export{K as default};
