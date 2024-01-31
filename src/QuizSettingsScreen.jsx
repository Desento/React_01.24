import { InputNumberOfQuestions } from './components/inputNumberOfQuestions.jsx'
import { typeOfCategory, typeOfDifficulty, typeOfAnswers, typeOfTime } from './content/content.jsx'
import { Select } from './components/select.jsx'
import { Button } from './components/button.jsx'
import './QuizSettingsScreen.css'

export const QuizSettingsScreen = () => {
  return (
    <div className="container">
      <InputNumberOfQuestions className="InputNumberOfQuestions SettingScreen" />
      <Select props={typeOfCategory} className="SettingScreen" />
      <Select props={typeOfDifficulty} className="SettingScreen" />
      <Select props={typeOfAnswers} className="SettingScreen" />
      <Select props={typeOfTime} className="SettingScreen" />
      <Button props={'Start quiz'} className="SettingScreen" />
      <Button props={'See my statistics'} className="SettingScreen" />
    </div>
  )
}