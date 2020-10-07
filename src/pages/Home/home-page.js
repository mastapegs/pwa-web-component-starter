import { LitElement, html } from 'lit-element'

class HomePage extends LitElement {

  static get properties() {
    return {
      techList: { type: Array },
      frameworkSize: {type: Number},
    }
  }

  constructor() {
    super()
    this.frameworkSize = 0;
    this.techList = [
      'Web Components',
      'LitElement',
      'Webpack',
      'Vercel',
    ]
  }

  render() {
    return html`
      <h1>Simple and Lightweight Web Component Starter</h1>
      <p>This web app will eventually become a starter for native javascript spa applications.</p>
      
      <h2>Technology Used</h2>
      <ul>
        ${this.techList.map(tech => html`<li>${tech}</li>`)}
      </ul>

      <h2>Current JavaScript footprint</h2>
      <p>JavaScript size: ${this.frameworkSize}kb</p>
    `
  }

}

customElements.define('home-page', HomePage)