

import React, {useEffect, useState}from 'react';







const Search = () => {

  const [query, setQuery] = useState(''); 
     
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/listingsq=" + query)
    .then(response => response.json())
    .then(data => setData(data))
  }, [query]);

 
  
  
  const handleSearch = event => {
    event.preventDefault();
    setQuery(event.target.value);
  }


  return (
    <div>
   <form id="search-form">
                <input id="search" placeholder="Search ..." type="text" 
                handleSearch={handleSearch}
                 />
                  <button className="Btn" >< i class="fa fa-search"/></button>
            </form>
          
    </div>
  )


}
export default Search ;
