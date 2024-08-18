import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import { RxDropdownMenu } from "react-icons/rx";

function Navbar() {

    const [menu,setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
        
    
    }
  return (
    <div className='navbar'>
        <div className='nav-log'>
            <img src='' alt=''/>
            <p>Shooper</p>
        </div>
        <div className='nav-dropdown' onClick={dropdown_toggle}><RxDropdownMenu/></div>
        <img src='' alt=''/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>            {menu ==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>         {menu ==="Men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>Women </Link>  {menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>        {menu ==="kids"?<hr/>:<></>}</li>
            <div className='nav-login-cart'>
                 <Link to = '/login'><button>Login</button></Link>
                 <Link to = '/cart'><i className='nav-login-cart-img'><FaCartShopping/></i> </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>


            </div>
        </ul>

    </div>
  )
}

export default Navbar