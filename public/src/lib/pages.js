import login from "../views/login";
import shop from "../views/shop"



const routes = [
    { path: '/', component: login },
    { path: '/shop', component: shop },
]

export {routes}