import * as React from 'react'
import { ConnectedLink } from 'react-router5'

export function Menu(props) {
  return (
    <nav>
      <ConnectedLink activeClassName="activeLink" routeName="foo">
        Foo
      </ConnectedLink>

      <ConnectedLink activeClassName="activeLink" routeName="bar">
        Bar
      </ConnectedLink>
    </nav>
  )
}
