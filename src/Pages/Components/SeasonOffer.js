
import React from 'react'
import '../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OfferImage from '../../Assets/offerimage.jpg'

const SeasonOffer = () => {
    return (
        <div className="seasonoffer">
            <div className="offerinfo">
                <p>A seasonal offer</p>
                <h1>Experience Karst Eau de Parfum</h1>
                <p>In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)</p>
                <div className="seasonbar">
                    <Link>Explore summer formulations</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>
            <div className="offerImage">
                <img src={OfferImage} alt="" />
            </div>
        </div>
    )
}


export default SeasonOffer;