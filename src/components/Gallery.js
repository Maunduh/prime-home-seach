
import React from 'react';

const Gallery = () => {
  return (
    <figure className="figure">
    <img className="img-responsive" src={`/server/${image}`} alt={title} />
    <figcaption className="figure-caption text-center text-small">{title}</figcaption>
  </figure>
     
  
  )
}

export default Gallery 
