import React from 'react'
import './Products.css'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product_icon_1 from '../../assets/product_icon_1.png'
import product_icon_2 from '../../assets/product_icon_2.png'
import product_icon_3 from '../../assets/product_icon_3.png'

const Products = () => {
  return (
    <div className='products'>
        <div className='product'>
            <img src={product1} alt="" />
            <div className='caption'>
                <img src={product_icon_1} alt="" />
                <p>pastries</p>
            </div>
        </div>
        <div className='product'>
            <img src={product2} alt="" />
            <div className='caption'>
                <img src={product_icon_2} alt="" />
                <p>sourdough bread</p>
            </div>
        </div>
        <div className='product'>
            <img src={product3} alt="" />
            <div className='caption'>
                <img src={product_icon_3} alt="" />
                <p>freshly milled flour</p>
            </div>
        </div>
    </div>
  )
}

export default Products