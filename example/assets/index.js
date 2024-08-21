"use strict";
class outlined_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("outlinedButton");
    }
}
class destructive_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("destructiveButton");
    }
}
class ghost_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("ghostButton");
    }
}
class link_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("linkButton");
    }
}
class primary_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("primaryButton");
    }
}
class secondary_button extends HTMLButtonElement {
    constructor() {
        super();
        this.classList.add("secondaryButton");
    }
}
window.customElements.define("outlined-button", outlined_button, { extends: "button" });
window.customElements.define("destructive-button", destructive_button, { extends: "button" });
window.customElements.define("ghost-button", ghost_button, { extends: "button" });
window.customElements.define("link-button", link_button, { extends: "button" });
window.customElements.define("primary-button", primary_button, { extends: "button" });
window.customElements.define("secondary-button", secondary_button, { extends: "button" });
