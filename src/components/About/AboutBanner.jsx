import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";


import Achievement from './Achievement';
const AboutBanner = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className='about__banner-container'>
                    <div className='about__banner-content'>
                        <div className='about__banner-content-header'>
                            <span>About Our Company</span>
                        </div>
                        <h2>
                            We provide perfect
                            IT Solutions &
                            <span> Technology for any Startups</span>
                        </h2>
                        <p>BMP Inovations offers tailored tools to optimize your workflow, ensuring maximum productivity and organization. From task management to collaborative hubs, our platform provides flexible ways to streamline your processes.</p>
                        <div className='about__banner-inner'>
                            <div>
                                <FaCircleCheck className='about__banner-check' />
                                <p>Quatility Products</p>
                            </div>
                            <div>
                                <FaCircleCheck className='about__banner-check' />
                                <p>Cost Efficient</p>
                            </div>
                            <div>
                                <FaCircleCheck className='about__banner-check' />
                                <p>On Demand Design</p>
                            </div>
                        </div>
                    </div>
                    <div className='about__banner-img'>
                        <img src='/images/about7.jpg' alt="" />
                    </div>
                </div>

                <Achievement />
            </div>
        </div>
    )
}

export default AboutBanner