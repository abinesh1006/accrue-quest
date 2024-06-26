// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4 fixed bottom-0 w-full">
            <div className="container mx-auto flex items-center justify-center">
                <p className="text-sm">&copy; 2024 Accrue Quest. All rights reserved.</p>
                <div className="flex space-x-6"> {/* Increased space between items */}
                    <a href="#" className="text-sm hover:text-blue-500 px-2 py-1">Terms & Privacy</a>
                </div>
                <span className="text-sm">|</span>
                <a href="#" className="text-sm hover:text-blue-500 px-2 py-1">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
