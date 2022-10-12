import{q as w,k as y,o as l,b as d,d as s,u as a,w as r,F as f,H as k,a as e,E as v,G as g,L as c,y as V,h as u,t as _,c as N,g as p,x as T}from"./app.2ccf841f.js";import{_ as B}from"./AdminLayout.cc6b8d43.js";import{_ as b}from"./Icon.6689216d.js";import{t as C,p as $}from"./pickBy.83d2d581.js";import{C as j}from"./Card.53d0f134.js";import{_ as F}from"./Pagination.535567c1.js";import{_ as L}from"./SearchFilter.5cf78649.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./debounce.1e54c607.js";import"./_defineProperty.09f4b3d5.js";const O=e("h1",{class:"mb-8 text-3xl font-bold"},"Teams",-1),S={class:"mb-6 flex items-center justify-between"},D=e("option",{value:null},null,-1),E=e("option",{value:"with"},"With Trashed",-1),H=e("option",{value:"only"},"Only Trashed",-1),I=[D,E,H],M=e("span",null,"Create",-1),U=e("span",{class:"hidden md:inline"},"\xA0Team",-1),q={class:"overflow-x-auto"},G={class:"w-full whitespace-nowrap"},R=e("thead",null,[e("tr",{class:"text-left font-bold"},[e("th",{class:"px-6 pb-4 pt-6"},"Name"),e("th",{class:"px-6 pb-4 pt-6",colspan:"2"},"Members")])],-1),W={class:"border-t"},z={class:"border-t"},A={class:"w-px border-t"},J={key:0},K=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No teams found.",-1),P=[K],ie={__name:"Index",props:{filters:Object,teams:Object},setup(n){const h=n,o=w({search:h.filters.search,trashed:h.filters.trashed});y(o,C(()=>{T.Inertia.get("/admin/teams",$(o),{remember:"forget",preserveState:!0})},150),{deep:!0});const x=()=>{o.reset()};return(m,i)=>(l(),d(f,null,[s(a(k),{title:"Teams"}),s(B,null,{default:r(()=>[O,e("div",S,[s(L,{modelValue:a(o).search,"onUpdate:modelValue":i[1]||(i[1]=t=>a(o).search=t),class:"mr-4 w-full max-w-md",onReset:x},{default:r(()=>[v(e("select",{"onUpdate:modelValue":i[0]||(i[0]=t=>a(o).trashed=t),class:"form-select mt-1 w-full"},I,512),[[g,a(o).trashed]])]),_:1},8,["modelValue"]),s(a(c),{class:"btn-primary",href:"/admin/teams/create"},{default:r(()=>[M,U]),_:1})]),s(j,null,{default:r(()=>[e("div",q,[e("table",G,[R,e("tbody",null,[(l(!0),d(f,null,V(n.teams.data,t=>(l(),d("tr",{key:t.id,class:"hover:bg-neutral-200"},[e("td",W,[s(a(c),{class:"flex items-center px-6 py-4 focus:text-indigo-500",href:m.route("admin.teams.edit",t)},{default:r(()=>[u(_(t.name)+" ",1),t.deleted_at?(l(),N(b,{key:0,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):p("",!0)]),_:2},1032,["href"])]),e("td",z,[s(a(c),{class:"flex items-center px-6 py-4",href:m.route("admin.teams.edit",t),tabindex:"-1"},{default:r(()=>[u(_(t.members_count),1)]),_:2},1032,["href"])]),e("td",A,[s(a(c),{class:"flex items-center px-4",href:m.route("admin.teams.edit",t),tabindex:"-1"},{default:r(()=>[s(b,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),n.teams.data.length===0?(l(),d("tr",J,P)):p("",!0)])])]),s(F,{links:n.teams.links},null,8,["links"])]),_:1})]),_:1})],64))}};export{ie as default};
