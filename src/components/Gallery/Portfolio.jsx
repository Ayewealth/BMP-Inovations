import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";

import "./GalleryPortfolio.scss";
import portfolioData from '../../utils/portfolio';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [services, setServices] = useState([]);
    const [filterServices, setFilterServices] = useState([]);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observerTarget = useRef(null);

    const fetchData = async () => {
        if (loading) return;
        setLoading(true);

        const newData = portfolioData.slice((page - 1) * 10, page * 10);
        setServices(prev => [...prev, ...newData]);
        setFilterServices(prev => [...prev, ...newData]);
        setLoading(false);
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        setServices(portfolioData);
        setFilterServices(portfolioData);
    }, [activeFilter]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    fetchData();
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget, loading]);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });

            if (item === "All") {
                setFilterServices(services);
            } else {
                setFilterServices(services.filter((service) => service.category.includes(item)));
            }
        }, 500);
    };

    return (
        <div className='small__section'>
            <div className="container">
                <div className="portfolio__container">
                    <div className="portfolio__head" data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <p>
                            Some of our Creative & Finest Work.
                        </p>
                    </div>

                    <div className='portfolio-contents'
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className='home__products-filter'>
                            {['All', 'Software Development', 'Brand Identity', "Automation", "Digital Marketing", "Content and Social Media Management"].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleWorkFilter(item)}
                                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <motion.div
                            animate={animateCard}
                            transition={{ duration: 0.5, delayChildren: 0.5 }}
                            className='portfolios'
                        >
                            {filterServices.map((product, index) => (
                                <div key={index} className='portfolio'>
                                    <img src={product.image} alt="" />
                                    <div className='portfolio__content'>
                                        <h2>{product.title}</h2>
                                        <ul>
                                            <li>{product.category}</li>
                                            <li>{product.child_category}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        {/* Observer target for infinite scrolling */}
                        <div ref={observerTarget} style={{ height: '1px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
