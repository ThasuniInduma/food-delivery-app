import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <img onClick={() => (setShowLogin(false))} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            <input type="text" placeholder='Your name' required />
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By counting, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Log in"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")} >Click here</span></p>
        :<p>Already had an account? <span onClick={()=>setCurrentState("Log in")} >Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
