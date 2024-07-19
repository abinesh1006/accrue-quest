import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuizContainer from './components/quiz/quizContainer';
import PointExhaustedComponent from './components/PointExhaustedComponent';
import GridClickComponent from './components/GridClickComponent';
import Navbar from './components/navbar';
import Footer from './components/footer/Footer';
import Profile from './components/Profile';
import Leaderboard from './components/LeaderBoard';
import TasksPage from './components/TasksPage';
import Roadmap from './components/Roadmap';
import CardGrid from './components/cards/CardGrid';

const App = () => {
    const [initialPoints, setInitialPoints] = useState(10000);
    const [pointsInitialized, setPointsInitialized] = useState(false);
    const [profileDetails, setProfileDetails] = useState({
        userId: 'Unknown',
        walletAddress: 'Unknown',
        email: 'Unknown',
        phoneNumber: 'Unknown',
        country: 'Unknown',
        score: 10,
        rank: 100,
    });
    const [profileLoading, setProfileLoading] = useState(true);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await fetch('https://api.example.com/profile');
                if (!response.ok) {
                    throw new Error('Failed to fetch profile details');
                }
                const data = await response.json();

                setInitialPoints(data.score);
                setProfileDetails(data);

                setPointsInitialized(true);
                setProfileLoading(false);
            } catch (error) {
                console.error('Error fetching initial data:', error);

                setInitialPoints(10000);
                setProfileDetails({
                    userId: 'Unknown',
                    walletAddress: 'Unknown',
                    email: 'Unknown',
                    phoneNumber: 'Unknown',
                    country: 'Unknown',
                    score: 10000,
                    rank:100,
                });

                setProfileLoading(false);
                setPointsInitialized(true);
            }
        };

        fetchInitialData();
    }, []);

    const handlePointsUpdate = (newPoints) => {
        setInitialPoints(newPoints);
    };

    if (!pointsInitialized || profileLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
       
        <Router>
            <Navbar currentPoints={initialPoints || 0} />
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg">
                <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
            <Routes>
                <Route path="/profile" element={<Profile profileDetails={profileDetails} currentPoints={initialPoints} />} />
                <Route
                    path="/"
                    element={initialPoints !== null && initialPoints > 0 ? (
                        <QuizContainer currentPoints={initialPoints} onPointsUpdate={handlePointsUpdate} />
                    ) : (
                        <Navigate to="/point-exhausted" />
                    )}
                />
                <Route path="/point-exhausted" element={<PointExhaustedComponent />} />
                <Route
                    path="/grid-click"
                    element={<GridClickComponent currentPoints={initialPoints || 0} onPointsUpdate={handlePointsUpdate} />}
                />
                <Route
                    path="/tasks"
                    element={<TasksPage />}
                />
                <Route
                    path="/mine"
                    element={<CardGrid />}
                />
                <Route
                    path="/roadmap"
                    element={<Roadmap />}
                />
                <Route
                    path="/leaderboard"
                    element={<Leaderboard currentUserId={profileDetails.userId} currentScore={initialPoints} currentRank={profileDetails.rank} />}
                />
                        <Route path="*" element={<NotFound />} />
                  
                    </Routes>
                </div>
            </div>
            <Footer />
                </Router>
         
    );
};

const NotFound = () => (
    <div>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Navigate to="/" />
    </div>
);

export default App;
