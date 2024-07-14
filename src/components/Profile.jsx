import React, { useState, useEffect } from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const Profile = () => {
    const [profileDetails, setProfileDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    // Example API endpoint for fetching profile details
    const fetchProfileDetails = async () => {
        try {
            // Replace with actual API endpoint
            const response = await fetch('https://api.example.com/profile');
            if (!response.ok) {
                throw new Error('Failed to fetch profile details');
            }
            const data = await response.json();

            // Use wallet ID as userID if available
            if (userFriendlyAddress) {
                data.userId = userFriendlyAddress;
            }
            if (rawAddress) {
                data.walletAddress = rawAddress;
            }

            // Update profile details
            setProfileDetails(data);  // Assuming API response is JSON object
        } catch (error) {
            console.error('Error fetching profile details:', error);
            // Set profileDetails with default values on error
            setProfileDetails({
                userId:  'Unknown',
                walletAddress: rawAddress || 'Unknown',
                email: 'Unknown',
                phoneNumber: 'Unknown',
                country: 'Unknown',
                score: 'Unknown',
            });
            setError(null); // Clear error state to prevent displaying an error message
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProfileDetails();
    }, []);

    // Render loading indicator while fetching
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    // Render profile details section
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">
                {/* Profile Details Section */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-blue-800">Profile Details</h1>
                    <TonConnectButton />
                </div>

                {/* Vertical Line */}
                <div className="border-b border-blue-400 mb-4"></div>

                {/* Displaying fields */}
                <ProfileFields profileDetails={profileDetails} userFriendlyAddress={userFriendlyAddress} rawAddress={rawAddress} />
            </div>
        </div>
    );
};

const ProfileFields = ({ profileDetails, userFriendlyAddress, rawAddress }) => {
    // Assuming fields to display
    const fields = [
        { label: 'User ID', key: 'userId' },
        { label: 'Wallet Address', key: 'walletAddress' },
        { label: 'Email', key: 'email' },
        { label: 'Phone Number', key: 'phoneNumber' },
        { label: 'Country', key: 'country' },
        { label: 'Score', key: 'score' },
    ];

    // Function to get the correct value based on availability
    const getValue = (key) => {
        if (key === 'walletAddress' && userFriendlyAddress) {
            return userFriendlyAddress;
        }
        return profileDetails ? profileDetails[key] || 'Unknown' : 'Unknown';
    };

    // Function to truncate long content with ellipsis and provide tooltip
    const truncateText = (text, maxLength = 20) => {
        if (text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}...`;
    };

    return (
        <>
            {fields.map(field => (
                <div key={field.key} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-blue-800 font-semibold">{field.label}</label>
                        <span className="text-gray-600" title={getValue(field.key)}>
                            {truncateText(getValue(field.key))}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;
