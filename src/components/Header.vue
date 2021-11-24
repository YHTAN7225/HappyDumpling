<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">{{ NavBarTitle }}</a>
        <button class="navbar-toggler" type="button" @click="toggleNavBar=!toggleNavBar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="toggleNavBar ? 'collapse navbar-collapse' : 'navbar-collapse'" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item" v-for="item in NavBarComponent" :key="item.name">
                <a class="nav-link" href="#" @click="redirect(item.routerName)">{{ item.name }}</a>
            </li>
        
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data(){
            return {
                toggleNavBar : true,
            }
        },
        props: {
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
                    {
                        name : "Login",
                        routerName : "login"
                    },
                ]
            },
            NavBarTitle : {
                type : String,
                require : false,
                default : "Navbar"
            }
        },
        methods: {
            redirect : function(routerName){
                this.$router.push({name: routerName});
            }
        }
    }
</script>