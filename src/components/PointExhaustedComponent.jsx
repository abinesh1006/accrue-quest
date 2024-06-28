import React from 'react';
import { Link } from 'react-router-dom';

const PointExhaustedComponent = () => {
    return (
        <div className="flex flex-col items-center">
            <h2>Your points are exhausted!</h2>
            <p>Click on the green box that appears randomly every second for 1 minute, once every hour.</p>
            <Link to="/grid-click" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Start Grid Click Game</Link>
        </div>
    );
};

export default PointExhaustedComponent;
