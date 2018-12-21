import * as React from 'react'
import Button from '@material-ui/core/Button'
// import { fill, clone } from 'lodash-es'
export class Foo extends React.Component {
  render() {
    // console.log(clone({ a: 1 }))
    // console.log(fill([1, 2, 3], 'a'))
    return (
      <div>
        <h1 className="text-green">FOO23</h1>
        {/* <AppBar>asd</AppBar> */}
        <Button color="primary" variant="contained">
          haha
        </Button>
      </div>
    )
  }
}
