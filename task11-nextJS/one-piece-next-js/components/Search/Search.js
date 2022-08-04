import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import search from '../../styles/search.module.scss';

function Search() {
  return (
    <div className="container">
      <div className={search.search}>
        <FontAwesomeIcon className={search.searchIcon} icon={faMagnifyingGlass} />
        <input className={search.searchInput} type='text' placeholder='Search Characters, Islands or Objects'></input>
    </div>
    </div>
    
  )
}

export default Search