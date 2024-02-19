import React from 'react'

import "../components/Home/Home.scss"
import HomeBanner from '../components/Home/HomeBanner'
import Navbar from '../components/common/Nav/Navbar'
import OurService from '../components/Home/OurService'
import OurProducts from '../components/Home/OurProducts'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <OurService />
      <OurProducts />
    </>
  )
}

export default Home