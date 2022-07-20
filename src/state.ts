type Jugada = "piedra" |"papel" | "tijeras";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada
}

export const state = {
    data:{
        currentGame: {
            computerPlay:"",
            myPlay:""
        },
        history: [{

        }]
    },
    listeners:[],
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
    },
    suscribe(cb: (any) => any) {
        this.listeners.push(cb);
    },
    pushToHistory(play: Game) {
        const currentState = this.getState();
        currentState.history(play)
    },
    setMove(move:Jugada) {
        const currentState = this.getState();
        currentState.currentGame.myPlay;
    },
    whoWins(myPlay:Jugada, computerPlay:Jugada) {
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijeras"
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra"
        const ganeConTijeras = myPlay == "tijeras" && computerPlay == "papel"
        if(ganeConPapel) {
            return ganeConPapel
        }

        //me parece mejor si lo hago con condicionales
        const gane = [ganeConPiedra, ganeConPapel, ganeConTijeras].includes(true)
        const perdi = [ganeConPiedra, ganeConPapel, ganeConTijeras].includes(false)
        console.log(gane, perdi);
        
    }
}

state.whoWins("papel", "piedra");

// state.setMove("papel")
// state.pushToHistory({computerPlay:"papel", myPlay:"piedra"}) aca le decimos al historial que guarde. 
// Jugue contra la compu y me ganó