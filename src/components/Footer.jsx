import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="logo-text">Ui-Ux<span className="accent">Pro</span></h2>
                        <p className="footer-tagline">
                            Elevating digital experiences for forward-thinking brands.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-list">
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Brand Strategy</a></li>
                            <li><a href="#">Performance</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group newsletter">
                        <h4 className="footer-heading">Stay Updated</h4>
                        <p className="newsletter-text">Subscribe to our newsletter for the latest design trends.</p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                id="newsletter-email"
                                name="email"
                                placeholder="Enter your email"
                                className="glass-panel"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Ui-Ux Pro Agency. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
