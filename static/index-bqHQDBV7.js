import{_ as c,d as a}from"./index-cBZ6LJ8h.js";import{ag as s,m as n,p as r,U as _,l as i,M as p,Q as d,u as m}from"./vue-wOuPBSxb.js";import"./element-ejEggXBE.js";import"./vxe-deA4kSaM.js";const l={},u={class:"app-container center"};function f(t,o){const e=s("el-empty");return n(),r("div",u,[_(e,{description:"Admin 权限可见"})])}const v=c(l,[["render",f],["__scopeId","data-v-540a7bcc"]]),x={},h={class:"app-container center"};function y(t,o){const e=s("el-empty");return n(),r("div",h,[_(e,{description:"Editor 权限可见"})])}const $=c(x,[["render",y],["__scopeId","data-v-e677b768"]]),b=i({__name:"index",setup(t){const e=a().roles.includes("admin");return(k,A)=>(n(),p(d(m(e)?v:$)))}});export{b as default};