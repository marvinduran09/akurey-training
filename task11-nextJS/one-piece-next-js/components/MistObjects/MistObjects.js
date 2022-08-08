import React from 'react'
import Link from "next/link";
import mistobjectsStyle from '../../styles/mistObjects.module.scss'; 

function MistObjects() {

    const object = "object";

    return (
        <div className='container'>
            <div className={mistobjectsStyle.mistObjects}>
                <div className={mistobjectsStyle.mistObjectHeader}>
                    <h3>Mist Objects</h3>
                    <Link  href="/mistobjects"><a className={mistobjectsStyle.seeAll}>See All</a></Link>
                </div>
                <div className="mist-object-bodies">
                    <div className={mistobjectsStyle.mistObjectBody}>
                        <div className={mistobjectsStyle.mistObjectImgAndText}>
                            <img className={mistobjectsStyle.mistObjectImg} src="/object.svg" alt={object} />
                            <div className={mistobjectsStyle.mistObjectText}>
                                <h6>Gomu Gomu No Mi</h6>
                                <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                                    of rubber, making the user a Rubber Human. It was then accidentally eaten
                                    by the series protagonist, Monkey D. Luffy.
                                </p>
                            </div>
                        </div>  
                        <div className={mistobjectsStyle.mistObjectImgAndText}>
                            <img className={mistobjectsStyle.mistObjectImg} src="/object.svg" alt={object} />
                            <div className={mistobjectsStyle.mistObjectText}>
                                <h6>Gomu Gomu No Mi</h6>
                                <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                                    of rubber, making the user a Rubber Human. It was then accidentally eaten
                                    by the series protagonist, Monkey D. Luffy.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div className={mistobjectsStyle.mistObjectBody}>
                        <div className={mistobjectsStyle.mistObjectImgAndText}>
                        <img className={mistobjectsStyle.mistObjectImg} src="/object.svg" alt={object} />
                            <div className={mistobjectsStyle.mistObjectText}>
                                <h6>Gomu Gomu No Mi</h6>
                                <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                                    of rubber, making the user a Rubber Human. It was then accidentally eaten
                                    by the series protagonist, Monkey D. Luffy.
                                </p>
                            </div>
                        </div>  
                        <div className={mistobjectsStyle.mistObjectImgAndText} id={mistobjectsStyle.object}>
                        <img className={mistobjectsStyle.mistObjectImg} src="/object.svg" alt={object} />
                            <div className={mistobjectsStyle.mistObjectText}>
                                <h6>Gomu Gomu No Mi</h6>
                                <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                                    of rubber, making the user a Rubber Human. It was then accidentally eaten
                                    by the series protagonist, Monkey D. Luffy.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MistObjects