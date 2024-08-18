import React from 'react'
import './Hero.css'
import { FaHandMiddleFinger } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='Hero'>
       <div className='hero-left'>
        <h2>Neew Arrivals Only</h2>
        <div className='hero-hand-icon'>
            <p>new</p>
            <i className='hero-flip-icon'>
                < FaHandMiddleFinger/>
            </i>
            

        </div>
        <p>collections</p>
        <p>for everyon</p>
        <div className='hero-latest-btn'>
            <i>Lastest Collection</i>
            <FaArrowAltCircleLeft/>

        </div>

       </div>
       <div className='hero-right'>
        <img className='hero-right-imag' src= "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>

       </div>
    </div>
  )
}

export default Hero