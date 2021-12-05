<template>
  <div id="app">
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
    
  }
};
</script>
