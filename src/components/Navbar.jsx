import React, { useState, useEffect } from 'react';
import './Navbar.css';

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

                <button className="cta-button">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
