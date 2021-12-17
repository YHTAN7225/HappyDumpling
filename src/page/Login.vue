<template>
    <div class="">
        <div class="container py-5">
            <div class="row d-flex">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="@/assets/images/HappyDumplingLogoShort.png" class="img-fluid">
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input type="email" class="form-control form-control-lg" />
                            <label class="form-label" for="form1Example13">Email address</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input type="password" class="form-control form-control-lg" />
                            <label class="form-label" for="form1Example23">Password</label>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <!-- Checkbox -->
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked/>
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>
                    </form>

                <!-- Submit button -->
                <div class="divider d-flex align-items-center justify-content-around my-4">
                    <button class="btn btn-primary btn-lg btn-block mx-3">Sign in</button>
                    <button class="btn btn-primary btn-lg btn-block mx-3" @click="goToRegister()">Register</button>
                </div>
                

                <div class="divider d-flex align-items-center justify-content-around my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a class="btn btn-primary btn-lg btn-block mx-3" style="background-color : #3b5998" href="#!" role="button">
                    <i class="fab fa-facebook-f me-2">Continue with Facebook</i>
                </a>
                <a class="btn btn-primary btn-lg btn-block" style="background-color : #55acee" href="#!" role="button">
                    <i class="fab fa-twitter me-2">Continue with Twitter</i>
                </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Login",
        data(){
            return{};
        },
        component:{

        },
        methods : {
            goToRegister : function(){
                this.$router.push({name : "register"});
            }
        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>