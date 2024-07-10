import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';

const QuizContainer = ({ currentPoints, onPointsUpdate }) => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizProgress, setQuizProgress] = useState(0); // in percentage
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizResults, setQuizResults] = useState([]);

    // Mock API response for quiz questions and answers
    const quizData = [
        {
            id: 1,
            question: 'What is blockchain?',
            options: [
                { id: 1, text: 'A decentralized ledger' },
                { id: 2, text: 'A type of cryptocurrency' },
                { id: 3, text: 'A type of database' },
                { id: 4, text: 'All of the above', correct: true },
            ],
        },
        {
            id: 2,
            question: 'Who invented Bitcoin?',
            options: [
                { id: 5, text: 'Satoshi Nakamoto', correct: true },
                { id: 6, text: 'Vitalik Buterin' },
                { id: 7, text: 'Elon Musk' },
                { id: 8, text: 'Mark Zuckerberg' },
            ],
        },
        // Add more questions as needed
    ];

    const handleAnswerSelect = async (selectedOption) => {
        if (selectedAnswer !== null) return; // Only allow one selection

        setSelectedAnswer(selectedOption);

        // Simulate backend API call to validate answer
        const isCorrect = selectedOption.correct;
        const updatedResults = [...quizResults, { questionId: currentQuestion, isCorrect }];
        setQuizResults(updatedResults);

        // Calculate quiz progress
        const progress = ((updatedResults.length / quizData.length) * 100).toFixed(0);
        setQuizProgress(progress);

        // Move to the next question after 1 second (simulate async API call)
        setTimeout(() => {
            if (currentQuestion < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null); // Reset selected answer for the next question
            } else {
                setQuizCompleted(true);
            }
        }, 1000);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">
                {quizCompleted ? (
                    <ResultCard quizResults={quizResults} />
                ) : (
                        <QuestionCard currentPoints={currentPoints} onPointsUpdate={onPointsUpdate}
                        question={quizData[currentQuestion - 1]}
                        selectedAnswer={selectedAnswer}
                        handleAnswerSelect={handleAnswerSelect}
                        quizProgress={quizProgress}
                    />
                )}
            </div>
        </div>
    );
};

export default QuizContainer;
