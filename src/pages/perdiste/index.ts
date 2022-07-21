import { state} from "../../state"

export function initPerdistePage(params) {
    const currentState = state.getState();
    currentState.history.computerPlay = currentState.history.computerPlay + 1
    
    const div = document.createElement("div")
    div.innerHTML = `
    <div>
    <button class="button-again">Volver</button>
    </div>
    `
    
    const button = div.querySelector(".button-again")
    button?.addEventListener("click", (e) => {
        params.goTo("/instruction")
    })

    return div
}