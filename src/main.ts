import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import cepMask from './directives/cepMask'

const app = createApp(App)

app.directive('cep-mask', cepMask)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
