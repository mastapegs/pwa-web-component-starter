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
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        color: white;
        text-shadow: 1px 1px black;
        font-weight: bold;
      }
      .spacer {
        height: 5em;
      }
    `
  }
  
  render() {
    return html`
      <div class="spacer"></div>
      <div class="container">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    `
  }
  
}

customElements.define('bottom-bar', BottomBar)