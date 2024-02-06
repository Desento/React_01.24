import { Button } from '../components/button.jsx';

export const AnswerButtons = ({ answer, handleAnswerClick, timer }) => {
    return (
        <div className="answer-buttons">
            {answer.incorrect_answers.map((incorrectAnswer, index) => (
                <Button
                    text={incorrectAnswer}
                    key={index}
                    className="answer-button incorrect_answers"
                    onClick={() => handleAnswerClick(incorrectAnswer)}
                    disabled={timer === 0}
                >

                </Button>

            ))}
            <Button
                text={answer.correct_answer}
                key={5}
                className="answer-button correct_answer"
                onClick={() => handleAnswerClick(answer.correct_answer)}
                disabled={timer === 0}
            >

            </Button>
        </div>
    );
};
