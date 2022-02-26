<template>
  <div id="app" class="app bg-image">
    <Loading></Loading>
    <Header :NavBarComponent="NavBarComponent" :NavBarTitle="NavBarTitle"></Header>
    <transition name="fade" mode="out-in">
      <router-view class="routerView"/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";

export default {
  name : "App",
  data() {
    return {
      NavBarComponent : [
        {
          name : "Home",
          routerName : "home"
        },
        {
          name : "Product",
          routerName : "product"
        },
        {
          name : "Login",
          routerName : "login"
        },
      ],
      NavBarTitle : "Happy Dumpling",
      isMobileView: false,
    };
  },
  components : {
    Header,
    Footer, 
    Loading
  },
  method:{
  },
  mounted(){
    var self = this;
    window.addEventListener("resize", function(){
      if(window.innerWidth < 800){
        if(!self.$global.state.setting.isMobileView){
          self.$global.commit("setIsMobileView", true);
        }
      }else{
        if(self.$global.state.setting.isMobileView){
          self.$global.commit("setIsMobileView", false);
        }
      }
    }, true);
  }
};
</script>
