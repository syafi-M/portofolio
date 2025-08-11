import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const lenis = new Lenis({
  smoothWheel: true,
  smooth: true,
  smoothTouch: true,
  lerp: 0.1,
  direction: 'vertical',
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
