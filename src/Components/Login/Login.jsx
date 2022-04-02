import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const LoginPage = () => {
  return (
    <div>
      <h1>Hello, Welcome again</h1>
      <div className="login-container">
        <div className="login-content">
          <h2>Log in</h2>
          <form>
          <p>Enter your email</p>
          <input className="input" type="text" placeholder="name@mail.com"/>
          <p>Enter your password</p>
          <input className="input" type="password" placeholder="****" />
          <button className='btn d-grey btn-auth' >Submit</button>
          <p className="t-cntr">or</p>
          </form>
          <p>New here? <Link className=" link sign-up-link" to="/Signup">Sign-up</Link></p>
        </div>
      </div>
    </div>
  )
}

export { LoginPage }