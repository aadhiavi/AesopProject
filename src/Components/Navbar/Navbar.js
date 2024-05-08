import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const menu1 = ["Skin Care", "Body & Hand", "Hair", "Fragrance", "Home", "Kites & Travel", "Gifts", 'Read', "Stores", 'Facial Appointments']
    const menu2 = ['Log in', 'Cabinet', 'Cart']

    return (
        <>
            <div className="head-info">
                <p>Purchase two eligible seasonal products to receive a Karst Eau de Parfum sample. <Link>Browse formulations</Link></p>

            </div>
            <div className="head-info2">
                <Link >Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders.</Link>
                <Link>+</Link>
            </div>
            <div className="list">
                <div className="menu1">
                    <ul>
                        {menu1.map((item) => {
                            return (
                                <li><Link>{item}</Link></li>
                            )
                        })}
                    </ul>
                    <div className="mini-menu">
                        <Link>Shop</Link>
                        <Link>Read</Link>
                        <Link>Stores</Link>
                    </div>
                    <div className="search">
                        <Link><FontAwesomeIcon icon={faSearch} /></Link>
                    </div>
                </div>
                <div className="menu2">
                    <ul>
                        {menu2.map((item) => {
                            return (
                                <li><Link>{item}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;