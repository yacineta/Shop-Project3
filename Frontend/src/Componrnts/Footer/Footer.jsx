import React from 'react'
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-logo'>
            <img src=' ' alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='Footer-linke'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                 <FaInstagram/>  
            </div>
            <div className="footer-icon-container">
                 <IoCallSharp/>  
            </div>
            <div className="footer-icon-container">
                 <FaFacebookMessenger/>  
            </div>
        </div>
        <div className="footer-copyrigt">
            <hr/>
            <p>Copyright @ 2023   SHOOPER CO, ltd</p>
        </div>

    </div>
  )
}

export default Footer
