import React from 'react'
import image3 from '../../../../Assets/scroll-image3.png';
import { Link } from 'react-router-dom';

const Image3 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image3}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Lucent Facial Concentrate</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>A vitaminc C-rich layering serum</p></Link>
        </div>
    )
}

export default Image3;