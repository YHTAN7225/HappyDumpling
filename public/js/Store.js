import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const test = {
    state: {
        test:  "test",
    }, 
    mutations: {
        setTest(state, data){
            state.test = data;
        },
    },
    actions: {
        setTest({commit}, data) {
            commit("setTest", data);
        },
    }
};

const user = {
    state: {
        userToken: "",
    }, 
    mutations: {
        setTest(state, data){
            state.userToken = data;
        },
    },
    actions: {
        setUserToken({commit}, data) {
            commit("setUserToken", data);
        },
    }
};
const path = {
    state: {
        imagesPath : "src/assets/images/",
        iconsPath : "@/assets/icons/",
        cssPath : "@/assets/css/",
    }
}

const global = new Vuex.Store({
    modules: {
        test: test,
        user: user, 
        path: path
    },
    plugins: [createPersistedState()],
});

export default global