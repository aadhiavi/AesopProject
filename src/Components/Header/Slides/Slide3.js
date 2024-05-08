import React from 'react';
import './Slides.css';
import slide3 from "../../../Assets/slide3.jpg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Slide3 = () => {

    return (
        <>
            <div className="slide3">
                <div className="slide3-info">
                </div>
                <div className="slide3-title">
                    <h1>Aēsop</h1>
                </div>
                <div className="slide3-information">
                    <p>Skin Care+</p>
                    <h1>Vitamin-enriched skin care</h1>
                    <p>With generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment.</p>
                    <div className="slide3-bar">
                        <Link>Discover the range</Link>
                        <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                    </div>
                </div>

                <div className="slider3-image">
                    <img src={slide3} alt="" />
                </div>
            </div>
        </>
    )
}
export default Slide3;