import * as React from 'react'
import { ConnectedLink } from 'react-router5'
import { observer, inject } from 'mobx-react'
import { RouterStore } from '~routing/RouterStore'
import { Mid1 } from './Mid1/Mid1'
import { Mid2 } from './Mid2/Mid2'

@inject('routerStore')
@observer
export class Top1 extends React.Component<{ routerStore?: RouterStore }> {
  renderSubcomponent() {
    const { stateNameLevels } = this.props.routerStore
    const level = stateNameLevels[1]
    switch (level) {
      case 'mid1':
        return <Mid1 />
      case 'mid2':
        return <Mid2 />
      default:
        return <div />
    }
  }
  render() {
    return (
      <div>
        <h1>Top1</h1>
        <nav>
          <ConnectedLink activeClassName="activeLink" routeName="top1.mid1">
            Mid1
          </ConnectedLink>

          <ConnectedLink activeClassName="activeLink" routeName="top1.mid2">
            Mid2
          </ConnectedLink>
        </nav>
        {this.renderSubcomponent()}
      </div>
    )
  }
}
