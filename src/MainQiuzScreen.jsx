import { question } from "./content/content.jsx"
import { QuizQuestion } from "./components/QuizQuestion.jsx";
import './MainQiuzScreen.css'
import { useState } from "react";

export const MainQuizScreen = () => {
    const handleAnswer = (answer) => {
        console.log(`Selected answer: ${answer}`);
    };

    const handleEndQuiz = () => {
        console.log('Quiz ended');
    };

    const [counterOfQuestions, setCounterOfQuestions] = useState(0);

    const handleNextQuestion = () => {

        setCounterOfQuestions(prevCounter => prevCounter + 1);
    };

    return (
        <div className="container">
            {counterOfQuestions < question.results.length ? (
                <QuizQuestion
                    question={question.results[counterOfQuestions]}
                    totalQuestions={question.results.length}
                    onAnswer={handleAnswer}
                    onEndQuiz={handleEndQuiz}
                    onNextQuestion={handleNextQuestion}
                />
            ) : (
                <p>Quiz completed</p>
            )}
        </div>
    );
}