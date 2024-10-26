import React from 'react'
import '../Pages/Login.css'
import  logo from '../Assets/RiM-Logo.png'

const LoginPage = () => {
  return (
    <>
      <div className="login-container">
      <div className="login-form">
        <h3>Welcome Back</h3>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <a href="#" className="forgot-password">Forget Password ?</a>
        <button className="login-button">Sign in</button>
        <p className="otp-login">
          Sign - in using <a href="#">OTP</a>
        </p>
      </div>
      <div className="login-banner">
        <img src={logo} alt="Logo" className="rim-logo" />
      </div>
    </div>
  
    </>
  )
}

export default LoginPage