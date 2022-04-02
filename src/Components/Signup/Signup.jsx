import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

const SignupPage = () => {
  return (
    <div>
        <h1>Signup to continue  </h1>
        <div className="signup-container">
        <div className="login-content">
          <h2>Sign up</h2>
          <form>
          <p>Enter your name</p>
          <input className="input" placeholder="Name" />  
          <p>Enter your email</p>
          <input className="input" type="text" placeholder="name@mail.com"/>
          <p>Enter your password</p>
          <input className="input" type="password" placeholder="****" />
          <button className='btn d-grey btn-auth'>Submit</button>
          </form>
          <p className="t-cntr">or</p>
          <p>Already a customer? <Link className="link login-link" to="/Login">Log in</Link></p>
        </div>
    </div>
    </div>
  )
}

export { SignupPage }