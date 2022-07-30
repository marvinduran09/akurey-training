import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks';
import "./DesktopMenu.css";
import LogoImage from '../../Image/LogoImage';
import Language from '../Language/Language';

const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <LogoImage/>
      <MenuLinks/>
      <Language/>
    </nav>
  )
}

export default DesktopMenu;