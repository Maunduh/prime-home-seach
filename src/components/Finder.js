
import React, {useEffect, useState}from 'react';



const Finder = () => {
  const [Listings] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {

    fetch("http://localhost:3001/listings?q=" + query)
      .then((resp) => resp.json())
      .then(Listings=> (Listings))
  }, [query])


  function handleSearch(event){
    setQuery(event.target.value)
}
  return (
    <div>
   <form id="search-form">
                <input id="search" handleSearch={handleSearch} placeholder="Search ..." type={"text"}/>
                <button class="Btn">< i class="fa fa-search"/></button>
            </form>
    </div>
  )
}

export default Finder;
