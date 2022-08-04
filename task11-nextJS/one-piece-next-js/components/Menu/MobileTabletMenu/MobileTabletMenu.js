import React, { useState} from 'react'
import MenuLinks from '../MenuLinks/MenuLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import MobileTabletLanguage from './MobileTabletLanguage';
import mobileTabletMenuStyle from '../../../styles/mobileTabletMenu.module.scss';

const MobileTabletMenu = () => {

  const [open, setOpen] = useState(false);
  
  const hamburgerIcon = <FontAwesomeIcon icon={faBars} onClick={
    () => {
      setOpen(!open);
    }
  } className={mobileTabletMenuStyle.hamburgerIcon} />;
  const closeIcon = <FontAwesomeIcon icon={faX} onClick={
    () => {
      setOpen(!open);
    }
  } className={mobileTabletMenuStyle.closeIcon}  />;

  return (
    <div className={mobileTabletMenuStyle.mobileTabletMenu}>
      <nav>
        {open ? closeIcon : hamburgerIcon }
        {open && <MenuLinks/>}
      </nav>
      {open && <MobileTabletLanguage/>}
      <img src="/one-piece-logo.svg" alt="one piece logo"/>
    </div>
  )
}

export default MobileTabletMenu;