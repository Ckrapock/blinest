import{q as p,o as d,b as _,d as t,u as a,w as o,F as u,H as f,a as r,t as i,h as c,m as b}from"./app.2ccf841f.js";import{_ as x}from"./AppLayout.59afe51e.js";import{_ as h}from"./TextInput.c49deda3.js";import{L as g}from"./LoadingButton.0800d954.js";import{C}from"./Card.53d0f134.js";import"./LanguageSwitcher.cb537353.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Dropdown.6ea7b926.js";import"./Icon.6689216d.js";import"./Navbar.f548c814.js";import"./pickBy.83d2d581.js";import"./debounce.1e54c607.js";import"./_defineProperty.09f4b3d5.js";import"./SocialIcon.895ec767.js";const w={class:"text-xl font-bold"},V=["onSubmit"],y={class:"-mb-8 -mr-6 flex flex-wrap p-8"},B={class:"flex items-center justify-end px-8 py-4"},z={__name:"Create",setup(N){const e=p({name:""}),l=()=>{e.post("/teams")};return(s,m)=>(d(),_(u,null,[t(a(f),{title:"Create Team"}),t(x,null,{default:o(()=>[t(C,{class:"max-w-xl mx-auto"},{header:o(()=>[r("h1",w,i(s.__("Creating a team")),1)]),default:o(()=>[r("form",{onSubmit:b(l,["prevent"])},[r("div",y,[t(h,{modelValue:a(e).name,"onUpdate:modelValue":m[0]||(m[0]=n=>a(e).name=n),error:a(e).errors.name,class:"w-full pb-8",label:s.__("Name")},null,8,["modelValue","error","label"])]),r("div",B,[t(g,{loading:a(e).processing,class:"btn-primary",type:"submit"},{default:o(()=>[c(i(s.__("Create Team")),1)]),_:1},8,["loading"])])],40,V)]),_:1})]),_:1})],64))}};export{z as default};
