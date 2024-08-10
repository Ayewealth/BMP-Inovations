import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'
import ContactBanner from '../components/Contact/ContactBanner'
import ContactTop from '../components/Contact/ContactTop'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactBanner />
            <ContactTop />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact