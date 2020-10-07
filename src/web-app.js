import { LitElement, html } from 'lit-element'
import './web-components/top-bar'
import './web-components/bottom-bar'
import './web-components/app-router'

class WebApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <app-router></app-router>
      <bottom-bar></bottom-bar>
    `
  }
}

customElements.define('web-app', WebApp)