import { observable, computed } from 'mobx'
import { Route, State } from 'router5';

export class RouterStore {
  static instance: RouterStore
  static getInstance() {
    return this.instance || (this.instance = new RouterStore())
  }
  @observable state: State
  @observable currentRoute: Route | any
  @computed get stateLevels() {
    console.log(this.state)
    // console.log(this.state.name)
    return this.state && this.state.name.split('.')
  }
  @computed get rootState() {
    return this.stateLevels && this.stateLevels[0]
  }

}
