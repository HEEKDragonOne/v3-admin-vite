import{a,x as e,r as s,j as l,h as o,o as t,b as d,y as n,t as r,u,e as i,w as c,C as m,D as p,_ as v}from"./index.47366859.js";const b={class:"switch-roles"},h=(a=>(m("data-v-572bc9d0"),a=a(),p(),a))((()=>n("span",null,"切换权限：",-1))),_=v(a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:m}){const p=e(),v=s(p.roles[0]);return l(v,(async a=>{await p.changeRoles(a),m("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return t(),d("div",null,[n("div",null,"你的权限："+r(u(p).roles),1),n("div",b,[h,i(l,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a)},{default:c((()=>[i(s,{label:"editor"}),i(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-572bc9d0"]]);export{_ as S};
