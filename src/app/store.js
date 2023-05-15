import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';
import darkReducer from '../features/task/darmodeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'tasksReducer'
}

const reducer = combineReducers({
    task: tasksReducer,
    darkmode: darkReducer,
})
 
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer,
})
