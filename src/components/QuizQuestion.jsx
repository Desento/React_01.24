import { useState, useEffect } from 'react';
import { AnswerButtons } from './AnswerButtons';

export const QuizQuestion = ({ question, totalQuestions, onAnswer, onEndQuiz, onNextQuestion }) => {
    const [timer, setTimer] = useState(300);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        onAnswer(answer);
        onNextQuestion();
    };

    const handleEndQuiz = () => {
        onEndQuiz();
    };

    return (
        <div className="quiz-question">
            <p className="question-text">{question.question}</p>
            <p className="question-info">Question {selectedAnswer !== null ? totalQuestions : totalQuestions - 1} out of {totalQuestions}</p>
            <p className="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>

            <AnswerButtons
                answer={question}
                handleAnswerClick={handleAnswerClick}
                timer={timer}
            />
            <button
                className="end-quiz-button"
                onClick={handleEndQuiz}
                disabled={timer === 0}
            >
                End Quiz
            </button>
        </div>
    );
};
