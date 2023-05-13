import React from 'react'
import './Header.css'
import { IoCartOutline } from "react-icons/io5";


function Header() {
  return (
    <div className="header-container">
        <a href="">Fake Store</a>
         {/* What hfref will i use for above a tag considering I'm using react components? */}
        <IoCartOutline className="cart-icon"/>
    </div>
  )
}

export default Header