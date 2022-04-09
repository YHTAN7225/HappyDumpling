import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const test = {
    state : {
        test :  "test",
    }, 
    mutations : {
        setTest(state, data){
            state.test = data;
        },
    },
    actions : {
        setTest({commit}, data) {
            commit("setTest", data);
        },
    }
};

const user = {
    state : {
        userToken: "",
        userEmail: ""
    }, 
    mutations : {
        setUserToken(state, data){
            state.userToken = data;
        },
        setUserEmail(state, data){
            state.userEmail = data;
        },
    },
    actions : {
        setUserToken({commit}, data) {
            commit("setUserToken", data);
        },
        setUserEmail({commit}, data) {
            commit("setUserEmail", data);
        },
    }
};

const setting = {
    state : {
        showLoading : false,
        language : "eng",
        isMobileView : false,
    }, 
    mutations : {
        setShowLoading(state, data){
            state.showLoading = data;
        },
        setLanguage(state, data){
            state.language = data;
        },
        setIsMobileView(state, data){
            state.isMobileView = data;
        },
    },
    actions : {
        setShowLoading({commit}, data) {
            commit("setShowLoading", data);
        },
        setLanguage({commit}, data) {
            commit("setLanguage", data);
        },
        setIsMobileView({commit}, data) {
            commit("setIsMobileView", data);
        },
    }
};

const global = new Vuex.Store({
    modules : {
        test : test,
        user : user, 
        setting: setting,
    },
    plugins : [createPersistedState()],
});

export default global