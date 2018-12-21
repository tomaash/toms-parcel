import * as React from 'react'
import { Top1 } from './Top1/Top1';
export function Root({ route }) {
  console.log(route)
  if (!route) {
    return null
  }

  if (route.name === 'foo') {
    return <h1>Home</h1>
  }

  if (route.name === 'bar') {
    return <h1>Profile</h1>
  }
  if (route.name === 'top1') {
    return <Top1 />
  }
}
