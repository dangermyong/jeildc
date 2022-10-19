import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from '@/router/index'
// import { createHead } from '@vueuse/head'

const app = createApp(App)
// const head = createHead()

// app.use(head)

app.use(router).mount(document.body)
