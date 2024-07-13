import React from 'react'
import Sniper from '../../componenets/sniper/Sniper'
import { singleProduct } from '../../data'

const Product = () => {
  return (
    <div>
       <Sniper {...singleProduct} />
    </div>
  )
}

export default Product
