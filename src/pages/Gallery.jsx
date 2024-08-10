import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'
import GalleryBanner from '../components/Gallery/GalleryBanner'
import Portfolio from '../components/Gallery/Portfolio'

const Gallery = () => {
    return (
        <>
            <Navbar />
            <GalleryBanner />
            <Portfolio />
            <Footer />
        </>
    )
}

export default Gallery