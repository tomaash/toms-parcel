import * as React from 'react'
import { Root } from './Root'
import { Route } from 'react-router5'
import { AppMenu } from '../components/AppMenu'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Button from '@material-ui/core/Button'
import { Main } from './Main'

@observer
export class Layout extends React.Component {
  @observable cnt = 0

  render() {
    return (
      <div>
        <AppMenu />
        {/* <Button onClick={() => { this.cnt++ }} color='primary' variant='contained'>add</Button>
        {this.cnt} */}
        <Main />
        {/* <Route>{({ route }) => <Root route={route} />}</Route> */}
      </div>
    )
  }
}
