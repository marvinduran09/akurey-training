import React from 'react'
import "./Menu.css";
import MobileTabletMenu from './MobileTabletMenu/MobileTabletMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';

const Menu = () => {
  return (
    <div className='Menu container'>
      <MobileTabletMenu/>
      <DesktopMenu/>
    </div>
  )
}

export default Menu