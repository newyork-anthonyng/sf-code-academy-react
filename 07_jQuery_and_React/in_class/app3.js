// Custom elements (https://developers.google.com/web/fundamentals/web-components/customelements)
class CatCheckbox extends HTMLElement {
  static get observedAttributes() {
    return ["checked"];
  }

  constructor() {
    super();

    this.happyCatImage = "http://i0.kym-cdn.com/photos/images/facebook/000/071/862/happycat.jpg";
    this.angryCatImage = "http://i2.kym-cdn.com/photos/images/newsfeed/000/406/325/b31.jpg";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          background: url("${this.angryCatImage}") no-repeat;
          background-size: contain;
          height: 200px;
          width: 200px;
        }

        :host([checked]) {
          background: url("${this.happyCatImage}") no-repeat;
          background-size: contain;
        }
      </style>
    `;
  }

  connectedCallback() {
    this._upgradeProperty("checked");
    this.setAttribute("tabindex", 0);
    this.setAttribute("role", "checkbox");

    this.addEventListener('keyup', this._onKeyUp);
    this.addEventListener('click', this._onClick);
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  disconnectedCallback() {
    this.removeEventListener('keyup', this._onKeyUp);
    this.removeEventListener('click', this._onClick);
  }

  set checked(value) {
    const isChecked = Boolean(value);
    if (isChecked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  get checked() {
    return this.hasAttribute("checked");
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null;
    if (name === "checked") {
      this.setAttribute("aria-checked", hasValue);
    }
  }

  _onKeyUp (event) {
    switch (event.keyCode) {
      case 32:
        event.preventDefault();
        this._toggleChecked();
        break;
      default:
        return;
    }
  }

  _onClick (event) {
    this._toggleChecked();
  }

  _toggleChecked() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        checked: this.checked
      },
      bubbles: true
    }));
  }
}
window.customElements.define("cat-checkbox", CatCheckbox);
