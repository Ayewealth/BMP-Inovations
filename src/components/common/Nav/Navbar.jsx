import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';

import AuthContext from "../../../context/AuthContext"
import { useTheme } from "../../../context/ThemeContext"

import "./Nav.scss"
import Logo from "./../../../assets/bmp innovations.png"
import Logo2 from "./../../../assets/Group 659.png"
const Navbar = () => {
    const [removeMenu, setShowMenu] = useState('remove-menu')

    const [isScrollHeader, setIsScrollHeader] = useState(false);

    let { user, logoutUser } = useContext(AuthContext)
    const { theme } = useTheme()

    const handleScrollHeader = () => {
        if (window.scrollY >= 80) {
            setIsScrollHeader(true);
        } else {
            setIsScrollHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        return () => {
            window.removeEventListener('scroll', handleScrollHeader);
        };
    }, []);

    const toggleRemoveMenu = () => {
        setShowMenu((curr) => (curr === "nav__menu" && "remove-menu"))
    }
    const toggleShowMenu = () => {
        setShowMenu((curr) => (curr === "remove-menu" && "nav__menu"))
    }

    return (
        <header className={`header ${isScrollHeader ? 'scroll-header' : ''}`}>
            <nav className='nav container'>
                <div className="nav__toggle" onClick={toggleShowMenu}>
                    <Menu />
                </div>
                <div className='nav__logo'>
                    <Link to="/">
                        <img src={theme === "light" ? Logo : Logo2} alt='BMP Inovation Logo' />

                    </Link>
                </div>
                <div className={`nav__menu ${removeMenu}`}>
                    <X className='nav__close' id='nav-close' onClick={toggleRemoveMenu} size={18} />
                    <ul className='nav__list grid'>
                        <li>
                            <Link className='nav__link' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="">Gallery</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="">Contact</Link>
                        </li>
                        <li>
                            <Link className='nav__link' to="">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav__btns'>
                    <div className='nav__right'>
                        {/* <Link to="/cart"><ShoppingCart className='cart' /> </Link> */}
                        {user ? (
                            <div className='user'>
                                <Link to="/"><ShoppingCart className='cart' size={18} /> </Link>

                                <button onClick={logoutUser}>Logout</button>
                                {user &&
                                    <div>
                                        <p>{user.name}</p>
                                    </div>
                                }
                            </div>
                        ) : (

                            <div className='nav__auth'>
                                <Link to="/"><ShoppingCart className='cart' size={18} /> </Link>

                                <Link to="/login">Signin</Link>
                                <Link id='reg-btn' to="/register">Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar