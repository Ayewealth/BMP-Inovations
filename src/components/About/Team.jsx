import React from 'react'

const Team = () => {
    return (
        <div className='our_team'>
            <div className="small__section">
                <div className="smaller__container">
                    <div className="our_team-container">
                        <div className="our_team-head" data-aos="fade-up"
                            ata-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div>
                                <span>The Team</span>
                            </div>
                            <h2>The Amazing Team Members Behind BMP</h2>
                        </div>

                        <div className='our_team-content'>
                            <div className='each_team' data-aos="fade-up"
                                ata-aos-delay="70"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img src="/images/team1.jpg" alt="" />
                                <p>Christopher Lerner</p>
                                <span>Cheif Technology Officer</span>
                            </div>
                            <div className='each_team'
                                data-aos="fade-up"
                                ata-aos-delay="80"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img src="/images/team2.jpg" alt="" />
                                <p>Jen Lerner</p>
                                <span>Cheif Financial Officer</span>
                            </div>
                            <div className='each_team'
                                data-aos="fade-up"
                                ata-aos-delay="90"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img src="/images/team3.jpg" alt="" />
                                <p>Daniel Lerner</p>
                                <span>Cheif Excutive Officer</span>
                            </div>
                            <div className='each_team'
                                data-aos="fade-up"
                                ata-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img src="/images/team4.jpg" alt="" />
                                <p>James Lerner</p>
                                <span>Cheif Information Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team