import { state } from "../../state"

export function initPlayPage(params) {
    const div = document.createElement("div");
    div.className = "play-container";
    
    div.innerHTML = `
    <div>Aca va el counter</div>
    <div class="play-hands-container">
        <custom-tijera></custom-tijera>
        <custom-piedra></custom-piedra>
        <custom-papel></custom-papel>
    </div>
    `;
    
    
    function machinePlay() {
        const options = ["piedra","papel","tijeras"]
        const choose =  options[Math.floor(Math.random() * options.length)];
        return choose;
    }
    
    const currentState = state.getState();
    const piedra:any = div.querySelector("custom-piedra");
    const papel:any = div.querySelector("custom-papel");
    const tijera:any = div.querySelector("custom-tijera");

    tijera.addEventListener("click", (e) => {
        currentState.currentGame.computerPlay = machinePlay(); 
        currentState.currentGame.myPlay = "tijeras";
        state.setState(currentState);
        setTimeout(() => {
            params.goTo("/choose")
        }, 2000)
    });
    
    piedra.addEventListener("click", (e) => {
        currentState.currentGame.computerPlay = machinePlay(); 
        currentState.currentGame.myPlay = "piedra";
        state.setState(currentState);

        setTimeout(() => {
            return params.goTo("/choose")
        }, 2000)
    });

    papel.addEventListener("click", (e) => {
        currentState.currentGame.computerPlay = machinePlay(); 
        currentState.currentGame.myPlay = "papel";
        state.setState(currentState);

        setTimeout(() => {
            return params.goTo("/choose")
        }, 2000)
    })
        
    return div;
    
}