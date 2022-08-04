import React from 'react'
import ReadAllRedLess from '../ReadAllRedLess'
import mobileTabletSinopsisStyle from '../../../styles/mobileTabletSinopsis.module.scss'
import sinopsisImageStyle from '../../../styles/sinopsisImage.module.scss'

function MobileTabletSinopsis() {

  return (
    <div className={mobileTabletSinopsisStyle.sinopsis}>
      <img className={sinopsisImageStyle.sinopsisImg} src="/image-home.svg" alt="one piece home"/>
      <ReadAllRedLess/>
    </div>
  )
}

export default MobileTabletSinopsis