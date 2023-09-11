import login from "../views/login";
import shop from "../views/shop"
import pay from "../views/pay"



const routes = [
    { path: '/', component: login },
    { path: '/shop', component: shop },
    { path: '/pay', component: pay },
]

export {routes}