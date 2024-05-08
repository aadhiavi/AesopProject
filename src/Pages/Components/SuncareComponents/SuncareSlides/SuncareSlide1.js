
import React from 'react'
import slide1 from '../../../../Assets/suncare-1.jpg'
import { Link } from 'react-router-dom';

const SuncareSlide1 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={slide1}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Protective Facial Lotion SPF50</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Offers protection from UVA and UVB rays</p></Link>
        </div>
    )
}

export default SuncareSlide1;