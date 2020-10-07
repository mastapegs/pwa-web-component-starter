import { LitElement, html } from 'lit-element'

class HomePage extends LitElement {
  render() {
    return html`
      <h1>Home</h1>
    `
  }
}

customElements.define('home-page', HomePage)