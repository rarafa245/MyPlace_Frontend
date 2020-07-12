import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginPage, MapPage, LogoutPage } from './pages'

function App() {

    return (
      <Router>
          <Switch>
            <Route exact path={'/'} component={LoginPage}/>
            <Route exact path={'/home'} component={MapPage}/>
            <Route exact path={'/logout'} component={LogoutPage}/>
          </Switch>
      </Router>
    )
}

export default App
