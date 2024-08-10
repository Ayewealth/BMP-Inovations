import React from 'react'

import "./CartBanner.scss"

const CartBanner = () => {
    return (
        <div className='cart__banner'>
            <div className="section">
                <div className="container">
                    <div className="cart__banner-container"
                        data-aos="fade-up"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>My Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBanner