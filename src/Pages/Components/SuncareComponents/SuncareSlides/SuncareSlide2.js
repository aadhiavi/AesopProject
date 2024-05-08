

import React from 'react'
import slide2 from '../../../../Assets/suncare-2.jpg';
import { Link } from 'react-router-dom';

const SuncareSlide2 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={slide2}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Protective Facial Lotion SPF25</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Broad spectrum  protection and hydration</p></Link>
        </div>
    )
}

export default SuncareSlide2;