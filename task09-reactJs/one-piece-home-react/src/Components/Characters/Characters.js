import React from 'react'
import { Link } from "react-router-dom";
import "./Characters.css"
import monkeydLuffyImage from '../../Images/monkeydluffy.svg';
import aceImage from '../../Images/ace.svg';
import zoroImage from '../../Images/zoro.svg';
import nicoImage from '../../Images/nico.svg';
import Image from '../Image/ImageComponent'

function Characters() {

    const className = "characters_img";

    return (
        <div>
            <div className="characters">
                <div className="characters-header">
                    <h3>Characters</h3>
                    <Link className="SeeAll" to="/characters">See All</Link>
                </div>
                <div className="characters-body">
                    <div className="characters__img-and-text">
                        <Image src={monkeydLuffyImage} className={className} alt="monkey"/>
                        <div className="characters__text">
                            <h6>Monkey D. Luffy</h6>
                        </div> 
                    </div>
                    <div className="characters__img-and-text">
                        <Image src={aceImage} className={className} alt="ace"/>
                        <div className="characters__text">
                            <h6>Portgas D. Ace</h6>
                        </div>
                    </div>
                    <div className="characters__img-and-text d-none d-sm-block d-sm-none d-md-block">
                        <Image src={zoroImage} className={className} alt="zoro"/>
                        <div className="characters__text">
                            <h6>Roronoa Zoro</h6>
                        </div>
                    </div>
                    <div className="characters__img-and-text d-none d-sm-block d-sm-none d-md-block">
                        <Image src={nicoImage} className={className} alt="nico"/>
                        <div className="characters__text">
                            <h6>Nico Robin</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters