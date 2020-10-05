import { LitElement, html, css } from 'lit-element'

class TopBar extends LitElement {

  static get styles() {
    return css`
      .container {
        background: #0288D1;
        color: white;
        height: 3em;
        display: flex;
      }
    `
  }
  
  render() {
    return html`
      <div class='container'>
        <span></span>
      </div>
    `
  }
  
}

customElements.define('top-bar', TopBar)