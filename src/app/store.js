import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';
import darkReducer from '../features/task/darmodeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'tasksReducer',
    // stateReconcilier: autoMergeLevel2
}

const reducer = combineReducers({
    task: tasksReducer,
    darkmode: darkReducer,
})
 
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true,
    // serializableCheck: {
    //     ignoreActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST]
    // }
    // }).concat()
    middleware: [thunk]
})
