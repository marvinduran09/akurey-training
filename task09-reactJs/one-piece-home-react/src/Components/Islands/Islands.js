import React from 'react'
import { Link } from "react-router-dom";
import "./Islands.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import dawnImage from '../../Images/dawn.svg';
import reverseMountainImage from '../../Images/reverse-mountain.svg';
import Image from '../Image/ImageComponent'

function Islands() {
    const readModeState = useSelector(state => state.readMode);
    const readMode = readModeState;

    const heartDisplay = {display: readMode.readAll ? 'block' : 'none'}

    const className = "islands__img";

    return (
    <div className="islands">
        <div className="islands-header">
            <h3>Islands</h3>
            <Link className="SeeAll" to="/islands">See All</Link>
        </div>
        <div className='islands-body'>
            <div className="islands__img-and-text">
                <Image src={dawnImage} className={className} alt="dawn islands"/>
                <div className="islands__text">
                    <div className="islands__location">
                        <h6>Dawn Islands</h6>
                        <div className="islands__location-description-and-icon">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>East Blue</p>
                        </div>
                    </div>
                    <div className="islands__heart d-md-none" style={heartDisplay}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </div>
            </div>
            <div className="islands__img-and-text">
                <Image src={reverseMountainImage} className={className} alt="reverse mountain"/>
                <div className="islands__text">
                    <div className="islands__location">
                        <h6>Reverse Mountain</h6>
                        <div className="islands__location-description-and-icon">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>Red line</p>
                        </div>
                    </div>
                    <div className="islands__heart d-md-none" style={heartDisplay}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>  
            </div>
            <div className="islands__img-and-text d-none d-sm-block d-sm-none d-md-block">
                <Image src={reverseMountainImage} className={className} alt="reverse mountain"/>
                <div className="islands__text">
                    <div className="islands__location">
                        <h6>Reverse Mountain</h6>
                        <div className="islands__location-description-and-icon">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>Red line</p>
                        </div>
                    </div>
                    <div id="islands__heart" className="d-md-none">
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Islands