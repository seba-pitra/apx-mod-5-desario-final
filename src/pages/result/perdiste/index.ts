import { state} from "../../../state"
const imagen = require("url:../../images/lost.png");

export function initPerdistePage(params) {
    const currentState = state.getState();
    currentState.history.computerPlay = currentState.history.computerPlay + 1

    const div = document.createElement("div");
    
    div.innerHTML = `
    <img src="${imagen}">
    <div class="score-container">
    <h2>Score</h2>
    <h2 class="results">Vos: ${currentState.history.myPlay}</h2>
    <h2 class="results">Máquina: ${currentState.history.computerPlay}</h2>
    </div>
    <button class="button-again">Volver a jugar</button>
    `
    div.className = "contaner-result"
    
    const button = div.querySelector(".button-again")
    button?.addEventListener("click", (e) => {
        params.goTo("/instruction")
    })

    return div
}