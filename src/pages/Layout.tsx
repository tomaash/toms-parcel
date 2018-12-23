import * as React from 'react'
import { Route } from 'react-router5'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Main } from './Main'
import { AppMenu } from '~components/AppMenu'

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
