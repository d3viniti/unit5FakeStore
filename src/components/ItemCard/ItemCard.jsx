import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function ItemCard({item}) {
  //create variable for hearts
  const inCart = true;

function seeDetails(){
  console.log("appear details page! Voila!")
}

  return (
    <div onClick={()=>seeDetails} className='item-card'>
        <img src={item?.image} />
        <div className="item-card-text">
          <p className="title">{item?.title}</p>
          <p className="price, white">{item?.price + '€'}</p>
          <a href={`/details/${item?.id}`} className="open-details">See Details</a>
          {
            inCart?
            <FaHeart className='heart-icon'/>
            :
            <FaRegHeart className='heart-icon'/>
          }
        </div>
    </div>
  )
}

export default ItemCard