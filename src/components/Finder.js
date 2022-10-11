
import React, {useEffect, useState}from 'react';





const Finder = () => {
  const [results, setResult] = useState([])
  const [searchParam] = useState(["id", "name"]);
  const [q, setQ] = useState("");
  useEffect(() => {

    fetch("http://localhost:3001/listings")
      .then((resp) => resp.json())
      .then(results=> setResult(results.filter(()=>{
       return {searchParam}
      })))
  }, [])


  function handleSearch(event){
   event.preventDefault();
    setResult(event.target.value)
}


  return (
    <div>
   <form id="search-form">
                <input id="search" handleSearch={handleSearch} placeholder="Search ..." type="text"
                value={q}
                onChange={(event) => setQ(event.target.value)}/>
                 
                
                <button class="Btn" onClick={(result) =>result}>< i class="fa fa-search"/></button>
            </form>
    </div>
  )
}

export default Finder ;
