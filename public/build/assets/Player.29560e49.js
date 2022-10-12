import{j as l,l as b,C as w,o as a,b as s,c as x,w as T,M as E,g as L,t as p,D as h,F as A,y as j,h as B,a as P}from"./app.2ccf841f.js";const C={id:"player",class:"flex h-4 w-full items-center rounded-t-lg bg-purple-200 relative"},F=P("div",{class:"absolute left-1 top-full h-full h-0 w-full w-0 translate-y-[-50%] border-t-[8px] mt-1 border-l-[8px] border-r-[8px] border-t-transparent border-l-transparent border-r-transparent border-t-teal-600"},null,-1),N={key:1,class:"flex h-4 w-full animate-pulse items-center justify-center rounded-t-lg text-red-500"},S={key:2,class:"flex h-4 w-full animate-pulse items-center justify-center rounded-t-lg bg-purple-500"},M={__name:"Player",props:{room:Object,channel:String},emits:["track:played","track:ended","track:paused","track:stopped","track:currentTime"],setup(f,{emit:n}){const t=f,e=new Audio,v=l(null),o=l(!0),u=l(!1),c=l(null),m=l(0),d=l([]);b(()=>{Echo.channel(t.channel).listen("TrackPlayed",r=>{console.log("Track played"),v.value=r.track,g()}).listen("TrackEnded",r=>{console.log("Track ended"),d.value=[],i()}).listen("TrackPaused",()=>{y()}).listen("TrackResumed",()=>{_()}).listen("UserHasFoundAllTheAnswers",r=>{d.value.push(r.user)})}),w(()=>{i(),Echo.leave(t.channel)});const g=()=>{u.value&&i(),o.value=!0,c.value=null,u.value=!0,e.src=v.value.preview_url,e.crossOrigin="anonymous",e.addEventListener("error",()=>{c.value=e.error.message,u.value=!1}),e.addEventListener("canplaythrough",()=>{o.value=!1,e.play()}),e.addEventListener("timeupdate",()=>{n("track:currentTime",e.currentTime),m.value=parseInt(100/t.room.track_duration*(e.currentTime+.25))}),e.addEventListener("ended",()=>{u.value=!1,o.value=!0,n("track:ended",t.track)})},y=()=>{e.pause(),n("track:paused",t.track)},_=()=>{e.play()},i=()=>{e.pause(),n("track:stopped",t.track)};return(r,V)=>(a(),s("div",C,[d.value?(a(),x(E,{key:0,name:"list",tag:"ul"},{default:T(()=>[(a(!0),s(A,null,j(d.value,k=>(a(),s("li",{class:"absolute bg-teal-600 p-1 text-white -top-8 rounded text-xs",style:h("left:calc("+100/t.room.track_duration*k.time+"% - 0.25rem)")},[B(p(k.name)+" ",1),F],4))),256))]),_:1})):L("",!0),c.value?(a(),s("div",N,p(c.value),1)):o.value?(a(),s("div",S,p(r.__("Loading")),1)):(a(),s("div",{key:3,class:"shine h-4 rounded-r-lg rounded-tl-lg bg-gradient-to-br from-purple-300 to-purple-400 transition-all duration-500 ease-linear",style:h("width:"+m.value+"%")},null,4))]))}};export{M as default};
