import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/o-pequeno-livro-de-tradicoes-japonesas', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')