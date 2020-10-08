import { LitElement, html } from 'lit-element'

class ServiceWorker extends LitElement {

  connectedCallback() {
    super.connectedCallback()
    console.log('Service Worker Component Mounted')
    this.setupServiceWorker()
  }

  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        const registration =
          await navigator.serviceWorker.register('/service-worker.js')
            .catch(registrationError =>
              console.log(`SW Registration failed: ${registrationError}`))
        if (!registration) return
        console.log(`SW Registered:`)
        console.log(registration)
      })
    }
  }

}

customElements.define('service-worker', ServiceWorker)