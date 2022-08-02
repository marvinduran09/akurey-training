import React from 'react'
import "./Footer.css"
import footerImage from "../../Images/pngwing-footer.svg"
import Image from '../Image/ImageComponent'

function Footer() {
  return (
    <footer>
        <div className="footer__img-wrapper">
        <Image src={footerImage} className="footer" alt="footer"/>
        </div>
        <div className="footer__text-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor.</p>    
        </div>
    </footer>
  )
}

export default Footer