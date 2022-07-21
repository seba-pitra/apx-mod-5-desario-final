import { state} from "../../state"

export function pageGanaste(params) {
    const currentState = state.getState();
    currentState.history.myPlay = currentState.history.myPlay + 1

    
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