
import React from 'react'
import '../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GiftImage from '../../Assets/giftfinderimage.jpg'

const GiftFinder = () => {
    return (
        <div className="giftfinder">
            <div className="giftimage">
                <img src={GiftImage} alt="" />
            </div>
            <div className="giftinfo">
                <p>Options, streamlined</p>
                <h1>The Gift Finder</h1>
                <p>This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.</p>
                <div className="giftbar">
                    <Link>Discover the Gift Finder</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>
        </div>
    )
}


export default GiftFinder;