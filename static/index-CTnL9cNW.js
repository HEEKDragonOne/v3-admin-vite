import{l as C,aD as k,r as f,Z as U,ag as s,m as z,p as I,U as e,q as c,O as t,u as i,a2 as R,S,a8 as q,aH as F,aI as M}from"./vue-CcSL1usY.js";import{f as B,e as N,_ as D}from"./index-WdIpvbut.js";import{v as K,w as L,x as A,y as E,z as H}from"./element-_HuYMAMt.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-BPFZ03zu.js";import"./vxe-DDhFj3ga.js";const O="/v3-admin-vite/static/logo-text-2-CVewf8RJ.png",T=d=>(F("data-v-79326910"),d=d(),M(),d),Z={class:"login-container"},$={class:"login-card"},j=T(()=>c("div",{class:"title"},[c("img",{src:O})],-1)),G={class:"content"},P=C({__name:"index",setup(d){const h=k(),g=f(null),u=f(!1),p=f(""),o=U({username:"admin",password:"12345678",code:""}),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},x=()=>{var r;(r=g.value)==null||r.validate((a,l)=>{a?(u.value=!0,N().login(o).then(()=>{h.push({path:"/"})}).catch(()=>{m(),o.password=""}).finally(()=>{u.value=!1})):console.error("表单校验不通过",l)})},m=()=>{o.code="",p.value="",B().then(r=>{p.value=r.data})};return m(),(r,a)=>{const l=s("el-input"),_=s("el-form-item"),v=s("el-icon"),V=s("el-image"),y=s("el-button"),b=s("el-form");return z(),I("div",Z,[e(J,{class:"theme-switch"}),c("div",$,[j,c("div",G,[e(b,{ref_key:"loginFormRef",ref:g,model:o,rules:w,onKeyup:q(x,["enter"])},{default:t(()=>[e(_,{prop:"username"},{default:t(()=>[e(l,{modelValue:o.username,"onUpdate:modelValue":a[0]||(a[0]=n=>o.username=n),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":i(K),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(_,{prop:"password"},{default:t(()=>[e(l,{modelValue:o.password,"onUpdate:modelValue":a[1]||(a[1]=n=>o.password=n),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":i(L),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(_,{prop:"code"},{default:t(()=>[e(l,{modelValue:o.code,"onUpdate:modelValue":a[2]||(a[2]=n=>o.code=n),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":i(A),maxlength:"7",size:"large"},{append:t(()=>[e(V,{src:p.value,onClick:m,draggable:"false"},{placeholder:t(()=>[e(v,null,{default:t(()=>[e(i(E))]),_:1})]),error:t(()=>[e(v,null,{default:t(()=>[e(i(H))]),_:1})]),_:1},8,["src"])]),_:1},8,["modelValue","prefix-icon"])]),_:1}),e(y,{loading:u.value,type:"primary",size:"large",onClick:R(x,["prevent"])},{default:t(()=>[S("登 录")]),_:1},8,["loading"])]),_:1},8,["model"])])])])}}}),oe=D(P,[["__scopeId","data-v-79326910"]]);export{oe as default};