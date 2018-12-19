import * as React from 'react'
import { MainWrapper } from './Main'
import { NavLink } from 'react-mobx-router5'
export class Layout extends React.Component {
  render() {
    return <div>
      <div>
        <h4>Header</h4>
        <NavLink
          className="hello"
          linkClassName="goodbye"
          routeName="foo">
          Foo
        </NavLink>
        <NavLink
          className="hello"
          linkClassName="goodbye"
          routeName="bar">
          Bar
        </NavLink>
      </div>
      <div>
        <h4>Body</h4>
        <MainWrapper />
      </div>
    </div>
  }
}