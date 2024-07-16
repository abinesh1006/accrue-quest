import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const buttons = [
        { name: 'Quiz', routeUrl: '/quiz' },
        { name: 'Mine', routeUrl: '/mine' },
        { name: 'Tasks', routeUrl: '/tasks' },
        { name: 'Profile', routeUrl: '/profile' },
        { name: 'Leaderboard', routeUrl: '/leaderboard' }
    ];

    return (
        <footer className="bg-blue-200 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto flex flex-col items-center justify-between py-1 md:py-2 md:flex-row md:justify-between">
                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-2 w-full">
                    {buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={button.routeUrl}
                            className="bg-blue-600 text-white text-xs hover:bg-blue-500 px-3 py-1 rounded text-center flex-1 min-w-[100px]"
                        >
                            {button.name}
                        </Link>
                    ))}
                </div>

               
            </div>
        </footer>
    );
};

export default Footer;
