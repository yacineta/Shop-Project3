import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive offer in  your Email </h1>
        <p>Subscribe to our newletter and  sty Updated </p>
        <div className=''>
            <input type='email' placeholder='Your email address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter