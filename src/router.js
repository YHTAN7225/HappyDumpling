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

//avoid redirect to current page (not working)
function blockSelfRedirect(to, from, next){
    // console.log(to.name);
    // console.log(from.name);
    // console.log(next);
    if(from.name != to.name){
        next();
    }
}


export default new Router({
    mode : "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component : () => import("./page/Login"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path: "/",
            name: "home",
            component : () => import("./page/Home"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path: "/product",
            name: "product",
            component : () => import("./page/Product"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path: "/about-us",
            name: "about-us",
            component : () => import("./page/AboutUs"),
            // beforeEnter : blockSelfRedirect
        },
    ]
})