import{P as b,c as _,a as s,u as e,w as n,F as V,o as f,X as w,b as d,n as k,d as p,t as i,I as c,N as y,e as v}from"./app-f6824ecf.js";import{_ as U}from"./AdminLayout-dca5ea69.js";import{F as C}from"./FileInput-e3a47611.js";import{_ as t}from"./TextInput-4085333a.js";import{_ as g}from"./TextareaInput-2b4b2789.js";import{C as u}from"./CheckboxInput-edaa6594.js";import{L as P}from"./LoadingButton-7c96c2e4.js";import{C as N}from"./Card-261bd2f6.js";import"./_defineProperty-98183d58.js";import"./isSymbol-363e1f0a.js";import"./LanguageSwitcher-d168d683.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-b8d92112.js";import"./Icon-1ce38a62.js";import"./v4-cf522c50.js";const B={class:"mb-8 text-3xl font-bold"},D=d("span",{class:"font-medium text-blinest-400"},"/",-1),F=["onSubmit"],S={class:"flex"},I={class:"flex w-1/3 flex-col border-r p-8"},R={class:"mb-6 font-bold"},T={class:"flex flex-wrap p-8"},$={class:"flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"},Q={__name:"Create",setup(L){const r=b({name:"",description:"",is_public:!1,is_pro:!1,is_random:!0,is_active:!0,is_chat_active:!0,discord_webhook_url:"",color:"",password:"",tracks_by_round:15,track_duration:30,pause_between_tracks:0,pause_between_rounds:10,photo:null}),m=()=>{r.post(route("admin.rooms.store"))};return(a,l)=>(f(),_(V,null,[s(e(w),{title:"Create Room"}),s(U,null,{default:n(()=>[d("h1",B,[s(e(k),{class:"text-blinest-400 hover:text-blinest-600",href:a.route("admin.rooms")},{default:n(()=>[p(i(a.__("Rooms")),1)]),_:1},8,["href"]),D,p(" "+i(a.__("Create")),1)]),s(N,null,{default:n(()=>[d("form",{onSubmit:v(m,["prevent"])},[d("div",S,[d("div",I,[d("p",R,i(a.__("Options")),1),s(t,{modelValue:e(r).tracks_by_round,"onUpdate:modelValue":l[0]||(l[0]=o=>e(r).tracks_by_round=o),error:e(r).errors.tracks_by_round,type:"number",step:"1",min:"1",max:"100",class:"pb-6",label:a.__("Tracks by round")},null,8,["modelValue","error","label"]),s(t,{modelValue:e(r).track_duration,"onUpdate:modelValue":l[1]||(l[1]=o=>e(r).track_duration=o),error:e(r).errors.track_duration,type:"number",step:"1",min:"5",max:"30",class:"pb-6",label:a.__("Track duration")},null,8,["modelValue","error","label"]),s(t,{modelValue:e(r).pause_between_tracks,"onUpdate:modelValue":l[2]||(l[2]=o=>e(r).pause_between_tracks=o),error:e(r).errors.pause_between_tracks,type:"number",step:"1",min:"0",max:"60",class:"pb-6",label:a.__("Pause between tracks")},null,8,["modelValue","error","label"]),s(t,{modelValue:e(r).pause_between_rounds,"onUpdate:modelValue":l[3]||(l[3]=o=>e(r).pause_between_rounds=o),error:e(r).errors.pause_between_rounds,type:"number",step:"1",min:"0",max:"60",class:"pb-6",label:a.__("Pause between rounds")},null,8,["modelValue","error","label"]),s(t,{modelValue:e(r).color,"onUpdate:modelValue":l[4]||(l[4]=o=>e(r).color=o),type:"color",error:e(r).errors.color,class:"pb-6",label:a.__("Color")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_public,"onUpdate:modelValue":l[5]||(l[5]=o=>e(r).is_public=o),error:e(r).errors.is_public,class:"pb-6",label:a.__("Public")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_pro,"onUpdate:modelValue":l[6]||(l[6]=o=>e(r).is_pro=o),error:e(r).errors.is_pro,class:"pb-6",label:a.__("Pro")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_random,"onUpdate:modelValue":l[7]||(l[7]=o=>e(r).is_random=o),error:e(r).errors.is_random,class:"pb-6",label:a.__("Random")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_active,"onUpdate:modelValue":l[8]||(l[8]=o=>e(r).is_active=o),error:e(r).errors.is_active,class:"pb-6",label:a.__("Active")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_chat_active,"onUpdate:modelValue":l[9]||(l[9]=o=>e(r).is_chat_active=o),error:e(r).errors.is_chat_active,class:"pb-6",label:a.__("Chatbox")},null,8,["modelValue","error","label"]),s(u,{modelValue:e(r).is_password,"onUpdate:modelValue":l[10]||(l[10]=o=>e(r).is_password=o),class:"pb-6",label:a.__("Password")},null,8,["modelValue","label"]),c(s(t,{modelValue:e(r).password,"onUpdate:modelValue":l[11]||(l[11]=o=>e(r).password=o),error:e(r).errors.password,class:"pb-6",type:"password",autocomplete:"new-password",label:a.__("Password")},null,8,["modelValue","error","label"]),[[y,e(r).is_password]])]),d("div",T,[s(t,{modelValue:e(r).name,"onUpdate:modelValue":l[12]||(l[12]=o=>e(r).name=o),error:e(r).errors.name,class:"w-full pb-8 pr-6",label:a.__("Name")},null,8,["modelValue","error","label"]),s(g,{modelValue:e(r).description,"onUpdate:modelValue":l[13]||(l[13]=o=>e(r).description=o),error:e(r).errors.description,class:"w-full pb-8 pr-6",label:a.__("Description")},null,8,["modelValue","error","label"]),s(C,{modelValue:e(r).photo,"onUpdate:modelValue":l[14]||(l[14]=o=>e(r).photo=o),error:e(r).errors.photo,class:"w-full pb-8 pr-6",type:"file",accept:"image/*",label:a.__("Photo")},null,8,["modelValue","error","label"]),s(t,{modelValue:e(r).discord_webhook_url,"onUpdate:modelValue":l[15]||(l[15]=o=>e(r).discord_webhook_url=o),type:"url",error:e(r).errors.discord_webhook_url,class:"w-full pb-8 pr-6",label:a.__("Discord Webhook")},null,8,["modelValue","error","label"])])]),d("div",$,[s(P,{loading:e(r).processing,class:"btn-primary",type:"submit"},{default:n(()=>[p(i(a.__("Create")),1)]),_:1},8,["loading"])])],40,F)]),_:1})]),_:1})],64))}};export{Q as default};
