import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import { configureRouter } from './routing/createRouter5'
import { RouterProvider, Route } from 'react-router5'

import { Layout } from './pages/Layout'
import { RouterStore } from './stores/RouterStore'

const router = configureRouter()

const RouterProviderHack: any = RouterProvider

export const App = (
  <Provider routerStore={RouterStore.getInstance()}>
    <RouterProviderHack router={router}>
      <Layout />
    </RouterProviderHack>
  </Provider>
)

// Render the entire app when the router starts
router.start((err, state) => {
  ReactDOM.render(App, document.getElementById('root'))
})
