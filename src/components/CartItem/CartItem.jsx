import React, { useContext } from 'react';
import './CartItem.css' ;
import { CartContext } from '../../contexts/CartContext/CartContext';
// import { FaRegTrashCan } from "react-icons/fa6";

export default function CartItem({product}) {
    const [inCart, setInCart] = React.useState(false);
    const {cartItems, addProduct, removeProduct} = useContext(CartContext);
    
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
            <p>TrashcanIcon</p>
        </div>
    </div>
  )
}
