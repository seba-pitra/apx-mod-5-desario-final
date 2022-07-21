import { state } from "../../state"

export function initEmpatePage(params) {
    const currentState = state.getState();

    const div = document.createElement("div")
    div.className = "contaner-result"
    div.innerHTML = `
    <custom-text variant="title">¡Empataste!</custom-text>
    <div class="score-container">
    <custom-text>Score</custom-text>
    <custom-text class="results">Vos: ${currentState.history.myPlay}</custom-text>
    <custom-text class="results">Máquina: ${currentState.history.computerPlay}</custom-text>
    </div>
    <custom-boton>Volver a jugar</custom-boton>
    `
    
    const button = div.querySelector("custom-boton")
    button?.addEventListener("click", (e) => {
        params.goTo("/instruction")
    })

    return div
}