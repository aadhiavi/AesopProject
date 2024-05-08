import React from 'react'
import image2 from '../../../../Assets/scroll-image2.jpg';
import { Link } from 'react-router-dom';

const Image2 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image2}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>B Triple C Facial Balancing Gel</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Embracing vitamin-rich hydration</p></Link>
        </div>
    )
}

export default Image2;