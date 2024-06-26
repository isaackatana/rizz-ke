import React from 'react'

function Login() {
  return (
    <div className="login-page">
        <div className="login">
            <h2>Login</h2>
            <form action="/login">
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <div>
                    <div></div>
                    <button>Login</button>
                </div>
            </form>
            <div className="switch">
                <p>Don't have an account</p><a href="">Register</a>
            </div>
        </div>
        <div className="register">
            <h2>Register</h2>
            <form action="/register">
                <input type="text" placeholder="Name"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <div>
                    <div></div>
                    <button>Register</button>
                </div>
            </form>
            <div className="switch">
                <p>Already have an account</p><a href="">Login</a>
            </div>
        </div>
    </div>
  )
}

export default Login