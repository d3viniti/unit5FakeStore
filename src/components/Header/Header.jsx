import React from 'react'
import './Header.css'
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className="header-container">
        <Link to="/">Fake Store</Link>
         {/* What hfref will i use for above a tag considering I'm using react components? */}
        <Link to='/checkout'>
        <IoCartOutline className="cart-icon"></IoCartOutline> 
        </Link>
        {/* if cart.length > 0 then button should display cart.length 
        else, the button should not display a number 
        cart.length > 0
        "cart.length"
        :
        display just cart icon*/}
    </div>
  )
}

export default Header