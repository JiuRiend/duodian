(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a14832c"],{"36c3":function(t,e,n){},4608:function(t,e,n){},"5a12":function(t,e,n){"use strict";var o=n("58f4"),a=n("6e6d"),i=n("23c4"),s=n.n(i),r=n("f4db"),c=n("a5ee"),u=n("a08f"),l=n("915f"),p=n("6f24"),d=Object(r["a"])("notify"),f=d[0],h=d[1];function v(t,e,n,o){var a={color:e.color,background:e.background};return t(p["a"],s()([{attrs:{value:e.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:a,class:[h([e.type]),e.className]},Object(u["b"])(o,!0)]),[e.message])}v.props=Object(o["a"])({},l["a"].props,{background:String,className:null,message:[Number,String],getContainer:[String,Function],type:{type:String,default:"danger"},color:{type:String,default:c["m"]},duration:{type:Number,default:3e3}});var b,g,m=f(v),O=n("f46a");function y(t){return Object(O["c"])(t)?t:{message:t}}function w(t){if(!O["d"])return g||(g=Object(u["c"])(m,{on:{click:function(t){g.onClick&&g.onClick(t)},close:function(){g.onClose&&g.onClose()},opened:function(){g.onOpened&&g.onOpened()}}})),t=Object(o["a"])({},w.currentOptions,{},y(t)),Object(o["a"])(g,t),clearTimeout(b),t.duration&&t.duration>0&&(b=setTimeout(w.clear,t.duration)),g}function k(){return{type:"danger",value:!0,message:"",color:c["m"],background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}w.clear=function(){g&&(g.value=!1)},w.currentOptions=k(),w.setDefaultOptions=function(t){Object(o["a"])(w.currentOptions,t)},w.resetDefaultOptions=function(){w.currentOptions=k()},w.install=function(){a["a"].use(m)},a["a"].prototype.$notify=w;e["a"]=w},"8be5":function(t,e,n){"use strict";n("ff05"),n("9956"),n("1dd2"),n("4608")},"9ed6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"校园超市",showFooter:!1}},[n("div",{staticClass:"login-page"},[n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-title"},[n("h1",[t._v("QQ登录")])]),n("div",{staticClass:"login-main"},[n("div",{staticClass:"login-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入qq账号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),n("div",{staticClass:"login-input"},[n("button",{on:{click:t.handSubmit}},[t._v("获取验证码")])])])])]),n("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"diolong-main"},[n("h2",[t._v("请输入验证码")]),n("div",{attrs:{calss:"uhbne"}},[t._v("6位验证码已发送至 "+t._s(t.phone))]),n("van-password-input",{attrs:{value:t.value,mask:!1,focused:!0,gutter:"2px"},on:{focus:function(e){t.showKeyboard=!0}}}),0!==t.timer?n("div",{staticClass:"cxfs"},[n("van-count-down",{ref:"countDown",attrs:{time:1e3*t.timer,"auto-start":!0,format:"ss"},on:{finish:t.finished}}),t._v("秒后可重新发送\n      ")],1):t._e(),0===t.timer?n("div",{staticClass:"cxfs"},[t._v("重新发送")]):t._e(),n("div",{staticClass:"foot_btn"},[n("button",{staticClass:"btn",on:{click:t.onOklogin}},[t._v("登录")])])],1)]),n("van-number-keyboard",{attrs:{show:t.showKeyboard,"z-index":4e3},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)},a=[],i=(n("efce"),n("4634"),n("ed8b"),n("c04d"),n("f585")),s=(n("8be5"),n("5a12")),r=n("97a3"),c=(n("e10e"),n("6f24")),u=(n("dc82"),n("deab")),l=(n("489e"),n("2fbd")),p=(n("a79e"),n("4c8d")),d=n("b775");function f(t){var e=t.phone;return d["a"].post("/getAuthCode",{phone:e})}function h(t){var e=t.phone,n=t.authCode;return d["a"].post("/login",{phone:e,authCode:n})}var v=n("38c6"),b=n("ed08"),g=n("591a");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={data:function(){return{showKeyboard:!1,phone:"2384507519",show:!1,value:"",timer:0}},components:{Layout:v["a"],"van-password-input":p["a"],"van-number-keyboard":l["a"],"van-count-down":u["a"],"van-popup":c["a"]},methods:O({},Object(g["c"])({setToken:"login/setToken"}),{onOklogin:function(){var t=this;h({phone:this.phone,authCode:this.value}).then((function(e){1===e.code&&(Object(b["b"])("token",e.token),t.setToken(e.token),t.$router.go(-1))}))},onInput:function(t){this.value=(this.value+t).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},handSubmit:function(){var t=this;if(/^[1-9][0-9]{5,10}$/.test(1*this.phone)&&""!==this.phone){if(0!==this.timer)return void(this.show=!0);this.timer=30,f({phone:this.phone}).then((function(e){1===e.code&&(t.show=!0,Object(s["a"])({type:"success",message:"邮箱已发送"}))}))}else i["a"].fail("请输入正确的qq")},finished:function(){this.timer=0}})},w=y,k=(n("baea"),n("6691")),j=Object(k["a"])(w,o,a,!1,null,"4c13b75c",null);e["default"]=j.exports},baea:function(t,e,n){"use strict";var o=n("36c3"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-1a14832c.956d9e6d.js.map