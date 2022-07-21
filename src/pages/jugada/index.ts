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
    ${ comps[maquinaJugada] }
    ${ comps[miJugada] }
    `;

    const resultOfPlay = state.whoWins(miJugada, maquinaJugada)
    
    setTimeout(()=>{ return params.goTo(`/${resultOfPlay}`); },2000)
    
    return div;
}