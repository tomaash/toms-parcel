import * as React from 'react'
import { Provider } from 'mobx-react'

import { render } from 'react-testing-library'

import JssProvider from 'react-jss/lib/JssProvider'

const path = require('path')

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

export function PrettifyClassNames(props) {
  return (
    <JssProvider generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  )
}

export const startPolly = dirname => {
  const { Polly } = require('@pollyjs/core')
  const { setupPolly } = require('setup-polly-jest')
  const FetchAdapter = require('@pollyjs/adapter-fetch')
  const FSPersister = require('@pollyjs/persister-fs')
  const XHRAdapter = require('@pollyjs/adapter-xhr')

  Polly.register(FetchAdapter)
  Polly.register(XHRAdapter)
  Polly.register(FSPersister)

  setupPolly({
    adapters: ['xhr', 'fetch'],
    recordIfMissing: true,
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(dirname, '__recordings__'),
      },
    },
  })
}

export const WrapDefaultProvider = props => (
  <Provider>{props.children}</Provider>
)

export const wrappedRender = (node, options?) => {
  return render(
    <PrettifyClassNames>
      <WrapDefaultProvider>{node}</WrapDefaultProvider>
    </PrettifyClassNames>,
    options
  )
}
