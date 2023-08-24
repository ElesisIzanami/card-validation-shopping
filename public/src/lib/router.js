import { routes } from "./pages"
const root = document.getElementById('root');

function navigateTo(hash){
        const route = routes.find((elemento) => elemento.path === hash); 

        if (route && route.component) {
                window.history.pushState(
                    {}, 
                    route.path, 
                    window.location.origin + route.path, 
                    );

                    if (root.firstChild) {
                        root.removeChild(root.firstChild);
                    }

                    root.appendChild(route.component(navigateTo)); 

            } else {
                navigateTo('/error');
            }
    }
   
export {navigateTo}