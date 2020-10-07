import { LitElement, html } from 'lit-element'

class ContactPage extends LitElement {
  render() {
    return html`
      <h1>Contact</h1>
    `
  }
}

customElements.define('contact-page', ContactPage)