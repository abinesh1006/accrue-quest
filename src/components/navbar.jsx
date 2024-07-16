import { useState, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useTonAddress } from '@tonconnect/ui-react';
import { Link, useNavigate } from 'react-router-dom';
import BatteryBar from './Batterybar';

const Navbar = ({ currentPoints }) => {
    const userFriendlyAddress = useTonAddress();
    const truncateText = (text, maxLength = 10) => {
        if (text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}`;
    };
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const navigate = useNavigate();

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const goToProfile = () => {
        navigate('/profile');
    };

    const goToLeaderBoard = () => {
        navigate('/leaderBoard');
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-200 p-1 md:p-2 fixed w-full z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-black mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 text-white p-1 bg-indigo-500 rounded-full">
                    <circle cx="50" cy="50" r="50" fill="indigo" />
                    <text x="50" y="50" fill="white" fontSize="35" fontWeight="bold" fontFamily="Arial" textAnchor="middle" dominantBaseline="middle">AQ</text>
                </svg>
                <ul className="list-reset items-center lg:flex justify-end inline-block">
                    <a className="text-black italic font-black no-underline hover:underline decoration-indigo-300 hidden lg:inline" href="/">
                        <span className="text-1xl pl-2"><i className="em em-grinning"></i>AccrueQuest</span>
                    </a>
                </ul>
                <ul className="list-reset p-2 items-center lg:flex justify-end inline-block">
                    <BatteryBar currentPoints={currentPoints} />
                </ul>
            </div>
            <div className="flex items-center flex-shrink-0 text-blue-600 lg:flex justify-end inline-block mr-6">
                <span className="text-black px-4">{truncateText(userFriendlyAddress)}</span>
                <Link to="/profile">
                    <FaUserCircle className="text-3xl cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
