import{P as b,l as g,c as i,a as t,u as a,w as o,F as p,o as l,X as w,b as e,n as d,t as c,v as k,d as f,h as y,g as h,s as v}from"./app-f6824ecf.js";import{_ as V}from"./AdminLayout-dca5ea69.js";import{_ as u}from"./Icon-1ce38a62.js";import{t as $,p as B}from"./throttle-b11e308e.js";import{_ as C}from"./Pagination-1822251b.js";import{_ as N}from"./SearchFilter-1e869e2a.js";import{C as P}from"./Card-261bd2f6.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./_defineProperty-98183d58.js";import"./isSymbol-363e1f0a.js";import"./debounce-d2fd0fa0.js";const j=e("h1",{class:"mb-8 text-3xl font-bold"},"Pages",-1),F={class:"mb-6 flex items-center justify-between"},L=e("span",null,"Create",-1),O=e("span",{class:"hidden md:inline"}," Page",-1),S={class:"overflow-x-auto"},T={class:"w-full whitespace-nowrap"},D={class:"text-left font-bold"},E={class:"px-6 pb-4 pt-6"},I={class:"px-6 pb-4 pt-6",colspan:"2"},J={class:"border-t"},R={class:"border-t"},U={class:"w-px border-t"},X={key:0},q=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No pages found.",-1),z=[q],re={__name:"Index",props:{filters:Object,pages:Object},setup(n){const r=b({search:n.filters.search});g(r,$(()=>{v.get("/admin/pages",B(r),{remember:"forget",preserveState:!0})},150),{deep:!0});const x=()=>{r.reset()};return(m,_)=>(l(),i(p,null,[t(a(w),{title:"Pages"}),t(V,null,{default:o(()=>[j,e("div",F,[t(N,{modelValue:a(r).search,"onUpdate:modelValue":_[0]||(_[0]=s=>a(r).search=s),class:"mr-4 w-full max-w-md",onReset:x},null,8,["modelValue"]),t(a(d),{class:"btn-primary",href:"/admin/pages/create"},{default:o(()=>[L,O]),_:1})]),t(P,null,{default:o(()=>[e("div",S,[e("table",T,[e("thead",null,[e("tr",D,[e("th",E,c(m.__("Title")),1),e("th",I,c(m.__("Last revision")),1)])]),e("tbody",null,[(l(!0),i(p,null,k(n.pages.data,s=>(l(),i("tr",{key:s.id},[e("td",J,[t(a(d),{class:"flex items-center px-6 py-4",href:`/admin/pages/${s.id}/edit`},{default:o(()=>[f(c(s.title)+" ",1),s.deleted_at?(l(),y(u,{key:0,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):h("",!0)]),_:2},1032,["href"])]),e("td",R,[t(a(d),{class:"flex items-center px-6 py-4",href:`/admin/pages/${s.id}/edit`,tabindex:"-1"},{default:o(()=>[f(c(s.date),1)]),_:2},1032,["href"])]),e("td",U,[t(a(d),{class:"flex items-center px-4",href:`/admin/pages/${s.id}/edit`,tabindex:"-1"},{default:o(()=>[t(u,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),n.pages.data.length===0?(l(),i("tr",X,z)):h("",!0)])])]),t(C,{links:n.pages.links},null,8,["links"])]),_:1})]),_:1})],64))}};export{re as default};
