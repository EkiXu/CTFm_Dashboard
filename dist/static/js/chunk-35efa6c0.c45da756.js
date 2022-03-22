(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35efa6c0"],{1681:function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b"),n("4795");var a=n("5530"),r=n("58df"),o=n("7e2b"),i=n("3206");e["a"]=Object(r["a"])(o["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots["default"])}})},6458:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[n("v-row",{staticStyle:{height:"56px"}}),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:t._u([{key:"heading",fn:function(){return[n("div",{staticClass:"display-2 font-weight-light"},[t._v("Whale Setting")]),n("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("Configure Dynamic Challenge Setting")])]},proxy:!0}])},[n("v-container",[n("v-form",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker API URL"},model:{value:t.whaleConfig.docker_api_url,callback:function(e){t.$set(t.whaleConfig,"docker_api_url",e)},expression:"whaleConfig.docker_api_url"}})],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Frp API Host"},model:{value:t.whaleConfig.frp_api_host,callback:function(e){t.$set(t.whaleConfig,"frp_api_host",e)},expression:"whaleConfig.frp_api_host"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Frp API Port",rules:t.rules.portRules},model:{value:t.whaleConfig.frp_api_port,callback:function(e){t.$set(t.whaleConfig,"frp_api_port",e)},expression:"whaleConfig.frp_api_port"}})],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Frp HTTP Domain Suffix"},model:{value:t.whaleConfig.frp_http_domain_suffix,callback:function(e){t.$set(t.whaleConfig,"frp_http_domain_suffix",e)},expression:"whaleConfig.frp_http_domain_suffix"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Frp HTTP Port",rules:t.rules.portRules},model:{value:t.whaleConfig.frp_http_port,callback:function(e){t.$set(t.whaleConfig,"frp_http_port",e)},expression:"whaleConfig.frp_http_port"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Frp Direct IP address"},model:{value:t.whaleConfig.frp_direct_ip_address,callback:function(e){t.$set(t.whaleConfig,"frp_direct_ip_address",e)},expression:"whaleConfig.frp_direct_ip_address"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{label:"Frp Direct Minimum Port",rules:t.rules.portRules},model:{value:t.whaleConfig.frp_direct_port_minimum,callback:function(e){t.$set(t.whaleConfig,"frp_direct_port_minimum",e)},expression:"whaleConfig.frp_direct_port_minimum"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{label:"Frp Direct Maximum Port",rules:t.rules.portRules},model:{value:t.whaleConfig.frp_direct_port_maximum,callback:function(e){t.$set(t.whaleConfig,"frp_direct_port_maximum",e)},expression:"whaleConfig.frp_direct_port_maximum"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{label:"Max Container Amount"},model:{value:t.whaleConfig.max_container_amount,callback:function(e){t.$set(t.whaleConfig,"max_container_amount",e)},expression:"whaleConfig.max_container_amount"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{label:"Max Renew Time"},model:{value:t.whaleConfig.max_renew_time,callback:function(e){t.$set(t.whaleConfig,"max_renew_time",e)},expression:"whaleConfig.max_renew_time"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"Frp Config Template"},model:{value:t.whaleConfig.frp_config_template,callback:function(e){t.$set(t.whaleConfig,"frp_config_template",e)},expression:"whaleConfig.frp_config_template"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker Auto Connect Containers"},model:{value:t.whaleConfig.docker_auto_connect_containers,callback:function(e){t.$set(t.whaleConfig,"docker_auto_connect_containers",e)},expression:"whaleConfig.docker_auto_connect_containers"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker Swarm nodes"},model:{value:t.whaleConfig.docker_swarm_nodes,callback:function(e){t.$set(t.whaleConfig,"docker_swarm_nodes",e)},expression:"whaleConfig.docker_swarm_nodes"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker Dns Setting"},model:{value:t.whaleConfig.docker_dns_setting,callback:function(e){t.$set(t.whaleConfig,"docker_dns_setting",e)},expression:"whaleConfig.docker_dns_setting"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker Auto Connect Network"},model:{value:t.whaleConfig.docker_auto_connect_network,callback:function(e){t.$set(t.whaleConfig,"docker_auto_connect_network",e)},expression:"whaleConfig.docker_auto_connect_network"}})],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Docker Multi Container Network Subnet"},model:{value:t.whaleConfig.docker_multi_container_network_subnet,callback:function(e){t.$set(t.whaleConfig,"docker_multi_container_network_subnet",e)},expression:"whaleConfig.docker_multi_container_network_subnet"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Docker Multi Container Network Subnet New Prefix"},model:{value:t.whaleConfig.docker_multi_container_network_subnet_new_prefix,callback:function(e){t.$set(t.whaleConfig,"docker_multi_container_network_subnet_new_prefix",e)},expression:"whaleConfig.docker_multi_container_network_subnet_new_prefix"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Docker Container Timeout"},model:{value:t.whaleConfig.docker_container_timeout,callback:function(e){t.$set(t.whaleConfig,"docker_container_timeout",e)},expression:"whaleConfig.docker_container_timeout"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{type:"submit"},on:{click:t.updateWhaleConfig}},[t._v("submit")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],o=(n("96cf"),n("1da1")),i=n("ff7d"),s=n("b775"),l=function(){return Object(s["a"])({url:"/admin/whale/",method:"get"})},c=function(t){return Object(s["a"])({url:"/admin/whale/",method:"post",data:t})},u={components:{BaseCard:i["a"]},data:function(){return{whaleConfig:{docker_api_url:"",frp_api_ip:"",frp_api_port:0,frp_http_domain_suffix:"",frp_http_port:0,frp_direct_ip_address:"",frp_direct_port_minimum:0,frp_direct_port_maximum:0,max_container_amount:0,max_renew_time:0,frp_config_template:"",docker_auto_connect_containers:"",docker_auto_connect_network:"",docker_dns_setting:"",docker_swarm_nodes:"",docker_multi_container_network_subnet:"",docker_multi_container_network_subnet_new_prefix:"",docker_container_timeout:0},rules:{portRules:[function(t){return!!t||"Ports is required"},function(t){return/^[0-9]*$/.test(t)||"Ports must be valid"},function(t){return 0<t&&t<66536||"Ports must between 1~66535"}]}}},computed:{},watch:{},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initialize();case 1:case"end":return e.stop()}}),e)})))()},methods:{initialize:function(){this.getWhaleConfig()},getWhaleConfig:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:for(r in n=e.sent,a=n.data,a)t.whaleConfig[r]=a[r];case 5:case"end":return e.stop()}}),e)})))()},updateWhaleConfig:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c(t.whaleConfig);case 2:for(r in n=e.sent,a=n.data,a)t.whaleConfig[r]=a[r];case 5:case"end":return e.stop()}}),e)})))()}}},f=u,d=n("2877"),_=n("6544"),h=n.n(_),p=n("8336"),m=n("62ad"),w=n("a523"),v=n("4bd4"),g=n("0fd9"),k=n("8654"),x=n("a844"),b=Object(d["a"])(f,a,r,!1,null,null,null);e["default"]=b.exports;h()(b,{VBtn:p["a"],VCol:m["a"],VContainer:w["a"],VForm:v["a"],VRow:g["a"],VTextField:k["a"],VTextarea:x["a"]})},"8ce9":function(t,e,n){},a844:function(t,e,n){"use strict";n("a9e3"),n("acd8"),n("e25e"),n("4795");var a=n("5530"),r=(n("1681"),n("8654")),o=n("58df"),i=Object(o["a"])(r["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ce7e:function(t,e,n){"use strict";var a=n("5530"),r=(n("8ce9"),n("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);