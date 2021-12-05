<template>
    <div class="vld-parent">
        <loading :active.sync="$global.state.setting.showLoading" 
        :can-cancel="canCancel" 
        :is-full-page="fullPage"
        :background-color="backgroundColor"
        :color="color"
        :loader="loader"></loading>
        
    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                canCancel : false,
                fullPage : true,
                backgroundColor : "black",
                color : "#f39412",
                // loader : "spinner",
                loader : "dots",
                // loader : "bars",
            }
        },
        components : {
            Loading
        }
    }
</script>