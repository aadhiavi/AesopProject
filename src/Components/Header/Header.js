import React, { useState, useEffect } from 'react';
import './Header.css'
import Slide1 from './Slides/Slide1';
import Slide2 from './Slides/Slide2';
import Slide3 from './Slides/Slide3';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Burger from '../Navbar/Burger';

const Header = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Slide1, Slide2, Slide3];
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



    const [burger, setBurger] = useState(false)

    const handleClick = () => {
        setBurger(!burger)
    };

    const [color, setColor] = useState(false)
    const handleColor = () => {
        if (window.scrollY >= 10) {
            setColor(true);
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", handleColor)

    return (
        <div className="auto-slider">
            <div className="slide-container">
                {slides.map((Slide, index) => (
                    <div key={index} className={index === currentSlide ? 'active' : 'inactive'}>
                        <Slide />
                    </div>
                ))}
            </div>
            <div className="btn">
                <button onClick={prevSlide}><FiChevronLeft /></button>
                <button onClick={nextSlide}><FiChevronRight /></button>
            </div>
            <div className="sub-details">
            </div>



            <nav className={color ? 'color' : ''}  >
            {
                        burger && <Burger handleClick={handleClick}/>
                    }
                <div className="icon-title">
                    <h1>Aēsop</h1>
                </div>
                
                <div className="icon-menu2">
                    <div className="search">
                        <Link><FontAwesomeIcon icon={faSearch} /></Link>
                    </div>
                    <div className="search">
                        <Link><FontAwesomeIcon icon={faHeart} /></Link>
                    </div>
                    <div className="search">
                        <Link>Cart</Link>
                    </div>

                    <div className="burger" >
                        <FaBars style={{ color: "white" }} size={20} onClick={handleClick} />
                    </div>
                    
                </div>
            </nav>

        </div>
    )
}
export default Header;