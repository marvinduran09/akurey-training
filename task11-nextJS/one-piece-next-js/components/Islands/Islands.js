import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import islands from '../../styles/islands.module.scss';

function Islands() {

    return (
    <div className='container'>
        <div className={islands.islands}>
        <div className={islands.islandsHeader}>
            <h3>Islands</h3>
            <Link  href="/islands"><a className={islands.seeAll}>See All</a></Link>
        </div>
        <div className={islands.islandsBody}>
            <div className={islands.islandsImgAndText}>
                <img className={islands.islandsImg} src="/dawn.svg" alt="dawn islands"/>
                <div className={islands.islandsText}>
                    <div className={islands.islandsLocation}>
                        <h6>Dawn Islands</h6>
                        <div className={islands.islandsLocationDescriptionAndIcon}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>East Blue</p>
                        </div>
                    </div>
                    <div className={islands.islandsHeart}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </div>
            </div>
            <div className={islands.islandsImgAndText}>
            <img className={islands.islandsImg} src="/reverse-mountain.svg" alt="reverse mountain"/>
                <div className={islands.islandsText}>
                    <div className={islands.islandsLocation}>
                        <h6>Reverse Mountain</h6>
                        <div className={islands.islandsLocationDescriptionAndIcon}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>Red line</p>
                        </div>
                    </div>
                    <div className={islands.islandsHeart}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>  
            </div>
            <div className={islands.islandsImgAndText} id={islands.reverseMountain}>
            <img className={islands.islandsImg} src="/reverse-mountain.svg" alt="reverse mountain"/>
                <div className={islands.islandsText}>
                    <div className={islands.islandsLocation}>
                        <h6>Reverse Mountain</h6>
                        <div className={islands.islandsLocationDescriptionAndIcon}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>Red line</p>
                        </div>
                    </div>
                    <div className={islands.islandsHeart}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Islands