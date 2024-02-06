import { InputNumberOfQuestions } from './components/inputNumberOfQuestions.jsx'
import { typeOfCategory, typeOfDifficulty, typeOfAnswers, typeOfTime } from './content/content.jsx'
import { Select } from './components/select.jsx'
import { Button } from './components/button.jsx'
import './QuizSettingsScreen.css'

export const QuizSettingsScreen = () => {
  return (
    <div className="container">
      <InputNumberOfQuestions className="InputNumberOfQuestions setting-screen" />
      <Select props={typeOfCategory} className="setting-screen" />
      <Select props={typeOfDifficulty} className="setting-screen" />
      <Select props={typeOfAnswers} className="setting-screen" />
      <Select props={typeOfTime} className="setting-screen" />
      <Button text={'Start quiz'} className="setting-screen setting-screen-button" />
      <Button text={'See my statistics'} className="setting-screen setting-screen-button" />
    </div>
  )
}
