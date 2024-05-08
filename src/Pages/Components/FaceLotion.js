
import React from 'react'
import '../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lotionImage from '../../Assets/faceLotion.png';

const FaceLotion = () => {
    return (
        <div className="facelotion">
            <div className="lotioninfo">
                <p>High time for high coverage</p>
                <h1>Protective Facial Lotion SPF50</h1>
                <p>Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine.</p>
                <div className="lotionbar">
                    <Link>Disover Potective Facial Lotion SPF50</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>
            <div className="lotionImage">
                <img src={lotionImage} alt="" />
            </div>
        </div>
    )
}


export default FaceLotion;