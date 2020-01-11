const state = {
    product:[],
    sum:0
};

const mutations = {
    setProduct(state, payload) {
        state.product = payload.list;
        state.sum = payload.sum;
    }
};

module.exports = {
    namespaced: true,
    state,
    mutations
};