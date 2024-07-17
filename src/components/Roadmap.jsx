import React from 'react';

const roadmapData = [
    {
        month: 'March 2024',
        items: ['Basic game', 'Mining updates', 'Earn tasks'],
    },
    {
        month: 'April 2024',
        items: ['Referral system', 'LVL ratings', 'Daily rewards'],
    },
    {
        month: 'May 2024',
        items: ['Special cards', 'Daily Combo', '«Partner» blockchain announcement'],
    },
    {
        month: 'June 2024',
        items: [
            'On-chain infrastructure development',
            'Wallet in-game implementation',
            'Web 3 pre-listing Quest',
        ],
    },
    {
        month: 'July 2024',
        items: ['TGE', 'Token in-game utility launch'],
    },
    {
        month: 'Q3 2024',
        items: ['Squad Kombat', 'Characters and skins', 'Time limited events', 'Live events'],
    },
];

const Roadmap = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
                <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide">
                    {roadmapData.map((entry, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between items-center text-white">
                            <div className="text-2xl font-bold">{entry.month}</div>
                            <ul className="list-none space-y-2 flex-1 ml-6">
                                {entry.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-lg">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
