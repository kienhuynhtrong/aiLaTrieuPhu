import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <div className='background'>
        <Switch>
          <Route excat path="/" component={Login}></Route>
        </Switch>
      </div>
    )
  }
}
export default App