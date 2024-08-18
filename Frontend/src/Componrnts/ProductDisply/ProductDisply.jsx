import React, { useContext } from 'react'
import './ProductDisply.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisply = (props) => {
    const { product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='ProductDisply'>
        <div className="product-disply-left">
            <div className="product-disply-imge-list">
                <img className='imag-image' src={product.image} alt=''/>
                <img className='imag-image' src={product.image} alt=''/>
                <img className='imag-image' src={product.image} alt=''/>
                <img className='imag-image' src={product.image} alt=''/>
            </div>
            <div className="product-disply-imge">
                <img className='main-imag' src={product.image} alt=''/>
            </div>
        </div>
        <div className="product-disply-rghit">
            <h1>{product.name}</h1>
            <div className="productdisply-stars">
               <MdOutlineStarPurple500/>
               <MdOutlineStarPurple500/>
               <MdOutlineStarPurple500/>
               <MdOutlineStarPurple500/>
               < MdStarOutline/>               
                <p>(122)</p>
            </div>
            <div className="rghit-prices">
                <div className="rghit-pric-old">${product.new_price}</div>
                <div className="rghit-pric-new">${product.old_price} </div>
            </div>
            <div className="rghit-descreption">
                A lightweight, usually Knitted, garment  worn on the head for protection
                 or as a fashion statment . the term can alos refer to a type of hat
            </div>
            <div className="rghit-size">
                <h1>Select Size</h1>
                <div className="rghit-sizes">
                    <div className="siz">S</div>
                    <div className="siz">M</div>
                    <div className="siz">L</div>
                    <div className="siz">Xl</div>
                    <div className="siz">XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add TO Cart</button>
            <p className="rghit-gategory">Category: {product.category}</p>
            <p className="rghit-gategory">tags:<span>Modern,latest</span></p>
        </div>
    </div>
  )
}

export default ProductDisply