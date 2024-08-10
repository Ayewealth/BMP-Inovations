import React from 'react'
import { FaStarOfLife, FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";


import "./ContactForm.scss"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className='section contact__bg'>
            <div className="container">
                <div className="contact__form-container">
                    <div className='contact__form-text'
                        data-aos="fade-right"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className='contact__form-top'>
                            <div>
                                <FaStarOfLife />
                                <p>Drop Us a Line</p>
                                <FaStarOfLife />
                            </div>

                            <h2>Connect with BMP</h2>

                            <p>Ready to take the first step towards unlocking opportunities, realizing goals, and embracing innovation? We're here and eager to connect.</p>
                        </div>
                        <div className='contact__form-middle'>
                            <div className='contact__hour'>
                                <LuPhoneCall />
                                <div className="contact__line"></div>
                                <div>
                                    <span>To More Inquiry</span>
                                    <p>+990-737 621 432</p>
                                </div>
                            </div>

                            <div className='contact__hour'>
                                <MdOutlineAttachEmail />
                                <div className="contact__line"></div>
                                <div>
                                    <span>To Send Mail</span>
                                    <p>info@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='contact__form-bottom'>
                            <h2>Social Just You Connected Us!</h2>

                            <ul>
                                <li>
                                    <Link to="https://www.instagram.com/bmpinovations/" target='_blank'>
                                        <FaInstagram />
                                        <p>Instagram</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://x.com/BmpInovati51862" target='_blank'>
                                        <FaXTwitter />
                                        <p>Twitter</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://web.facebook.com/p/BMP-Inovations-61557111026850/?_rdc=1&_rdr" target='_blank'>
                                        <FaFacebook />
                                        <p>Facebook</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/bmp-inovations" target='_blank'>
                                        <FaLinkedin />
                                        <p>LinkedIn</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contact__form'
                        data-aos="fade-left"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>Your Success Starts Here!</h2>

                        <form action="">
                            <div>
                                <input type="text" placeholder='Enter your Full Name' />
                                <input type="text" placeholder='Company / Organization' />
                            </div>
                            <div>
                                <input type="text" placeholder='Enter your Phone' />
                                <input type="text" placeholder='Company email ' />
                            </div>
                            <input type="text" placeholder='Your Subject' />
                            <textarea name="" id="" rows={7} placeholder='Message'></textarea>

                            <div>
                                <button>Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm