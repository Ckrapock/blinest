import{q as k,i as g,o,b as d,d as s,u as a,H as v,w as r,F as _,a as e,s as N,N as V,L as i,y as x,g as p,m as c,t as m,c as B,O as C}from"./app.258a8340.js";import{_ as O}from"./AdminLayout.b8151563.js";import{_ as y}from"./Icon.5ed47614.js";import{t as T,_ as P,p as $}from"./Pagination.e29a592b.js";import{_ as j}from"./SearchFilter.d3c14e75.js";import{C as F}from"./Card.73fe1151.js";import"./Dropdown.8bb686e2.js";import"./LanguageSwitcher.0c26ca67.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./debounce.3f69e86d.js";import"./_defineProperty.27cae424.js";const L=e("h1",{class:"mb-8 text-3xl font-bold"},"Playlists",-1),S={class:"mb-6 flex items-center justify-between"},D=e("label",{class:"mt-4 block text-gray-700"},"Trashed:",-1),H=e("option",{value:null},null,-1),I=e("option",{value:"with"},"With Trashed",-1),M=e("option",{value:"only"},"Only Trashed",-1),U=[H,I,M],q=e("span",null,"Create",-1),E=e("span",{class:"hidden md:inline"},"\xA0Playlist",-1),R={class:"overflow-x-auto"},W={class:"w-full whitespace-nowrap"},Y=e("tr",{class:"text-left font-bold"},[e("th",{class:"px-6 pb-4 pt-6"},"Name"),e("th",{class:"px-6 pb-4 pt-6"},"Owner"),e("th",{class:"px-6 pb-4 pt-6"},"Moderators"),e("th",{class:"px-6 pb-4 pt-6"},"Tracks"),e("th",{class:"px-6 pb-4 pt-6",colspan:"2"},"Public")],-1),z={class:"border-t"},A=["src"],G={class:"border-t"},J={class:"border-t"},K={class:"flex items-center px-6 py-4 text-sm"},Q={class:"border-t"},X={class:"border-t"},Z={class:"w-px border-t"},ee={key:0},te=e("td",{class:"border-t px-6 py-4",colspan:"4"},"No playlists found.",-1),se=[te],fe={__name:"Index",props:{filters:Object,playlists:Object},setup(h){const b=h,l=k({search:b.filters.search,trashed:b.filters.trashed});g(l,T(()=>{C.Inertia.get("/admin/playlists",$(l),{remember:"forget",preserveState:!0})},150),{deep:!0});const w=()=>{l.reset()};return(n,u)=>(o(),d(_,null,[s(a(v),{title:"Playlists"}),s(O,null,{default:r(()=>[L,e("div",S,[s(j,{modelValue:a(l).search,"onUpdate:modelValue":u[1]||(u[1]=t=>a(l).search=t),class:"mr-4 w-full max-w-md",onReset:w},{default:r(()=>[D,N(e("select",{"onUpdate:modelValue":u[0]||(u[0]=t=>a(l).trashed=t),class:"form-select mt-1 w-full"},U,512),[[V,a(l).trashed]])]),_:1},8,["modelValue"]),s(a(i),{class:"btn-primary",href:n.route("admin.playlists.create")},{default:r(()=>[q,E]),_:1},8,["href"])]),s(F,null,{default:r(()=>[e("div",R,[e("table",W,[Y,(o(!0),d(_,null,x(h.playlists.data,t=>(o(),d("tr",{key:t.id,class:"hover:bg-neutral-200"},[e("td",z,[s(a(i),{class:"flex items-center px-6 py-4 focus:text-blinest-500",href:n.route("admin.playlists.edit",t.id)},{default:r(()=>[t.photo?(o(),d("img",{key:0,class:"-my-2 mr-2 block h-5 w-5 rounded-full",src:t.photo},null,8,A)):p("",!0),c(" "+m(t.name)+" ",1),t.deleted_at?(o(),B(y,{key:1,name:"trash",class:"ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"})):p("",!0)]),_:2},1032,["href"])]),e("td",G,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.users.edit",t.owner.id),tabindex:"-1"},{default:r(()=>[c(m(t.owner.name),1)]),_:2},1032,["href"])]),e("td",J,[e("ul",K,[(o(!0),d(_,null,x(t.moderators,f=>(o(),d("li",{key:f.id},[s(a(i),{class:"m-1 rounded bg-neutral-300 p-1 hover:underline",href:n.route("admin.users.edit",f.id),tabindex:"-1"},{default:r(()=>[c(m(f.name),1)]),_:2},1032,["href"])]))),128))])]),e("td",Q,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[c(m(t.tracks_count),1)]),_:2},1032,["href"])]),e("td",X,[s(a(i),{class:"flex items-center px-6 py-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[c(m(t.is_public?"Yes":"No"),1)]),_:2},1032,["href"])]),e("td",Z,[s(a(i),{class:"flex items-center px-4",href:n.route("admin.playlists.edit",t.id),tabindex:"-1"},{default:r(()=>[s(y,{name:"cheveron-right",class:"block h-6 w-6"})]),_:2},1032,["href"])])]))),128)),h.playlists.length===0?(o(),d("tr",ee,se)):p("",!0)]),s(P,{links:h.playlists.links},null,8,["links"])])]),_:1})]),_:1})],64))}};export{fe as default};