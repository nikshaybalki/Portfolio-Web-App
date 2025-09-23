// src/components/Header.jsx

import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Make sure you have logo.png in assets

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img src={logo} height="65px" width="120px" className="logo" alt="logo" />
                    <ul id="sidemenu" style={{ right: isMenuOpen ? '0' : '-200px' }}>
                        <li><a href="#header">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <i className="fa-solid fa-circle-xmark" onClick={() => setMenuOpen(false)}></i>
                    </ul>
                    <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
                </nav>
                <div className="header-text">
                    <p>Web Developer</p>
                    <h1>Hi, I'm <span>Nikshay</span><br />From India</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;