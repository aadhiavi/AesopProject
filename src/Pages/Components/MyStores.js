import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import miniSliderimage1 from '../../Assets/miniSliderimage1.jpg'
import miniSliderimage2 from '../../Assets/miniSliderimage2.jpg'
import miniSliderimage3 from '../../Assets/miniSliderimage3.jpg'
import '../HomeStyles.css';
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MyStores = () => {



    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [miniSliderimage1, miniSliderimage2, miniSliderimage3]
    const totalSlides = slides.length;

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    // Automatic sliding functionality
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
       <>
        <div className='mystore'>
            <div className="store-section">
                <h1>Store locator</h1>
                <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
                <div className="storebar">
                    <Link>Discover the Gift Finder</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>
            <div className="storeimages">
                {slides.map((Slide, index) => (
                    <div key={index} className={index === currentSlide ? 'active' : 'inactive'}>
                        <img src={Slide} alt="" />
                    </div>
                ))}
                <div className="clicks">
                    <button onClick={prevSlide}><FiChevronLeft /></button>
                    <button onClick={nextSlide}><FiChevronRight /></button>
                </div>
            </div>
        </div>
        <p className=' subline'>Aesop Hollywood Road</p>
       </>
    )
}



export default MyStores;