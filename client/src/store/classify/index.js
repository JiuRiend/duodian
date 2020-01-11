import Vue from 'vue';
import Vuex from 'vuex';
import { getShopTypeList } from 'api/cart'

Vue.use(Vuex);

export default ({
    namespaced: true,
    state: {
        activeIndex: 0,
        getShopTypeList: [],
        innerTypeList: []
    },
    mutations: {
        getShopType(state, payload) {
            state.getShopTypeList = payload
        },
        filetrTitle(state, payload = 0) {
            let { getShopTypeList } = state
            let list = getShopTypeList.filter(item => item.activeIndex === Number(payload))
            state.innerTypeList = list
        }
    },
    actions: {
        async _getShopTypeList({ commit }) {
            const result = await getShopTypeList();
            commit('getShopType', result.result)
        }
    },
});