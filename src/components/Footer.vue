<template>
    <div>
        <div class="page-footer font-small blue pt-4 sticky-bottom">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
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
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
            <div @click="getTest()">getTest</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>