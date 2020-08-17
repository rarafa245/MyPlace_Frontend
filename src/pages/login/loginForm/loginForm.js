import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { SubmitButton } from '../../../components'
import { axiosLogin } from '../../../services'

function LoginForm(props){

  // input states
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => location.reload()
  }, []) 


  const handleSubmit = (event) => {

    event.preventDefault()
    setLoading(true)
    
    const LOGINDATA = new FormData(event.target)
    
    axiosLogin(LOGINDATA)
      .then(response => {
        setLoading(false)
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
                  name="username"
                  value={username}
                  onChange={ e => setUsername(e.target.value) }
                  type="text" 
                  />

          <input  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                  type="password" 
                  />
        </div>

        <SubmitButton message='Entrar' />
        <a className="right m-1">Forgot Account?</a>

      </form>

      {
        (loading) ? ( <div className="progress col s6 offset-s3">
                        <div className="indeterminate"></div>
                      </div>
                    )
                  : ""
      }

    </div>
  )
}

export default LoginForm
