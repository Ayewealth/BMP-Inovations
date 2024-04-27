import React from 'react'

import "../components/About/About.scss"
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'
import AboutBanner from '../components/About/AboutBanner'
import CEOSpeech from '../components/About/CEOSpeech'
import OurStory from '../components/About/OurStory'
import Workflow from '../components/About/Workflow'
import Team from '../components/About/Team'
import Brand from '../components/About/Brand'
import Testimonials from '../components/common/Testimonials'
import HomeBlog from '../components/common/HomeBlog'

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <CEOSpeech />
            <OurStory />
            <Workflow />
            <Team />
            <Brand />
            <Testimonials />
            <HomeBlog />
            <Footer />
        </div>
    )
}

export default About