(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49625ea2"],{"0260":function(t,e,i){"use strict";var n=i("95f1"),o=i.n(n);o.a},"061d":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("f9e8");function o(t){function e(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}},"0a8c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"我的",isShow:!1}},[n("div",{staticClass:"mybox"},[n("div",{staticClass:"nickname"},[n("h2",[t._v("我的昵称")]),n("span",[t._v("开启美好的饿一天...")])]),n("div",{staticClass:"portrait"},[n("div",{staticClass:"photo",on:{click:t.clickFn}})])]),n("div",{staticClass:"orderManage"},[n("div",{staticClass:"myOrder"},[n("p",[t._v("我的订单")]),n("div",{staticClass:"lookAll"},[n("span",{on:{click:function(e){return t.orderFn(0)}}},[t._v("查看全部")]),n("van-icon",{attrs:{name:"arrow"}})],1)]),n("div",{staticClass:"orderClassify"},[n("div",[n("div",{staticClass:"daifukuan",on:{click:function(e){return t.orderFn(1)}}})]),n("div",[n("div",{staticClass:"daipeisong",on:{click:function(e){return t.orderFn(2)}}})]),n("div",[n("div",{staticClass:"yifahuo",on:{click:function(e){return t.orderFn(3)}}})]),n("div",[n("div",{staticClass:"tuikuanshouhou",on:{click:function(e){return t.orderFn(4)}}})])])]),n("div",{staticClass:"proMore"},[n("ul",{staticClass:"uls"},[n("li",{on:{click:function(e){return t.ToCoupon()}}},[n("div",{staticClass:"lis_left"},[n("span",{staticClass:"youhui"}),t._v("我的优惠券")]),n("div",{staticClass:"lis_right rSpan"},[n("span",[t._v("8")]),t._v("张未使用")])]),n("li",{on:{click:function(e){return t.ToQualifications()}}},[n("div",{staticClass:"lis_left"},[n("span",{staticClass:"rule"}),t._v("资质规则")])]),n("li",{on:{click:function(e){return t.customerService()}}},[n("div",{staticClass:"lis_left"},[n("span",{staticClass:"support"}),t._v("联系客服")]),n("div",{staticClass:"lis_right rc"},[t._v("400-123-123")])])])]),n("van-dialog",{staticClass:"myDialog",attrs:{title:"个人信息","show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",[n("van-uploader",{attrs:{"before-read":t.beforeRead,"max-count":1,multiple:""},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),n("div",[n("van-field",{attrs:{clearable:"",clickable:"",label:"昵称",placeholder:"请输入昵称"},on:{change:t.getNicheng},model:{value:t.nicheng,callback:function(e){t.nicheng=e},expression:"nicheng"}})],1),n("div",[n("van-field",{attrs:{clearable:"",clickable:"",label:"签名",placeholder:"请您的个性签名"},on:{change:t.getQianmin},model:{value:t.qianming,callback:function(e){t.qianming=e},expression:"qianming"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.notlogin,expression:"notlogin"}],staticClass:"my_q",on:{click:t.login}},[n("img",{attrs:{src:i("c858"),alt:""}})])],1)},o=[],s=(i("c04d"),i("f585")),a=i("97a3"),r=(i("198f"),i("b3e2")),c=(i("ff05"),i("1dd2"),i("9956"),i("fc7d"),i("a3df"),i("5391"),i("c162"),i("58f4")),l=i("f4db"),u=i("c49f"),h=i("f46a");function f(t){return Array.isArray(t)?t:[t]}function d(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function v(t,e){return f(t).some((function(t){return t.size>e}))}var p=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function m(t){return p.test(t)}function g(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?m(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var b=i("0049"),y=i("f334"),w=i("6e6d"),C=i("5c8d"),S=i("f9e8"),x=i("915f"),O=i("c775"),k=i("b68d"),j=i("190e"),$=i("9ce9"),B=i("66a1"),T=Object(l["a"])("image-preview"),I=T[0],z=T[1];function A(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var L,M=I({mixins:[x["a"],O["a"],k["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:z("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,active:0,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(S["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},o=n.offsetX,s=void 0===o?0:o,a=n.offsetY,r=void 0===a?0:a;i<300&&s<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=e.active;e.$emit("close",{index:t,url:e.images[t]}),e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,o=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-o)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=A(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,o=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||o||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(S["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(C["a"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(C["a"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var o=A(e),s=this.startScale*o/this.startDistance;this.scale=Object(C["a"])(s,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(S["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:z("index")},[this.slots("index")||this.active+1+"/"+this.images.length])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(j["a"],{attrs:{type:"spinner"}})}};return e($["a"],{ref:"swipe",attrs:{loop:this.loop,duration:this.swipeDuration,indicatorColor:"white",initialSwipe:this.startPosition,showIndicators:this.showIndicators},on:{change:this.setActive}},[this.images.map((function(n,o){return e(B["a"],[e(y["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:z("image"),scopedSlots:i,style:o===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[z(),this.className],on:{touchstart:this.onWrapperTouchStart,touchMove:S["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.genImages(),this.genIndex()])])}}),_={images:[],loop:!0,swipeDuration:500,value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,showIndicators:!1,closeOnPopstate:!1},D=function(){L=new(w["a"].extend(M))({el:document.createElement("div")}),document.body.appendChild(L.$el),L.$on("change",(function(t){L.onChange&&L.onChange(t)}))},P=function(t,e){if(void 0===e&&(e=0),!h["d"]){L||D();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(c["a"])(L,_,i),L.$once("input",(function(t){L.value=t})),i.onClose&&L.$once("close",i.onClose),L}};P.install=function(){w["a"].use(M)};var F,N=P,E=Object(l["a"])("uploader"),R=E[0],X=E[1],Y=R({inheritAttrs:!1,model:{prop:"fileList"},props:{disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"}},computed:{previewSizeWithUnit:function(){return Object(u["a"])(this.previewSize)}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(n.then)return void n.then((function(){e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=v(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return d(t,e.resultType)}))).then((function(n){var o=t.map((function(t,e){var i={file:t};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(o,i)}))}else d(t,this.resultType).then((function(n){var o={file:t};n&&(o.content=n),e.onAfterRead(o,i)}))},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.getDetail()):(this.resetInput(),this.$emit("input",[].concat(this.fileList,f(t))),this.afterRead&&this.afterRead(t,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(n.then)return void n.then((function(){i.deleteFile(t,e)})).catch(h["e"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return g(t)})),n=i.map((function(t){return t.content||t.url}));N({images:n,closeOnPopstate:!0,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}})}},renderPreviewItem:function(t,e){var i=this,n=this.$createElement,o=n(b["a"],{attrs:{name:"clear"},class:X("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}}),s=g(t)?n(y["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,radius:4},class:X("preview-image"),on:{click:function(){i.onPreviewImage(t)}}}):n("div",{class:X("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(b["a"],{class:X("file-icon"),attrs:{name:"description"}}),n("div",{class:[X("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url])]);return n("div",{class:X("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[s,o])},renderPreviewList:function(){if(this.previewImage)return this.fileList.map(this.renderPreviewItem)},renderUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),n=t("input",{attrs:Object(c["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:X("input"),on:{change:this.onChange}});if(i)return t("div",{class:X("input-wrapper")},[i,n]);if(this.previewSize){var o=this.previewSizeWithUnit;e={width:o,height:o}}return t("div",{class:X("upload"),style:e},[t(b["a"],{attrs:{name:"plus"},class:X("upload-icon")}),this.uploadText&&t("span",{class:X("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:X()},[t("div",{class:X("wrapper")},[this.renderPreviewList(),this.renderUpload()])])}}),W=(i("e74e"),i("a1f0")),q=(i("7cfd"),i("4f0d"),i("38c6")),H=i("ed08"),U={components:(F={Layout:q["a"]},Object(a["a"])(F,b["a"].name,b["a"]),Object(a["a"])(F,W["a"].name,W["a"]),Object(a["a"])(F,Y.name,Y),Object(a["a"])(F,r["a"].Component.name,r["a"].Component),F),created:function(){var t=Object(H["a"])("token");t||(this.notlogin=!0)},data:function(){return{notlogin:!1,show:!1,fileList:[],nicheng:"我的昵称",qianming:"开启美好的饿一天..."}},methods:{clickFn:function(){this.show=!0},login:function(){this.$router.push("/login")},beforeRead:function(t){return"image/jpeg"===t.type||(Object(s["a"])("请上传 jpg 格式图片"),!1)},getNicheng:function(t){this.nicheng=t.target.value},getQianmin:function(t){this.qianming=t.target.value},orderFn:function(t){this.$router.push({path:"/list/orderType/".concat(t)})},ToCoupon:function(){this.$router.push("/coupon")},ToQualifications:function(){this.$router.push("/qualifications")},customerService:function(){this.$router.push({path:"/list/customerService"})}}},Z=U,G=(i("0260"),i("6691")),Q=Object(G["a"])(Z,n,o,!1,null,"ad9ca5bc",null);e["default"]=Q.exports},"0be8":function(t,e,i){},"0ed9":function(t,e,i){},"1262c":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},"198f":function(t,e,i){"use strict";i("ff05"),i("9956"),i("1dd2"),i("1b63")},"1b63":function(t,e,i){},"1bae":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s}));var n=i("f46a");function o(){return!n["d"]&&/android/.test(navigator.userAgent.toLowerCase())}function s(){return!n["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"23ae":function(t,e,i){"use strict";var n=i("f385"),o=i.n(n);o.a},"30c4":function(t,e,i){},"30cc":function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return u})),i.d(e,"a",(function(){return h}));var n=i("f46a"),o=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-o)),n=setTimeout(t,i);return o=e+i,n}var a=n["d"]?t:window,r=a.requestAnimationFrame||s,c=a.cancelAnimationFrame||a.clearTimeout;function l(t){return r.call(a,t)}function u(t){l((function(){l(t)}))}function h(t){c.call(a,t)}}).call(this,i("7bc3"))},"38c6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"school-conatiner"},[i("Header",{attrs:{title:t.title,isShow:t.isShow,sure:t.sure,options:t.options}}),i("div",{staticClass:"main-content"},[t._t("default")],2),i("Footer",{attrs:{showFooter:t.showFooter,shopCar:t.shopCar}})],1)},o=[],s=i("8b55"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.shopCar?i("vanGoodsAction"):t._e(),t.showFooter?i("footer",{staticClass:"footer"},[i("routerLink",{attrs:{to:"/list/home",tag:"div"}},[i("van-icon",{attrs:{name:"shop-o"}}),i("span",[t._v("首页")])],1),i("routerLink",{attrs:{to:"/list/classify",tag:"div"}},[i("van-icon",{attrs:{name:"apps-o"}}),i("span",[t._v("分类")])],1),i("routerLink",{attrs:{to:"/list/shop",tag:"div"}},[i("van-icon",{attrs:{name:"shopping-cart-o"}}),i("span",[t._v("购物车")])],1),i("routerLink",{attrs:{to:"/list/my",tag:"div"}},[i("van-icon",{attrs:{name:"user-circle-o"}}),i("span",[t._v("我的")])],1)],1):t._e()],1)},r=[],c=(i("4f0d"),i("0049")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footerShopping"},[i("van-goods-action-icon",{attrs:{icon:"wap-home-o",text:"首页"},on:{click:t.onClickIcon}}),i("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",info:"5"},on:{click:t.onClickIcon}}),i("van-button",{staticClass:"addToCat"},[t._v("\n    加入购物车\n  ")]),i("van-button",{staticClass:"purchaseButton"},[t._v("\n    立即购买\n  ")])],1)},u=[],h=(i("740b"),i("e5f0")),f=(i("ff05"),i("1dd2"),i("0be8"),i("58f4")),d=i("f4db"),v=i("e637"),p=i("cc53"),m=Object(d["a"])("goods-action-icon"),g=m[0],b=m[1],y=g({mixins:[Object(p["a"])("vanGoodsAction")],props:Object(f["a"])({},v["c"],{text:String,icon:String,info:[Number,String],iconClass:null}),methods:{onClick:function(t){this.$emit("click",t),Object(v["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"button",tabindex:"0"},class:b(),on:{click:this.onClick}},[this.slots("icon")?t("div",{class:b("icon")},[this.slots("icon")]):t(c["a"],{class:[b("icon"),this.iconClass],attrs:{tag:"div",info:this.info,name:this.icon}}),this.slots()||this.text])}}),w={name:"GoodsActionComponent",components:{vanGoodsActionIcon:y,vanButton:h["a"]},methods:{onClickIcon:function(){}}},C=w,S=(i("23ae"),i("6691")),x=Object(S["a"])(C,l,u,!1,null,"49b25d5f",null),O=x.exports,k={props:{showFooter:{type:Boolean,default:!0},shopCar:Boolean},components:{vanIcon:c["a"],vanGoodsAction:O}},j=k,$=(i("3b80"),Object(S["a"])(j,a,r,!1,null,"50207931",null)),B=$.exports,T={name:"Layout",props:{title:{type:String},isShow:{type:Boolean,default:!0},shopCar:{type:Boolean},sure:{type:Boolean},options:{type:Object},showFooter:{type:Boolean,default:!0}},components:{Header:s["a"],Footer:B}},I=T,z=Object(S["a"])(I,n,o,!1,null,null,null);e["a"]=z.exports},"3b80":function(t,e,i){"use strict";var n=i("9c1e"),o=i.n(n);o.a},"4f0d":function(t,e,i){"use strict";i("ff05"),i("1dd2")},5391:function(t,e,i){},"5c8d":function(t,e,i){"use strict";function n(t,e,i){return Math.min(Math.max(t,e),i)}i.d(e,"a",(function(){return n}))},"66a1":function(t,e,i){"use strict";var n=i("58f4"),o=i("f4db"),s=Object(o["a"])("swipe-item"),a=s[0],r=s[1];e["a"]=a({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],e=this.$parent,i=e.vertical,o=e.computedWidth,s=e.computedHeight,a={width:o+"px",height:i?s+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:r(),style:a,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},"740b":function(t,e,i){"use strict";i("ff05"),i("1dd2")},"7cfd":function(t,e,i){var n=i("d3d8").f,o=Function.prototype,s=/^\s*function ([^ (]*)/,a="name";a in o||i("f9a5")&&n(o,a,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"8b55":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.sure?t.sure?i("header",{staticClass:"el-header"},[i("span",{on:{click:t.onClickLeft}},[t._v("取消")]),i("span",[t._v(t._s(t.title))]),i("span",{on:{click:t.onClickSure}},[t._v("完成")])]):t._e():i("van-nav-bar",{staticClass:"header",attrs:{title:t.title,"left-arrow":t.isShow},on:{"click-left":t.onClickLeft}})},o=[],s=(i("df1d"),i("c5d0")),a={name:"Header",props:{title:{type:String},isShow:{type:Boolean},sure:{type:Boolean},options:{type:Object}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickSure:function(){}},components:{VanNavBar:s["a"]}},r=a,c=(i("b3a7"),i("6691")),l=Object(c["a"])(r,n,o,!1,null,"133c860c",null);e["a"]=l.exports},"95f1":function(t,e,i){},"9c1e":function(t,e,i){},"9ce9":function(t,e,i){"use strict";var n=i("f4db"),o=i("f9e8"),s=i("c775"),a=i("061d"),r=i("30cc"),c=i("5c8d"),l=Object(n["a"])("swipe"),u=l[0],h=l[1];e["a"]=u({mixins:[s["a"],Object(a["a"])((function(t,e){t(window,"resize",this.onResize,!0),e?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(o["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count;return t?this.loop?Object(c["a"])(e+t,-1,i):Object(c["a"])(e+t,0,i-1):e},getTargetOffset:function(t,e){var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=Object(c["a"])(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,o=void 0===n?0:n,s=t.emitChange,a=this.loop,r=this.count,c=this.active,l=this.swipes,u=this.trackSize,h=this.minOffset;if(!(r<=1)){var f=this.getTargetActive(i),d=this.getTargetOffset(f,o);if(a){if(l[0]){var v=d<h;l[0].offset=v?u:0}if(l[r-1]){var p=d>0;l[r-1].offset=p?-u:0}}this.active=f,this.offset=d,s&&f!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(r["b"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,i.move({pace:n-i.active,emitChange:!0}),e.immediate?Object(r["b"])((function(){i.swiping=!1})):i.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(r["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),e))},renderIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,o=this.slots("indicator");return o||(this.showIndicators&&i>1?e("div",{class:h("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,o){return e("i",{class:h("indicator",{active:o===n}),style:o===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:h()},[t("div",{ref:"track",style:this.trackStyle,class:h("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}})},a138:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("1bae"),o=i("6214"),s=Object(n["b"])();function a(){s&&Object(o["e"])(Object(o["b"])())}},a1f0:function(t,e,i){"use strict";var n=i("23c4"),o=i.n(n),s=i("58f4"),a=i("0049"),r=i("d6b6"),c=i("1262c"),l=i("f9e8"),u=i("a138"),h=i("f4db"),f=i("f46a"),d=i("c49f"),v=Object(h["a"])("field"),p=v[0],m=v[1];e["a"]=p({inheritAttrs:!1,props:Object(s["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(f["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(s["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(d["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(f["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(u["a"])()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(f["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,o=i.minHeight;n&&(e=Math.min(e,n)),o&&(e=Math.max(e,o))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:m("control",this.inputAlign)},[e]);var i={ref:"input",class:m("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",o()([{},i])):t("input",o()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:m("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:m("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(a["a"],{attrs:{name:this.rightIcon}})])},renderWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:m("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,o={icon:this.renderLeftIcon};return i("label")&&(o.title=function(){return i("label")}),e(r["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[m("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:m((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:o,on:{click:this.onClick}},[e("div",{class:m("body")},[this.renderInput(),this.showClear&&e(a["a"],{attrs:{name:"clear"},class:m("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&e("div",{class:m("button")},[i("button")])]),this.renderWordLimit(),this.errorMessage&&e("div",{class:m("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},a3df:function(t,e,i){},b3a7:function(t,e,i){"use strict";var n=i("e487"),o=i.n(n);o.a},b3e2:function(t,e,i){"use strict";var n,o=i("58f4"),s=i("6e6d"),a=i("f4db"),r=i("c49f"),c=i("a5ee"),l=i("915f"),u=i("b68d"),h=i("e5f0"),f=Object(a["a"])("dialog"),d=f[0],v=f[1],p=f[2],m=d({mixins:[l["a"],u["a"]],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(i){!1!==i&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var t,e,i=this,n=arguments[0];if(this.shouldRender){var o=this.message,s=this.messageAlign,a=this.slots(),l=this.slots("title")||this.title,u=l&&n("div",{class:v("header",{isolated:!o&&!a})},[l]),f=(a||o)&&n("div",{class:v("content")},[a||n("div",{domProps:{innerHTML:o},class:v("message",(t={"has-title":l},t[s]=s,t))})]),d=this.showCancelButton&&this.showConfirmButton,m=n("div",{class:[c["f"],v("footer",{buttons:d})]},[this.showCancelButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||p("cancel")},class:v("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){i.handleAction("cancel")}}}),this.showConfirmButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||p("confirm")},class:[v("confirm"),(e={},e[c["d"]]=d,e)],style:{color:this.confirmButtonColor},on:{click:function(){i.handleAction("confirm")}}})]);return n("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[n("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||o},class:[v(),this.className],style:{width:Object(r["a"])(this.width)}},[u,f,m])])}}}),g=i("f46a");function b(t){return document.body.contains(t)}function y(){n&&n.$destroy(),n=new(s["a"].extend(m))({el:document.createElement("div"),propsData:{lazyRender:!1}}),n.$on("input",(function(t){n.value=t}))}function w(t){return g["d"]?Promise.resolve():new Promise((function(e,i){n&&b(n.$el)||y(),Object(o["a"])(n,w.currentOptions,t,{resolve:e,reject:i})}))}w.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){n["confirm"===t?"resolve":"reject"](t)}},w.alert=w,w.confirm=function(t){return w(Object(o["a"])({showCancelButton:!0},t))},w.close=function(){n&&(n.value=!1)},w.setDefaultOptions=function(t){Object(o["a"])(w.currentOptions,t)},w.resetDefaultOptions=function(){w.currentOptions=Object(o["a"])({},w.defaultOptions)},w.resetDefaultOptions(),w.install=function(){s["a"].use(m)},w.Component=m,s["a"].prototype.$dialog=w;e["a"]=w},b68d:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("6e6d"),o=i("f9e8"),s=i("061d"),a=n["a"].extend({mixins:[Object(s["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?o["b"]:o["a"];e(window,"popstate",this.close)}}}})},c162:function(t,e,i){},c5d0:function(t,e,i){"use strict";var n=i("23c4"),o=i.n(n),s=i("f4db"),a=i("f46a"),r=i("a08f"),c=i("a5ee"),l=i("0049"),u=Object(s["a"])("nav-bar"),h=u[0],f=u[1];function d(t,e,i,n){var s;return t("div",o()([{class:[f({fixed:e.fixed}),(s={},s[c["c"]]=e.border,s)],style:{zIndex:e.zIndex}},Object(r["b"])(n)]),[t("div",{class:f("left"),on:{click:n.listeners["click-left"]||a["e"]}},[i.left?i.left():[e.leftArrow&&t(l["a"],{class:f("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:f("text")},[e.leftText])]]),t("div",{class:[f("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:f("right"),on:{click:n.listeners["click-right"]||a["e"]}},[i.right?i.right():e.rightText&&t("span",{class:f("text")},[e.rightText])])])}d.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=h(d)},c858:function(t,e,i){t.exports=i.p+"img/notlogin.a2c6980f.jpg"},cc53:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i("6e6d");function o(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.children&&i(t.children)}))}return i(t),e}function s(t,e){var i,s;void 0===e&&(e={});var a=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(s={parent:function(){return this.disableBindRelation?null:this[t]}},s[a]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},s),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=o(this.parent.slots());t.sort((function(t,i){return e.indexOf(t.$vnode)-e.indexOf(i.$vnode)})),this.parent.children=t}}}})}function a(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},d6b6:function(t,e,i){"use strict";var n=i("58f4"),o=i("23c4"),s=i.n(o),a=i("f4db"),r=i("f46a"),c=i("1262c"),l=i("a08f"),u=i("e637"),h=i("0049"),f=Object(a["a"])("cell"),d=f[0],v=f[1];function p(t,e,i,n){var o=e.icon,a=e.size,c=e.title,f=e.label,d=e.value,p=e.isLink,m=e.arrowDirection,g=i.title||Object(r["b"])(c),b=i.default||Object(r["b"])(d),y=i.label||Object(r["b"])(f),w=y&&t("div",{class:[v("label"),e.labelClass]},[i.label?i.label():f]),C=g&&t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),w]),S=b&&t("div",{class:[v("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[d])]),x=i.icon?i.icon():o&&t(h["a"],{class:v("left-icon"),attrs:{name:o}}),O=i["right-icon"],k=O?O():p&&t(h["a"],{class:v("right-icon"),attrs:{name:m?"arrow-"+m:"arrow"}});function j(t){Object(l["a"])(n,"click",t),Object(u["a"])(n)}var $=p||e.clickable,B={clickable:$,center:e.center,required:e.required,borderless:!e.border};return a&&(B[a]=a),t("div",s()([{class:v(B),attrs:{role:$?"button":null,tabindex:$?0:null},on:{click:j}},Object(l["b"])(n)]),[x,C,S,k,i.extra&&i.extra()])}p.props=Object(n["a"])({},c["a"],{},u["c"]),e["a"]=d(p)},df1d:function(t,e,i){"use strict";i("ff05"),i("1dd2"),i("30c4")},e487:function(t,e,i){},e5f0:function(t,e,i){"use strict";var n=i("58f4"),o=i("23c4"),s=i.n(o),a=i("f4db"),r=i("a08f"),c=i("a5ee"),l=i("e637"),u=i("0049"),h=i("190e"),f=Object(a["a"])("button"),d=f[0],v=f[1];function p(t,e,i,n){var o,a=e.tag,f=e.icon,d=e.type,p=e.color,m=e.plain,g=e.disabled,b=e.loading,y=e.hairline,w=e.loadingText,C={};function S(t){b||g||(Object(r["a"])(n,"click",t),Object(l["a"])(n))}function x(t){Object(r["a"])(n,"touchstart",t)}p&&(C.color=m?p:c["m"],m||(C.background=p),-1!==p.indexOf("gradient")?C.border=0:C.borderColor=p);var O=[v([d,e.size,{plain:m,disabled:g,hairline:y,block:e.block,round:e.round,square:e.square}]),(o={},o[c["e"]]=y,o)];function k(){var n,o=[];return b?o.push(t(h["a"],{class:v("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===d?void 0:""}})):f&&o.push(t(u["a"],{attrs:{name:f},class:v("icon")})),n=b?w:i.default?i.default():e.text,n&&o.push(t("span",{class:v("text")},[n])),o}return t(a,s()([{style:C,class:O,attrs:{type:e.nativeType,disabled:g},on:{click:S,touchstart:x}},Object(r["b"])(n)]),[k()])}p.props=Object(n["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(p)},e637:function(t,e,i){"use strict";function n(t,e){var i=e.to,n=e.url,o=e.replace;if(i&&t){var s=t[o?"replace":"push"](i);s&&s.catch&&s.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else n&&(o?location.replace(n):location.href=n)}function o(t){n(t.parent&&t.parent.$router,t.props)}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return s}));var s={url:String,replace:Boolean,to:[String,Object]}},e74e:function(t,e,i){"use strict";i("ff05"),i("1dd2"),i("0ed9")},f385:function(t,e,i){},fc7d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-49625ea2.7c7ed2af.js.map