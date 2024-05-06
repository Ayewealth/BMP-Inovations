import React from 'react'

const Services = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className="services__container">
                    <div className="services__head">
                        <h1>Our Services</h1>
                    </div>
                    <div className='services__content'>
                        <div className='services__inner'>
                            <div>
                                <img src="/images/software_icon.png" alt="" />
                            </div>
                            <p>Software Development</p>
                        </div>
                        <div className='services__inner'>
                            <div>
                                <img src="/images/branding.png" alt="" />
                            </div>
                            <p>Brand Identity</p>
                        </div>
                        <div className='services__inner'>
                            <div>
                                <img src="/images/automation-testing.png" alt="" />
                            </div>
                            <p>Automation</p>
                        </div>
                        <div className='services__inner'>
                            <div>
                                <img src="/images/targeting.png" alt="" />
                            </div>
                            <p>Digital Marketing</p>
                        </div>
                        <div className='services__inner'>
                            <div>
                                <img src="/images/content-management.png" alt="" />
                            </div>
                            <p>Content and Social Media Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services