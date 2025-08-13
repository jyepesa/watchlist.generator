import React from "react"

function SearchBar({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value} placeholder="Enter movie"/>
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar
