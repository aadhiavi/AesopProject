import React from 'react'
import './Footer.css'
import { FiArrowUpRight } from "react-icons/fi";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faCopyright} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-list1">
                    <h3>Subscribe to Aesop communications</h3>
                    <hr />
                    <div className="emailbar">
                        <input className='inputemail' type="email" placeholder='Purchase now' />
                        <button className='email-button'><Link><FontAwesomeIcon icon={faArrowRightLong} /></Link></button>
                        <p></p>
                    </div>
                    <p><input type="checkbox" />. Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span>privacy policy</span></p>
                </div>
                <div className="footer-list2">
                    <ul>
                        <li><Link><h3>Orders</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>Contact us <FiArrowUpRight /></Link></li>
                        <li><Link>FAQs <FiArrowUpRight /></Link></li>
                        <li><Link>Shipping <FiArrowUpRight /></Link></li>
                        <li><Link>Returns <FiArrowUpRight /></Link></li>
                        <li><Link>Order history <FiArrowUpRight /></Link></li>
                        <li><Link>Check gift card balance</Link></li>
                        <li><Link>Terms and conditions </Link></li>
                    </ul>
                </div>
                <div className="footer-list3">
                    <ul>
                        <li><Link><h3>Services</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>Live Assistance</Link></li>
                        <li><Link>Corporate gifts</Link></li>
                        <li><Link>Facial appointments</Link></li>
                        <li><Link>Click and Collect</Link></li>
                        <li><Link>Video consultation </Link></li>
                    </ul>
                </div>
                <div className="footer-list4">
                    <ul>
                        <li><Link><h3>Location preferences</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>Shipping</Link></li>
                        <li><Link>Hong Kong, SAR</Link></li>
                        <li><hr /></li>
                        <li><Link>Language:</Link></li>
                        <li><Link>English</Link></li>
                        <li><Link>繁體中文</Link></li>
                    </ul>
                </div>
                <div className="footer-list5">
                    <ul>
                        <li><Link><h3>Environmental sustainability</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>All Aesop products are vegan and all ingredients are not tested on animals. We are a Leaping Bunny and B Corporation certified company. learn more</Link></li>
                    </ul>
                </div>
                <div className="footer-list6">
                    <ul>
                        <li><Link><h3>About</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>About Aesop</Link></li>
                        <li><Link>Aesop Foundation</Link></li>
                        <li><Link>Recruitment</Link></li>
                        <li><Link>Privacy policy</Link></li>
                        <li><Link>Website Accessibility Statement</Link></li>
                        <li><Link>Coockie Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-list7">
                    <ul>
                        <li><Link><h3>Social media</h3></Link></li>
                        <li><hr /></li>
                        <li><Link>Instagram <FiArrowUpRight /></Link></li>
                        <li><Link>Twitter <FiArrowUpRight /></Link></li>
                        <li><Link>Linkedin <FiArrowUpRight /></Link></li>

                    </ul>
                </div>
            </div>
            <div className="footer-list8">
                <hr />
                <h3><FontAwesomeIcon icon={faCopyright} /> Aēsop</h3>
            </div>
        </>
    )
}

export default Footer