import Slider from 'react-slick';
import './TubeImageSlider/TubeInfo.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from 'react';
import { useEffect } from 'react';
import { data } from './TubeImageSlider/Tubesinfo';
import { Link } from 'react-router-dom';



let slidesToShow = 3;
const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <button style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(151, 151, 151)",
                        color: 'black', fontSize: '30px',
                        fontWeight: "300", height: "50px",
                        width: "50px", marginLeft: "-30px"
                    }}>
                        <FiChevronLeft />
                    </button>
                </div>
            )}
        </>
    );
};
const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    console.log(props);
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <button style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(151, 151, 151)",
                        color: 'black', fontSize: '30px',
                        fontWeight: "300", height: "50px",
                        width: "50px"
                    }}>
                        <FiChevronRight />
                    </button>
                </div>
            )}
        </>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,

    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                centerMode: false,
                slidesToScroll: 1,
            },
        },
    ],
};

const TubeSlider = () => {
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
    } else if (width > 426 && width <= 769) {
        slidesToShow = 2;
    } else if (width > 769 && width <= 1025) {
        slidesToShow = 3;
    } else {
        slidesToShow = 3;
    }

    return (
        <div style={{ margin: '60px' }} className='carousel'>
            <Slider {...carouselProperties}>
                {data.map((item) => (
                    <Card item={item} />
                ))}
            </Slider>
        </div>
    );
};
const Card = ({ item }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={item.image}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>{item.link1}</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>{item.link2}</p></Link>
        </div>
    )
}


export default TubeSlider;