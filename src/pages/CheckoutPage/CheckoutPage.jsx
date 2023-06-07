import React, {useContext, useState, useEffect} from 'react'
import './CheckoutPage.css'
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from '../../components/CartItem/CartItem';


function CheckoutPage() {
  //show all the items in the cart
  //where are they? in the cartcontext
   //we need to access the global context
  //NOTE: use { } NOT []
  const {cartItems} = useContext(CartContext);

  //create state for for cart total
  //assign it to useEffect
  const [cartTotal, setCartTotal] = useState([])
    

  useEffect(
    //total needs to be calculated every time theres is a change in CartTotal
    ()=>{
      let total = 0;
      for(let i=0; i < cartItems.length; i++){
        total += cartItems[i].price;
      }
      console.log(total);
      setCartTotal(total);
    }, [] //initialize total when page loads
  )

  useEffect(
    //total needs to be calculated every time theres is a change in CartTotal
    ()=>{
      let total = 0;
      for(let i=0; i < cartItems.length; i++){
        total += cartItems[i].price;
      }
      console.log(total);
      setCartTotal(total);
    }, [cartItems] //initialize total when there is a change in CartItems
  )

  return (
    <div className="cart-container">
    <div className="cart-headings">
      <div className='item-heading'>
        <p>Item</p>
      </div>
      <div className='price-quant-remove'>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
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
      <p>Total {cartTotal}€</p>
      <button >Checkout</button>
    </div>
  )
}

export default CheckoutPage