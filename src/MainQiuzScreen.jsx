import { QuizQuestion } from './components/QuizQuestion.jsx'
import './MainQiuzScreen.css'
import { useState } from 'react'
import { useGetQuestionsQuery } from './redux/reducers/questionsQuery/reduser.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from './components/button.jsx'
import { resetState } from './redux/reducers/configurationReduser/index.js'
import { ROUTES } from './navigation/routes.jsx'

export const MainQuizScreen = () => {
  const [counterOfQuestions, setCounterOfQuestions] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const state = useSelector((state) => state.configuration)

  const handleNextQuestion = () => {
    setCounterOfQuestions((prev) => prev + 1)
  }

  const string = (() => {
    let queryString = 'api.php?'

    if (state.amount) queryString += `amount=${state.amount}&`
    if (state.category) queryString += `category=${state.category}&`
    if (state.difficulty) queryString += `difficulty=${state.difficulty}&`
    if (state.type) queryString += `type=${state.type}&`

    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1)
    }

    return queryString
  })()

  const handleGoQuiz = () => {
    dispatch(resetState())
    navigate(ROUTES.root)
  }

  const { data, isError, isLoading } = useGetQuestionsQuery(string)

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
        question={data.results[counterOfQuestions]}
        totalQuestions={data.results.length}
        onNextQuestion={handleNextQuestion}
        counterOfQuestions={counterOfQuestions}
      />
    </div>
  )
}
