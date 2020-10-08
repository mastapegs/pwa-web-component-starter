import { LitElement, html } from 'lit-element'
import './web-components/top-bar'
import './web-components/bottom-bar'
import './web-components/app-router'
import './web-components/service-worker'

class WebApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <app-router></app-router>
      <bottom-bar></bottom-bar>
      <service-worker></service-worker>
    `
  }
}

customElements.define('web-app', WebApp)