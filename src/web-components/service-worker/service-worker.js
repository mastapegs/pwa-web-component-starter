import { LitElement } from 'lit-element'

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

        this.installPWA()

      })
    }
  }

  installPWA() {
    var CACHE_NAME = 'pwa-app-v1';
    var urlsToCache = [
      '/',
      '/app.bundle.js',
      '/about/index.html',
      '/contact/index.html',
      '/list/index.html',
    ];
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            console.log('opened cache')
            return cache.addAll(urlsToCache)
          })
      )
    })
  }

}

customElements.define('service-worker', ServiceWorker)