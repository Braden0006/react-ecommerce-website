import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <GiHamburgerMenu />
        <AiOutlineShoppingCart />
    </div>
  )
}