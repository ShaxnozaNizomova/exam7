import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className='search'>
      <div className='search__items'>
        <input className='search__input' type="search" placeholder='Search query'/>
        <button className='search__btn'>Search</button>
      </div>
    </div>
  )
}

export default Search
