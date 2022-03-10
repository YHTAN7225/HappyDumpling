<template>
    <div :class="!$global.state.setting.isMobileView ? 'footer' : 'footerMobile'">
        <!-- pc view -->
        <div v-if="!$global.state.setting.isMobileView">
            <b-row>
                <b-col class="footerContainer">
                    <div class="fontSizeXL footerTitle"> Quick Link </div>
                    <div class="footerQuickLinkContainer">
                        <div 
                            v-for="(item, index) in FooterContent" :key="index"
                            @click="$router.push({name: item.routerName})"
                            @mouseenter="hoverEnter($event, 'link')"
                            @mouseleave="hoverExit($event, 'link')"
                        >
                            {{item.lable}}
                        </div>
                    </div>
                </b-col>
                <b-col class="footerContainer">
                    <div class="fontSizeXL footerTitle"> Follow Us </div>
                    <div class="footerIconContainer">
                        <b-icon class="icon" icon="facebook" @click="goToLink('https://www.facebook.com/')"></b-icon>
                        <b-icon class="icon" icon="instagram" @click="goToLink('https://www.facebook.com/')"></b-icon>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- mobile view -->
        <div v-else>
            <b-col>
                <b-row class="footerContainerMobile">
                    <div class="fontSizeXL footerTitle"> Quick Link </div>
                    <div class="footerQuickLinkContainer">
                        <div 
                            v-for="(item, index) in FooterContent" :key="index"
                            @click="$router.push({name: item.routerName})"                        
                        >
                            {{item.lable}}
                        </div>
                    </div>
                </b-row>
                <b-row class="footerContainerMobile">
                    <div class="fontSizeXL footerTitle"> Follow Us </div>
                    <div class="footerIconContainer">
                        <b-icon class="icon" icon="facebook" @click="goToLink('https://www.facebook.com/')"></b-icon>
                        <b-icon class="icon" icon="instagram" @click="goToLink('https://www.facebook.com/')"></b-icon>
                    </div>
                </b-row>
            </b-col>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                FooterContent : [
                    {
                        lable : "Contact Us",
                        routerName : "contact-us",
                    },
                    {
                        lable : "Delivery Info",
                        routerName : "delivery-info",
                    },
                    {
                        lable : "Our Story",
                        routerName : "our-story",
                    },
                    {
                        lable : "Terms & Conditions",
                        routerName : "terms-and-conditions",
                    },
                ],
            }
        },
        methods : {
            testMethod : function(){
                // console.log(this.$global);
                console.log(this.$enums);
            },
        },
    }
</script>