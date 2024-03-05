import { QuizQuestion } from './components/QuizQuestion'
import './MainQiuzScreen.css'
import { useState } from 'react'
import { useGetQuestionsQuery } from './redux/reducers/questionsQuery/reduser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from './components/button'
import { resetState } from './redux/reducers/configurationReduser/index'
import { ROUTES } from './navigation/routes'
import { RootState } from './redux/index'
import { Question } from './types/interfaces'
import { createQuizQuestionsQueryString } from './utility/createQuizQuestionsQueryString'

export const MainQuizScreen: React.FC = () => {
  const [counterOfQuestions, setCounterOfQuestions] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const state = useSelector((state: RootState) => state.configuration)

  const handleNextQuestion = () => {
    setCounterOfQuestions((prev) => prev + 1)
  }

  const queryString: string = createQuizQuestionsQueryString(state)

  const handleGoQuiz = () => {
    dispatch(resetState())
    navigate(ROUTES.root)
  }

  const { data, isError, isLoading } = useGetQuestionsQuery(queryString)

  if (isError) return <p>Error</p>
  if (isLoading) return <p>Loading...</p>

  if (data?.response_code === 1)
    return (
      <Button
        text="Choose another quiz"
        className="qiuz-result-button"
        onClick={handleGoQuiz}></Button>
    )

  return (
    <div className="container">
      <QuizQuestion
        question={
          (data?.results[counterOfQuestions] as Question) || {
            question: '',
            incorrect_answers: [],
            correct_answer: ''
          }
        }
        totalQuestions={data?.results.length || 0}
        onNextQuestion={handleNextQuestion}
        counterOfQuestions={counterOfQuestions}
      />
    </div>
  )
}
