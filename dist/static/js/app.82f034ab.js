(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},4360:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("2b0e"),r=n("2f62"),o=n("bfa9"),s=(n("96cf"),n("1da1")),i=n("5530"),c=n("b775"),u=function(e){return Object(c["a"])({url:"/auth/obtainToken/",method:"post",data:e})},l=function(e){return Object(c["a"])({url:"/auth/refreshToken/",method:"post",data:e})},f=n("a18c"),m=n("1232"),d={namespaced:!0,state:{accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken"),userInfo:{id:0,nickname:"",username:""}},mutations:{updateTokens:function(e,t){localStorage.setItem("accessToken",t.access),e.accessToken=t.access,localStorage.setItem("refreshToken",t.refresh),e.refreshToken=t.refresh},updateAccessToken:function(e,t){localStorage.setItem("accessToken",t),e.accessToken=t},removeAccessToken:function(e){localStorage.removeItem("accessToken"),e.accessToken=null},removeTokens:function(e){localStorage.removeItem("accessToken"),e.accessToken=null,localStorage.removeItem("refreshToken"),e.refreshToken=null},setUserInfo:function(e,t){e.userInfo=t},resetUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.userInfo=Object(i["a"])(Object(i["a"])({},e.userInfo),t)}},actions:{ObtainToken:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,o,s,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,u(t);case 3:if(r=n.sent,200!=r.status){n.next=14;break}if(o={access:r.data.access,refresh:r.data.refresh},a("updateTokens",o),s=Object(m["a"])(r.data.access),s.is_staff){n.next=10;break}throw Error("Forrbidden");case 10:i={nickname:s.nickname,username:s.username,id:s.id,is_hidden:s.is_hidden,is_staff:s.is_staff},a("setUserInfo",i),c=f["a"].history.current.query.redirect,c?f["a"].push({path:c}):f["a"].push({path:"/contest"});case 14:return n.abrupt("return",r);case 15:case"end":return n.stop()}}),n)})))()},RefreshToken:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,l({refresh:t});case 3:return r=n.sent,console.log(r),200==r.status&&a("updateAccessToken",r.data.access),n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))()},UpdateUserInfo:function(e,t){var n=e.commit;n("resetUserInfo",t)},ClearUserState:function(e){var t=e.commit;t("resetUserInfo",{}),t("removeTokens")},Logout:function(e){var t=e.commit;t("removeTokens");var n={nickname:null,username:null};t("setUserInfo",n),f["a"].push({path:"/login"})}},getters:{userInfo:function(e){return e.userInfo},accessToken:function(e){return e.accessToken},refreshToken:function(e){return e.refreshToken}}};a["a"].use(r["a"]);var p=new o["a"]({storage:window.localStorage,modules:["user"]}),h=new r["a"].Store({modules:{user:d},plugins:[p.plugin]})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("NavMenu"),n("v-main",{staticClass:"main"},[n("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{staticClass:"nav",attrs:{app:"",height:"56px","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"toolbar-title"}),n("v-spacer"),null===e.accessToken?[n("v-btn",{attrs:{text:"",to:"/login"}},[e._v(" Login ")])]:[n("v-menu",{attrs:{left:"","open-on-hover":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticStyle:{"text-transform":"unset"},attrs:{text:""}},"v-btn",r,!1),a),[e._v(" "+e._s(e.userInfo.nickname)+" ")])]}}])},[n("v-list",[n("v-list-item",{attrs:{link:"",to:"/profile"}},[n("v-list-item-title",[e._v("Profile")])],1),n("v-list-item",{on:{click:e.Logout}},[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)]],2),n("v-navigation-drawer",{staticClass:"drawer",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"drawer_header"},[n("h1",{staticClass:"font-weight-light"},[e._v(" CTFm Dashboard ")])])]),n("v-list",[n("v-list-item",{attrs:{link:"",to:"/contest"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-sword-cross")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Contest")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/category"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-tag")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Category")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/challenge"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-flag")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Challenges")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/notification"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-bell")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Notifications")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/user"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-account-supervisor")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("User")])],1)],1)],1)],1)],1)},i=[],c=(n("b0c0"),n("5530")),u=n("2f62"),l={name:"NavMenu",props:{source:String},data:function(){return{drawer:null,dropdown_menu:["Profile","Logout"],isLoggedIn:!1}},computed:Object(c["a"])({},Object(u["c"])("user",["accessToken","userInfo"])),created:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])("user",["Logout"])),{},{isHome:function(e){return"home"===e.name}})},f=l,m=(n("a01c"),n("2877")),d=n("6544"),p=n.n(d),h=n("40dc"),v=n("5bc1"),k=n("8336"),b=n("132d"),g=n("8860"),T=n("da13"),w=n("1800"),_=n("5d23"),I=n("e449"),y=n("f774"),C=n("2fa4"),O=n("2a7f"),S=Object(m["a"])(f,s,i,!1,null,null,null),j=S.exports;p()(S,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VBtn:k["a"],VIcon:b["a"],VList:g["a"],VListItem:T["a"],VListItemAction:w["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMenu:I["a"],VNavigationDrawer:y["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});var x={name:"App",components:{NavMenu:j},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},P=x,V=(n("5c0b"),n("7496")),L=n("f6c4"),U=Object(m["a"])(P,r,o,!1,null,null,null),N=U.exports;p()(U,{VApp:V["a"],VMain:L["a"]});var A=n("a18c"),R=n("4360"),$=n("f309");a["a"].use($["a"]);var E=new $["a"]({theme:{themes:{dark:{primary:"#00bcd4",secondary:"#b0bec5",accent:"#8c9eff",error:"#ff5252"}}}});n("4633");a["a"].use(n("84b5"));var D=n("98c9");a["a"].use(D["a"]);var F=n("9ce6"),M=n.n(F);a["a"].component("vue-markdown",M.a);var B=n("6838"),q=n.n(B);a["a"].use(q.a,{hideProgressbar:!0,position:"bottom-left"}),a["a"].config.productionTip=!1,new a["a"]({router:A["a"],store:R["a"],vuetify:E,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5fbe":function(e,t,n){e.exports=n.p+"static/img/logo2.62ca6d84.png"},"9c0c":function(e,t,n){},a01c:function(e,t,n){"use strict";n("fa16")},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"home"},[a("div",{staticClass:"logo"},[a("img",{attrs:{alt:"CTFm logo",src:n("5fbe")}})]),a("h1",[e._v("Welcome to CTFm Dashboard")])])},s=[],i={name:"Home",components:{}},c=i,u=(n("21bb"),n("2877")),l=n("6544"),f=n.n(l),m=n("a523"),d=Object(u["a"])(c,o,s,!1,null,null,null),p=d.exports;f()(d,{VContainer:m["a"]});var h=r["a"].prototype.push;r["a"].prototype.push=function(e){return h.call(this,e)["catch"]((function(e){return e}))},a["a"].use(r["a"]);var v=[{path:"/",name:"home",component:p,meta:{title:"Home"}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-206136ba")]).then(n.bind(null,"a55b"))},meta:{title:"Login"}},{path:"/notification",name:"notification",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-854dd5a2"),n.e("chunk-06f436d7"),n.e("chunk-80157780")]).then(n.bind(null,"109a"))},meta:{title:"Notifications"}},{path:"/profile",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-1889e103")]).then(n.bind(null,"c66d"))},name:"profile",meta:{title:"Profile"}},{path:"/category",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-854dd5a2"),n.e("chunk-fc3689ee"),n.e("chunk-72468020")]).then(n.bind(null,"4886"))},name:"category",meta:{title:"Category"}},{path:"/challenge",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-854dd5a2"),n.e("chunk-06f436d7"),n.e("chunk-9d1d052c")]).then(n.bind(null,"98ed"))},name:"challenge",meta:{title:"Challenge"}},{path:"/user",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-854dd5a2"),n.e("chunk-68263c99")]).then(n.bind(null,"1511"))},name:"user",meta:{title:"Page"}},{path:"/contest",component:function(){return Promise.all([n.e("chunk-16041970"),n.e("chunk-06f436d7"),n.e("chunk-fc3689ee"),n.e("chunk-1b02d4a8"),n.e("chunk-7215bef4")]).then(n.bind(null,"9169"))},name:"contest",meta:{title:"Contest"}},{path:"/error/404",name:"404 NOT FOUND",component:function(){return Promise.all([n.e("chunk-a7095c64"),n.e("chunk-bb5922cc")]).then(n.bind(null,"d80f"))},meta:{title:""}},{path:"*",redirect:"/error/404"}],k=new r["a"]({mode:"history",base:"/admin/",routes:v});t["a"]=k},b775:function(e,t,n){"use strict";n("caad"),n("c975"),n("6eba"),n("0d03"),n("d3b7"),n("25f0"),n("2532"),n("2ca0");var a=n("bc3a"),r=n.n(a),o=n("4360"),s=n("323e"),i=n.n(s),c=(n("a5d8"),n("2b0e")),u=n("1232"),l=n("a18c"),f=r.a.create({baseURL:"/api/v1",timeout:5e4});function m(){l["a"].push({path:"/login",query:{redirect:l["a"].currentRoute.fullPath}})}function d(){var e=o["a"].getters["user/accessToken"],t=Object(u["a"])(e),n=t.exp;if(n){var a=n-Date.now()/1e3<1800;return a}return!1}function p(){var e=o["a"].getters["user/refreshToken"],t=Object(u["a"])(e),n=t.exp;if(n){var a=n-Date.now()/1e3<0;return a}return!1}window.isRefreshing=!1,f.interceptors.request.use((function(e){if(i.a.start(),e.headers["Content-Type"]||(e.headers={"Content-Type":"application/json"}),e.url.startsWith("/auth"))return e;var t=o["a"].getters["user/accessToken"];if(t){var n=o["a"].getters["user/refreshToken"];if(p())o["a"].dispatch("user/ClearUserState");else{if(!d())return e.headers.Authorization="Bearer ".concat(t),e;o["a"].dispatch("user/RefreshToken",n)}}else m(),c["a"].$vToastify.error("Please Login First");return e}),(function(e){if(i.a.done(),"ECONNABORTED"===e.code&&-1!==e.message.indexOf("timeout")){c["a"].$vToastify.error("Sorry Timeout!");var t=e.config;return instance.request(t)}var n=e.response.data.detail;if(c["a"].$vToastify.error("Error: ".concat(n)),console.log(n),n){var a=n.status;l["a"].push({path:"/error/".concat(a)})}return Promise.reject(e)})),f.interceptors.response.use((function(e){return i.a.done(),e}),(function(e){if(i.a.done(),e.toString().includes("timeout"))e.message="Sorry Timeout！";else if(e.response)if(401==e.response.status||403==e.response.status)e.message="Forbidden",o["a"].dispatch("user/ClearUserState"),m();else if(e.response.data.detail)e.message=e.response.data.detail;else{var t;for(var n in e.response.data)t=n.toString()+e.response.data[n][0];e.message=t}return c["a"].$vToastify.error("Msg: ".concat(e.message)),console.error("Error： ".concat(e)),Promise.reject(e)})),t["a"]=f},fa16:function(e,t,n){}},[[0,"runtime","chunk-libs"]]]);