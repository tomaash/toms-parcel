import * as React from 'react'
import { ConnectedLink } from 'react-router5'
import { observer, inject } from 'mobx-react'
import { RouterStore } from '../stores/RouterStore'

@inject('routerStore')
@observer
export class AppMenu extends React.Component<{ routerStore?: RouterStore }, {}> {
  render() {
    const { stateName } = this.props.routerStore
    return <div>
      {stateName}<br />
      <nav>
        <ConnectedLink activeClassName="activeLink" routeName="foo">
          Foo
        </ConnectedLink>

        <ConnectedLink activeClassName="activeLink" routeName="bar">
          Bar
        </ConnectedLink>
        <ConnectedLink activeClassName="activeLink" routeName="top1">
          Top1
        </ConnectedLink>

      </nav>
    </div>
  }
}
