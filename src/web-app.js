import { LitElement, html } from 'lit-element'
import './web-components/top-bar/'
import './web-components/long-list'
import './web-components/bottom-bar'

class WebApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <!-- <long-list></long-list> -->
      <bottom-bar></bottom-bar>
    `
  }
}

customElements.define('web-app', WebApp)