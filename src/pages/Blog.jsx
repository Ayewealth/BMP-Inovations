import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'
import BlogBanner from '../components/Blog/BlogBanner'
import BlogPosts from '../components/Blog/BlogPosts'

const Blog = () => {
    return (
        <>
            <Navbar />
            <BlogBanner />
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Blog