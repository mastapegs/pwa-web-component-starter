import { LitElement, html, css } from 'lit-element'

class BottomBar extends LitElement {

  static get styles() {
    return css`
      .container {
        position: fixed;
        width: 100%;
        bottom: 0;
        height: 4em;
        background: #0288D1;
      }
      .spacer {
        height: 5em;
      }
    `
  }
  
  render() {
    return html`
      <div class="spacer"></div>
      <div class="container"></div>
    `
  }
  
}

customElements.define('bottom-bar', BottomBar)