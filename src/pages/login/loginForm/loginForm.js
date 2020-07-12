import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { axiosLogin } from '../../../services'

function LoginForm(props){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event) => {

    event.preventDefault()
    
    const LOGINDATA = new FormData(event.target)
    
    axiosLogin(LOGINDATA)
      .then(response => {
        if (response.status) {
          localStorage.setItem('JWT', response.JWT)
          localStorage.setItem('userId', response.userId)
          localStorage.setItem('username', response.username)
          localStorage.setItem('email', response.email)
          props.history.push({pathname: '/home'})
        }
        else {
          M.toast({html: response.message})
        }
      })
  }

  return (
    <div className="container mt-1 mt-m-3">

      <h5>Log In</h5>

      <form onSubmit={handleSubmit} className="col s12 mb-1">

        <div className="input-field center-align">
          <input  placeholder="Username"
                  id="psername"
                  name="username"
                  value={username}
                  onChange={ e => setUsername(e.target.value) }
                  type="text" 
                  />

          <input  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                  type="password" 
                  />
        </div>

        <button className="btn waves-effect waves-light mt-1 teal dark-2" 
                type="submit" 
                name="action">
          Submit
        </button>
        <a className="right m-1">Forgot Account?</a>

      </form>

    </div>
  )
}

export default LoginForm
