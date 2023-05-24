import React from 'react'
import {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'


function Homepage() {

  //create category buttons, map out with https://fakestoreapi.com/products/categories


  //create state for items, after axios retrieving data
  const [items, setItems] = useState([])//set useState to an empty array
  const [categories, setCategories] = useState([]) //state for categories
  //https://fakestoreapi.com/products

  //I need to make api call when the page loads, so useEffect
  //also want the categories to appear once the homepage loads https://fakestoreapi.com/products/categories
  useEffect(
    ()=>{
      axios.get('https://fakestoreapi.com/products/categories')
      .then(res=>{
        console.log(res.data)//make sure that I'm getting the categories
        setCategories(res.data) //okay, now I need to map this data into p tags

      })
      .catch(err=>console.log(err))
      

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

      //make an onClick function to run an api call to get items in specific category

    },[]//empty array means one run time when page loads
  )

  return (
    <div className='homepage-container'>
      <div className='cat-container'>
        {
          //need to set a unique key for each category
        categories.map(item=><p key={item} onClick={()=>filterCat({item})}>{item.charAt(0).toUpperCase()
          + item.slice(1)}</p>)
        }
      </div>
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


function filterCat({item}){
  axios.get(`https://fakestoreapi.com/products/category/${item}`)
  .then(res=>{
    console.log(res.data) //console.log to ensure correct data 
    //now I need to map out the data
    setItems(res.data)
  })
  .catch(err=>console.log(err))

  console.log({item})
  //now I need to connect the endpoint to sort by categories in this onClick function
}
}

//add an all categories button

export default Homepage