import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = {
    state: {
        test:  "test",
    }, 
    mutations: {
        setTest(state, data){
            state.test = data
        }
    },
    actions: {
        setTest({commit}, data) {
            commit("setTest", data)
        }
    }
}

const global = new Vuex.Store({
    modules: {
        store: store,
    },
    plugins: [createPersistedState()],
});

export default global