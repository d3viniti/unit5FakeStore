import React from 'react'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'

function ProductDetails() {
    //This page shows the details for a specific product
    //How do I know which one?
    //The Id is in the url - how do we get it out of the url?
    //we use hook useParams - must import it
    const {productId} = useParams()
    
    
    //create state to hold product data
    const [product, setProduct] = React.useState('')
    //test endpoint https://fakestoreapi.com/products/6
    //get data when page loads using useEffect
    //always test useEffect before adding more data
    React.useEffect(
        ()=>{
            //console.log('loaded')
            //make an api call to get product data, using axios
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                console.log(res.data)
                //what do I do with this data?
                //need to create state to store it
                setProduct(res.data)
            })
            .catch(err => console.log(err))

        }, [] //runs once page loads
    )


  return (
    <div className="details-container">
        <img src={product?.image} />
        <div className='text-btn'>
            <h2>{product?.title}</h2>
            <h3>{product?.price + '€'}</h3>
            <p className='description'>{product?.description}</p>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails