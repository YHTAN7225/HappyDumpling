<template>
<SfFooter
    :column="3"
    :multiple="false"
  >
    <SfFooterColumn>
        <SfImage
            :src="require('@/assets/images/HappyDumplingLogoShort.png')"
            :srcsets="[]"
            alt="Happy_Dumpling_Logo"
            :width="300"
            :height="300"
        />
    </SfFooterColumn>
    <SfFooterColumn class="not-image" v-for="(column, columnIndex) in FooterContent" :key="columnIndex" :title="column.FooterColumnTitle">
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
                              lable : "Who we are",
                              routerName : "",
                          },
                          {
                              lable : "Quality in the details",
                              routerName : "",
                          },
                          {
                              lable : "Customer Reviews",
                              routerName : "",
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
                ]
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