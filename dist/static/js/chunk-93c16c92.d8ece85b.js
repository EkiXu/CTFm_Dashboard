(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93c16c92"],{"0767":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[n("v-row",{staticStyle:{height:"56px"}}),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:t._u([{key:"heading",fn:function(){return[n("div",{staticClass:"display-2 font-weight-light"},[t._v("Edit Team")])]},proxy:!0}])},[n("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:t.headers,items:t.teams,"sort-by":"id",loading:t.is_loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("Team")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"hide-overlay":"",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6",sm:"5",md:"6"}},[n("v-text-field",{attrs:{label:"Team Name","prepend-icon":"mdi-account-group"},model:{value:t.editedTeam.name,callback:function(e){t.$set(t.editedTeam,"name",e)},expression:"editedTeam.name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-select",{attrs:{items:t.editedTeam.members,label:"Leader","prepend-icon":"mdi-account-group-outline","item-text":"nickname","item-value":"id"},model:{value:t.editedTeam.leader,callback:function(e){t.$set(t.editedTeam,"leader",e)},expression:"editedTeam.leader"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Team Avatar","prepend-icon":"mdi-camera"},model:{value:t.editedTeam.avatar_url,callback:function(e){t.$set(t.editedTeam,"avatar_url",e)},expression:"editedTeam.avatar_url"}})],1),n("v-col",{attrs:{cols:"12"}},[n("h2",{staticStyle:{"padding-bottom":"10px"}},[t._v("Description")]),n("v-textarea",{attrs:{"auto-grow":"",clearable:"","clear-icon":"mdi-close-circle"},model:{value:t.editedTeam.description,callback:function(e){t.$set(t.editedTeam,"description",e)},expression:"editedTeam.description"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.avatar_url",fn:function(t){var e=t.item;return[n("v-avatar",[n("img",{attrs:{src:e.avatar_url}})])]}},{key:"item.actions",fn:function(e){var i=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})],1)],1)],1)],1)},a=[],r=(n("c975"),n("a434"),n("e25e"),n("96cf"),n("1da1")),o=n("ff7d"),s=n("8e77"),c=n("c405"),d=n("b775"),l=function(t){return Object(d["a"])({url:"/admin/team/",method:"post",data:t})},u=function(t){return Object(d["a"])({url:"/admin/team/"+t+"/",method:"get"})},h=function(){return Object(d["a"])({url:"/admin/team/",method:"get"})},m=function(t,e){return Object(d["a"])({url:"/admin/team/"+t+"/",method:"put",data:e})},f=function(t){return Object(d["a"])({url:"/admin/team/"+t+"/",method:"delete"})},v={components:{BaseCard:o["a"],Markdown:s["a"]},data:function(){return{dialog:!1,is_loading:!0,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Avatar",sortable:!1,value:"avatar_url"},{text:"Name",sortable:!1,value:"name"},{text:"Solved",value:"solved_amount"},{text:"Points",value:"points"},{text:"Actions",value:"actions",sortable:!1}],teams:[],editedIndex:-1,editedTeam:{id:0,name:"",description:"",avatar_url:"",leader:0},defaultTeam:{id:0,name:"",description:"",avatar_url:"",leader:0},rules:{nameRules:[function(t){return!!t||"Team Title is required"}],pointsRules:[function(t){return!!t||"Points is required"},function(t){return/^[0-9]*$/.test(t)||"Points must be valid"}],portRules:[function(t){return!!t||"Ports is required"},function(t){return/^[0-9]*$/.test(t)||"Ports must be valid"},function(t){return 0<t&&t<66536||"Ports must between 1~66535"}],categoryRules:[function(t){return!!t||"Category is required"}],contentnRules:[function(t){return!!t||"Content is required"}],flagRules:[function(t){return!!t||"Flag is required"}]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Team":"Edit Team"}},watch:{dialog:function(t){t||this.close()}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initialize();case 1:case"end":return e.stop()}}),e)})))()},methods:{initialize:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,t.teams=n.data,e.next=6,Object(c["d"])();case 6:i=e.sent,t.categories=i.data;case 8:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.editedIndex=e.teams.indexOf(t),n.next=3,u(t.id);case 3:i=n.sent,e.editedTeam=Object.assign({},i["data"]),e.dialog=!0;case 6:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.teams.indexOf(t),!confirm("Are you sure you want to delete this Team?")){n.next=8;break}return e.teams.splice(i,1),n.next=5,f(t.id);case 5:a=n.sent,console.log("delete:",a),e.$vToastify.success("Deleted Successfully");case 8:case"end":return n.stop()}}),n)})))()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedTeam=Object.assign({},t.defaultTeam),t.editedIndex=-1}))},save:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.editedIndex>-1)){e.next=8;break}return Object.assign(t.teams[t.editedIndex],t.editedTeam),e.next=4,m(t.editedTeam.id,t.editedTeam);case 4:e.sent,t.$vToastify.success("Edited Successfully"),e.next=15;break;case 8:return e.next=10,l(t.editedTeam);case 10:n=e.sent,t.editedTeam.points=parseInt(t.editedTeam.initial_points),t.editedTeam.id=n["data"]["id"],t.teams.push(t.editedTeam),t.$vToastify.success("Added Successfully");case 15:t.close();case 16:case"end":return e.stop()}}),e)})))()}}},p=v,g=n("2877"),b=n("6544"),x=n.n(b),w=n("8212"),y=n("8336"),T=n("b0af"),k=n("99d9"),O=n("62ad"),C=n("a523"),j=n("8fea"),$=n("169a"),_=n("ce7e"),I=n("132d"),A=n("0fd9"),S=n("b974"),R=n("2fa4"),V=n("8654"),B=n("a844"),E=n("71d9"),D=n("2a7f"),z=Object(g["a"])(p,i,a,!1,null,null,null);e["default"]=z.exports;x()(z,{VAvatar:w["a"],VBtn:y["a"],VCard:T["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:O["a"],VContainer:C["a"],VDataTable:j["a"],VDialog:$["a"],VDivider:_["a"],VIcon:I["a"],VRow:A["a"],VSelect:S["a"],VSpacer:R["a"],VTextField:V["a"],VTextarea:B["a"],VToolbar:E["a"],VToolbarTitle:D["a"]})},1681:function(t,e,n){},"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("c0b6"),n("a9e3"),n("2532"),n("498a"),n("4795");var i=n("5530"),a=n("2909"),r=n("ade3"),o=(n("368e"),n("480e")),s=n("4ad4"),c=n("b848"),d=n("75eb"),l=n("e707"),u=n("e4d3"),h=n("21be"),m=n("f2e7"),f=n("a293"),v=n("58df"),p=n("d9bd"),g=n("80d2"),b=Object(v["a"])(s["a"],c["a"],d["a"],l["a"],u["a"],h["a"],m["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r["a"])(t,"v-dialog--active",this.isActive),Object(r["a"])(t,"v-dialog--persistent",this.persistent),Object(r["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(r["a"])(t,"v-dialog--scrollable",this.scrollable),Object(r["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,n){},a844:function(t,e,n){"use strict";n("a9e3"),n("acd8"),n("e25e"),n("4795");var i=n("5530"),a=(n("1681"),n("8654")),r=n("58df"),o=Object(r["a"])(a["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c405:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return c}));var i=n("b775"),a=function(){return Object(i["a"])({url:"/admin/category/",method:"get"})},r=function(t){return Object(i["a"])({url:"/admin/category/"+t+"/",method:"get"})},o=function(t){return Object(i["a"])({url:"/admin/category/",method:"post",data:t})},s=function(t,e){return Object(i["a"])({url:"/admin/category/"+t+"/",method:"put",data:e})},c=function(t){return Object(i["a"])({url:"/admin/category/"+t+"/",method:"delete"})}}}]);