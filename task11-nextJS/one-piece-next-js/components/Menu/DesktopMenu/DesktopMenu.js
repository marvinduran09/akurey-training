import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks';
import DesktopLanguage from './DesktopLanguage';
import desktopMenuStyle from "../../../styles/desktopMenu.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={desktopMenuStyle.desktopMenu}>
      <img src="/one-piece-logo.svg" alt="one piece logo"/>
      <MenuLinks/>
      <DesktopLanguage/>
    </nav>
  )
}

export default DesktopMenu;