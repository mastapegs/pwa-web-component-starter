import { LitElement, html } from 'lit-element'
import '../../pages/Home'
import '../../pages/About'
import '../../pages/Contact'

class AppRouter extends LitElement {

  static get properties() {
    return {
      view: { type: String },
    }
  }

  constructor() {
    super()
    this.view = 'Home'
  }

  getView() {
    switch (this.view) {
      case 'Home':
        return html`<home-page></home-page>`
      case 'About':
        return html`<about-page></about-page>`
      case 'Contact':
        return html`<contact-page></contact-page>`
      default:
        return html``
    }
  }

  render() {
    return html`
      ${this.getView()}
    `
  }

}

customElements.define('app-router', AppRouter)