import React from 'react'
import { Link } from "react-router-dom";
import MonkeydLuffyImage from '../Image/MonkeyImage'
import AceImage from '../Image/AceImage' 
import ZoroImage from '../Image/ZoroImage'
import NicoImage from '../Image/NicoImage'
import "./Characters.css"

function Characters() {
  return (
    <div>
        <div className="characters">
            <div className="characters-header">
                <h3>Characters</h3>
                <Link className="SeeAll" to="/characters">See All</Link>
            </div>
            <div className="characters-body">
                <div className="characters__img-and-text">
                    <MonkeydLuffyImage/>
                    <div className="characters__text">
                        <h6>Monkey D. Luffy</h6>
                    </div>
                </div>
                <div className="characters__img-and-text">
                    <AceImage/>
                    <div className="characters__text">
                        <h6>Portgas D. Ace</h6>
                    </div>
                </div>
                <div className="characters__img-and-text d-none d-sm-block d-sm-none d-md-block">
                    <ZoroImage/>
                    <div className="characters__text">
                        <h6>Roronoa Zoro</h6>
                    </div>
                </div>
                <div className="characters__img-and-text d-none d-sm-block d-sm-none d-md-block">
                    <NicoImage/>
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