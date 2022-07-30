import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

function Search() {
  return (
    <div className="search">
        <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
        <input className='search__input' type='text' placeholder='Search Characters, Islands or Objects'></input>
    </div>
  )
}

export default Search