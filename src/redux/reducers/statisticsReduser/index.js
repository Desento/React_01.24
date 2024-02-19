import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalQuestions: 0,
    correctAnswers: 0,
    categories: {},
    answerTypes: {},
    difficulties: {}
}

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        setStatistics(state, action) {
            const newResults = action.payload;
            state.totalQuestions += newResults.totalQuestions;
            state.correctAnswers += newResults.correctAnswers;
            Object.entries(newResults.categories).forEach(([category, count]) => {
                state.categories[category] = (state.categories[category] || 0) + count;
            });
            Object.entries(newResults.answerTypes).forEach(([type, count]) => {
                state.answerTypes[type] = (state.answerTypes[type] || 0) + count;
            });
            Object.entries(newResults.difficulties).forEach(([difficulty, count]) => {
                state.difficulties[difficulty] = (state.difficulties[difficulty] || 0) + count;
            });
        },
        setResetStatistics(state) {
            return { ...initialState }
        }
    }
});

export const statisticsReducer = statisticsSlice.reducer
export const { setStatistics, setResetStatistics } = statisticsSlice.actions;