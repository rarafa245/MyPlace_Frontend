import React from 'react'

function LoginForm(){

  return (
    <div className="container mt-1 mt-m-3">
      <form className="col s12 mb-1">
        <h5>Log In</h5>

        <div className="input-field center-align">
          <input placeholder="Email" name="email" type="email" className="validate" />
          <input placeholder="Password" name="Password" type="password" className="validate" />
        </div>

          <button className="btn waves-effect waves-light mt-1 teal dark-2" type="submit" name="action">
            Submit
          </button>
          <a className="right m-1">Forgot Account?</a>

      </form>
    </div>
  )
}

export default LoginForm
