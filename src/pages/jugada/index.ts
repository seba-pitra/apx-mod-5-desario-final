import { state } from "../../state"

export function initPageJugada(params) {
    const div = document.createElement("div");
    div.className = "jugada-container"

    const currentState = state.getState();
    const miJugada = currentState.currentGame.myPlay
    const maquinaJugada = currentState.currentGame.computerPlay

    const comps = {
        piedra: "<custom-piedra></custom-piedra>",
        papel: "<custom-papel></custom-papel>",
        tijeras: "<custom-tijera></custom-tijera>"
    };

    div.innerHTML = `
    <div class="machine">
    ${ comps[maquinaJugada] }
    </div>
    ${ comps[miJugada] }
    `;

    const resultOfPlay = state.whoWins(miJugada, maquinaJugada)
    if (resultOfPlay == "ganaste") {
        const value = sessionStorage.getItem("me")
        sessionStorage.setItem("me", JSON.stringify(Number(value) + 1))
    } else if(resultOfPlay == "perdiste") {
        const value = sessionStorage.getItem("machine")
        sessionStorage.setItem("machine", JSON.stringify(Number(value) + 1))
    }
    
    setTimeout(()=>{ return params.goTo(`/${resultOfPlay}`); }, 2000)
    
    return div;
}