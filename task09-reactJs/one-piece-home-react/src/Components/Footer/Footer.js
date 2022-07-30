import React from 'react'
import FooterImage from '../../../src/Components/Image/FooterImage'
import "./Footer.css"

function Footer() {
  return (
    <footer>
        <div className="footer__img-wrapper">
        <FooterImage/>
        </div>
        <div className="footer__text-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor.</p>    
        </div>
    </footer>
  )
}

export default Footer