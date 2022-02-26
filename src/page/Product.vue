<template>
    <div>
        <VueperSlides>
            <VueperSlide class="banner-image" v-for="(slide, index) in slideArray" :key="index" :image="slide.image" />
        </VueperSlides>

        <!-- Category Bar -->
        <div class="productCategoryBar" v-if="!$global.state.setting.isMobileView">
            <div :class="'productCategoryBarItem ' + (selectedCategory.name == category.name ? 'active fontSizeLarger shadowOrange' : '')"
            v-for="(category, index) in productCategoryTitle" :key="index"
            @click="selectCategory(category)"
            @mouseenter="addClass"
            @mouseleave="removeClass">
                {{ category.displayName }}
            </div>
        </div>

        <div class="productCategoryBarMobile" v-else>

            <div class="fontSizeLarger showCategoryMobile" @click="showMobileCategoryBar = !showMobileCategoryBar">Category</div>
            <div v-if="showMobileCategoryBar">
                <div :class="'productCategoryBarItemMobile ' + (selectedCategory.name == category.name ? 'active fontSizeLarger shadowOrange' : '')"
                v-for="(category, index) in productCategoryTitle" :key="index"
                @click="selectCategory(category); showMobileCategoryBar = !showMobileCategoryBar;"
                @mouseenter="addClass"
                @mouseleave="removeClass">
                    {{ category.displayName }}
                </div>
            </div>

        </div>

        <!-- Title -->
        <div class="fontSizeXXL productTitle">{{ selectedCategory.displayName }}</div>

        <!-- Product catalogue -->
        <div class="allProductsContainer">
            <div>
                <img src="" alt="">
                <div class="fontSizeXL">title</div>
                <div class="fontSizeLarge">price</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name : "Product",
        data(){
            return{
                selectedCategory: "",
                showMobileCategoryBar: false,
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
                        displayName: "All Porducts",
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
                    {
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
                        displayName: "Herbal Drinks Series",
                        name: "herbalDrinksSeries",
                    },
                    {
                        displayName: "Quick-Meal Series",
                        name: "quickMealsSeries",
                    },{
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

        },
        methods : {
            selectCategory : function(category){
                this.selectedCategory = category
                console.log(category.displayName);
            },
            addClass: function (e) {
                e.target.classList.add("hovered");
            },
            removeClass: function (e) {
                e.target.classList.remove("hovered");
            },
        },
        mounted(){
            window.scrollTo(0, 0);
            this.selectedCategory = this.productCategoryTitle[0];
            console.log("here", this.$global.state.setting.isMobileView);
        }
    }
    
</script>