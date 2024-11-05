import React from 'react'
import  logo from '../Assets/RiM-Logo.png'
import '../Pages/TechnicianPage.css'

const TechnicianPage = () => {
  return (
    <>
    <div className="login-container">
    <div className="loginForm">
      <h3>Welcome</h3>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="number" />
      </div>
      <button className="login-button">Submit</button>
    </div>
    <div className="login-banner">
      <img src={logo} alt="Logo" className="rim-logo" />
    </div>
  </div>

  </>
  )
}

export default TechnicianPage