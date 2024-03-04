import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ConfigurationState } from "../../../types/interfaces"

const initialState: ConfigurationState = {
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
        setAmount(state, action: PayloadAction<string>) {
            state.amount = +action.payload
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
        setDifficulty(state, action: PayloadAction<string>) {
            state.difficulty = action.payload
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload
        },
        setTime(state, action: PayloadAction<string>) {
            state.time = action.payload
        },
        resetState(state) {
            return { ...initialState };
        }
    }
})

export const configurationReducer = configurationSlice.reducer

export const { setAmount, setCategory, setDifficulty, setType, setTime, resetState } = configurationSlice.actions
