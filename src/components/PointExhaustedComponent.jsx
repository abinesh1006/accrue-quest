import React from 'react';
import { Link } from 'react-router-dom';

const PointExhaustedComponent = () => {
    return (
       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">

            <h2>Your points are exhausted!</h2>
            <p>Click on the green box that appears randomly every second for 1 minute, once every hour.</p>
            <Link to="/grid-click" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Start Grid Click Game</Link>
        </div>
</div>
    );
};

export default PointExhaustedComponent;
