import React from 'react'

import "../components/Home/Home.scss"
import HomeBanner from '../components/Home/HomeBanner'
import Navbar from '../components/common/Nav/Navbar'
import OurService from '../components/Home/OurService'
import OurProducts from '../components/Home/OurProducts'
import Package from '../components/Home/Package'
import Testimonials from '../components/common/Testimonials'
import Footer from '../components/common/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <OurService />
      <OurProducts />
      <Package />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home