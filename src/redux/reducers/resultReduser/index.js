import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalQuestions: 0,
    correctAnswers: 0,
    categories: {},
    answerTypes: {},
    quizDuration: 0
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        incrementTotalQuestions(state) {
            state.totalQuestions++;
        },
        incrementCorrectAnswers(state) {
            state.correctAnswers++;
        },
        incrementCategoryCount(state, action) {
            const { category } = action.payload;
            state.categories[category] = (state.categories[category] || 0) + 1;
        },
        incrementAnswerTypeCount(state, action) {
            const { answerType } = action.payload;
            state.answerTypes[answerType] = (state.answerTypes[answerType] || 0) + 1;
        },
        addQuizDuration(state, action) {
            state.quizDuration = action.payload;
        },
        resetResult(state) {
            return { ...initialState };
        }
    }
});


export const resultsReducer = resultsSlice.reducer;

export const {
    incrementTotalQuestions,
    incrementCorrectAnswers,
    incrementCategoryCount,
    incrementAnswerTypeCount,
    addQuizDuration,
    resetResult
} = resultsSlice.actions;
