import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth-context'
import "./Auth.css"
import AuthBanner from './AuthBanner'

const Signup = () => {

  const { signUpFunc } = useAuth()

  const [newUser, setNewUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : ""
  })
  
  return (
    <section className='auth-wrapper'>
      <AuthBanner/>
        <div className="auth-container">
          <h2>Sign up</h2>
          <form className='form'>
          <label className='form-label'>Enter your first name
          <input className="form-input" placeholder="First Name"  onChange={(e)=> {setNewUser({...newUser, firstName: e.target.value})} }/>           
          </label>
          <label className='form-label'>Enter your last name
          <input className="form-input" placeholder="Last Name"  onChange={(e)=> {setNewUser({...newUser, lastName: e.target.value})} }/>  
          </label>
          <label className='form-label'>Enter your email
          <input className="form-input" type="text" placeholder="name@mail.com"  onChange={(e)=> {setNewUser({...newUser, email: e.target.value})} }/>
          </label>
          <label className='form-label'>Enter your password
          <input className="form-input" type="password" placeholder="****"  onChange={(e)=> {setNewUser({...newUser, password: e.target.value})} }/>
          </label>
          <button className='auth-btn' onClick={(e) => signUpFunc(e, newUser)}>Submit</button>
          </form>
          <Link className="auth-link" to="/Login">Already a customer</Link>
        </div>
    </section>
  )
}

export { Signup }