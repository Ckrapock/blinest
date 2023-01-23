import{P as p,c as u,a,u as e,w as s,F as f,o as g,X as _,b as o,n as b,d as n,t as x,e as y,s as h}from"./app-f6824ecf.js";import{_ as w}from"./AdminLayout-dca5ea69.js";import{_ as v}from"./TextInput-4085333a.js";import{L as V}from"./LoadingButton-7c96c2e4.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./Icon-1ce38a62.js";import"./v4-cf522c50.js";const C={class:"mb-8 text-3xl font-bold"},B=o("span",{class:"font-medium text-indigo-400"},"/",-1),N={class:"max-w-3xl overflow-hidden rounded-md bg-white shadow"},$=["onSubmit"],k={class:"-mb-8 -mr-6 flex flex-wrap p-8"},S={class:"flex items-center border-t border-gray-100 bg-gray-50 px-8 py-4"},P={__name:"Edit",props:{category:Object},setup(l){const r=l,t=p({name:r.category.name}),d=()=>{t.put(`/admin/categories/${r.category.id}`)},m=()=>{confirm("Are you sure you want to delete this category?")&&h.delete(`/admin/categories/${r.category.id}`)};return(D,i)=>(g(),u(f,null,[a(e(_),{title:e(t).name},null,8,["title"]),a(w,null,{default:s(()=>[o("h1",C,[a(e(b),{class:"text-indigo-400 hover:text-indigo-600",href:"/admin/categories"},{default:s(()=>[n("Categories")]),_:1}),B,n(" "+x(e(t).name),1)]),o("div",N,[o("form",{onSubmit:y(d,["prevent"])},[o("div",k,[a(v,{modelValue:e(t).name,"onUpdate:modelValue":i[0]||(i[0]=c=>e(t).name=c),error:e(t).errors.name,class:"w-full pb-8 pr-6 lg:w-1/2",label:"Name"},null,8,["modelValue","error"])]),o("div",S,[o("button",{class:"text-red-600 hover:underline",tabindex:"-1",type:"button",onClick:m},"Delete Category"),a(V,{loading:e(t).processing,class:"btn-primary ml-auto",type:"submit"},{default:s(()=>[n("Update Category")]),_:1},8,["loading"])])],40,$)])]),_:1})],64))}};export{P as default};
