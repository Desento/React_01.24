import { Button } from './button';
import React, { useMemo } from 'react';

export const AnswerButtons = ({ answer, handleAnswerClick, timer }) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Используем useMemo для мемоизации перемешанного массива ответов
    const shuffledAnswers = useMemo(() => shuffleArray([...answer.incorrect_answers, answer.correct_answer]), [answer]);

    return (
        <div className="answer-buttons">
            {shuffledAnswers.map((answerText, index) => (
                <Button
                    text={answerText}
                    key={index}
                    className={`answer-button ${answerText === answer.correct_answer ? 'correct_answer' : 'incorrect_answer'}`}
                    onClick={() => handleAnswerClick(answerText, answer)}
                    disabled={timer === 0}
                />
            ))}
        </div>
    );
};
