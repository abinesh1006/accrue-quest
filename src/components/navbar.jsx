import { useState, useRef } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import BatteryBar from './Batterybar';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import {  useTonAddress } from '@tonconnect/ui-react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPoints }) => {
    const userFriendlyAddress = useTonAddress(); // Assuming fields to display
    const truncateText = (text, maxLength = 10) => {
        if (text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}`;
    };
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const navigate = useNavigate(); // Hook for navigation

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const goToProfile = () => {
        navigate('/profile'); // Redirect to profile page
    };

    const goToLeaderBoard = () => {
        navigate('/leaderBoard'); // Redirect to profile page
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-200 p-2 fixed w-full z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-black mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <ul className="list-reset items-center lg:flex justify-end inline-block">
                    <a className="text-black italic font-black no-underline hover:underline decoration-indigo-300" href="/">
                        <span className="text-1xl pl-2"><i className="em em-grinning"></i>AccrueQuest</span>
                    </a>
                </ul>
                <ul className="list-reset p-2 items-center lg:flex justify-end inline-block">
                    <BatteryBar currentPoints={currentPoints} />
                </ul>
            </div>
            <div className="flex items-center flex-shrink-0  text-blue-600 lg:flex justify-end inline-block mr-6">

                <ul className="list-reset items-center lg:flex justify-end inline-block">
                        <Link to="/leaderboard">
                            <span className="text-black   no-underline hover:underline decoration-indigo-300"><i className="em em-grinning"></i>LeaderBoard</span>

                        </Link>  
                </ul>
                <span className="text-black px-4" > {truncateText(userFriendlyAddress)}</span>
                <Link to="/profile">
                <FaUserCircle
                    className="text-3xl cursor-pointer "
                    
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
