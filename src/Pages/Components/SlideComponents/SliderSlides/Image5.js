import React from 'react'
import image5 from '../../../../Assets/scroll-image5.png';
import { Link } from 'react-router-dom';

const Image5 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={image5}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Subline Replenishing Night Masque</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Richly nuorishing hydration for overnight use</p></Link>
        </div>
    )
}

export default Image5;