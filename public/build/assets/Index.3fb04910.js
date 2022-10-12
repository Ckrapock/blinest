import{q as x,k as b,o as l,b as i,d as t,u as a,w as r,F as m,H as g,a as e,L as d,y as k,h as p,t as f,c as y,g as _,x as w}from"./app.2ccf841f.js";import{_ as v}from"./AdminLayout.cc6b8d43.js";import{_ as h}from"./Icon.6689216d.js";import{t as V,p as $}from"./pickBy.83d2d581.js";import{_ as B}from"./Pagination.535567c1.js";import{_ as C}from"./SearchFilter.5cf78649.js";import{C as N}from"./Card.53d0f134.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./debounce.1e54c607.js";import"./_defineProperty.09f4b3d5.js";const j=e("h1",{class:"mb-8 text-3xl font-bold"},"Pages",-1),F={class:"mb-6 flex items-center justify-between"},L=e("span",null,"Create",-1),P=e("span",{class:"hidden md:inline"},"\xA0Page",-1),H={class:"overflow-x-auto"},I={class:"w-full whitespace-nowrap"},O=e("thead",null,[e("tr",{class:"text-left font-bold"},[e("th",{class:"px-6 pb-4 pt-6"},"Title"),e("th",{class:"px-6 pb-4 pt-6",colspan:"2"},"Revised at")])],-1),R={class:"border-t"},S={class:"border-t"},T={class:"w-px border-t"},q={key:0},D=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No pages found.",-1),E=[D],se={__name:"Index",props:{filters:Object,pages:Object},setup(n){const o=x({search:n.filters.search});b(o,V(()=>{w.Inertia.get("/admin/pages",$(o),{remember:"forget",preserveState:!0})},150),{deep:!0});const u=()=>{o.reset()};return(z,c)=>(l(),i(m,null,[t(a(g),{title:"Pages"}),t(v,null,{default:r(()=>[j,e("div",F,[t(C,{modelValue:a(o).search,"onUpdate:modelValue":c[0]||(c[0]=s=>a(o).search=s),class:"mr-4 w-full max-w-md",onReset:u},null,8,["modelValue"]),t(a(d),{class:"btn-primary",href:"/admin/pages/create"},{default:r(()=>[L,P]),_:1})]),t(N,null,{default:r(()=>[e("div",H,[e("table",I,[O,e("tbody",null,[(l(!0),i(m,null,k(n.pages.data,s=>(l(),i("tr",{key:s.id,class:"hover:bg-gray-100"},[e("td",R,[t(a(d),{class:"flex items-center px-6 py-4",href:`/admin/pages/${s.id}/edit`},{default:r(()=>[p(f(s.title)+" ",1),s.deleted_at?(l(),y(h,{key:0,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):_("",!0)]),_:2},1032,["href"])]),e("td",S,[t(a(d),{class:"flex items-center px-6 py-4",href:`/admin/pages/${s.id}/edit`,tabindex:"-1"},{default:r(()=>[p(f(s.revised_at),1)]),_:2},1032,["href"])]),e("td",T,[t(a(d),{class:"flex items-center px-4",href:`/admin/pages/${s.id}/edit`,tabindex:"-1"},{default:r(()=>[t(h,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),n.pages.data.length===0?(l(),i("tr",q,E)):_("",!0)])])]),t(B,{links:n.pages.links},null,8,["links"])]),_:1})]),_:1})],64))}};export{se as default};
