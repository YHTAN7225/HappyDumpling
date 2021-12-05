import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//VUE CONFIGS
//Suppress all Vue logs and warnings.
// Vue.config.silent = true 

// Assign a handler for uncaught errors during component render function and watchers. The handler gets called with the error and the Vue instance.
// Vue.config.errorHandler = function (err, vm, info) {
//   // handle error
//   // `info` is a Vue-specific error info, e.g. which lifecycle hook
//   // the error was found in. Only available in 2.2.0+
// }

// Vue.config.productionTip = false

//importing local library
//firebase
import {firebase} from "../public/js/Firebase.js";
import {shared} from "../public/js/shared.js";
Vue.mixin(firebase);
Vue.mixin(shared);

//Vuex global variable
import global from "../public/js/Store"
Vue.prototype.$global = global;

//VueI18n for multi-language
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale : global.state.setting.language ? global.state.setting.language : "eng",
  messages : {
    "eng" : require("@/assets/jsons/eng.json"),
    "chs" : require("@/assets/jsons/chs.json"),
  }
});
Vue.prototype.$translate =  function(...args){
  var result = "";
  if(this.$i18n.te(args[0])){
    result = this.$i18n.t.apply(this.$i18n, args);
    if(args[1] !== undefined){
      var param = args[1];
      for(var key in param){
        if(param.hasOwnProperty(key)){
          result = result.replaceAll("{" + key + "}", param[key]);
        }
      }
    }
  }else{
    return args[0];
  }
  return result;
};

//CSS 
// const Bootstrap = () => import(/* webpackChunkName : "Bootstrap" */ "bootstrap");
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/assets/css/transition.css";
import "../src/assets/css/general.css";
import "../src/assets/css/test.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
// const BootstrapVue  = () => import(/* webpackChunkName : "BootstrapVue" */ "bootstrap-vue");
// const IconsPlugin  = () => import(/* webpackChunkName : "IconsPlugin" */ "bootstrap-vue");
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//components
//flipping flash card, flip on click
const vueFlashcard  = () => import(/* webpackChunkName : "vueFlashcard" */ "vue-flashcard");
Vue.component("VueFlashcard", vueFlashcard);

//slide show, for banner
import { VueperSlides, VueperSlide } from 'vueperslides';
import "vueperslides/dist/vueperslides.css";
Vue.component("VueperSlides", VueperSlides);
Vue.component("VueperSlide", VueperSlide);


new Vue({
  router,
  i18n,
  render : h => h(App),
}).$mount("#app")
