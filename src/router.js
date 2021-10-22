import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

// function requireLogin(to, from, next){
//     if(login == true){
//         next();
//     }else{
//         next("login");
//     }
// }

export default new Router({
    mode : "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component : () => import("./page/Login"),
            // beforeEnter : (to, from, next) =>{
            //     if(login == true){
            //         next("home");
            //     }else{
            //         next();
            //     }
            // }
        },
        {
            path: "/",
            name: "home",
            component : () => import("./page/Home")
        },
        {
            path: "/product",
            name: "product",
            component : () => import("./page/Product")
        },
        {
            path: "/about-us",
            name: "about-us",
            component : () => import("./page/AboutUs")
        },
    ]
})