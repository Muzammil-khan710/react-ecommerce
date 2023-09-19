import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth-context'
import "./Signup.css"

const Signup = () => {

  const { signUpFunc } = useAuth()

  const [newUser, setNewUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : ""
  })
  
  return (
    <section>
        <h1>Signup to continue  </h1>
        <div className="signup-container">
        <div className="login-content">
          <h2>Sign up</h2>
          <form>
          <p>Enter your first name</p>
          <input className="input" placeholder=" first Name"  onChange={(e)=> {setNewUser({...newUser, firstName: e.target.value})} }/>           
          <p>Enter your last name</p>
          <input className="input" placeholder=" last Name"  onChange={(e)=> {setNewUser({...newUser, lastName: e.target.value})} }/>  
          <p>Enter your email</p>
          <input className="input" type="text" placeholder="name@mail.com"  onChange={(e)=> {setNewUser({...newUser, email: e.target.value})} }/>
          <p>Enter your password</p>
          <input className="input" type="password" placeholder="****"  onChange={(e)=> {setNewUser({...newUser, password: e.target.value})} }/>
          <button className='btn d-grey btn-auth' onClick={(e) => signUpFunc(e, newUser)}>Submit</button>
          </form>
          <p className="t-cntr">or</p>
          <p>Already a customer? <Link className="link login-link" to="/Login">Log in</Link></p>
        </div>
    </div>
    </section>
  )
}

export { Signup }