<template>
    <div>
        <div class="page-footer font-small blue stick-bottom">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase">Footer Content</h5>
                    <div @click="createNewUser()">createNewUser</div>
                    <div @click="getDocument('test')">getDocument</div> 
                    <div @click="testMethod()">testMethod</div>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled">
                    <li>
                        <a @click="$router.push({name : 'home'})">Home</a>
                    </li>
                    <li>
                        <a @click="$router.push({name : 'product'})">Product</a>
                    </li>
                    <li>
                        <a @click="$router.push({name : 'login'})">Login</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        methods : {
            testMethod : function(){
                // console.log(this.$global);
                console.log(this.$enums);
            },
        }
    }
</script>