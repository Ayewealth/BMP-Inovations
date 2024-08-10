import React from 'react'

import "./GalleryBanner.scss"

const GalleryBanner = () => {
    return (
        <div className="gallery__banner">
            <div className='section'>
                <div className="container">
                    <div className="gallery__banner-container"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>Showcase Our Portfolio.</h2>
                        <p>
                            See all our services and product we offer and have done in the a couple of years. We have worked with various company and you can check those product out.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryBanner