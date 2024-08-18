import React from 'react'
import './Breadcrum.css'
import { FaLocationArrow } from "react-icons/fa6";

const Breadcrum = (props) => {
    const {product} =  props;
   
  return (
    <div className='Breadcrum'>
        Home <FaLocationArrow/>
        Shop <FaLocationArrow/>
        {product.category} <FaLocationArrow/>
        {product.name} <FaLocationArrow/>
    </div>
  )
}

export default Breadcrum