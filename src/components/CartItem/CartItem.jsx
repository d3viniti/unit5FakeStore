import React, { useContext } from 'react';
import './CartItem.css' ;
import { BsTrash } from "react-icons/bs";


export default function CartItem({product}) {
   
    
    // React.useEffect(
    //     ()=>{
    //       //is this product already inCart?
    //       setInCart(cartItems.find(item=>item.id===product.id))
    //     }, [cartItems]
    //   )

    return (
    <div className='cart-item'>
        <div className='cart-item'>
            <img src={product?.image}/>
            <p className='title'>{product?.title}</p>
            <p className='price'>{product?.price + '€'}</p>
            <p className='quantity'>1</p>
            {<BsTrash/>}
        </div>
    </div>
  )
}