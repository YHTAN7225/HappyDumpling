<template>
    <div>
        <SfHeader
            :logo="require('@/assets/images/HappyDumplingLogoLong.png')"
            :logoHeight="50"
            :logoWidth="150"
            title="Storefront UI"
            cartIcon="empty_cart"
            accountIcon="profile"
            searchPlaceholder="Search for items"
            @enter:search="search"
            @change:search="changeSearch"
            @click:cart="redirect('cart')"
            @click:account="redirect('account')"
        >
            <template v-slot:aside>
                <div v-if="showAside" @click="showHeaderMenu = !showHeaderMenu">
                    <SfIcon
                        icon="tiles"
                        size="lg"
                        color="black"
                        viewBox="0 0 24 24"
                        :coverage="1"
                    />
                </div>
            </template>
            <template v-slot:navigation>
                <div>
                    <nav class="sf-breadcrumbs" aria-label="breadcrumb">
                        <ol class="sf-breadcrumbs__list">
                            <li :class="'sf-breadcrumbs__list-item' + (selectedNav == item.routerName ? ' text-selected :' : '')" 
                            aria-current="page" 
                            v-for="item in NavBarComponent" 
                            :key="item.name" 
                            @click="selectedNav = item.routerName; redirect(item.routerName)">
                                {{item.name}}
                            </li>
                        </ol>
                    </nav>
                </div>
            </template>
        </SfHeader>
        <SfAccordion open="" :multiple="false" transition="" v-if="showHeaderMenu">
            <SfList>
                <SfListItem 
                :class="(selectedNav == item.routerName) ? 'mobile_header_list_selected' : 'mobile_header_list'"
                v-for="item in NavBarComponent" 
                :key="item.name">
                    <SfMenuItem :label="item.name" @click="selectedNav = item.routerName; redirect(item.routerName); showHeaderMenu=false"/>
                </SfListItem>
            </SfList>
        </SfAccordion>
    </div>
    
    

</template>

<script>
import {SfHeader} from "@storefront-ui/vue";
import {SfAccordion} from "@storefront-ui/vue";
import {SfIcon} from "@storefront-ui/vue";
import {SfList} from "@storefront-ui/vue";
import {SfMenuItem} from "@storefront-ui/vue";

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
            },
        },
        components : {
            SfHeader,
            SfAccordion,
            SfIcon,
            SfList,
            SfMenuItem
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
            this.selectedNav = this.NavBarComponent[0].routerName;
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
    }
</script>