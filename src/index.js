import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import App from "./app"
import CssBaseline from '@material-ui/core/Paper';

const Index = () => {
  return (
    <Fragment>
      <CssBaseline/>
      <App/>
    </Fragment>
  )
}
ReactDOM.render(<Index />, document.getElementById("root"))