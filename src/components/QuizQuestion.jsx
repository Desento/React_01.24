import { useState, useEffect } from 'react';
import { AnswerButtons } from './AnswerButtons';
import { Button } from './button';
import { ModalFinishQuiz } from '../modal/ModalFinish.jsx'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../navigation/routes';
import { useSelector } from 'react-redux';

export const QuizQuestion = ({ question, totalQuestions, onNextQuestion, counterOfQuestions }) => {
    const time = useSelector(state => state.configuration.time)
    const [timer, setTimer] = useState(time * 60);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const showResult = () => navigate(ROUTES.result)

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);
        return () => clearInterval(timerInterval);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            showResult();
        }
    }, [timer]);

    const handleAnswerClick = (answer) => {
        if (counterOfQuestions === totalQuestions - 1) {
            showResult();
        } else {
            onNextQuestion();
        }
    };

    const handleContinueQuiz = () => {
        setShowModal(false);
    };
    console.log(question)
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
                onClick={() => setShowModal(true)}
                disabled={timer === 0}
            />
            {showModal && (
                <ModalFinishQuiz
                    onCancel={handleContinueQuiz}
                    onConfirm={showResult}
                />
            )}

        </div>
    );
};
