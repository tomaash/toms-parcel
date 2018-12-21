import { observable, computed } from 'mobx'
import { Route, State, Router } from 'router5';

export class RouterStore {
  static instance: RouterStore
  static getInstance() {
    return this.instance || (this.instance = new RouterStore())
  }
  router: Router
  @observable state: State

  @computed get stateName() {
    return this.state.name
  }

  @computed get stateNameLevels() {
    return this.stateName.split('.')
  }
  @computed get rootStateName() {
    return this.stateNameLevels[0]
  }

}
