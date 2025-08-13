import React from "react"

function MovieItem({title, description, poster, key, children}) {
  const baseUrl = "https://image.tmdb.org/t/p/"
  const size = "w92"
  return (
    <div id={key} className="single-movie">
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="poster" src={baseUrl + size + poster} alt={`${title} poster`}/>
      {children}
    </div>
  )
}

export default MovieItem
