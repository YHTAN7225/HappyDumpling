<template>
  <div id="app">
    <Header :NavBarComponent="NavBarComponent" :NavBarTitle="NavBarTitle"></Header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
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
  components: {
    HelloWorld,
    Header,
    Footer
  },
};
</script>
