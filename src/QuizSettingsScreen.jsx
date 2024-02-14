import { InputNumberOfQuestions } from './components/inputNumberOfQuestions.jsx'
import { typeOfCategory, typeOfDifficulty, typeOfAnswers, typeOfTime } from './content/content.jsx'
import { Select } from './components/select.jsx'
import { Button } from './components/button.jsx'
import './QuizSettingsScreen.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes.jsx'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAmount } from './redux/reducers/configurationReduser/index.js'

export const QuizSettingsScreen = () => {
  const state = useSelector(state => state.configuration.amount)
  const refAmount = useRef();
  const refCategoty = useRef();
  const refDifficulty = useRef();
  const refType = useRef();
  const refTime = useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleGoQuiz = () => {
    console.log(refAmount.current.value);
    dispatch(setAmount(refAmount.current.value));
    console.log(`state amount: ${state}`);
    // navigate(ROUTES.quiz)
  }
  return (
    <div className="container">
      <InputNumberOfQuestions className="InputNumberOfQuestions setting-screen" ref={refAmount} />
      <Select props={typeOfCategory} className="setting-screen" />
      <Select props={typeOfDifficulty} className="setting-screen" />
      <Select props={typeOfAnswers} className="setting-screen" />
      <Select props={typeOfTime} className="setting-screen" />
      <Button
        onClick={handleGoQuiz}
        text={'Start quiz'}
        className="setting-screen setting-screen-button"
      />
      <Button text={'See my statistics'} className="setting-screen setting-screen-button" />
      <Outlet />
    </div>
  )
}
