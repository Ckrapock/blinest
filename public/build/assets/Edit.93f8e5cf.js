import{q as u,o as p,b as f,d as a,u as e,w as r,F as g,H as _,a as o,L as b,h as i,t as x,m as y,x as h}from"./app.2ccf841f.js";import{_ as w}from"./AdminLayout.cc6b8d43.js";import{_ as v}from"./TextInput.c49deda3.js";import{L as V}from"./LoadingButton.0800d954.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./Icon.6689216d.js";const C={class:"mb-8 text-3xl font-bold"},k=o("span",{class:"font-medium text-indigo-400"},"/",-1),B={class:"max-w-3xl overflow-hidden rounded-md bg-white shadow"},L=["onSubmit"],N={class:"-mb-8 -mr-6 flex flex-wrap p-8"},$={class:"flex items-center border-t border-gray-100 bg-gray-50 px-8 py-4"},I={__name:"Edit",props:{category:Object},setup(d){const s=d,t=u({name:s.category.name}),l=()=>{t.put(`/admin/categories/${s.category.id}`)},m=()=>{confirm("Are you sure you want to delete this category?")&&h.Inertia.delete(`/admin/categories/${s.category.id}`)};return(F,n)=>(p(),f(g,null,[a(e(_),{title:e(t).name},null,8,["title"]),a(w,null,{default:r(()=>[o("h1",C,[a(e(b),{class:"text-indigo-400 hover:text-indigo-600",href:"/admin/categories"},{default:r(()=>[i("Categories")]),_:1}),k,i(" "+x(e(t).name),1)]),o("div",B,[o("form",{onSubmit:y(l,["prevent"])},[o("div",N,[a(v,{modelValue:e(t).name,"onUpdate:modelValue":n[0]||(n[0]=c=>e(t).name=c),error:e(t).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Name"},null,8,["modelValue","error"])]),o("div",$,[o("button",{class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:m},"Delete Category"),a(V,{loading:e(t).processing,class:"btn-primary ml-auto",type:"submit"},{default:r(()=>[i("Update Category")]),_:1},8,["loading"])])],40,L)])]),_:1})],64))}};export{I as default};
