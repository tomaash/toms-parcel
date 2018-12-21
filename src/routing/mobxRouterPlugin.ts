import { PluginFactory } from 'router5';

const noop = () => { }

export const makeMobxPlugin = (routes, store) => {
  const routesHash = routes.reduce(
    (acc, item) => ({ ...acc, [item.name]: item })
    , {}
  )

  const mobxPlugin: PluginFactory = () => {
    return {
      onTransitionStart(toState, fromState) {
        console.log('start!')
        store.currentRoute = routesHash[toState.name]
      },
      onTransitionSuccess(toState) {
        console.log(routes)
        console.log(toState.name)
        store.state = toState
        console.log(toState)
      }
    }
  }
  return mobxPlugin
}

