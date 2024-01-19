import{i as g,_ as y}from"./index-stLzdhLs.js";import{S as b}from"./SwitchRoles-PnYgsFw7.js";import{l as P,r as C,ag as m,ap as x,m as a,p,T as s,q as _,V as u,M as o,O as t,S as e,u as f,Q as v}from"./vue-Q_RJJ5Wn.js";import"./element-t8DCD_Fb.js";import"./vxe-6FAxK7DE.js";const k=r=>{if(Array.isArray(r)&&r.length>0){const{roles:n}=g();return n.some(l=>r.includes(l))}else return console.error("need roles! Like checkPermission(['admin','editor'])"),!1},V={class:"app-container"},w={class:"margin-top-15"},z=P({__name:"directive",setup(r){const n=C(1),l=()=>{n.value++};return(B,N)=>{const i=m("el-tag"),c=m("el-tab-pane"),h=m("el-tabs"),d=x("permission");return a(),p("div",V,[s(b,{onChange:l}),(a(),p("div",{key:n.value,class:"margin-top-30"},[_("div",null,[u((a(),o(i,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['admin']" 所以只有 admin 可以看见这句话 `)]),_:1})),[[d,["admin"]]])]),_("div",null,[u((a(),o(i,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['editor']" 所以只有 editor 可以看见这句话 `)]),_:1})),[[d,["editor"]]])]),_("div",w,[u((a(),o(i,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['admin', 'editor']" 所以 admin 和 editor 都可以看见这句话 `)]),_:1})),[[d,["admin","editor"]]])])])),(a(),p("div",{key:`checkPermission${n.value}`,class:"margin-top-30"},[s(i,{type:"warning",size:"large"},{default:t(()=>[e(" 例如 Element Plus 的 el-tab-pane 或 el-table-column 以及其它动态渲染 Dom 的场景不适合使用 v-permission，这种情况下你可以通过 v-if 和 checkPermission 来实现： ")]),_:1}),s(h,{type:"border-card",class:"margin-top-15"},{default:t(()=>[f(k)(["admin"])?(a(),o(c,{key:0,label:"admin"},{default:t(()=>[e(" 这里采用了 "),s(i,null,{default:t(()=>[e(`v-if="checkPermission(['admin'])"`)]),_:1}),e(" 所以只有 admin 可以看见这句话 ")]),_:1})):v("",!0),f(k)(["editor"])?(a(),o(c,{key:1,label:"editor"},{default:t(()=>[e(" 这里采用了 "),s(i,null,{default:t(()=>[e(`v-if="checkPermission(['editor'])"`)]),_:1}),e(" 所以只有 editor 可以看见这句话 ")]),_:1})):v("",!0),f(k)(["admin","editor"])?(a(),o(c,{key:2,label:"admin 和 editor"},{default:t(()=>[e(" 这里采用了 "),s(i,null,{default:t(()=>[e(`v-if="checkPermission(['admin', 'editor'])"`)]),_:1}),e(" 所以 admin 和 editor 都可以看见这句话 ")]),_:1})):v("",!0)]),_:1})]))])}}}),q=y(z,[["__scopeId","data-v-6d704b73"]]);export{q as default};
