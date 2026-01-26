import React from 'react';
import './Portfolio.css';
import ScrollReveal from './ScrollReveal';
import Magnetic from './Magnetic';

const projects = [
    {
        id: 1,
        title: "Nebula Finance",
        category: "Fintech Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "D3.js"]
    },
    {
        id: 2,
        title: "Aether Fashion",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        tags: ["Shopify", "WebGL"]
    },
    {
        id: 3,
        title: "Quantum Architecture",
        category: "Corporate Portfolio",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Framer Motion"]
    },
    {
        id: 4,
        title: "Echo Music",
        category: "Streaming App",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
        tags: ["Mobile", "UI/UX"]
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="portfolio-section">
            <div className="container">
                <ScrollReveal className="section-header">
                    <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
                </ScrollReveal>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} className="project-card group" threshold={0.1} delay={index * 0.1}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <div className="project-tags">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Magnetic strength={0.3}>
                                        <button className="view-btn">View Project</button>
                                    </Magnetic>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
