import { LitElement, html } from 'lit-element'
import './web-components/top-bar'
import './web-components/bottom-bar'
import './web-components/app-router'
import './pages/Home'
import './pages/About'
import './pages/Contact'

class WebApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <app-router></app-router>
      <home-page></home-page>
      <about-page></about-page>
      <contact-page></contact-page>
      <bottom-bar></bottom-bar>
    `
  }
}

customElements.define('web-app', WebApp)