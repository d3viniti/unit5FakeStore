import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {
  return (
    <div className='item-card'>
        <img src={item?.image} />
        <p>{item?.title}</p>
        <a href="#">See Details</a>
    </div>
  )
}

export default ItemCard