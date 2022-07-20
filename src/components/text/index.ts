export function initTextComp() {
    class TextComponent extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" })
            const variant = this.getAttribute("variant")  || "body"
            const div = document.createElement("div");
            div.className = variant;
            div.textContent = this.textContent;
            
            let style = document.createElement("style");
            style.textContent = `
            .title {
                font-family: 'Acme', sans serif;
                font-size: 52px;
                font-weight: bold;
                text-align: center;
                color: #009048;
                margin: 115px 0 0;
                display:flex;
                flex-direction:column
            }
            @media(min-width:769px) {
                .title {
                    margin-top: 145px;
                    font-size: 82px;
                    margin-top: 205px;
                }
            }            
            .body {
                font-family: 'Acme', sans serif;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                color: #009048;
                padding: 30px;
            }`
            
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent)
}
