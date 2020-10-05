import { LitElement, html } from 'lit-element'
import CSSTemplate from './TopBarCSSTemplate'
class TopBar extends LitElement {

  static get styles() {
    return CSSTemplate
  }

  render() {
    return html`
      <div class='container'>
        <span role='img' aria-label='lightning' class='icon'>⚡</span>
        <span class='hero'>PWA Template</span>
      </div>
    `
  }

}

customElements.define('top-bar', TopBar)