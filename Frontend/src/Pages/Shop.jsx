import React from 'react'
import Hero from '../Componrnts/Hero/Hero'
import Popular from '../Componrnts/Popular/Popular'
import Offers from '../Componrnts/Offers/Offers'
import NewCollections from '../Componrnts/NewCollections/NewCollections'
import NewsLetter from '../Componrnts/NewsLetter/NewsLetter'



const Shop = () => {
  return (
    <div className='Shop'>
        <Hero/>
       <Popular/>
       <Offers/>
       <NewCollections/>
       <NewsLetter/>
      
    </div>
  )
}

export default Shop
