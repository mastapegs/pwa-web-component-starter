import { render, html } from 'lit-html'
import './web-app'

render(html`
  <style>
    body {
      --primary-color: #154c69;
      margin: 0;
      padding: 0;
      font: 16px/1.5 Arial, Helvetica, sans-serif;
      background: hsla(0, 0%, 90%, 1);
    }
  </style>
  <web-app></web-app>
`, document.body)