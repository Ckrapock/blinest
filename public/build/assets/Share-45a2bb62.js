import{_ as h}from"./Modal-5b330035.js";import{k as c,o as l,c as i,t as a,f as u,g as m,b as t,a as d,w as g,F as b}from"./app-f6824ecf.js";const p={class:"relative inline-block"},_=["textContent"],w={class:"flex"},f=["textContent"],x=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),t("path",{d:"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"})],-1),v=[x],y={__name:"Clip",props:{text:String},setup(o){const r=o,e=c({}),s=()=>{navigator.clipboard&&window.isSecureContext?(navigator.clipboard.writeText(r.text),e.value={content:"Copié",status:!0}):e.value={content:"Copie impossible",status:!1},setTimeout(()=>{e.value={}},1e3)};return(n,N)=>(l(),i("span",p,[e.value.content?(l(),i("div",{key:0,textContent:a(e.value.content),class:u(["absolute right-0 bottom-full mb-1 shadow text-white rounded-lg p-1 text-xs",e.value.status?"bg-green-500":"bg-red-500"])},null,10,_)):m("",!0),t("div",w,[t("div",{type:"text",id:"website-admin",class:"font-mono rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 min-w-0 text-xs border-gray-300 px-1.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",textContent:a(o.text)},null,8,f),t("span",{onClick:s,class:"inline-flex cursor-pointer items-center px-2 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md opacity-80 hover:opacity-100 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"},v)])]))}},k=t("div",{id:"fb-root"},null,-1),C=["title"],$=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-full w-full"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"})],-1),S=[$],z={class:"p-6"},B={class:"my-4 text-xl"},V=t("p",{class:"text-sm mb-1"},"Copier le lien :",-1),F=["href"],M=["href"],j={__name:"Share",props:{url:String},setup(o){const r=c(!1);return(e,s)=>(l(),i(b,null,[k,t("button",{onClick:s[0]||(s[0]=n=>r.value=!0),class:u(e.$attrs.class),title:e.__("Share")},S,10,C),d(h,{show:r.value,onClose:s[2]||(s[2]=n=>r.value=!1)},{default:g(()=>[t("div",z,[t("h2",B,a(e.__("Share this page")),1),V,d(y,{class:"mb-4",text:o.url},null,8,["text"]),t("a",{class:"btn-primary my-2",target:"_blank",href:`https://www.facebook.com/sharer/sharer.php?u=${o.url}`},a(e.__("Share on Facebook")),9,F),t("a",{class:"btn-primary my-2",target:"_blank",href:`https://twitter.com/intent/tweet?&url=${o.url}`},a(e.__("Share on Twitter")),9,M),t("button",{class:"btn-secondary mt-4 ml-auto",onClick:s[1]||(s[1]=n=>r.value=!1)},a(e.__("Close")),1)])]),_:1},8,["show"])],64))}};export{j as _};
