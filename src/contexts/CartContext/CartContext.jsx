import {useState, createContext, useEffect} from 'react'
// import { CartContext } from './CartContext';
//creat the context
export const CartContext = createContext();

export default function CartContextProvider(props){
    //create state to hold items in cart
    const [cartItems, setCartItems] = useState([])


    //function to add item to card
    const addProduct = (productToAdd) =>{
        //when setting up a func that's connected to something
        //verify its connection before proceeding
        console.log('adding', productToAdd)
        //add productToAdd to cartItems array
        let newCartItems = [...cartItems, productToAdd]
        // console.log(newCartItems)
        //this console.log to be sure we can add to the empty array
        //now, store in state
        setCartItems(newCartItems)
        console.log(cartItems)
        // then we need to update local storage
    }
    //because above func will be the onclick in ProductCard, must add
    //it as a value in the CartContext.Provider tags

    const removeProduct = (productId) =>{
        console.log('remove', productId)
        //keep all items with id that doesn't match that which
        //you want to remove
        let newCartItems = cartItems.filter(item=>item.id !== productId)
        setCartItems(newCartItems)
        //need to update local storage
        localStorage.setItem('cartItemsList', JSON.stringify(newCartItems))
    }
    //don't need to pass the entire object for above func, 
    //just need the id to remove the product

    useEffect(
        ()=>{
            //check local storage to initialize state
            const storedCartItems = localStorage.getItem('cartItemsList')
            if(storedCartItems){
                setCartItems(JSON.parse(storedCartItems))
            }
        }, [] //run once page loads
    )

    useEffect(
        ()=>{
            //save current state to local storage
            localStorage.setItem('cartItemsList', JSON.stringify(cartItems))
        }, [cartItems] //run once cartItems changes
    )
    return(
        //we add the above func into the value so that it will be globally available
        <CartContext.Provider value={{cartItems, addProduct, removeProduct}}>
            {props.children}
        </CartContext.Provider>
    )
}