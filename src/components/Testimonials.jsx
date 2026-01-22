import React from 'react';
import './Testimonials.css';
import ScrollReveal from './ScrollReveal';

const testimonials = [
    {
        quote: "Working with Ui-Ux Pro was a game-changer. They transformed our clunky SaaS platform into a sleek, user-friendly masterpiece.",
        author: "Sarah Jenkins",
        role: "CTO, FinTech Sol",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        quote: "The attention to detail is unmatched. Every animation, every pixel serves a purpose. Our conversion rates doubled after the redesign.",
        author: "Michael Chen",
        role: "Founder, GrowthBox",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
        quote: "Professional, creative, and incredibly technical. They didn't just build a website; they built a digital experience.",
        author: "Elena Rodriguez",
        role: "Marketing Director, LuxeCorp",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2 className="section-title">Client <span className="gradient-text">Stories</span></h2>
                </ScrollReveal>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <ScrollReveal key={index} className="testimonial-card glass-panel" threshold={0.1 * (index % 3)}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{item.quote}</p>
                            <div className="testimonial-author">
                                <img src={item.image} alt={item.author} className="author-image" />
                                <div className="author-info">
                                    <h4 className="author-name">{item.author}</h4>
                                    <p className="author-role">{item.role}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
