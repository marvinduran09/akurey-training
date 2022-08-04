import React from 'react'
import Head from 'next/head'
import MobileTabletMenu from './MobileTabletMenu/MobileTabletMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';

const Menu = () => {
  return (
    <div className='container'>
      {/* <Head></Head> */}
      <MobileTabletMenu/>
      <DesktopMenu/>
    </div>
  )
}

export default Menu