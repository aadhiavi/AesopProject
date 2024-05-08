import React from 'react';
import stateImage from '../../Assets/stateImage.png';
import '../HomeStyles.css';
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Purchase = () => {
    return (
        <div className="purchase">
            <div className="stateimage">
                <img src={stateImage} alt="" />
            </div>
            <div className="purchase-section">
                <h1>Eminently suited to all</h1>
                <p>An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections.</p>
                <div className="purchasebar">
                    <Link>Purchase now</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>

        </div>
    )
}

export default Purchase