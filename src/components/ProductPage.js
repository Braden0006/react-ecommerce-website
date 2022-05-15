import React from 'react'
import './ProductPage.css'
import ProductPageCard from './ProductPageCard'

export default function ProductPage() {
  return (
    <div className='product-container' id='shop'>
        <h2 className='product_title'>Shop</h2>
        <ProductPageCard />
    </div>
  )
}
