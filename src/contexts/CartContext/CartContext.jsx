import {useState, createContext, useEffect} from 'react'
// import { CartContext } from './CartContext';
//creat the context
export const CartContext = createContext();

export default function CartContextProvider(props){
    //create state to hold items in cart
    const [cartItems, setCartItems] = useState([])


    //function to add item to card
    const addItem = (itemToAdd) =>{
        //when setting up a func that's connected to something
        //verify its connection before proceeding
        console.log('adding', itemToAdd)
        //add this item to state
        let newItems = [...cartItems, itemToAdd]
        console.log(newItems)
        //this console.log to be sure we can add to the empty array
        //now, store in state
        setCartItems(newItems)
    }
    //because above func will be the onclick in itemCard, must add
    //it as a value in the CartContext.Provider tags

    return(
        
        <CartContext.Provider value={{cartItems, addItem}}>
            {props.children}
        </CartContext.Provider>
    )
}