import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='homepage-container'>
        <div className='homepage-title-container'>
            <span className='homepage_title'>Succulents from around the globe</span>
            <span className='homepage_title'>shipped right to your door</span>
        </div>
        <button className='homepage_button'>Shop Now</button>
    </div>
  )
}
