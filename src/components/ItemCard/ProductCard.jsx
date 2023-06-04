import React, { useContext } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext/CartContext';

function ProductCard({product}) {
  //create variable for hearts
  // const inCart = false;
  const [inCart, setInCart] = React.useState(false);

   //use context for global state
  //NOTE: use { } NOT []
  const {cartItems, addItem} = useContext(CartContext);// what is this for?
//above we added the onclick func to add/remove items from cart

  //we need a useEffect that is triggered by any change inCart changes
  React.useEffect(
    ()=>{
      // console.log('update')
      //is this item in the cart?
      inCart.find(product=>product.id === product.id) //am confused what to put for this last value
    }, [cartItems]
  )


function seeDetails(){
  console.log("appear details page! Voila!")
}

  return (
    <div onClick={()=>seeDetails} className='product-card'>
        <img src={product?.image} />
        <div className="product-card-text">
          <p className="title">{product?.title}</p>
          <p className="price, white">{product?.price + '€'}</p>
          <a href={`/details/${product?.id}`} className="open-details">See Details</a>
          {
            inCart?
            <FaHeart className='heart-icon'/>
            :
            <FaRegHeart className='heart-icon'
            onClick={()=>addItem(product)}/>
          }
        </div>
    </div>
  )
}

export default ProductCard