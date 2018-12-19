import * as React from 'react'
export function Root({ route }) {
  if (!route) {
    return null
  }

  if (route.name === 'foo') {
    return <h1>Home</h1>
  }

  if (route.name === 'bar') {
    return <h1>Profile</h1>
  }
}
