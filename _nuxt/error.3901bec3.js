import{a as p,c as d,w as o,l as u,o as e,b as r,t as a,j as l,i,m as h}from"./entry.eb2ef3f8.js";const m={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head(){return{title:this.error.statusCode===404?this.pageNotFound:this.otherError}}},f={key:0},y={key:1};function x(n,k,s,N,t,g){const _=h,c=u("v-app");return e(),d(c,{dark:""},{default:o(()=>[s.error.statusCode===404?(e(),r("h1",f,a(t.pageNotFound),1)):(e(),r("h1",y,a(t.otherError),1)),l(_,{to:"/"},{default:o(()=>[i(" Home page ")]),_:1})]),_:1})}const E=p(m,[["render",x],["__scopeId","data-v-f5e084b9"]]);export{E as default};
