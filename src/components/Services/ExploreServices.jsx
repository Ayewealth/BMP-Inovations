import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

import serviceData from '../../utils/services'

const ExploreServices = () => {
    const [activeFilter, setActiveFilter] = useState('Software Development')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [services, setServices] = useState([])
    const [filterServices, setFilterServices] = useState([])

    useEffect(() => {
        setServices(serviceData);
        setFilterServices(serviceData.filter((service) => service.category.includes(activeFilter)));
    }, [activeFilter]);


    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])

            if (item) {
                setFilterServices(services.filter((service) => service.category.includes(item)))
            }
        }, 500)
    }

    return (
        <div className='small__section' id='services'>
            <div className="container">
                <div className="explore__services-container">
                    <div className="explore__services-head"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h1>Explore Our Services</h1>
                    </div>

                    <div className='explore__services-contents'>
                        <div className='home__products-filter'
                            data-aos="fade-up"
                            ata-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            {['Software Development', 'Brand Identity', "Automation", "Digital Marketing", "Content and Social Media Management"].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleWorkFilter(item)}
                                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div data-aos="fade-up"
                            ata-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <motion.div
                                animate={animateCard}
                                transition={{ duration: 0.5, delayChildren: 0.5 }}
                                className='explore__services-content'
                            >
                                {filterServices.map((service, index) => (
                                    <>
                                        <div key={index} className='explore__service'
                                        >
                                            <h2>{service.section_title}</h2>
                                            <p>{service.section_desc}</p>
                                        </div>
                                        <Swiper
                                            slidesPerView={1.8}
                                            spaceBetween={30}
                                            modules={[Pagination, Autoplay]}
                                            autoplay={{
                                                delay: 3000,
                                            }}
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                                640: {
                                                    slidesPerView: 1.2,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                1024: {
                                                    slidesPerView: 1.5,
                                                },
                                            }}
                                            className="mySwiper"
                                        >
                                            {service.services.map((service, index) => (
                                                <SwiperSlide className='explore__service-services' key={index}>
                                                    {/* <div className='explore__service-services' > */}
                                                    <img src={service.img} alt="" />
                                                    <div className="explore__service-services-inner">
                                                        <p>{service.title}</p>
                                                        <div className='rating'>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className='explore__service-services-inner-design' />
                                                        <div className='explore__service-services-inner-bottom'>
                                                            <span>${service.price}</span>
                                                            <div>
                                                                <ShoppingCart />
                                                                <span>Add to cart</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreServices