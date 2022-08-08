import Head from 'next/head'
import Menu from '../components/Menu/Menu'
import DesktopSinopsis from '../components/Sinopsis/DesktopSinopsis/DesktopSinopsis'
import Search from '../components/Search/Search'
import Characters from '../components/Characters/Characters'
import Islands from '../components/Islands/Islands'
import MistObjects from '../components/MistObjects/MistObjects'
import Footer from  '../components/Footer/Footer'
import MobileTabletSinopsis from '../components/Sinopsis/MobileTabletSinopsis/MobileTabletSinopsis'

export default function Home() {
  return (
    <div>
      <Head>
        <title>One Piece Home</title>
        <meta name="description" content="One Piece Home"/>
      </Head>
      <Menu/>
      <MobileTabletSinopsis/>
      <DesktopSinopsis/>
      <Search/>
      <Characters/> 
      <Islands/>
      <MistObjects/>
      <Footer/>
    </div>
  )
}
