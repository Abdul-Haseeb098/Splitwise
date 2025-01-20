import React from 'react'
import Mininavbar from './Mininavbar'
import './css/Loginbar.css'
import Footer_mini from './Footer_mini'
const Login = () => {
  return (
    <>
    <Mininavbar />
    <main>
      <div className="container">
        <div className="row">
          <div className="form">
            <div className="form_content">
              <label htmlFor="Email">Email</label>
              <input type="text" />
              <label htmlFor="password">Password</label>
              <input type="text" />
              <button>Log in</button>
              <div className="forget_password">
                <a href="#">Forget your password?</a>
              </div>
              <div className="space">or</div>
              <div className="google_signin">
                <a href="#"><img src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" alt="" /><span>Sign in with Google</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer_mini />
    </>
  )
}

export default Login
