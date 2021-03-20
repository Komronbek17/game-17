import { createApp } from 'vue'
import App from './App.vue'

window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
})

createApp(App).mount('#app');
