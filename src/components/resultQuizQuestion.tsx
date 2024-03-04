import { useSelector } from "react-redux";
import { RootState } from "../redux";

export const ResultQuizQuestion = () => {
    const state = useSelector((state: RootState) => state.result);
    return (
        <div className="result-quiz-question">
            {state.showResult && (
                <p>{state.correctAnswer}</p>
            )}
        </div>
    );
};
