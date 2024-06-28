import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuizContainer from './components/quiz/quizContainer';
import PointExhaustedComponent from './components/PointExhaustedComponent';
import GridClickComponent from './components/GridClickComponent';
import Navbar from './components/navbar';
import Footer from './components/footer/Footer'

const App: React.FC = () => {
    const [currentPoints, setCurrentPoints] = useState<number>(1000); // Example starting points
    const handlePointsUpdate = (newPoints: number) => {
        // Example: Update points logic
        setCurrentPoints(newPoints);
    };
    return (
        <Router>
            <Navbar currentPoints={currentPoints} />
            <Routes>

                <Route path="/accrue-quest/" element={currentPoints > 0 ? <QuizContainer currentPoints={currentPoints} onPointsUpdate={handlePointsUpdate} /> : <Navigate to="/point-exhausted" />} />
                <Route path="/point-exhausted" element={<PointExhaustedComponent />} />
                <Route path="/grid-click" element={<GridClickComponent />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;


//import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import Navbar  from './components/navbar';
//import Coming from './components/coming/comingsoon'
//import Footer from './components/footer/Footer'
//import UserCoins from './components/userCoins';
//import QuizContainer from './components/quiz/quizContainer'
//import PointExhaustedComponent from './components//PointExhaustedComponent';
//import GridClickComponent from './components/GridClickComponent';

//const App: React.FC = () => {
//    const [currentPoints, setCurrentPoints] = useState<number>(1000); // Example starting points

//    return (
//        <Router>
//            <Routes>
//                <Route path="/">
//                    <Navbar currentPoints={currentPoints} />
//                    {currentPoints > 0 ? (
//                        <QuizContainer currentPoints={currentPoints} setCurrentPoints={setCurrentPoints} />
//                    ) : (
//                            <Navigate to="/point-exhausted" />
//                    )}
//                    <Footer />
//                </Route>
//                <Route path="/coming">
//                    <UserCoins userId="sample" />
//                    <Coming />
//                </Route>
//                <Route path="/point-exhausted">
//                    <PointExhaustedComponent />
//                </Route>
//                <Route path="/grid-click">
//                    <GridClickComponent />
//                </Route>
//            </Routes>
//        </Router>
//    );
//};

//export default App;



////import './App.css';
////import React, { useState } from 'react';

////import Navbar  from './components/navbar';
////import Coming from './components/coming/comingsoon'
////import Footer from './components/footer/Footer'
////import UserCoins from './components/userCoins';
////import QuizContainer from './components/quiz/quizContainer'
////import React, { useState } from 'react';
////import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
////import QuizContainer from './QuizContainer';
////import PointExhaustedComponent from './PointExhaustedComponent';
////import GridClickComponent from './GridClickComponent';

////const App: React.FC = () => {
////    const [currentPoints, setCurrentPoints] = useState<number>(1000); // Example starting points

////    return (
////        <Router>
////            <Switch>
////                <Route path="/" exact>
////<Navbar currentPoints={currentPoints} />
////                    {currentPoints > 0 ? (
////                        <QuizContainer currentPoints={currentPoints} setCurrentPoints={setCurrentPoints} />
////                    ) : (
////                        <Redirect to="/point-exhausted" />
////                    )}
////                </Route>
////                <Route path="/point-exhausted" exact>
////                    <PointExhaustedComponent />
////                </Route>
////                <Route path="/grid-click" exact>
////                    <GridClickComponent />
////                </Route>
////            </Switch>
////        </Router>
////    );
////};

////export default App;

//////const App: React.FC = () => {

//////    const [currentPoints, setCurrentPoints] = useState<number>(100000); // Fetch from backend API at the start




//////    return (
//////        <div className='App'>
//////            <Navbar currentPoints={currentPoints} />

//////            <QuizContainer currentPoints={currentPoints} onPointsUpdate={handlePointsUpdate} />
//////            <UserCoins userId="sample" />
//////            <Coming />
//////         <Footer></Footer>
//////               </div>

//////  );
//////}

//////export default App
