import { navigateTo } from "./public/src/lib/router";


const defaultRoute = '/';

window.onpopstate = () => {    
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
