
import React from 'react'
import slide4 from '../../../../Assets/suncare-4.jpg';
import { Link } from 'react-router-dom';

const SuncareSlide4 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={slide4}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Saze & Zinc Facial Hydration Lotion SPF15</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Hydrating sun protection</p></Link>
        </div>
    )
}

export default SuncareSlide4;