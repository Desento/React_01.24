import { useSelector } from "react-redux"


export const ResultQuizQuestion = () => {
    const state = useSelector((state) => state.result)
    return (
        <div className="result-quiz-question">
            {state.showResult && (
                <p>{state.correctAnswer}</p>
            )}
        </div>
    )
}