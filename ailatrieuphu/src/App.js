import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Game from './pages/Game'
import './styles/backGround.css'

class App extends Component {
  render() {
    return (
      <div className='background'>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
        </Switch>
      </div>
    )
  }
}
export default App