import { Button } from '../components/button.jsx';

export const AnswerButtons = ({ answer, handleAnswerClick, timer }) => {
    answer.incorrect_answers.map((incorrectAnswer) => console.log(incorrectAnswer))
    return (
        <div className="answer-buttons">
            <div>
                {answer.incorrect_answers.map((incorrectAnswer, index) => (
                    <Button
                        props={incorrectAnswer}
                        key={index}
                        className="answer-button incorrect_answers"
                        onClick={() => handleAnswerClick(incorrectAnswer)}
                        disabled={timer === 0}
                    >

                    </Button>

                ))}
                <Button
                    props={answer.correct_answer}
                    key={5}
                    className="answer-button correct_answer"
                    onClick={() => handleAnswerClick(answer.correct_answer)}
                    disabled={timer === 0}
                >

                </Button>
            </div>
        </div>
    );
};
