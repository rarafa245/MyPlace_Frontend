import React, { useState } from 'react'

function LoginPage() {

  const [message, setMessage] = useState('Ola Mundo! kkkkk')

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )

}

export default LoginPage
