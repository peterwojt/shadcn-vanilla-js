class outlinedbutton extends HTMLButtonElement {
	constructor() {
		super();
		this.classList.add('outlined-button');
	}
}
customElements.define('outlined-button', outlinedbutton, { outlinedButton });
