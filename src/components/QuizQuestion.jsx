import { useState, useEffect } from 'react';
import { AnswerButtons } from './AnswerButtons';
import { Button } from './button';

export const QuizQuestion = ({ question, totalQuestions, onAnswer, onEndQuiz, onNextQuestion, counterOfQuestions }) => {
    const [timer, setTimer] = useState(300);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleAnswerClick = (answer) => {
        onAnswer(answer);
        onNextQuestion();
    };


    const handleEndQuiz = () => {
        onEndQuiz();
    };

    return (
        <div className="quiz-question">
            <p className="question-text">{question.question}</p>
            <p className="question-info">Question {counterOfQuestions + 1} out of {totalQuestions}</p>
            <p className="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>

            <AnswerButtons
                answer={question}
                handleAnswerClick={handleAnswerClick}
                timer={timer}
            />
            <Button
                text="End Quiz"
                className="end-quiz-button"
                onClick={handleEndQuiz}
                disabled={timer === 0}
            >
            </Button>
        </div>
    );
};
