import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import './assets/global.css';
import './assets/style.css';
createApp(App)
.use(router)
.use(store)
.mount('#app')
