import { LitElement, html } from 'lit-element'

class AboutPage extends LitElement {
  render() {
    return html`
    
      <h1>About me</h1>
      <p>I'm a person who absolutely loves working with the latest and greatest web technologies. To me, playing with web technologies feels like playing with Legos. I can make <em>anything</em>.</p>

      <h2>My prior framework, React</h2>
      <p>I felt like my web programming capabilities truly jumped when I began studying React. Once I started using it, I became exposed to NextJS and GatsbyJS. These technologies too increased my coding capabilities.</p>
      <p>I began drinking from the firehose, and studied class based components, functional components, state via hooks, side-effects via useEffect, the Context API, etc. There was so much power and capability that I felt like I could create anything.</p>
      <p>Using Gatsby, I created <a href="https://riwebservices.com">RI Web Services</a>. I felt like it was time to try to make some income using the technology I love so much.</p>

      <h2>Learning Web Components</h2>
      <p>One itch that's always been bothering me with React is all of the JavaScript knowledge it obfuscates away for me. I've always dreamed of making a 'Vanilla JS' based website, but I never knew how to scale it well.</p>
      <p>Using Create-React-App, and then NextJS and Gatsby, showed me how to structure a codebase for scale, but I've never tried to emulate this without a framework, until I learned about Web Components.</p>
      
      <h2>Using the Platform</h2>
      <p>Web Components are a native way to implement a component based application model. Free from using React, and instead, learning Webpack, I'm unlocking the power of shipping extremely lightweight web applications, using the power of the native platform.</p>
      
    `
  }
}

customElements.define('about-page', AboutPage)