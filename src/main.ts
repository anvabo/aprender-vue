import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Router
import router from "./router"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
app.use(router)

app.mount('#app')
