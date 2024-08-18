import React from 'react'
import './Css/LoginSinup.css'

const LoginSinup = () => {
  return (
    <div className='LoginSinup'>
        <div className="loginSinup-container">
            <h1>Sign Up</h1>
            <div className='loginsinup-fields'>
                <input type='text' placeholder='Username'/>
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an Account<span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''  />
                <p>By continuing , i agree to terms of use privacy poliyc</p>

            </div>
        </div>
    </div>
  )
}

export default LoginSinup