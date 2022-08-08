import React from 'react'
import footerStyle from '../../styles/footer.module.scss';
import Image from 'next/image'

function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <Image src="/pngwing-footer.svg" width={128} height={77} alt="pngwing"/>
      <div className={footerStyle.footerTextWrapper}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor.</p>    
      </div>
    </footer>
  )
}

export default Footer