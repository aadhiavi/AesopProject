import React from 'react'
import '../../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideTitle1 = () => {
    return (
        <>
            <div className="slidetitle1">
                <p>Skin Care+</p>
                <h1>Intensive formulations for complex skin</h1>
                <p>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>
                <Link>Browse formulations <FontAwesomeIcon icon={faArrowRightLong} /></Link>
            </div>
        </>

    )
}

export default SlideTitle1;