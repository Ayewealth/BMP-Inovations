import { FaTwitter, FaFacebookF, FaInstagram, FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

import "./Footer.scss"
import logo from "../../../assets/Group 659.png"
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState()
    return (
        <div className='small__section bg2'>
            <div className="container">
                <div className="footer">
                    <div className="footer__top">
                        <img src={logo} alt="Logo" width={100} />
                        <div>
                            <p>Follow us</p>
                            <ul>
                                <li><FaTwitter /></li>
                                <li><FaFacebookF /></li>
                                <li><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                    <span className='footer__design'></span>
                    <div className="footer__contents">
                        <div className="footer__contents-left">
                            <div>
                                <h3>BMP Inovations</h3>
                                <ul>
                                    <li>Brand Identiy</li>
                                    <li>Software Development</li>
                                    <li>Digital Marketing</li>
                                    <li>Automation</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>Terms of Use</li>
                                    <li>Private Policy</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Company</h3>
                                <ul>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Signup</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__contents-right">
                            <div className="footer__support">
                                <div>
                                    <p id="customer__care">Customer Care</p>
                                    <p id="num">+234 815 113 4638</p>
                                </div>
                                <div>
                                    <p id="customer__care">Live Support?</p>
                                    <p id="num">Bmpinovations@gmail.com</p>
                                </div>
                            </div>
                            <input type="text" value={email} placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} />
                            <div className="download">
                                <Link className="store">
                                    <FaApple />
                                    <div>
                                        <p id="store-name">Apple Store</p>
                                        <p id="num">Comming soon</p>
                                    </div>
                                </Link>
                                <Link className="store">
                                    <BiLogoPlayStore />
                                    <div>
                                        <p id="store-name">Google Play Store</p>
                                        <p id="num">Comming soon</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer