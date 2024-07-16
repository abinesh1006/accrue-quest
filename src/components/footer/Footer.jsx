import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const buttons = [
        { name: 'Leaderboard', routeUrl: '/leaderboard' },
        { name: 'Mine', routeUrl: '/mine' },
        { name: 'Tasks', routeUrl: '/tasks' },
        { name: 'Profile', routeUrl: '/profile' },
        { name: 'Quiz', routeUrl: '/quiz' }
    ];

    return (
        <footer className="bg-blue-200 fixed bottom-0 w-full">
            <div className="container mx-auto flex items-center justify-center py-2">
                <div className="flex justify-center w-full">
                    {buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={button.routeUrl}
                            className="flex-1 bg-blue-600 text-white text-sm hover:bg-blue-500 px-4 py-2 rounded text-center"
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
