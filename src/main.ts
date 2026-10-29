import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FearlessLand from './components/FearlessLand.vue'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
createApp(path === '/fearless-land' ? FearlessLand : App).mount('#app')
