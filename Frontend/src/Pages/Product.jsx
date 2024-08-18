import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Componrnts/Breadcrum/Breadcrum';
import ProductDisply from '../Componrnts/ProductDisply/ProductDisply';
import DescriptionBox from '../Componrnts/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Componrnts/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div className='Product'>
        <Breadcrum  product={product}/>
        <ProductDisply product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product