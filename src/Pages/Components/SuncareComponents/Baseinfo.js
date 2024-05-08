import React from 'react'
import '../../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Baseinfo = () => {
    return (
        <>
            <div className="baseinfo">
                <p>Sun Care and SPF</p>
                <h1>Pair time in the sun with intelligent care</h1>
                <p>Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment.</p>
                <Link>Browse formulations <FontAwesomeIcon icon={faArrowRightLong} /></Link>
            </div>
        </>

    )
}


export default Baseinfo;
