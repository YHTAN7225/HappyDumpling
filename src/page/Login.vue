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
                            <label class="form-label" for="form1Example13">Email address</label>
                            <input type="email" class="form-control form-control-lg" v-model="email"/>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form1Example23">Password</label>
                            <input type="password" class="form-control form-control-lg" v-model="password"/>
                        </div>
                    </form>
                <div v-if="errorMessage">{{errorMessage}}</div>

                <!-- Submit button -->
                <div class="divider d-flex align-items-center justify-content-around my-4">
                    <button class="btn btn-primary btn-lg btn-block mx-3" @click="login">Sign in</button>
                    <button class="btn btn-primary btn-lg btn-block mx-3" @click="goToRegister()">Register</button>
                </div>
                </div>
            </div>
        </div>

        <div class="loginContainer">
            asdasdasdasd
        </div>
    </div>
</template>

<script>
    export default {
        name : "Login",
        data(){
            return{
                email: "",
                password: "",
                errorMessage: "",
            };
        },
        component:{

        },
        methods : {
            goToRegister : function(){
                this.$router.push({name : "register"});
            },
            login: function(){
                this.firebaseLogin(this.email, this.password).then(res => {
                    this.$global.commit("setUserToken", res.user.accessToken);
                    this.$global.commit("setUserEmail", res.user.email);
                    this.$router.push({name: "home"});
                }).catch(err => {
                    this.errorMessage = this.$error.getAuthErrorMessage(err.code);
                })
            }
        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>