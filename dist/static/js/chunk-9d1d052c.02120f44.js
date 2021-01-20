(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d1d052c"],{"900b":function(e,t,i){"use strict";i("a9c0")},"98ed":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[i("v-row",{staticStyle:{height:"56px"}}),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"8"}},[i("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:e._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[e._v(" Edit Challenges ")])]},proxy:!0}])},[i("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:e.headers,items:e.challenges,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Challenges")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"hide-overlay":"",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),a),[e._v(" New Challenge ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"7",md:"8"}},[i("v-text-field",{attrs:{rules:e.rules.nameRules,label:"Title"},model:{value:e.editedChallenge.title,callback:function(t){e.$set(e.editedChallenge,"title",t)},expression:"editedChallenge.title"}})],1),i("v-col",{attrs:{cols:"12",sm:"5",md:"4"}},[i("v-select",{attrs:{items:e.categories,rules:e.rules.categoryRules,"item-text":"name","item-value":"id",label:"Category"},model:{value:e.editedChallenge.category,callback:function(t){e.$set(e.editedChallenge,"category",t)},expression:"editedChallenge.category"}})],1),i("v-col",{attrs:{cols:"8",sm:"5",md:"4"}},[i("v-text-field",{attrs:{label:"Author"},model:{value:e.editedChallenge.author,callback:function(t){e.$set(e.editedChallenge,"author",t)},expression:"editedChallenge.author"}})],1),i("v-col",{attrs:{cols:"12",sm:"7",md:"8"}},[i("v-text-field",{attrs:{rules:e.rules.flagRules,label:"Flag"},model:{value:e.editedChallenge.flag,callback:function(t){e.$set(e.editedChallenge,"flag",t)},expression:"editedChallenge.flag"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Initial Points"},model:{value:e.editedChallenge.initial_points,callback:function(t){e.$set(e.editedChallenge,"initial_points",t)},expression:"editedChallenge.initial_points"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Minimum points"},model:{value:e.editedChallenge.minimum_points,callback:function(t){e.$set(e.editedChallenge,"minimum_points",t)},expression:"editedChallenge.minimum_points"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Decay"},model:{value:e.editedChallenge.decay,callback:function(t){e.$set(e.editedChallenge,"decay",t)},expression:"editedChallenge.decay"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Summary"},model:{value:e.editedChallenge.summary,callback:function(t){e.$set(e.editedChallenge,"summary",t)},expression:"editedChallenge.summary"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h2",{staticStyle:{"padding-bottom":"10px"}},[e._v(" Content ")]),i("Markdown",{attrs:{height:260},model:{value:e.editedChallenge.content,callback:function(t){e.$set(e.editedChallenge,"content",t)},expression:"editedChallenge.content"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-switch",{attrs:{label:"Hide Challenge"},model:{value:e.editedChallenge.is_hidden,callback:function(t){e.$set(e.editedChallenge,"is_hidden",t)},expression:"editedChallenge.is_hidden"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.is_hidden",fn:function(t){var a=t.item;return[i("v-simple-checkbox",{attrs:{disabled:""},model:{value:a.is_hidden,callback:function(t){e.$set(a,"is_hidden",t)},expression:"item.is_hidden"}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})],1)],1)],1)],1)},n=[],s=(i("c975"),i("a434"),i("e25e"),i("96cf"),i("1da1")),l=i("ff7d"),r=i("8e77"),o=i("c405"),c=i("b775"),d=function(){return Object(c["a"])({url:"/admin/challenge/",method:"get"})},u=function(e){return Object(c["a"])({url:"/admin/challenge/"+e+"/",method:"get"})},h=function(e){return Object(c["a"])({url:"/admin/challenge/",method:"post",data:e})},v=function(e,t){return Object(c["a"])({url:"/admin/challenge/"+e+"/",method:"put",data:t})},g={components:{BaseCard:l["a"],Markdown:r["a"]},data:function(){return{dialog:!1,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Challenge",sortable:!1,value:"title"},{text:"Points",value:"points"},{text:"Category",value:"category"},{text:"Is Hidden",value:"is_hidden"},{text:"Solved",value:"solved_amount"},{text:"Attempts",value:"attempt_amount"},{text:"Actions",value:"actions",sortable:!1}],challenges:[],editedIndex:-1,editedChallenge:{id:0,title:"",summary:"",content:"",flag:"",category:0,initial_points:0,minimum_points:0,decay:0,is_hidden:!0},defaultChallenge:{id:0,title:"",summary:"",content:"",flag:"",category:0,initial_points:0,minimum_points:0,decay:0,is_hidden:!0},categories:[],rules:{nameRules:[function(e){return!!e||"Challenge Title is required"}],pointsRules:[function(e){return!!e||"Points is required"},function(e){return/^[0-9]*$/.test(e)||"Points must be valid"}],categoryRules:[function(e){return!!e||"Category is required"}],contentnRules:[function(e){return!!e||"Content is required"}],flagRules:[function(e){return!!e||"Flag is required"}]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Challenge":"Edit Challenge"}},watch:{dialog:function(e){e||this.close()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initialize();case 1:case"end":return t.stop()}}),t)})))()},methods:{initialize:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return i=t.sent,e.challenges=i.data,t.next=6,Object(o["d"])();case 6:a=t.sent,e.categories=a.data;case 8:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.editedIndex=t.challenges.indexOf(e),i.next=3,u(e.id);case 3:a=i.sent,t.editedChallenge=Object.assign({},a["data"]),t.dialog=!0;case 6:case"end":return i.stop()}}),i)})))()},deleteItem:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.challenges.indexOf(e),confirm("Are you sure you want to delete this Challenge?")&&t.challenges.splice(a,1),i.next=4,deleteChallengeByID(e.id);case 4:i.sent,t.$vToastify.success("Deleted Successfully");case 6:case"end":return i.stop()}}),i)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedChallenge=Object.assign({},e.defaultChallenge),e.editedIndex=-1}))},save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=8;break}return Object.assign(e.challenges[e.editedIndex],e.editedChallenge),t.next=4,v(e.editedChallenge.id,e.editedChallenge);case 4:t.sent,e.$vToastify.success("Edited Successfully"),t.next=15;break;case 8:return t.next=10,h(e.editedChallenge);case 10:i=t.sent,e.editedChallenge.points=parseInt(e.editedChallenge.initial_points),e.editedChallenge.id=i["data"]["id"],e.challenges.push(e.editedChallenge),e.$vToastify.success("Added Successfully");case 15:e.close();case 16:case"end":return t.stop()}}),t)})))()}}},f=g,p=i("2877"),m=i("6544"),C=i.n(m),b=i("8336"),x=i("b0af"),y=i("99d9"),_=i("62ad"),w=i("a523"),k=i("8fea"),V=i("169a"),S=i("ce7e"),$=i("132d"),O=i("0fd9"),j=i("b974"),R=i("9e88"),A=i("2fa4"),I=i("b73d"),D=i("8654"),T=i("71d9"),B=i("2a7f"),E=Object(p["a"])(f,a,n,!1,null,null,null);t["default"]=E.exports;C()(E,{VBtn:b["a"],VCard:x["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:_["a"],VContainer:w["a"],VDataTable:k["a"],VDialog:V["a"],VDivider:S["a"],VIcon:$["a"],VRow:O["a"],VSelect:j["a"],VSimpleCheckbox:R["a"],VSpacer:A["a"],VSwitch:I["a"],VTextField:D["a"],VToolbar:T["a"],VToolbarTitle:B["a"]})},"9d01":function(e,t,i){},a9c0:function(e,t,i){},b73d:function(e,t,i){"use strict";i("0481"),i("4069");var a=i("5530"),n=(i("ec29"),i("9d01"),i("4de4"),i("277d"),i("45fc"),i("0d03"),i("d3b7"),i("25f0"),i("c37a")),s=i("5607"),l=i("2b0e"),r=l["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),o=i("8547"),c=i("58df");function d(e){e.preventDefault()}var u=Object(c["a"])(n["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:d},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===a&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),h=i("c3f0"),v=i("0789"),g=i("490a"),f=i("80d2");t["a"]=u.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(g["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===f["x"].left&&this.isActive||e.keyCode===f["x"].right&&!this.isActive)&&this.onChange()}}})},c405:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return l})),i.d(t,"e",(function(){return r})),i.d(t,"b",(function(){return o}));var a=i("b775"),n=function(){return Object(a["a"])({url:"/admin/category/",method:"get"})},s=function(e){return Object(a["a"])({url:"/admin/category/"+e+"/",method:"get"})},l=function(e){return Object(a["a"])({url:"/admin/category/",method:"post",data:e})},r=function(e,t){return Object(a["a"])({url:"/admin/category/"+e+"/",method:"put",data:t})},o=function(e){return Object(a["a"])({url:"/admin/category/"+e+"/",method:"delete"})}},ec29:function(e,t,i){},ff7d:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",e._b({staticClass:"v-card--material pa-3",class:e.classes},"v-card",e.$attrs,!1),[i("div",{staticClass:"d-flex grow flex-wrap"},[e.avatar?i("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[i("v-img",{attrs:{src:e.avatar}})],1):i("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!e.$slots.image},attrs:{color:e.color,"max-height":e.icon?90:void 0,width:e.icon?"auto":"100%",elevation:"6",dark:""}},[e.$slots.heading?e._t("heading"):e.$slots.image?e._t("image"):e.title&&!e.icon?i("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:e._s(e.title)}}):e.icon?i("v-icon",{attrs:{size:"32"},domProps:{textContent:e._s(e.icon)}}):e._e(),e.text?i("div",{staticClass:"headline font-weight-thin",domProps:{textContent:e._s(e.text)}}):e._e()],2),e.$slots["after-heading"]?i("div",{staticClass:"ml-6"},[e._t("after-heading")],2):e.icon&&e.title?i("div",{staticClass:"ml-4"},[i("div",{staticClass:"card-title font-weight-light",domProps:{textContent:e._s(e.title)}})]):e._e()],1),e._t("default"),e.$slots.actions?[i("v-divider",{staticClass:"mt-2"}),i("v-card-actions",{staticClass:"pb-0"},[e._t("actions")],2)]:e._e()],2)},n=[],s={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},l=s,r=(i("900b"),i("2877")),o=i("6544"),c=i.n(o),d=i("8212"),u=i("b0af"),h=i("99d9"),v=i("ce7e"),g=i("132d"),f=i("adda"),p=i("8dd9"),m=Object(r["a"])(l,a,n,!1,null,null,null);t["a"]=m.exports;c()(m,{VAvatar:d["a"],VCard:u["a"],VCardActions:h["a"],VDivider:v["a"],VIcon:g["a"],VImg:f["a"],VSheet:p["a"]})}}]);