"use strict";
window.document.querySelector("head").children[length].innerHTML = `<link rel=stylesheet href=/assets/styles.css></link>`;
class outlined_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("outlined-button");
    }
}
class destructive_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("destructive-button");
    }
}
class ghost_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("ghost-button");
    }
}
class link_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("link-button");
    }
}
class primary_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("primary-button");
    }
}
class secondary_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("secondary-button");
    }
}
window.customElements.define("outlined-button", outlined_button, { extends: "button" });
window.customElements.define("destructive-button", destructive_button, { extends: "button" });
window.customElements.define("ghost-button", ghost_button, { extends: "button" });
window.customElements.define("link-button", link_button, { extends: "button" });
window.customElements.define("primary-button", primary_button, { extends: "button" });
window.customElements.define("secondary-button", secondary_button, { extends: "button" });
