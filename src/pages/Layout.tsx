import * as React from 'react'
import { Root } from './Root'
import { Route } from 'react-router5'
import { Menu } from '../components/Menu'
export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Route>{({ route }) => <Root route={route} />}</Route>
      </div>
    )
  }
}
