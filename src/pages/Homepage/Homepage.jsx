import React from 'react'
import {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'


function Homepage() {
  //create state for items, after axios retrieving data
  const [items, setItems] = useState([])//set useState to an empty array

  //https://fakestoreapi.com/products

  //I need to make api call when the page loads, so useEffect
  useEffect(
    ()=>{
      console.log('homepage loaded')
      //call api to get items
      axios.get(`https://fakestoreapi.com/products`)
      .then(res=>{
        console.log(res.data)//make sure you're getting the data you want first
        //then store this data in state after you create state
        setItems(res.data)
        //input the data above that you confirmed is correct
      }

      )
      .catch(err=>console.log(err))

    },[]//empty array means one run time when page loads
  )

  return (
    <div className='homepage-container'>
      <div className='items-container'>
        {//add the unique key to make .map happy
          items.map(product=><ItemCard 
            key={product.id}
            //below prop is what goes in curly brace of ItemCard()
            item={product} />)
        }
      </div>
    </div>
  )
}

export default Homepage