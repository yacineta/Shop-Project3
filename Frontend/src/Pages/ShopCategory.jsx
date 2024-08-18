import React, { useContext } from 'react'
 import './Css/ShopCategory.css'
 import { IoIosArrowDropdownCircle } from "react-icons/io"
import { ShopContext } from '../Context/ShopContext';
import Item from '../Componrnts/Item/Item';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='ShopCategory'>
        <img className='Shop-Category-baner' src={props.banner} alt=''/>
        <div className='ShopCategory-indexSort'>
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by  <IoIosArrowDropdownCircle/>
            </div>
        </div>
        <div className="shopcategoryProducts">
            {all_product.map((item,i) => {
                if(props.category===item.category ) {
                     
                    return <Item
                    key={i} id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    />
                 
                }
                else{
                    return null;
                }

            })}
        </div>
        <div className="shopcategoy-loadmore">
            Explore 
        </div>
    </div>
  )
}

export default ShopCategory