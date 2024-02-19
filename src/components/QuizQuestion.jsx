import { useState, useEffect } from 'react';
import { AnswerButtons } from './AnswerButtons';
import { Button } from './button';
import { ModalFinishQuiz } from '../modal/ModalFinish.jsx'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizDuration, setCategoryCount, setAnswerTypeCount, setCorrectAnswers, setTotalQuestions, setAnswerDifficulties } from '../redux/reducers/resultReduser/index.js';

export const QuizQuestion = ({ question, totalQuestions, onNextQuestion, counterOfQuestions }) => {
    const time = useSelector(state => state.configuration.time)
    const dispatch = useDispatch()
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

    const handleAnswerClick = (answer, question) => {
        dispatch(setTotalQuestions());
        if (answer === question.correct_answer) { dispatch(setCorrectAnswers()) }
        dispatch(setCategoryCount({ category: question.category }));
        dispatch(setAnswerTypeCount({ answerType: question.type }));
        dispatch(setAnswerDifficulties({ difficulty: question.difficulty }))
        if (counterOfQuestions === totalQuestions - 1) {
            dispatch(setQuizDuration(time * 60 - timer))
            showResult();
        } else {
            onNextQuestion(answer, question);
        }
    };

    const handleContinueQuiz = () => {
        setShowModal(false);
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
                className="end-quiz-button quiz-button"
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
