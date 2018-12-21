import * as React from 'react'
import { ConnectedLink } from 'react-router5'
import { observer, inject } from 'mobx-react'
import { RouterStore } from '../stores/RouterStore'
import { Top1 } from './Top1/Top1'
import { Foo } from './Foo'
import { Bar } from './Bar'

@inject('routerStore')
@observer
export class Main extends React.Component<{ routerStore?: RouterStore }> {
  render() {
    const { rootStateName } = this.props.routerStore
    switch (rootStateName) {
      case 'foo':
        return <Foo />
      case 'bar':
        return <Bar />
      case 'top1':
        return <Top1 />
      default:
        return <div />
    }
  }
}
