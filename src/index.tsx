import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import { configureRouter } from './routing/createRouter5'
import { RouterProvider } from 'react-router5'

import { Layout } from './pages/Layout'
import { RouterStore } from './stores/RouterStore'

const router = configureRouter()

const RouterProviderComponent: any = RouterProvider

export const App = (
  <Provider routerStore={RouterStore.getInstance()}>
    <RouterProviderComponent router={router}>
      <Layout />
    </RouterProviderComponent>
  </Provider>
)

router.start((err, state) => {
  ReactDOM.render(App, document.getElementById('root'))
})
