import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: '',
    category: '',
    difficulty: '',
    type: '',
    time: ''
}

const configurationSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        setAmount(state, action) {
            state.amount = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
        setDifficulty(state, action) {
            state.difficulty = action.payload
        },
        setType(state, action) {
            state.type = action.payload
        },
        setTime(state, action) {
            state.time = action.payload
        },
    }
})

export const configurationReducer = configurationSlice.reducer

export const { setAmount, setCategory, setDifficulty, setType, setTime } = configurationSlice.actions