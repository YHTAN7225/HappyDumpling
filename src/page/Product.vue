<template>
    <div>
        <VueperSlides>
            <VueperSlide class="banner-image" v-for="(slide, index) in slideArray" :key="index" :image="slide.image" />
        </VueperSlides>

        <!-- Category Bar -->
        <div class="productCategoryBar">
            <div v-if="!$global.state.setting.isMobileView">
                <!-- <b-container>
                    <b-row>
                        <b-col 
                            :class="'productCategoryBarItem ' + (selectedCategory.name == category.name ? 'active fontSizeLarger shadowOrange' : '')" 
                            v-for="(category, index) in productCategoryTitle" :key="index"
                            @click="selectCategory(category)"
                            @mouseenter="addClass"
                            @mouseleave="removeClass"
                        >
                            {{ category.displayName }}
                        </b-col>
                    </b-row>
                </b-container>
                <div class="fontSizeXXL productTitle">
                    {{ selectedCategory.displayName }}
                </div> -->
                <div>
                    <b-nav  tabs align="center">
                        <b-nav-item 
                            :class="'productCategoryBarItem ' + (selectedCategory.name == category.name ? 'active fontSizeLarger shadowOrange' : '')" 
                            v-for="(category, index) in productCategoryTitle" :key="index"
                            @click="selectCategory(category)"
                            @mouseenter="addClass"
                            @mouseleave="removeClass"
                        >
                            <div style="color: black !important;">{{ category.displayName }}</div>
                        </b-nav-item>

                    </b-nav>
                </div>
            </div>
            <div v-else>
                <div 
                    class="fontSizeXXL productTitle" 
                    @click="showMobileCategoryBar = !showMobileCategoryBar"
                >
                    {{ selectedCategory.displayName }}
                    <b-icon icon="chevron-down" :rotate="showMobileCategoryBar ? 180 : 0"></b-icon>
                </div>
                <b-container v-if="showMobileCategoryBar">
                    <b-col>
                        <b-row 
                            :class="'productCategoryBarItemMobile ' + (selectedCategory.name == category.name ? 'active fontSizeLarger shadowOrange' : '')" 
                            v-for="(category, index) in productCategoryTitle" :key="index"
                            @click="selectCategory(category)"
                            @mouseenter="addClass"
                            @mouseleave="removeClass"
                        >
                            {{ category.displayName }}
                        </b-row>
                    </b-col>
                </b-container>
            </div>
        </div>

        <!-- Product catalogue -->
        <div >
            <div 
                class="allProductsContainer"
                v-if="!$global.state.setting.isMobileView"
            >
                <b-card
                    v-for="(product, index) in productList" :key="index"
                    :title="'[Special Combo] Chili Oil & Premium Mala Sauce'"
                    :img-src="product.data.imageUrl"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="productCard shadow-lg"
                    body-class="productTextBox"
                >
                    <b-card-text class="productTextBox">
                    {{ "jasdfasdfas dfasdfasdfasdf asdfasdfa sdfasdfa sd fasdfasdfasdfasd fasd fasdf asdfasdfas dfasdf asdfa sdfasdfasdf asdfasdf asdfasdf asdf" }}
                    </b-card-text>

                    <b-button variant="primary" class="productViewButton" @click="viewProduct(product.productId)">View</b-button>
                </b-card>
            </div>
            <div 
                class="allProductsContainerMobile"
                v-else
            >
                <!-- <b-card
                    v-for="(product, index) in productList" :key="index"
                    :title="product.data.productName"
                    :img-src="product.data.imageUrl"
                    img-alt="Image"
                    img-left
                    tag="article"
                    class="productCardMobile shadow-lg "
                >
                    <b-card-text>
                        {{ product.data.description }}
                    </b-card-text>

                    <b-button variant="primary" @click="viewProduct(product.productId)">Go somewhere</b-button>
                </b-card> -->
                <b-card
                    v-for="(product, index) in productList" :key="index"
                    :title="'[Special Combo] Chili Oil & Premium Mala Sauce'"
                    :img-src="product.data.imageUrl"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="productCardMobile shadow-lg"
                    body-class="productTextBoxMobile"
                    title-tag= "h6"
                >
                    <!-- <b-card-text class="productTextBox">
                    {{ "jasdfasdfas dfasdfasdfasdf asdfasdfa sdfasdfa sd fasdfasdfasdfasd fasd fasdf asdfasdfas dfasdf asdfa sdfasdfasdf asdfasdf asdfasdf asdf" }}
                    </b-card-text> -->
                    <div class="productInfoIcon"> Sales </div>
                    <b-button variant="primary" class="productViewButtonMobile" @click="viewProduct(product.productId)">View</b-button>
                </b-card>


            </div>
        </div>

    </div>
</template>

<script>
import { SfComponentSelect } from "@storefront-ui/vue";
    export default {
        name : "Product",
        data(){
            return{
                selectedCategory: "",
                showMobileCategoryBar: false,
                productList: [],
                slideArray : [
                    {
                        title : "Slide 1",
                        content : "Content 1",
                        image : require('@/assets/images/HappyDumplingLogoShort.png')
                    },
                    {
                        title : "Slide 2",
                        content : "Content 2",
                        image : require('@/assets/images/HappyDumplingLogoLong.png')
                    },
                    {
                        title : "Slide 3",
                        content : "Content 3",
                        image : require('@/assets/images/HappyDumplingLogoLong.png')
                    },
                    {
                        title : "Slide 4",
                        content : "Content 4",
                        image : require('@/assets/images/HappyDumplingLogoLong.png')
                    },
                    {
                        title : "Slide 5",
                        content : "Content 5",
                        image : require('@/assets/images/HappyDumplingLogoLong.png')
                    }
                ],
                productCategoryTitle: [
                    {
                        displayName: "All Products",
                        name: "allProduct",
                    },
                    {
                        displayName: "Dumplings",
                        name: "dumplings",
                    },
                    {
                        displayName: "Holiday Special",
                        name: "holidaySpecial",
                    },
                    {
                        displayName: "Condiments",
                        name: "condiments",
                    },
                    {
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },
                ]
            };
        },
        component:{
            SfComponentSelect
        },
        methods : {
            selectCategory : function(category){
                this.selectedCategory = category;
                this.showMobileCategoryBar = false;
                console.log(category.displayName);
            },
            addClass: function (e) {
                e.target.classList.add("hovered");
            },
            removeClass: function (e) {
                e.target.classList.remove("hovered");
            },
            viewProduct: function(){
                console.log("viewProduct");
            },
        },
        mounted(){
            window.scrollTo(0, 0);
            this.selectedCategory = this.productCategoryTitle[0];
            this.getDocument("products").then(res =>{
                this.productList = res;
                var asd = this.productList[0];
                this.productList.push(asd);
                this.productList.push(asd);
                this.productList.push(asd);
                this.productList.push(asd);
                this.productList.push(asd);
            });
        }
    }
    
</script>