import React from 'react'
import MobileTabletSinopsis from '../Sinopsis/MobileTabletSinopsis/MobileTabletSinopsis'
import DesktopSinopsis from '../Sinopsis/DesktopSinopsis/DesktopSinopsis'
import Search from '../Search/Search'
import Characters from '../Characters/Characters'
import Islands from '../Islands/Islands'
import MistObjects from '../MistObjects/MistObjects'
import "./Home.css";

function Home() {
  return (
    <main className='container'>
      <MobileTabletSinopsis/>
      <DesktopSinopsis/>
      <Search/>
      <Characters/>
      <Islands/>
      <MistObjects/>
    </main>
  )
}

export default Home