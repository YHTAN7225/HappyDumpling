<template>
    <div>
        <div class="loginContainer">
            <div class="title">Sign in</div>
            <div class="formContainer">
                <div class="input">
                    <div class="inputLable">email</div>
                    <input type="text" class="inputText" v-model="email" placeholder="Email"/>
                </div>
                <div class="input">
                    <div class="inputLable">password</div>
                    <div class="passwordContainer">
                        <input v-if="viewPassword" type="text" class="inputText" v-model="password" placeholder="Password">
                        <input v-else type="password" class="inputText" v-model="password" placeholder="Password">
                        <div class="viewPasswordButton" @click="toggleViewPassowrd()">View</div>
                    </div>
                </div>
                <div class="loginButton" @click="login()">Login</div>
            </div>

            <div class="newUserContainer">
                <div class="newUserLable"> First time?</div>
                <div class="registerButton" @click="goToRegister()">Register now</div>
            </div>
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
                viewPassword: false,
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
            },
            toggleViewPassowrd:function(){
                this.viewPassword = !this.viewPassword;
            }
        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>