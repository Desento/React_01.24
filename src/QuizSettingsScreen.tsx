import './QuizSettingsScreen.css'
import { InputNumberOfQuestions } from './components/inputNumberOfQuestions'
import { Select } from './components/select'
import { Button } from './components/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAmount,
  setCategory,
  setDifficulty,
  setTime,
  setType
} from './redux/reducers/configurationReduser'
import { useGetCategoryOfQuestionsQuery } from './redux/reducers/questionsQuery/reduser'
import { RootState } from './redux'
import { typeOfAnswers, typeOfDifficulty, typeOfTime } from './content/content'

export const QuizSettingsScreen: React.FC = () => {
  const state = useSelector((state: RootState) => state.configuration)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isError, isLoading } = useGetCategoryOfQuestionsQuery()

  if (isError) return <p>Error</p>
  if (isLoading || !data) return <p>Loading...</p>

  const handleGoQuiz = () => {
    if (+state.amount >= 5 && +state.amount <= 15 && state.time) {
      navigate(ROUTES.quiz)
    } else {
      alert(
        'Please select a number of questions between 5 and 15 and choose the time before starting the quiz.'
      )
    }
  }

  const removeAnyPrefix = (str: string) => {
    return str.startsWith('Any') ? '' : str
  }

  const handleGoStatistics = () => {
    navigate(ROUTES.statistics)
  }

  const onChangeInputNumberQuestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(e.target.value))
  }

  const onChangeCategory = (e: string) => {
    dispatch(setCategory(removeAnyPrefix(e)))
  }

  const onChangeDifficulty = (e: string) => {
    dispatch(setDifficulty(removeAnyPrefix(e)))
  }

  const onChangeType = (e: string) => {
    dispatch(setType(removeAnyPrefix(e)))
  }

  const onChangeTime = (e: string) => {
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
        options={data}
        className="setting-screen"
        onChange={onChangeCategory}
        selectedValue={state.category}
      />
      <Select
        options={typeOfDifficulty}
        className="setting-screen"
        onChange={onChangeDifficulty}
        selectedValue={state.difficulty}
      />
      <Select
        options={typeOfAnswers}
        className="setting-screen"
        onChange={onChangeType}
        selectedValue={state.type}
      />
      <Select
        options={typeOfTime}
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
