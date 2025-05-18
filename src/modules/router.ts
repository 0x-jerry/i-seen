import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import type { Plugin } from 'vue'

export const install: Plugin = (app) => {
  fixEncodedRoutePath(routes)

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  app.use(router)
}

function fixEncodedRoutePath(routes: RouteRecordRaw[]) {
  for (const route of routes) {
    const encodePath = encodeURI(route.path)
    if (encodePath !== route.path) {
      route.path = encodePath
    }

    if (route.children) {
      fixEncodedRoutePath(route.children)
    }
  }
}
