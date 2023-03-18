(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ea34328"],{1511:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[s("v-row",{staticStyle:{height:"56px"}}),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"8"}},[s("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:e._u([{key:"heading",fn:function(){return[s("div",{staticClass:"display-2 font-weight-light"},[e._v(" Edit Users ")])]},proxy:!0}])},[s("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:e.headers,items:e.users,"sort-by":"id",loading:e.is_loading,"loading-text":"Loading... Please wait"},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:""}},[s("v-toolbar-title",[e._v("Users")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),s("v-dialog",{attrs:{"hide-overlay":"",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[s("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),n),[e._v(" New User ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email",rules:e.rules.emailRules},model:{value:e.editedUser.email,callback:function(t){e.$set(e.editedUser,"email",t)},expression:"editedUser.email"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account",rules:e.rules.usernameRules},model:{value:e.editedUser.username,callback:function(t){e.$set(e.editedUser,"username",t)},expression:"editedUser.username"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{label:"NickName","prepend-icon":"mdi-account-outline",rules:e.rules.nicknameRules},model:{value:e.editedUser.nickname,callback:function(t){e.$set(e.editedUser,"nickname",t)},expression:"editedUser.nickname"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"New Password","prepend-icon":"mdi-lock",type:"password",rules:e.rules.passwordRules},model:{value:e.editedUser.new_password,callback:function(t){e.$set(e.editedUser,"new_password",t)},expression:"editedUser.new_password"}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-switch",{attrs:{label:"Admin Account"},model:{value:e.editedUser.is_staff,callback:function(t){e.$set(e.editedUser,"is_staff",t)},expression:"editedUser.is_staff"}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-switch",{attrs:{label:"Hidden Account"},model:{value:e.editedUser.is_hidden,callback:function(t){e.$set(e.editedUser,"is_hidden",t)},expression:"editedUser.is_hidden"}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-switch",{attrs:{label:"Verified Account"},model:{value:e.editedUser.is_verified,callback:function(t){e.$set(e.editedUser,"is_verified",t)},expression:"editedUser.is_verified"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.is_verified",fn:function(t){var n=t.item;return[s("v-simple-checkbox",{attrs:{disabled:""},model:{value:n.is_verified,callback:function(t){e.$set(n,"is_verified",t)},expression:"item.is_verified"}})]}},{key:"item.is_staff",fn:function(t){var n=t.item;return[s("v-simple-checkbox",{attrs:{disabled:""},model:{value:n.is_staff,callback:function(t){e.$set(n,"is_staff",t)},expression:"item.is_staff"}})]}},{key:"item.is_hidden",fn:function(t){var n=t.item;return[s("v-simple-checkbox",{attrs:{disabled:""},model:{value:n.is_hidden,callback:function(t){e.$set(n,"is_hidden",t)},expression:"item.is_hidden"}})]}},{key:"item.actions",fn:function(t){var n=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),s("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[s("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})],1)],1)],1)],1)},i=[],r=(s("c975"),s("a434"),s("96cf"),s("1da1")),a=s("ff7d"),d=s("c24f"),c={components:{BaseCard:a["a"]},data:function(){return{dialog:!1,is_loading:!0,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Username",sortable:!1,value:"username"},{text:"Nickname",value:"nickname"},{text:"Solved",value:"solved_amount"},{text:"Points",value:"points"},{text:"IsAdmin",value:"is_staff"},{text:"IsVerified",value:"is_verified"},{text:"IsHidden",value:"is_hidden"},{text:"Actions",value:"actions",sortable:!1}],users:[],editedIndex:-1,editedUser:{id:0,email:"",username:"",nickname:"",new_password:"",solved_amount:"",points:0,is_staff:!1,is_hidden:!0,is_verified:!1},defaultUser:{id:0,username:"",nickname:"",solved_amount:"",points:0,is_staff:!1,is_hidden:!0},rules:{emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],usernameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length>=3||"name must be more than 4 characters"},function(e){return e&&e.length<=16||"name must be less than 16 characters"},function(e){return/^[a-zA-Z0-9_-]{3,16}$/.test(e)||"Username must be valid"}],nicknameRules:[function(e){return!!e||"NickName is required"},function(e){return e&&e.length>=3||"name must be more than 4 characters"},function(e){return e&&e.length<=16||"name must be less than 16 characters"},function(e){return/^[a-zA-Z0-9_-]{3,16}$/.test(e)||"Nickname must be valid"}],passwordRules:[function(e){return e&&e.length>=8||"Password must be more than 8 characters"}]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User"}},watch:{dialog:function(e){e||this.close()}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initialize(),e.is_loading=!1;case 2:case"end":return t.stop()}}),t)})))()},methods:{initialize:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["d"])();case 2:s=t.sent,e.users=s["data"];case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.editedIndex=t.users.indexOf(e),s.next=3,Object(d["c"])(e.id);case 3:n=s.sent,t.editedUser=Object.assign({},n["data"]),t.dialog=!0;case 6:case"end":return s.stop()}}),s)})))()},deleteItem:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(n=t.users.indexOf(e),!confirm("Are you sure you want to delete this User?")){s.next=7;break}return t.users.splice(n,1),s.next=5,Object(d["b"])(e.id);case 5:s.sent,t.$vToastify.success("Deleted Successfully");case 7:case"end":return s.stop()}}),s)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedUser=Object.assign({},e.defaultUser),e.editedIndex=-1}))},save:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=8;break}return Object.assign(e.users[e.editedIndex],e.editedUser),t.next=4,Object(d["e"])(e.editedUser.id,e.editedUser);case 4:t.sent,e.$vToastify.success("Edited Successfully"),t.next=15;break;case 8:return console.log(e.editedUser),t.next=11,Object(d["a"])(e.editedUser);case 11:s=t.sent,e.$vToastify.success("Added Successfully"),e.editedUser.id=s["data"]["id"],e.users.push(e.editedUser);case 15:e.close();case 16:case"end":return t.stop()}}),t)})))()}}},o=c,l=s("2877"),u=s("6544"),f=s.n(u),m=s("8336"),v=s("b0af"),b=s("99d9"),p=s("62ad"),h=s("a523"),x=s("8fea"),_=s("169a"),k=s("ce7e"),w=s("132d"),g=s("0fd9"),U=s("9e88"),y=s("2fa4"),O=s("b73d"),j=s("8654"),R=s("71d9"),V=s("2a7f"),$=Object(l["a"])(o,n,i,!1,null,null,null);t["default"]=$.exports;f()($,{VBtn:m["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:p["a"],VContainer:h["a"],VDataTable:x["a"],VDialog:_["a"],VDivider:k["a"],VIcon:w["a"],VRow:g["a"],VSimpleCheckbox:U["a"],VSpacer:y["a"],VSwitch:O["a"],VTextField:j["a"],VToolbar:R["a"],VToolbarTitle:V["a"]})},c24f:function(e,t,s){"use strict";s.d(t,"d",(function(){return i})),s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return a})),s.d(t,"e",(function(){return d})),s.d(t,"b",(function(){return c}));var n=s("b775"),i=function(){return Object(n["a"])({url:"/admin/user/",method:"get"})},r=function(e){return Object(n["a"])({url:"/admin/user/",method:"post",data:e})},a=function(e){return Object(n["a"])({url:"/admin/user/"+e+"/",method:"get"})},d=function(e,t){return Object(n["a"])({url:"/admin/user/"+e+"/",method:"put",data:t})},c=function(e){return Object(n["a"])({url:"/admin/user/"+e+"/",method:"delete"})}}}]);