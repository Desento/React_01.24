import { QuizSettingsScreen } from './QuizSettingsScreen.jsx'
import { MainQuizScreen } from './MainQiuzScreen.jsx'
import { QuizResultScreen } from './QuizResultScreen.jsx'
import './App.css'

export const App = () => {
  return (
    <div>
      <QuizSettingsScreen />
      <MainQuizScreen />
      <QuizResultScreen />
    </div>
  )
}
