import { state } from "./state";
import { initRouter } from "./router";

import { initTextComp } from "./components/text";
import { initBotonComp }from "./components/button";
import {initTijeraComp} from "./components/tijeras";
import { initPiedraComp } from "./components/piedra";
import { initPapelComp } from "./components/papel";

(function() {
    const root = document.querySelector(".root")
    
    initRouter(root)
    initTijeraComp();
    initPiedraComp();
    initPapelComp();
    initBotonComp();
    initTextComp();


    
})()