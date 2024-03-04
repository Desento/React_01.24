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
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configurationReducer } from './reducers/configurationReduser';
import { resultsReducer } from './reducers/resultsReduser';
import { resultReducer } from './reducers/resultReduser';
import { statisticsReducer } from './reducers/statisticsReduser';
import { quizApi } from './reducers/questionsQuery/reduser';
import { ConfigurationState, ResultState, ResultsState, StatisticsState } from '../types/interfaces';

export interface RootState {
    configuration: ConfigurationState;
    result: ResultState;
    results: ResultsState;
    statistics: StatisticsState;
}

const combinedReducers = combineReducers({
    configuration: configurationReducer,
    [quizApi.reducerPath]: quizApi.reducer,
    result: resultReducer,
    results: resultsReducer,
    statistics: statisticsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const RootStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(quizApi.middleware as any),
});

export const persistor = persistStore(RootStore);

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
