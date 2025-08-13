import React, { useState } from "react"
import MovieList from "./MovieList"
import WatchList from "./WatchList"
import SearchBar from "./SearchBar"
import ErrorMessage from "./ErrorMessage"

function MovieSearch(){
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([])
  const [watchList, setWatchList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isHidden, setIsHidden] = useState(false)
  const [toggle, setToggle] = useState(false)

  const apiKey = "b4be1b4dbdc2c1d8fd68727929dc69be"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=` 

  const handleSearch = (input) => {
    if(!query) {
      setError("Please eneter a valid search term")
      setResult([])
      return
    }
    if(loading) {
      setError("Loading movies...")
    }
    fetch(url + query).then(res => {
      if(!res.ok) {
        setLoading(false)
        throw new Error("It wasn't possible to fulfill your request")
      }
      return res.json() 
    }).then(data => {
      setError("")
      setLoading(false)
      setResult(data.results)
      if (data.results.length === 0) {
        setError("No movies found that match your criteria")
      }
      console.log(data.results)
    }).catch(err => {
      setLoading(false)
      setError("Error getting the data " + err)
    })
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(query)
    setQuery("")
  }
  const addMovies = (movie) => {
    setWatchList(prev => {
      if(prev.some(m => m.id === movie.id)) {
        return prev
      } else {
        return [...prev, movie]
      }
    })
  }
  const removeMovies = (movie) => {
    setWatchList(prev => prev.filter(m => m.id !== movie.id))
  }

  const displayWatchlist = (e) => {
    setToggle(true)
    setIsHidden(!isHidden)
    if(!isHidden) {
      e.target.innerText = "Show Search Results"
    } else {
      e.target.innerText = "Show Watchlist"
    }
  }

  return (
    <div>
      <h1>Movie watchlist generator</h1>
      <h2>Create a watchlist with your favorite movies!</h2>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} value={query}/>
      <button className="toWatchlist" onClick={displayWatchlist}>Show Watchlist</button>
      <ErrorMessage message={error}/>
      <div className="container">
        <MovieList movies={result} addMovie={addMovies} hidden={isHidden} />
        <WatchList list={watchList} removeMovie={removeMovies} hidden={isHidden} toggle={toggle}/>
      </div>
    </div>  
  )
}

export default MovieSearch
