import React, { useRef, useState, useEffect } from 'react';

const Magnetic = ({ children, strength = 0.5 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        
        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;
        
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    );
};

export default Magnetic;
