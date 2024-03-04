import { Button } from './components/button'
import './QuizResultScreen.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from './navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from './redux/reducers/configurationReduser/index.js'
import { setStatistics } from './redux/reducers/statisticsReduser/index.js'
import { resetResults } from './redux/reducers/resultsReduser/index.js'
import { RootState } from './redux';

export const QuizResultScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.configuration);
  const results = useSelector((state: RootState) => state.results);

  const handleRestartQuiz = () => {
    dispatch(resetResults());
    navigate(ROUTES.quiz);
  };
  const handleGoQuiz = () => {
    dispatch(setStatistics(results));
    dispatch(resetState());
    dispatch(resetResults());
    navigate(ROUTES.root);
  };

  const refactoring = () => {
    return {
      type: state.type === '' ? 'Any' : state.type,
      category: state.category === '' ? 'Any' : state.category,
      difficulty: state.difficulty === '' ? 'Any' : state.difficulty,
    };
  };

  return (
    <div className="container">
      <div className="quiz-result">
        <h2>Thank you for completing this quiz!</h2>
        <p>{`You answered ${results.correctAnswers} out of ${state.amount} questions correctly.`}</p>
        <p>{`Quiz Configuration: Type - ${refactoring().type}, Category - ${refactoring().category
          }, Difficulty - ${refactoring().difficulty}, Time - ${Number(state.time) * 60} seconds`}</p>
        <p>{`Time taken to answer all questions: ${results.quizDuration} seconds`}</p>
        <div className="buttons">
          <Button text="Restart" className="quiz-button" onClick={handleRestartQuiz}></Button>
          <Button
            text="Choose another quiz"
            className="quiz-button"
            onClick={handleGoQuiz}></Button>
        </div>
      </div>
    </div>
  );
};
