import React from 'react'

import "./ContactBanner.scss"

const ContactBanner = () => {
    return (
        <div className='contact__banner'>
            <div className="section">
                <div className="container">
                    <div className="contact__banner-container"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>Connect With Us.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner