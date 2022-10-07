
import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";


function Listings() {
  
  const [listings, setListings] = useState([])

 

  useEffect(() => {
    fetch("http://localhost:3001/listings")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setListings(data)
    })
  }, [])
 


 
  

  
   return(
    <>
   <div
    className= 'cards'style={{
      alignSelf:"center",
      padding:"10px"
    }}>
      <div className="row">
    {listings.map((listing)=>{
    return< ListingCard listing={listing} key={listing.id}/>
      })}
      </div>
    </div>
    </> 
      
  
  )

  }
  
   


  

export default Listings;