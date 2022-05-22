<template>
    <div class="">
        <!-- <div class="container py-5">
            <div class="row d-flex">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="@/assets/images/HappyDumplingLogoShort.png" class="img-fluid">
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                        <div class="form-outline mb-4" v-for="field in fieldsArray" :key="field.name">
                            <div>{{field.lable}}</div>
                            <input type="text" class="form-control form-control-lg"  v-model="field.value"/>
                            <div class="text-danger" v-if="!field.value != ''">This field is required.</div>
                            <div class="text-danger" v-else-if="!field.value.match(field.regex)">{{ field.regexErrorMessage }}</div>
                        </div>

                    </form> 
                    <div class="divider d-flex align-items-center justify-content-around my-4">
                        <button class="btn btn-primary btn-lg btn-block mx-3">Register</button>
                        <button class="btn btn-primary btn-lg btn-block mx-3" @click="goToLogin()">Login</button>
                    </div>
                    
                </div>
            </div>
        </div> -->

        <div class="loginContainer">
            <div class="title">Register</div>
            <div class="formContainer">
                <div class="input">
                    <div class="inputLable">email</div>
                    <input type="text" class="inputText" v-model="email" placeholder="Email"/>
                </div>
                <div class="input">
                    <div class="inputLable">First Name</div>
                    <input type="text" class="inputText" v-model="firstName" placeholder="First Name"/>
                </div>
                <div class="input">
                    <div class="inputLable">Last Name</div>
                    <input type="text" class="inputText" v-model="lastName" placeholder="Last Name"/>
                </div>
                <div class="input">
                    <div class="inputLable">password</div>
                    <div class="passwordContainer">
                        <input v-if="viewPassword" type="text" class="inputText" v-model="password" placeholder="Password">
                        <input v-else type="password" class="inputText" v-model="password" placeholder="Password">
                        <div class="viewPasswordButton" @click="toggleViewPassowrd()">View</div>
                    </div>
                </div>
                <div class="input">
                    <div class="inputLable">Re-enter password</div>
                    <div class="passwordContainer">
                        <input v-if="viewPassword" type="text" class="inputText" v-model="passwordReenter" placeholder="Re-enter Password">
                        <input v-else type="password" class="inputText" v-model="passwordReenter" placeholder="Re-enter Password">
                        <div class="viewPasswordButton" @click="toggleViewPassowrd()">View</div>
                    </div>
                </div>
                <div class="loginButton" @click="register()">Register</div>
            </div>

            <div class="newUserContainer">
                <div class="newUserLable"> Already have account?</div>
                <div class="registerButton" @click="goToLogin()">Sign in now</div>
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
                firstName: "",
                lastName: "",
                password: "",
                passwordReenter: "",
                viewPassword: false,
            };
        },
        component:{

        },
        methods : {
            goToLogin : function(){
                this.$router.push({name : 'login'});
            },
            toggleViewPassowrd:function(){
                this.viewPassword = !this.viewPassword;
            },
            register: function(){
                this.createNewUser(this.email, this.password, this.firstName, this.lastName);
            }
        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>