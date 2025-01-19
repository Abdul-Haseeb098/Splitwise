import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div>
       <div className="box">
        <div className="box_1">
        <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
        </div>
        <div className="box_2 mt-5">
            <h2>INTRUDUCE YOURSELF</h2>
            <h1>Hi there! My name is</h1>
            <input type="text" />
            <div className="grps_btn mb-3">
                <a href="#" className='signup'>Sign me up</a>
                <div>or</div>
                <div className='google_btn'>
                    <img src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" alt="" /><span>Sign up with google</span>
                </div>
            </div>
            <a href="#" className='line'>By signing up, you accept the Splitwise Terms of Service.</a>
        </div>
    </div>
    </div>
  )
}

export default Signup
