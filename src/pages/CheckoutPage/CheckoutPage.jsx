import React, {useContext, useState, useEffect} from 'react'
import './CheckoutPage.css'
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


function CheckoutPage() {
  //show all the items in the cart
  //where are they? in the cartcontext
   //we need to access the global context
  //NOTE: use { } NOT []
  const {cartItems} = useContext(CartContext);

  //create state for for cart total
  //assign it to useEffect
  const [cartTotal, setCartTotal] = useState([])
    

  //create state to control modal
  const [isOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      height: '60vh'
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

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
      <button 
      onClick={()=>setIsOpen(true)}>Checkout</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Order Successful!"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <div className="modal-content">
          <p>
          Your Order was successful!



Check your email for the order confirmation. Thank you for shopping with Fake Store!
          </p>
          <Link to='/'>
            I need to create an onClick function that will delete the items in local storage/
            <button className='home-btn'>Return to Main Screen</button>
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default CheckoutPage