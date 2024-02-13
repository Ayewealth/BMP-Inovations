import React from 'react'

import "../components/Home/Home.scss"
import HomeBanner from '../components/Home/HomeBanner'
import Navbar from '../components/common/Nav/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
    </div>
  )
}

export default Home