import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { ResultQuizQuestionProps } from "../types/interfaces";

export const ResultQuizQuestion: React.FC<ResultQuizQuestionProps> = ({ timerExpired }) => {
    const state = useSelector((state: RootState) => state.result);

    return (
        <div className="result-quiz-question">
            {timerExpired && <div>Time is expired!</div>}
            {state.showResult && (
                <p>{state.correctAnswer}</p>
            )}
        </div>
    );
};
