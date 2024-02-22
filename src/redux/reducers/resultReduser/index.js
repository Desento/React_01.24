import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalQuestions: 0,
    correctAnswers: 0,
    categories: {},
    answerTypes: {},
    difficulties: {},
    quizDuration: 0
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setTotalQuestions(state) {
            state.totalQuestions++;
        },
        setCorrectAnswers(state) {
            state.correctAnswers++;
        },
        setCategoryCount(state, action) {
            const { category } = action.payload;
            state.categories[category] = (state.categories[category] || 0) + 1;
        },
        setAnswerTypeCount(state, action) {
            const { answerType } = action.payload;
            state.answerTypes[answerType] = (state.answerTypes[answerType] || 0) + 1;
        },
        setAnswerDifficulties(state, action) {
            const { difficulty } = action.payload;
            state.difficulties[difficulty] = (state.difficulties[difficulty] || 0) + 1;
        },
        setQuizDuration(state, action) {
            state.quizDuration = action.payload;
        },
        resetResult(state) {
            return { ...initialState };
        }
    }
});


export const resultsReducer = resultsSlice.reducer;

export const {
    setTotalQuestions,
    setCorrectAnswers,
    setCategoryCount,
    setAnswerTypeCount,
    setAnswerDifficulties,
    setQuizDuration,
    resetResult
} = resultsSlice.actions;
