export function initInstrucionsPage(params) {
    const div = document.createElement("div");
    
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-around"
    div.style.alignItems = "center";
    div.style.gap = "100px";

    div.innerHTML = `
    <custom-text style="max-width:375px;">
       Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
    </custom-text>
    <custom-boton>¡Jugar!</custom-boton>
    `

    const button = div.querySelector("custom-boton");
    button?.addEventListener("click", (e) => {
      e.preventDefault()
      params.goTo("./play")
    })
    
    return div;
}