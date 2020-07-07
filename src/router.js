import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginPage, MapPage } from './pages'

function App() {

    return (
      <Router>
          <Switch>
            <Route exact path={'/'} component={LoginPage}/>
            <Route exact path={'/home'} component={MapPage}/>
          </Switch>
      </Router>
    )
}

export default App
