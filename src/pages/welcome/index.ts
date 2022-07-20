export function initPageWelcome(params) {
    const div = document.createElement("div");
    
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-around"
    div.style.alignItems = "center";
    div.style.gap = "100px";


    div.innerHTML = `
    <custom-text variant="title">
       Piedra, Papel ó Tijeras
    </custom-text>
    <custom-boton>Empezar</custom-boton>
    <div style="width:375px;display:flex; justify-content:space-between">
       <custom-tijera></custom-tijera>
       <custom-piedra></custom-piedra>
       <custom-papel></custom-papel>
    </div>
    `

    const button = div.querySelector("custom-boton");
    button?.addEventListener("click", (e) => {
      e.preventDefault()
      params.goTo("./intruction")
    })
    
    return div;
}