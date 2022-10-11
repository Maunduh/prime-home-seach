import React, {useEffect, useState}from 'react'
import Listings from './components/Listings';
import Login from './components/Login';


const Adminpage = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem(authenticated);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
  // Redirect
  } else {

    return (
     <div>
     <Login />
     </div>
    );
  }
};













export default Adminpage




 
  

  
   
  
  

  
  




