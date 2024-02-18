import { result } from './content/content'
import { Button } from './components/button'
import './QuizResultScreen.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from './redux/reducers/configurationReduser/index.js'

export const QuizResultScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector(state => state.configuration)


  const handleRestartQuiz = () => {
    navigate(ROUTES.quiz)
  }
  const handleGoQuiz = () => {
    dispatch(resetState())
    navigate(ROUTES.root)
    console.log(state)
  }

  return (
    <div className="container">
      <div className="quiz-result">
        <h2>Thank you for completing this quiz!</h2>
        <p>{`You answered ${result.correctAnswers} out of ${result.totalQuestions} questions correctly.`}</p>
        <p>{`Quiz Configuration: Type - ${result.quizConfig.type}, Category - ${result.quizConfig.category}, Difficulty - ${result.quizConfig.difficulty}, Time - ${result.quizConfig.time} seconds`}</p>
        <p>{`Time taken to answer all questions: ${result.quizConfig.time} seconds`}</p>

        <Button text="Restart" className="qiuz-result-button" onClick={handleRestartQuiz}></Button>
        <Button
          text="Choose another quiz"
          className="qiuz-result-button"
          onClick={handleGoQuiz}></Button>
      </div>
    </div>
  )
}
