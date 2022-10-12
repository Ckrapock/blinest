import{q as w,k as g,o,b as d,d as s,u as a,w as r,F as p,H as v,a as e,t as c,E as V,G as N,L as i,y as x,g as _,h,c as B,x as C}from"./app.2ccf841f.js";import{_ as T}from"./AdminLayout.cc6b8d43.js";import{_ as y}from"./Icon.6689216d.js";import{t as O,p as P}from"./pickBy.83d2d581.js";import{_ as $}from"./Pagination.535567c1.js";import{_ as j}from"./SearchFilter.5cf78649.js";import{C as F}from"./Card.53d0f134.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./debounce.1e54c607.js";import"./_defineProperty.09f4b3d5.js";const L={class:"mb-8 text-3xl font-bold"},S={class:"mb-6 flex items-center justify-between"},D=e("label",{class:"mt-4 block text-gray-700"},"Trashed:",-1),E=e("option",{value:null},null,-1),H=e("option",{value:"with"},"With Trashed",-1),I=e("option",{value:"only"},"Only Trashed",-1),M=[E,H,I],U=e("span",null,"Create",-1),q=e("span",{class:"hidden md:inline"},"\xA0Playlist",-1),G={class:"overflow-x-auto"},R={class:"w-full whitespace-nowrap"},W=e("tr",{class:"text-left font-bold"},[e("th",{class:"px-6 pb-4 pt-6"},"Name"),e("th",{class:"px-6 pb-4 pt-6"},"Owner"),e("th",{class:"px-6 pb-4 pt-6"},"Moderators"),e("th",{class:"px-6 pb-4 pt-6"},"Tracks"),e("th",{class:"px-6 pb-4 pt-6",colspan:"2"},"Public")],-1),Y={class:"border-t"},z=["src"],A={class:"border-t"},J={class:"border-t"},K={class:"flex items-center px-6 py-4 text-sm"},Q={class:"border-t"},X={class:"border-t"},Z={class:"w-px border-t"},ee={key:0},te=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No playlists found.",-1),se=[te],pe={__name:"Index",props:{filters:Object,playlists:Object},setup(m){const b=m,l=w({search:b.filters.search,trashed:b.filters.trashed});g(l,O(()=>{C.Inertia.get("/admin/playlists",P(l),{remember:"forget",preserveState:!0})},150),{deep:!0});const k=()=>{l.reset()};return(n,u)=>(o(),d(p,null,[s(a(v),{title:"Playlists"}),s(T,null,{default:r(()=>[e("h1",L,"Playlists ("+c(m.playlists.total)+")",1),e("div",S,[s(j,{modelValue:a(l).search,"onUpdate:modelValue":u[1]||(u[1]=t=>a(l).search=t),class:"mr-4 w-full max-w-md",onReset:k},{default:r(()=>[D,V(e("select",{"onUpdate:modelValue":u[0]||(u[0]=t=>a(l).trashed=t),class:"form-select mt-1 w-full"},M,512),[[N,a(l).trashed]])]),_:1},8,["modelValue"]),s(a(i),{class:"btn-primary",href:n.route("admin.playlists.create")},{default:r(()=>[U,q]),_:1},8,["href"])]),s(F,null,{default:r(()=>[e("div",G,[e("table",R,[W,(o(!0),d(p,null,x(m.playlists.data,t=>(o(),d("tr",{key:t.id,class:"hover:bg-neutral-200"},[e("td",Y,[s(a(i),{class:"flex items-center px-6 py-4 focus:text-blinest-500",href:n.route("admin.playlists.edit",t.id)},{default:r(()=>[t.photo?(o(),d("img",{key:0,class:"-my-2 mr-2 block h-5 w-5 rounded-full",src:t.photo},null,8,z)):_("",!0),h(" "+c(t.name)+" ",1),t.deleted_at?(o(),B(y,{key:1,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):_("",!0)]),_:2},1032,["href"])]),e("td",A,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.users.edit",t.owner.id),tabindex:"-1"},{default:r(()=>[h(c(t.owner.name),1)]),_:2},1032,["href"])]),e("td",J,[e("ul",K,[(o(!0),d(p,null,x(t.moderators,f=>(o(),d("li",{key:f.id},[s(a(i),{class:"m-1 rounded bg-neutral-300 p-1 hover:underline",href:n.route("admin.users.edit",f.id),tabindex:"-1"},{default:r(()=>[h(c(f.name),1)]),_:2},1032,["href"])]))),128))])]),e("td",Q,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[h(c(t.tracks_count),1)]),_:2},1032,["href"])]),e("td",X,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[h(c(t.is_public?"Yes":"No"),1)]),_:2},1032,["href"])]),e("td",Z,[s(a(i),{class:"flex items-center px-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[s(y,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),m.playlists.length===0?(o(),d("tr",ee,se)):_("",!0)]),s($,{links:m.playlists.links},null,8,["links"])])]),_:1})]),_:1})],64))}};export{pe as default};
