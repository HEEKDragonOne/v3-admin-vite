import{a as e,r as a,Y as s,b as l,e as r,x as o,w as d,Z as i,$ as t,h as n,B as u,C as p,o as m,u as c,a0 as g,a1 as f,a2 as v,m as x,z as _,l as h,v as w,_ as b}from"./index.1d4fd586.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang.16d244a0.js";const V={class:"login-container"},z={class:"login-card"},k=(e=>(u("data-v-d95458d8"),e=e(),p(),e))((()=>o("div",{class:"title"},[o("img",{src:"/v3-admin-vite/static/logo-text-2.f252b556.png"})],-1))),C={class:"content"},q={class:"show-code"},M=["src"],U=b(e({__name:"index",setup(e){const u=h(),p=a(null),b=a(!1),U=a(""),j=s({username:"admin",password:"12345678",code:""}),K={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},B=()=>{var e;null==(e=p.value)||e.validate((e=>{if(!e)return!1;b.value=!0,w().login({username:j.username,password:j.password,code:j.code}).then((()=>{u.push({path:"/"})})).catch((()=>{F(),j.password=""})).finally((()=>{b.value=!1}))}))},F=()=>{j.code="",t().then((e=>{U.value=e.data}))};return F(),(e,a)=>{const s=n("el-input"),t=n("el-form-item"),u=n("el-button"),h=n("el-form");return m(),l("div",V,[r(y,{class:"theme-switch"}),o("div",z,[k,o("div",C,[r(h,{ref_key:"loginFormRef",ref:p,model:j,rules:K,onKeyup:i(B,["enter"])},{default:d((()=>[r(t,{prop:"username"},{default:d((()=>[r(s,{modelValue:j.username,"onUpdate:modelValue":a[0]||(a[0]=e=>j.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":c(g),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),r(t,{prop:"password"},{default:d((()=>[r(s,{modelValue:j.password,"onUpdate:modelValue":a[1]||(a[1]=e=>j.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":c(f),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),r(t,{prop:"code"},{default:d((()=>[r(s,{modelValue:j.code,"onUpdate:modelValue":a[2]||(a[2]=e=>j.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":c(v),maxlength:"7",size:"large"},null,8,["modelValue","prefix-icon"]),o("span",q,[o("img",{src:U.value,onClick:F},null,8,M)])])),_:1}),r(u,{loading:b.value,type:"primary",size:"large",onClick:x(B,["prevent"])},{default:d((()=>[_(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-d95458d8"]]);export{U as default};
