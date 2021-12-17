<template>
<SfFooter
    :column="showLogo ? (FooterContent.length+1) : FooterContent.length"
    :multiple="false"
  >
    <SfFooterColumn v-if="showLogo">
        <SfImage
            :src="require('@/assets/images/HappyDumplingLogoShort.png')"
            :srcsets="[]"
            alt="Happy_Dumpling_Logo"
            :width="300"
            :height="300"
        />
    </SfFooterColumn>
    <SfFooterColumn :class="showLogo ? 'not-image' : ''" v-for="(column, columnIndex) in FooterContent" :key="columnIndex" :title="column.FooterColumnTitle">
        <SfList>
            <SfListItem v-for="(item, listIndex) in column.ListItem" :key="columnIndex + '-' + listIndex">
                <SfMenuItem :label="item.lable" icon="heart" @click="$router.push({name : item.routerName})"/>
            </SfListItem>
        </SfList>
    </SfFooterColumn>

  </SfFooter>
</template>

<script>
import { SfFooter } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
import { SfArrow } from "@storefront-ui/vue";
import { SfImage } from "@storefront-ui/vue";
    export default {
        data() {
            return {
                FooterContent : [
                    {
                      FooterColumnTitle : "About Us",
                      ListItem : [
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
                    },
                    {
                        FooterColumnTitle : "Quick Link",
                        ListItem : [
                            {
                                lable : "Home",
                                routerName : "home",
                            },
                            {
                                lable : "Product",
                                routerName : "product",
                            },
                            {
                                lable : "Login",
                                routerName : "login",
                            },
                        ],
                    },
                ],
                showLogo : false,
            }
        },
        methods : {
            testMethod : function(){
                // console.log(this.$global);
                console.log(this.$enums);
            },
        },
        components : {
            SfFooter,
            SfList,
            SfMenuItem,
            SfArrow,
            SfImage,
        }
    }
</script>