import{h as d,w as i,o as l,b as t,c as n,v as c,d as _,t as s,F as r,a as x}from"./app-f6824ecf.js";import{C as p}from"./Card-261bd2f6.js";import{_ as u}from"./Pagination-1822251b.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"w-full whitespace-nowrap"},f=t("thead",null,[t("tr",{class:"text-left font-bold"},[t("th",{class:"px-2 pb-4 pt-6"},"Utilisateur"),t("th",{class:"px-2 pb-4 pt-6"},"Bans")])],-1),m={class:"border-t px-2 py-4"},b={class:"flex items-center gap-2"},k=["src"],y={class:"flex flex-col"},B={class:"text-xs text-neutral-500"},w={class:"border-t px-2 py-4"},U={class:"flex flex-col"},g={class:"text-xs text-neutral-500"},v={class:"text-xs text-neutral-500"},C={class:"text-xs text-neutral-500"},N={class:"text-xs text-neutral-500"},L={__name:"BannedUsers",props:{bannedUsers:Object},setup(o){return(V,D)=>(l(),d(p,null,{default:i(()=>[t("table",h,[f,t("tbody",null,[(l(!0),n(r,null,c(o.bannedUsers.data,e=>(l(),n("tr",{key:e.id},[t("td",m,[t("div",b,[t("img",{src:e.photo,class:"h-10 w-10 rounded-full"},null,8,k),t("div",y,[_(s(e.name)+" ",1),t("span",B,"ID : "+s(e.id),1)])])]),t("td",w,[t("ul",U,[(l(!0),n(r,null,c(e.bans,a=>(l(),n("li",{key:a.id,class:"flex flex-col border-b border-neutral-600 p-2"},[t("span",g,"Banni par : "+s(a.banned_by),1),t("span",v,"le : "+s(a.created_at),1),t("span",C,"Raison : "+s(a.comment),1),t("span",N,"Expire le : "+s(a.expired_at),1)]))),128))])])]))),128))])]),x(u,{links:o.bannedUsers.links},null,8,["links"])]),_:1}))}};export{L as default};
