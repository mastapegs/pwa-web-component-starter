import { LitElement, html } from 'lit-element'

class AboutPage extends LitElement {
  render() {
    return html`
      <h1>About</h1>
    `
  }
}

customElements.define('about-page', AboutPage)