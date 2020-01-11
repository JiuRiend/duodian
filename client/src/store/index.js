import Vue from 'vue';
import Vuex from 'vuex';

import home from 'store/home';
import login from './module/login';
import address from 'store/home/address';
import product from './module/product';
import classify from './classify'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        login,
        address,
        product,
        classify
    }
});