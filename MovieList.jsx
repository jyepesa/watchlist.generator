import React from "react"
import MovieItem from "./MovieItem"

function MovieList({ movies, addMovie, hidden}) {
  return (
    <div className={hidden ? "hidden" : "movie-container"}>   
      {movies.map(movie => (        
        <MovieItem title={movie.title} description={movie.overview} poster= {movie.poster_path} key={movie.id}>
          <button className="add-button" onClick={() => addMovie(movie)}>+</button>
        </MovieItem>
      ))}
    </div>
  )
}

export default MovieList
