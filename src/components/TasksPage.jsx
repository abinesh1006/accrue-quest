import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'; // For the pop-up dialog
import { FaTwitter, FaTelegramPlane, FaInstagram, FaRegCheckCircle } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io'; // Alternative YouTube icon

const mockTasks = [
    { id: 1, name: 'Subscribe on YouTube', icon: <IoLogoYoutube className="text-red-600" />, points: 40 },
    { id: 2, name: 'Follow on Twitter', icon: <FaTwitter className="text-blue-500" />, points: 40 },
    { id: 3, name: 'Subscribe to Telegram Channel', icon: <FaTelegramPlane className="text-blue-600" />, points: 40 },
    { id: 4, name: 'Follow on Instagram', icon: <FaInstagram className="text-pink-500" />, points: 40 }
];

const mockUserTasks = {
    1: false, // Task 1 not completed
    2: true,  // Task 2 completed
    3: false, // Task 3 not completed
    4: true   // Task 4 completed
};

const TasksPage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [checkInDays, setCheckInDays] = useState(0); // Replace with real user data
    const [score, setScore] = useState(0); // User's score state
    const [userTasks, setUserTasks] = useState(mockUserTasks); // Mock user's task completion status

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleDailyCheckIn = () => {
        // Update the check-in days logic here
        setCheckInDays(prevDays => prevDays + 1); // Example increment
        handleDialogOpen();
    };

    const handleTaskClick = (taskId) => {
        // Mock completing the task and adding points
        setUserTasks(prevUserTasks => ({
            ...prevUserTasks,
            [taskId]: true
        }));
        setScore(prevScore => prevScore + 40); // Add 40 AQ points for incomplete tasks
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">
                <h1 className="text-2xl font-bold mb-4">Tasks to be Performed</h1>

                <div className="max-h-64 overflow-y-auto"> {/* Scrollable container */}
                    <div className="space-y-4">
                        {mockTasks.map(task => (
                            <Task
                                key={task.id}
                                name={task.name}
                                icon={task.icon}
                                onClick={() => handleTaskClick(task.id)}
                                isCompleted={!!userTasks[task.id]}
                                points={task.points}
                            />
                        ))}
                        <Task
                            name="Daily Check-in"
                            icon={<FaRegCheckCircle className="text-gray-600" />}
                            onClick={handleDailyCheckIn}
                            isCompleted={checkInDays > 0}
                        />
                    </div>
                </div>

                {/* Daily Check-in Pop-up */}
                <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white p-4 rounded shadow-lg">
                            <Dialog.Title className="text-lg font-bold">Daily Check-in</Dialog.Title>
                            <Dialog.Description className="mt-2">
                                You have checked in for <strong>{checkInDays}</strong> day(s) continuously.
                            </Dialog.Description>
                            <button
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                                onClick={handleDialogClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Dialog>

                {/* Display Score */}
                <div className="mt-4 text-lg font-bold">
                    Your AQ Score: {score}
                </div>
            </div>
        </div>
    );
};

const Task = ({ name, icon, onClick, isCompleted, points }) => {
    return (
        <div
            className="flex items-center justify-between p-2 border rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                <div className="text-xl">{icon}</div>
                <span className="font-medium">{name}</span>
            </div>
            {isCompleted
                ? <FaRegCheckCircle className="text-green-500" />
                : <span className="text-yellow-500">+{points} AQ</span>
            }
        </div>
    );
};

export default TasksPage;
