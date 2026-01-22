import React from 'react';
import './Hero.css';
import ScrollReveal from './ScrollReveal';
import Magnetic from './Magnetic';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <ScrollReveal className="hero-text-wrapper">
                    <div className="badge glass-panel">
                        <span className="badge-dot"></span>
                        Accepting New Projects for 2026
                    </div>

                    <h1 className="hero-title">
                        Crafting Digital <br />
                        <span className="gradient-text">Masterpieces</span>
                    </h1>

                    <p className="hero-subtitle">
                        We build immersive, high-performance websites specifically designed
                        to captivate your audience and elevate your brand authority.
                    </p>

                    <div className="hero-actions">
                        <Magnetic strength={0.2}>
                            <button className="btn-primary">View Our Work</button>
                        </Magnetic>
                        <Magnetic strength={0.2}>
                            <button className="btn-secondary">Book a Call</button>
                        </Magnetic>
                    </div>
                </ScrollReveal>

                <ScrollReveal className="hero-visual" threshold={0.2}>
                    <div className="glowing-orb orb-1"></div>
                    <div className="glowing-orb orb-2"></div>
                    <div className="hero-card glass-panel">
                        <div className="card-header">
                            <div className="traffic-lights">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src="/nano-ui-mockup.png" alt="Nano Banana Dashboard" className="hero-mockup-img" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;
