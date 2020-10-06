import { LitElement, html } from 'lit-element'
import CSSTemplate from './BottomBarCSSTemplate'

class BottomBar extends LitElement {

  static get styles() {
    return CSSTemplate
  }
  
  render() {
    return html`
      <div class="spacer"></div>
      <div class="container">
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    `
  }
  
}

customElements.define('bottom-bar', BottomBar)