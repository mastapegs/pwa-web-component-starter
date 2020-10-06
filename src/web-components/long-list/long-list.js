import { LitElement, html } from 'lit-element'

class LongList extends LitElement {

  static get properties() {
    return {
      list: { type: Array }
    }
  }

  constructor() {
    super()
    this.createList()
  }

  createList() {
    this.list = []
    for (let number = 1; number <= 200; number++) {
      this.list = [...this.list, number]
    }
  }

  handleClick() {
    this.list = this.list.slice(1, this.list.length)
  }

  render() {
    return html`
      <button @click="${this.handleClick}">Pop off first list item</button>
      <ul>
        ${this.list.map(number => html`<li>${number}</li>`)}
      </ul>
    `
  }

}

customElements.define('long-list', LongList)