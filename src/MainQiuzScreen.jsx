import { arrayOfQuestions } from './content/content.jsx'
import { QuizQuestion } from './components/QuizQuestion.jsx'
import './MainQiuzScreen.css'
import { useState } from 'react'

export const MainQuizScreen = () => {
  const handleAnswer = (answer) => {
    console.log(`Selected answer: ${answer}`)
  }

  const handleEndQuiz = () => {
    console.log('Quiz ended')
  }

  const [counterOfQuestions, setCounterOfQuestions] = useState(0)

  const handleNextQuestion = () => {
    setCounterOfQuestions((prev) => prev + 1)
  }

  return (
    <div className="container">
      {counterOfQuestions < arrayOfQuestions.results.length ? (
        <QuizQuestion
          question={arrayOfQuestions.results[counterOfQuestions]}
          totalQuestions={arrayOfQuestions.results.length}
          onAnswer={handleAnswer}
          onEndQuiz={handleEndQuiz}
          onNextQuestion={() => handleNextQuestion()}
          counterOfQuestions={counterOfQuestions}
        />
      ) : (
        <p>Quiz completed</p>
      )}
    </div>
  )
}
