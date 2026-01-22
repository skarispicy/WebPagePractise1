import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`reveal-fade-up ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
