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
            path : "/about-us",
            name : "about-us",
            component : () => import("./page/AboutUs"),
            // beforeEnter : blockSelfRedirect
        },
        {
            path : "*",
            redirect : {name : "home"}
        }
    ]
})