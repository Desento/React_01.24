import { InputNumberOfQuestions } from './components/input.jsx'
import { typeOfCategory, typeOfDifficulty, typeOfAnswers, typeOfTime } from './content/content.jsx'
import { Select } from './components/select.jsx'
import { Button } from './components/button.jsx'
import './components/style.css'

export const App = () => {
  return (
    <div className="container">
      <InputNumberOfQuestions className="inputMain" />
      <Select props={typeOfCategory} className="selectMain" />
      <Select props={typeOfDifficulty} className="selectMain" />
      <Select props={typeOfAnswers} className="selectMain" />
      <Select props={typeOfTime} className="selectMain" />
      <Button props={'Start quiz'} className="buttonMain" />
      <Button props={'See my statistics'} className="buttonMain" />
    </div>
  )
}