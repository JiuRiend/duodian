import Vue from 'vue';
import Vuex from 'vuex';
import { addNum, isCheck } from '@/api/cart';
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        addNumAsync(state, { str, id }) {
            const ind = state.list.findIndex(item => item.id == id);
            if (str == '+') {
                state.list[ind].num++;
                addNum(state.list[ind].num, state.list[ind].id);
            } else {
                if (state.list[ind].num > 1) {
                    state.list[ind].num--;
                    addNum(state.list[ind].num, state.list[ind].id);
                }
            }
        },
        isCheck(state, str) {
            state.list.forEach(item => (item.check = str));
        },
        edit(state, id) {
            const ind = state.list.findIndex(item => item.id === id);
            state.list[ind].check = !state.list[ind].check;
            // console.log(id,state.list[ind].check)
            isCheck(id, !state.list[ind].check);
        },
        cartList(state, arr) {
            state.list = arr;
        }
    },
    actions: {}
};