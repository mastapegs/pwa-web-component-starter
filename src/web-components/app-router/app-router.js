import { LitElement, html } from 'lit-element'
import CSSTemplate from './AppRouterCSSTemplate'

class AppRouter extends LitElement {

  static get properties() {
    return {
      view: { type: String },
    }
  }

  static get styles() {
    return CSSTemplate
  }

  constructor() {
    super()
    this.view = 'Home'
    this.setView = this.setView.bind(this)
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('changeView', this.setView)
    window.addEventListener('popstate', this.setView)
    this.setView()
  }

  async setView() {
    switch (window.location.pathname) {
      case '/':
        await import('../../pages/Home')
        this.view = 'Home'
        break
      case '/about':
      case '/about/':
        await import('../../pages/About')
        this.view = 'About'
        break
      case '/contact':
      case '/contact/':
        await import('../../pages/Contact')
        this.view = 'Contact'
        break
      case '/list':
      case '/list/':
        await import('../long-list')
        this.view = 'List'
        break
      default:
        this.view = ''
        break
    }
  }

  getView() {
    switch (this.view) {
      case 'Home':
        return html`<home-page></home-page>`
      case 'About':
        return html`<about-page></about-page>`
      case 'Contact':
        return html`<contact-page></contact-page>`
        case 'List':
        return html`<long-list></long-list>`
      default:
        return html``
    }
  }

  render() {
    return html`
      <div class='container'>
        ${this.getView()}
      </div>
    `
  }

}

customElements.define('app-router', AppRouter)