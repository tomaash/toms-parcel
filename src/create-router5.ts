import { createRouter } from 'router5'
// import browser from 'router5/plugins/browser';
// import logger from 'router5/plugins/logger';
// import { mobxPlugin } from 'mobx-router5';
import router5PluginBrowser from 'router5-plugin-browser'
import router5PluginLogger from 'router5-plugin-logger'

import routes from './routes'
// import { routerStore } from './stores/RouterStore';

const routerOptions = {
  defaultRoute: 'home',
  strictQueryParams: true,
}

export function configureRouter() {
  const router = createRouter(routes, routerOptions)
  router.usePlugin(router5PluginBrowser())
  router.usePlugin(router5PluginLogger)
  // Plugins

  // .usePlugin(browser({ useHash: false }))
  // .usePlugin(mobxPlugin(routerStore))
  // .usePlugin(logger);

  return router
}
