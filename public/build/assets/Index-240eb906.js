import{P as x,l as b,c,a as s,u as a,w as r,F as p,o as l,X as g,b as e,n as i,v as w,d,t as m,h as k,g as f,s as v}from"./app-f6824ecf.js";import{_ as C}from"./AdminLayout-dca5ea69.js";import{_ as h}from"./Icon-1ce38a62.js";import{t as $,p as y}from"./throttle-b11e308e.js";import{_ as V}from"./Pagination-1822251b.js";import{_ as N}from"./SearchFilter-1e869e2a.js";import{C as B}from"./Card-261bd2f6.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./_defineProperty-98183d58.js";import"./isSymbol-363e1f0a.js";import"./debounce-d2fd0fa0.js";const j=e("h1",{class:"mb-8 text-3xl font-bold"},"Categories",-1),P={class:"mb-6 flex items-center justify-between"},R=e("span",null,"Create",-1),F=e("span",{class:"hidden md:inline"}," Category",-1),O={class:"overflow-x-auto"},S={class:"w-full whitespace-nowrap"},D=e("thead",null,[e("tr",{class:"text-left font-bold"},[e("th",{class:"px-6 pb-4 pt-6"},"Name"),e("th",{class:"px-6 pb-4 pt-6"},"Public Rooms"),e("th",{class:"px-6 pb-4 pt-6",colspan:"2"},"Private Rooms")])],-1),E={class:"border-t"},I={class:"border-t"},J={class:"border-t"},L={class:"w-px border-t"},T={key:0},U=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No categories found.",-1),X=[U],re={__name:"Index",props:{filters:Object,categories:Object},setup(n){const o=x({search:n.filters.search});b(o,$(()=>{v.get("/admin/categories",y(o),{remember:"forget",preserveState:!0})},150),{deep:!0});const u=()=>{o.reset()};return(z,_)=>(l(),c(p,null,[s(a(g),{title:"Categories"}),s(C,null,{default:r(()=>[j,e("div",P,[s(N,{modelValue:a(o).search,"onUpdate:modelValue":_[0]||(_[0]=t=>a(o).search=t),class:"mr-4 w-full max-w-md",onReset:u},null,8,["modelValue"]),s(a(i),{class:"btn-primary",href:"/admin/categories/create"},{default:r(()=>[R,F]),_:1})]),s(B,null,{default:r(()=>[e("div",O,[e("table",S,[D,e("tbody",null,[(l(!0),c(p,null,w(n.categories.data,t=>(l(),c("tr",{key:t.id,class:"hover:bg-gray-100"},[e("td",E,[s(a(i),{class:"flex items-center px-6 py-4",href:`/admin/categories/${t.id}/edit`},{default:r(()=>[d(m(t.name)+" ",1),t.deleted_at?(l(),k(h,{key:0,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):f("",!0)]),_:2},1032,["href"])]),e("td",I,[s(a(i),{class:"flex items-center px-6 py-4",href:`/admin/categories/${t.id}/edit`,tabindex:"-1"},{default:r(()=>[d(m(t.public_rooms_count),1)]),_:2},1032,["href"])]),e("td",J,[s(a(i),{class:"flex items-center px-6 py-4",href:`/admin/categories/${t.id}/edit`,tabindex:"-1"},{default:r(()=>[d(m(t.private_rooms_count),1)]),_:2},1032,["href"])]),e("td",L,[s(a(i),{class:"flex items-center px-4",href:`/admin/categories/${t.id}/edit`,tabindex:"-1"},{default:r(()=>[s(h,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),n.categories.data.length===0?(l(),c("tr",T,X)):f("",!0)])])]),s(V,{links:n.categories.links},null,8,["links"])]),_:1})]),_:1})],64))}};export{re as default};
