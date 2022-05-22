<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand  @click="$router.push({name:'home'})">
                    <img :class="'headerBrandIcon ' + ($global.state.setting.isMobileView ? 'headerBrandIconMobile' : '') " :src="require('@/assets/images/HappyDumplingLogoLong.png')" alt="Happy Dumpling">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse">
                    <template #default="{ expanded }">
                        <b-icon v-if="expanded" icon="chevron-double-up"></b-icon>
                        <b-icon v-else icon="chevron-double-down"></b-icon>
                    </template>
                </b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item 
                            v-for="(nav, index) in NavBarComponent" :key="index"
                            @click="redirect(nav.routerName)"
                        >
                            <div :class="'fontSizeLarger navItem ' + ($route.name == nav.routerName ? 'activeNavItem' : '')">{{nav.name}}</div>
                        </b-nav-item>
                        <b-nav-item 
                            v-if="$global.state.user.userToken == ''"
                            @click="redirect('login')"
                        >
                            <div :class="'fontSizeLarger navItem ' + ($route.name == 'login' ? 'activeNavItem' : '')">{{"Login"}}</div>
                        </b-nav-item>
                        <b-nav-item 
                            v-else
                            @click="redirect('profile')"
                        >
                            <div :class="'fontSizeLarger navItem ' + ($route.name == 'profile' ? 'activeNavItem' : '')">{{"Profile"}}</div>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>   
        </div>
    </div>
    
    

</template>

<script>
    export default {
        name : 'Header',
        data(){
            return {
                toggleNavBar : true,
                searchValue : "default",
                selectedNav : "",
                windowWidth : 0,
                showAside : false,
                showHeaderMenu : false,
            }
        },
        props : {
            NavBarComponent : {
                type : Array,
                require : false,
                default : [
                    {
                        name : "Home",
                        routerName : "home"
                    },
                    {
                        name : "Product",
                        routerName : "product"
                    },
                ]
            },
            NavBarTitle : {
                type : String,
                require : false,
                default : "Navbar"
            },
        },
        components : {

        },
        watch : {
            windowWidth : function(oldVal){            
                this.showAside = (oldVal < 1024) ? true : false;
            },
        },
        methods : {
            test : function(){
                console.log("asdasd");
            },
            redirect : function(routerName){
                this.$router.push({name : routerName});
            },
            changeSearch : function(searchResult){
                this.searchValue = searchResult;
            },
            search : function(){
                //search
            },
            goToCart : function(input){
                //go to cart page
            },
            handleResize() {
                // console.log("window.innerWidth", window.innerWidth)
                this.windowWidth = window.innerWidth;
            }
        },
        created(){
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        mounted(){
            var self = this;
            this.selectedNav = this.NavBarComponent[0].routerName;
            var NavBarSelect = setInterval(function(){
                if(self.$router.currentRoute.name != null){
                    self.selectedNav = self.$router.currentRoute.name;  
                    clearInterval(NavBarSelect);
                }
            }, 100);
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
    }
</script>