import * as React from 'react'
import { Route } from 'react-router5'
import { AppMenu } from '../components/AppMenu'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Main } from './Main'

@observer
export class Layout extends React.Component {
  @observable cnt = 0

  render() {
    return (
      <div>
        <AppMenu />
        <Main />
      </div>
    )
  }
}
