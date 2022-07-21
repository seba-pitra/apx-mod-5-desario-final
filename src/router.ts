import { initPageWelcome } from "./pages/welcome"
import { initInstrucionsPage } from "./pages/instruction"
import { initPlayPage } from "./pages/play";
import { initPageJugada } from "./pages/jugada";
import { pageGanaste } from "./pages/ganaste";
import { initPerdistePage } from "./pages/perdiste";
import { initEmpatePage } from "./pages/empate";

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
        path: /\/play/,
        component: initPlayPage
    },
    {
        path: /\/choose/,
        component: initPageJugada
    },
    {
        path: /\/ganaste/,
        component: pageGanaste
    },
    {
        path: /\/perdiste/,
        component: initPerdistePage
    },
    {
        path: /\/empate/,
        component: initEmpatePage
    }
];


export function initRouter(container) {
    function isGithubPages() {
        return location.host.includes("github.io");
    }
    function goTo(path) {
        history.pushState({}, " ", path);
        const BASE_PATH = "/desafio-m5";
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        handleRoute(completePath);
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
