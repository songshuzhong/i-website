(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44b38984"],{"148a":function(e,t,r){e.exports=r.p+"img/forbidden.25b99dca.jpeg"},"97da":function(e,t,r){e.exports=r.p+"img/not-found.06512621.jpeg"},aa1f:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),i={class:"i-website__error"},c={class:"i-website__error__info"},n={class:"i-website__error__status"},s={class:"i-website__error__title"},a={class:"i-website__error__msg"},u=Object(o["createTextVNode"])(" 返回首页 "),b=["src"];function l(e,t,r,l,d,p){var _=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",n,Object(o["toDisplayString"])(e.status),1),Object(o["createElementVNode"])("div",s,Object(o["toDisplayString"])(e.iError["title"]),1),Object(o["createElementVNode"])("div",a,Object(o["toDisplayString"])(e.iError["message"]),1),Object(o["createVNode"])(_,{type:"primary",size:"default",round:"",onClick:e.goHome,class:"i-website__error__action"},{default:Object(o["withCtx"])((function(){return[u]})),_:1},8,["onClick"])]),Object(o["createElementVNode"])("img",{class:"i-website__error__picture",src:e.iError["picture"]},null,8,b)])}r("a9e3");var d=r("6605"),p={404:{title:"地址错误，请重新输入地址",message:"您可以先检查网址，然后重新输入或给我们反馈问题",picture:r("97da")},401:{title:"抱歉，您没有操作权限",message:"联系方式：sshuzhong@outlook.com",picture:r("148a")}},_=p,m=(r("b149"),Object(o["defineComponent"])({name:"ErrorPage",props:{status:{type:[String,Number],required:!0}},setup:function(e){var t=Object(d["useRouter"])(),r=function(){return t.push("/")},i=Object(o["computed"])((function(){return _[e.status]}));return{iError:i,goHome:r}}})),j=r("d959"),f=r.n(j);const g=f()(m,[["render",l]]);t["default"]=g},b149:function(e,t,r){}}]);