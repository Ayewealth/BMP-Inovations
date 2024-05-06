import React from 'react'

import "../components/Services/Services.scss"
import Navbar from '../components/common/Nav/Navbar'
import ServicesBanner from '../components/Services/ServicesBanner'
import Footer from '../components/common/Footer/Footer'
import Services from '../components/Services/Services'
import ExploreServices from '../components/Services/ExploreServices'
import Package from '../components/Home/Package'
import Testimonials from '../components/common/Testimonials'

const Service = () => {
    return (
        <>
            <Navbar />
            <ServicesBanner />
            <Services />
            <ExploreServices />
            <Package />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Service