import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <div className='Offers'>
       <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST STELLERS PRODUCTS</p>
        <button>Check Now</button>
       </div>
       <div className='offers-right'></div>
       <img className='offers-img' src='https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
    </div>
  )
}

export default Offers