import React, { useState, useEffect } from 'react';
import AnswerOption from './AnswerOption';
import ProgressBar from './ProgressBar';

const QuestionCard = ({ currentPoints, onPointsUpdate, question, selectedAnswer, handleAnswerSelect }) => {
    const [showOptions, setShowOptions] = useState([]);

    useEffect(() => {
        // Simulate the animation delay
        const delay = 2000; // Delay between each option in milliseconds

        // Use setTimeout to gradually update showOptions with option IDs
        const timer = setTimeout(() => {
            setShowOptions(question.options.map(option => option.id));
        }, delay * question.options.length);

        return () => clearTimeout(timer); // Clean up timer on unmount
    }, [question.options]);

    const handleAnswerSelectAndUpdatePoints = (option) => {
        // Example: Deduct points (e.g., 200 points per question)
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
                        {question.options.map((option, index) => (
                            <AnswerOption
                                key={option.id}
                                option={option}
                                selectedAnswer={selectedAnswer}
                                handleAnswerSelect={handleAnswerSelectAndUpdatePoints}
                                className={`transition-opacity duration-500 ${showOptions.includes(option.id) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} // Apply fade-in class when option is shown
                                style={{ transitionDelay: `${index * 100}ms` }} // Adjust delay for each option
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
