"use strict";(self["webpackChunkvue_responsive_video_background_player"]=self["webpackChunkvue_responsive_video_background_player"]||[]).push([[143],{8694:function(e,t){t["Z"]={HomePageUrlPath:"",LoginPageUrlPath:""}},8600:function(e,t,n){var a=n(8935),o=n(4549),i=n.n(o),r=n(6166),s=n.n(r),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},l=[],c=n(3736),d={},m=(0,c.Z)(d,u,l,!1,null,null,null),g=m.exports,p=n(2809),h=n(4665);function f({mutations:e={},namespaced:t=!0,state:n={},actions:a={},getters:o={}}){return this.mutations={...e},this.state={...n},this.namespaced=t,this.actions={...a},this.getters={...o},!0}var P=f;const w=new P({getters:{GetPlanType:e=>e.PlanType},state:{PlanType:1},mutations:{},actions:{}});var v=w;const y=new P({getters:{GetSettingsList:e=>e.SettingsList},state:{SettingsList:[]},mutations:{set_SettingsList:(e,t)=>e.SettingsList=t},actions:{async SettingsListfun({commit:e},t){await e("set_SettingsList",t)}}});var S=y,b={HomePageModule:v,LoginPageModule:S};a["default"].use(h.ZP);const L=new h.ZP.Store({state:{},mutations:{},actions:{},getters:{},modules:b});var _=L;function Z(e,...t){return e}function k(){return(e,t,n)=>{}}function U(e){return(e,t,n)=>{}}var H=[{type:"beforeEach",listner:k},{type:"beforeResolve",listner:U}];a["default"].use(p.Z);const I=[{path:"/",redirect:"/ztdada/home"},{path:"/ztdada/home",name:"Home",component:()=>n.e(286).then(n.bind(n,2286)),meta:{Title:"首页"}},{path:"/ztdada/login",name:"Login",component:()=>n.e(428).then(n.bind(n,9428)),meta:{Title:"登录"}},{path:"*",component:()=>n.e(232).then(n.bind(n,6232)),hidden:!0}],N=new p.Z({base:"",routes:I});var T=Z(N,H),C=n(8694);let G;G="ProductionHttpUrlConfig";class z{GetConfig(){s().get(G+"/config.json").then((e=>{e.data.HomePageUrlPath&&(C.Z.HomePageUrlPath=e.data.HomePageUrlPath,C.Z.LoginPageUrlPath=e.data.LoginPageUrlPath,new a["default"]({router:T,store:_,render:e=>e(g)}).$mount("#app"))}))}}var D=new z,K=n(553),$=n(3205);a["default"].use(i()),a["default"].prototype.$axios=s(),D.GetConfig(),window.localStorage.getItem("themeProperty")?(0,K.D)(window.localStorage.getItem("themeProperty")):(0,K.D)(""),a["default"].use($.Plugin),a["default"].config.productionTip=!1},553:function(e,t,n){n.d(t,{D:function(){return o},Z:function(){return a}});const a=[{Name:"默认",Key:""},{Name:"深黑",Key:"darktheme"},{Name:"浅灰",Key:"lighttheme"}],o=e=>{let t="themeProperty";e?(window.localStorage.getItem(t)&&window.localStorage.removeItem(t),document.body.className=e,window.localStorage.setItem(t,e)):(window.localStorage.getItem(t)&&window.localStorage.removeItem(t),document.body.className&&(document.body.className=""))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[998],(function(){return t(8600)}));e.O()}]);