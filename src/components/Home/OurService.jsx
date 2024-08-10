import React from 'react'

const OurService = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className='home__service-head'
                    data-aos="fade-up"
                    ata-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <h1>Our Services</h1>
                    <p>We Offer a variety of service with the sole purpose of growing and streamlining your brand and making it marketable</p>
                </div>
                <div className="home__services">
                    <div data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <img src="/images/software.png" alt="" />
                        <h2>Software Development</h2>
                        <p>
                            Crafting robust and scalable software solutions through expert coding, testing, and project management.
                        </p>
                    </div>
                    <div data-aos="fade-up" ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src="/images/brand identity.jpg" alt="" />
                        <h2>Brand Identity</h2>
                        <p>
                            Building distinctive brand visuals with logo design, color schemes, and typography for a memorable and consistent brand image.
                        </p>
                    </div>
                    <div data-aos="fade-up" ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src="/images/automation.jpg" alt="" />
                        <h2>Automation</h2>
                        <p>
                            Enhancing efficiency by automating repetitive tasks and optimizing workflows with cutting-edge technology.
                        </p>
                    </div>
                    <div data-aos="fade-up" ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src="/images/digital marketing.jpg" alt="" />
                        <h2>Digital Marketing</h2>
                        <p>
                            Boosting online visibility and engagement through strategic SEO, PPC campaigns, email marketing, and social media advertising.
                        </p>
                    </div>
                    <div data-aos="fade-up" ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src="/images/content creation.jpg" alt="" />
                        <h2>Content Creation and Social Media Management</h2>
                        <p>
                            Creating engaging content in various forms and managing social media presence to connect with your audience.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurService