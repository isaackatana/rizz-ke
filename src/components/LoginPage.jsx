import React from 'react'

function LoginPage() {
  return (
    <>
    <div className="login-page">
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <div>
            <div></div>
            <button>Login</button>
          </div>
        </form>
      </div>
      <div className="register">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <div>
            <div></div>
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage