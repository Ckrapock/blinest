import{P as v,c as p,a,u as l,w as n,F as c,o as d,X as $,b as o,n as k,d as f,t as i,g as _,e as g,v as x,h as O,s as y}from"./app-d721267d.js";import{_ as j}from"./AdminLayout-b514a101.js";import{C as B}from"./Card-73e0c1e9.js";import{_ as C}from"./TextInput-09144107.js";import{_ as N}from"./TextareaInput-7b68c5cb.js";import{_ as b}from"./SelectInput-a8021202.js";import{L as U}from"./LoadingButton-c26c9090.js";import{_ as F}from"./TrashedMessage-84ec9175.js";import{_ as P,a as S,b as D}from"./RoomsList-a3dbcf3e.js";import"./LanguageSwitcher-882651fe.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-1979e914.js";import"./Icon-97e692a8.js";import"./v4-cf522c50.js";import"./Pagination-dbebdbb6.js";import"./Modal-50313139.js";import"./Spinner-7167c342.js";import"./throttle-815b75de.js";import"./_defineProperty-2694e645.js";import"./isSymbol-00efd63c.js";import"./debounce-c15f2e14.js";import"./Tip-74f30155.js";const L={class:"mb-4 text-3xl font-bold text-teal-600"},T=o("span",{class:"font-medium"}," / ",-1),A={class:"flex flex-wrap gap-4"},E={class:"flex w-full flex-col xl:w-1/4"},Y=o("h3",{class:"text-xl font-bold"},"Playlist",-1),J=["onSubmit"],M={value:1},R={value:0},X=["value"],q=["value"],z={class:"flex-1"},_e={__name:"Edit",props:{playlist:Object,filters:Object,answer_types:Object,tracks:Object,moderators:Object},setup(t){const u=t,e=v(u.playlist),w=()=>{e.put(`/admin/playlists/${u.playlist.id}`,{onSuccess:()=>e.reset("password","photo")})},h=()=>{confirm("Are you sure you want to delete this playlist?")&&y.delete(`/admin/playlists/${u.playlist.id}`)},V=()=>{confirm("Are you sure you want to restore this playlist?")&&y.put(`/admin/playlists/${u.playlist.id}/restore`)};return(s,m)=>(d(),p(c,null,[a(l($),{title:`${l(e).name}`},null,8,["title"]),a(j,null,{default:n(()=>[o("h1",L,[a(l(k),{href:s.route("admin.playlists")},{default:n(()=>[f(i(s.__("Playlists")),1)]),_:1},8,["href"]),T,f(" "+i(l(e).name),1)]),o("div",A,[o("div",E,[a(B,{class:"mb-4"},{header:n(()=>[Y]),footer:n(()=>[t.playlist.deleted_at?_("",!0):(d(),p("button",{key:0,class:"text-sm text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:h},i(s.__("Delete")),1)),a(U,{loading:l(e).processing,class:"btn-primary ml-auto",form:"playlistForm",type:"submit"},{default:n(()=>[f(i(s.__("Update")),1)]),_:1},8,["loading"])]),default:n(()=>[o("form",{id:"playlistForm",class:"p-4",onSubmit:g(w,["prevent"])},[a(C,{modelValue:l(e).name,"onUpdate:modelValue":m[0]||(m[0]=r=>l(e).name=r),error:l(e).errors.name,class:"mb-4 w-full",label:s.__("Title")},null,8,["modelValue","error","label"]),a(N,{modelValue:l(e).description,"onUpdate:modelValue":m[1]||(m[1]=r=>l(e).description=r),error:l(e).errors.description,class:"mb-4 w-full",label:s.__("Description")},null,8,["modelValue","error","label"]),a(b,{modelValue:l(e).is_public,"onUpdate:modelValue":m[2]||(m[2]=r=>l(e).is_public=r),error:l(e).errors.is_public,class:"mb-4 w-full",label:s.__("Public")},{default:n(()=>[o("option",M,i(s.__("Yes")),1),o("option",R,i(s.__("No")),1)]),_:1},8,["modelValue","error","label"]),a(b,{modelValue:l(e).user_id,"onUpdate:modelValue":m[3]||(m[3]=r=>l(e).user_id=r),error:l(e).errors.user_id,class:"w-full",label:s.__("Owner")},{default:n(()=>[o("option",{value:t.playlist.owner.id},i(t.playlist.owner.name),9,X),(d(!0),p(c,null,x(t.playlist.moderators,r=>(d(),p("option",{value:r.id},i(r.name),9,q))),256))]),_:1},8,["modelValue","error","label"]),o("small",null,i(s.__("You can transfer the playlist management to a moderator.")),1)],40,J)]),_:1}),a(P,{playlist:t.playlist,class:"mb-4"},null,8,["playlist"]),a(S,{playlist:t.playlist},null,8,["playlist"])]),o("div",z,[t.playlist.deleted_at?(d(),O(F,{key:0,class:"mb-6",onRestore:V},{default:n(()=>[f(i(s.__("This playlist has been deleted.")),1)]),_:1})):_("",!0),a(D,{playlist:t.playlist,filters:t.filters,tracks:t.tracks,answer_types:t.answer_types},null,8,["playlist","filters","tracks","answer_types"])])])]),_:1})],64))}};export{_e as default};