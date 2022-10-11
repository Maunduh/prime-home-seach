import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home  from "./components/Home"
import Listings from './components/Listings';
import Footer from './components/Footer';
import Adminpage from './Adminpage';


function App() {
  const [page, setPage] = useState("/")
  function getCurrentPage() {
    switch(page) {
        case "/":
            return <Home />
        case "/Listings":
            return <Listings />
        case "/Adminpage":
            return <Adminpage/>
        default:
            return <h1>404 not found</h1>
    }
}
  return (
    <>
   
   <NavBar onChangePage={setPage} />
            {getCurrentPage()}
     
    <Listings />
    <Footer />
          
     
    
    </>
  );
}

export default App;
