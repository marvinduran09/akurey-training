import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { changeReadMode } from '../../Slice/ReadModeSlice'
import { useDispatch } from 'react-redux';
import logoImage from '../../Images/one-piece-logo.svg'
import Image from '../Image/ImageComponent' 

function ReadAllRedLess() {
  const [isReadAllShown, setIsReadAllShown] = useState(false);
  const dispatch = useDispatch();

  const toogleReadMode = () => {
    setIsReadAllShown(!isReadAllShown)
    dispatch(changeReadMode(!isReadAllShown));
  }
  
  const readAllIcon = <FontAwesomeIcon icon={faAngleDown}/>;
  const readLessIcon = <FontAwesomeIcon icon={faAngleUp}/>;

  return (
    <div>
        <div className='sinopsis__logo-wrapper'>
            {isReadAllShown && <Image src={logoImage} className="sinopsis__logo" alt="logo"/> }
        </div>
        <div className="sinopsis-text">
            <h4>Sinopsis</h4>
            <div className="sinosis-text__paragraph">
                <p>
                    Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.
                </p>
                <p>
                    It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
                </p>
            </div>
            {isReadAllShown &&
                <div>
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
            }
            <div className="sinosis-text__read-option">
                {!isReadAllShown? readAllIcon: readLessIcon}
                <button className="sinosis-text__read-button" onClick={toogleReadMode}>{!isReadAllShown ? "Read All": "Read Less"}</button>
            </div>
        </div>
    </div>
  )
}

export default ReadAllRedLess