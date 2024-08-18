import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { MdOutlinePlaylistRemove } from "react-icons/md";


const CartItems = () => {
    
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
                 


        <div className="cartitems-format-main">
                 <p className="">Products</p>
                 <p className="">Title</p>
                <p className="">Price</p>
                <p className="">Quamtity</p>
                <p className="">Total</p>
                <p className="">Remove</p>
                </div>
                <hr/>
        
        {all_product.map((e) => {
            if(CartItems[e.id]> 0)
            {
                return <div>
                   <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt='' className='cartitems-format-image'/>
                  <p className="">{e.name}</p>
                   <p className="">${e.new_price}</p>
                  <button className="cartitems-quantity">{CartItems[e.id]}</button>
                  <p className="">${e.new_price*CartItems[e.id]}</p>
                  <i className='cartitems-remove' onclick={()=>{removeFromCart(e.id)}}> <MdOutlinePlaylistRemove/> </i>
                 </div>
                <hr/>
              </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p className="">Subatal</p>
                        <p className="">{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <h3 >Total</h3>
                        <h3 >${0}</h3>
                    </div>
                </div>
                <button className='cartitems-total-bt'>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promo-cod">
                <p>If you have a promotion code, Entre it here </p>
                <div className="cartitems-promoBox">
                    <input type='' placeholder='Promo Code'/>
                    <button className='cartitems-promoBox-bt'>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItems