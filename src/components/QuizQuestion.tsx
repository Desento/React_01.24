import { useState, useMemo } from 'react';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../navigation/routes';
import { useDispatch } from 'react-redux';
import AnswerButtons from './AnswerButtons';
import Timer from "./Timer";
import { ResultQuizQuestion } from './resultQuizQuestion';
import { resetResult } from '../redux/reducers/resultReduser';
import { QuizQuestionProps } from '../types/interfaces';
import { ModalFinishQuiz } from '../modal/ModalFinish';

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
    question,
    totalQuestions,
    onNextQuestion,
    counterOfQuestions,
}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const navigate = useNavigate();
    const showResult = () => navigate(ROUTES.result);

    const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledAnswers = useMemo(
        () => shuffleArray([...question?.incorrect_answers, question?.correct_answer]),
        [question]
    );

    const AnswerButtonClick = () => {
        setAnswered(true);
    };

    const handleContinueQuiz = () => {
        setShowModal(false);
    };

    const handleNextQuestion = () => {
        onNextQuestion();
        setAnswered(false);
        dispatch(resetResult());

        if (timerExpired && answered) { showResult() }

        if (counterOfQuestions === totalQuestions - 1) {
            showResult();
        }
    };

    return (
        <div className="quiz-question">
            <p className="question-text">{question.question}</p>
            <p className="question-info">
                Question {counterOfQuestions + 1} out of {totalQuestions}
            </p>
            <Timer timerExpired={timerExpired} setTimerExpired={() => setTimerExpired(true)} />
            <ResultQuizQuestion timerExpired={timerExpired} />
            <AnswerButtons
                answers={shuffledAnswers}
                question={question}
                onAnswer={AnswerButtonClick}
                disabled={answered}
            />
            <div className="question-button">
                <Button
                    text="End Quiz"
                    className="end-quiz-button quiz-button"
                    onClick={() => setShowModal(true)}
                />
                <Button
                    text="Next question"
                    className="next-question-button quiz-button"
                    onClick={handleNextQuestion}
                    disabled={!answered}
                />
            </div>

            {showModal && <ModalFinishQuiz onCancel={handleContinueQuiz} onConfirm={showResult} />}
        </div>
    );
};
