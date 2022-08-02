import React from 'react'
import SinopsisImage from '../../Image/SinopsisImage'
import "./MobileTabletSinopsis.css"
import ReadAllRedLess from '../ReadAllRedLess'
import { useSelector } from 'react-redux';

function MobileTabletSinopsis() {

  const hamburgerMenuDisplayModeState = useSelector(state => state.hamburgerMenuDisplayMode);

  return (
    <div className='sinopsis'>
        {hamburgerMenuDisplayModeState.displayHamburgerMenuOptions ? <SinopsisImage opacity={0}/>: <SinopsisImage/>}
        <ReadAllRedLess/>
    </div>
  )
}

export default MobileTabletSinopsis