import { motion } from 'framer-motion';
import { Button } from './button';
import { setAnswerDifficulties, setAnswerTypeCount, setCategoryCount, setCorrectAnswers, setTotalQuestions } from '../redux/reducers/resultsReduser';
import { setCorrectAnswer, setShowResult } from '../redux/reducers/resultReduser';
import { useDispatch } from 'react-redux';
import { AnswerButtonsProps, Question as AnswerButtonsQuestion } from '../types/interfaces'; 

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ answers, question, onAnswer, disabled }) => {
    const dispatch = useDispatch();

    const AnswerClick = (answer: string, question: AnswerButtonsQuestion) => {
        onAnswer();
        dispatch(setTotalQuestions());
        if (answer === question.correct_answer) {
            dispatch(setCorrectAnswers());
            dispatch(setCorrectAnswer({ correctAnswer: 'Correct answer!' }));
        } else {
            dispatch(setCorrectAnswer({ correctAnswer: `Incorrect. Correct answer: ${question.correct_answer}` }));
        }
        dispatch(setShowResult());
        dispatch(setCategoryCount({ category: question.category }));
        dispatch(setAnswerTypeCount({ answerType: question.type }));
        dispatch(setAnswerDifficulties({ difficulty: question.difficulty }));
    };

    return (
        <div className="answer-buttons">
            {answers.map((answerText, index) => (
                <motion.div
                    key={`${answerText}_${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Button
                        text={answerText}
                        className={`answer-button`}
                        onClick={() => AnswerClick(answerText, question)}
                        disabled={disabled}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default AnswerButtons;
