import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuizContainer from './components/quiz/quizContainer';
import PointExhaustedComponent from './components/PointExhaustedComponent';
import GridClickComponent from './components/GridClickComponent';
import Navbar from './components/navbar';
import Footer from './components/footer/Footer'
import Profile from './components/Profile'; // Adjust the path as necessary

const App: React.FC = () => {
    const [currentPoints, setCurrentPoints] = useState<number>(2200); // Example starting points
    const handlePointsUpdate = (newPoints: number) => {
        // Example: Update points logic
        setCurrentPoints(newPoints);
    };

    return (
        <Router>
            <Navbar currentPoints={currentPoints} />
            <Routes>
                <Route path="/accrue-quest/profile" element={<Profile />} />
                <Route path="/accrue-quest/" element={currentPoints > 0 ? <QuizContainer currentPoints={currentPoints} onPointsUpdate={handlePointsUpdate} /> : <Navigate to="/accrue-quest/point-exhausted" />} />
                <Route path="/accrue-quest/point-exhausted" element={<PointExhaustedComponent />} />
                <Route path="/accrue-quest/grid-click" element={<GridClickComponent currentPoints={currentPoints} onPointsUpdate={handlePointsUpdate} />} />

                {/* Route to handle 404 Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            {/* You can add a button or link to navigate back to home or any other page */}
            <Navigate to="/accrue-quest/" />
        </div>
    );
};

export default App;
