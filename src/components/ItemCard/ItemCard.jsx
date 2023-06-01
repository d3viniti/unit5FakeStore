import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {

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
        </div>
    </div>
  )
}

export default ItemCard