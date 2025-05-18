import generatedRoutes from 'virtual:generated-pages'
import type { Plugin } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const install: Plugin = (app) => {
  const routes = generatedRoutes

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  app.use(router)
}
