import React from 'react'
import './Header.css'
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className="header-container">
        <Link to="/home">Fake Store</Link>
         {/* What hfref will i use for above a tag considering I'm using react components? */}
        <IoCartOutline className="cart-icon"/>
    </div>
  )
}

export default Header