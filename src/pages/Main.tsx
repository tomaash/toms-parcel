import * as React from 'react'
import { routeNode, RouteView } from 'react-mobx-router5'
import routes from '../routes'

const routeNodeName = '' // '' because root node

class Main extends React.Component<{ route: any }> {
  render() {
    const { route } = this.props
    // This will inject 'route' to the selected child component
    return (
      <RouteView route={route} routes={routes} routeNodeName={routeNodeName} />
    )
  }
}

// HOC to wrap a route node components
export const MainWrapper = routeNode(routeNodeName)(Main)
