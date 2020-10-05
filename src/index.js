import { render, html } from 'lit-html'
import './web-app'

render(html`
  <style>
    body {
      margin: 0;
      padding: 0;
      font: 16px/1.5 Arial, Helvetica, sans-serif;
    }
  </style>
  <web-app></web-app>
`, document.body)