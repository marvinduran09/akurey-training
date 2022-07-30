import React, { useState} from 'react'
import MenuLinks from '../MenuLinks/MenuLinks';
import "./MobileTabletMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import LogoImage from '../../Image/LogoImage';
import Language from '../Language/Language';
import { changeHamburgerMenuDisplayMode } from '../../../Slice/HamburgerMenuDisplayModeSlice'
import { useDispatch } from 'react-redux';

const MobileTabletMenu = () => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  
  const hamburgerIcon = <FontAwesomeIcon icon={faBars} onClick={
    () => {
      setOpen(!open);
      dispatch(changeHamburgerMenuDisplayMode(!open));
    }
  } className="hamburgerIcon" />;
  const closeIcon = <FontAwesomeIcon icon={faX} onClick={
    () => {
      setOpen(!open);
      dispatch(changeHamburgerMenuDisplayMode(!open));
    }
  } className="closeIcon"  />;

  return (
    <div className="mobile-tablet-menu">
      <nav>
        {open ? closeIcon : hamburgerIcon }
        {open && <MenuLinks/>}
      </nav>
      {open && <Language/>}
      <LogoImage/>
    </div>
  )
}

export default MobileTabletMenu;