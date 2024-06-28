// UserCoins.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCoins } from 'react-icons/fa'; // Example using Font Awesome icons

const UserCoins = ({ userId }) => {
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get(`/api/user/${userId}/coins`);
                setCoins(response.data.coins); // Assuming your API returns coins
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        };

        fetchCoins();
    }, [userId]);

    return (
        //<div className="min-h-screen flex items-center justify-center bg-gray-50">
        //    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        //        <h2 className="text-2xl font-bold mb-4">My Gold Coins</h2>
        //        <div className="flex items-center justify-center mb-4">
        //            <FaCoins className="w-12 h-12 mr-2" /> {/* Adjust size as needed */}
        //            <span className="text-xl">{coins}</span>
        //        </div>
        //    </div>
        //</div>


         <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="max-w-md w-full md:max-w-lg p-8 bg-white rounded-lg shadow-lg">
               <div className="flex items-center justify-center mb-4">
                    <FaCoins className="w-12 h-12 mr-2" /> {/* Adjust size as needed */}
                    <span className="text-xl">{coins}</span>
                </div>
            </div>
        </div>


    );
};

export default UserCoins;
