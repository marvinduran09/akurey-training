import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks';
import "./DesktopMenu.css";
import Language from '../Language/Language';
import logoImage from '../../../Images/one-piece-logo.svg'
import Image from '../../Image/ImageComponent'

const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <Image src={logoImage} className="sinopsis__logo" alt="logo"/>
      <MenuLinks/>
      <Language/>
    </nav>
  )
}

export default DesktopMenu;