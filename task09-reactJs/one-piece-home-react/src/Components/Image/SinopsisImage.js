import React from 'react'
import image from '../../../src/Images/image-home.svg'

const SinopsisImage = ({opacity}) => {
  return (
    <img className="sinopsis-img" src={image} alt="sinopsis" style={{opacity}}/>
  )
}

export default SinopsisImage