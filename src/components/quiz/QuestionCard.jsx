import React, { useState, useEffect } from 'react';
import AnswerOption from './AnswerOption';
import ProgressBar from './ProgressBar';

const QuestionCard = ({ currentPoints, onPointsUpdate, question, selectedAnswer, handleAnswerSelect }) => {
  
    useEffect(() => {
        // Update backend API with currentPoints whenever it changes
        // Example of how to update backend API (replace with your actual logic)
        const updatePointsInBackend = async () => {
            try {
                // Example API call to update points in backend
                await fetch('your-backend-api-endpoint', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ points: currentPoints }),
                });
                console.log('Points updated successfully.');
            } catch (error) {
                console.error('Error updating points:', error);
            }
        };

        updatePointsInBackend();
    }, [currentPoints]);

    const handleAnswerSelectAndUpdatePoints = (option) => {
        // Deduct points (e.g., 10 points per question)
        onPointsUpdate((prevPoints) => prevPoints - 200);
        // Handle answer selection logic
        handleAnswerSelect(option);
    };

    return (
        <div className="p-4 text-center">
            <h2 className="text-3xl mb-6">{question.question}</h2>
            <div className="flex justify-center">
                <div className="bg-blue-600 rounded-lg p-8 shadow-lg max-w-xs w-full">
                    <div className="grid grid-cols-1 gap-4">
                        {question.options.map((option) => (
                            <AnswerOption
                                key={option.id}
                                option={option}
                                selectedAnswer={selectedAnswer}
                                handleAnswerSelect={handleAnswerSelectAndUpdatePoints}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ProgressBar currentPoints={currentPoints} />
        </div>
    );
};

export default QuestionCard;
