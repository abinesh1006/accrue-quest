import React, { useState, useEffect } from 'react';

// Sample data for levels and users
const levels = [
    {
        id: 1,
        name: 'Level 1',
        users: [
            { id: 1, name: 'Alice', score: 500, profilePic: '👩‍💻' },
            { id: 2, name: 'Bob', score: 450, profilePic: '👨‍💻' },
            { id: 3, name: 'Charlie', score: 400, profilePic: '👨‍💼' },
            { id: 4, name: 'David', score: 380, profilePic: '👩‍🔧' },
            { id: 5, name: 'Eve', score: 350, profilePic: '👩‍🎨' },
            { id: 6, name: 'Frank', score: 320, profilePic: '👨‍🚀' },
            { id: 7, name: 'Grace', score: 310, profilePic: '👩‍🏫' },
            { id: 8, name: 'Henry', score: 300, profilePic: '👨‍💼' },
            { id: 9, name: 'Ivy', score: 280, profilePic: '👩‍🔬' },
            { id: 10, name: 'Jack', score: 270, profilePic: '👨‍🎤' },
        ],
    },
    {
        id: 2,
        name: 'Level 2',
        users: [
            { id: 11, name: 'Kate', score: 520, profilePic: '👩‍💻' },
            { id: 12, name: 'Liam', score: 510, profilePic: '👨‍💻' },
            { id: 13, name: 'Mia', score: 500, profilePic: '👨‍💼' },
            { id: 14, name: 'Noah', score: 490, profilePic: '👩‍🔧' },
            { id: 15, name: 'Olivia', score: 480, profilePic: '👩‍🎨' },
            { id: 16, name: 'Peter', score: 470, profilePic: '👨‍🚀' },
            { id: 17, name: 'Quinn', score: 460, profilePic: '👩‍🏫' },
            { id: 18, name: 'Ryan', score: 450, profilePic: '👨‍💼' },
            { id: 19, name: 'Samantha', score: 440, profilePic: '👩‍🔬' },
            { id: 20, name: 'Thomas', score: 430, profilePic: '👨‍🎤' },
        ],
    },
];

const Leaderboard = ({ currentUserId, currentScore, currentRank }) => {
    console.log(currentUserId + " -- " + currentRank)

    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [currentLevelUsers, setCurrentLevelUsers] = useState([]);

    useEffect(() => {
        const fetchLeaderboardData = () => {
            setTimeout(() => {
                setCurrentLevelUsers(levels[currentLevelIndex].users);
            }, 1000);
        };

        fetchLeaderboardData();
    }, [currentLevelIndex]);

    const goToPreviousLevel = () => {
        setCurrentLevelIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const goToNextLevel = () => {
        setCurrentLevelIndex(prevIndex =>
            prevIndex < levels.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-lg px-8 pt-8 bg-white rounded-lg shadow-lg relative">
                <div className="leaderboard">
                    {levels.map((level, index) => (
                        <div key={level.id} className={`mb-8 ${index === currentLevelIndex ? 'block' : 'hidden'}`}>
                            <h2 className="text-xl font-medium mb-4">Leaderboard {level.name}</h2>
                            <div className="overflow-y-auto max-h-80" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                <style>
                                    {`
                                    .overflow-y-auto::-webkit-scrollbar {
                                        display: none;
                                    }
                                    `}
                                </style>
                                {level.users.map(user => (
                                    <div
                                        key={user.id}
                                        className={`rounded-lg shadow-md p-2 mb-2 flex items-center space-x-2 ${user.id === currentUserId ? 'bg-blue-600' : 'bg-blue-200'}`}
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-sm text-center">
                                            {user.profilePic}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-medium text-black">{user.name}</div>
                                                <div className="text-gray-700 text-xs">Score: {user.score}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="rounded-lg shadow-md p-2 mt-2 flex items-center space-x-2 bg-blue-600"
                            >
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-sm text-center">
                                    🧑‍💼
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium text-white">{currentUserId}</div>
                                        <div className="text-gray-700 text-white text-xs">Score: {currentScore}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button
                        className={`transform -translate-x-1/2 ${currentLevelIndex > 0 ? 'block' : 'hidden'}`}
                        onClick={goToPreviousLevel}
                    >
                        &lt;
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                        className={`transform translate-x-1/2 ${currentLevelIndex < levels.length - 1 ? 'block' : 'hidden'}`}
                        onClick={goToNextLevel}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
