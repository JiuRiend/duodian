(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-407fd8a7"],{"0653":function(t,e,n){"use strict";n("68ef")},"0f8c":function(t,e,n){},"34e9":function(t,e,n){"use strict";var a=n("2638"),i=n.n(a),o=n("d282"),s=n("ba31"),r=n("b1d2"),c=Object(o["a"])("cell-group"),u=c[0],l=c[1];function d(t,e,n,a){var o,c=t("div",i()([{class:[l(),(o={},o[r["g"]]=e.border,o)]},Object(s["b"])(a,!0)]),[n.default&&n.default()]);return e.title||n.title?t("div",[t("div",{class:l("title")},[n.title?n.title():e.title]),c]):c}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=u(d)},"3b42":function(t,e,n){},"5c66":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirmOrder"},[n("Header",{attrs:{title:t.title,isShow:t.isShow}}),n("div",{staticClass:"address",on:{click:t.goAddressPage}},[n("div",{staticClass:"address-left"},[n("h3",{domProps:{textContent:t._s(t.list[0].address)}}),n("p",[n("span",{staticClass:"address-left-name",domProps:{textContent:t._s(t.list[0].name)}}),n("span",{domProps:{textContent:t._s(t.list[0].tel)}})])]),n("div",[n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)]),n("van-card",{attrs:{num:"1",tag:"限时折扣",price:"99","origin-price":"129",title:"休闲时装",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"}}),n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1),n("van-cell-group",[n("van-field",{attrs:{label:"买家留言",type:"textarea",placeholder:"留言建议提前协商（50字以内）",rows:"1",autosize:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("van-submit-bar",{attrs:{price:9900,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1)},i=[],o=(n("be39"),n("efa0")),s=(n("0653"),n("34e9")),r=(n("be7f"),n("565f")),c=(n("e324"),n("453b")),u=(n("8a58"),n("e41f")),l=(n("b76c"),n("ac3c")),d=(n("9cb7"),n("66fd")),p=(n("c3a6"),n("ad06")),f=n("8b55"),b={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},g={data:function(){return{list:[{id:0,name:"张三",tel:"13000000000",address:"八维研修学院(第二校区)宿舍楼2号楼"}],title:"确认订单",isShow:!0,showList:!1,chosenCoupon:-1,coupons:[b],disabledCoupons:[b],message:""}},components:{Header:f["a"],vanIcon:p["a"],vanCard:d["a"],vanCouponCell:l["a"],vanPopup:u["a"],vanCouponList:c["a"],vanField:r["a"],vanCellGroup:s["a"],vanSubmitBar:o["a"]},methods:{goAddressPage:function(){this.$router.push("/addressPage")},onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(){this.coupons.push(b)},onSubmit:function(){}}},m=g,v=(n("fba8"),n("2877")),h=Object(v["a"])(m,a,i,!1,null,null,null);e["default"]=h.exports},"66fd":function(t,e,n){"use strict";var a=n("2638"),i=n.n(a),o=n("d282"),s=n("a142"),r=n("ba31"),c=n("a3e2"),u=n("44bf"),l=Object(o["a"])("card"),d=l[0],p=l[1];function f(t,e,n,a){var o=e.thumb,l=n.num||Object(s["b"])(e.num),d=n.price||Object(s["b"])(e.price),f=n["origin-price"]||Object(s["b"])(e.originPrice),b=l||d||f;function g(t){Object(r["a"])(a,"click-thumb",t)}function m(){if(n.tag||e.tag)return t("div",{class:p("tag")},[n.tag?n.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function v(){if(n.thumb||o)return t("a",{attrs:{href:e.thumbLink},class:p("thumb"),on:{click:g}},[n.thumb?n.thumb():t(u["a"],{attrs:{src:o,width:"100%",height:"100%",fit:"contain","lazy-load":e.lazyLoad}}),m()])}function h(){return n.title?n.title():e.title?t("div",{class:p("title")},[e.title]):void 0}function S(){return n.desc?n.desc():e.desc?t("div",{class:[p("desc"),"van-ellipsis"]},[e.desc]):void 0}function x(){if(d)return t("div",{class:p("price")},[n.price?n.price():e.currency+" "+e.price])}function C(){if(f){var a=n["origin-price"];return t("div",{class:p("origin-price")},[a?a():e.currency+" "+e.originPrice])}}function y(){if(l)return t("div",{class:p("num")},[n.num?n.num():"x "+e.num])}function w(){if(n.footer)return t("div",{class:p("footer")},[n.footer()])}return t("div",i()([{class:p()},Object(r["b"])(a,!0)]),[t("div",{class:p("header")},[v(),t("div",{class:p("content",{centered:e.centered})},[h(),S(),n.tags&&n.tags(),b&&t("div",{class:"van-card__bottom"},[x(),C(),y(),n.bottom&&n.bottom()])])]),w()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=d(f)},"9b7e":function(t,e,n){},"9cb7":function(t,e,n){"use strict";n("68ef"),n("9b7e"),n("09fe"),n("ea82")},a3e2:function(t,e,n){"use strict";var a=n("2638"),i=n.n(a),o=n("d282"),s=n("ba31"),r=n("b1d2"),c=Object(o["a"])("tag"),u=c[0],l=c[1];function d(t,e,n,a){var o,c,u=e.type,d=e.mark,p=e.plain,f=e.color,b=e.round,g=e.size,m=p?"color":"backgroundColor",v=(o={},o[m]=f,o);e.textColor&&(v.color=e.textColor);var h={mark:d,plain:p,round:b};return g&&(h[g]=g),t("span",i()([{style:v,class:[l([h,u]),(c={},c[r["e"]]=p,c)]},Object(s["b"])(a,!0)]),[n.default&&n.default()])}d.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},e["a"]=u(d)},be39:function(t,e,n){"use strict";n("68ef"),n("09fe"),n("3b42")},be7f:function(t,e,n){"use strict";n("68ef"),n("09fe"),n("1146")},ea82:function(t,e,n){},efa0:function(t,e,n){"use strict";var a=n("2638"),i=n.n(a),o=n("d282"),s=n("ba31"),r=n("b650"),c=n("ad06"),u=Object(o["a"])("submit-bar"),l=u[0],d=u[1],p=u[2];function f(t,e,n,a){var o=e.tip,u=e.price,l=e.tipIcon;function f(){if("number"===typeof u){var n=e.currency+" "+(u/100).toFixed(e.decimalLength);return t("div",{class:d("text")},[t("span",[e.label||p("label")]),t("span",{class:d("price")},[n]),e.suffixLabel&&t("span",{class:d("suffix-label")},[e.suffixLabel])])}}function b(){if(n.tip||o)return t("div",{class:d("tip")},[l&&t(c["a"],{class:d("tip-icon"),attrs:{name:l}}),o&&t("span",{class:d("tip-text")},[o]),n.tip&&n.tip()])}return t("div",i()([{class:d({"safe-area-inset-bottom":e.safeAreaInsetBottom})},Object(s["b"])(a)]),[n.top&&n.top(),b(),t("div",{class:d("bar")},[n.default&&n.default(),f(),t(r["a"],{attrs:{square:!0,size:"large",type:e.buttonType,loading:e.loading,disabled:e.disabled,text:e.loading?"":e.buttonText},class:d("button"),on:{click:function(){Object(s["a"])(a,"submit")}}})])])}f.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,buttonText:String,suffixLabel:String,safeAreaInsetBottom:Boolean,decimalLength:{type:Number,default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},e["a"]=l(f)},fba8:function(t,e,n){"use strict";var a=n("0f8c"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-407fd8a7.0884dc75.js.map