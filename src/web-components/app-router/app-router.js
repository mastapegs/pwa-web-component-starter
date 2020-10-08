import { LitElement, html } from 'lit-element'
import CSSTemplate from './AppRouterCSSTemplate'
import '../../pages/Home'
import '../../pages/About'
import '../../pages/Contact'
import '../long-list'

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
    this.view = ''
    this.setView = this.setView.bind(this)
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('changeView', this.setView)
    window.addEventListener('popstate', this.setView)
    this.setView()
  }

  setView() {
    switch (window.location.pathname) {
      case '/':
        this.view = 'Home'
        break
      case '/about':
      case '/about/':
        this.view = 'About'
        break
      case '/contact':
      case '/contact/':
        this.view = 'Contact'
        break
      case '/list':
      case '/list/':
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