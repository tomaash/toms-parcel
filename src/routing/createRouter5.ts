import { createRouter } from 'router5'
import router5PluginBrowser from 'router5-plugin-browser'
import router5PluginLogger from 'router5-plugin-logger'

import { routes } from './routes'
import { RouterStore } from '../stores/RouterStore'

const routerStore = RouterStore.getInstance()

const routerOptions = {
  defaultRoute: 'foo',
  strictQueryParams: true,
}

export function configureRouter() {
  const router = createRouter(routes, routerOptions)
  router.usePlugin(
    router5PluginBrowser()
    // router5PluginLogger,
  )

  router.subscribe(({ route, previousRoute }) => {
    routerStore.state = route
  })

  routerStore.router = router

  return router
}
