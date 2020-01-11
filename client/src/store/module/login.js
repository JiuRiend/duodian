const state = {
    token: ''
};

const mutations = {
    setToken(state, payload) {
        this.token = payload;
    }
};

module.exports = {
    namespaced: true,
    state,
    mutations
};