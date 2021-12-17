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
        </div>
    </div>
</template>

<script>
    export default {
        name : "Login",
        data(){
            return{
                fieldsArray:[
                    {
                        lable: "Email Address",
                        name: "emailAddress",
                        value: "",
                        regex: this.$constant.regex.emailAddressRegex,
                        regexErrorMessage : this.$constant.regex.emailAddressRegexErrorMessage,
                    },
                    {
                        lable: "First Name",
                        name: "firstName",
                        value: "",
                        regex: "",
                    },
                    {
                        lable: "Last Name",
                        name: "lastName",
                        value: "",
                        regex: "",
                    },
                    {
                        lable: "Password",
                        name: "password",
                        value: "",
                        regex: this.$constant.regex.passwordRegex,
                        regexErrorMessage : this.$constant.regex.passwordRegexErrorMessage,
                    },
                    {
                        lable: "Confirm Password",
                        name: "confirmPassword",
                        value: "",
                        regex: this.$constant.regex.passwordRegex,
                        regexErrorMessage : this.$constant.regex.passwordRegexErrorMessage,
                    },    
                ],
            };
        },
        component:{

        },
        methods : {
            goToLogin : function(){
                this.$router.push({name : 'login'});
            }
        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>