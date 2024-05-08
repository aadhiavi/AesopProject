import React from 'react'
import image6 from '../../../../Assets/scroll-image6.png';
import { Link } from 'react-router-dom';

const Image6 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image6}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Damascan Rose Facial Treatment</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>A blend of vitamin-rich botanical</p></Link>
        </div>
    )
}

export default Image6;