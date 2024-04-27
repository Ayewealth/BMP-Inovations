import React from 'react'

import "./HomeBlog.scss"
import { Link } from 'react-router-dom'
import { MoveUpRight, CalendarPlus2 } from 'lucide-react';

const HomeBlog = () => {
    return (
        <div className='small__section'>
            <div className='container'>
                <div className='home__blog'>
                    <div className='home__blog-head'>
                        <p>EXPLORE OUR THOUGHTS</p>
                        <h2>The Innovation Diaries</h2>
                    </div>
                    <div className='home__blogs'>
                        <div className='home__blog-post'>
                            <div className='home__blog-post-img'>
                                <img src="/images/blog-img1.jpg" alt="" />
                                <div>
                                    <CalendarPlus2 />
                                    <p>03 January, 2024</p>
                                </div>
                            </div>
                            <div className='home__blog-post-inner'>
                                <div>
                                    <Link>Development</Link>
                                    <span></span>
                                    <p>Comments (20)</p>
                                </div>
                                <p id='blog__title'>Decoding the Cloud A Deep Dive into Saas Trends.</p>
                            </div>
                            <Link id='read__more'>Read More <MoveUpRight /></Link>
                        </div>

                        <div className='home__blog-post'>
                            <div className='home__blog-post-img'>
                                <img src="/images/blog-img3.jpg" alt="" />
                                <div>
                                    <CalendarPlus2 />
                                    <p>03 January, 2024</p>
                                </div>
                            </div>
                            <div className='home__blog-post-inner'>
                                <div>
                                    <Link>Consulting</Link>
                                    <span></span>
                                    <p>Comments (20)</p>
                                </div>
                                <p id='blog__title'>The complete guide unlocking your team's power.</p>
                            </div>
                            <Link id='read__more'>Read More <MoveUpRight /></Link>
                        </div>

                        <div className='home__blog-post'>
                            <div className='home__blog-post-img'>
                                <img src="/images/blog-img4.jpg" alt="" />
                                <div>
                                    <CalendarPlus2 />
                                    <p>03 January, 2024</p>
                                </div>
                            </div>
                            <div className='home__blog-post-inner'>
                                <div>
                                    <Link>Development</Link>
                                    <span></span>
                                    <p>Comments (20)</p>
                                </div>
                                <p id='blog__title'>How to Start and Grow You Own Startup Company.</p>
                            </div>
                            <Link id='read__more'>Read More <MoveUpRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog