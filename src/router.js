import Vue from "vue"
import Router from "vue-router"

//overwriting origical push method which ignore self-redirect (redundant navigation) error
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err =>{
      if(err.name != "NavigationDuplicated"){
        throw err;
      }
  })
};

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
    routes : [
        {
            path : "/login",
            name : "login",
            component : () => import("./page/Login"), 
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/",
            name : "home",
            component : () => import("./page/Home"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/product",
            name : "product",
            component : () => import("./page/Product"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/contact-us",
            name : "contact-us",
            component : () => import("./page/ContactUs"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/register",
            name : "register",
            component : () => import("./page/Register"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/delivery-info",
            name : "delivery-info",
            component : () => import("./page/DeliveryInfo"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/our-story",
            name : "our-story",
            component : () => import("./page/OurStory"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/terms-and-conditions",
            name : "terms-and-conditions",
            component : () => import("./page/TermsAndConditions"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "/profile",
            name : "profile",
            component : () => import("./page/Profile"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "*",
            redirect : {name : "home"}
        }
    ]
})