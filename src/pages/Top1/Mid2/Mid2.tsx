import * as React from 'react'
import { ConnectedLink } from 'react-router5'
import { observer, inject } from 'mobx-react'
import { RouterStore } from '~routing/RouterStore'
import { Btm1 } from './Btm1/Btm1'
import { Btm2 } from './Btm2/Btm2'

@inject('routerStore')
@observer
export class Mid2 extends React.Component<{ routerStore?: RouterStore }> {
  renderSubcomponent() {
    const { stateNameLevels } = this.props.routerStore
    const level = stateNameLevels[2]
    switch (level) {
      case 'btm1':
        return <Btm1 />
      case 'btm2':
        return <Btm2 />
      default:
        return <div />
    }
  }
  render() {
    return (
      <div>
        <h1>Mid2</h1>
        <nav>
          <ConnectedLink
            activeClassName="activeLink"
            routeName="top1.mid2.btm1"
          >
            Btm1
          </ConnectedLink>

          <ConnectedLink
            activeClassName="activeLink"
            routeName="top1.mid2.btm2"
          >
            Btm2
          </ConnectedLink>
        </nav>
        {this.renderSubcomponent()}
      </div>
    )
  }
}
