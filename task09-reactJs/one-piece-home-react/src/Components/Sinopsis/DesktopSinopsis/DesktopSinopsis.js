import React from 'react'
import SinopsisImage from '../../Image/SinopsisImage'
import './DesktopSinopsis.css'

function DesktopSinopsis() {
  return (
    <div className='sinopsis-dektop'>
        <SinopsisImage/>
        <div className="sinopsis-text">
            <h4>Sinopsis</h4>
            <div className="sinosis-text__paragraph">
                <p>
                    Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.</p>
                    <p>
                    It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
                </p>
                <p>
                    This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.
                </p>
                <p>
                    Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.
                </p>
                <p>
                    It is located in the Red Line and is the geographical antipode of Mary Geoise.
                </p> 
            </div>
        </div>
    </div>
  )
}

export default DesktopSinopsis