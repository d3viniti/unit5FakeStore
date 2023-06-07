import React, { useContext} from 'react'
import './Header.css'
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext';


function Header() {
//declare cartItems to use for displaying # of items inCart
const {cartItems} = useContext(CartContext);
//do I need state for this below to show how many are in the cart?
const [inCart, setInCart] = React.useState(false);

  return (
    <div className="header-container">
        <Link to="/">Fake Store</Link>
         {/* What hfref will i use for above a tag considering I'm using react components? */}
        {/* <Link to='/checkout'> */}
        <Link to='/checkout'>
          <div className="cart-icon-container">
            <IoCartOutline className="cart-icon"/>
            <p className='cart-length'>{cartItems.length}</p>
          </div>
        </Link>  
    </div>
  )
}

export default Header