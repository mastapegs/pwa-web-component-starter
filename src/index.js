import { render, html } from 'lit-html'
import './web-app'

render(html`
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
  <web-app></web-app>
`, document.body)