(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e61bccaa"],{"0767":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[a("v-row",{staticStyle:{height:"56px"}}),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:e._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[e._v("Edit Team")])]},proxy:!0}])},[a("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:e.headers,items:e.teams,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Team")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"hide-overlay":"",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6",sm:"5",md:"6"}},[a("v-text-field",{attrs:{label:"Team Name","prepend-icon":"mdi-account-group"},model:{value:e.editedTeam.name,callback:function(t){e.$set(e.editedTeam,"name",t)},expression:"editedTeam.name"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:e.editedTeam.members,label:"Leader","prepend-icon":"mdi-account-group-outline","item-text":"nickname","item-value":"id"},model:{value:e.editedTeam.leader,callback:function(t){e.$set(e.editedTeam,"leader",t)},expression:"editedTeam.leader"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Team Avatar","prepend-icon":"mdi-camera"},model:{value:e.editedTeam.avatar_url,callback:function(t){e.$set(e.editedTeam,"avatar_url",t)},expression:"editedTeam.avatar_url"}})],1),a("v-col",{attrs:{cols:"12"}},[a("h2",{staticStyle:{"padding-bottom":"10px"}},[e._v("Description")]),a("v-textarea",{attrs:{"auto-grow":"",clearable:"","clear-icon":"mdi-close-circle"},model:{value:e.editedTeam.description,callback:function(t){e.$set(e.editedTeam,"description",t)},expression:"editedTeam.description"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.avatar_url",fn:function(e){var t=e.item;return[a("v-avatar",[a("img",{attrs:{src:t.avatar_url}})])]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)],1)],1)],1)},r=[],i=(a("c975"),a("a434"),a("e25e"),a("96cf"),a("1da1")),o=a("ff7d"),s=a("8e77"),c=a("c405"),u=a("b775"),d=function(e){return Object(u["a"])({url:"/admin/team/",method:"post",data:e})},l=function(e){return Object(u["a"])({url:"/admin/team/"+e+"/",method:"get"})},m=function(){return Object(u["a"])({url:"/admin/team/",method:"get"})},f=function(e,t){return Object(u["a"])({url:"/admin/team/"+e+"/",method:"put",data:t})},v=function(e){return Object(u["a"])({url:"/admin/team/"+e+"/",method:"delete"})},p={components:{BaseCard:o["a"],Markdown:s["a"]},data:function(){return{dialog:!1,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Avatar",sortable:!1,value:"avatar_url"},{text:"Name",sortable:!1,value:"name"},{text:"Solved",value:"solved_amount"},{text:"Points",value:"points"},{text:"Actions",value:"actions",sortable:!1}],teams:[],editedIndex:-1,editedTeam:{id:0,name:"",description:"",avatar_url:"",leader:0},defaultTeam:{id:0,name:"",description:"",avatar_url:"",leader:0},rules:{nameRules:[function(e){return!!e||"Team Title is required"}],pointsRules:[function(e){return!!e||"Points is required"},function(e){return/^[0-9]*$/.test(e)||"Points must be valid"}],portRules:[function(e){return!!e||"Ports is required"},function(e){return/^[0-9]*$/.test(e)||"Ports must be valid"},function(e){return 0<e&&e<66536||"Ports must between 1~66535"}],categoryRules:[function(e){return!!e||"Category is required"}],contentnRules:[function(e){return!!e||"Content is required"}],flagRules:[function(e){return!!e||"Flag is required"}]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Team":"Edit Team"}},watch:{dialog:function(e){e||this.close()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initialize();case 1:case"end":return t.stop()}}),t)})))()},methods:{initialize:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return a=t.sent,e.teams=a.data,t.next=6,Object(c["d"])();case 6:n=t.sent,e.categories=n.data;case 8:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.editedIndex=t.teams.indexOf(e),a.next=3,l(e.id);case 3:n=a.sent,t.editedTeam=Object.assign({},n["data"]),t.dialog=!0;case 6:case"end":return a.stop()}}),a)})))()},deleteItem:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.teams.indexOf(e),confirm("Are you sure you want to delete this Team?")&&t.teams.splice(n,1),a.next=4,v(e.id);case 4:r=a.sent,console.log("delete:",r),t.$vToastify.success("Deleted Successfully");case 7:case"end":return a.stop()}}),a)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedTeam=Object.assign({},e.defaultTeam),e.editedIndex=-1}))},save:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=8;break}return Object.assign(e.teams[e.editedIndex],e.editedTeam),t.next=4,f(e.editedTeam.id,e.editedTeam);case 4:t.sent,e.$vToastify.success("Edited Successfully"),t.next=15;break;case 8:return t.next=10,d(e.editedTeam);case 10:a=t.sent,e.editedTeam.points=parseInt(e.editedTeam.initial_points),e.editedTeam.id=a["data"]["id"],e.teams.push(e.editedTeam),e.$vToastify.success("Added Successfully");case 15:e.close();case 16:case"end":return t.stop()}}),t)})))()}}},h=p,b=a("2877"),g=a("6544"),x=a.n(g),T=a("8212"),w=a("8336"),y=a("b0af"),k=a("99d9"),I=a("62ad"),O=a("a523"),_=a("8fea"),j=a("169a"),R=a("ce7e"),V=a("132d"),C=a("0fd9"),$=a("b974"),S=a("2fa4"),H=a("8654"),z=a("a844"),N=a("71d9"),A=a("2a7f"),D=Object(b["a"])(h,n,r,!1,null,null,null);t["default"]=D.exports;x()(D,{VAvatar:T["a"],VBtn:w["a"],VCard:y["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:I["a"],VContainer:O["a"],VDataTable:_["a"],VDialog:j["a"],VDivider:R["a"],VIcon:V["a"],VRow:C["a"],VSelect:$["a"],VSpacer:S["a"],VTextField:H["a"],VTextarea:z["a"],VToolbar:N["a"],VToolbarTitle:A["a"]})},1681:function(e,t,a){},a844:function(e,t,a){"use strict";a("a9e3"),a("acd8"),a("e25e"),a("4795");var n=a("5530"),r=(a("1681"),a("8654")),i=a("58df"),o=Object(i["a"])(r["a"]);t["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=r["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){r["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},c405:function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a("b775"),r=function(){return Object(n["a"])({url:"/admin/category/",method:"get"})},i=function(e){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"get"})},o=function(e){return Object(n["a"])({url:"/admin/category/",method:"post",data:e})},s=function(e,t){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"put",data:t})},c=function(e){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"delete"})}}}]);