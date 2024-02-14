import { configureStore } from '@reduxjs/toolkit'
import { configurationReducer } from './reducers/configurationReduser'

const combinedReduser = {
    configuration: configurationReducer,
    // questions: questionsReduser,
    // result: resultReduser
}

export const store = configureStore({
    reducer: combinedReduser
})