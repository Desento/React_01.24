import { arrayOfQuestions } from './content/content.jsx'
import { QuizQuestion } from './components/QuizQuestion.jsx'
import './MainQiuzScreen.css'
import { useState } from 'react'

export const MainQuizScreen = () => {
  const [counterOfQuestions, setCounterOfQuestions] = useState(0)

  const handleNextQuestion = () => {
    setCounterOfQuestions((prev) => prev + 1)
  }

  return (
    <div className="container">
      <QuizQuestion
        question={arrayOfQuestions.results[counterOfQuestions]}
        totalQuestions={arrayOfQuestions.results.length}
        onNextQuestion={handleNextQuestion}
        counterOfQuestions={counterOfQuestions}
      />
    </div>
  )
}
