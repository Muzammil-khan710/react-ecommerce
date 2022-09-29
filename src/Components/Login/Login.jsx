import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth-context'
import "./Login.css"

const LoginPage = () => {

  const { loginFunc } = useAuth()

  const [userEmail, setUserEmail] = useState("")

  const [userPassword, setUserPassword] = useState("")

  return (
    <div>
      <h1>Hello, Welcome again</h1>
      <div className="login-container">
        <div className="login-content">
          <h2>Log in</h2>
          <form>
          <p className=''>Enter your email</p>
          <input className="input" type="text" value={userEmail} placeholder="name@mail.com" onChange={(e) => setUserEmail(e.target.value)}/>
          <p>Enter your password</p>
          <input className="input" type="password" value={userPassword} placeholder="****"  onChange={(e) => setUserPassword(e.target.value)}/>
          <button className='btn d-grey btn-auth' onClick={(e) => { loginFunc(e, userEmail, userPassword);  console.log(`${userEmail} and ${userPassword}`)} }>Submit</button>
          <p className="t-cntr">or</p>
          </form>
          <button onClick={() => { setUserEmail("testuser@gmail.com"); setUserPassword("testuser@123"); }}>Test credentials</button>
          <p>New here? <Link className=" link sign-up-link" to="/Signup">Sign-up</Link></p>
        </div>
      </div>
    </div>
  )
}

export { LoginPage }