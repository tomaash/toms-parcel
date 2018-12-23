import * as React from 'react'
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from 'react-testing-library'

import { Bar } from '../Bar'
// import { startPolly, wrappedRender } from 'app/utils/testUtils'

afterEach(cleanup)

describe('JestPollyExample component', () => {
  // startPolly(__dirname)

  test('JestPollyExample waits for load', async () => {
    const { container, getByTestId, asFragment } = render(<Bar />)
    // const loadedDiv = await waitForElement(
    //   () => getByTestId('loaded-id-example'),
    //   { container }
    // )
    expect(container.textContent).toMatchSnapshot()
    expect(asFragment()).toMatchSnapshot()
  })
})
