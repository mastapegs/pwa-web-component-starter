import { LitElement, html } from 'lit-element'
import CSSTemplate from './BottomBarCSSTemplate'

class BottomBar extends LitElement {

  static get properties() {
    return {
      links: { type: Array }
    }
  }

  static get styles() {
    return CSSTemplate
  }

  constructor() {
    super()
    this.links = [
      {
        href: '/',
        linkText: 'Home',
      },
      {
        href: '/about',
        linkText: 'About',
      },
      {
        href: '/contact',
        linkText: 'Contact',
      },
    ]
  }

  navigate(e, href) {
    e.preventDefault()
    window.history.pushState({ data: href }, '', href)
    window.dispatchEvent(new CustomEvent('changeView'))
  }

  render() {
    return html`
      <div class="spacer"></div>
      <div class="container">
        <ul>
          ${this.links.map(({ href, linkText }) => html`
          <li><a @click="${(e) => this.navigate(e, href)}" href=${href}>${linkText}</a></li>
          `)}
        </ul>
      </div>
    `
  }

}

customElements.define('bottom-bar', BottomBar)