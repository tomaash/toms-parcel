// import * as React from 'react'
// import { render } from 'react-dom'
// import './index.css'

// import App from './App'

// render(<App />, document.getElementById('root'))

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

// Local imports
// import * as stores from './stores'; // mobx stores
import { configureRouter } from './create-router5' // Router5
// import { Layout } from './pages/Layout'
import { RouterProvider, Route } from 'react-router5'
import { Root } from './pages/Root'
import { Layout } from './pages/Layout'

// Global Styles
// import './styles/index.css'
// import './styles/tailwind.css'
// import './styles/base/_reset.sass';
// import './styles/base/_commons.sass';

const router = configureRouter()

const RouterProviderHack: any = RouterProvider

const appStore = {}

// Provider will add your pass the stores instances using context
export const App = (
  <Provider appStore={appStore}>
    <RouterProviderHack router={router}>
      <Layout />
      {/* <Route>
        {({ route }) => <Root route={route} />}
      </Route> */}
    </RouterProviderHack>
  </Provider>
)

// Render the entire app when the router starts
router.start((err, state) => {
  ReactDOM.render(App, document.getElementById('root'))
})
