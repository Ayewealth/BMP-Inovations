import React from 'react'

import "./Blog.scss"

const BlogBanner = () => {
    return (
        <div className='blog__banner'>
            <div className="section">
                <div className="container">
                    <div className="blog__banner-container"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>Our Blog.</h2>
                        <p>Read updates on BMP products, corporate initiatives, and
                            partnerships to get insight into the world's work marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBanner