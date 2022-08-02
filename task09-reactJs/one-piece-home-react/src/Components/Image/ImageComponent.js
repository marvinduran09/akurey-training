import React from 'react'

function ImageComponent({className, alt, src}) {
  return (
    <img src={src} alt={alt} className={className}></img>
  )
}

export default ImageComponent