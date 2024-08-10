import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";


const ServicesBanner = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className="service__banner-container">
                    <div className="service__banner-content"
                        data-aos="fade-down-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className='service__banner-content-header'>
                            <span>Our Service</span>
                        </div>
                        <h2>
                            Working for a better tomorrow
                            <span> business</span>
                        </h2>
                        <p>
                            Make product discovery continous. Validate the big-picture and day-to-day product decisions with user insights.
                        </p>
                        <div className='service__banner-content-inner'>
                            <a href="#services">
                                <button>
                                    See Services
                                    <FaRegCheckCircle />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="service__banner-img"
                        data-aos="fade-down-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <img src="/images/service.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesBanner