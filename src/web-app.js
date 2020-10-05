import { LitElement, html } from 'lit-element'
import './web-components/top-bar/'

class WebApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
    `
  }
}

customElements.define('web-app', WebApp)