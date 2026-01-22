import React from 'react';
import { Monitor, Palette, Globe, Rocket, LineChart, Shield } from 'lucide-react';
import './Services.css';
import ScrollReveal from './ScrollReveal';

const services = [
    {
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "We craft intuitive and visually stunning interfaces that users love to interact with.",
        color: "var(--primary-accent)"
    },
    {
        icon: <Monitor size={32} />,
        title: "Web Development",
        description: "High-performance websites built with modern technologies like React, Vite, and Next.js.",
        color: "var(--cta-color)"
    },
    {
        icon: <Globe size={32} />,
        title: "Brand Strategy",
        description: "Comprehensive branding solutions that align your visual identity with your business goals.",
        color: "var(--text-main)"
    },
    {
        icon: <Rocket size={32} />,
        title: "Performance Optimization",
        description: "Lightning-fast load times and smooth animations for superior user retention.",
        color: "var(--secondary-accent)"
    },
    {
        icon: <LineChart size={32} />,
        title: "SEO & Growth",
        description: "Data-driven strategies to increase visibility and drive organic traffic to your site.",
        color: "var(--primary-accent)"
    },
    {
        icon: <Shield size={32} />,
        title: "Security & Support",
        description: "Robust security measures and ongoing support to keep your business running safely.",
        color: "var(--cta-color)"
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">
                        We combine creativity with technical excellence to deliver digital products that stand out.
                    </p>
                </ScrollReveal>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            className="service-card glass-panel"
                            style={{ '--accent-color': service.color }}
                            delay={index * 0.1}
                            threshold={0.1}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
