import { LitElement, html, css } from 'lit-element'

class TopBar extends LitElement {

  static get styles() {
    return css`
      .container {
        background: #0288D1;
        color: white;
        height: 4em;
        display: flex;
        align-items: center;
        box-shadow: 0 0 .5em .1em black;
      }
      .icon {
        margin: 0 1em;
        font-size: 2em;
      }
      .hero {
        font-weight: bold;
        font-size: 1.5em;
        flex: 1;
        text-shadow: 1px 1px black;
      }
    `
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