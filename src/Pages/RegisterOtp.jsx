import React, { useState, useEffect } from 'react';
import '../Pages/RegisterOtp.css'; 
import  logo from '../Assets/RiM-Logo.png'

function OtpVerification() {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="OtpContainer">
      <div className="otp-box">
        <h2>OTP Verification</h2>
        <p>Enter your verification code we just sent to your number</p>
        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <p className="timer">Resend 0:{timer.toString().padStart(2, '0')}</p>
        <button className="verify-button">Verify</button>
        <p className="resend-text">
          Didn’t receive code? <span className="resend-link">Resend</span>
        </p>
      </div>
      <div className="logo-box">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default OtpVerification;
