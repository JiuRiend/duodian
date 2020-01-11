import Vue from 'vue';
import App from './App.vue';
import router from 'router';
import store from 'store';
import VueLazyload from 'vue-lazyload';
import VueTouch from 'vue-touch';
import BaiduMap from 'vue-baidu-map';
import 'nprogress/nprogress.css'

Vue.use(BaiduMap, {
	// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
	ak: 'KMILwfDbW8dmCdLFzD9ExaaPOV3hGE8W'
});

Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading:
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571201945367&di=546681822d0656a896b1f49749217055&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F006nugVygw1f1oicd2z4tg30e40aldfn.gif'
});

Vue.use(VueTouch, {
	name: 'v-touch'
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
