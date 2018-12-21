import { Route } from 'router5';

const canActivate = (router) => (toState, fromState) => {
  return false;
}

export const routes: Route[] = [
  {
    name: 'foo',
    path: '/',
  },
  {
    name: 'bar',
    path: '/bar',
  },
  {
    name: 'top1',
    path: '/top1',
    forwardTo: 'top1.mid1',
    children: [
      {
        name: 'mid1',
        path: '/mid1'
      }, {
        name: 'mid2',
        path: '/mid2',
        children: [
          {
            name: 'btm1',
            path: '/btm1'
          }, {
            name: 'btm2',
            path: '/btm2',
          }
        ]
      }
    ]
  }
]

// export const routesHash = routes.reduce(
//   (acc, item) => ({ ...acc, [item.name]: item })
//   , {}
// )

