import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'  // root component, in which all other components are nested. All app code is in here.
import router from './router'

import './assets/main.css'

const app = createApp(App)  // actually create the app.

// tell the app to use Pinia and router.
app.use(createPinia())
app.use(router)

// mount the app in the div w/ id "app" in index.html
app.mount('#app')
