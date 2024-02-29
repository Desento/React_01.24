import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        setCorrectAnswer(state, action) {
            state.correctAnswer = action.payload;
        },
        resetResult(state) {
            return { ...initialState };
        }
    }
});


export const resultReducer = resultSlice.reducer;

export const {
    setShowResult,
    setCorrectAnswer,
    resetResult
} = resultSlice.actions;
