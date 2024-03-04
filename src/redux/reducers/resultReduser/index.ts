import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultState, SetCorrectAnswerPayload } from "../../../types/interfaces";


const initialState: ResultState = {
    showResult: false,
    correctAnswer: ''
}

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setShowResult(state) {
            state.showResult = true
        },
        setCorrectAnswer(state, action: PayloadAction<SetCorrectAnswerPayload>) {
            state.correctAnswer = action.payload.correctAnswer;
        },
        resetResult() {
            return initialState;
        }
    }
});


export const resultReducer = resultSlice.reducer;

export const {
    setShowResult,
    setCorrectAnswer,
    resetResult
} = resultSlice.actions;
