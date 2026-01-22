import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Magnetic from './Magnetic';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">
                    <span className="logo-text">Ui-Ux<span className="accent">Pro</span></span>
                </a>

                <div className="nav-links">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#testimonials" className="nav-link">Reviews</a>
                </div>

                <Magnetic strength={0.25}>
                    <button className="cta-button">Get Started</button>
                </Magnetic>
            </div>
        </nav>
    );
};

export default Navbar;
