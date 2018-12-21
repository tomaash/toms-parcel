import { observable, computed } from 'mobx'
import { Route, State, Router } from 'router5';

export class RouterStore {
  static instance: RouterStore
  static getInstance() {
    return this.instance || (this.instance = new RouterStore())
  }
  router: Router
  @observable state: State

  @computed get stateLevels() {
    return this.state && this.state.name.split('.')
  }
  @computed get rootState() {
    return this.stateLevels && this.stateLevels[0]
  }

}
