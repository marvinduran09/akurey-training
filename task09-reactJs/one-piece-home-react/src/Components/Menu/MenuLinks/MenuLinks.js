import React from 'react'
import { NavLink } from "react-router-dom";
import "./MenuLinks.css"

function MenuLinks() {
  return (
    <div>
      <div className='menu__options'>
        <NavLink className='menu__option' to="/">Home</NavLink>
        <NavLink className='menu__option' to="/characters">Characters</NavLink>
        <NavLink className='menu__option' to="/islands">Islands</NavLink>
        <NavLink className='menu__option' to="/mistObject">Mist Objects</NavLink>
      </div>
    </div>
       
  )
}

export default MenuLinks;