import React, { useContext } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext/CartContext';

function ProductCard({product}) {
  //create variable for hearts, we need to change this to state
  const [inCart, setInCart] = React.useState(false);
  //controls which icons will show
   //we need to access the global context
  //NOTE: use { } NOT []
  const {cartItems, addProduct, removeProduct} = useContext(CartContext);
  //context is array of objects you want to buy
 

  // we need a useEffect that is triggered by any change in inCart
  React.useEffect(
    ()=>{
      //is this product already inCart?
      setInCart(cartItems.find(item=>item.id===product.id))
    }, [cartItems]
  )

  return (
    <div className='product-card'>
        <img src={product?.image} />
        <div className="product-card-text">
          <p className="title">{product?.title}</p>
          <p className="price, white">{product?.price + '€'}</p>
          <Link to={`/details/${product?.id}`} className="open-details">See Details</Link>
          {
            inCart?
            <FaHeart className='heart-icon' 
            onClick={()=>removeProduct(product.id)}/>
            :
            <FaRegHeart className='heart-icon'
            onClick={()=>addProduct(product)}/>
            //we need to pass the object that has all product info in it to the
            //onclick func
          }
        </div>
    </div>
  )
}

export default ProductCard