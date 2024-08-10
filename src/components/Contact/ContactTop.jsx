import React from 'react'
import { IoMdStar } from "react-icons/io";
import { LiaBusinessTimeSolid } from "react-icons/lia";


import "./ContactTop.scss"

const ContactTop = () => {

    return (
        <div className='small__section'>
            <div className="container">
                <div className="contact__container">
                    <div className="contact__head"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div>
                            <IoMdStar />
                            <p>Office Addresses</p>
                            <IoMdStar />
                        </div>
                        <h2>
                            <span>Our Office </span>
                            Locations.
                        </h2>
                        <p id='contact__head-p'>Right now there is no physical office but feel free to contact us or use any of our socials for more information.</p>
                    </div>

                    <div className='contact__location'
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div>
                            <h2>Rivers State</h2>
                            <h3>Port Harcourt</h3>
                        </div>
                        <div className='contact__hour'>
                            <LiaBusinessTimeSolid />
                            <div className="contact__line"></div>
                            <div>
                                <span>Working Hours</span>
                                <p>Mon to Sat : 8am- 10pm</p>
                                <p>Sunday : <span>Closed</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactTop