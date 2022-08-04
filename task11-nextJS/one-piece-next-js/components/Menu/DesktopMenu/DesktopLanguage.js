import React from 'react'
import desktopMenuStyle from "../../../styles/desktopMenu.module.scss";

function DesktopLanguage() {
  return (
    <div className={desktopMenuStyle.menuOptionLanguages}>
        <div className={desktopMenuStyle.menuOptionEnglish}>
          <img src='/usa-flag.svg' alt="usa"/>
        </div>
        <div className='menu__option-spanish'>
          <img src='/spain-flag.svg' alt="spa"/>
        </div>
      </div>
  )
}

export default DesktopLanguage