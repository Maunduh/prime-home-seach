import React from 'react'
import '../App.css';

const ListingCard = ({listing}) => {
  return (
    <div className='card'
      key={listing.id}
      style={{
        Height:"300px",
        width:"25%",
      }}>
      <h2>{listing.name}</h2> 
      <img src={listing.image} />
      
      <p>price: {listing.price}</p>
    </div>
  )
}

export default ListingCard
