import React from "react";
import Hero from "./Hero";
import { NavLink} from "react-router-dom"


function NavBar() {
  return (
    <div  style={{ backgroundColor: "orangered", textAlign: "center"
      }}>
        <Hero />
        
    
   <nav class="d-flex justify-content-center navbar navbar-expand-lg  bg-dark " >
   <div className="NavBar" style={{
     backgroundColor: "white", 
     textAlign: "center", 
     width:"100%",
    
     
      }}> 
    <ul class="navbar-nav mr-auto" style={{
      textAlign: "right",
      justifyContent: "right",
      
    }
      
    }>
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Finder</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Listings
        </a>
       
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Login</a>
      </li>
    </ul>

 
   
  </div>
</nav>

     
    </div>
  );
}

export default NavBar;