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
        box-shadow: 0 0 .5em .1em black;
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