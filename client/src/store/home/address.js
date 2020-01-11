import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        showMark: true,
        ads: ''
    },
    mutations: {
        changeAddress(state, payload) {
            state.showMark = payload;
        },
        changeads(state, payload) {
            state.ads = payload;
        }
    },
    actions: {}
};