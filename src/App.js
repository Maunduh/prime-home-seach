import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home  from "./components/Home"

import Listings from './components/Listings';
import Footer from './components/Footer';
// import Login from './components/Login';

function App() {
  return (
    <>
    {/* <div> */}
    {/* <NavBar/> */}
   {/* <Switch>
   <Route component={Home} exact={true} path="/"/>
    <Route component={Finder} exact={true} path="/Finder"/>
     <Route component={Listings} exact={true} path="/Listings"/> */}
    {/* <Route component={Login} exact={true} path="/Login"/> */}

  {/* </Switch>
  </div> */}
    <NavBar />
    <Home />
    
    <Listings />
    <Footer />
        
          
     
    
    </>
  );
}

export default App;
