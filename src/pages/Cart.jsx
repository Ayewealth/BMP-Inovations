import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'
import CartBanner from '../components/Cart/CartBanner'
import Carts from '../components/Cart/Carts'

const Cart = () => {
    return (
        <>
            <Navbar />
            <CartBanner />
            <Carts />
            <Footer />
        </>
    )
}

export default Cart