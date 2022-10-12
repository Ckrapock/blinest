import{j as a,e as M,l as V,C,o as s,b as r,a as e,n as b,h as _,t as m,g as p,E as j,K as B,u as N,c as S,w as x,m as E,F as w,y as U,d as $}from"./app.2ccf841f.js";import{_ as L}from"./Dropdown.6ea7b926.js";import D from"./Controls.47d260d9.js";import"./Card.53d0f134.js";import"./plugin-vue_export-helper.21dcd24c.js";const F=["onSubmit"],H={class:"relative flex w-full items-center"},O=e("button",{type:"button",class:"h-14 bg-white p-4 text-neutral-500"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})])],-1),P={type:"submit",class:"btn-send h-14"},q={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"4",stroke:"currentColor",class:"w-6 h-6"},z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1),A={class:"mt-2 flex gap-2"},I=["innerHTML"],K={inheritAttrs:!1},X=Object.assign(K,{__name:"UserInput",props:{room:Object,channel:String,currentTime:Number},setup(v){const l=v,h=a(null),i=a(null),c=a(null),u=a(""),t=a(null),d=a([]),y=M().props.value.auth.user;V(()=>{f(),Echo.channel(l.channel).listen("TrackPlayed",o=>{l.room.value=o.room,c.value=o.round,i.value=o.track,d.value=[]})}),C(()=>{Echo.leave(l.channel)});const f=()=>{h.value.focus()},k=()=>{u.value.length>1&&i.value&&axios.post(`/rounds/${c.value.id}/tracks/${i.value.id}/check`,{text:u.value,currentTime:l.currentTime}).then(o=>{d.value.push(...o.data.good_answers),T(o.data.message),f()}),u.value=""},T=o=>{t.value=o,setTimeout(()=>{t.value=null},1500)};return(o,g)=>(s(),r(w,null,[e("form",{class:"flex w-full items-center justify-center",onSubmit:E(k,["prevent"])},[e("div",H,[t.value?(s(),r("blockquote",{key:0,class:b(["absolute bottom-full right-0 flex translate-y-[-80%] translate-x-[-50%] items-center rounded-lg bg-teal-600 py-1 px-2 text-neutral-100",{"bg-teal-600":t.value.type==="success","bg-orange-600":t.value.type==="warning","bg-red-600":t.value.type==="error"}])},[_(m(t.value.body)+" ",1),e("div",{class:b(["absolute left-5 top-full h-full h-0 w-full w-0 translate-y-[-50%] border-t-[10px] mt-1 border-l-[10px] border-r-[10px] border-t-transparent border-l-transparent border-r-transparent",{"border-t-teal-600":t.value.type==="success","border-t-orange-600":t.value.type==="warning","border-t-red-600":t.value.type==="error"}])},null,2)],2)):p("",!0),j(e("input",{ref_key:"input",ref:h,"onUpdate:modelValue":g[0]||(g[0]=n=>u.value=n),type:"text",class:"h-14 w-full flex-grow rounded-bl-md border-none p-2 text-2xl uppercase text-gray-600 focus:shadow-none focus:outline-none focus:ring-0",placeholder:"Une id\xE9e?",autofocus:""},null,512),[[B,u.value]]),c.value&&l.room.moderators.find(n=>N(y).id===n.id)?(s(),S(L,{key:1,autoClose:!1,placement:"bottom-end"},{default:x(()=>[O]),dropdown:x(()=>[$(D,{channel:v.channel,room:l.room,round:c.value},null,8,["channel","room","round"])]),_:1})):p("",!0),e("button",P,[(s(),r("svg",q,[e("title",null,m(o.__("Send")),1),z]))])])],40,F),e("ul",A,[(s(!0),r(w,null,U(d.value,n=>(s(),r("li",{key:n.id,class:"flex items-center rounded-lg bg-teal-600 py-1 px-2 text-neutral-100"},[n.type.svg_icon?(s(),r("span",{key:0,class:"mr-1",innerHTML:n.type.svg_icon},null,8,I)):p("",!0),_(" "+m(n.value),1)]))),128))])],64))}});export{X as default};
