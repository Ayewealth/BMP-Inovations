import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { AiFillEye } from 'react-icons/ai'

import dummyProducts from '../../utils/products'

const OurProducts = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProduct] = useState([])

    useEffect(() => {
        setProducts(dummyProducts)
        setFilterProduct(dummyProducts)
    }, [])

    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }])

            if (item === 'All') {
                setFilterProduct(products)
            } else {
                setFilterProduct(products.filter((product) => product.category.includes(item)))
            }
        }, 500)
    }

    return (
        <div className='small__section'>
            <div className='container'>
                <div className='ourproducts__head' data-aos="fade-up" ata-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <h1>Our <span>Products</span></h1>
                    <p></p>
                </div>
                <div className='home__products'>
                    <div className='home__products-filter' data-aos="fade-up" ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        {['All', 'Web', "Mobile"].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkFilter(item)}
                                className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* products */}
                    <motion.div
                        animate={animateCard}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className='app__work-portfolio'
                    >
                        {filterProduct.map((product, index) => (
                            <div key={index} className='app__work-item app__flex' data-aos="fade-up" ata-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out">
                                <div className='app__work-img app__flex'>
                                    <img src={product.img} alt="" />
                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                        className='app__work-hover app__flex'
                                    >
                                        <a href={product.link} target='_blank' rel='noreferrer'>
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className='app__flex'
                                            >
                                                <AiFillEye />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className='app__work-content app__flex'>
                                    <h4 className='bold-text'>{product.title}</h4>
                                    <p className='p-text2' style={{ marginTop: 10 }}>{product.desc}</p>

                                    <div className='app__work-tag app__flex'>
                                        <p className='p-text'>{product.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts