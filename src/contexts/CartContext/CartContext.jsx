import {useState, createContext, useEffect} from 'react'
import { CartContext } from './CartContext';
//creat the context
export const CartContext = createContext()

export default function CartContextProvider(props){
    //create state to hold items in cart
    const [cartItems, setCartItems] = useState([])

    return(
        <CartContext.Provider value={{cartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}