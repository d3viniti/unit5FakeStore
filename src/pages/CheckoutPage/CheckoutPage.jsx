import React, {useContext} from 'react'
import './CheckoutPage.css'
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from '../../components/CartItem/CartItem';


function CheckoutPage() {
  //show all the items in the cart
  //where are they? in the cartcontext
   //we need to access the global context
  //NOTE: use { } NOT []
  const {cartItems} = useContext(CartContext);
  return (
    <div className="cart-container">
    <div className="cart-headings">
      <p>Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Remove</p>
    </div>
    <div className="cart-items-container">
      <div className="cart-items">
        {
          cartItems.length > 0 ?
        cartItems.map(item=><CartItem 
                    key={item.id}
                    product={item} />)
                          :
                          <p>No Items in Cart</p>
        }
        </div>
      </div>
      <button >Checkout</button>
    </div>
  )
}

export default CheckoutPage