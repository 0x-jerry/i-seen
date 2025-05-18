import { createApp, type Plugin } from 'vue'
import App from './App.vue'

import 'overlayscrollbars/overlayscrollbars.css'
import './styles/global.scss'
import 'daisyui/theme/light.css'
import 'uno.css'

const app = createApp(App)

// install all modules
Object.values(
  import.meta.glob<{ install: Plugin }>('./modules/*.ts', { eager: true }),
).forEach((m) => {
  app.use(m.install)
})

app.mount('#app')
