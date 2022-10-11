import React from "react";
import Hero from "./Hero";



function NavBar({ onChangePage }) {

  function handleLinkClick(e) {
    e.preventDefault()
    onChangePage(e.target.pathname)
  }
  return (
    <div  style={{ backgroundColor: "orangered", textAlign: "center"
      }}>
        <Hero />
        
    
  
   <div className="NavBar" style={{
     backgroundColor: "white", 
     textAlign: "center", 
     width:"100%",
     display: "flex",  
    
    flexDirection: "column",
    padding: "1rem"

    
     
      }}> 
      
      <nav style={{
      
      display: "inline-flex",
       justifyContent: "space-evenly",
       marginLeft: "100 px"

      }}>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/about">Listings</a>
            <a onClick={handleLinkClick} href="/Adminpage">Admin</a>
        </nav>
   
  </div>


     
    </div>
  );
}

export default NavBar;