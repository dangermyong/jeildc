import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */

const app = createApp(App)
library.add(faMoon, faSun)

app
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount(document.body)
