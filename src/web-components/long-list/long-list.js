import { LitElement, html, css } from 'lit-element'
import { repeat } from 'lit-html/directives/repeat.js';
import cssTemplate from './longListCssTemplate'

class LongList extends LitElement {

  static get styles() {
    return css`${cssTemplate}`
  }

  static get properties() {
    return {
      numbers: { type: Array },
      exponent: { type: Number },
    }
  }

  constructor() {
    super()
    this.numbers = []
    this.exponent = 1
    for (let number = 1; number <= 500; number++) {
      this.numbers = [...this.numbers, number]
    }
  }

  handleClick(incrementNumber) {
    this.exponent = this.exponent + incrementNumber
  }

  render() {
    return html`
      <div class="container">
        <div class="button-container">
          <button @click=${()=> this.handleClick(1)}>Increment Exponent</button>
          <button @click=${()=> this.handleClick(-1)}>Decrement Exponent</button>
          <button @click=${()=> this.handleClick(1 - this.exponent)}>Reset Exponent</button>
        </div>
        <ul>
          ${repeat(this.numbers, number => number, number => (html`
          <li>${number}<sup>${this.exponent}</sup>=${Math.pow(number, this.exponent)}</li>
          `))}
        </ul>
      </div>
    `
  }

}

customElements.define('long-list', LongList)