import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FiChevronRight } from "react-icons/fi";
import burgerimg1 from "../../Assets/burgerimg1.jpg";
import burgerimg2 from "../../Assets/burgerimg2.jpg";
import burgerimg3 from "../../Assets/burgerimg3.jpg";
import burgerimg4 from "../../Assets/burgerimg4.jpg";
import burgerimg5 from "../../Assets/burgerimg5.jpg";
import { FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Burger = ({ handleClick }) => {

    let slidesToShow = 1;

    const slideImages = [
        {
            image: burgerimg1,
            lane1: "Essay",
            lane2: 'Expressing gratitude via the written word: Celebrating Chuseak 2023'
        },
        {
            image: burgerimg2,
            lane1: "Essay",
            lane2: 'Expressing gratitude via the written word: Celebrating Chuseak 2023'
        },
        {
            image: burgerimg3,
            lane1: "Essay",
            lane2: 'Expressing gratitude via the written word: Celebrating Chuseak 2023'
        },
        {
            image: burgerimg4,
            lane1: "Essay",
            lane2: 'Expressing gratitude via the written word: Celebrating Chuseak 2023'
        },
        {
            image: burgerimg5,
            lane1: "Essay",
            lane2: 'Expressing gratitude via the written word: Celebrating Chuseak 2023'
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    }

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    if (width <= 426) {
        slidesToShow = 1;
    } else {
        slidesToShow = 1;
    }


    return (
        <div className='burger-section'>
            <div className="icon-menu1">
                <div className="icon-title3">
                    <h1>Aēsop </h1>
                </div>
                <div className="icon-menu4">
                    <div className="search1">
                        <Link><FontAwesomeIcon icon={faSearch} /></Link>
                    </div>
                    <div className="search1">
                        <Link><FontAwesomeIcon icon={faHeart} /></Link>
                    </div>
                    <div className="search1">
                        <Link>Cart</Link>
                    </div>
                    <div className="search1">
                        <Link><FaTimes style={{ color: 'black' }} size={20} onClick={handleClick} /></Link>
                    </div>

                </div>
            </div>
            <div className="card2">
                <hr />
                <div className="lane">
                    <Link><h2>Skin Care</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Body & Hand</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Hair</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Fragrance</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Home</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Kits & Travel</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
                <div className="lane">
                    <Link><h2>Gifts</h2></Link>
                    <FiChevronRight/>
                </div>
                <hr />
            </div>
            <div className="card3">
                <div className="card3-mini1">
                    <Link><p>Read</p></Link>
                    <Link><p>Stores</p></Link>
                    <Link><p>Facial Appointments</p></Link>
                </div>
                <div className="card3-mini2">
                    <Link><p>Login</p></Link>
                    <Link><p>Live assistance</p></Link>
                </div>

            </div>
            <div className="card4">
                <Slider {...settings}>
                    {
                        slideImages.map((item) => {
                            return (
                                <div className='slideimage'>
                                    <div className="smallslide">
                                        <img src={item.image} alt="" />
                                        <p>{item.lane1}</p>
                                        <p>{item.lane2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Burger