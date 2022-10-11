import React,{useState, useEffect}from 'react'
import Search from './Search'

const ListingContainer = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        fetch("http://localhost:3001/listingsq=" + query)
        .then(response => response.json())
        .then(data => setData(data))
      }, [query]);

      function handleSearch(e) {
        e.preventDefault();
        setQuery(e.target.value)
       }
    
  return (
    <div>
     <Search handleSearch={handleSearch} /> 
    </div>
  )
}

export default ListingContainer
