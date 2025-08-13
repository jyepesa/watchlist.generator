import React from "react"
import MovieItem from "./MovieItem"

function WatchList({list, removeMovie, hidden, toggle}) {
  return (
    <div className={hidden && toggle ? "watchlist-v" : "watchlist"}>
      {list.map(movie => (        
        <MovieItem title={movie.title} description={movie.overview} poster= {movie.poster_path} key={movie.id}>
          <button className="remove-button" onClick={() => removeMovie(movie)}>-</button>
        </MovieItem>
      ))}
    </div>
  )
}

export default WatchList
