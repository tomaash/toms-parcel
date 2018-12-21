import * as React from 'react'
import { ConnectedLink } from 'react-router5'
import { observer, inject } from 'mobx-react'
import { RouterStore } from '../stores/RouterStore';
import { Top1 } from './Top1/Top1';

@inject('routerStore')
@observer
export class Main extends React.Component<{ routerStore?: RouterStore }> {
  render() {
    const { rootState } = this.props.routerStore
    console.log(rootState)
    switch (rootState) {
      case 'foo': return <h1>Foo</h1>
      case 'bar': return <h1>Bar</h1>
      case 'top1': return <Top1 />
      default: return <div />
    }
  }
}
