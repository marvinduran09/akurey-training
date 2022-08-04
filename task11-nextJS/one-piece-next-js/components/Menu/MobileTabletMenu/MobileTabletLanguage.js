import React from 'react'
import mobileTabletMenuMenuStyle from "../../../styles/mobileTabletMenu.module.scss";

function LanguageDesktop() {
  return (
    <div className={mobileTabletMenuMenuStyle.menuOptionLanguages}>
        <div className={mobileTabletMenuMenuStyle.menuOptionEnglish}>
          <p className={mobileTabletMenuMenuStyle.menuOptionEnglishText}>English</p>
          <img src='/usa-flag.svg' alt="usa"/>
          
        </div>
        <div className={mobileTabletMenuMenuStyle.menuOptionSpanish}>
          <p className={mobileTabletMenuMenuStyle.menuOptionSpanishText}>Spanish</p>
          <img src='/spain-flag.svg' alt="spa"/>
        </div>
      </div>
  )
}

export default LanguageDesktop