import { useDispatch, useSelector } from 'react-redux'
import './QuizStatisticsSreen.css'
import { Button } from './components/button'
import { setResetStatistics } from './redux/reducers/statisticsReduser'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes'

export const QuizStatisticsScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const statistics = useSelector((state) => state.statistics)

  if (!statistics) {
    return <div>Loading...</div>
  }

  const { totalQuestions, correctAnswers, categories, difficulties, answerTypes } = statistics

  const handleResetStatistics = () => {
    dispatch(setResetStatistics())
  }

  const handleGoQuiz = () => {
    navigate(ROUTES.root)
  }

  return (
    <div className="quiz-statistics-container">
      <h2>Quiz Statistics</h2>
      <div className="overall-statistics">
        <h3>Overall Statistics</h3>
        <p>Total Questions: {totalQuestions || 0}</p>
        <p>Correct Answers: {correctAnswers || 0}</p>
      </div>
      <div className="category-statistics">
        <h3>Statistics for Each Category</h3>
        <ul>
          {categories &&
            Object.entries(categories).map(([category, count]) => (
              <li key={category}>
                {category}: {count}
              </li>
            ))}
        </ul>
      </div>
      <div className="difficulty-statistics">
        <h3>Statistics for Each Difficulty</h3>
        <ul>
          {difficulties &&
            Object.entries(difficulties).map(([difficulty, count]) => (
              <li key={difficulty}>
                {difficulty}: {count}
              </li>
            ))}
        </ul>
      </div>
      <div className="type-statistics">
        <h3>Statistics for Each Type</h3>
        <ul>
          {answerTypes &&
            Object.entries(answerTypes).map(([type, count]) => (
              <li key={type}>
                {type}: {count}
              </li>
            ))}
        </ul>
      </div>
      <div className="buttons">
        <Button
          text="Reset statistics"
          className="quiz-button"
          onClick={handleResetStatistics}></Button>
        <Button text="Choose another quiz" className="quiz-button" onClick={handleGoQuiz}></Button>
      </div>
    </div>
  )
}
