(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc7ff4a"],{"48f4":function(t,e,n){"use strict";function i(t,e){var n=e.to,i=e.url,a=e.replace;if(n&&t){var c=t[a?"replace":"push"](n);c&&c.catch&&c.catch((function(t){if("NavigationDuplicated"!==t.name)throw t}))}else i&&(a?location.replace(i):location.href=i)}function a(t){i(t.parent&&t.parent.$router,t.props)}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c}));var c={url:String,replace:Boolean,to:[String,Object]}},"4a22":function(t,e,n){},"81c0":function(t,e,n){},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var i=n("2b0e");function a(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function c(t,e){var n,c;void 0===e&&(e={});var r=e.indexKey||"index";return i["a"].extend({inject:(n={},n[t]={default:null},n),computed:(c={parent:function(){return this.disableBindRelation?null:this[t]}},c[r]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},c),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=a(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function r(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},c5d3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"text"}}),n("van-tree-select",{attrs:{height:"55vw",items:t.items,"main-active-index":t.activeIndex},on:{"update:mainActiveIndex":function(e){t.activeIndex=e},"update:main-active-index":function(e){t.activeIndex=e}}},[n("template",{slot:"content"},[0===t.activeIndex?n("van-image",{attrs:{src:"https://img.yzcdn.cn/vant/apple-1.jpg"}}):t._e(),1===t.activeIndex?n("van-image",{attrs:{src:"https://img.yzcdn.cn/vant/apple-2.jpg"}}):t._e()],1)],2)],1)},a=[],c=(n("68ef"),n("09fe"),n("44bf")),r=(n("d8ac"),n("81c0"),n("4a22"),n("2638")),s=n.n(r),d=n("d282"),o=n("ea8e"),u=n("ba31"),l=n("ad06"),f=n("9884"),h=Object(d["a"])("sidebar"),p=h[0],v=h[1],b=p({mixins:[Object(f["b"])("vanSidebar")],model:{prop:"activeKey"},props:{activeKey:{type:[Number,String],default:0}},render:function(){var t=arguments[0];return t("div",{class:v()},[this.slots()])}}),m=n("c31d"),x=n("48f4"),O=n("6f2f"),g=Object(d["a"])("sidebar-item"),y=g[0],j=g[1],k=y({mixins:[Object(f["a"])("vanSidebar")],props:Object(m["a"])({},x["c"],{dot:Boolean,info:[Number,String],title:String,disabled:Boolean}),computed:{select:function(){return this.index===+this.parent.activeKey}},methods:{onClick:function(){this.disabled||(this.$emit("click",this.index),this.parent.$emit("input",this.index),this.parent.$emit("change",this.index),Object(x["b"])(this.$router,this))}},render:function(){var t=arguments[0];return t("a",{class:j({select:this.select,disabled:this.disabled}),on:{click:this.onClick}},[t("div",{class:j("text")},[this.title,t(O["a"],{attrs:{dot:this.dot,info:this.info},class:j("info")})])])}}),I=Object(d["a"])("tree-select"),S=I[0],w=I[1];function N(t,e,n,i){var a=e.height,c=e.items,r=e.mainActiveIndex,d=e.activeId,f=c[r]||{},h=f.children||[],p=Array.isArray(d);function v(t){return p?-1!==d.indexOf(t):d===t}var m=c.map((function(e){return t(k,{attrs:{dot:e.dot,info:e.info,title:e.text,disabled:e.disabled},class:[w("nav-item"),e.className]})}));function x(){return n.content?n.content():h.map((function(n){return t("div",{key:n.id,class:["van-ellipsis",w("item",{active:v(n.id),disabled:n.disabled})],on:{click:function(){if(!n.disabled){var t=n.id;if(p){t=d.slice();var a=t.indexOf(n.id);-1!==a?t.splice(a,1):t.length<e.max&&t.push(n.id)}Object(u["a"])(i,"click-item",n),Object(u["a"])(i,"update:active-id",t),Object(u["a"])(i,"itemclick",n)}}}},[n.text,v(n.id)&&t(l["a"],{attrs:{name:"checked",size:"16px"},class:w("selected")})])}))}return t("div",s()([{class:w(),style:{height:Object(o["a"])(a)}},Object(u["b"])(i)]),[t(b,{class:w("nav"),attrs:{activeKey:r},on:{change:function(t){Object(u["a"])(i,"click-nav",t),Object(u["a"])(i,"update:main-active-index",t),Object(u["a"])(i,"navclick",t)}}},[m]),t("div",{class:w("content")},[x()])])}N.props={max:{type:Number,default:1/0},items:{type:Array,default:function(){return[]}},height:{type:[Number,String],default:300},activeId:{type:[Number,String,Array],default:0},mainActiveIndex:{type:Number,default:0}};var $=S(N),A={props:{},components:{VanTreeSelect:$,VanImage:c["a"]},data:function(){return{activeIndex:0,items:[{text:"分组 1"},{text:"分组 2"}]}},computed:{},methods:{},created:function(){},mounted:function(){}},K=A,B=n("2877"),R=Object(B["a"])(K,i,a,!1,null,"57ad6b91",null);e["default"]=R.exports},d8ac:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1cc7ff4a.c74c99aa.js.map