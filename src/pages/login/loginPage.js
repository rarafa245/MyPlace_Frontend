import React, { useEffect } from 'react'
import { AssideInfo } from '../../components'
import LoginForm from './loginForm'
import { StartNavBar } from '../../components'

function LoginPage(props) {
  /* Loggin Page Component
      :props - history (BrowserRouter)
    */

    
  useEffect(() => {

    const elem = document.querySelector('body');
    elem.style.background = `linear-gradient(to left, #4db6ac 41.7%, #F8F8F8 30%)`
  }, [])

  return (
    <div id="login" className="row">

      <div id="loginForm" className="col s12 m7">
        <StartNavBar />
        <LoginForm {...props}/>
      </div>

      <div id="loginInfo" className="col s12 m5">
        <AssideInfo />
      </div>
      
    </div>
  )
}

export default LoginPage
