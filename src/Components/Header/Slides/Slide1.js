import React from 'react';
import './Slides.css'
import slide1 from "../../../Assets/slide1.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Slide1 = () => {

    return (
        <>
            <div className="slide1">
                <img src={slide1} alt="" />

                <div className="slide1-title">
                    <h1>Aēsop</h1>
                </div>
                <div className="slide1-information">
                    <p>Mother`s Day</p>
                    <h1>For the discerning</h1>
                    <p>Our range of products provides ample options for even the most particular of gift-givers and recipients—fitting choices to reciprocate maternal guidance.</p>
                    <div className="slide1-bar">
                        <Link>Discover Mother's Day gifts</Link>
                        <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Slide1;