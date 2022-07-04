import{o as d,b as c,d as a,u as o,H as p,w as n,F as _,a as e,t as l,L as i,m,s as h,P as g,y as x}from"./app.258a8340.js";import{_ as f}from"./TextInput.53c9a2da.js";import{_ as v}from"./AppLayout.758ac775.js";import"./Icon.5ed47614.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.8bb686e2.js";import"./Volume.0b53fb6c.js";import"./LanguageSwitcher.0c26ca67.js";import"./_defineProperty.27cae424.js";const w={class:"mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6"},y={class:"mx-auto mb-8 max-w-screen-sm lg:mb-16"},b={class:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"},k=e("p",{class:"font-light text-gray-500 dark:text-gray-400 sm:text-xl"},"Rejoins une team et partages tes scores avec les autres membres pour exploser les compteurs!",-1),j={class:"flex justify-center my-6"},V={class:"flex justify-center mt-16"},B={class:"flex items-center gap-8"},L=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",viewBox:"0 0 20 20",fill:"currentColor"},[e("title",null,"Previous team list"),e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),C={class:"grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"},N=["src","alt"],S={class:"mb-1 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},T={href:"#"},z=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",viewBox:"0 0 20 20",fill:"currentColor"},[e("title",null,"Next team list"),e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),I={__name:"Index",props:{teams:Object,user:Object},setup(r){return(s,u)=>(d(),c(_,null,[a(o(p),{title:s.__("Teams")},null,8,["title"]),a(v,null,{default:n(()=>[e("section",null,[e("div",w,[e("div",y,[e("h2",b,l(s.__("Teams")),1),k,e("div",j,[a(o(i),{href:"/teams/create",class:"btn-primary btn-lg"},{default:n(()=>[m(l(s.__("Create a team")),1)]),_:1})]),e("div",V,[a(f,{modelValue:s.search,"onUpdate:modelValue":u[0]||(u[0]=t=>s.search=t),placeholder:s.__("Search a team")},null,8,["modelValue","placeholder"])])]),e("div",B,[h(a(o(i),{href:r.teams.prev_page_url},{default:n(()=>[L]),_:1},8,["href"]),[[g,r.teams.prev_page_url]]),e("div",C,[(d(!0),c(_,null,x(r.teams.data,t=>(d(),c("div",{class:"text-center text-gray-500 dark:text-gray-400",key:t.id},[e("img",{class:"mx-auto mb-4 h-36 w-36 rounded-full",src:t.photo,alt:t.name},null,8,N),e("h3",S,[e("a",T,l(t.name),1)]),e("p",null,"@"+l(t.owner.name),1),m(" "+l(t.members_count)+" / "+l(t.seats)+" ",1),a(o(i),{href:"/teams/create",class:"btn-secondary my-6"},{default:n(()=>[m(l(s.__("Send a join request")),1)]),_:1})]))),128))]),h(a(o(i),{href:r.teams.next_page_url},{default:n(()=>[z]),_:1},8,["href"]),[[g,r.teams.next_page_url]])])])])]),_:1})],64))}};export{I as default};