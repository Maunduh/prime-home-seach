
import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";
import ListingContainer from "./ListingContainer";


function Listings() {
      

 
   const [listings, setData] = useState([])
   

  useEffect (()=>{
    fetch("http://localhost:3001/listings")
    .then(r=>r.json())
    .then(data=>setData(data))
  },[]) 

  

return (
    <>
    
   <ListingContainer />
   <div className= 'cards'style={{
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