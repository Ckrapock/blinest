import{k as m,c,a,u as b,w as v,F as p,o as g,X as f,b as t,f as n,t as u,I as o,N as l}from"./app-f6824ecf.js";import{_ as h}from"./AppLayout-682c8b6d.js";import x from"./Stats-f62c8dec.js";import M from"./UsersManagement-c6cb40a3.js";import _ from"./Moderators-2149d9da.js";import k from"./TrashedMessages-10965127.js";import $ from"./BannedUsers-348881c1.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./Icon-1ce38a62.js";import"./Navbar-c61313dc.js";import"./TextInput-4085333a.js";import"./v4-cf522c50.js";import"./throttle-b11e308e.js";import"./_defineProperty-98183d58.js";import"./isSymbol-363e1f0a.js";import"./debounce-d2fd0fa0.js";import"./SocialIcon-b495e5c3.js";import"./Card-261bd2f6.js";import"./BanForm-9af547d5.js";import"./SelectInput-aa3e4f90.js";import"./Pagination-1822251b.js";const U={class:"flex-grow"},w={class:"flex flex-wrap border-b border-neutral-700 text-center text-sm font-medium text-neutral-400"},C={class:"mr-2"},y={class:"mr-2"},j={class:"mr-2"},O={class:"mr-2"},Z={__name:"Index",props:{stats:Object,moderators:Object,trashedMessages:Object,bannedUsers:Object},setup(r){const e=m("trashedMessages");return(d,s)=>(g(),c(p,null,[a(b(f),{title:d.__("Moderation")},null,8,["title"]),a(h,null,{default:v(()=>[t("div",U,[a(x,{stats:r.stats},null,8,["stats"]),t("div",null,[t("ul",w,[t("li",C,[t("button",{type:"button",onClick:s[0]||(s[0]=i=>e.value="trashedMessages"),class:n(["inline-block rounded-t-lg p-4 hover:bg-neutral-800 hover:text-neutral-300",{"active bg-neutral-800 text-neutral-300":e.value=="trashedMessages"}])},"Messages supprimés ("+u(r.trashedMessages.total)+")",3)]),t("li",y,[t("button",{type:"button",onClick:s[1]||(s[1]=i=>e.value="bannedUsers"),class:n(["inline-block rounded-t-lg p-4 hover:bg-neutral-800 hover:text-neutral-300",{"active bg-neutral-800 text-neutral-300":e.value=="bannedUsers"}])},"Utilisateurs bannis ("+u(r.bannedUsers.total)+")",3)]),t("li",j,[t("button",{type:"button",onClick:s[2]||(s[2]=i=>e.value="userManagement"),class:n(["inline-block rounded-t-lg p-4 hover:bg-neutral-800 hover:text-neutral-300",{"active bg-neutral-800 text-neutral-300":e.value=="userManagement"}])},"Gestion des utilisateurs",2)]),t("li",O,[t("button",{type:"button",onClick:s[3]||(s[3]=i=>e.value="moderators"),class:n(["inline-block rounded-t-lg p-4 hover:bg-neutral-800 hover:text-neutral-300",{"active bg-neutral-800 text-neutral-300":e.value=="moderators"}])},"Modérateurs",2)])]),o(a(k,{class:"rounded-t-none",trashedMessages:r.trashedMessages},null,8,["trashedMessages"]),[[l,e.value==="trashedMessages"]]),o(a($,{class:"rounded-t-none",bannedUsers:r.bannedUsers},null,8,["bannedUsers"]),[[l,e.value==="bannedUsers"]]),o(a(M,{class:"rounded-t-none"},null,512),[[l,e.value==="userManagement"]]),o(a(_,{class:"rounded-t-none",moderators:r.moderators},null,8,["moderators"]),[[l,e.value==="moderators"]])])])]),_:1})],64))}};export{Z as default};