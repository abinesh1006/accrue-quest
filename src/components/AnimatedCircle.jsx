import React, { useState, useEffect } from 'react';

const svgIcons = [
    'M10 10 H 90 V 90 H 10 L 10 10', // Example SVG path data
    'M50 15 L 61 70 L 95 25 L 5 25 L 39 70 Z',
    'M50 5 L 11 95 H 95 Z'
];

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const AnimatedCircle = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(getRandomColor());
    const [svgIndex, setSvgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(getRandomColor());
            setSvgIndex((prevIndex) => (prevIndex + 1) % svgIcons.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Clicker Game</h1>
            <p className="text-2xl mb-4">Count: {count}</p>
            <div
                onClick={handleClick}
                className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition duration-300"
                style={{ backgroundColor: color }}
            >
                <svg className="w-12 h-12" viewBox="0 0 100 100">
                    <path d={svgIcons[svgIndex]} fill="none" stroke="white" strokeWidth="5" />
                </svg>
            </div>
        </div>
    );
};

export default AnimatedCircle;
