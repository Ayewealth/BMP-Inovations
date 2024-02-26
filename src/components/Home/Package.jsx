import React from 'react'
import { CheckCircle2, PercentCircle, HelpCircle } from 'lucide-react';
const Package = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className="package__container">
                    <div className='package__head'>
                        <h2>Explore Our Exciting Range Of Tailored Packages</h2>
                        <p>We offer the perfect packages to supercharge your growth and elevate your brand or business to the next level.</p>
                    </div>
                    <div className='packages'>
                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Stater</h2>
                                <span>$50</span>
                                <p>Individuals or small businesses looking for a simple and affordable start to their brand identity.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Up to 3 times correction.</li>
                                <li id='not_part'><PercentCircle /> Business Card Design.</li>
                                <li id='not_part'><PercentCircle /> Invoices Design.</li>
                                <li id='not_part'><PercentCircle /> Full Brand Identity.</li>
                                <li id='not_part'><PercentCircle /> Comprehensive and flexible brand representation.</li>
                                <li id='not_part'><PercentCircle /> Website or WebApp.</li>
                                <li id='not_part'><PercentCircle /> Mobile App.</li>
                                <li id='not_part'><PercentCircle /> Social Media Management and Content Creation.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Bronze</h2>
                                <span>$100</span>
                                <p>Small businesses looking to establish a more comprehensive brand identity, including basic printed materials.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Business Card Design.</li>
                                <li><CheckCircle2 /> Invoices Design.</li>
                                <li><CheckCircle2 /> Up to 3 times correction.</li>
                                <li id='not_part'><PercentCircle /> Full Brand Identity.</li>
                                <li id='not_part'><PercentCircle /> Comprehensive and flexible brand representation.</li>
                                <li id='not_part'><PercentCircle /> Website or WebApp.</li>
                                <li id='not_part'><PercentCircle /> Mobile App.</li>
                                <li id='not_part'><PercentCircle /> Social Media Management and Content Creation.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Silver</h2>
                                <span>$300</span>
                                <p>Small to medium-sized businesses seeking a complete brand identity without the need for additional printed materials.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Business Card Design.</li>
                                <li><CheckCircle2 /> Invoices Design.</li>
                                <li><CheckCircle2 /> Full Brand Identity.</li>
                                <li><CheckCircle2 /> Unlimited correction.</li>
                                <li><CheckCircle2 /> Comprehensive and flexible brand representation.</li>
                                <li id='not_part'><PercentCircle /> Website or WebApp.</li>
                                <li id='not_part'><PercentCircle /> Mobile App.</li>
                                <li id='not_part'><PercentCircle /> Social Media Management and Content Creation.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Gold</h2>
                                <span>
                                    $500
                                    <HelpCircle />
                                </span>
                                <p>Established businesses looking for a complete brand identity and an online presence.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Business Card Design.</li>
                                <li><CheckCircle2 /> Invoices Design.</li>
                                <li><CheckCircle2 /> Full Brand Identity.</li>
                                <li><CheckCircle2 /> Unlimited correction.</li>
                                <li><CheckCircle2 /> Comprehensive and flexible brand representation.</li>
                                <li><CheckCircle2 /> Website.</li>
                                <li id='not_part'><PercentCircle /> Mobile App.</li>
                                <li id='not_part'><PercentCircle /> Social Media Management and Content Creation.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                            <div className='tooltip'>
                                Monthly management fee: <span>$100.</span>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Platinum</h2>
                                <span>
                                    $1,500
                                    <HelpCircle />
                                </span>
                                <p>Businesses wanting a comprehensive brand identity, a sophisticated web presence, and social media management.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Business Card Design.</li>
                                <li><CheckCircle2 /> Invoices Design.</li>
                                <li><CheckCircle2 /> Full Brand Identity.</li>
                                <li><CheckCircle2 /> Unlimited correction.</li>
                                <li><CheckCircle2 /> Comprehensive and flexible brand representation.</li>
                                <li><CheckCircle2 /> Website or WebApp.</li>
                                <li><CheckCircle2 /> Social Media Management and Content Creation.</li>
                                <li id='not_part'><PercentCircle /> Mobile App.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                            <div className='tooltip'>
                                Monthly management fee: <span>$500.</span>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='package__head-text'>
                                <h2>Diamond</h2>
                                <span>
                                    $2,500 - $5,000
                                    <HelpCircle />
                                </span>
                                <p>Businesses wanting a comprehensive brand identity, a sophisticated web presence, and social media management.</p>
                            </div>
                            <span className='package__design'></span>
                            <div className='package__list'>
                                <li><CheckCircle2 /> Logo Design.</li>
                                <li><CheckCircle2 /> Business Card Design.</li>
                                <li><CheckCircle2 /> Invoices Design.</li>
                                <li><CheckCircle2 /> Full Brand Identity.</li>
                                <li><CheckCircle2 /> Unlimited correction.</li>
                                <li><CheckCircle2 /> Comprehensive and flexible brand representation.</li>
                                <li><CheckCircle2 /> Website or WebApp.</li>
                                <li><CheckCircle2 /> Mobile App.</li>
                                <li><CheckCircle2 /> Social Media Management and Content Creation.</li>
                            </div>
                            <div className='package__button'>
                                <button>Subscribe</button>
                            </div>
                            <div className='tooltip'>
                                Monthly management fee: <span>$1000.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package