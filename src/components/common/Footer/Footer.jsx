import { FaInstagram, FaApple, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

import "./Footer.scss"
import logo from "../../../assets/Group 659.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [email, setEmail] = useState()
    return (
        <div className='small__section bg2' data-aos="fade-up" ata-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="container">
                <div className="footer">
                    <div className="footer__top">
                        <img src={logo} alt="Logo" width={100} />
                        <div>
                            <p>Follow us</p>
                            <ul>
                                <li>
                                    <Link to="https://x.com/BmpInovati51862" target='_blank'>
                                        <FaXTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://web.facebook.com/p/BMP-Inovations-61557111026850/?_rdc=1&_rdr" target='_blank'>
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/bmpinovations/" target='_blank'>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/bmp-inovations" target='_blank'>
                                        <FaLinkedin />
                                    </Link>
                                </li>
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
                                    <li>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            Signup
                                        </Link>
                                    </li>
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