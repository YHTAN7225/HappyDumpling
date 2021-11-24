import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//VUE CONFIGS
//Suppress all Vue logs and warnings.
Vue.config.silent = true 

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
Vue.mixin(firebase);

//CSS 
// const Bootstrap = () => import(/* webpackChunkName: "Bootstrap" */ "bootstrap");
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/assets/css/transition.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
// const BootstrapVue  = () => import(/* webpackChunkName: "BootstrapVue" */ "bootstrap-vue");
// const IconsPlugin  = () => import(/* webpackChunkName: "IconsPlugin" */ "bootstrap-vue");
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//components
//flipping flash card, flip on click
const vueFlashcard  = () => import(/* webpackChunkName: "vueFlashcard" */ "vue-flashcard");
Vue.component("VueFlashcard", vueFlashcard);

//slide show, for banner
import { VueperSlides, VueperSlide } from 'vueperslides';
import "vueperslides/dist/vueperslides.css";
Vue.component("VueperSlides", VueperSlides);
Vue.component("VueperSlide", VueperSlide);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
