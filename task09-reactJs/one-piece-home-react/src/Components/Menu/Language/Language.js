import React from 'react'
import usaImage from '../../../Images/usa-flag.svg';
import spainImage from '../../../Images/spain-flag.svg';
import Image from '../../Image/ImageComponent';

function Language() {
  return (
    <div className='menu__option-languages'>
        <div className='menu__option-english'>
          <p className="menu__option-english-text d-lg-none">English</p>
          <Image src={usaImage} className="usa" alt="usa"/>
        </div>
        <div className='menu__option-spanish'>
          <p className="menu__option-spanish-text d-lg-none">Spanish</p>
          <Image src={spainImage} className="spain" alt="spain"/>
        </div>
      </div>
  )
}

export default Language