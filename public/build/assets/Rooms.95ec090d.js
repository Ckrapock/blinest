import{j as u,k,o,b as s,g as _,F as d,x as f,A as h,B as w,a as c,y as m,d as x,c as p}from"./app.2ccf841f.js";import y from"./Room.50afdb00.js";import b from"./Top.773a0ca7.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const v=e=>(h("data-v-86b95fcc"),e=e(),w(),e),C=["title"],B=v(()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1)),$=[B],j=["title"],I=v(()=>c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"})],-1)),N=[I],V={__name:"SliderControls",props:{rooms:Object},setup(e){const l=e,n=u(l.rooms.prev_page_url),t=u(l.rooms.next_page_url||l.rooms.first_page_url),a=r=>{f.Inertia.visit(r,{preserveState:!0,preserveScroll:!0},{only:["rooms"]})};return k(()=>l.rooms,r=>{n.value=r.prev_page_url,t.value=r.next_page_url||r.first_page_url},{deep:!0}),(r,i)=>(o(),s(d,null,[n.value?(o(),s("button",{key:0,type:"button",onClick:i[0]||(i[0]=g=>a(n.value)),class:"slider-control scale-110",style:{left:"-1%"},title:r.__("Previous")},$,8,C)):_("",!0),t.value&&e.rooms.total>5?(o(),s("button",{key:1,type:"button",onClick:i[1]||(i[1]=g=>a(t.value)),class:"slider-control scale-110",style:{right:"-1%"},title:r.__("Next")},N,8,j)):_("",!0)],64))}};var F=S(V,[["__scopeId","data-v-86b95fcc"]]);const M={key:0,class:"grid md:grid-cols-4 xl:grid-cols-5 gap-4 relative"},O={key:1,class:"grid md:grid-cols-4 xl:grid-cols-5 gap-4 relative"},P={__name:"Rooms",props:{id:String|Number,rooms:Object},setup(e){return(l,n)=>e.rooms.data?(o(),s("div",M,[(o(!0),s(d,null,m(e.rooms.data,t=>(o(),p(y,{room:t,key:t.id},null,8,["room"]))),128)),x(F,{rooms:e.rooms},null,8,["rooms"])])):(o(),s("div",O,[(o(!0),s(d,null,m(e.rooms,(t,a)=>(o(),p(b,{room:t,key:t.id,index:a},null,8,["room","index"]))),128))]))}};export{P as default};
