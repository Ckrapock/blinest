import{q as y,o as m,b as i,d as a,u as e,w as d,F as p,H as w,a as s,g as c,L as V,h as u,t as f,c as k,m as v,y as $,x as _}from"./app.2ccf841f.js";import{_ as B}from"./AdminLayout.cc6b8d43.js";import{_ as F}from"./TextInput.c49deda3.js";import{_ as L}from"./SelectInput.7600b19c.js";import{F as N}from"./FileInput.0bdf4496.js";import{L as T}from"./LoadingButton.0800d954.js";import{_ as U}from"./TrashedMessage.39a2a81b.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./Icon.6689216d.js";const C={class:"mb-8 flex items-center"},I=["src"],S={class:"text-3xl font-bold"},A=s("span",{class:"font-medium text-indigo-400"},"/",-1),D={class:"max-w-3xl overflow-hidden rounded-md bg-white shadow"},E=["onSubmit"],H={class:"-mb-8 -mr-6 flex flex-wrap p-8"},O=["value"],j={class:"flex items-center border-t border-gray-100 bg-gray-50 px-8 py-4"},Y={__name:"Edit",props:{team:Object},setup(r){const n=r,t=y({_method:"put",name:n.team.name,user_id:n.team.user_id,photo:null}),h=()=>{t.post(`/admin/teams/${n.team.id}`)},b=()=>{confirm("Are you sure you want to delete this team?")&&_.Inertia.delete(`/admin/teams/${n.team.id}`)},g=()=>{confirm("Are you sure you want to restore this team?")&&_.Inertia.put(`/admin/teams/${n.team.id}/restore`)};return(x,l)=>(m(),i(p,null,[a(e(w),{title:e(t).name},null,8,["title"]),a(B,null,{default:d(()=>[s("div",C,[r.team.photo?(m(),i("img",{key:0,class:"mr-4 block h-8 w-8 rounded-full",src:r.team.photo},null,8,I)):c("",!0),s("h1",S,[a(e(V),{class:"text-indigo-400 hover:text-indigo-600",href:"/admin/teams"},{default:d(()=>[u("Teams")]),_:1}),A,u(" "+f(e(t).name),1)])]),r.team.deleted_at?(m(),k(U,{key:0,class:"mb-6",onRestore:g},{default:d(()=>[u(" This team has been deleted. ")]),_:1})):c("",!0),s("div",D,[s("form",{onSubmit:v(h,["prevent"])},[s("div",H,[a(F,{modelValue:e(t).name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(t).name=o),error:e(t).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Name"},null,8,["modelValue","error"]),a(L,{modelValue:e(t).user_id,"onUpdate:modelValue":l[1]||(l[1]=o=>e(t).user_id=o),error:e(t).errors.user_id,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Owner"},{default:d(()=>[(m(!0),i(p,null,$(r.team.members,o=>(m(),i("option",{key:o.id,value:o.id},f(o.name),9,O))),128))]),_:1},8,["modelValue","error"]),a(N,{modelValue:e(t).photo,"onUpdate:modelValue":l[2]||(l[2]=o=>e(t).photo=o),error:e(t).errors.photo,class:"w-full pb-8 pr-6",type:"file",accept:"image/*",label:x.__("Photo")},null,8,["modelValue","error","label"])]),s("div",j,[r.team.deleted_at?c("",!0):(m(),i("button",{key:0,class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:b},"Delete Team")),a(T,{loading:e(t).processing,class:"btn-primary ml-auto",type:"submit"},{default:d(()=>[u("Update Team")]),_:1},8,["loading"])])],40,E)])]),_:1})],64))}};export{Y as default};
