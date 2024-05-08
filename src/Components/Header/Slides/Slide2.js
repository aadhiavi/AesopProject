import React from 'react';
import './Slides.css'
import slide2 from '../../../Assets/slide2.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Slide2 = () => {

    return (
        <>
            <div className="slide2">
                <div className="slide2-info">
                </div>
                <div className="slide2-title">
                        <h1>Aēsop</h1>
                    </div>
                    <div className="slide2-information">
                        <p>Warm weather companions</p>
                        <h1>Exfoliating and Replenishing Duo</h1>
                        <p>Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly.</p>
                        <div className="slide2-bar">
                            <Link>Discover the due</Link>
                            <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>
                    </div>
                <div className="slider2-image">
                    <img src={slide2} alt="" />
                </div>
            </div>
        </>
    )
}
export default Slide2;