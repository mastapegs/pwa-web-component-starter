import { LitElement, html, css } from 'lit-element'
import '../../pages/Home'
import '../../pages/About'
import '../../pages/Contact'

class AppRouter extends LitElement {

  static get properties() {
    return {
      view: { type: String },
    }
  }

  static get styles() {
    return css`
      .container {
        box-sizing: border-box;
        width: 90%;
        min-height: 50vh;
        margin: 0 auto;
        padding: 0 .7em;
        background: white;
        border-radius: 0.5em;
        box-shadow: 3px 3px 3px 0 hsla(0, 0%, 0%, 0.5)
      }
    `
  }

  constructor() {
    super()
    this.view = ''
    this.setView = this.setView.bind(this)
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('changeView', this.setView)
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