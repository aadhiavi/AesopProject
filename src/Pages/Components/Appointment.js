
import React from 'react'
import '../HomeStyles.css'
import { Link } from 'react-router-dom'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appointimage from '../../Assets/appointimage.jpg'

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="appointimage">
                <img src={appointimage} alt="" />
            </div>
            <div className="appointinfo">
                <p>Facial Appointments</p>
                <h1>Composure for the skin and senses</h1>
                <p>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
                <div className="appointbar">
                    <Link>Learn more</Link>
                    <p><FontAwesomeIcon icon={faArrowRightLong} /></p>
                </div>
            </div>
        </div>
    )
}


export default Appointment;