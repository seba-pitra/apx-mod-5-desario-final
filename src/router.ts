import { initPageWelcome } from "./pages/welcome"
import { initInstrucionsPage } from "./pages/instruction"
import { initResultPage } from "./pages/result"

const routes = [ 
    {
        path: /\/welcome/,
        component: initPageWelcome
    },
    {
        path: /\/instruction/,
        component: initInstrucionsPage
    },
    {
        path: /\/result/,
        component: initResultPage
    }
];

export function initRouter(container) {
    function goTo(path) {
        history.pushState({}, " ", path);
        handleRoute(path);
    }
    function handleRoute(route) {    
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({goTo: goTo});
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el)
            }
        }
    }
    if (location.pathname == "" || "/") {
        goTo("/welcome")
    } else {
        handleRoute(location.pathname);  
    }

    window.onpopstate = function() {
        handleRoute(location.pathname);
    }; 
}
