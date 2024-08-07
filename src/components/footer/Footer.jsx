import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const buttons = [
        { name: 'Home', routeUrl: '/', icon: 'fa-solid fa-home' },
        { name: 'Quiz', routeUrl: '/quiz', icon: 'fa-solid fa-exchange-alt' },
        { name: 'Mine', routeUrl: '/mine', icon: 'fa-solid fa-gem' },
        { name: 'Profile', routeUrl: '/profile', icon: 'fa-solid fa-user-friends' },
        { name: 'Leaderboard', routeUrl: '/leaderboard', icon: 'fa-solid fa-coins' },
        { name: 'Tasks', routeUrl: '/tasks', icon: 'fa-solid fa-parachute-box' },
        { name: 'RoadMap', routeUrl: '/roadMap', icon: 'fa-solid fa-parachute-box' }
    ];

    return (
        <footer className="fixed bottom-3 left-0 w-full flex justify-center">
            <div className="bg-blue-200 flex justify-around
items-center w-full max-w-sm rounded-lg shadow-lg">
                {buttons.map((button, index) => (
                    <Link
                        key={index}
                        to={button.routeUrl}
                        className="flex flex-col items-center text-blue-800 text-xs hover:text-blue-600"
                    >
                        <i className={`${button.icon} pt-1 text-xl mb-1`}></i>
                        <span className="text-[10px]">{button.name}</span>
                    </Link>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
