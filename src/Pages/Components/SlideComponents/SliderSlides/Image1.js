import React from 'react'
import image1 from '../../../../Assets/scroll-image1.jpg';
import { Link } from 'react-router-dom';

const Image1 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image1}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Immaculate Facial Tonic</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Exfoliating tonic with a light finish</p></Link>
        </div>
    )
}

export default Image1;