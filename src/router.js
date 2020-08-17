import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginPage, MapPage, LogoutPage } from './pages'

function App() {

    return (
      <Router history={history}>
          <Switch>
            <Route exact path={'/'} component={LoginPage}/>
            <PrivateRoute exact path={'/home'} component={MapPage}/>
            <PrivateRoute exact path={'/logout'} component={LogoutPage}/>
          </Switch>
      </Router>
    )
}


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} 
      render = { props => (
          (localStorage.getItem('JWT')) ? (<Component {...props} />) : (props.history.push('/'))
      )}
  />
)

export default App
