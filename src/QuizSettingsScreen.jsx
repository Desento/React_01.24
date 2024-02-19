import { InputNumberOfQuestions } from './components/inputNumberOfQuestions.jsx'
import { typeOfDifficulty, typeOfAnswers, typeOfTime } from './content/content.jsx'
import { Select } from './components/select.jsx'
import { Button } from './components/button.jsx'
import './QuizSettingsScreen.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAmount,
  setCategory,
  setDifficulty,
  setTime,
  setType
} from './redux/reducers/configurationReduser/index.js'
import { useGetCategoryOfQuestionsQuery } from './redux/reducers/questionsQuery/reduser.js'

export const QuizSettingsScreen = () => {
  const state = useSelector((state) => state.configuration)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isError, isLoading } = useGetCategoryOfQuestionsQuery()

  if (isError) return <p>Error</p>
  if (isLoading) return <p>Loading...</p>

  const handleGoQuiz = () => {
    if (state.amount >= 5 && state.amount <= 15 && state.time) {
      navigate(ROUTES.quiz)
    } else {
      alert(
        'Please select a number of questions between 5 and 15 and choose the time before starting the quiz.'
      )
    }
  }

  const handleGoStatistics = () => {
    navigate(ROUTES.statistics)
  }

  const onChangeInputNumberQuestions = (e) => {
    dispatch(setAmount(e.target.value))
  }

  const onChangeCategory = (e) => {
    dispatch(setCategory(e))
  }

  const onChangeDifficulty = (e) => {
    dispatch(setDifficulty(e))
  }

  const onChangeType = (e) => {
    dispatch(setType(e))
  }

  const onChangeTime = (e) => {
    dispatch(setTime(e))
  }

  return (
    <div className="container">
      <InputNumberOfQuestions
        className="InputNumberOfQuestions setting-screen"
        value={state.amount}
        onChange={onChangeInputNumberQuestions}
      />
      <Select
        props={data}
        className="setting-screen"
        onChange={onChangeCategory}
        selectedValue={state.category}
      />
      <Select
        props={typeOfDifficulty}
        className="setting-screen"
        onChange={onChangeDifficulty}
        selectedValue={state.difficulty}
      />
      <Select
        props={typeOfAnswers}
        className="setting-screen"
        onChange={onChangeType}
        selectedValue={state.type}
      />
      <Select
        props={typeOfTime}
        className="setting-screen"
        onChange={onChangeTime}
        selectedValue={state.time}
      />
      <Button onClick={handleGoQuiz} text={'Start quiz'} className="setting-screen quiz-button" />
      <Button
        onClick={handleGoStatistics}
        text={'See my statistics'}
        className="setting-screen quiz-button"
      />
      <Outlet />
    </div>
  )
}
