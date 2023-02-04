import './assets/tailwind.css'
import { vantaInit } from './common/vanta.js'
// import {FastDom} from './common/FastDom.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

vantaInit()

// VANTA.HALO({
//     el: "#hero",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     xOffset: 0.12
//   })