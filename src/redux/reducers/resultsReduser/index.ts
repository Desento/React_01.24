import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultsState, SetAnswerDifficultiesPayload, SetAnswerTypeCountPayload, SetCategoryCountPayload } from "../../../types/interfaces";


const initialState: ResultsState = {
    totalQuestions: 0,
    correctAnswers: 0,
    categories: {},
    answerTypes: {},
    difficulties: {},
    quizDuration: 0,
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
        setCategoryCount(state, action: PayloadAction<SetCategoryCountPayload>) {
            const { category } = action.payload;
            state.categories[category] = (state.categories[category] || 0) + 1;
        },
        setAnswerTypeCount(state, action: PayloadAction<SetAnswerTypeCountPayload>) {
            const { answerType } = action.payload;
            state.answerTypes[answerType] = (state.answerTypes[answerType] || 0) + 1;
        },
        setAnswerDifficulties(state, action: PayloadAction<SetAnswerDifficultiesPayload>) {
            const { difficulty } = action.payload;
            state.difficulties[difficulty] = (state.difficulties[difficulty] || 0) + 1;
        },
        setQuizDuration(state, action: PayloadAction<number>) {
            state.quizDuration = action.payload;
        },
        resetResults() {
            return initialState;
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
    resetResults
} = resultsSlice.actions;
