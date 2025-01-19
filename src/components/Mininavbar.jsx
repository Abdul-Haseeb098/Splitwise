import React from 'react'
import { NavLink } from 'react-router-dom'
import './Mininavbar.css'
const Mininavbar = () => {
  return (
    <div>
         <div>
      <nav>
        <div className="logo">
          <img src="https://secure.splitwise.com/favicon.ico" alt="Splitwise Logo" />
          <h1>Splitwise</h1>
        </div>
        <div className="nav_btns">
          <NavLink to="/loginpage" className="login">
            Login
          </NavLink>
          <NavLink to="/Signup" className="signup">
            Sign up
          </NavLink>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Mininavbar
