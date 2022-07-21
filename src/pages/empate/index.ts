export function initEmpatePage(params) {
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