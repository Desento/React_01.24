import { result } from './content/content'
import { Button } from './components/button'
import './QuizResultScreen.css'

export const QuizResultScreen = () => {
  return (
    <div className="container">
      <div className="quiz-result">
        <h2>Thank you for completing this quiz!</h2>
        <p>{`You answered ${result.correctAnswers} out of ${result.totalQuestions} questions correctly.`}</p>
        <p>{`Quiz Configuration: Type - ${result.quizConfig.type}, Category - ${result.quizConfig.category}, Difficulty - ${result.quizConfig.difficulty}, Time - ${result.quizConfig.time} seconds`}</p>
        <p>{`Time taken to answer all questions: ${result.quizConfig.time} seconds`}</p>

        <Button text="Restart" className="qiuz-result-button"></Button>
        <Button text="Choose another quiz" className="qiuz-result-button"></Button>
      </div>
    </div>
  )
}
