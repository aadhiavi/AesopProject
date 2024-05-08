import React from 'react'
import image4 from '../../../../Assets/scroll-image4.png';
import { Link } from 'react-router-dom';

const Image4 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image4}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Exalted Eye Serum</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Lightweight, vitamin-rich serum</p></Link>
        </div>
    )
}

export default Image4;