// FloatingBrain.jsx
import React from 'react';
import './FloatingBrain.css'; // Import CSS for brain animation (optional)

const FloatingBrain = ({ x, y }) => (
    <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
        style={{ transform: `translate(${x}px, ${y}px)` }}>
        <div className="w-full h-full bg-gray-600 rounded-full animate-float" />
    </div>
);

export default FloatingBrain;
