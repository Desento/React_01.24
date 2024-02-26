import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

export const AnswerButtons = ({ answer, handleAnswerClick, timer }) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledAnswers = useMemo(() => shuffleArray([...answer.incorrect_answers, answer.correct_answer]), [answer]);

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <div className="answer-buttons">
            {shuffledAnswers.map((answerText, index) => (
                <motion.div key={index} variants={variants} >
                    <Button
                        text={answerText}
                        className={`answer-button ${answerText === answer.correct_answer ? 'correct_answer' : 'incorrect_answer'}`}
                        onClick={() => handleAnswerClick(answerText, answer)}
                        disabled={timer === 0}
                    />
                </motion.div>
            ))}
        </div>
    );
};
