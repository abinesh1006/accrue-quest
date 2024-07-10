import React, { useState } from 'react';
import BookIcon from './BookIcon'; // Import BookIcon component
import PenIcon from './PenIcon'; // Import PenIcon component
import ProgressBar from './quiz/ProgressBar';
const ClickerGame = ({ currentPoints, onPointsUpdate }) => {
    const [isBookVisible, setIsBookVisible] = useState(true); // Track which icon is visible

    const handleClick = () => {

        setIsBookVisible(!isBookVisible);
        onPointsUpdate((prevPoints) => prevPoints + 200);
        // Toggle between BookIcon and PenIcon
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg text-center relative">
                {/* Circle with clickable area */}
                <div
                    className="relative flex justify-center items-center cursor-pointer"
                    onClick={handleClick}>
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                        <div className="w-full h-full flex justify-center items-center rounded-full">
                            {/* Render BookIcon or PenIcon based on state */}
                            {isBookVisible ? <BookIcon className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64" /> :
                                <PenIcon className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64" />}

                         
                        </div>
                       
                       
                    </div>
                   
                </div>
               
                <ProgressBar currentPoints={currentPoints} />
                <p> Current coins: {currentPoints}</p>
            </div>
        </div>
    );
};

export default ClickerGame;
