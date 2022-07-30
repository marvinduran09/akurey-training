import React from 'react'
import UsaImage from '../../Image/UsaImage';
import SpainImage from '../../Image/SpainImage';

function Language() {
  return (
    <div className='menu__option-languages'>
        <div className='menu__option-english'>
          <p className="menu__option-english-text d-lg-none">English</p>
          <UsaImage/>
        </div>
        <div className='menu__option-spanish'>
          <p className="menu__option-spanish-text d-lg-none">Spanish</p>
          <SpainImage/>
        </div>
      </div>
  )
}

export default Language