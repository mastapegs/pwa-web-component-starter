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
        
        color: white;
        text-shadow: 1px 1px black;
        font-weight: bold;
      }
      .spacer {
        height: 5em;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
      }
    `
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