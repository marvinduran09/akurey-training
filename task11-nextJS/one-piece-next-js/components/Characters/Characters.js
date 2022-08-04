import React from 'react'
import Link from "next/link";
import charactersStyle from '../../styles/characters.module.scss';

function Characters() {
    return (
        <div className='container'>
            <div className={charactersStyle.characters}>
                <div className={charactersStyle.charactersHeader}>
                    <h3>Characters</h3>
                    <Link  href="/characters"><a className={charactersStyle.seeAll}>See All</a></Link>
                </div>
                <div className={charactersStyle.charactersBody}>
                    <div className={charactersStyle.charactersImgAndText}>
                        <img src="/monkeydluffy.svg" className={charactersStyle.charactersImg} alt="monkeydluffy"/>
                        <div className={charactersStyle.charactersText}>
                            <h6>Monkey D. Luffy</h6>
                        </div> 
                    </div>
                    <div className={charactersStyle.charactersImgAndText}>
                        <img src="/ace.svg" className={charactersStyle.charactersImg} alt="ace"/>
                        <div className={charactersStyle.charactersText}>
                            <h6>Portgas D. Ace</h6>
                        </div>
                    </div>
                    <div className={charactersStyle.charactersImgAndText} id={charactersStyle.zoro}>
                        <img src="/zoro.svg" className={charactersStyle.charactersImg} alt="zoro"/> 
                        <div className={charactersStyle.charactersText}>
                            <h6>Roronoa Zoro</h6>
                        </div>
                    </div>
                    <div className={charactersStyle.charactersImgAndText} id={charactersStyle.nico}>
                        <img src="/nico.svg" className={charactersStyle.charactersImg} alt="nico"/>
                        <div className={charactersStyle.charactersText}>
                            <h6>Nico Robin</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters