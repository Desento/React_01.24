
import { configurationReducer } from './reducers/configurationReduser'
import { resultsReducer } from './reducers/resultsReduser'
import { resultReducer } from './reducers/resultReduser'
import { statisticsReducer } from './reducers/statisticsReduser'
import { quizApi } from './reducers/questionsQuery/reduser'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const combinedReducers = combineReducers({
    configuration: configurationReducer,
    [quizApi.reducerPath]: quizApi.reducer,
    result: resultReducer,
    results: resultsReducer,
    statistics: statisticsReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (gDM) =>
        gDM({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(quizApi.middleware)
})

export const persistor = persistStore(store)

