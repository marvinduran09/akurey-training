import React from 'react'
import { Link } from "react-router-dom";
import "./MistObjects.css"
import MistObjectImage from "../Image/MistObjectImage"
import { useSelector } from 'react-redux';

function MistObjects() {
    const readModeState = useSelector(state => state.readMode);
    const readMode = readModeState;

  return (
    <div className="mist-objects" style={{ marginBottom: readMode.readAll ? '125px': '75px'}}>
        <div className="mist-object-header">
            <h3>Mist Objects</h3>
            <Link className="SeeAll" to="/islands">See All</Link>
        </div>
        <div className="mist-object-bodies">
            <div className="mist-object-body">
                <div className="mist-object__img-and-text">
                    <MistObjectImage/>
                    <div className="mist-object__text">
                        <h6>Gomu Gomu No Mi</h6>
                        <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                            of rubber, making the user a Rubber Human. It was then accidentally eaten
                            by the series protagonist, Monkey D. Luffy.
                        </p>
                    </div>
                </div>  
                <div className="mist-object__img-and-text">
                    <MistObjectImage/>
                    <div className="mist-object__text">
                        <h6>Gomu Gomu No Mi</h6>
                        <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                            of rubber, making the user a Rubber Human. It was then accidentally eaten
                            by the series protagonist, Monkey D. Luffy.
                        </p>
                    </div>
                </div>  
            </div>
            <div className="mist-object-body">
                <div className="mist-object__img-and-text">
                    <MistObjectImage/>
                    <div className="mist-object__text">
                        <h6>Gomu Gomu No Mi</h6>
                        <p>Is a Paramecia-type Devil Fruit that gives the user's body the properties
                            of rubber, making the user a Rubber Human. It was then accidentally eaten
                            by the series protagonist, Monkey D. Luffy.
                        </p>
                    </div>
                </div>  
                <div className="mist-object__img-and-text d-none d-sm-block d-sm-none d-md-block">
                    <MistObjectImage/>
                    <div className="mist-object__text">
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
  )
}

export default MistObjects