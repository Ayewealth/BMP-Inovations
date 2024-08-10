import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import "./Testimonials.scss";
import dummyTestimonials from '../../utils/testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTestimonials(dummyTestimonials);
    }, []);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    if (testimonials.length === 0) {
        return null;
    }

    const test = testimonials[currentIndex];

    return (
        <div className='small__section'>
            <div className='container'>
                <div className='testimonials__head' data-aos="fade-up" ata-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <h2>Our Client's Speak</h2>
                    <p>Don't take our word for it listen to what our client have to say</p>
                </div>
                <div className='testimonial app__flex' data-aos="fade-up" ata-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <motion.div
                        className='testimonial__item'
                        key={test.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src="/images/software.png" alt="" />
                        <div className='testimonial__content'>
                            <p>{test.feedback}</p>
                            <div>
                                <h4>{test.name}</h4>
                                <h5>{test.company}</h5>
                            </div>
                        </div>
                    </motion.div>

                    <div className='testimonial__btns app__flex'>
                        <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
