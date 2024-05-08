
import React from 'react'
import slide5 from '../../../../Assets/suncare-5.jpg';
import { Link } from 'react-router-dom';

const SuncareSlide5 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={slide5}
                alt=''
                style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <Link><p style={{ fontSize: '16px', padding: '5px 0' }}>Petitgrain Reviving Body Gel</p></Link>
            <Link><p style={{ fontSize: '14px', padding: '5px 0', color: 'grey' }}>Leaves skin feeling cooled,revived</p></Link>
        </div>
    )
}

export default SuncareSlide5;