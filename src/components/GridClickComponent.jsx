import React, { useState, useEffect } from 'react';

const GridClickComponent = () => {
    const [score, setScore] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds

    // Function to randomly show green box every second
    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(Math.random() > 0.5); // 50% chance to show green box
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Countdown timer
    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleBoxClick = () => {
        if (isActive) {
            setScore(score + 1);
            setIsActive(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2>Grid Click Game</h2>
            <p>Click on the green box that appears randomly every second for 1 minute.</p>
            <div className="mt-4 p-2 border border-gray-300 rounded-lg">
                <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 36 }, (_, index) => (
                        <div
                            key={index}
                            className={`h-12 bg-${isActive ? 'green' : 'gray'}-400 flex justify-center items-center rounded-lg cursor-pointer`}
                            onClick={handleBoxClick}
                        >
                            {/* Display content or just color based on isActive */}
                            {isActive && <span className="text-white font-bold">Click Me</span>}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-4">Time left: {timeLeft} seconds</p>
            <p className="mt-2">Score: {score}</p>
        </div>
    );
};

export default GridClickComponent;
