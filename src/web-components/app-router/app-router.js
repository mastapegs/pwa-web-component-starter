import { LitElement, html } from 'lit-element'
import '../../pages/Home'
import '../../pages/About'
import '../../pages/Contact'

class AppRouter extends LitElement {

  render() {
    return html`
      <home-page></home-page>
      <about-page></about-page>
      <contact-page></contact-page>
    `
  }
  
}

customElements.define('app-router', AppRouter)