import React from 'react'
import slide3 from '../../../../Assets/suncare-3.jpg';
import { Link } from 'react-router-dom';

const SuncareSlide3 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={slide3}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Protective Body Lotiion SPF50</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Lightweight broad-spectrum protection</p></Link>
        </div>
    )
}

export default SuncareSlide3;