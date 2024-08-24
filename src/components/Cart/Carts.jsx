import React from 'react'
import { IoMdTrash } from "react-icons/io";

import "./Carts.scss"

const Carts = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className="cart__container">
                    <div className='cart__items'
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>My Shopping</h2>
                        <div className='table__container'>
                            <table>
                                <tr>
                                    <th>
                                        Product Info
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='cart__item'>
                                            <img src="/images/brand identity.jpg" alt="" />
                                            <div id='cart__item-inner'>
                                                <div>
                                                    <p>Business Card</p>
                                                    <span>Brand Identity</span>
                                                </div>

                                                <div id='cart__item-inner-b'>
                                                    <span>
                                                        <IoMdTrash />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='cart__item'>
                                            <img src="/images/software.png" alt="" />
                                            <div id='cart__item-inner'>
                                                <div>
                                                    <p>Web Development</p>
                                                    <span>Software Development</span>
                                                </div>

                                                <div id='cart__item-inner-b'>
                                                    <span>
                                                        <IoMdTrash />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='cart__item'>
                                            <img src="/images/brand identity.jpg" alt="" />
                                            <div id='cart__item-inner'>
                                                <div>
                                                    <p>Content Strategy</p>
                                                    <span>Content and Social Media Management</span>
                                                </div>

                                                <div id='cart__item-inner-b'>
                                                    <span>
                                                        <IoMdTrash />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                    <td>
                                        $214.00
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='cart__checkout'
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>Order Summary</h2>

                        <div className='cart__checkout-form'>
                            <div className='cart__checkout-form-inner'>
                                <p>Sub Total</p>
                                <p>$214.00</p>
                            </div>
                            <div className='cart__checkout-form-inner-design'></div>
                            <div className='cart__checkout-form-inner-coupon'>
                                <p>Coupon Code</p>
                                <div>
                                    <input type="text" placeholder='Your Code' />
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className='cart__checkout-form-inner'>
                                <p>Total</p>
                                <p>$214.00</p>
                            </div>
                            <button className='cart__checkout-form-btn'>Processed Checkout</button>
                            <div className='cart__or'>
                                <span>Or</span>
                                <p>You can send us a message on any of our social to fully understand what to do before your processed to Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts